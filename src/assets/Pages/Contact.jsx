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
      console.log("⏳ Sending data to server...");
      console.log("🌐 API Endpoint: http://localhost:5000/api/contact");
      
      const startTime = Date.now();
      const response = await axios.post("http://localhost:5000/api/contact", data, {
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
      <h1 className="contact-h1">Get In Touch</h1>
      <h2 className="contact-header">
        We're here to help! Reach out using the form below or via our contact details.
      </h2>

      <div className="contact-content">
        <div className="contact-form">
          <h3>Send Us a Message</h3>
          {submitMessage && (
            <div className={`submit-message ${submitMessage.includes('successfully') ? 'success' : 'error'}`}>
              {submitMessage}
            </div>
          )}
          <form onSubmit={sendEmail} encType="multipart/form-data">
            <label>Your Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />

            <label>Email Address</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />

            <label>Phone Number (Optional)</label>
            <input 
              type="tel" 
              name="phone" 
              value={formData.phone}
              onChange={handleChange}
            />

            <label>Message</label>
            <textarea 
              name="message" 
              rows="8" 
              value={formData.message}
              onChange={handleChange}
              required 
            />

            <label>Attach File (Optional)</label>
            <input 
              type="file" 
              name="file" 
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.txt"
            />

            <button type="submit" disabled={isSubmitting} className={isSubmitting ? "loading" : ""}>
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

        <div className="contact-info">
          <h3>Our Address</h3>
          <p>Bhubaneswar, Odisha</p>

          <h3>Call Us</h3>
          <a href="tel:+918093778526">+91 8093778526</a>

          <h3>Email Us</h3>
          <a href="mailto:info@researchedit.in">info@researchedit.in</a>

          <h3>Find Us Here</h3>
          <div className="contact-map">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14722.633168697058!2d85.8198796!3d20.2960581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909e1e9c0f2ef%3A0x29b7ea39eafeb8f5!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v171234567890"
              width="100%"
              height="280"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
