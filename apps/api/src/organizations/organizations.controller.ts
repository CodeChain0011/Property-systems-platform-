import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  Req,
  HttpCode,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { OrganizationsService } from './organizations.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PermissionGuard } from '../auth/permission.guard';
import { RequirePermission } from '../auth/require-permission.decorator';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';

@Controller('organizations')
@UseGuards(JwtAuthGuard)
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Get()
  async findAll(@Req() req: Request) {
    const user = (req as any).user;
    return this.organizationsService.findAll(user.organizationId ?? undefined);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.organizationsService.findOne(id);
  }

  @Post()
  @HttpCode(201)
  async create(@Body() dto: CreateOrganizationDto, @Req() req: Request) {
    const user = (req as any).user;
    return this.organizationsService.create(dto, user.personId);
  }

  @Patch(':id')
  @UseGuards(PermissionGuard)
  @RequirePermission('full_access')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateOrganizationDto,
    @Req() req: Request,
  ) {
    const user = (req as any).user;
    return this.organizationsService.update(id, dto, user.personId);
  }
}
