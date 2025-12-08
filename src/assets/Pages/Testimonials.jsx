import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonials from "../content/testimonialsdata";
import { Card, CardContent } from "@/components/ui/card";

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
    <section className="max-w-[1200px] mx-auto my-2.5 px-5 text-center">
      <h2 className="text-[2.2rem] font-semibold mb-8 text-[#0B2662] font-serif">Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((t, index) => (
          <div className="px-4 box-border" key={index}>
            <Card className="bg-white rounded-xl shadow-md p-6 transition-all h-full border border-black hover:bg-[#89b6ea] hover:shadow-lg">
              <CardContent className="p-0">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover mb-4 mx-auto border border-[#89b6ea]"
                />
                <h3 className="text-xl font-semibold text-black mb-1">{t.name}</h3>
                <p className="text-sm text-gray-600 mb-4 font-semibold">{t.role}</p>
                <p className="text-sm text-gray-600 mb-4 font-semibold">{t.company}</p>
                <p className="text-[17px] text-gray-600 leading-6">"{t.message}"</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TestimonialsSlider;
