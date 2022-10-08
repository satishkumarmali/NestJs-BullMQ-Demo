import { Controller, Get, Post } from '@nestjs/common';
import { BullmqService } from './bullmq.service';

@Controller('bullmq')
export class BullmqController {
    constructor(
        private readonly bullmqService: BullmqService
    ) {}

    @Post('/job')
    async addJob() {
        this.bullmqService.addJob();
        return;
    }
}
