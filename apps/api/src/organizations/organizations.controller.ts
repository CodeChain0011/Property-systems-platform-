import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('organizations')
export class OrganizationsController {
  private organizations = [
    {
      id: 'demo-organization-001',
      organizationName: 'Property Operating System Demo Company',
      status: 'active',
    },
  ];

  @Get()
  findAll() {
    return {
      data: this.organizations,
      source: 'temporary-memory',
      note: 'Replace with Prisma database query after migration environment is ready.',
    };
  }

  @Post()
  create(@Body() body: { organizationName?: string }) {
    const organization = {
      id: `demo-organization-${this.organizations.length + 1}`,
      organizationName: body.organizationName || 'Unnamed Organization',
      status: 'active',
    };

    this.organizations.push(organization);

    return {
      data: organization,
      source: 'temporary-memory',
      note: 'Replace with Prisma database create after migration environment is ready.',
    };
  }
}
