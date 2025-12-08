import React, { useState } from "react";
import { FaCheck, FaWhatsapp } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { servicesData, faqs, steps, services, summary, testimonials, cstudies } from "../content/seroverviewdata";
import slide3 from '../images/slide3.webp';
import Slider from "react-slick";
import ReactCountryFlag from "react-country-flag";
import ServiceBookingForm from "./ServiceBookingForm";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Services = () => {
  const [activeTab, setActiveTab] = useState("Research Planning");
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
    <>
      {/* Hero section Over-view */}
      <section className="flex flex-col md:flex-row items-center justify-between px-5 md:px-10 py-10 bg-[#0f0c29] gap-5">
        <div className="flex-1 max-w-[900px] px-5 md:px-10">
          <h2 className="text-2xl md:text-[2.4rem] font-bold text-white mb-5 font-serif text-center md:text-left">Comprehensive Research Support</h2>
          <p className="text-lg md:text-[1.4rem] text-white mb-6 font-medium leading-7 md:leading-[2.2rem] text-center md:text-left">
            Expert guidance for researchers and scholars in India, UAE, Australia, UK & beyond.
            From topic selection to publication, we deliver end-to-end, university-compliant support.
          </p>

          <ul className="list-none p-0 m-0 mb-9">
            <li className="flex items-center text-base md:text-[1.2rem] font-medium mb-3.5 text-gray-100">
              <FaCheck className="text-[#f0a70a] mr-2.5 text-lg" />
              1000+ researchers supported globally
            </li>
            <li className="flex items-center text-[1.2rem] font-medium mb-3.5 text-gray-100">
              <FaCheck className="text-[#f0a70a] mr-2.5 text-lg" />
              Trusted in 25+ countries, including India, UAE, Australia, UK, USA
            </li>
            <li className="flex items-center text-[1.2rem] font-medium mb-3.5 text-gray-100">
              <FaCheck className="text-[#f0a70a] mr-2.5 text-lg" />
              High journal acceptance success rate
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-5 flex-wrap justify-center md:justify-start">
            <Button className="bg-white text-[#0B2662] text-sm md:text-base font-semibold px-5 md:px-7 py-3 md:py-3.5 rounded-[25px] hover:bg-[#89b6ea] w-full sm:w-auto">
              Get Started
            </Button>
            <Button variant="secondary" className="bg-white text-[#0B2662] text-sm md:text-base font-semibold px-5 md:px-7 py-3 md:py-3.5 rounded-[25px] hover:bg-[#89b6ea] w-full sm:w-auto">
              View All Services
            </Button>
          </div>
        </div>

        <div className="flex-1 max-w-[600px] w-full flex justify-center items-center mt-8 md:mt-0">
          <img src={slide3} alt="overview-img" className="max-w-[90%] md:max-w-[70%] h-auto rounded-lg" />
        </div>
      </section>

      {/* why choose us */}
      <section className="px-5 py-8 bg-white text-center">
        <h2 className="text-[2.2rem] font-bold mb-5 text-[#0B2662] font-serif">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1400px] mx-auto px-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="bg-white rounded-2xl p-8 shadow-md transition-all text-left border-none relative overflow-hidden z-[1] hover:before:w-full hover:cursor-pointer">
                <div className="text-[58px] text-[#0056ff] mb-4.5 bg-[#e0ecff] p-4 rounded-xl inline-block">
                  <Icon />
                </div>
                <CardHeader className="p-0">
                  <CardTitle className="text-[22px] font-bold mb-2.5 text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">{service.subtitle}</h4>
                  <p className="text-lg text-gray-600 leading-6">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Service Category Summary */}
      <section className="px-5 py-8 bg-white text-center">
        <h2 className="text-[2.2rem] font-bold mb-5 text-[#0B2662] font-serif">Service Category Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1400px] mx-auto px-4">
          {summary.map((summaryItem, index) => {
            const Icon = summaryItem.icon;
            return (
              <Card key={index} className="bg-white rounded-2xl p-8 shadow-md transition-all text-left border-none relative overflow-hidden z-[1] hover:before:w-full hover:cursor-pointer">
                <div className="text-[58px] text-[#0056ff] mb-4.5 bg-[#e0ecff] p-4 rounded-xl inline-block">
                  <Icon />
                </div>
                <CardHeader className="p-0">
                  <CardTitle className="text-[22px] font-bold mb-2.5 text-gray-900">{summaryItem.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <h4 className="text-lg font-semibold text-gray-700 mb-0.5 mt-5">{summaryItem.subtitle}</h4>
                  {summaryItem.para.map((text, i) => (
                    <p key={i} className="text-lg text-gray-600 leading-6">{i + 1}. {text}</p>
                  ))}
                  <h4 className="text-lg font-semibold text-gray-700 mb-0.5 mt-5">{summaryItem.description}</h4>
                  {summaryItem.content.map((text, i) => (
                    <p key={i} className="text-lg text-gray-600 leading-6">{i + 1}. {text}</p>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* core Services */}
      <div className="px-5 py-5 bg-white">
        <h2 className="text-[2.2rem] font-serif text-[#0B2662] text-center mb-5">Core Services</h2>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="flex justify-center flex-wrap gap-4 mb-8">
            {Object.keys(servicesData).map((tab) => (
              <TabsTrigger key={tab} value={tab} className="px-5 py-2.5 text-lg border-none bg-white rounded-md cursor-pointer font-bold transition-colors data-[state=active]:bg-[#0B2662] data-[state=active]:text-white">
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.keys(servicesData).map((tab) => (
            <TabsContent key={tab} value={tab}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-[1500px] mx-auto">
                {servicesData[tab].map((service, index) => (
                  <Card key={index} className="flex flex-col justify-between bg-white rounded-xl p-6 shadow-md text-center border border-[#0B2662] transition-transform min-h-[440px] hover:bg-[#FAF9EE] hover:-translate-y-1">
                    <div className="text-8xl mb-4">{service.img}</div>
                    <CardHeader className="p-0">
                      <CardTitle className="text-[26px] mb-2.5 text-[#0B2662] min-h-[50px] font-bold">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 flex-1 flex flex-col">
                      <p className="font-bold text-[#0B2662] mb-4 min-h-[20px] text-[22px]">{service.price}</p>
                      <ul className="list-disc pl-5 text-left text-lg leading-6 mb-5 text-gray-600 flex-1">
                        {service.features.map((feat, i) => (
                          <li key={i} className="mb-2.5">{feat}</li>
                        ))}
                      </ul>
                      <div className="flex justify-center gap-3 mt-auto mb-5">
                        <Button
                          className="bg-[#0B2662] text-white hover:bg-[#144eca]"
                          asChild
                        >
                          <Link to="/project-enquiry">Book Now</Link>
                        </Button>
                        <Button asChild variant="outline" className="bg-[#0B2662] text-white hover:bg-[#144eca]">
                          <a href={service.pdfLink} download>Download Sample</a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Know ur Process */}
      <section className="text-center px-5 py-2.5">
        <h2 className="text-[2.2rem] text-[#0B2662] font-bold mb-8 font-serif">Know our Process</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {steps.map((step, idx) => (
            <Card key={idx} className="w-[180px] bg-gray-50 p-5 rounded-xl shadow-md transition-all hover:-translate-y-1 hover:shadow-lg hover:bg-[#89b6ea] cursor-pointer">
              <CardContent className="p-0">
                <img src={step.icon} alt={step.title} className="w-12 mb-4" />
                <h4 className="text-lg text-gray-900 mb-2 font-bold">{step.title}</h4>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-[1200px] mx-auto my-2.5 px-5 text-center">
        <h2 className="text-[2.2rem] font-semibold mb-8 text-[#0B2662] font-serif mt-8">Testimonials</h2>
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div className="px-4 box-border" key={index}>
              <Card className="bg-white rounded-xl shadow-md p-6 transition-all h-full border border-black hover:bg-[#89b6ea] hover:shadow-lg">
                <CardContent className="p-0">
                  <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full object-cover mb-4 mx-auto border border-[#89b6ea]" />
                  <p className="text-[17px] text-gray-600 leading-6 mb-5">"{t.message}"</p>
                  <h3 className="text-xl font-semibold text-black mb-1 mt-5">{t.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 font-semibold">{t.company}</p>
                  <ReactCountryFlag
                    countryCode={t.countryCode}
                    svg
                    className="text-[58px]"
                  />
                </CardContent>
              </Card>
            </div>
          ))}
        </Slider>
      </section>

      {/* FAQ */}
      <div className="max-w-[800px] mx-auto px-2.5 mt-8">
        <h2 className="text-[2.2rem] font-serif text-[#0B2662] mb-10 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-gray-300 rounded-lg mb-3 px-4 py-2.5 bg-gray-50">
              <AccordionTrigger className="font-semibold text-lg hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-700 pt-2.5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Case Studies */}
      <section className="px-5 py-8 bg-white text-center">
        <h2 className="text-[2.2rem] font-bold mb-5 text-[#0B2662] font-serif">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1400px] mx-auto px-4">
          {cstudies.map((cstudy, index) => (
            <Card key={index} className="bg-white rounded-2xl p-8 shadow-md transition-all text-left border-none relative overflow-hidden z-[1] hover:before:w-full hover:cursor-pointer">
              <div className="text-[58px] text-[#0056ff] mb-4.5 bg-[#e0ecff] p-4 rounded-xl inline-block">
                <ReactCountryFlag
                  countryCode={cstudy.countryCode}
                  svg
                />
              </div>
              <CardHeader className="p-0">
                <CardTitle className="text-[22px] font-bold mb-2.5 text-gray-900">{cstudy.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <h4 className="text-lg font-semibold text-gray-700 mb-0.5 mt-5">{cstudy.Client}</h4>
                <p className="text-lg text-gray-600 leading-6">{cstudy.Clientdesc}</p>
                <h4 className="text-lg font-semibold text-gray-700 mb-0.5 mt-2.5">{cstudy.Challenge}</h4>
                <p className="text-lg text-gray-600 leading-6">{cstudy.Challengedesc}</p>
                <h4 className="text-lg font-semibold text-gray-700 mb-0.5 mt-2.5">{cstudy.Solution}</h4>
                <p className="text-lg text-gray-600 leading-6">{cstudy.Solutiondesc}</p>
                <h4 className="text-lg font-semibold text-gray-700 mb-0.5 mt-2.5">{cstudy.Result}</h4>
                <p className="text-lg text-gray-600 leading-6">{cstudy.Resultsdesc}</p>
                <Button className="mt-5">Download</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Section: Get In Touch */}
      <section className="text-center px-5 py-12 bg-[#0B2662] rounded-2xl my-12 mx-auto max-w-[950px] shadow-lg">
        <h2 className="text-[28px] font-bold text-white mb-4">Ready to advance your research journey ?</h2>
        <p className="text-lg text-gray-100 mb-6 leading-6">
          Ready to start planning your research with us? <br />
          <strong>Get in touch today.</strong>
        </p>

        <a
          href="https://wa.me/919876543210?text=Hello%20Researchedit4u%2C%20I%20would%20like%20to%20book%20a%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#25D366] text-white text-lg font-bold rounded-[50px] no-underline transition-colors hover:bg-[#1ebe5d]"
        >
          <FaWhatsapp className="text-[30px]" />
          Book a Free Consultation / Submit Your Research Idea
        </a>
      </section>

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

export default Services;
