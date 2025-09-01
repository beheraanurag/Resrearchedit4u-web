import PDF1 from "../images/Brochure.pdf";
import PDF2 from "../images/Brochure.pdf";
import PDF3 from "../images/Brochure.pdf";
import PDF4 from "../images/Brochure.pdf";
const servicesData = {
  "Research Planning": [
    {
      title: "Substantive Editing ",
      features: [
         "Ensuring logical flow, coherence, clarity, and comprehensive sentence refinement throughout.",
        "Providing tracked-change suggestions, comments & overall readability improvements."
      ],
      price: "₹4,999",

      img: "✍️",
      pdfLink: PDF1,
      bookLink: "https://yourwebsite.com/book-ai-plagiarism",
    },
    {
      title: "Language Polishing",
      features: [
        "Checking grammar, spelling, punctuation, and refining academic tone consistently.",
        "Enhancing vocabulary, style, clarity, and overall readability for academic writing.",
      ],
      price: "₹4,000",

      img: "🖋️",
      pdfLink: PDF2,
      bookLink: "https://yourwebsite.com/book-ai-plagiarism",
    },
    {
      title: "Formatting Help",
      features: [
        "Ensuring APA, IEEE, MLA, or journal-specific formatting with precision.",
        "Aligning references, citations, tables, figures, and margins with consistency."
      ],
      price: "₹3,999",

      img: "📐",
      pdfLink: PDF3,
      bookLink: "https://yourwebsite.com/book-ai-plagiarism",
    },
    {
      title: "AI + Plagiarism Fix",
      features: [
        "Providing Turnitin reports, plagiarism reduction, and humanized AI-text rewriting.",
        "Delivering authentic proof certificates ensuring originality and academic content integrity."
      ],
      price: "₹2,500",

      img: "🛡️",
      pdfLink: PDF4,
      bookLink: "https://yourwebsite.com/book-ai-plagiarism",
    },
  ],
};
const faqs = [
  {
    question: "What is Expert Editorial Support for Research & Publication Success? ",
    answer: "Our expert editorial support ensures your research paper is clear, professional, and aligned with publication standards, giving you the best chance of acceptance."
  },
  {
    question: "How do you improve clarity and logical flow in my manuscript? ",
    answer: "YWe restructure sentences, refine arguments, and smooth transitions so that your manuscript reads seamlessly and delivers your ideas effectively."

  },
  {
    question: "Do you format manuscripts according to APA, IEEE, MLA, or journal guidelines?",
    answer: "Yes, we format your paper to match specific journal or style requirements, including APA, IEEE, MLA, or any target publication format."
  },
  {
    question: "Can you help eliminate plagiarism and humanize AI-generated text?",
    answer: "Absolutely. We run advanced plagiarism checks, rephrase overlapping content, and refine AI-generated text to make it natural and authentic."
  },
  {
    question: "Why should I choose your service for research publication support? ",
    answer: "Because we combine substantive editing, language refinement, and formatting expertise to deliver submission-ready manuscripts with higher chances of acceptance."
  },
  {
    question: "Will I receive feedback after editing my manuscript?",
    answer: "Yes, our team works with both quantitative (statistical) and qualitative (thematic) data."
  },

];
const packages = [
  {
    heading: "Basics",
    price: "₹2,999/-",
    pop: "Recommended",

    details: [
      {
        title: "What You Get",
        subtitle:
          ["2–3 polished topic options with titles & rationale", "3–5 aligned, well-structured questions", "1-page summary with citations, scope & problem statement"]
      },
      {
        title: "Best For",
        subtitle: "Early-stage scholars who need clarity & direction.",
      },
      {
        title: "Turnaround",
        subtitle: "5–7 working days.",
      },
      {
        title: "Revisions & Support",
        subtitle: "1 revision via email.",
      },
    ],
  },
  {
    heading: "Standard",
    price: "₹4,999/-",
    pop: "Popular",

    details: [
      {
        title: "What You Get",
        subtitle:
          ["2 pages: introduction, objectives, methodology", "Variables, sampling approach, framework outline", "All Standard features included here for you"],
      },
      {
        title: "Best For",
        subtitle: "Scholars preparing for supervisor review or funding applications.",
      },
      {
        title: "Turnaround",
        subtitle: "5–10 working days.",
      },
      {
        title: "Revisions & Support",
        subtitle: "1–2 revisions via email + 1 call.",
      },
    ],
  },
  {
    heading: "Premium",
    price: "₹6,999/-",
    pop: "Best Value",

    details: [
      {
        title: "What You Get",
        subtitle: ["Consent guidance, risk mitigation, realistic timeline", "Professional slides summarizing your plan", "All Standard features included here for you"]
      },
      {
        title: "Best For",
        subtitle: "Scholars finalizing proposals & preparing for ethics approval.",
      },
      {
        title: "Turnaround",
        subtitle: "7–12 working days.",
      },
      {
        title: "Revisions & Support",
        subtitle: "2 revisions with priority  + 2 calls.",
      },
    ],
  },
];
export { servicesData, faqs, packages };