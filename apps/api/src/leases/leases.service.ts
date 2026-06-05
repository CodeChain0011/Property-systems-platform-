import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LeaseStatus } from '@prisma/client';

@Injectable()
export class LeasesService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(organizationId?: string) {
    return this.prisma.lease.findMany({
      where: organizationId ? { organizationId } : {},
      include: {
        property: { select: { propertyName: true, streetAddress: true } },
        unit: { select: { unitNumber: true } },
        primaryTenant: { select: { displayName: true, email: true, phone: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const lease = await this.prisma.lease.findUnique({
      where: { id },
      include: {
        property: true,
        unit: true,
        primaryTenant: true,
      },
    });
    if (!lease) throw new NotFoundException('Lease not found');
    return lease;
  }

  create(data: {
    organizationId: string;
    propertyId: string;
    unitId: string;
    primaryTenantId?: string;
    leaseType?: string;
    startDate: Date | string;
    endDate?: Date | string;
    monthlyRent?: number;
    securityDepositAmount?: number;
    paymentDueDay?: number;
  }) {
    return this.prisma.lease.create({ data });
  }

  getExpiringLeases(withinDays = 60, organizationId?: string) {
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() + withinDays);
    return this.prisma.lease.findMany({
      where: {
        leaseStatus: LeaseStatus.active,
        endDate: { not: null, lte: cutoff },
        ...(organizationId ? { organizationId } : {}),
      },
      include: {
        property: { select: { propertyName: true } },
        unit: { select: { unitNumber: true } },
        primaryTenant: { select: { displayName: true, email: true } },
      },
      orderBy: { endDate: 'asc' },
    });
  }
}
