import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/style.css";
import USER from "../images/user.webp"

const testimonials = [
  {
    name: "Ronald E. Ncube, PhD Scholar (HRM)",
    role: "Management & Social Sciences",
    company: "AI Rewrite & Plagiarism Support",
    message:
      "I submitted content with a 38% AI similarity score. Their expert rewriting made it human-like, reducing it to just 7% without losing my voice. This service helped me avoid rejection and maintain academic integrity. Highly recommended for thesis rewriting.",
    image: USER,
  },
  {
    name: "Ms. Chen Lu, MSc Student",
    role: "Environmental Engineering",
    company: "Graphical Abstract & Figure Design",
    message:
      "I needed help with visuals for my journal. They redesigned my figures following Elsevier guidelines. The new version looked sharp, professional, and clear. My professor appreciated the visuals, and the editor mentioned the quality in their review email. Very happy with the result.",
    image: USER,
  },
  {
    name: "Dr. Amita V. Pillai, Assistant Professor",
    role: "Life Sciences & Microbiology",
    company: "Editing & Journal Submission Support",
    message:
      "I faced multiple rejections despite solid research. Their editing service polished the language and formatted it perfectly for the target journal. I received fewer reviewer comments and got accepted quickly. This support improved both my manuscript and publication experience.",
    image: USER,
  },
  {
    name: "Dr. Nandita Shah, Clinical Researcher",
    role: "Medicine & Healthcare",
    company: "Abstract & Introduction Writing Help",
    message:
      "I had trouble summarizing my clinical findings. Their team helped me condense complex ideas into a strong abstract within the word limit. The tone, clarity, and impact improved a lot. Reviewers commented positively, and I now use their help for submission.",
    image: USER,
  },
  {
    name: "Dr. Rajesh Mohaptra, Specialist",
    role: "Clinical Research, UAE",
    company: "Scientific Editing & Writing",
    message:
      "Creating a compelling abstract was a challenge. Their editing process enhanced clarity, reduced jargon, and aligned my writing with journal expectations. The final abstract got good feedback, and I felt confident submitting it. Their service is both professional and reliable.",
    image: USER,
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
