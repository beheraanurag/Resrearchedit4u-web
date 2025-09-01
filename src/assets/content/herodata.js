import slide1 from '../images/slide1.webp';
import slide2 from '../images/slide2.webp';
import slide3 from '../images/slide3.webp';
import slide4 from '../images/slide4.webp';
import PDF1 from "../images/Brochure.pdf";
import PDF2 from "../images/Brochure.pdf";
import PDF3 from "../images/Brochure.pdf";
import PDF4 from "../images/Brochure.pdf";

const slidesData = [
  {
    title: "Pass AI and Plagiarism Checks Confidently Everytime",
    desc: "We rewrite AI-generated or copied content to pass GPTZero and Turnitin—humanised by real editors with 95%+ success.",
    features: [
      "Rewrite + De-plag in 24 hrs",
      "Human editors, no bots",
      "Trusted by 5M+ researchers globally",
      "Affordable check starts at ₹500",
    ],
    img: slide4,
    bgClass: "slide-bg3",
    pdfLink: PDF1,
    bookLink: "https://yourwebsite.com/book-ai-plagiarism"
  },
  {
    title: "Abstract, Introduction and Manuscript Expert Help Anytime",
    desc: "Struggling with writing flow, structure, or clarity? We help you write better without losing your voice expert support only.",
    features: [
      "Complete guidance by subject ",
      "Logical flow + correct presentation",
      "1:1 consult with PhD specialists",
      "Track changes + expert comments",
    ],
    img: slide3,
    bgClass: "slide-bg1",
    pdfLink: PDF2,
    bookLink: "https://yourwebsite.com/book-manuscript-help"
  },
  {
    title: "Graphical Abstracts and Figures That Impress Editors",
    desc: "Get scientific figures and graphical abstracts that impress editors designed for clarity, impact, and publication success.",
    features: [
      "Flat Infographic Designs",
      "Enhanced Presentation Graphics",
      "Journal & Conference Ready",
      "10K+ Visuals Delivered",
    ],
    img: slide2,
    bgClass: "slide-bg2",
    pdfLink: PDF3,
    bookLink: "https://yourwebsite.com/book-graphical-abstracts"
  },
  {
    title: "Research Paper Editing & Journals Submission Support",
    desc: "From editing to journal submission—get published faster in Scopus/SCI journals with support from PhD experts.",
    features: [
      "Language + formatting by PhDs",
      "Journal matching & submission",
      "Submission-ready in <48 hrs",
      "Supported 20,000+ researchers",
    ],
    img: slide1,
    bgClass: "slide-bg4",
    pdfLink: PDF4,
    bookLink: "https://yourwebsite.com/book-journal-submission"
  },
];
export default slidesData;
