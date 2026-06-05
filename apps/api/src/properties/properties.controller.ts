import { Controller, Get, Post, Param, Body, Query } from '@nestjs/common';
import { PropertiesService } from './properties.service';

@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Get()
  async findAll(@Query('organizationId') organizationId?: string) {
    return { data: await this.propertiesService.findAll(organizationId) };
  }

  @Get('summary')
  async getSummary(@Query('organizationId') organizationId?: string) {
    return { data: await this.propertiesService.getSummary(organizationId) };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return { data: await this.propertiesService.findOne(id) };
  }

  @Post()
  async create(@Body() body: Parameters<PropertiesService['create']>[0]) {
    return { data: await this.propertiesService.create(body) };
  }
}
