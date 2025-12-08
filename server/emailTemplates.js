// Beautiful Email Templates for ResearchEdit4U
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
          opacity: 0.3;
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
          opacity: 0.9; 
          margin-bottom: 20px;
        }
        .badge {
          display: inline-block;
          background: rgba(255,255,255,0.2);
          padding: 8px 16px;
          border-radius: 25px;
          font-size: 14px;
          font-weight: 500;
          backdrop-filter: blur(10px);
        }
        .content { 
          padding: 40px 30px; 
          background: #fafbfc;
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
          color: #2c3e50; 
          font-size: 14px;
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
          background: #3498db;
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
          border-left: 4px solid #3498db;
        }
        .message-value {
          white-space: pre-wrap;
          min-height: 80px;
        }
        .attachment-notice {
          background: linear-gradient(135deg, #e8f5e8 0%, #f0f8f0 100%);
          border: 1px solid #4caf50;
          border-radius: 8px;
          padding: 15px;
          margin-top: 10px;
          display: flex;
          align-items: center;
        }
        .attachment-icon {
          width: 20px;
          height: 20px;
          background: #4caf50;
          border-radius: 4px;
          margin-right: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 12px;
          font-weight: bold;
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
  `,

  serviceBooking: (data) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Service Booking Request</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
          line-height: 1.6; 
          color: #333; 
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
          padding: 20px;
        }
        .email-container { 
          max-width: 700px; 
          margin: 0 auto; 
          background: white; 
          border-radius: 15px; 
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .header { 
          background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%); 
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
          opacity: 0.3;
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
          opacity: 0.9; 
          margin-bottom: 20px;
        }
        .badge {
          display: inline-block;
          background: rgba(255,255,255,0.2);
          padding: 8px 16px;
          border-radius: 25px;
          font-size: 14px;
          font-weight: 500;
          backdrop-filter: blur(10px);
        }
        .content { 
          padding: 40px 30px; 
          background: #fafbfc;
        }
        .service-highlight {
          background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
          border: 2px solid #f39c12;
          border-radius: 12px;
          padding: 25px;
          margin-bottom: 30px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .service-highlight::before {
          content: '🔥';
          position: absolute;
          top: 10px;
          right: 15px;
          font-size: 24px;
          opacity: 0.3;
        }
        .service-title {
          font-size: 20px;
          font-weight: bold;
          color: #d68910;
          margin-bottom: 8px;
        }
        .service-category {
          font-size: 16px;
          color: #b7950b;
          font-weight: 500;
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
          color: #2c3e50; 
          font-size: 14px;
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
          background: #e74c3c;
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
          border-left: 4px solid #e74c3c;
        }
        .requirements-value {
          white-space: pre-wrap;
          min-height: 100px;
        }
        .budget-timeline {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 25px;
        }
        .budget-item, .timeline-item {
          background: linear-gradient(135deg, #e8f5e8 0%, #f0f8f0 100%);
          border: 1px solid #27ae60;
          border-radius: 8px;
          padding: 15px;
          text-align: center;
        }
        .budget-label, .timeline-label {
          font-size: 12px;
          color: #27ae60;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 5px;
        }
        .budget-value, .timeline-value {
          font-size: 16px;
          color: #2c3e50;
          font-weight: bold;
        }
        .attachment-notice {
          background: linear-gradient(135deg, #e8f5e8 0%, #f0f8f0 100%);
          border: 1px solid #4caf50;
          border-radius: 8px;
          padding: 15px;
          margin-top: 10px;
          display: flex;
          align-items: center;
        }
        .attachment-icon {
          width: 20px;
          height: 20px;
          background: #4caf50;
          border-radius: 4px;
          margin-right: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 12px;
          font-weight: bold;
        }
        .priority-notice {
          background: linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%);
          border: 1px solid #f44336;
          border-radius: 8px;
          padding: 20px;
          margin: 20px 0;
          text-align: center;
        }
        .priority-icon {
          font-size: 24px;
          margin-bottom: 10px;
        }
        .priority-text {
          font-weight: 600;
          color: #d32f2f;
          font-size: 16px;
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
          .budget-timeline { grid-template-columns: 1fr; }
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <div class="header-content">
            <div class="logo">🚀 ResearchEdit4U</div>
            <div class="subtitle">New Service Booking Request</div>
            <div class="badge">💼 Service Inquiry</div>
          </div>
        </div>
        
        <div class="content">
          <div class="service-highlight">
            <div class="service-title">${data.service}</div>
            <div class="service-category">${data.serviceCategory}</div>
          </div>
          
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
              <div class="value">${data.phone}</div>
            </div>
            
            <div class="budget-timeline">
              <div class="budget-item">
                <div class="budget-label">💰 Budget Range</div>
                <div class="budget-value">${data.budget || 'Not specified'}</div>
              </div>
              <div class="timeline-item">
                <div class="timeline-label">⏰ Timeline</div>
                <div class="timeline-value">${data.timeline || 'Not specified'}</div>
              </div>
            </div>
            
            <div class="field">
              <div class="label">📋 Requirements</div>
              <div class="value requirements-value">${data.requirements}</div>
            </div>
            
            ${data.message ? `
            <div class="field">
              <div class="label">💬 Additional Message</div>
              <div class="value">${data.message}</div>
            </div>
            ` : ''}
            
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
          
          <div class="priority-notice">
            <div class="priority-icon">⚡</div>
            <div class="priority-text">High Priority: Service booking requires immediate attention</div>
          </div>
          
          <div class="divider"></div>
          
          <div style="text-align: center; color: #666; font-size: 14px;">
            <p>🎯 <strong>Next Steps:</strong> Please review the requirements and send a detailed proposal within 4 hours.</p>
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
  `,

  projectEnquiry: (data) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Project Enquiry</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
          line-height: 1.6; 
          color: #333; 
          background: linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%);
          padding: 20px;
        }
        .email-container { 
          max-width: 700px; 
          margin: 0 auto; 
          background: white; 
          border-radius: 15px; 
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .header { 
          background: linear-gradient(135deg, #0f172a 0%, #0ea5e9 100%); 
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
          opacity: 0.3;
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
          opacity: 0.9; 
          margin-bottom: 20px;
        }
        .badge {
          display: inline-block;
          background: rgba(255,255,255,0.2);
          padding: 8px 16px;
          border-radius: 25px;
          font-size: 14px;
          font-weight: 500;
          backdrop-filter: blur(10px);
        }
        .content { 
          padding: 40px 30px; 
          background: #fafbfc;
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
          color: #2c3e50; 
          font-size: 14px;
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
          background: #0ea5e9;
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
          border-left: 4px solid #0ea5e9;
        }
        .services-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 8px;
        }
        .service-badge {
          background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);
          border: 1px solid #0ea5e9;
          border-radius: 20px;
          padding: 6px 12px;
          font-size: 13px;
          color: #0369a1;
          font-weight: 500;
        }
        .timeline-badge {
          background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
          border: 1px solid #f59e0b;
          border-radius: 8px;
          padding: 15px;
          text-align: center;
          margin: 15px 0;
        }
        .timeline-label {
          font-size: 12px;
          color: #92400e;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 5px;
        }
        .timeline-value {
          font-size: 18px;
          color: #78350f;
          font-weight: bold;
        }
        .message-value {
          white-space: pre-wrap;
          min-height: 80px;
        }
        .attachment-notice {
          background: linear-gradient(135deg, #e8f5e8 0%, #f0f8f0 100%);
          border: 1px solid #4caf50;
          border-radius: 8px;
          padding: 15px;
          margin-top: 10px;
          display: flex;
          align-items: center;
        }
        .attachment-icon {
          width: 20px;
          height: 20px;
          background: #4caf50;
          border-radius: 4px;
          margin-right: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 12px;
          font-weight: bold;
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
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <div class="header-content">
            <div class="logo">📝 ResearchEdit4U</div>
            <div class="subtitle">New Project Enquiry</div>
            <div class="badge">📄 Manuscript Submission</div>
          </div>
        </div>
        
        <div class="content">
          <div class="form-details">
            <div class="field">
              <div class="label">👤 Full Name</div>
              <div class="value">${data.fullName}</div>
            </div>
            
            <div class="field">
              <div class="label">📧 Email Address</div>
              <div class="value">${data.email}</div>
            </div>
            
            <div class="field">
              <div class="label">📞 Phone Number</div>
              <div class="value">${data.countryCode} ${data.phone || 'Not provided'}</div>
            </div>
            
            <div class="field">
              <div class="label">⏰ Timeline</div>
              <div class="timeline-badge">
                <div class="timeline-label">Required Timeline</div>
                <div class="timeline-value">${data.timeline}</div>
              </div>
            </div>
            
            <div class="field">
              <div class="label">🛠️ Service Requirements</div>
              <div class="services-list">
                ${data.services.map(service => {
    const serviceNames = {
      'language_editing': 'Language Editing',
      'research_design': 'Research Design',
      'data_analysis': 'Data Analysis',
      'publication_support': 'Publication Support',
      'plagiarism_reduction': 'Plagiarism Reduction',
      'formatting_references': 'Formatting & References',
      'visuals_graphical_abstract': 'Visuals & Graphical Abstract',
      'thesis_support': 'Thesis Support',
      'other': 'Other'
    };
    return `<span class="service-badge">${serviceNames[service] || service}</span>`;
  }).join('')}
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
                <strong>Attachment:</strong> ${data.file}<br>
                <small>File has been attached to this email</small>
              </div>
            </div>
            ` : ''}
          </div>
          
          <div class="divider"></div>
          
          <div style="text-align: center; color: #666; font-size: 14px;">
            <p>🔔 <strong>Action Required:</strong> Please review the manuscript and respond with a tailored plan, timeline and quote.</p>
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

module.exports = emailTemplates;
