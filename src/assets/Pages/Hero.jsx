import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../style/style.css';
import slidesData from "../content/herodata";
import ServiceBookingForm from "./ServiceBookingForm";
import ProjectEnquiryForm from "./ProjectEnquiryForm";

const HeroSlider = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [selectedServiceCategory, setSelectedServiceCategory] = useState("");
  const [showProjectEnquiry, setShowProjectEnquiry] = useState(false);

  const handleBookService = (service, serviceCategory) => {
    setSelectedService(service);
    setSelectedServiceCategory(serviceCategory);
    setShowBookingForm(true);
  };

  const closeBookingForm = () => {
    setShowBookingForm(false);
    setSelectedService("");
    setSelectedServiceCategory("");
  };

  const handleBookNow = (e) => {
    e.preventDefault();
    setShowProjectEnquiry(true);
  };

  const closeProjectEnquiry = () => {
    setShowProjectEnquiry(false);
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <section className={`hero-slide ${slide.bgClass}`}>
              <div className="hero-left">
                <h1>{slide.title}</h1>
                <p>{slide.desc}</p>

                <a href={slide.pdfLink} download>
                  <button className="explore-btn">See Sample</button>
                </a>

                <button className="explore-btn" onClick={handleBookNow}>Book Now</button>

                <ul className="hero-features">
                  {slide.features.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="hero-right">
                <img
                  src={slide.img}
                  alt={`Slide ${index + 1}`}
                  className="hero-img"
                />
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Project Enquiry Form Modal */}
      {showProjectEnquiry && (
        <ProjectEnquiryForm onClose={closeProjectEnquiry} />
      )}
    </>
  );
};

export default HeroSlider;
