import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { WorkOrdersService } from './work-orders.service';

@Controller('work-orders')
export class WorkOrdersController {
  constructor(private readonly workOrdersService: WorkOrdersService) {}

  @Get()
  findAll() {
    return { data: this.workOrdersService.findAll() };
  }

  @Get('summary')
  getSummary() {
    return { data: this.workOrdersService.getSummary() };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const workOrder = this.workOrdersService.findOne(id);
    if (!workOrder) {
      return { error: 'Work order not found' };
    }
    return { data: workOrder };
  }

  @Post()
  create(@Body() body: Parameters<WorkOrdersService['create']>[0]) {
    return { data: this.workOrdersService.create(body) };
  }
}
