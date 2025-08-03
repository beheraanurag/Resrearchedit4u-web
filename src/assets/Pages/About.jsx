import React from 'react';
import "../style/style.css";
import aboutImg from "../images/aboutimg.webp";
import Professionl from "../images/professionl.webp";
import Discipline from "../images/discipline.webp";
import Best from "../images/best.webp";


const stats = [
  { value: "4,500+", label: "Papers Edited" },
  { value: "1,200+", label: "Synopsis Supported" },
  { value: "2,800+", label: "Literature Reviews" },
  { value: "950+", label: "Theses Guided" },
  { value: "1,700+", label: "PhD Scholars Helped" },
];

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Section: About */}
      <section className="hover-section">
        <h1 className="about-title">About ResearchEdit4U</h1>
        <p className="about-hero">
          At ResearchEdit4U, we were born from a quiet revolution — one sparked not in boardrooms,
          but in the lonely late-night hours of labs, libraries, and PhD cubicles.
        </p>

        <div className="about-section-flex">
          <div className="about-img-wrapper">
            <img src={aboutImg} alt="About" className="about-img" />
          </div>
          <div className="about-text-content">
            <p>
              Our founders lived the academic grind — leaving halfway not by choice but by circumstance.
              Harassment. Toxic supervision. Abandoned dreams. What hurt most? The absence of support,
              guidance, and a safe space for scholars.
            </p>
            <p>
              ResearchEdit4U was born from that pain. We are not just an editing service. We are a
              movement — built by scholars, for scholars. We understand what’s at stake: your research,
              your career, your well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Who We Are */}
      <section className="hover-section">
        <h1 className="who-title">Who We Are</h1>
        <div className="who-cards">
          {[
            {
              heading: "150+ Expert Professionals",
              text: "Over 150 expert editors, peer reviewers, and publication consultants.",
              img: Professionl,

            },
            {
              heading: "20+ Disciplines Covered",
              text: "Across science, medicine, engineering, social sciences, and humanities.",
              img: Discipline,

            },
            {
              heading: "10 Years of Experience",
              text: "A decade in top-tier publishing, editing, and research coaching.",
              img: Best,

            },
          ].map((card, i) => (
            <div key={i} className="who-card">
              <img src={card.img} alt={card.heading} className="card-image" />

              <h2 className="card-heading">{card.heading}</h2>
              <p className="card-subheading">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Stats */}
      <section className="hover-section">
        <h2 className="about-title">What We’ve Achieved</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-box">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Why We Have No Face */}
      <section className="about-card highlighted-section">
        <h2>Why We Have No Face</h2>
        <p>
          We deliberately stand faceless, because we represent you — the invisible researcher,
          the unheard voice, the resilient scholar. No photos. No titles. Just shared struggle
          and shared triumph.
        </p>
      </section>

      {/* Section: How We Work */}
      <section className="about-card highlighted-section">
        <h2>How We Work — And Why It’s Better</h2>
        <ul>
          <li>🚀 Faster Turnaround — Without sacrificing quality</li>
          <li>🧠 Rigorous Quality Control — Senior editors & domain experts</li>
          <li>🤝 Personalized Communication — Tailored to your project</li>
          <li>💰 Transparent Pricing — No hidden fees or surprises</li>
        </ul>
      </section>

      {/* Section: Our Philosophy */}
      <section className="about-card highlighted-section">
        <h2>Our Philosophy</h2>
        <p className="italic">
          “Born from the frustration of overpriced and impersonal editing services,
          ResearchEdit4U was founded to bring fairness, transparency, and excellence
          to academic editing.”
        </p>
        <ul>
          <li>Empowering researchers</li>
          <li>Dignity in the academic journey</li>
          <li>Rebuilding trust with the system</li>
          <li>Edits with care — including career and mental health support</li>
        </ul>
      </section>

      {/* Section: CTA */}
      <div className="about-cta">
        <h3>Join the Movement</h3>
        <p>
          Whether you're polishing a paper, preparing your thesis defence, or just trying
          to survive the next deadline — we’re here. Because your research deserves to be heard.
        </p>
        <a href="Hy">
        <button className="cta-button">Get Started</button></a>
      
      </div>
    </div>
  );
};

export default AboutUs;
