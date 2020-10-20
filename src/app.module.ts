import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db-module/db.module';
import { userProvider } from './users.provider'

@Module({
  imports: [DbModule],
  controllers: [AppController],
  providers: [userProvider, AppService],
})
export class AppModule {}
