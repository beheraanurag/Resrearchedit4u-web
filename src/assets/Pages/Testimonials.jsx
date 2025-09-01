import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/style.css";
import testimonials from "../content/testimonialsdata";

const TestimonialsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="testimonial-section">
      <h2 className="testimonial-heading">Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((t, index) => (
          <div className="testimonial-slide" key={index}>
            <div className="testimonial-card">
              <img src={t.image} alt={t.name} className="testimonial-image" />
              <h3 className="testimonial-name">{t.name}</h3>
              <p className="testimonial-role">{t.role}</p>
              <p className="testimonial-role">{t.company}</p>
              <p className="testimonial-message">“{t.message}”</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TestimonialsSlider;
