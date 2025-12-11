const express = require("express");
const multer = require("multer");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");
const emailTemplates = require("./emailTemplates");

// Load environment variables
require("dotenv").config({ path: path.join(__dirname, ".env") });

console.log("Environment loaded:", {
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS ? "***SET***" : "NOT SET",
  PORT: process.env.PORT
});

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit
  }
});

// Email transporter configuration
const createTransporter = () => {
  console.log("Email config:", {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS ? "***SET***" : "NOT SET"
  });

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// Contact form endpoint
app.post("/api/contact", upload.single("file"), async (req, res) => {
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
});

// Service booking endpoint
app.post("/api/service-booking", upload.single("file"), async (req, res) => {
  const startTime = Date.now();
  console.log("\n" + "=".repeat(60));
  console.log("🚀 NEW SERVICE BOOKING REQUEST RECEIVED");
  console.log("=".repeat(60));

  try {
    const {
      name,
      email,
      phone,
      service,
      serviceCategory,
      budget,
      timeline,
      message,
      requirements
    } = req.body;
    const file = req.file;

    console.log(`👤 Client: ${name}`);
    console.log(`📧 Email: ${email}`);
    console.log(`📞 Phone: ${phone}`);
    console.log(`💼 Service: ${service}`);
    console.log(`📂 Category: ${serviceCategory}`);
    console.log(`💰 Budget: ${budget || 'Not specified'}`);
    console.log(`⏰ Timeline: ${timeline || 'Not specified'}`);
    console.log(`📎 File: ${file ? file.originalname : 'No attachment'}`);
    console.log(`📋 Requirements Length: ${requirements ? requirements.length : 0} characters`);
    console.log(`💬 Additional Message: ${message ? message.length : 0} characters`);

    console.log("\n⏳ Creating email transporter...");
    const transporter = createTransporter();
    console.log("✅ Email transporter created successfully");

    console.log("\n⏳ Preparing service booking email content...");
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Service Booking: ${service} - ${name}`,
      html: emailTemplates.serviceBooking({
        name,
        email,
        phone,
        service,
        serviceCategory,
        budget,
        timeline,
        requirements,
        message,
        file: file ? file.originalname : null
      }),
      attachments: file ? [{
        filename: file.originalname,
        content: file.buffer
      }] : [],
    };
    console.log("✅ Service booking email content prepared");

    console.log("\n⏳ Sending service booking email via Gmail SMTP...");
    console.log("   This may take 3-6 seconds...");

    const emailResult = await transporter.sendMail(mailOptions);
    const endTime = Date.now();
    const duration = endTime - startTime;

    console.log("✅ Service booking email sent successfully!");
    console.log(`📊 Email ID: ${emailResult.messageId}`);
    console.log(`⏱️  Processing time: ${duration}ms`);
    console.log(`📧 Sent to: ${process.env.EMAIL_USER}`);
    console.log(`🎯 Priority: HIGH - Service booking requires immediate attention`);
    console.log("=".repeat(60) + "\n");

    res.json({ success: true, message: "Service booking request sent successfully!" });
  } catch (error) {
    const endTime = Date.now();
    const duration = endTime - startTime;

    console.error("❌ Service booking error occurred!");
    console.error(`⏱️  Failed after: ${duration}ms`);
    console.error("🔍 Error details:", error.message);
    console.error("📋 Full error:", error);
    console.log("=".repeat(60) + "\n");

    res.status(500).json({
      success: false,
      message: "Failed to send booking request.",
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Project enquiry endpoint
app.post("/api/project-enquiry", upload.single("fileUpload"), async (req, res) => {
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
    const file = req.file;

    // Parse services if it's a JSON string
    let servicesArray = [];
    try {
      servicesArray = typeof services === 'string' ? JSON.parse(services) : services;
    } catch (e) {
      servicesArray = Array.isArray(services) ? services : [];
    }

    console.log(`👤 Client: ${fullName}`);
    console.log(`📧 Email: ${email}`);
    console.log(`📞 Phone: ${phone ? `${countryCode} ${phone}` : 'Not provided'}`);
    console.log(`⏰ Timeline: ${timeline}`);
    console.log(`🛠️  Services: ${servicesArray.length} service(s) selected`);
    servicesArray.forEach((service, index) => {
      console.log(`   ${index + 1}. ${service}`);
    });
    console.log(`📎 File: ${file ? file.originalname : 'No attachment'}`);
    console.log(`💬 Message Length: ${message ? message.length : 0} characters`);

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
    console.log(`🎯 Priority: URGENT - Project enquiry requires immediate attention`);
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
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "Server is running" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
