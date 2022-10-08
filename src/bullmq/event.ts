import { QueueEvents } from 'bullmq';

 (function event() {
    console.log('Queue event.....!');
     
    const queueEvents = new QueueEvents('my-queue');

    queueEvents.on('completed', ({ jobId }) => {
    console.log('done painting', jobId);
    });

    queueEvents.on('failed', ({ jobId, failedReason }: { jobId: string, failedReason: string }) => {
    console.error('error painting', failedReason);
    });
})()
