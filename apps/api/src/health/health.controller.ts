import { Controller, Get } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Controller('health')
export class HealthController {
  private readonly databaseService = new DatabaseService();

  @Get()
  getHealth() {
    return {
      status: 'ok',
      service: 'property-operating-system-api',
      database: this.databaseService.getStatus(),
    };
  }
}
