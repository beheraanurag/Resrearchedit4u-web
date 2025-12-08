import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaArrowUp } from "react-icons/fa";
import logo from "../images/footerlogo.webp";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
    { to: "/blogs", label: "Blogs" },
    { to: "/contact", label: "Contact" },
    { to: "/career", label: "Career" }
  ];

  return (
    <footer className="bg-[#071142] text-white pt-15 pb-8 px-6 rounded-t-[20px] overflow-hidden">
      {/* Footer Top */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-[1400px] mx-auto text-left mb-10">
        {/* Logo */}
        <div className="flex justify-center items-center mb-10 md:col-span-1 lg:col-span-4">
          <img src={logo} alt="ResearchEdit4U Logo" className="h-[130px] rounded-full p-4 bg-white object-contain" />
        </div>

        {/* About */}
        <Card className="bg-transparent border-0 shadow-none">
          <CardContent className="p-0">
            <h3 className="text-xl font-bold mb-3.5 text-white relative after:content-[''] after:block after:w-10 after:h-0.5 after:bg-white after:mt-1.5">
              ResearchEdit4U
            </h3>
            <p className="text-white text-[15px] leading-[1.7] mb-2.5">
              ResearchEdit4U delivers exactly what you need — customised academic support tailored to your requirements.
            </p>
          </CardContent>
        </Card>

        {/* Quick Links */}
        <Card className="bg-transparent border-0 shadow-none">
          <CardContent className="p-0">
            <h3 className="text-xl font-bold mb-3.5 text-white relative after:content-[''] after:block after:w-10 after:h-0.5 after:bg-white after:mt-1.5">
              Quick Links
            </h3>
            <ul className="list-none p-0 m-0">
              {links.map((link, index) => (
                <li key={index} className="my-2">
                  <Link
                    to={link.to}
                    onClick={scrollToTop}
                    className="text-white text-[15px] no-underline transition-colors hover:text-[#f4b400]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card className="bg-transparent border-0 shadow-none">
          <CardContent className="p-0">
            <h3 className="text-xl font-bold mb-3.5 text-white relative after:content-[''] after:block after:w-10 after:h-0.5 after:bg-white after:mt-1.5">
              Contact Us
            </h3>
            <p className="text-[15px] leading-[1.6] text-gray-300 mb-2.5">
              <b>Email:</b> <a href="mailto:info@researchedit4u.in" className="text-gray-300 no-underline transition-colors hover:text-[#f4b400]">info@researchedit4u.in</a>
            </p>
            <p className="text-[15px] leading-[1.6] text-gray-300 mb-2.5">
              <b>Phone:</b> <a href="tel:+918093778526" className="text-gray-300 no-underline transition-colors hover:text-[#f4b400]">+91 8093778526</a>
            </p>
            <p className="text-[15px] leading-[1.6] text-gray-300 mb-2.5">
              <b>Location:</b> <a href="Location" className="text-gray-300 no-underline transition-colors hover:text-[#f4b400]">Bhubaneswar, Odisha 751020</a>
            </p>
          </CardContent>
        </Card>

        {/* Social */}
        <Card className="bg-transparent border-0 shadow-none">
          <CardContent className="p-0">
            <h3 className="text-xl font-bold mb-3.5 text-white relative after:content-[''] after:block after:w-10 after:h-0.5 after:bg-white after:mt-1.5">
              Follow Us
            </h3>
            <div className="flex gap-3.5 mt-4">
              <a href="#" className="text-[22px] text-white transition-all hover:scale-125 hover:text-[#f4b400]">
                <FaFacebook />
              </a>
              <a href="#" className="text-[22px] text-white transition-all hover:scale-125 hover:text-[#f4b400]">
                <FaInstagram />
              </a>
              <a href="#" className="text-[22px] text-white transition-all hover:scale-125 hover:text-[#f4b400]">
                <FaLinkedin />
              </a>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer Bottom */}
      <div className="text-center pt-4.5 mt-10 border-t border-gray-600 text-sm text-gray-400 relative">
        <p>© {new Date().getFullYear()} ResearchEdit4U. All Rights Reserved.</p>
        {isVisible && (
          <Button
            variant="secondary"
            size="icon"
            onClick={scrollToTop}
            className="absolute right-8 bottom-12 bg-[#f2c306] text-gray-800 hover:bg-[#f4b400] hover:-translate-y-1 transition-all"
          >
            <FaArrowUp />
          </Button>
        )}
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918093778526"
        className="fixed bottom-5 right-5 bg-[#25D366] text-white text-[28px] p-3.5 rounded-full shadow-lg transition-transform hover:scale-110 z-[1000] flex items-center justify-center"
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
