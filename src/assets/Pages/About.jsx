import React, { useEffect, useState } from 'react';
import "../style/style.css";
import aboutImg from "../images/aboutimg.webp";
import Professionl from "../images/professionl.webp";
import Discipline from "../images/discipline.webp";
import Best from "../images/best.webp";
import { FaBookOpen, FaChartBar, FaCheckCircle, FaClipboardList, FaGraduationCap, FaPenFancy, FaStopwatch, FaWhatsapp } from "react-icons/fa";
import { MdAccessTime } from 'react-icons/md';
import { BsCashCoin } from 'react-icons/bs';
import { HiOutlineUserGroup } from 'react-icons/hi';


const stats = [
  { value: 4500, label: "Papers Edited" },
  { value: 1200, label: "Synopsis Supported" },
  { value: 2800, label: "Literature Reviews" },
  { value: 950, label: "Theses Guided" },
  { value: 1700, label: "PhD Scholars Helped" },
];
const services = [
  {
    icon: FaStopwatch,
    title: "Faster Results Turnaround",
    description: "Swift delivery timelines that respect your deadlines without compromising on accuracy.",
  },
  {
    icon: FaCheckCircle,
    title: "Rigorous Quality Control",
    description: "Multi-level reviews by senior editors and subject-matter experts for unmatched precision.",
  },
  {
    icon: HiOutlineUserGroup,
    title: "Dedicated Client Interaction",
    description: "One-on-one guidance with clear updates, ensuring your voice and goals are never lost.",
  },
  {
    icon: BsCashCoin,
    title: "Reliable Transparent Pricing",
    description: "Straightforward costs with no hidden charges — you always know what you’re paying for.",
  },

];

const AboutUs = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, i) => {
      let start = 0;
      const end = stat.value;
      const step = Math.ceil(end / 200); // controls speed
      return setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(intervals[i]);
        }
        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[i] = start;
          return newCounts;
        });
      }, 20); // 20ms per update
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className="about-container" id='lean-more'>
      {/* Section: About */}
      <section className="hover-section">
        <h1 className="about-title">About ResearchEdit4U</h1>
        <p className="about-hero">
          ResearchEdit4U was born from late-night hours in labs, libraries, and PhD cubicles.
        </p>

        <div className="about-section-flex">
          <div className="about-img-wrapper">
            <img src={aboutImg} alt="About" className="about-img" />
          </div>
          <div className="about-text-content">
            <p>
              Our founders lived the academic grind  leaving halfway not by choice but by circumstance.
              Harassment. Toxic supervision. Abandoned dreams. What hurt most? The absence of support,
              guidance, and a safe space for scholars.
            </p>
            <p>
              ResearchEdit4U was born from that pain. We are not just an editing service, but a movement built by scholars, for scholars, with a deep commitment to clarity, credibility, and impact. We understand what’s at stake: your research, your career, your well-being, and your future opportunities. Our mission is to empower researchers with guidance, tools, and professional support that help transform ideas into publishable, high-quality work recognized worldwide.
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
              <div className="stat-value">{counts[index]}+</div>
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
      <section className="why-choose-us" style={{ padding: "15px" }}>
        <h2 style={{ marginBottom: "20px" }}>Why Choose Us</h2>
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
          <button className="cta-button">Get Started</button>
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
