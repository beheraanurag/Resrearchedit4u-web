import nodemailer from "nodemailer";
import multer from "multer";

// Configure multer for file uploads
const upload = multer({ 
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit
  }
});

// Email transporter configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// Email templates
const emailTemplates = {
  contactForm: (data) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
          line-height: 1.6; 
          color: #333; 
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px;
        }
        .email-container { 
          max-width: 650px; 
          margin: 0 auto; 
          background: white; 
          border-radius: 15px; 
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .header { 
          background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%); 
          color: white; 
          padding: 40px 30px; 
          text-align: center; 
        }
        .header-content { position: relative; }
        .logo { 
          font-size: 28px; 
          font-weight: bold; 
          margin-bottom: 10px; 
        }
        .subtitle { 
          font-size: 16px; 
          opacity: 0.9; 
          margin-bottom: 15px; 
        }
        .badge { 
          display: inline-block; 
          background: rgba(255,255,255,0.2); 
          padding: 8px 16px; 
          border-radius: 20px; 
          font-size: 14px; 
          font-weight: 500; 
        }
        .content { padding: 40px 30px; }
        .form-details { margin-bottom: 30px; }
        .field { 
          margin-bottom: 25px; 
          padding: 20px; 
          background: #f8f9fa; 
          border-radius: 10px; 
          border-left: 4px solid #3498db; 
        }
        .label { 
          font-weight: 600; 
          color: #2c3e50; 
          margin-bottom: 8px; 
          font-size: 14px; 
        }
        .value { 
          color: #555; 
          font-size: 16px; 
          word-wrap: break-word; 
        }
        .message-value { 
          white-space: pre-wrap; 
          line-height: 1.6; 
        }
        .attachment-notice { 
          background: #e8f5e8; 
          border: 1px solid #4caf50; 
          border-radius: 8px; 
          padding: 15px; 
          margin-top: 20px; 
          display: flex; 
          align-items: center; 
        }
        .attachment-icon { 
          font-size: 20px; 
          margin-right: 10px; 
        }
        .divider { 
          height: 2px; 
          background: linear-gradient(90deg, #3498db, #2ecc71); 
          margin: 30px 0; 
        }
        .footer { 
          background: #f8f9fa; 
          padding: 30px; 
          text-align: center; 
        }
        .footer-content { 
          display: flex; 
          justify-content: space-between; 
          align-items: center; 
          flex-wrap: wrap; 
        }
        .company-info { text-align: left; }
        .company-name { 
          font-weight: bold; 
          color: #2c3e50; 
          margin-bottom: 5px; 
        }
        .company-details { 
          color: #666; 
          font-size: 14px; 
        }
        .timestamp { 
          color: #666; 
          font-size: 14px; 
          text-align: right; 
        }
        @media (max-width: 600px) {
          .footer-content { flex-direction: column; text-align: center; }
          .company-info, .timestamp { text-align: center; margin: 10px 0; }
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <div class="header-content">
            <div class="logo">📧 ResearchEdit4U</div>
            <div class="subtitle">New Contact Form Submission</div>
            <div class="badge">📝 Contact Inquiry</div>
          </div>
        </div>
        
        <div class="content">
          <div class="form-details">
            <div class="field">
              <div class="label">👤 Client Name</div>
              <div class="value">${data.name}</div>
            </div>
            
            <div class="field">
              <div class="label">📧 Email Address</div>
              <div class="value">${data.email}</div>
            </div>
            
            <div class="field">
              <div class="label">📞 Phone Number</div>
              <div class="value">${data.phone || 'Not provided'}</div>
            </div>
            
            <div class="field">
              <div class="label">💬 Message</div>
              <div class="value message-value">${data.message}</div>
            </div>
            
            ${data.file ? `
            <div class="attachment-notice">
              <div class="attachment-icon">📎</div>
              <div>
                <strong>Attachment:</strong> ${data.file}<br>
                <small>File has been attached to this email</small>
              </div>
            </div>
            ` : ''}
          </div>
          
          <div class="divider"></div>
          
          <div style="text-align: center; color: #666; font-size: 14px;">
            <p>🔔 <strong>Action Required:</strong> Please respond to this inquiry within 24 hours for best customer experience.</p>
          </div>
        </div>
        
        <div class="footer">
          <div class="footer-content">
            <div class="company-info">
              <div class="company-name">ResearchEdit4U</div>
              <div class="company-details">
                📍 Bhubaneswar, Odisha<br>
                📧 info@researchedit.in<br>
                📞 +91 8093778526
              </div>
            </div>
            <div class="timestamp">
              <div>Received: ${new Date().toLocaleString('en-IN', { 
                timeZone: 'Asia/Kolkata',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}</div>
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `
};

// Main handler function
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const startTime = Date.now();
  console.log("\n" + "=".repeat(60));
  console.log("📧 NEW CONTACT FORM SUBMISSION RECEIVED");
  console.log("=".repeat(60));

  try {
    const { name, email, message, phone } = req.body;
    const file = req.file;

    console.log(`👤 Client: ${name}`);
    console.log(`📧 Email: ${email}`);
    console.log(`📞 Phone: ${phone || 'Not provided'}`);
    console.log(`📎 File: ${file ? file.originalname : 'No attachment'}`);
    console.log(`💬 Message Length: ${message ? message.length : 0} characters`);

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: "Name, email, and message are required" 
      });
    }

    console.log("\n⏳ Creating email transporter...");
    const transporter = createTransporter();
    console.log("✅ Email transporter created successfully");

    console.log("\n⏳ Preparing email content...");
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: emailTemplates.contactForm({
        name,
        email,
        phone,
        message,
        file: file ? file.originalname : null
      }),
      attachments: file ? [{ 
        filename: file.originalname, 
        content: file.buffer 
      }] : [],
    };
    console.log("✅ Email content prepared");

    console.log("\n⏳ Sending email via Gmail SMTP...");
    console.log("   This may take 2-5 seconds...");
    
    const emailResult = await transporter.sendMail(mailOptions);
    const endTime = Date.now();
    const duration = endTime - startTime;
    
    console.log("✅ Contact form email sent successfully!");
    console.log(`📊 Email ID: ${emailResult.messageId}`);
    console.log(`⏱️  Processing time: ${duration}ms`);
    console.log(`📧 Sent to: ${process.env.EMAIL_USER}`);
    console.log("=".repeat(60) + "\n");
    
    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    const endTime = Date.now();
    const duration = endTime - startTime;
    
    console.error("❌ Contact form error occurred!");
    console.error(`⏱️  Failed after: ${duration}ms`);
    console.error("🔍 Error details:", error.message);
    console.error("📋 Full error:", error);
    console.log("=".repeat(60) + "\n");
    
    res.status(500).json({ 
      success: false, 
      message: "Failed to send email.",
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}
