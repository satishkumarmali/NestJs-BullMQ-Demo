import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullmqModule } from './bullmq/bullmq.module';

@Module({
  imports: [BullmqModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
