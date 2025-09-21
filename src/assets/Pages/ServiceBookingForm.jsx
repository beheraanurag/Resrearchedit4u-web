import React, { useState } from "react";
import axios from "axios";
import "../style/style.css";

const ServiceBookingForm = ({ service, serviceCategory, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: service || "",
    serviceCategory: serviceCategory || "",
    budget: "",
    timeline: "",
    requirements: "",
    message: "",
    file: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0]
    });
  };

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone);
  };

  const validateForm = () => {
    const newErrors = {};

    // Required field validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.budget) {
      newErrors.budget = "Please select a budget range";
    }

    if (!formData.timeline) {
      newErrors.timeline = "Please select a timeline";
    }

    if (!formData.requirements.trim()) {
      newErrors.requirements = "Please describe your requirements";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      setSubmitMessage("Please fill in all required fields correctly.");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== null) {
        data.append(key, formData[key]);
      }
    });

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'https://resrearchedit4u-52mrrv4cy-anurag-beheras-projects.vercel.app';
      const response = await axios.post(`${apiUrl}/api/service-booking`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      
      setSubmitMessage("Service booking request sent successfully!");
      setTimeout(() => {
        onClose();
      }, 6000);
      
    } catch (error) {
      console.error("Error sending booking request:", error);
      setSubmitMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="service-booking-modal">
      <div className="service-booking-content">
        <div className="service-booking-header">
          <h2>Book Service: {service}</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        {submitMessage && (
          <div className={`submit-message ${submitMessage.includes('successfully') ? 'success' : 'error'}`}>
            {submitMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="form-row">
            <div className="form-group">
              <label>Your Name *</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
                required 
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label>Email Address *</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                required 
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone Number *</label>
              <input 
                type="tel" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? 'error' : ''}
                required 
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>
            <div className="form-group">
              <label>Budget Range *</label>
              <select 
                name="budget" 
                value={formData.budget}
                onChange={handleChange}
                className={errors.budget ? 'error' : ''}
              >
                <option value="">Select Budget Range</option>
                <option value="Under ₹5,000">Under ₹5,000</option>
                <option value="₹5,000 - ₹10,000">₹5,000 - ₹10,000</option>
                <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
                <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                <option value="Above ₹50,000">Above ₹50,000</option>
                <option value="To be discussed">To be discussed</option>
              </select>
              {errors.budget && <span className="error-message">{errors.budget}</span>}
            </div>
          </div>

          <div className="form-group">
            <label>Timeline *</label>
            <select 
              name="timeline" 
              value={formData.timeline}
              onChange={handleChange}
              className={errors.timeline ? 'error' : ''}
              required
            >
              <option value="">Select Timeline</option>
              <option value="ASAP (Within 1 week)">ASAP (Within 1 week)</option>
              <option value="1-2 weeks">1-2 weeks</option>
              <option value="2-4 weeks">2-4 weeks</option>
              <option value="1-2 months">1-2 months</option>
              <option value="2+ months">2+ months</option>
              <option value="Flexible">Flexible</option>
            </select>
            {errors.timeline && <span className="error-message">{errors.timeline}</span>}
          </div>

          <div className="form-group">
            <label>Service Requirements *</label>
            <textarea 
              name="requirements" 
              rows="4" 
              value={formData.requirements}
              onChange={handleChange}
              className={errors.requirements ? 'error' : ''}
              placeholder="Please describe your specific requirements, research topic, current status, and any special instructions..."
              required 
            />
            {errors.requirements && <span className="error-message">{errors.requirements}</span>}
          </div>

          <div className="form-group">
            <label>Additional Message</label>
            <textarea 
              name="message" 
              rows="3" 
              value={formData.message}
              onChange={handleChange}
              placeholder="Any additional information or questions..."
            />
          </div>

          <div className="form-group">
            <label>Attach Files (Optional)</label>
            <input 
              type="file" 
              name="file" 
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
              multiple
            />
            <small>You can attach research documents, drafts, or reference materials</small>
          </div>

          <div className="form-actions">
            <button type="button" onClick={onClose} className="cancel-btn">
              Cancel
            </button>
            <button type="submit" disabled={isSubmitting} className="submit-btn">
              {isSubmitting ? "Submitting..." : "Submit Booking Request"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceBookingForm;