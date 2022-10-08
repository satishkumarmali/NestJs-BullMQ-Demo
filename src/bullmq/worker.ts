import { Worker } from 'bullmq';

(function worker() {
    const worker = new Worker('my-queue', async job => {        
        if (job.name) {
          console.log('==========>', job.data);
        }
      });
})()