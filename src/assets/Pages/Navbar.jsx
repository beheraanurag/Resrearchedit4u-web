import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaHome, FaUser, FaCogs, FaBlog, FaEnvelope } from "react-icons/fa";
import "../style/style.css";
import Logo from "../images/logo.webp";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
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
          <li>
            <Link to="/services" className="nav-link" onClick={() => setMenuOpen(false)}>
              <FaCogs className="nav-icon" /> Services
            </Link>
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
  );
};

export default Navbar;
