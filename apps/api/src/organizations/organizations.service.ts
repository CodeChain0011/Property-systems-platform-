import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RecordStatus, RoleType } from '@prisma/client';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';

@Injectable()
export class OrganizationsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(organizationId?: string) {
    return this.prisma.organization.findMany({
      where: {
        status: RecordStatus.active,
        ...(organizationId ? { id: organizationId } : {}),
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const org = await this.prisma.organization.findUnique({ where: { id } });
    if (!org) throw new NotFoundException(`Organization ${id} not found`);
    return org;
  }

  async create(data: CreateOrganizationDto, actorPersonId: string) {
    const org = await this.prisma.organization.create({ data });

    await Promise.all([
      this.prisma.role.create({
        data: {
          organizationId: org.id,
          personId: actorPersonId,
          roleType: RoleType.owner,
          permissionGroup: 'full_access',
        },
      }),
      this.prisma.auditLog.create({
        data: {
          organizationId: org.id,
          actorPersonId,
          actionType: 'organization.created',
          entityType: 'Organization',
          entityId: org.id,
          afterValue: org as any,
        },
      }),
    ]);

    return org;
  }

  async update(id: string, data: UpdateOrganizationDto, actorPersonId: string) {
    const before = await this.prisma.organization.findUnique({ where: { id } });
    if (!before) throw new NotFoundException(`Organization ${id} not found`);

    const org = await this.prisma.organization.update({ where: { id }, data });

    await this.prisma.auditLog.create({
      data: {
        organizationId: id,
        actorPersonId,
        actionType: 'organization.updated',
        entityType: 'Organization',
        entityId: id,
        beforeValue: before as any,
        afterValue: org as any,
      },
    });

    return org;
  }
}
