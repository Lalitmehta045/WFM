import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Email transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'lalitmehta040@gmail.com',
    pass: 'idyc uqpa ebms vpkw' // Gmail App Password
  }
});

// Contact form endpoint
app.post('/send-mail', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required'
      });
    }
    
    // Email options
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: 'lalitmehta040@gmail.com',
      subject: 'New Contact Form Submission - Wipeout Facility Management',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #550000; color: white; padding: 20px; text-align: center;">
            <h2>New Contact Form Submission</h2>
            <p>Wipeout Facility Management Website</p>
          </div>
          <div style="padding: 20px; background: #f9f9f9;">
            <div style="margin-bottom: 15px;">
              <strong>Name:</strong> ${name}
            </div>
            <div style="margin-bottom: 15px;">
              <strong>Email:</strong> ${email}
            </div>
            ${phone ? `<div style="margin-bottom: 15px;"><strong>Phone:</strong> ${phone}</div>` : ''}
            <div style="margin-bottom: 15px;">
              <strong>Message:</strong><br>
              <p>${message.replace(/\n/g, '<br>')}</p>
            </div>
          </div>
          <div style="padding: 20px; text-align: center; color: #666; font-size: 12px;">
            <p>This email was sent from the contact form on Wipeout Facility Management website</p>
            <p>Date: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission - Wipeout Facility Management
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        
        Message:
        ${message}
        
        ---
        This email was sent from the contact form on Wipeout Facility Management website
        Date: ${new Date().toLocaleString()}
      `
    };
    
    // Send email
    await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully to lalitmehta040@gmail.com');
    
    res.json({
      success: true,
      message: 'Message sent successfully!'
    });
    
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send email. Please try again later.'
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Contact form endpoint: http://localhost:3001/send-mail');
});
