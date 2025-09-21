import React, { useState } from "react";
import axios from "axios";
import "../style/style.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    file: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0]
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    console.log("📧 Contact form submission started...");
    console.log("👤 Name:", formData.name);
    console.log("📧 Email:", formData.email);
    console.log("📞 Phone:", formData.phone);
    console.log("💬 Message length:", formData.message.length);
    console.log("📎 File:", formData.file ? formData.file.name : "None");

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("message", formData.message);
    if (formData.file) {
      data.append("file", formData.file);
    }

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'https://resrearchedit4u.vercel.app';
      console.log("⏳ Sending data to server...");
      console.log("🌐 API Endpoint:", `${apiUrl}/api/contact`);
      
      const startTime = Date.now();
      const response = await axios.post(`${apiUrl}/api/contact`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const endTime = Date.now();
      const duration = endTime - startTime;
      
      console.log("✅ Email sent successfully!");
      console.log("📊 Response:", response.data);
      console.log("⏱️ Request duration:", duration + "ms");
      
      setSubmitMessage("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "", file: null });
      
      // Reset file input
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = "";
      
    } catch (error) {
      console.error("❌ Error sending message:");
      console.error("🔍 Error details:", error.response?.data || error.message);
      console.error("📊 Status:", error.response?.status);
      console.error("🌐 URL:", error.config?.url);
      
      setSubmitMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
      console.log("🏁 Contact form submission completed");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-item">
            <h3>📧 Email</h3>
            <p>info@researchedit.in</p>
          </div>
          <div className="info-item">
            <h3>📞 Phone</h3>
            <p>+91 8093778526</p>
          </div>
          <div className="info-item">
            <h3>📍 Address</h3>
            <p>Bhubaneswar, Odisha, India</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={sendEmail}>
          {submitMessage && (
            <div className={`submit-message ${submitMessage.includes('successfully') ? 'success' : 'error'}`}>
              {submitMessage}
            </div>
          )}

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Your Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your research needs, questions, or how we can help you..."
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="file">Attach Files (Optional)</label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
            />
            <small>You can attach research documents, drafts, or reference materials</small>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting} 
            className={`submit-btn ${isSubmitting ? "loading" : ""}`}
          >
            {isSubmitting ? (
              <>
                <span className="spinner"></span>
                Sending Email...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;