import React, { useState } from "react";
import "../style/style.css";
import slide3 from '../images/slide3.webp';
import AI from '../images/reach.webp';
import Journal from '../images/review.webp';
import FINAL from '../images/school.webp';
import PAY from '../images/payment.webp';
import Risk from '../images/blueprint.webp';
import { FaCheck, FaWhatsapp } from "react-icons/fa";
import { servicesData, faqs, packages } from "../content/researchdata"
import { Link } from "react-router-dom";
import ServiceBookingForm from "./ServiceBookingForm";


const Research = () => {
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
          <h2>Comprehensive Research Support</h2>
          <p className="description">
            Start smart. From topic selection to research design and ethics & feasibility, we turn rough ideas into a supervisor-ready plan—fast and defendable. Starts at ₹2,999.
          </p>

          <ul className="feature-list">
            <li>
              <FaCheck className="check-icon" />
              From topic selection to research design.</li>
            <li>
              <FaCheck className="check-icon" />
              Supervisor-ready plans you can trust.
            </li>
            <li>
              <FaCheck className="check-icon" />
              Packages starting at ₹2,999.
            </li>
          </ul>

          <div className="btn-wrapper">
            <button className="cta-btn">Get Started</button>
            <button className="cta-btn secondary">See Samples</button>
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
          <h2 style={{ color: "#0B2662", marginTop: "30px" }}>Who This is for</h2>
          <p>Designed to empower individuals seeking growth, skills, and meaningful opportunities.</p>
        </div>
        <div className="trust-cards" >
          <div className="trust-card-circle" >
            <div className="trust-icon" >🎓</div>
            <h3> Early-stage PhD/MPhil/Master’s scholars </h3>
            <p>Clarifying scope and feasibility</p>
          </div>

          <div className="trust-card-circle" >
            <div className="trust-icon">📖</div>
            <h3>Researchers Refining</h3>
            <p>Proposals after supervisor feedback or pilots</p>
          </div>

          <div className="trust-card-circle" >
            <div className="trust-icon">📝</div>
            <h3>Professionals Planning </h3>
            <p>Studies requiring ethics approval and realistic timelines</p>
          </div>
        </div>
        <div className="trust-stats">
          Trusted by 1,200+ researchers in india
        </div>
      </section>

      {/* Sub- Services */}
      <div className="services-container" >
        <h2 className="Core-services" style={{ marginBottom: "20px" }}>Sub-Services</h2>
        <h2 style={{ fontSize: "17px", color:" #555", fontWeight: "400",  }}>Specialized services crafted to enhance efficiency, productivity, and organizational success.
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

      {/* How It Works */ }
  <section class="quick-offers">
    <h2>How It Works</h2>
    <p class="subtext">From idea to a ready-to-submit plan, in 4 simple steps.</p>

    <div class="offers">
      <div class="offer-card" style={{ border: "none", background: "#eff2fb" }}>
        <img src={AI} alt="AI + Plagiarism Report" />
        <h3>Tell Us Your Goal</h3>
        <p>Share your research stage, topic interests, and university requirements. This helps us align your plan with academic and practical expectations.</p>
      </div>

      <div class="offer-card" style={{ border: "none", background: "#eff2fb" }}>
        <img src={Risk} alt="Rejection Risk Check" />
        <h3>We Draft Your Plan</h3>
        <p>Our experts create your topic shortlist, map methods, and prepare a timeline that fits your deadlines.</p>
      </div>

      <div class="offer-card" style={{ border: "none", background: "#eff2fb" }}>
        <img src={PAY} alt="Rejection Risk Check" />
        <h3>Quotation & Payment</h3>
        <p>Detailed Quotation and Transparent Payment Terms for Seamless Project Execution and Client Satisfaction.</p>
      </div>

      <div class="offer-card" style={{ border: "none", background: "#eff2fb" }}>
        <img src={Journal} alt="Journal Match Pro" />
        <h3>You Review & Refine </h3>
        <p>We carefully walk you through the draft, gather feedback, and fine-tune every section until it’s ready.</p>
      </div>

      <div class="offer-card" style={{ border: "none", background: "#eff2fb" }}>
        <img src={FINAL} alt="Journal Match Pro" />
        <h3>Get Your Final Pack</h3>
        <p>Receive a submission-ready document (DOCX/PDF) with references, diagrams, timelines, and an ethics checklist.</p>
      </div>
    </div>
    <div class="help-box">
      <a
        href="https://wa.me/+918093778526"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button class="expert-btn" style={{ fontSize: "15px", fontWeight: "bold" }}>Start My Research Plan</button>
      </a>
    </div>
  </section>

  {/* pricing */ }
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
        <h2 className="faq-title" style={{marginBottom:"20px"}}>Frequently Asked Questions</h2>
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
          <Link to="/data">Data Services</Link>
          <br />
          <Link to="/editorial">Editorial Support</Link>
          <br />
          <Link to="/publication">Publication Support</Link>
          <br />
          <Link to="/academic">Academic Presentation</Link>
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

    </div >

  );
};

export default Research;
