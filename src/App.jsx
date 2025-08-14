import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import '../src/assets/style/style.css';
import Navbar from './assets/Pages/Navbar';
import Hero from './assets/Pages/Hero';
import Process from './assets/Pages/Process';
import TestimonialPage from './assets/Pages/Testimonials';
import Faq from './assets/Pages/Faq';
import Services from './assets/Pages/Services';
import AboutUs from './assets/Pages/About';
import Contact from './assets/Pages/Contact';
import Footer from './assets/Pages/Footer';
import QuickStartForm from './assets/Pages/Quickform';
import Blogs from './assets/Pages/Blogs';
import Career from './assets/Pages/Career';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/" element={
            <>
              <Hero />
              <Process />
              <TestimonialPage />
              <Faq />
              {/* <QuickStartForm /> */}
              <Footer />

            </>

          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Career" element={<Career />} />

      </Routes>

    </Router>
  );
}

export default App;
