import { Injectable } from '@nestjs/common';

export type WorkOrderStatus = 'new' | 'under_review' | 'assigned' | 'scheduled' | 'in_progress' | 'waiting' | 'completed' | 'closed' | 'cancelled';
export type Priority = 'low' | 'medium' | 'high' | 'emergency';

export interface WorkOrder {
  id: string;
  organizationId: string;
  propertyId: string;
  propertyName: string;
  unitId?: string;
  unitNumber?: string;
  requesterName?: string;
  category: string;
  priority: Priority;
  status: WorkOrderStatus;
  description: string;
  requestedDate: string;
  completedDate?: string;
  estimatedCost?: number;
  actualCost?: number;
  assignedTo?: string;
  createdAt: string;
}

@Injectable()
export class WorkOrdersService {
  private workOrders: WorkOrder[] = [
    {
      id: 'wo-001',
      organizationId: 'org-001',
      propertyId: 'prop-001',
      propertyName: 'Sunset Apartments',
      unitId: 'unit-001',
      unitNumber: '101',
      requesterName: 'Marcus Rivera',
      category: 'Plumbing',
      priority: 'high',
      status: 'in_progress',
      description: 'Kitchen faucet leaking under the sink. Water pooling in cabinet.',
      requestedDate: '2026-05-28T10:00:00Z',
      estimatedCost: 150,
      assignedTo: 'Dave Plumbing',
      createdAt: '2026-05-28T10:00:00Z',
    },
    {
      id: 'wo-002',
      organizationId: 'org-001',
      propertyId: 'prop-005',
      propertyName: 'Congress Studios',
      unitId: 'unit-020',
      unitNumber: '204',
      requesterName: 'Priya Patel',
      category: 'HVAC',
      priority: 'medium',
      status: 'assigned',
      description: 'AC not cooling properly. Thermostat set to 72 but room stays at 80+.',
      requestedDate: '2026-05-30T14:00:00Z',
      estimatedCost: 300,
      assignedTo: 'Cool Air Services',
      createdAt: '2026-05-30T14:00:00Z',
    },
    {
      id: 'wo-003',
      organizationId: 'org-001',
      propertyId: 'prop-001',
      propertyName: 'Sunset Apartments',
      unitId: 'unit-005',
      unitNumber: '105',
      requesterName: 'Jamie Chen',
      category: 'Electrical',
      priority: 'emergency',
      status: 'scheduled',
      description: 'Outlet in bathroom sparking when plugging in devices. Possible short circuit.',
      requestedDate: '2026-06-01T09:00:00Z',
      estimatedCost: 400,
      assignedTo: 'Bright Electric Co.',
      createdAt: '2026-06-01T09:00:00Z',
    },
    {
      id: 'wo-004',
      organizationId: 'org-001',
      propertyId: 'prop-004',
      propertyName: 'Riverside Fourplex',
      unitId: 'unit-030',
      unitNumber: 'Unit A',
      requesterName: 'Sam Taylor',
      category: 'Appliance',
      priority: 'low',
      status: 'new',
      description: 'Dishwasher not draining completely. Standing water after each cycle.',
      requestedDate: '2026-06-02T11:00:00Z',
      createdAt: '2026-06-02T11:00:00Z',
    },
    {
      id: 'wo-005',
      organizationId: 'org-001',
      propertyId: 'prop-002',
      propertyName: 'Oak Park Duplex',
      unitId: 'unit-040',
      unitNumber: 'Unit B',
      requesterName: 'Dana Kim',
      category: 'Exterior',
      priority: 'medium',
      status: 'new',
      description: 'Fence gate broken. Latch damaged, gate will not close properly.',
      requestedDate: '2026-06-03T08:00:00Z',
      createdAt: '2026-06-03T08:00:00Z',
    },
    {
      id: 'wo-006',
      organizationId: 'org-001',
      propertyId: 'prop-005',
      propertyName: 'Congress Studios',
      unitId: 'unit-022',
      unitNumber: '301',
      requesterName: 'Alex Nguyen',
      category: 'Plumbing',
      priority: 'high',
      status: 'completed',
      description: 'Shower drain completely clogged. No drainage at all.',
      requestedDate: '2026-05-20T10:00:00Z',
      completedDate: '2026-05-21T15:00:00Z',
      estimatedCost: 120,
      actualCost: 95,
      assignedTo: 'Dave Plumbing',
      createdAt: '2026-05-20T10:00:00Z',
    },
    {
      id: 'wo-007',
      organizationId: 'org-001',
      propertyId: 'prop-003',
      propertyName: 'Highland House',
      category: 'General',
      priority: 'low',
      status: 'under_review',
      description: 'Repaint exterior — tenant vacated. Walls need cleaning and touch-up.',
      requestedDate: '2026-06-03T16:00:00Z',
      estimatedCost: 800,
      createdAt: '2026-06-03T16:00:00Z',
    },
  ];

  findAll(): WorkOrder[] {
    return this.workOrders;
  }

  findOne(id: string): WorkOrder | undefined {
    return this.workOrders.find((w) => w.id === id);
  }

  create(data: Partial<WorkOrder>): WorkOrder {
    const workOrder: WorkOrder = {
      id: `wo-${Date.now()}`,
      organizationId: data.organizationId || 'org-001',
      propertyId: data.propertyId || '',
      propertyName: data.propertyName || '',
      unitId: data.unitId,
      unitNumber: data.unitNumber,
      requesterName: data.requesterName,
      category: data.category || 'General',
      priority: data.priority || 'medium',
      status: 'new',
      description: data.description || '',
      requestedDate: new Date().toISOString(),
      estimatedCost: data.estimatedCost,
      assignedTo: data.assignedTo,
      createdAt: new Date().toISOString(),
    };
    this.workOrders.push(workOrder);
    return workOrder;
  }

  getSummary() {
    const open = this.workOrders.filter(
      (w) => !['completed', 'closed', 'cancelled'].includes(w.status),
    );
    return {
      total: this.workOrders.length,
      open: open.length,
      byPriority: {
        emergency: open.filter((w) => w.priority === 'emergency').length,
        high: open.filter((w) => w.priority === 'high').length,
        medium: open.filter((w) => w.priority === 'medium').length,
        low: open.filter((w) => w.priority === 'low').length,
      },
      byStatus: {
        new: this.workOrders.filter((w) => w.status === 'new').length,
        in_progress: this.workOrders.filter((w) => w.status === 'in_progress').length,
        completed: this.workOrders.filter((w) => w.status === 'completed').length,
      },
    };
  }
}
