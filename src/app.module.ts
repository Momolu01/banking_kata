import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './services/app.service';
import { Statements } from './services';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, Statements],
})
export class AppModule {}
