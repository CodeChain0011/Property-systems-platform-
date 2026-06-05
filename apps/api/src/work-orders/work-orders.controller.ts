import { Controller, Get, Post, Param, Body, Query } from '@nestjs/common';
import { WorkOrdersService } from './work-orders.service';

@Controller('work-orders')
export class WorkOrdersController {
  constructor(private readonly workOrdersService: WorkOrdersService) {}

  @Get()
  async findAll(@Query('organizationId') organizationId?: string) {
    return { data: await this.workOrdersService.findAll(organizationId) };
  }

  @Get('summary')
  async getSummary(@Query('organizationId') organizationId?: string) {
    return { data: await this.workOrdersService.getSummary(organizationId) };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return { data: await this.workOrdersService.findOne(id) };
  }

  @Post()
  async create(@Body() body: Parameters<WorkOrdersService['create']>[0]) {
    return { data: await this.workOrdersService.create(body) };
  }
}
