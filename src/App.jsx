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
import Blogs from './assets/Pages/Blogs';
import Career from './assets/Pages/Career';
import Research from './assets/Pages/Research';
import Data from './assets/Pages/Data';
import Editorial from './assets/Pages/Editorial';
import Publication from './assets/Pages/Publication';
import Academic from './assets/Pages/Academic';
import Quickform from './assets/Pages/Quickform';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Process />
            <TestimonialPage />
            <Faq/>
            {/* <Quickform/> */}
          </>

        }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/Research" element={<Research />} />
        <Route path="/Data" element={<Data />} />
        <Route path="/Editorial" element={<Editorial />} />
        <Route path="/Publication" element={<Publication />} />
        <Route path="/Academic" element={<Academic />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
