import React, { useEffect, useState } from 'react';
import aboutImg from "../images/aboutimg.webp";
import Professionl from "../images/professionl.webp";
import Discipline from "../images/discipline.webp";
import Best from "../images/best.webp";
import { FaBookOpen, FaChartBar, FaCheckCircle, FaClipboardList, FaGraduationCap, FaPenFancy, FaStopwatch, FaWhatsapp } from "react-icons/fa";
import { MdAccessTime } from 'react-icons/md';
import { BsCashCoin } from 'react-icons/bs';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const stats = [
  { value: 4500, label: "Papers Edited" },
  { value: 1200, label: "Synopsis Supported" },
  { value: 2800, label: "Literature Reviews" },
  { value: 950, label: "Theses Guided" },
  { value: 1700, label: "PhD Scholars Helped" },
];
const services = [
  {
    icon: FaStopwatch,
    title: "Faster Results Turnaround",
    description: "Swift delivery timelines that respect your deadlines without compromising on accuracy.",
  },
  {
    icon: FaCheckCircle,
    title: "Rigorous Quality Control",
    description: "Multi-level reviews by senior editors and subject-matter experts for unmatched precision.",
  },
  {
    icon: HiOutlineUserGroup,
    title: "Dedicated Client Interaction",
    description: "One-on-one guidance with clear updates, ensuring your voice and goals are never lost.",
  },
  {
    icon: BsCashCoin,
    title: "Reliable Transparent Pricing",
    description: "Straightforward costs with no hidden charges — you always know what you're paying for.",
  },
];

const AboutUs = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, i) => {
      let start = 0;
      const end = stat.value;
      const step = Math.ceil(end / 200);
      return setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(intervals[i]);
        }
        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[i] = start;
          return newCounts;
        });
      }, 20);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className="bg-white text-gray-800 px-6 py-8 max-w-[1200px] mx-auto" id='lean-more'>
      {/* Section: About */}
      <section>
        <h1 className="text-[2.2rem] font-bold text-center text-[#0B2662] mb-4 font-serif">About ResearchEdit4U</h1>
        <p className="text-center text-xl mb-8">
          ResearchEdit4U was born from late-night hours in labs, libraries, and PhD cubicles.
        </p>

        <div className="flex flex-wrap items-center gap-12 my-5">
          <div className="flex-1 min-w-[300px] max-w-[500px]">
            <img src={aboutImg} alt="About" className="w-full h-auto rounded-xl shadow-md transition-transform hover:scale-[1.03]" />
          </div>
          <div className="flex-1 min-w-[300px] max-w-[600px]">
            <p className="mb-4 leading-6 text-gray-800 text-lg">
              Our founders lived the academic grind  leaving halfway not by choice but by circumstance.
              Harassment. Toxic supervision. Abandoned dreams. What hurt most? The absence of support,
              guidance, and a safe space for scholars.
            </p>
            <p className="mb-4 leading-6 text-gray-800 text-lg">
              ResearchEdit4U was born from that pain. We are not just an editing service, but a movement built by scholars, for scholars, with a deep commitment to clarity, credibility, and impact. We understand what's at stake: your research, your career, your well-being, and your future opportunities. Our mission is to empower researchers with guidance, tools, and professional support that help transform ideas into publishable, high-quality work recognized worldwide.
            </p>
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Section: Who We Are */}
      <section>
        <h1 className="text-[2.2rem] font-bold text-center mb-4 text-[#0B2662] font-serif mt-12">Who We Are</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center bg-transparent mt-8">
          {[
            {
              heading: "150+ Expert Professionals",
              text: "Over 150 expert editors, peer reviewers, and publication consultants.",
              img: Professionl,
            },
            {
              heading: "20+ Disciplines Covered",
              text: "Across science, medicine, engineering, social sciences, and humanities.",
              img: Discipline,
            },
            {
              heading: "10 Years of Experience",
              text: "A decade in top-tier publishing, editing, and research coaching.",
              img: Best,
            },
          ].map((card, i) => (
            <Card key={i} className="bg-white p-5 rounded-2xl shadow-lg transition-all max-w-[320px] border-b-2 border-b-black mb-12 hover:-translate-y-1 hover:shadow-xl hover:bg-[#89b6ea]">
              <CardContent className="p-0">
                <img src={card.img} alt={card.heading} className="w-[40%] rounded-xl h-auto mb-4 mx-auto block" />
                <h2 className="text-xl mb-2.5 text-[#0B2662] text-center font-bold">{card.heading}</h2>
                <p className="text-lg text-gray-600 mb-4 text-center">{card.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-8" />

      {/* Section: Stats */}
      <section>
        <h2 className="text-[2.2rem] font-bold text-center text-[#0B2662] mb-4 font-serif">What We've Achieved</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gray-100 border border-gray-200 p-4 rounded-xl shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <CardContent className="p-0 text-center">
                <div className="text-2xl font-bold text-[#0B2662]">{counts[index]}+</div>
                <div className="text-lg text-gray-600 mt-2">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-8" />

      {/* Section: Why We Have No Face */}
      <Card className="bg-white p-4 rounded-xl transition-all hover:-translate-y-1 hover:shadow-md mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold mb-2 text-[#0B2662] text-center">Why We Have No Face</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-gray-800">
            We deliberately stand faceless, because we represent you — the invisible researcher,
            the unheard voice, the resilient scholar. No photos. No titles. Just shared struggle
            and shared triumph.
          </p>
        </CardContent>
      </Card>

      {/* Section: How We Work */}
      <section className="px-2.5 py-2.5">
        <h2 className="text-[2.2rem] font-bold text-center text-[#0B2662] mb-2.5 font-serif">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1400px] mx-auto px-4 mt-8">
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
                  <p className="text-lg text-gray-600 leading-6">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <Separator className="my-8" />

      {/* Section: Our Philosophy */}
      <Card className="bg-white p-4 rounded-xl transition-all hover:-translate-y-1 hover:shadow-md mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold mb-2 text-[#0B2662] text-center">Our Philosophy</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="italic text-gray-800 mb-4 text-lg">
            "Born from the frustration of overpriced and impersonal editing services,
            ResearchEdit4U was founded to bring fairness, transparency, and excellence
            to academic editing."
          </p>
          <ul className="list-disc ml-6 text-lg text-gray-800">
            <li>Empowering researchers</li>
            <li>Dignity in the academic journey</li>
            <li>Rebuilding trust with the system</li>
            <li>Edits with care — including career and mental health support</li>
          </ul>
        </CardContent>
      </Card>

      {/* Section: CTA */}
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold mb-4">Join the Movement</h3>
        <p className="max-w-[600px] mx-auto mb-6 text-gray-600 text-lg">
          Whether you're polishing a paper, preparing your thesis defence, or just trying
          to survive the next deadline — we're here. Because your research deserves to be heard.
        </p>
        <Button asChild className="bg-[#0B2662] text-white px-8 py-3 rounded-full text-lg transition-all hover:bg-[#1d4ed8] hover:-translate-y-0.5">
          <Link to="/services">Get Started</Link>
        </Button>
      </div>
    </div>
  );
};

export default AboutUs;
