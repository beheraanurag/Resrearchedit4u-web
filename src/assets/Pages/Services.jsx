import React, { useState } from "react";
import "../style/style.css";
import { FaCheck, FaWhatsapp } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { servicesData, faqs, steps, services, summary, testimonials, cstudies } from "../content/seroverviewdata";
import slide3 from '../images/slide3.webp';
import Slider from "react-slick";
import ReactCountryFlag from "react-country-flag";
import ServiceBookingForm from "./ServiceBookingForm";


const Services = () => {
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };
  return (
    <>
      {/* Hero section Over-view */}
      <section className="smart-submission">
        <div className="content">
          <h2>Comprehensive Research Support</h2>
          <p className="description">
            Expert guidance for researchers and scholars in India, UAE, Australia, UK & beyond.
            From topic selection to publication, we deliver end-to-end, university-compliant support.
          </p>

          <ul className="feature-list">
            <li>
              <FaCheck className="check-icon" />
              1000+ researchers supported globally
            </li>
            <li>
              <FaCheck className="check-icon" />
              Trusted in 25+ countries, including India, UAE, Australia, UK, USA
            </li>
            <li>
              <FaCheck className="check-icon" />
              High journal acceptance success rate
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

      {/* why choose us */}
      <section className="why-choose-us">
        <h2>Why Choose Us</h2>
        <div className="service-cards">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div className="service-card" key={index}>
                <h3 className="service-icon"><Icon /></h3>
                <h3>{service.title}</h3>
                <h4>{service.subtitle}</h4>
                <p>{service.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Service Category Summary */}
      <section className="why-choose-us">
        <h2>Service Category Summary</h2>
        <div className="service-cards">
          {summary.map((summary, index) => {
            const Icon = summary.icon;
            return (
              <div className="service-card" key={index}>
                <h3 className="service-icon"><Icon /></h3>

                <h3>{summary.title}</h3>
                <h4 style={{ marginBottom: "2px", marginTop: "20px" }}>{summary.subtitle}</h4>
                {summary.para.map((text, i) => (
                  <p key={i}>{i + 1}. {text}</p>
                ))}
                <h4 style={{ marginBottom: "2px", marginTop: "20px" }}>{summary.description}</h4>
                {summary.content.map((text, i) => (
                  <p key={i}>{i + 1}. {text}</p>
                ))}
              </div>
            );
          })}

        </div>
      </section>

      {/* core Services */}
      <div className="services-container">
        <h2 className="Core-services">Core Services</h2>
        <div className="tabs">
          {Object.keys(servicesData).map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="card-grid">
          {servicesData[activeTab].map((service, index) => (
            <div className="card" key={index}>
              <div className="icon">{service.img}</div>
              <h3>{service.title}</h3>
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
      {/* Know ur Process */}
      <section className="process-section">
        <h2 style={{ marginBottom: "30px" }}>Know our Process </h2>
        <div className="steps-grid">
          {steps.map((step, idx) => (
            <div key={idx} className="step-card">
              <img src={step.icon} alt={step.title} />
              <h4>{step.title}</h4>
            </div>
          ))}
        </div>

        {/* Testimonials */}
      </section>
      <section className="testimonial-section">
        <h2 className="testimonial-heading" style={{ marginTop: "30px" }}>Testimonials</h2>
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div className="testimonial-slide" key={index}>
              <div className="testimonial-card">
                <img src={t.image} alt={t.name} className="testimonial-image" />
                <p className="testimonial-message">“{t.message}”</p>
                <h3 className="testimonial-name" style={{ marginTop: "20px" }}>{t.name}</h3>
                <p className="testimonial-role">{t.company}</p>
                <ReactCountryFlag
                  countryCode={t.countryCode}
                  svg
                  className="service-icon"
                />

              </div>
            </div>
          ))}
        </Slider>
      </section>


      {/* FAQ */}
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
      {/* Case Studies */}
      <section className="why-choose-us">
        <h2>Case Studies</h2>
        <div className="service-cards">
          {cstudies.map((cstudies, index) => (
            <div className="service-card" key={index}>
              <ReactCountryFlag
                countryCode={cstudies.countryCode}
                svg
                className="service-icon"
              />
              <h3>{cstudies.title}</h3>
              <h4 style={{ marginBottom: "2px", marginTop: "20px" }}>{cstudies.Client}</h4>
              <p>{cstudies.Clientdesc}</p>
              <h4 style={{ marginBottom: "2px", marginTop: "10px" }}>{cstudies.Challenge}</h4>
              <p>{cstudies.Challengedesc}</p>
              <h4 style={{ marginBottom: "2px", marginTop: "10px" }}>{cstudies.Solution}</h4>
              <p>{cstudies.Solutiondesc}</p>
              <h4 style={{ marginBottom: "2px", marginTop: "10px" }}>{cstudies.Result}</h4>
              <p>{cstudies.Resultsdesc}</p>
              <button className="cta-button" style={{ marginTop: "20px" }}>Download</button>
            </div>
          ))}
        </div>

      </section>

      {/* Section: Get In Touch */}
      <section className="related-services">
        <h2 className="services-title">Ready to advance your research journey ?</h2>
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

      {/* Service Booking Modal */}
      {showBookingForm && (
        <ServiceBookingForm
          service={selectedService}
          serviceCategory={selectedServiceCategory}
          onClose={closeBookingForm}
        />
      )}

    </>
  );
};

export default Services;
