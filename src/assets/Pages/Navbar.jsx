import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/style.css";
import Logo from "../images/logo.webp";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="logo-container">
                <img src={Logo} alt="Company Logo" className="logo" />
            </div>

            <nav className="navbar">
                <ul className="nav-list">
                    <li>
                        <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/services" className="nav-link" onClick={() => setMenuOpen(false)}>
                            Service
                        </Link>
                    </li>
                    <li>
                        <Link to="/faq" className="nav-link" onClick={() => setMenuOpen(false)}>
                            FAQ
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
