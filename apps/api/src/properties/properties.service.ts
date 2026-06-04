import { Injectable } from '@nestjs/common';

export interface Property {
  id: string;
  organizationId: string;
  propertyName: string;
  propertyType: string;
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  totalUnits: number;
  occupiedUnits: number;
  monthlyRevenue: number;
  status: string;
  createdAt: string;
}

@Injectable()
export class PropertiesService {
  private properties: Property[] = [
    {
      id: 'prop-001',
      organizationId: 'org-001',
      propertyName: 'Sunset Apartments',
      propertyType: 'apartment',
      streetAddress: '78 Sunset Blvd',
      city: 'Austin',
      state: 'TX',
      postalCode: '78701',
      country: 'US',
      totalUnits: 8,
      occupiedUnits: 7,
      monthlyRevenue: 14000,
      status: 'active',
      createdAt: '2023-01-15T00:00:00Z',
    },
    {
      id: 'prop-002',
      organizationId: 'org-001',
      propertyName: 'Oak Park Duplex',
      propertyType: 'duplex',
      streetAddress: '456 Oak Ave',
      city: 'Austin',
      state: 'TX',
      postalCode: '78702',
      country: 'US',
      totalUnits: 2,
      occupiedUnits: 2,
      monthlyRevenue: 3800,
      status: 'active',
      createdAt: '2023-03-20T00:00:00Z',
    },
    {
      id: 'prop-003',
      organizationId: 'org-001',
      propertyName: 'Highland House',
      propertyType: 'single_family',
      streetAddress: '789 Pine Rd',
      city: 'Austin',
      state: 'TX',
      postalCode: '78703',
      country: 'US',
      totalUnits: 1,
      occupiedUnits: 1,
      monthlyRevenue: 2800,
      status: 'active',
      createdAt: '2023-05-10T00:00:00Z',
    },
    {
      id: 'prop-004',
      organizationId: 'org-001',
      propertyName: 'Riverside Fourplex',
      propertyType: 'fourplex',
      streetAddress: '321 River Rd',
      city: 'Austin',
      state: 'TX',
      postalCode: '78704',
      country: 'US',
      totalUnits: 4,
      occupiedUnits: 3,
      monthlyRevenue: 7200,
      status: 'active',
      createdAt: '2023-07-01T00:00:00Z',
    },
    {
      id: 'prop-005',
      organizationId: 'org-001',
      propertyName: 'Congress Studios',
      propertyType: 'apartment',
      streetAddress: '555 Congress Ave',
      city: 'Austin',
      state: 'TX',
      postalCode: '78701',
      country: 'US',
      totalUnits: 12,
      occupiedUnits: 10,
      monthlyRevenue: 18000,
      status: 'active',
      createdAt: '2022-09-15T00:00:00Z',
    },
  ];

  findAll(): Property[] {
    return this.properties;
  }

  findOne(id: string): Property | undefined {
    return this.properties.find((p) => p.id === id);
  }

  create(data: Partial<Property>): Property {
    const property: Property = {
      id: `prop-${Date.now()}`,
      organizationId: data.organizationId || 'org-001',
      propertyName: data.propertyName || 'Unnamed Property',
      propertyType: data.propertyType || 'single_family',
      streetAddress: data.streetAddress || '',
      city: data.city || '',
      state: data.state || '',
      postalCode: data.postalCode || '',
      country: data.country || 'US',
      totalUnits: data.totalUnits || 1,
      occupiedUnits: 0,
      monthlyRevenue: 0,
      status: 'active',
      createdAt: new Date().toISOString(),
    };
    this.properties.push(property);
    return property;
  }

  getSummary() {
    const totalUnits = this.properties.reduce((sum, p) => sum + p.totalUnits, 0);
    const occupiedUnits = this.properties.reduce((sum, p) => sum + p.occupiedUnits, 0);
    const monthlyRevenue = this.properties.reduce((sum, p) => sum + p.monthlyRevenue, 0);
    return {
      totalProperties: this.properties.length,
      totalUnits,
      occupiedUnits,
      vacantUnits: totalUnits - occupiedUnits,
      occupancyRate: totalUnits > 0 ? Math.round((occupiedUnits / totalUnits) * 100) : 0,
      monthlyRevenue,
    };
  }
}
