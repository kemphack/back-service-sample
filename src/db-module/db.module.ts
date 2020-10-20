import { Module } from '@nestjs/common';
import { postgresProvider } from './database.provider';

@Module({
  providers: [postgresProvider],
  exports: [postgresProvider]
})
export class DbModule {}
