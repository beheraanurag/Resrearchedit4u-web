import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaArrowUp,
} from "react-icons/fa";
import logo from "../images/logo.webp";
import "../style/style.css";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <footer className="footer-container">
      <div className="footer-top">
        {/* Company Info */}
        <div className="footer-brand">
          <h3 className="footer-title">ResearchEdit4u</h3>
          <p className="footer-description">
          Research4U provides what students seek! We hear your pleas and then customise the paper accordingly with our expertise.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
            <li><Link to="/about" onClick={scrollToTop}>About</Link></li>
            <li><Link to="/services" onClick={scrollToTop}>Services</Link></li>
            <li><Link to="/faq" onClick={scrollToTop}>Faq</Link></li>
            <li><Link to="/contact" onClick={scrollToTop}>Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3 className="footer-title">Contact Us</h3>
          <p>Email: <a href="mailto:info@asenterprises.com">info@researchedit4u.in</a></p>
          <p>Phone: <a href="tel:+919876543210">+91 8093778526</a></p>
          <p>Location: Bhubaneswar, Odisha 751020</p>
        </div>

        {/* Social Media */}
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
        <p>© 2025 A&S Enterprises. All Rights Reserved.</p>
        {isVisible && (
          <button className="scroll-top-btn show" onClick={scrollToTop}>
            <FaArrowUp />
          </button>
        )}
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/+918093778526"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>
    </footer>
  );
};

export default Footer;
