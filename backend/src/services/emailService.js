import nodemailer from 'nodemailer';
import Subscriber from '../models/Subscriber.js';
import Verse from '../models/Verse.js';
import Translation from '../models/Translation.js';

// Configure transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // or your preferred service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export const sendEmail = async (to, subject, html) => {
  try {
    const mailOptions = {
      from: `"Gita Wisdom" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html
    };

    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error(`Error sending email to ${to}:`, error);
  }
};

export const sendDailyWisdom = async () => {
  console.log('Starting Daily Wisdom email job...');
  try {
    // 1. Get all active subscribers
    const subscribers = await Subscriber.find({ isActive: true });
    if (subscribers.length === 0) {
      console.log('No active subscribers found.');
      return;
    }

    // 2. Get a random verse
    const randomVerse = await Verse.aggregate([{ $sample: { size: 1 } }]);
    if (randomVerse.length === 0) {
      console.log('No verses found in database.');
      return;
    }
    const verse = randomVerse[0];

    // 3. Get translation for the verse (English)
    const translation = await Translation.findOne({ 
      verseId: verse._id,
      language: 'english' 
    });

    const verseText = verse.text; 
    const translationText = translation ? translation.description : "Translation not available.";

    // 4. Construct Email Content (HTML)
    const emailHtml = `
      <div style="font-family: 'Georgia', serif; color: #1b120d; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #FAF9F6; border: 1px solid #d2691e; border-radius: 8px;">
        <div style="text-align: center; border-bottom: 2px solid #d2691e; padding-bottom: 20px; margin-bottom: 20px;">
          <h1 style="color: #d2691e; margin: 0; font-size: 24px;">Daily Divine Wisdom</h1>
          <p style="color: #666; font-style: italic; margin-top: 5px;">From the Bhagavad Gita</p>
        </div>
        
        <div style="background-color: #fff; padding: 20px; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <p style="text-align: center; font-size: 18px; color: #d4af37; font-weight: bold; margin-bottom: 10px;">
            Chapter ${verse.chapter_number}, Verse ${verse.verse_number}
          </p>
          
          <div style="text-align: center; margin-bottom: 20px;">
            <p style="font-size: 20px; line-height: 1.6; margin-bottom: 10px; font-weight: 500;">
              ${verseText}
            </p>
          </div>
          
          <div style="border-top: 1px solid #eee; padding-top: 20px;">
            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              "${translationText}"
            </p>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 30px; font-size: 12px; color: #888;">
          <p>&copy; ${new Date().getFullYear()} Gita Wisdom. All rights reserved.</p>
          <p>May this wisdom guide your day.</p>
        </div>
      </div>
    `;

    // 5. Send to all subscribers
    const emailPromises = subscribers.map(sub => 
      sendEmail(sub.email, `Daily Wisdom: Chapter ${verse.chapter_number}, Verse ${verse.verse_number}`, emailHtml)
    );

    await Promise.all(emailPromises);
    console.log(`Daily Wisdom sent to ${subscribers.length} subscribers.`);

  } catch (error) {
    console.error('Error in Daily Wisdom job:', error);
  }
};
