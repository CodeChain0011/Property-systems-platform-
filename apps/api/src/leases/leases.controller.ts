import { Controller, Get, Post, Param, Body, Query } from '@nestjs/common';
import { LeasesService } from './leases.service';

@Controller('leases')
export class LeasesController {
  constructor(private readonly leasesService: LeasesService) {}

  @Get()
  async findAll(@Query('organizationId') organizationId?: string) {
    return { data: await this.leasesService.findAll(organizationId) };
  }

  @Get('expiring')
  async getExpiring(
    @Query('days') days?: string,
    @Query('organizationId') organizationId?: string,
  ) {
    const withinDays = days ? parseInt(days, 10) : 60;
    return { data: await this.leasesService.getExpiringLeases(withinDays, organizationId) };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return { data: await this.leasesService.findOne(id) };
  }

  @Post()
  async create(@Body() body: Parameters<LeasesService['create']>[0]) {
    return { data: await this.leasesService.create(body) };
  }
}
