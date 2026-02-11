import cron from 'node-cron';
import { sendDailyWisdom } from '../services/emailService.js';

const initDailyWisdomJob = () => {
  // Schedule to run every day at 7:00 AM
  // Cron format: Minute Hour DayMonth Month DayWeek
  cron.schedule('0 7 * * *', () => {
    console.log('Running daily wisdom cron job defined in dailyWisdomJob.js at 7:00 AM');
    sendDailyWisdom();
  }, {
    scheduled: true,
    timezone: "Asia/Kolkata" 
  });
  
  console.log('Daily Wisdom cron job initialized. Scheduled for 7:00 AM.');
};

export default initDailyWisdomJob;
