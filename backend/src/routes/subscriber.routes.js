import express from 'express';
import Subscriber from '../models/Subscriber.js';
import { sendEmail } from '../services/emailService.js';

const router = express.Router();

// POST /api/subscribe
router.post('/subscribe', async (req, res) => {
  try {
    const { email } = req.body;
    
    // Basic validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ message: 'Please provide a valid email address.' });
    }

    // Check if already subscribed
    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      if (!existingSubscriber.isActive) {
        // Reactivate
        existingSubscriber.isActive = true;
        await existingSubscriber.save();
        return res.json({ message: 'Welcome back! You have been resubscribed.' });
      }
      return res.status(400).json({ message: 'This email is already subscribed.' });
    }

    // Create new subscriber
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    // Optional: Send welcome email
    await sendEmail(
      email,
      'Welcome to Daily Gita Wisdom',
      `<div style="font-family: sans-serif; padding: 20px;">
        <h2>Namaste!</h2>
        <p>Thank you for subscribing to Daily Gita Wisdom.</p>
        <p>You will receive a divine verse from the Bhagavad Gita every morning to guide your day.</p>
      </div>`
    );

    res.status(201).json({ message: 'Successfully subscribed!' });
  } catch (error) {
    console.error('Subscription error:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// POST /api/unsubscribe
router.post('/unsubscribe', async (req, res) => {
    try {
        const { email } = req.body;
        await Subscriber.findOneAndUpdate({ email }, { isActive: false });
        res.json({ message: 'Unsubscribed successfully.' });
    } catch(error) {
        res.status(500).json({ message: 'Error unsubscribing.' });
    }
});

export default router;
