import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { PropertiesService } from './properties.service';

@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Get()
  findAll() {
    return { data: this.propertiesService.findAll() };
  }

  @Get('summary')
  getSummary() {
    return { data: this.propertiesService.getSummary() };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const property = this.propertiesService.findOne(id);
    if (!property) {
      return { error: 'Property not found' };
    }
    return { data: property };
  }

  @Post()
  create(@Body() body: Parameters<PropertiesService['create']>[0]) {
    return { data: this.propertiesService.create(body) };
  }
}
