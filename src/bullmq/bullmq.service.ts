import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';
require('./event');
require('./worker');

@Injectable()
export class BullmqService {
    public async addJob() {
        const queue = new Queue('my-queue');

        queue.add('cars1', { color: 'blue' });
        queue.add('cars2', { color: 'red' });
        queue.add('cars3', { color: 'yello' });
        queue.add('cars4', { color: 'pink' });
    }
}
