import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { HealthController } from './health/health.controller';
import { DatabaseService } from './database/database.service';
import { OrganizationsController } from './organizations/organizations.controller';
import { PropertiesController } from './properties/properties.controller';
import { PropertiesService } from './properties/properties.service';
import { WorkOrdersController } from './work-orders/work-orders.controller';
import { WorkOrdersService } from './work-orders/work-orders.service';
import { LeasesController } from './leases/leases.controller';
import { LeasesService } from './leases/leases.service';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [
    AppController,
    HealthController,
    OrganizationsController,
    PropertiesController,
    WorkOrdersController,
    LeasesController,
  ],
  providers: [
    AppService,
    DatabaseService,
    PropertiesService,
    WorkOrdersService,
    LeasesService,
  ],
})
export class AppModule {}
