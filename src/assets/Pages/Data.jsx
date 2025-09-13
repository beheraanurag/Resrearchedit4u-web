import React, { useState } from "react";
import "../style/style.css";
import slide3 from '../images/slide3.webp';
import { servicesData, faqs, packages } from "../content/dataservices";
import AI from '../images/reach.webp';
import Journal from '../images/review.webp';
import FINAL from '../images/school.webp';
import PAY from '../images/payment.webp';
import Risk from '../images/blueprint.webp';
import { FaCheck, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";


const Data = () => {
  const [activeTab, setActiveTab] = useState("Research Planning");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };


  return (
    <div>
      {/* Hero section Over-view */}
      <section className="smart-submission">
        <div className="content">
          <h2>Expert Data Analysis Services for Researchers, PhD Scholars, and Academics.</h2>
          <p className="description">
            Unlock the power of data-driven insights with professional support tailored to your research needs.          </p>

          <ul className="feature-list">
            <li>
              <FaCheck className="check-icon" />
              1000+ Researchers Supported Worldwide. </li>
            <li>
              <FaCheck className="check-icon" />
              Global Reach: India, UAE, Australia, UK.
            </li>
            <li>
              <FaCheck className="check-icon" />
              Proven Expertise in Advanced Data Analysis
            </li>
          </ul>

          <div className="btn-wrapper">
            <button className="cta-btn">Get Started</button>
            <button className="cta-btn secondary">View All Services</button>
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
            <div className="trust-icon" >🌍</div>
            <h3> Academic Expertise Globally </h3>
            <p>Statisticians and data scientists across India, UAE, UK, Australia.</p>
          </div>

          <div className="trust-card-circle" >
            <div className="trust-icon">📈</div>
            <h3>High Publication Success Rate</h3>
            <p>Research support aligned with top-tier journal standards.</p>
          </div>

          <div className="trust-card-circle" >
            <div className="trust-icon">📝</div>
            <h3>Ethical & University-Compliant </h3>
            <p>Strictly adhering to academic integrity and compliance.</p>
          </div>
        </div>
        <div className="trust-stats">
          Trusted by 1,200+ researchers in india
        </div>
      </section>

      {/* Sub- Services */}
      <div className="services-container">
        <h2 className="Core-services" style={{ marginBottom: "20px" }}>Sub-Services</h2>
        <h2 style={{ fontSize: "19px", color: "grey", fontWeight: "500" }}>Specialized services crafted to enhance efficiency, productivity, and organizational success.        </h2>

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
                <a
                  href={service.bookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="book">Book Now</button>
                </a>
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
            <h3>Data Submission</h3>
            <p>Upload data securely, ensure confidentiality, receive acknowledgment.</p>
          </div>

          <div class="offer-card" style={{ border: "none", background: "#eff2fb" }}>
            <img src={Risk} alt="Rejection Risk Check" />
            <h3>Project Scoping</h3>
            <p>Analyze requirements, define objectives, plan methodology, get transparent quotation & payment options.</p>
          </div>
          <div class="offer-card" style={{ border: "none", background: "#eff2fb" }}>
            <img src={PAY} alt="Rejection Risk Check" />
            <h3>Quotation & Payment</h3>
            <p>Detailed Quotation and Transparent Payment Terms for Seamless Project Execution and Client Satisfaction.</p>
          </div>

          <div class="offer-card" style={{ border: "none", background: "#eff2fb" }}>
            <img src={Journal} alt="Journal Match Pro" />
            <h3>Research Execution </h3>
            <p>Clean & preprocess data, perform advanced analysis, interpret results, share progress updates.</p>
          </div>

          <div class="offer-card" style={{ border: "none", background: "#eff2fb" }}>
            <img src={FINAL} alt="Journal Match Pro" />
            <h3>Delivery & Ongoing Support</h3>
            <p>Deliver final report, ensure compliance, provide revisions, offer ongoing consultation.</p>
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
          <Link to="/research">Research Planning</Link>
          <br/>
          <Link to="/editorial">Editorial Support</Link>
          <br/>
          <Link to="/publication">Publication Support</Link>
          <br/>
          <Link to="/academic">Academic Presentation</Link>
        </div>

        <p className="services-text">
          Turn your data into publishable insights today. <br />
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

    </div>

  );
};

export default Data;
