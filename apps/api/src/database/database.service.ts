import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DatabaseService {
  constructor(private readonly prisma: PrismaService) {}

  async getStatus() {
    try {
      await this.prisma.$queryRaw`SELECT 1`;
      return { database: 'connected', provider: 'postgresql', orm: 'prisma' };
    } catch {
      return { database: 'disconnected', provider: 'postgresql', orm: 'prisma' };
    }
  }
}
