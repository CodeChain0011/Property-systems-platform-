import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { RecordStatus } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    const person = await this.prisma.person.findFirst({
      where: { email, status: RecordStatus.active },
      include: { roles: { where: { status: RecordStatus.active } } },
    });

    if (!person?.passwordHash) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const valid = await bcrypt.compare(password, person.passwordHash);
    if (!valid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const primaryRole = person.roles[0] ?? null;
    const accessToken = this.signAccessToken(person.id, person.organizationId, primaryRole);
    const refreshToken = await this.createRefreshToken(person.id);

    return {
      access_token: accessToken,
      person_id: person.id,
      role_type: primaryRole?.roleType ?? null,
      expires_in: 900,
      available_roles: person.roles.map((r) => ({ id: r.id, roleType: r.roleType })),
      refresh_token: refreshToken,
    };
  }

  async refresh(rawToken: string) {
    const tokenHash = this.hashToken(rawToken);

    const record = await this.prisma.refreshToken.findFirst({
      where: { tokenHash, revokedAt: null, expiresAt: { gt: new Date() } },
      include: {
        person: { include: { roles: { where: { status: RecordStatus.active } } } },
      },
    });

    if (!record) {
      throw new UnauthorizedException('AUTH_REFRESH_EXPIRED');
    }

    await this.prisma.refreshToken.update({
      where: { id: record.id },
      data: { revokedAt: new Date() },
    });

    const person = record.person;
    const primaryRole = person.roles[0] ?? null;
    const accessToken = this.signAccessToken(person.id, person.organizationId, primaryRole);
    const newRefreshToken = await this.createRefreshToken(person.id);

    return {
      access_token: accessToken,
      expires_in: 900,
      refresh_token: newRefreshToken,
    };
  }

  async logout(personId: string, rawToken?: string) {
    if (rawToken) {
      const tokenHash = this.hashToken(rawToken);
      await this.prisma.refreshToken.updateMany({
        where: { personId, tokenHash, revokedAt: null },
        data: { revokedAt: new Date() },
      });
    } else {
      await this.prisma.refreshToken.updateMany({
        where: { personId, revokedAt: null },
        data: { revokedAt: new Date() },
      });
    }
  }

  async getMe(personId: string) {
    const person = await this.prisma.person.findUnique({
      where: { id: personId },
      include: { roles: { where: { status: RecordStatus.active } } },
    });

    if (!person) throw new UnauthorizedException();

    const primaryRole = person.roles[0] ?? null;
    return {
      person_id: person.id,
      display_name: person.displayName,
      email: person.email,
      org_id: person.organizationId,
      role_type: primaryRole?.roleType ?? null,
      perm: primaryRole?.permissionGroup ?? null,
    };
  }

  private signAccessToken(
    personId: string,
    organizationId: string | null,
    role: { roleType: string; permissionGroup: string | null } | null,
  ): string {
    return this.jwtService.sign({
      sub: personId,
      org: organizationId,
      role: role?.roleType ?? null,
      perm: role?.permissionGroup ?? null,
      jti: crypto.randomUUID(),
    });
  }

  private async createRefreshToken(personId: string): Promise<string> {
    const raw = crypto.randomBytes(32).toString('hex');
    const tokenHash = this.hashToken(raw);

    await this.prisma.refreshToken.create({
      data: {
        personId,
        tokenHash,
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      },
    });

    return raw;
  }

  private hashToken(raw: string): string {
    return crypto.createHash('sha256').update(raw).digest('hex');
  }
}
