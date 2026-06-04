import { Injectable } from '@nestjs/common';

export interface Lease {
  id: string;
  organizationId: string;
  propertyId: string;
  propertyName: string;
  unitId: string;
  unitNumber: string;
  tenantName: string;
  tenantEmail: string;
  tenantPhone?: string;
  leaseType: string;
  startDate: string;
  endDate: string;
  monthlyRent: number;
  securityDeposit: number;
  paymentDueDay: number;
  leaseStatus: string;
  createdAt: string;
}

@Injectable()
export class LeasesService {
  private leases: Lease[] = [
    {
      id: 'lease-001',
      organizationId: 'org-001',
      propertyId: 'prop-001',
      propertyName: 'Sunset Apartments',
      unitId: 'unit-001',
      unitNumber: '101',
      tenantName: 'Marcus Rivera',
      tenantEmail: 'marcus.rivera@email.com',
      tenantPhone: '(512) 555-0101',
      leaseType: 'fixed',
      startDate: '2025-09-01',
      endDate: '2026-08-31',
      monthlyRent: 1750,
      securityDeposit: 1750,
      paymentDueDay: 1,
      leaseStatus: 'active',
      createdAt: '2025-08-15T00:00:00Z',
    },
    {
      id: 'lease-002',
      organizationId: 'org-001',
      propertyId: 'prop-001',
      propertyName: 'Sunset Apartments',
      unitId: 'unit-002',
      unitNumber: '102',
      tenantName: 'Sofia Hernandez',
      tenantEmail: 'sofia.h@email.com',
      tenantPhone: '(512) 555-0102',
      leaseType: 'fixed',
      startDate: '2025-11-01',
      endDate: '2026-10-31',
      monthlyRent: 1850,
      securityDeposit: 1850,
      paymentDueDay: 1,
      leaseStatus: 'active',
      createdAt: '2025-10-20T00:00:00Z',
    },
    {
      id: 'lease-003',
      organizationId: 'org-001',
      propertyId: 'prop-001',
      propertyName: 'Sunset Apartments',
      unitId: 'unit-003',
      unitNumber: '103',
      tenantName: 'James Okafor',
      tenantEmail: 'james.okafor@email.com',
      tenantPhone: '(512) 555-0103',
      leaseType: 'fixed',
      startDate: '2026-01-01',
      endDate: '2026-12-31',
      monthlyRent: 1800,
      securityDeposit: 1800,
      paymentDueDay: 1,
      leaseStatus: 'active',
      createdAt: '2025-12-10T00:00:00Z',
    },
    {
      id: 'lease-004',
      organizationId: 'org-001',
      propertyId: 'prop-002',
      propertyName: 'Oak Park Duplex',
      unitId: 'unit-040',
      unitNumber: 'Unit A',
      tenantName: 'Dana Kim',
      tenantEmail: 'dana.kim@email.com',
      tenantPhone: '(512) 555-0201',
      leaseType: 'fixed',
      startDate: '2025-07-01',
      endDate: '2026-06-30',
      monthlyRent: 1900,
      securityDeposit: 1900,
      paymentDueDay: 1,
      leaseStatus: 'active',
      createdAt: '2025-06-15T00:00:00Z',
    },
    {
      id: 'lease-005',
      organizationId: 'org-001',
      propertyId: 'prop-002',
      propertyName: 'Oak Park Duplex',
      unitId: 'unit-041',
      unitNumber: 'Unit B',
      tenantName: 'Chris Walters',
      tenantEmail: 'c.walters@email.com',
      tenantPhone: '(512) 555-0202',
      leaseType: 'month_to_month',
      startDate: '2024-03-01',
      endDate: '2026-06-30',
      monthlyRent: 1950,
      securityDeposit: 1950,
      paymentDueDay: 1,
      leaseStatus: 'active',
      createdAt: '2024-02-20T00:00:00Z',
    },
    {
      id: 'lease-006',
      organizationId: 'org-001',
      propertyId: 'prop-003',
      propertyName: 'Highland House',
      unitId: 'unit-050',
      unitNumber: 'Main',
      tenantName: 'Rachel Nguyen',
      tenantEmail: 'rachel.n@email.com',
      tenantPhone: '(512) 555-0301',
      leaseType: 'fixed',
      startDate: '2025-06-01',
      endDate: '2026-05-31',
      monthlyRent: 2800,
      securityDeposit: 2800,
      paymentDueDay: 5,
      leaseStatus: 'active',
      createdAt: '2025-05-10T00:00:00Z',
    },
    {
      id: 'lease-007',
      organizationId: 'org-001',
      propertyId: 'prop-004',
      propertyName: 'Riverside Fourplex',
      unitId: 'unit-060',
      unitNumber: 'Unit A',
      tenantName: 'Sam Taylor',
      tenantEmail: 'sam.taylor@email.com',
      tenantPhone: '(512) 555-0401',
      leaseType: 'fixed',
      startDate: '2025-10-01',
      endDate: '2026-09-30',
      monthlyRent: 1800,
      securityDeposit: 1800,
      paymentDueDay: 1,
      leaseStatus: 'active',
      createdAt: '2025-09-15T00:00:00Z',
    },
    {
      id: 'lease-008',
      organizationId: 'org-001',
      propertyId: 'prop-004',
      propertyName: 'Riverside Fourplex',
      unitId: 'unit-061',
      unitNumber: 'Unit B',
      tenantName: 'Mia Johnson',
      tenantEmail: 'mia.j@email.com',
      tenantPhone: '(512) 555-0402',
      leaseType: 'fixed',
      startDate: '2025-08-01',
      endDate: '2026-07-31',
      monthlyRent: 1800,
      securityDeposit: 1800,
      paymentDueDay: 1,
      leaseStatus: 'active',
      createdAt: '2025-07-20T00:00:00Z',
    },
    {
      id: 'lease-009',
      organizationId: 'org-001',
      propertyId: 'prop-004',
      propertyName: 'Riverside Fourplex',
      unitId: 'unit-062',
      unitNumber: 'Unit C',
      tenantName: 'Tom Park',
      tenantEmail: 'tom.park@email.com',
      tenantPhone: '(512) 555-0403',
      leaseType: 'fixed',
      startDate: '2025-12-01',
      endDate: '2026-11-30',
      monthlyRent: 1850,
      securityDeposit: 1850,
      paymentDueDay: 1,
      leaseStatus: 'active',
      createdAt: '2025-11-15T00:00:00Z',
    },
    {
      id: 'lease-010',
      organizationId: 'org-001',
      propertyId: 'prop-005',
      propertyName: 'Congress Studios',
      unitId: 'unit-020',
      unitNumber: '204',
      tenantName: 'Priya Patel',
      tenantEmail: 'priya.patel@email.com',
      tenantPhone: '(512) 555-0501',
      leaseType: 'fixed',
      startDate: '2025-09-01',
      endDate: '2026-08-31',
      monthlyRent: 1650,
      securityDeposit: 1650,
      paymentDueDay: 1,
      leaseStatus: 'active',
      createdAt: '2025-08-20T00:00:00Z',
    },
  ];

  findAll(): Lease[] {
    return this.leases;
  }

  findOne(id: string): Lease | undefined {
    return this.leases.find((l) => l.id === id);
  }

  create(data: Partial<Lease>): Lease {
    const lease: Lease = {
      id: `lease-${Date.now()}`,
      organizationId: data.organizationId || 'org-001',
      propertyId: data.propertyId || '',
      propertyName: data.propertyName || '',
      unitId: data.unitId || '',
      unitNumber: data.unitNumber || '',
      tenantName: data.tenantName || '',
      tenantEmail: data.tenantEmail || '',
      tenantPhone: data.tenantPhone,
      leaseType: data.leaseType || 'fixed',
      startDate: data.startDate || new Date().toISOString().split('T')[0],
      endDate: data.endDate || '',
      monthlyRent: data.monthlyRent || 0,
      securityDeposit: data.securityDeposit || 0,
      paymentDueDay: data.paymentDueDay || 1,
      leaseStatus: 'draft',
      createdAt: new Date().toISOString(),
    };
    this.leases.push(lease);
    return lease;
  }

  getExpiringLeases(withinDays = 60): Lease[] {
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() + withinDays);
    return this.leases.filter((l) => {
      const end = new Date(l.endDate);
      return end <= cutoff && l.leaseStatus === 'active';
    });
  }
}
