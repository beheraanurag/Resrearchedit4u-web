
import React, { useState } from "react";
import "../style/style.css";
import slide3 from '../images/slide3.webp';
import AI from '../images/reach.webp';
import Journal from '../images/review.webp';
import FINAL from '../images/school.webp';
import PAY from '../images/payment.webp';
import Risk from '../images/blueprint.webp';
import { FaCheck, FaWhatsapp } from "react-icons/fa";
import { servicesData, faqs, packages } from "../content/academic";
import { Link } from "react-router-dom";
import ServiceBookingForm from "./ServiceBookingForm";

const Academic= () => {
  const [activeTab, setActiveTab] = useState("Research Planning");
  const [openIndex, setOpenIndex] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [selectedServiceCategory, setSelectedServiceCategory] = useState("");

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const handleBookService = (service, serviceCategory) => {
    setSelectedService(service);
    setSelectedServiceCategory(serviceCategory);
    setShowBookingForm(true);
  };

  const closeBookingForm = () => {
    setShowBookingForm(false);
    setSelectedService("");
    setSelectedServiceCategory("");
  };


  return (
    <div>
      {/* Hero section Over-view */}
      <section className="smart-submission">
        <div className="content">
          <h2>Present Your Research with Clarity & Impact</h2>
          <p className="description">
            Expert support for academic presentations—from research posters and conference slides to thesis defense (viva) decks, data visualization, and presentation coaching. </p>

          <ul className="feature-list">
            <li>
              <FaCheck className="check-icon" />
             University-style poster/layout guidance  </li>
            <li>
              <FaCheck className="check-icon" />
              Clear slide design  </li>
            <li>
              <FaCheck className="check-icon" />
              Rehearsal & feedback </li>
          </ul>

          <div className="btn-wrapper">
            <button className="cta-btn">Get Started</button>
            <button className="cta-btn secondary">See Samples </button>
          </div>
        </div>

        <div className="overviewimage">
          <img src={slide3} alt="overview-img" className="overview-img" />
        </div>
      </section>

      {/* Who This is For */}
      <section className="trust-section">
        {/* <h2 className="trust-heading" style={{ color: "#1e3a8a", marginTop: "30px" }}>Who This is for</h2> */}
        <div className="pricing-head">
          <h2 style={{ color: "#1e3a8a", marginTop: "30px" }}>Who This is for</h2>
          <p>Designed to empower individuals seeking growth, skills, and meaningful opportunities.</p>
        </div>
        <div className="trust-cards" >
          <div className="trust-card-circle" >
            <div className="trust-icon" >🏆</div>
            <h3>Thesis Defense Support </h3>
            <p>Guiding scholars for confident thesis defense and viva.</p>
          </div>

          <div className="trust-card-circle" >
            <div className="trust-icon">✅</div>
            <h3>Research Presentation Design</h3>
            <p>Designing impactful posters and presentations for researchers.</p>
          </div>

          <div className="trust-card-circle" >
            <div className="trust-icon">📈</div>
            <h3>Conference Style Guidance</h3>
            <p>Ensuring alignment with journal and conference style requirements.</p>
          </div>
        </div>
        <div className="trust-stats">
          Trusted by 1,200+ researchers in india
        </div>
      </section>

      {/* Sub- Services */}
      <div className="services-container">
        <h2 className="Core-services" style={{ marginBottom: "20px" }}>Sub-Services</h2>
        <h2 style={{ fontSize: "17px", color:" #555", fontWeight: "400", }}>Specialized services crafted to enhance efficiency, productivity, and organizational success.
        </h2>
        {/* Card Grid */}
        <div className="card-grid">
          {servicesData[activeTab].map((service, index) => (
            <div className="card" key={index}>
              <div className="icon">{service.img}</div>
              <h3> {service.title}</h3>
              <ul>
                {service.features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
              <p className="price">Starts at only {service.price}</p>
              <div className="btn-group">
                <button 
                  className="book" 
                  onClick={() => handleBookService(service.title, activeTab)}
                >
                  Book Now
                </button>
                <a href={service.pdfLink} download>
                  <button className="sample">Download Sample</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <section class="quick-offers">
        <h2>How It Works</h2>
        <p class="subtext">From idea to a ready-to-submit plan, in 4 simple steps.</p>

        <div class="offers">
          <div class="offer-card" style={{ border: "none", background: "#eff2fb" }}>
            <img src={AI} alt="AI + Plagiarism Report" />
            <h3>Consultation & Brief </h3>
            <p>Share your conference/venue, audience level, and goals (poster, oral presentation, or viva). We align on content scope and deliverables.</p>
          </div>

          <div class="offer-card" style={{ border: "none", background: "#eff2fb" }}>
            <img src={Risk} alt="Rejection Risk Check" />
            <h3>Content Structuring </h3>
            <p>We shape your talk/poster using research-friendly structure, selecting key messages, figures, and captions.</p>
          </div>
          <div class="offer-card" style={{ border: "none", background: "#eff2fb" }}>
            <img src={PAY} alt="Rejection Risk Check" />
            <h3>Transparent Quote & Payment </h3>
            <p>You receive a clear plan and pricing for the selected services. Work starts after payment confirmation.</p>
          </div>

          <div class="offer-card" style={{ border: "none", background: "#eff2fb" }}>
            <img src={Journal} alt="Journal Match Pro" />
            <h3>Design & Visualization  </h3>
            <p>We design for readability: concise text, large fonts, purposeful graphics, and minimal distractions—following proven university guidelines.</p>
          </div>

          <div class="offer-card" style={{ border: "none", background: "#eff2fb" }}>
            <img src={FINAL} alt="Journal Match Pro" />
            <h3>Review & Refinement </h3>
            <p>Feedback cycles on content and visuals; final files exported to conference specs (size, resolution, aspect ratio, accessibility notes).</p>
          </div>
        </div>
        <div class="help-box">
          <a
            href="https://wa.me/+918093778526"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button class="expert-btn" style={{ fontSize: "20px", fontWeight: "bold" }}>Start My Research Plan</button>
          </a>
        </div>
      </section>

      {/* pricing */}
      <section className="pricing-section">
        <div className="pricing-head">
          <h2>Packages & Pricing</h2>
          <p>Choose the right package based on your research stage and support needs.</p>
        </div>
        <div className="pricing-flex">
          {packages.map((pkg, index) => (
            <div key={index} className="pricing-card">
              <span className="ribbon">{pkg.pop}</span>
              <h2 className="plan-price" > {pkg.heading}</h2>
              <h2 className="plan-price" >{pkg.price}</h2>
              {pkg.details.map((detail, i) => (
                <div key={i} className="plan-detail">
                  <h3 className="detail-title">{detail.title}</h3>
                  {Array.isArray(detail.subtitle) ? (
                    <ul className="detail-subtitle">
                      {detail.subtitle.map((text, i) => (
                        <li key={i}>{text}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="detail-subtitle">{detail.subtitle}</p>
                  )}
                </div>
              ))}

              <a href="#" className="plan-btn">
                Get Started Today
              </a>
            </div>
          ))}
        </div>
      </section>

      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-header">
              <div className="faq-question">{faq.question}</div>
              <button
                className="faq-toggle-button"
                onClick={() => toggleFAQ(index)}
              >
                {openIndex === index ? "−" : "+"}
              </button>
            </div>
            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>

      <section className="related-services">
        <h2 className="services-title">Related Services</h2>
        <div className="services-links">
          <a href="/research">Research Planning</a>
          <br/>
          <Link to="/data">Data Services</Link>
          <br/>
          <Link to="/editorial">Editorial Support</Link>
          <br/>
          <Link to="/publication">Publication Support</Link>
        </div>

        <p className="services-text">
          Ready to start planning your research with us? <br />
          <strong>Get in touch today.</strong>
        </p>

        <a
          href="https://wa.me/919876543210?text=Hello%20Researchedit4u%2C%20I%20would%20like%20to%20book%20a%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          <FaWhatsapp className="wp-icon" />
          Book a Free Consultation / Submit Your Research Idea
        </a>
      </section>

      {/* Service Booking Form Modal */}
      {showBookingForm && (
        <ServiceBookingForm
          service={selectedService}
          serviceCategory={selectedServiceCategory}
          onClose={closeBookingForm}
        />
      )}

    </div>

  );
};

export default Academic;


