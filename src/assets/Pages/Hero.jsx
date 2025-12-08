import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import slidesData from "../content/herodata";
import ServiceBookingForm from "./ServiceBookingForm";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="[&_.swiper-button-next]:text-white [&_.swiper-button-prev]:text-white [&_.swiper-button-next]:scale-75 [&_.swiper-button-prev]:scale-75 [&_.swiper-button-prev]:left-2 md:[&_.swiper-button-prev]:left-5 [&_.swiper-button-next]:right-2 md:[&_.swiper-button-next]:right-5 [&_.swiper-button-next]:scale-50 md:[&_.swiper-button-next]:scale-75 [&_.swiper-button-prev]:scale-50 md:[&_.swiper-button-prev]:scale-75"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <section className="flex flex-col md:flex-row items-center justify-between gap-5 px-5 md:px-[60px] py-10 md:py-20 bg-[#0f0c29]">
              <div className="flex-1 min-w-[300px] w-full md:w-auto">
                <h1 className="text-2xl md:text-[2.4rem] text-white mb-8 md:mb-12 font-serif text-center md:text-left">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-[1.5rem] text-white mb-6 md:mb-8 leading-7 md:leading-[2.2rem] mt-2.5 text-center md:text-left">
                  {slide.desc}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-12 justify-center md:justify-start">
                  <a href={slide.pdfLink} download>
                    <Button
                      variant="secondary"
                      size="lg"
                      className="bg-white text-[#0B2662] hover:bg-[#f1bf08] hover:text-black font-bold rounded-full w-full sm:w-auto"
                    >
                      See Sample
                    </Button>
                  </a>

                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-white text-[#0B2662] hover:bg-[#f1bf08] hover:text-black font-bold rounded-full w-full sm:w-auto"
                    asChild
                  >
                    <Link to="/project-enquiry">Book Now</Link>
                  </Button>
                </div>

                <ul className="flex flex-col gap-5 pl-2.5 text-white text-base md:text-[1.2rem] leading-[1.3] list-none">
                  {slide.features.map((item, i) => (
                    <li key={i} className="border-l-[3px] border-yellow-400 pl-1.5">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full md:w-[35%] md:h-[40%] min-w-[300px] flex justify-center items-center mt-8 md:mt-0">
                <img
                  src={slide.img}
                  alt={`Slide ${index + 1}`}
                  className="w-full max-w-[400px] rounded-xl"
                />
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>

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
