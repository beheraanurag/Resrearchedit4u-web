import React, { useState } from "react";
import slide3 from '../images/slide3.webp';
import AI from '../images/reach.webp';
import Journal from '../images/review.webp';
import FINAL from '../images/school.webp';
import PAY from '../images/payment.webp';
import Risk from '../images/blueprint.webp';
import { FaCheck, FaWhatsapp } from "react-icons/fa";
import { servicesData, faqs, packages } from "../content/publication";
import { Link } from "react-router-dom";
import ServiceBookingForm from "./ServiceBookingForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Publication = () => {
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

  const whoThisIsFor = [
    { icon: "🏆", title: "Scholars' Publication Journey", desc: "Guidance for PhD and Master's scholars publishing successfully." },
    { icon: "✅", title: "Researcher Support Services", desc: "Helping independent researchers and lab teams achieve compliance." },
    { icon: "📈", title: "Faculty Journal Submissions", desc: "Assisting faculty with Scopus and UGC journal submissions." },
  ];

  const howItWorks = [
    { img: AI, title: "Consultation & Manuscript Intake", desc: "Share your draft, domain, and target journal publication preferences (e.g., Scopus journal, UGC journals, open access or subscription). We align on scope and feasibility." },
    { img: Risk, title: "Journal Match & Plan", desc: "Receive a curated shortlist (3–5) with scope fit, indexing, indicative timelines, and APC notes. We lock your primary/backup targets and the publication process plan." },
    { img: PAY, title: "Transparent Quote & Payment", desc: "You receive a clear plan and timeline. Our fee is always separate from any journal publication fees/APCs. Work begins after payment confirmation." },
    { img: Journal, title: "Formatting & Compliance", desc: "We prepare your manuscript to the chosen journal's template (structure, references, figures, ethics statements). If language polishing is needed, we coordinate with Editorial Support." },
    { img: FINAL, title: "Submission & Checks", desc: "We prepare portal materials (cover letter, keywords, suggested reviewers where appropriate), validate files, and complete the submission with a requirements checklist." },
  ];

  return (
    <div>
      {/* Hero section Over-view */}
      <section className="flex flex-col md:flex-row items-center justify-between px-5 md:px-10 py-10 bg-[#0f0c29] gap-5">
        <div className="flex-1 max-w-[900px] px-5 md:px-10">
          <h2 className="text-2xl md:text-[2.4rem] font-bold text-white mb-5 font-serif text-center md:text-left">Publish with Integrity, Clarity & Confidence.</h2>
          <p className="text-lg md:text-[1.4rem] text-white mb-6 font-medium leading-7 md:leading-[2.2rem] text-center md:text-left">
            End-to-end publication support covering journal selection, manuscript formatting, peer review responses, open access options, and transparent publication fees.
          </p>

          <ul className="list-none p-0 m-0 mb-9">
            <li className="flex items-center text-base md:text-[1.2rem] font-medium mb-3.5 text-gray-100">
              <FaCheck className="text-[#f0a70a] mr-2.5 text-lg" />
              Scopus/WoS guidance
            </li>
            <li className="flex items-center text-[1.2rem] font-medium mb-3.5 text-gray-100">
              <FaCheck className="text-[#f0a70a] mr-2.5 text-lg" />
              UGC-aligned
            </li>
            <li className="flex items-center text-[1.2rem] font-medium mb-3.5 text-gray-100">
              <FaCheck className="text-[#f0a70a] mr-2.5 text-lg" />
              Ethical & transparent
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-5 flex-wrap justify-center md:justify-start">
            <Button className="bg-white text-[#0B2662] text-sm md:text-base font-semibold px-5 md:px-7 py-3 md:py-3.5 rounded-[25px] hover:bg-[#89b6ea] w-full sm:w-auto">
              Get Started
            </Button>
            <Button variant="secondary" className="bg-white text-[#0B2662] text-sm md:text-base font-semibold px-5 md:px-7 py-3 md:py-3.5 rounded-[25px] hover:bg-[#89b6ea] w-full sm:w-auto">
              See Samples
            </Button>
          </div>
        </div>

        <div className="flex-1 max-w-[600px] w-full flex justify-center items-center mt-8 md:mt-0">
          <img src={slide3} alt="overview-img" className="max-w-[90%] md:max-w-[70%] h-auto rounded-lg" />
        </div>
      </section>

      {/* Who This is For */}
      <section className="text-center px-5 py-8">
        <div className="mb-10">
          <h2 className="text-[2.2rem] font-bold text-[#1e3a8a] mt-8 font-serif">Who This is for</h2>
          <p className="text-lg text-gray-600 mt-2.5">Designed to empower individuals seeking growth, skills, and meaningful opportunities.</p>
        </div>
        <div className="flex justify-center flex-wrap gap-4 md:gap-6">
          {whoThisIsFor.map((item, idx) => (
            <Card key={idx} className="bg-white p-4 md:p-6 h-[250px] md:h-[300px] w-[250px] md:w-[300px] rounded-full border-2 border-black shadow-md transition-all hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:border-[#0a1a79] hover:bg-[#FFDCDC] cursor-pointer">
              <CardContent className="p-0 flex flex-col items-center justify-center h-full">
                <div className="text-8xl mb-4">{item.icon}</div>
                <h3 className="text-lg text-gray-900 mb-3 font-bold">{item.title}</h3>
                <p className="text-base text-gray-600 leading-6">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-2xl text-black">
          Trusted by 1,200+ researchers in india
        </div>
      </section>

      {/* Sub- Services */}
      <div className="px-5 py-5 bg-white">
        <h2 className="text-[2.2rem] font-serif text-[#0B2662] text-center mb-5">Sub-Services</h2>
        <h2 className="text-base text-gray-600 font-normal text-center mb-5">Specialized services crafted to enhance efficiency, productivity, and organizational success.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-[1500px] mx-auto">
          {servicesData[activeTab].map((service, index) => (
            <Card key={index} className="flex flex-col justify-between bg-white rounded-xl p-6 shadow-md text-center border border-[#0B2662] transition-transform min-h-[440px] hover:bg-[#FAF9EE] hover:-translate-y-1">
              <div className="text-8xl mb-4">{service.img}</div>
              <CardHeader className="p-0">
                <CardTitle className="text-[26px] mb-2.5 text-[#0B2662] min-h-[50px] font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1 flex flex-col">
                <ul className="list-disc pl-5 text-left text-lg leading-6 mb-5 text-gray-600 flex-1">
                  {service.features.map((feat, i) => (
                    <li key={i} className="mb-2.5">{feat}</li>
                  ))}
                </ul>
                <p className="font-bold text-[#0B2662] mb-4 min-h-[20px] text-[22px]">Starts at only {service.price}</p>
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
      </div>

      {/* How It Works */}
      <section className="text-center px-5 py-2.5 font-serif">
        <h2 className="text-[2.2rem] text-[#0B2662] font-bold">How It Works</h2>
        <p className="my-1 mx-auto text-xl font-medium text-gray-600 inline-block px-3 py-0.5 rounded mb-5">
          From idea to a ready-to-submit plan, in 4 simple steps.
        </p>

        <div className="flex justify-center gap-8 flex-wrap mb-8">
          {howItWorks.map((step, idx) => (
            <Card key={idx} className="bg-[#eff2fb] p-5 w-[260px] rounded-xl shadow-md transition-all hover:-translate-y-1 hover:scale-105 hover:shadow-lg border-none">
              <CardContent className="p-0">
                <img src={step.img} alt={step.title} className="w-20 h-20 mb-2.5 mx-auto" />
                <h3 className="text-lg text-black mb-2.5 font-bold">{step.title}</h3>
                <p className="text-base text-gray-600 min-h-[40px] leading-[1.4]">{step.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mb-5">
          <a
            href="https://wa.me/+918093778526"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="bg-white text-[#0B2662] border-2 border-black px-5 py-2.5 rounded font-bold text-xl transition-all hover:bg-[#0B2662] hover:text-white">
              Start My Research Plan
            </Button>
          </a>
        </div>
      </section>

      {/* pricing */}
      <section className="px-5 py-5 bg-white text-center">
        <div className="mb-10">
          <h2 className="text-[2.2rem] font-bold text-[#1e3a8a] mb-2.5 font-serif">Packages & Pricing</h2>
          <p className="text-xl text-gray-600">Choose the right package based on your research stage and support needs.</p>
        </div>
        <div className="flex justify-center gap-8 flex-wrap">
          {packages.map((pkg, index) => (
            <Card key={index} className="relative bg-white rounded-2xl p-8 w-[320px] text-left transition-all border border-[#0635c3] shadow-md overflow-hidden z-[1]">
              {pkg.pop && (
                <span className="absolute -top-1 -left-1 bg-gradient-to-br from-[#ff6a00] to-[#ffaf38] text-white px-3.5 py-1.5 text-xs font-extrabold rounded-lg shadow-md pointer-events-none">
                  {pkg.pop}
                </span>
              )}
              <CardContent className="p-0">
                <h2 className="text-3xl font-bold text-[#2563eb] text-center mb-5">{pkg.heading}</h2>
                <h2 className="text-3xl font-bold text-[#2563eb] text-center mb-5">{pkg.price}</h2>
                {pkg.details.map((detail, i) => (
                  <div key={i} className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1.5">{detail.title}</h3>
                    {Array.isArray(detail.subtitle) ? (
                      <ul className="text-base text-gray-600 leading-6">
                        {detail.subtitle.map((text, i) => (
                          <li key={i}>{text}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-base text-gray-600 leading-6">{detail.subtitle}</p>
                    )}
                  </div>
                ))}
                <Button asChild className="block bg-[#2563eb] text-white text-center px-4.5 py-3 rounded-lg font-semibold no-underline transition-colors hover:bg-[#1d4ed8] mt-6 w-full">
                  <a href="#">Get Started Today</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <div className="max-w-[800px] mx-auto px-2.5 mt-8">
        <h2 className="text-[2.2rem] font-serif text-[#0B2662] mb-5 text-center">Frequently Asked Questions</h2>
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

      <section className="text-center px-5 py-12 bg-[#0B2662] rounded-2xl my-12 mx-auto max-w-[950px] shadow-lg">
        <h2 className="text-[28px] font-bold text-white mb-4">Related Services</h2>
        <div className="text-lg mb-6 leading-[1.3]">
          <Link to="/research" className="text-[#e0e7ff] no-underline font-medium transition-colors hover:text-[#facc15] hover:underline">Research Planning</Link>
          <br />
          <Link to="/data" className="text-[#e0e7ff] no-underline font-medium transition-colors hover:text-[#facc15] hover:underline">Data Services</Link>
          <br />
          <Link to="/editorial" className="text-[#e0e7ff] no-underline font-medium transition-colors hover:text-[#facc15] hover:underline">Editorial Support</Link>
          <br />
          <Link to="/academic" className="text-[#e0e7ff] no-underline font-medium transition-colors hover:text-[#facc15] hover:underline">Academic Presentation</Link>
        </div>

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

      {/* Service Booking Form Modal */}
      {showBookingForm && (
        <ServiceBookingForm
          service={selectedService}
          serviceCategory={selectedServiceCategory}
          onClose={closeBookingForm}
        />
      )}
    </div>
  );
};

export default Publication;
