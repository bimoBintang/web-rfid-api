import { CronJob } from 'cron';
import { updateInactiveUsers } from '@/lib/inactiveUsers';

export function initCronJobs() {
  const inactiveUsersJob = new CronJob(
    '0 0 * * *', 
    async () => {
      console.log('Running scheduled task: Update inactive users');
      try {
        const result = await updateInactiveUsers();
        if (result.success) {
          console.log(`Inactive users job completed. ${result.deactivatedCount} users deactivated.`);
        } else {
          console.error('Failed to update inactive users:', result.error);
        }
      } catch (error) {
        console.error('Error in inactive users scheduled task:', error);
      }
    },
    null, 
    false, 
    'UTC' 
  );

  inactiveUsersJob.start();
  
  console.log('Cron jobs initialized');
  

  return {
    inactiveUsersJob
  };
}

export function stopCronJobs(jobs: { inactiveUsersJob: CronJob }) {
  jobs.inactiveUsersJob.stop();
  console.log('Cron jobs stopped');
}