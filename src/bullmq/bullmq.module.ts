import { Module } from '@nestjs/common';
import { BullmqService } from './bullmq.service';
import { BullmqController } from './bullmq.controller';

@Module({
  providers: [BullmqService],
  controllers: [BullmqController]
})
export class BullmqModule {}
