import { Controller, Get } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Controller('health')
export class HealthController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Get()
  async getHealth() {
    return {
      status: 'ok',
      service: 'property-operating-system-api',
      database: await this.databaseService.getStatus(),
    };
  }
}
