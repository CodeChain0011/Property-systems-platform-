export class DatabaseService {
  getStatus() {
    return {
      database: 'configured',
      provider: 'postgresql',
      orm: 'prisma',
      note: 'Live migrations deferred because Prisma schema engine is limited on Android Termux.',
    };
  }
}
