// HeroSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Import Autoplay module
import 'swiper/css';
import '../style/style.css';
import slide1 from '../images/slide1.webp';
import slide2 from '../images/slide2.webp';
import slide3 from '../images/slide3.webp';
import slide4 from '../images/slide4.webp';


const slidesData = [
  {
    title: "Pass AI and Plagiarism Checks Confidently Everytime",
    desc: "We rewrite AI-generated or copied content to pass GPTZero and Turnitin—humanised by real editors with 95%+ success.",
    features: [
      "Rewrite + De-plag in 24 hrs",
      "Human editors, no bots",
      "Trusted by 5M+ researchers globally",
      "Affordable check starts at ₹500",
    ],
    img: slide4,
    bgClass: "slide-bg3"

  },
  {
    title: "Abstract, Introduction and Manuscript Help Anytime",
    desc: "Struggling with writing flow, structure, or clarity? We help you write better without losing your voice expert support only.",
    features: [
      "Complete guidance by subject experts",
      "Logical flow + correct presentation",
      "1:1 consult with PhD specialists",
      "Track changes + expert comments",
    ],
    img: slide3,
    bgClass: "slide-bg1"

  },
  {
    title: "Graphical Abstracts and Figures That Impress Editors",
    desc: "Get scientific figures and graphical abstracts that impress editors designed for clarity, impact, and publication success.",
    features: [
      "Flat Infographic Designs",
      "Enhanced Presentation Graphics",
      "Journal & Conference Ready",
      "10K+ Visuals Delivered",
    ],
    img: slide2,
    bgClass: "slide-bg2"

  },
  {
    title: " Research Paper Editing &  Journals Submission Support ",
    desc: "From editing to journal submission—get published faster in Scopus/SCI journals with support from PhD experts.",
    features: [
      "Language + formatting by PhDs",
      "Journal matching & submission",
      "Submission-ready in <48 hrs",
      "Supported 20,000+ researchers",
    ],
    img: slide1,
    bgClass: "slide-bg4"

  },
];

const HeroSlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{
        delay: 10000, // 10 seconds
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      {slidesData.map((slide, index) => (
        <SwiperSlide key={index}>
          <section className={`hero-slide ${slide.bgClass}`} >
            <div className="hero-left" >
              <h1>{slide.title}</h1>
              <p>{slide.desc}</p>
              <button className="explore-btn">See Sample & Book Now </button>
              <ul className="hero-features">
                {slide.features.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="hero-right">
              <img src={slide.img} alt={`Slide ${index + 1}`} className="hero-img" />
            </div>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
