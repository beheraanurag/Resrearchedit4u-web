import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaHome, FaUser, FaCogs, FaBlog, FaEnvelope, FaInfoCircle, FaChevronDown } from "react-icons/fa";
import "../style/style.css";
import Logo from "../images/logo.webp";
import { FaPhone, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const closeMenu = () => setMenuOpen(false);


  return (

    <div>
      <div className="top-bar">
      <div className="contact-info">
        <span>
          <MdEmail className="icon" /> info@researchedit4u.in
        </span>
        <span>
          <FaPhone className="icon" /> +91-8093778526
        </span>
      </div>

      <div className="social-icons">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaLinkedinIn /></a>
        <a href="#"><FaInstagram /></a>
      </div>
    </div>
      <header className="header">

        <div className="logo-container">
          <img src={Logo} alt="Company Logo" className="logo" />
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>

        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
                <FaHome className="nav-icon" /> Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
                <FaUser className="nav-icon" /> About
              </Link>
            </li>


            {/* Dropdown as a proper <li> */}
            <li className="dropdown">
              <button
                className="dropdown-btn"
                onClick={() => setAboutDropdown(!aboutDropdown)}
              >
                <FaCogs className="nav-icon" /> Services

              </button>
              <div className={`dropdown-content ${aboutDropdown ? "show" : ""}`}>
                <Link to="/Services" className="dropdown-link" onClick={() => { closeMenu(); }}>
                  Service Overview
                </Link>
                <Link to="/Research" className="dropdown-link" onClick={() => { closeMenu(); }}>
                  Research Planning
                </Link>
                <Link to="/Data" className="dropdown-link" onClick={() => { closeMenu(); }}>
                  Data Services
                </Link>
                <Link to="/Editorial" className="dropdown-link" onClick={() => { closeMenu(); }}>
                  Editorial Support
                </Link>
                <Link to="/Publication" className="dropdown-link" onClick={() => { closeMenu(); }}>
                  Publication Support
                </Link>
                <Link to="/Academic" className="dropdown-link" onClick={() => { closeMenu(); }}>
                  Academic Presentation
                </Link>
              </div>
            </li>

            <li>
              <Link to="/blogs" className="nav-link" onClick={() => setMenuOpen(false)}>
                <FaBlog className="nav-icon" /> Blogs
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>
                <FaEnvelope className="nav-icon" /> Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
