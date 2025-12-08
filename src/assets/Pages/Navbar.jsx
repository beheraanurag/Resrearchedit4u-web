import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaHome, FaUser, FaCogs, FaBlog, FaEnvelope } from "react-icons/fa";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Logo from "../images/logo.webp";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { to: "/", label: "Home", icon: FaHome },
    { to: "/about", label: "About", icon: FaUser },
    { to: "/blogs", label: "Blogs", icon: FaBlog },
    { to: "/contact", label: "Contact", icon: FaEnvelope },
  ];

  const serviceLinks = [
    { to: "/Services", label: "Service Overview" },
    { to: "/Research", label: "Research Planning" },
    { to: "/Data", label: "Data Services" },
    { to: "/Editorial", label: "Editorial Support" },
    { to: "/Publication", label: "Publication Support" },
    { to: "/Academic", label: "Academic Presentation" },
  ];

  return (
    <header className="w-full px-4 md:px-8 py-2 bg-white flex items-center justify-between shadow-sm sticky top-0 z-50">
      <div className="flex items-center">
        <Link to="/">
          <img src={Logo} alt="Company Logo" className="h-auto w-[80px] md:w-[100px]" />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-4 lg:gap-8">
        {navLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.to}
              to={link.to}
              className="flex items-center gap-2 text-base lg:text-lg font-bold text-gray-800 hover:text-primary transition-colors"
            >
              <Icon className="text-base lg:text-lg" />
              {link.label}
            </Link>
          );
        })}

        {/* Services Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 text-base lg:text-lg font-bold text-gray-800 hover:text-primary">
              <FaCogs className="text-base lg:text-lg" />
              Services
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            {serviceLinks.map((link) => (
              <DropdownMenuItem key={link.to} asChild>
                <Link to={link.to} className="cursor-pointer">
                  {link.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>

      {/* Mobile Navigation */}
      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon" className="md:hidden">
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[85vw] sm:w-[400px]">
          <nav className="flex flex-col gap-4 mt-8">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={closeMenu}
                  className="flex items-center gap-3 text-lg font-bold text-gray-800 hover:text-primary transition-colors py-2"
                >
                  <Icon className="text-lg" />
                  {link.label}
                </Link>
              );
            })}

            {/* Services Section in Mobile */}
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex items-center gap-3 text-lg font-bold text-gray-800 py-2">
                <FaCogs className="text-lg" />
                Services
              </div>
              <div className="flex flex-col gap-1 pl-8">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={closeMenu}
                    className="text-base text-gray-600 hover:text-primary transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Navbar;
