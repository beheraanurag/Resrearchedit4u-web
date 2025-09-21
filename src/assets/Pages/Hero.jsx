import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import '../style/style.css';
import slidesData from "../content/herodata";
import ServiceBookingForm from "./ServiceBookingForm";

const HeroSlider = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [selectedServiceCategory, setSelectedServiceCategory] = useState("");

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

  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <section className={`hero-slide ${slide.bgClass}`}>
              <div className="hero-left">
                <h1>{slide.title}</h1>
                <p>{slide.desc}</p>

                {/* Separate buttons */}
                <a href={slide.pdfLink} download>
                  <button className="explore-btn">See Sample</button>
                </a>
                <button 
                  className="explore-btn" 
                  onClick={() => handleBookService(slide.title, slide.serviceCategory)}
                >
                  Book Now
                </button>

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

      {/* Service Booking Modal */}
      {showBookingForm && (
        <ServiceBookingForm
          service={selectedService}
          serviceCategory={selectedServiceCategory}
          onClose={closeBookingForm}
        />
      )}
    </>
  );
};

export default HeroSlider;
