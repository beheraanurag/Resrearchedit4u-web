const nodemailer = require("nodemailer");

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
  projectEnquiry: (data) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Project Enquiry - ResearchEdit4U</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
          line-height: 1.6; 
          color: #333; 
          background: linear-gradient(135deg, #0B2662 0%, #0F828C 100%);
          padding: 20px;
        }
        .email-container { 
          max-width: 750px; 
          margin: 0 auto; 
          background: white; 
          border-radius: 15px; 
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        .header { 
          background: linear-gradient(135deg, #0B2662 0%, #0F828C 100%); 
          color: white; 
          padding: 40px 30px; 
          text-align: center;
          position: relative;
        }
        .header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.1"/><circle cx="10" cy="60" r="0.5" fill="white" opacity="0.1"/><circle cx="90" cy="40" r="0.5" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
          opacity: 0.2;
        }
        .header-content { position: relative; z-index: 1; }
        .logo { 
          font-size: 28px; 
          font-weight: bold; 
          margin-bottom: 10px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        .subtitle { 
          font-size: 16px; 
          opacity: 0.95; 
          margin-bottom: 20px;
        }
        .badge {
          display: inline-block;
          background: rgba(255,255,255,0.25);
          padding: 8px 16px;
          border-radius: 25px;
          font-size: 14px;
          font-weight: 500;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
        }
        .priority-badge {
          background: #f1bf08;
          color: #000;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: bold;
          margin-top: 12px;
          display: inline-block;
        }
        .content { 
          padding: 40px 30px; 
          background: #fafbfc;
        }
        .enquiry-highlight {
          background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
          border: 2px solid #0B2662;
          border-radius: 12px;
          padding: 25px;
          margin-bottom: 30px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .enquiry-highlight::before {
          content: '📋';
          position: absolute;
          top: 10px;
          right: 15px;
          font-size: 32px;
          opacity: 0.2;
        }
        .enquiry-title {
          font-size: 22px;
          font-weight: bold;
          color: #0B2662;
          margin-bottom: 8px;
        }
        .timeline-badge {
          display: inline-block;
          background: #0F828C;
          color: white;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          margin-top: 10px;
        }
        .form-details {
          background: white;
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
          margin-bottom: 30px;
        }
        .field { 
          margin-bottom: 25px; 
          padding-bottom: 20px;
          border-bottom: 1px solid #f0f0f0;
        }
        .field:last-child { border-bottom: none; margin-bottom: 0; }
        .label { 
          font-weight: 600; 
          color: #0B2662; 
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
        }
        .label::before {
          content: '';
          width: 4px;
          height: 4px;
          background: #0F828C;
          border-radius: 50%;
          margin-right: 10px;
        }
        .value { 
          font-size: 16px; 
          color: #555;
          line-height: 1.5;
          background: #f8f9fa;
          padding: 12px 15px;
          border-radius: 8px;
          border-left: 4px solid #0B2662;
        }
        .services-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 10px;
          margin-top: 10px;
        }
        .service-item {
          background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
          border: 1px solid #f39c12;
          border-radius: 8px;
          padding: 10px 12px;
          font-size: 14px;
          color: #856404;
          font-weight: 500;
        }
        .message-value {
          white-space: pre-wrap;
          min-height: 80px;
        }
        .contact-info {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 25px;
        }
        .contact-item {
          background: linear-gradient(135deg, #e8f5e8 0%, #f0f8f0 100%);
          border: 1px solid #27ae60;
          border-radius: 8px;
          padding: 15px;
          text-align: center;
        }
        .contact-label {
          font-size: 12px;
          color: #27ae60;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 5px;
        }
        .contact-value {
          font-size: 16px;
          color: #2c3e50;
          font-weight: bold;
        }
        .attachment-notice {
          background: linear-gradient(135deg, #e8f5e8 0%, #f0f8f0 100%);
          border: 2px solid #4caf50;
          border-radius: 8px;
          padding: 15px;
          margin-top: 20px;
          display: flex;
          align-items: center;
        }
        .attachment-icon {
          width: 24px;
          height: 24px;
          background: #4caf50;
          border-radius: 4px;
          margin-right: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 14px;
          font-weight: bold;
        }
        .priority-notice {
          background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
          border: 2px solid #f39c12;
          border-radius: 8px;
          padding: 20px;
          margin: 20px 0;
          text-align: center;
        }
        .priority-icon {
          font-size: 28px;
          margin-bottom: 10px;
        }
        .priority-text {
          font-weight: 600;
          color: #856404;
          font-size: 16px;
        }
        .priority-subtext {
          font-size: 14px;
          color: #856404;
          margin-top: 8px;
          opacity: 0.8;
        }
        .footer { 
          background: linear-gradient(135deg, #34495e 0%, #2c3e50 100%); 
          color: white; 
          padding: 30px; 
          text-align: center; 
        }
        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }
        .company-info {
          text-align: left;
        }
        .company-name {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 5px;
        }
        .company-details {
          font-size: 14px;
          opacity: 0.8;
          line-height: 1.4;
        }
        .timestamp {
          text-align: right;
          font-size: 12px;
          opacity: 0.7;
        }
        .divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #ddd, transparent);
          margin: 20px 0;
        }
        @media (max-width: 600px) {
          .email-container { margin: 10px; border-radius: 10px; }
          .header, .content, .footer { padding: 20px; }
          .footer-content { flex-direction: column; text-align: center; }
          .company-info { text-align: center; }
          .contact-info { grid-template-columns: 1fr; }
          .services-list { grid-template-columns: 1fr; }
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <div class="header-content">
            <div class="logo">📚 ResearchEdit4U</div>
            <div class="subtitle">New Project Enquiry Received</div>
            <div class="badge">📋 Manuscript Enquiry</div>
            <div class="priority-badge">🔥 URGENT - Project Enquiry</div>
          </div>
        </div>
        
        <div class="content">
          <div class="enquiry-highlight">
            <div class="enquiry-title">Project Enquiry Submission</div>
            <div class="timeline-badge">Timeline: ${data.timeline}</div>
          </div>
          
          <div class="form-details">
            <div class="contact-info">
              <div class="contact-item">
                <div class="contact-label">👤 Full Name</div>
                <div class="contact-value">${data.fullName}</div>
              </div>
              <div class="contact-item">
                <div class="contact-label">📧 Email</div>
                <div class="contact-value">${data.email}</div>
              </div>
            </div>
            
            ${data.phone ? `
            <div class="field">
              <div class="label">📞 Phone Number</div>
              <div class="value">${data.countryCode} ${data.phone}</div>
            </div>
            ` : ''}
            
            <div class="field">
              <div class="label">⏰ Timeline</div>
              <div class="value">${data.timeline}</div>
            </div>
            
            <div class="field">
              <div class="label">🛠️ Service Requirements</div>
              <div class="value">
                <div class="services-list">
                  ${data.services.map(service => {
    const serviceNames = {
      'language_editing': 'Language Editing / Substantive Editing',
      'research_design': 'Research Design & Problem / GAP Framing',
      'data_analysis': 'Data Analysis & Statistics',
      'publication_support': 'Publication Support (Journal Selection, Submission, Response to Reviewers)',
      'plagiarism_reduction': 'Plagiarism / Similarity Reduction',
      'formatting_references': 'Manuscript Formatting & References',
      'visuals_graphical_abstract': 'Visuals & Graphical Abstract / Figures',
      'thesis_support': 'Thesis / Dissertation End-to-End Support',
      'other': 'Other (see message)'
    };
    return `<div class="service-item">${serviceNames[service] || service}</div>`;
  }).join('')}
                </div>
              </div>
            </div>
            
            ${data.message ? `
            <div class="field">
              <div class="label">💬 Additional Message</div>
              <div class="value message-value">${data.message}</div>
            </div>
            ` : ''}
            
            ${data.file ? `
            <div class="attachment-notice">
              <div class="attachment-icon">📎</div>
              <div>
                <strong>File Attachment:</strong> ${data.file}<br>
                <small>Note: File uploads in Vercel serverless functions require special handling. Please check the form submission for file details.</small>
              </div>
            </div>
            ` : ''}
          </div>
          
          <div class="priority-notice">
            <div class="priority-icon">🚨</div>
            <div class="priority-text">URGENT ACTION REQUIRED</div>
            <div class="priority-subtext">Project enquiry requires immediate review and response. Please prepare a tailored plan, timeline, and quote.</div>
          </div>
          
          <div class="divider"></div>
          
          <div style="text-align: center; color: #0B2662; font-size: 15px; font-weight: 600; padding: 15px; background: #e3f2fd; border-radius: 8px;">
            <p>📝 Next Steps:</p>
            <p style="font-size: 13px; color: #666; margin-top: 8px; font-weight: normal;">
              1. Review the attached manuscript (if provided)<br>
              2. Analyze service requirements<br>
              3. Prepare a customized quote and timeline<br>
              4. Respond to the client within 24 hours
            </p>
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
              <div>Received: ${new Date().toLocaleString('en-US', {
    weekday: 'long',
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
  console.log("📚 NEW PROJECT ENQUIRY RECEIVED");
  console.log("=".repeat(60));

  try {
    const {
      fullName,
      email,
      phone,
      countryCode,
      timeline,
      services,
      message
    } = req.body;
    // Note: File uploads in Vercel serverless functions need special handling
    // For now, we'll skip file attachments
    const file = null;

    // Parse services if it's a JSON string
    let servicesArray = [];
    try {
      servicesArray = typeof services === 'string' ? JSON.parse(services) : services;
    } catch (e) {
      servicesArray = Array.isArray(services) ? services : [];
    }

    console.log(`👤 Client: ${fullName}`);
    console.log(`📧 Email: ${email}`);
    console.log(`📞 Phone: ${phone ? `${countryCode || '+91'} ${phone}` : 'Not provided'}`);
    console.log(`⏰ Timeline: ${timeline}`);
    console.log(`🛠️  Services: ${servicesArray.length} service(s) selected`);
    servicesArray.forEach((service, index) => {
      console.log(`   ${index + 1}. ${service}`);
    });
    console.log(`📎 File: ${file ? file.originalname : 'No attachment (Vercel limitation)'}`);
    console.log(`💬 Message Length: ${message ? message.length : 0} characters`);

    // Validate required fields
    if (!fullName || !email || !timeline || !servicesArray || servicesArray.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Full name, email, timeline, and at least one service are required"
      });
    }

    console.log("\n⏳ Creating email transporter...");
    const transporter = createTransporter();
    console.log("✅ Email transporter created successfully");

    console.log("\n⏳ Preparing project enquiry email content...");
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `📚 New Project Enquiry: ${fullName} - ${timeline}`,
      html: emailTemplates.projectEnquiry({
        fullName,
        email,
        phone: phone || null,
        countryCode: countryCode || "+91",
        timeline,
        services: servicesArray,
        message: message || null,
        file: file ? file.originalname : null
      }),
      attachments: file ? [{
        filename: file.originalname,
        content: file.buffer
      }] : [],
    };
    console.log("✅ Project enquiry email content prepared");

    console.log("\n⏳ Sending project enquiry email via Gmail SMTP...");
    console.log("   This may take 3-6 seconds...");

    const emailResult = await transporter.sendMail(mailOptions);
    const endTime = Date.now();
    const duration = endTime - startTime;

    console.log("✅ Project enquiry email sent successfully!");
    console.log(`📊 Email ID: ${emailResult.messageId}`);
    console.log(`⏱️  Processing time: ${duration}ms`);
    console.log(`📧 Sent to: ${process.env.EMAIL_USER}`);
    console.log("🎯 Priority: URGENT - Project enquiry requires immediate attention");
    console.log("=".repeat(60) + "\n");

    res.json({ success: true, message: "Project enquiry submitted successfully!" });
  } catch (error) {
    const endTime = Date.now();
    const duration = endTime - startTime;

    console.error("❌ Project enquiry error occurred!");
    console.error(`⏱️  Failed after: ${duration}ms`);
    console.error("🔍 Error details:", error.message);
    console.error("📋 Full error:", error);
    console.log("=".repeat(60) + "\n");

    res.status(500).json({
      success: false,
      message: "Failed to submit project enquiry.",
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}
