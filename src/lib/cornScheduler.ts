import { CronJob } from 'cron';
import { updateInactiveUsers } from '@/lib/inactiveUsers';

// Initialize cron jobs for system tasks
export function initCronJobs() {
  // Run every day at midnight
  const inactiveUsersJob = new CronJob(
    '0 0 * * *', // Cron expression: At 00:00 (midnight) every day
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
    null, // onComplete
    false, // start
    'UTC' // timezone
  );

  // Start the job
  inactiveUsersJob.start();
  
  console.log('Cron jobs initialized');
  
  // Return the jobs so they can be stopped if needed
  return {
    inactiveUsersJob
  };
}

// Function to clean up cron jobs (useful for graceful shutdown)
export function stopCronJobs(jobs: { inactiveUsersJob: CronJob }) {
  jobs.inactiveUsersJob.stop();
  console.log('Cron jobs stopped');
}