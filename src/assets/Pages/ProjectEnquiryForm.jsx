import React, { useState } from "react";
import axios from "axios";
import "./ProjectEnquiryForm.css";

const ProjectEnquiryForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    countryCode: "+91",
    timeline: "",
    services: [],
    fileUpload: null,
    message: ""
  });
  const [errors, setErrors] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      fileUpload: e.target.files[0]
    });
  };

  const handleServiceChange = (e) => {
    const { value, checked } = e.target;
    let updatedServices = [...formData.services];

    if (checked) {
      updatedServices.push(value);
    } else {
      updatedServices = updatedServices.filter(service => service !== value);
    }

    setFormData({
      ...formData,
      services: updatedServices
    });
  };

  const validateForm = () => {
    const newErrors = [];
    const { fullName, email, timeline, services, fileUpload, phone, countryCode } = formData;

    // Name validation
    if (!fullName || fullName.trim().length < 2) {
      newErrors.push("Please enter your full name.");
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      newErrors.push("Please enter a valid email address.");
    }

    // Timeline validation
    if (!timeline) {
      newErrors.push("Please select your timeline.");
    }

    // Services validation - at least one checked
    if (services.length === 0) {
      newErrors.push("Please select at least one service requirement.");
    }

    // File validation
    if (!fileUpload) {
      newErrors.push("Please upload at least one file.");
    }

    // Phone validation (if provided)
    if (phone) {
      const phonePattern = /^[0-9]{7,15}$/;
      if (!phonePattern.test(phone)) {
        newErrors.push("Please enter a valid phone number (7–15 digits, numbers only).");
      }
      if (!countryCode || countryCode === "other") {
        newErrors.push("Please select a country code for your phone number.");
      }
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous errors
    setErrors([]);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setShowThankYou(false);

    const data = new FormData();
    data.append("fullName", formData.fullName);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("countryCode", formData.countryCode);
    data.append("timeline", formData.timeline);
    data.append("services", JSON.stringify(formData.services));
    data.append("message", formData.message);
    if (formData.fileUpload) {
      data.append("fileUpload", formData.fileUpload);
    }

    try {
      // Use Vercel API route (same pattern as Contact page)
      // For Vercel: use relative path /api/project-enquiry (works on same domain)
      // For local dev or custom backend: use VITE_API_URL
      const apiUrl = import.meta.env.VITE_API_URL || '';
      const endpoint = apiUrl ? `${apiUrl}/api/project-enquiry` : '/api/project-enquiry';

      console.log("⏳ Submitting project enquiry form...");
      console.log("🌐 API Endpoint:", endpoint);
      console.log("📋 Form data:", {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        timeline: formData.timeline,
        services: formData.services,
        hasFile: !!formData.fileUpload
      });

      const startTime = Date.now();
      const response = await axios.post(endpoint, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        timeout: 30000, // 30 second timeout
      });
      const endTime = Date.now();
      const duration = endTime - startTime;

      console.log("✅ Project enquiry submitted successfully!");
      console.log("📊 Response:", response.data);
      console.log("⏱️ Request duration:", duration + "ms");

      // Clear any previous errors
      setErrors([]);

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        countryCode: "+91",
        timeline: "",
        services: [],
        fileUpload: null,
        message: ""
      });

      // Reset file input
      const fileInput = document.getElementById("fileUpload");
      if (fileInput) fileInput.value = "";

      // Show thank you message
      setShowThankYou(true);

      // If used as modal, close after 5 seconds
      if (onClose) {
        setTimeout(() => {
          onClose();
        }, 5000);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

    } catch (error) {
      console.error("❌ Error submitting project enquiry:");
      console.error("🔍 Error details:", error.response?.data || error.message);
      console.error("📊 Status:", error.response?.status);
      console.error("🌐 URL:", error.config?.url);

      // Extract meaningful error message
      let errorMessage = "Something went wrong. Please try again.";

      if (error.code === 'ECONNABORTED') {
        errorMessage = "Request timed out. The server is taking too long to respond. Please try again.";
      } else if (error.response) {
        // Server responded with error status
        const status = error.response.status;
        const serverMessage = error.response.data?.message || error.response.data?.error;

        if (status === 400) {
          errorMessage = serverMessage || "Please check your form data and try again.";
        } else if (status === 500) {
          errorMessage = serverMessage || "Server error. Please try again later or contact support.";
        } else if (status === 404) {
          errorMessage = "API endpoint not found. Please check your configuration.";
        } else if (status === 403) {
          errorMessage = "Access denied. Please check your permissions.";
        } else if (status === 0 || status >= 500) {
          errorMessage = serverMessage || `Server error (${status}). Please try again later.`;
        } else {
          errorMessage = serverMessage || `Error ${status}: Please try again.`;
        }
      } else if (error.request) {
        // Request was made but no response received
        if (error.message && error.message.includes("timeout")) {
          errorMessage = "Request timed out. Please check your internet connection and try again.";
        } else {
          errorMessage = "Unable to connect to the server. Please check your internet connection and try again.";
        }
      } else if (error.message) {
        // Error setting up the request
        if (error.message.includes("Network Error") || error.message.includes("Failed to fetch")) {
          errorMessage = "Network error. Please check your internet connection.";
        } else if (error.message.includes("timeout")) {
          errorMessage = "Request timed out. Please try again.";
        } else {
          errorMessage = error.message;
        }
      }

      setErrors([errorMessage]);
    } finally {
      setIsSubmitting(false);
      console.log("🏁 Project enquiry form submission completed");
    }
  };

  return (
    <div className="project-enquiry-modal">
      <div className="project-enquiry-content">
        <div className="project-enquiry-header">
          {onClose && (
            <button className="close-btn" onClick={onClose}>×</button>
          )}
          <div className="brand-pill">
            <span className="brand-pill-dot"></span>
            RESEARCHEDIT4U ENQUIRY
          </div>
          <h1 className="card-title">Share your manuscript with our team</h1>
          <p className="card-subtitle">
            Tell us what you are working on and what kind of support you need.
            We'll review the details and respond with a tailored plan, timeline and quote.
          </p>
        </div>

        <form id="researchedit4u-form" onSubmit={handleSubmit} encType="multipart/form-data" noValidate>
          <div className="form-grid">
            {/* 1. Name */}
            <div className="field-group">
              <label htmlFor="fullName">
                Full Name<span className="required">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                minLength="2"
                placeholder="Dr. A. Sharma"
              />
            </div>

            {/* 2. Email Address */}
            <div className="field-group">
              <label htmlFor="email">
                Email Address<span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="name@university.edu"
              />
            </div>

            {/* 3. Phone Number with Country Code */}
            <div className="field-group">
              <label htmlFor="phone">Phone (with country code)</label>
              <div className="inline-group">
                <select
                  id="countryCode"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                >
                  <option value="+91">+91 (India)</option>
                  <option value="+1">+1 (USA/Canada)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+61">+61 (Australia)</option>
                  <option value="+971">+971 (UAE)</option>
                  <option value="other">Other</option>
                </select>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="9876543210"
                  pattern="^[0-9]{7,15}$"
                />
              </div>
              <div className="hint">
                Used only for urgent queries and personalised support (no spam).
              </div>
            </div>

            {/* 4. Timeline */}
            <div className="field-group">
              <label htmlFor="timeline">
                Timeline<span className="required">*</span>
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                required
              >
                <option value="">Select your timeline</option>
                <option value="1-10">1–10 days (urgent)</option>
                <option value="10-20">10–20 days (standard)</option>
                <option value="20-30">20–30 days</option>
                <option value="30-plus">30 days or more</option>
              </select>
            </div>

            {/* 5. Service Requirements (Multi-select) */}
            <div className="field-group full">
              <fieldset>
                <legend>
                  Service Requirements (you can select more than one)
                  <span className="required">*</span>
                </legend>
                <div className="services-grid">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="services"
                      value="language_editing"
                      checked={formData.services.includes("language_editing")}
                      onChange={handleServiceChange}
                    />
                    <span>Language Editing / Substantive Editing</span>
                  </label>

                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="services"
                      value="research_design"
                      checked={formData.services.includes("research_design")}
                      onChange={handleServiceChange}
                    />
                    <span>Research Design & Problem / GAP Framing</span>
                  </label>

                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="services"
                      value="data_analysis"
                      checked={formData.services.includes("data_analysis")}
                      onChange={handleServiceChange}
                    />
                    <span>Data Analysis & Statistics</span>
                  </label>

                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="services"
                      value="publication_support"
                      checked={formData.services.includes("publication_support")}
                      onChange={handleServiceChange}
                    />
                    <span>Publication Support (Journal Selection, Submission, Response to Reviewers)</span>
                  </label>

                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="services"
                      value="plagiarism_reduction"
                      checked={formData.services.includes("plagiarism_reduction")}
                      onChange={handleServiceChange}
                    />
                    <span>Plagiarism / Similarity Reduction (within academic integrity)</span>
                  </label>

                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="services"
                      value="formatting_references"
                      checked={formData.services.includes("formatting_references")}
                      onChange={handleServiceChange}
                    />
                    <span>Manuscript Formatting & References</span>
                  </label>

                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="services"
                      value="visuals_graphical_abstract"
                      checked={formData.services.includes("visuals_graphical_abstract")}
                      onChange={handleServiceChange}
                    />
                    <span>Visuals & Graphical Abstract / Figures</span>
                  </label>

                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="services"
                      value="thesis_support"
                      checked={formData.services.includes("thesis_support")}
                      onChange={handleServiceChange}
                    />
                    <span>Thesis / Dissertation End-to-End Support</span>
                  </label>

                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="services"
                      value="other"
                      id="service-other"
                      checked={formData.services.includes("other")}
                      onChange={handleServiceChange}
                    />
                    <span>Other (please specify in the message box)</span>
                  </label>
                </div>
              </fieldset>
            </div>

            {/* 6. File Upload */}
            <div className="field-group full">
              <label htmlFor="fileUpload">
                Upload File(s)<span className="required">*</span>
              </label>
              <input
                type="file"
                id="fileUpload"
                name="fileUpload"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                required
              />
              <div className="file-hint">
                Attach your manuscript, thesis, proposal or related file (PDF or DOC/DOCX).
              </div>
            </div>

            {/* 7. Additional Message */}
            <div className="field-group full">
              <label htmlFor="message">Additional Message (short description)</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="E.g., Q1 journal in environmental engineering, first revision after major comments, thesis editing with 3-week deadline…"
              ></textarea>
            </div>
          </div>

          {/* Error message area */}
          {errors.length > 0 && (
            <div id="form-errors" style={{ display: "block" }}>
              {errors.map((error, index) => (
                <React.Fragment key={index}>
                  {error}
                  {index < errors.length - 1 && <br />}
                </React.Fragment>
              ))}
            </div>
          )}

          {/* Submit Button & Caption */}
          <div className="actions-row">
            <div className="actions-caption">
              By submitting, you agree that we may contact you regarding this project.
            </div>
            <button type="submit" disabled={isSubmitting}>
              <span className="pill-icon">➤</span>
              {isSubmitting ? "Submitting..." : "Submit enquiry"}
            </button>
          </div>
        </form>

        {/* 8. Post-Submission Message */}
        {showThankYou && (
          <div id="thank-you-message" style={{ display: "block" }}>
            <strong>Thank you for sharing your work with Researchedit4u.</strong>
            Our team will review your details and files and get back to you with a recommended plan, timeline and quote.
            If your deadline is very urgent, you can also reach out via our direct contact channels on the website.
          </div>
        )}

        {/* Close button at bottom if onClose is provided */}
        {onClose && !showThankYou && (
          <div className="form-actions" style={{ marginTop: "20px", display: "flex", justifyContent: "flex-end" }}>
            <button type="button" onClick={onClose} className="cancel-btn">
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectEnquiryForm;
