import { Controller, Get, Post, Param, Body, Query } from '@nestjs/common';
import { LeasesService } from './leases.service';

@Controller('leases')
export class LeasesController {
  constructor(private readonly leasesService: LeasesService) {}

  @Get()
  findAll() {
    return { data: this.leasesService.findAll() };
  }

  @Get('expiring')
  getExpiring(@Query('days') days?: string) {
    const withinDays = days ? parseInt(days, 10) : 60;
    return { data: this.leasesService.getExpiringLeases(withinDays) };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const lease = this.leasesService.findOne(id);
    if (!lease) {
      return { error: 'Lease not found' };
    }
    return { data: lease };
  }

  @Post()
  create(@Body() body: Parameters<LeasesService['create']>[0]) {
    return { data: this.leasesService.create(body) };
  }
}
