import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RecordStatus } from '@prisma/client';

@Injectable()
export class PropertiesService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(organizationId?: string) {
    return this.prisma.property.findMany({
      where: {
        status: RecordStatus.active,
        ...(organizationId ? { organizationId } : {}),
      },
      include: {
        _count: { select: { units: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const property = await this.prisma.property.findUnique({
      where: { id },
      include: {
        units: {
          where: { status: RecordStatus.active },
          orderBy: { unitNumber: 'asc' },
        },
      },
    });
    if (!property) throw new NotFoundException('Property not found');
    return property;
  }

  create(data: {
    organizationId: string;
    propertyName?: string;
    propertyType?: string;
    streetAddress: string;
    city?: string;
    state?: string;
    postalCode?: string;
    totalUnits?: number;
  }) {
    return this.prisma.property.create({ data });
  }

  async getSummary(organizationId?: string) {
    const where = {
      status: RecordStatus.active,
      ...(organizationId ? { organizationId } : {}),
    };
    const [properties, units] = await Promise.all([
      this.prisma.property.findMany({ where, select: { id: true, totalUnits: true } }),
      this.prisma.unit.findMany({
        where: { property: { ...where }, status: RecordStatus.active },
        select: { occupancyStatus: true },
      }),
    ]);
    const totalUnits = properties.reduce((sum, p) => sum + p.totalUnits, 0);
    const occupiedUnits = units.filter((u) => u.occupancyStatus === 'occupied').length;
    return {
      totalProperties: properties.length,
      totalUnits,
      occupiedUnits,
      vacantUnits: totalUnits - occupiedUnits,
      occupancyRate: totalUnits > 0 ? Math.round((occupiedUnits / totalUnits) * 100) : 0,
    };
  }
}
