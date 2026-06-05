import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { WorkOrderStatus, Priority } from '@prisma/client';

@Injectable()
export class WorkOrdersService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(organizationId?: string) {
    return this.prisma.workOrder.findMany({
      where: organizationId ? { organizationId } : {},
      include: {
        property: { select: { propertyName: true, streetAddress: true } },
        unit: { select: { unitNumber: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const wo = await this.prisma.workOrder.findUnique({
      where: { id },
      include: { property: true, unit: true },
    });
    if (!wo) throw new NotFoundException('Work order not found');
    return wo;
  }

  create(data: {
    organizationId: string;
    propertyId: string;
    unitId?: string;
    requesterPersonId?: string;
    category?: string;
    priority?: Priority;
    description: string;
    estimatedCost?: number;
  }) {
    return this.prisma.workOrder.create({ data });
  }

  async getSummary(organizationId?: string) {
    const where = organizationId ? { organizationId } : {};
    const terminal: WorkOrderStatus[] = [
      WorkOrderStatus.completed,
      WorkOrderStatus.closed,
      WorkOrderStatus.cancelled,
    ];
    const [total, open] = await Promise.all([
      this.prisma.workOrder.count({ where }),
      this.prisma.workOrder.findMany({
        where: { ...where, status: { notIn: terminal } },
        select: { priority: true, status: true },
      }),
    ]);
    return {
      total,
      open: open.length,
      byPriority: {
        emergency: open.filter((w) => w.priority === Priority.emergency).length,
        high: open.filter((w) => w.priority === Priority.high).length,
        medium: open.filter((w) => w.priority === Priority.medium).length,
        low: open.filter((w) => w.priority === Priority.low).length,
      },
    };
  }
}
