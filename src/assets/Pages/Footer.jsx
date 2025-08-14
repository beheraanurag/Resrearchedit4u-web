import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaArrowUp } from "react-icons/fa";
import logo from "../images/footerlogo.webp";
import "../style/style.css";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/faq", label: "FAQ" },
    { to: "/contact", label: "Contact" },
    { to: "/career", label: "Career" }

  ];

  return (
    <footer className="footer-container">
      {/* Footer Top */}
      <div className="footer-top">
        {/* Logo */}
        <div className="footer-logo-container">
          <img src={logo} alt="ResearchEdit4U Logo" className="logofooter" />
        </div>

        {/* About */}
        <div className="footer-brand">
          <h3 className="footer-title">ResearchEdit4U</h3>
          <p className="footer-description">
            ResearchEdit4U delivers exactly what you need — customised academic support tailored to your requirements.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            {links.map((link, index) => (
              <li key={index}>
                <Link to={link.to} onClick={scrollToTop}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3 className="footer-title">Contact Us</h3>
          <p><b>Email:</b>  <a href="mailto:info@researchedit4u.in">info@researchedit4u.in</a></p>
          <p><b>Phone:</b> <a href="tel:+918093778526">+91 8093778526</a></p>
          <p> <b>Location:</b> <a href="Location">Bhubaneswar, Odisha 751020</a></p>
        </div>

        {/* Social */}
        <div className="footer-social">
          <h3 className="footer-title">Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="social-icon"><FaFacebook /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
            <a href="#" className="social-icon"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ResearchEdit4U. All Rights Reserved.</p>
        {isVisible && (
          <button className="scroll-top-btn show" onClick={scrollToTop}>
            <FaArrowUp />
          </button>
        )}
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918093778526"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </footer>
  );
};

export default Footer;
