import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/style.css";
import USER from "../images/user.webp"

const testimonials = [
  {
    name: "Ronald E. Ncube, PhD Scholar in HRM",
    role: "Management & Social Sciences",
    company: "Turnitin AI + Plagiarism Rewrite",
    message: "My Turnitin AI score was 38%, despite original content and heavy paraphrasing. Their team didn’t just rewrite—they humanized each paragraph while keeping my voice intact. The similarity score dropped to 7%, and the AI flag vanished. Their support saved an entire thesis chapter from potential rejection and academic issues.",
    image: USER
  },
  {
    name: "Ms. Chen Lu, MSc Student",
    role: "Environmental Engineering",
    company: "Blue Ocean Tech",
    message: "My supervisor criticized my figures for lacking scientific depth. I used their graphical abstract and figure redesign service. They followed Elsevier's specifications precisely. The new visuals were clear, professional, and impactful. The editor even praised them in the acceptance email, which boosted my confidence and improved the publication outcome.",
    image: USER
  },
  {
    name: "Dr. Amita V. Pillai, Assistant Professor of Microbiology, India",
    role: "Life Sciences",
    company: "Language Editing + Journal Submission.",
    message: "I faced repeated rejections from mid-tier journals, often with vague feedback like lack of clarity or not aligned with journal style, despite strong data. After using their PhD-level English editing and submission support, I received a polished, submission-ready version along with a clear formatting checklist that improved my chances.",
    image: USER
  },
  {
    name: "Dr. Nandita Shah, Clinical Research ",
    role: "Medicine",
    company: "Academic Writing Support – Abstract & Introduction",
    message: "I struggled to condense complex clinical data into a 250-word abstract. Their 1:1 writing support refined the structure, tone, and logic while preserving my voice. The final version was concise yet impactful, and it received positive feedback from reviewers at an SCI-listed journal, boosting my confidence and submission success.",
    image: USER
  },
  {
    name: "Dr. Rajesh Mohaptra",
    role: "Clinical Research Specialist, UAE",
    company: "Scientific Editing & Abstract Development",
    message: "Translating detailed clinical data into a clear, concise 250-word abstract was a major hurdle. Their expert guidance thoroughly streamlined my ideas, improved clarity, and preserved my academic voice. The final version not only met journal expectations but also earned positive feedback from SCI reviewers, strengthening my confidence in the submission process.",
    image: USER
  },
];

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
