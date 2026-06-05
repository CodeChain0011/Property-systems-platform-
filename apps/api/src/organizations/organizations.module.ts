import { Module } from '@nestjs/common';
import { OrganizationsController } from './organizations.controller';
import { OrganizationsService } from './organizations.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PermissionGuard } from '../auth/permission.guard';

@Module({
  controllers: [OrganizationsController],
  providers: [OrganizationsService, JwtAuthGuard, PermissionGuard],
})
export class OrganizationsModule {}
