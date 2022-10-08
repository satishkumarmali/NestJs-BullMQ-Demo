import { Injectable } from '@nestjs/common';
import { Queue, Worker, QueueEvents } from 'bullmq';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  public async initializeBullMQ() {
    const queue = new Queue('csv-bulk-order');
  }
}
