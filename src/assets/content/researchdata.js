import PDF1 from "../images/Brochure.pdf";
import PDF2 from "../images/Brochure.pdf";
import PDF3 from "../images/Brochure.pdf";
import PDF4 from "../images/Brochure.pdf";
const servicesData = {
  "Research Planning": [
    {
      title: "Topic Selection",
      features: [
        "Outcome: 2–3 refined topics with titles, problem statement, and research questions matching gaps.",
        "You get: 2–3 topic options + rationale; problem statement + 3–5 research questions; 1‑page brief with starter citations and scope boundaries.",
      ],
      price: "₹2,999",
      img: "📘",
      pdfLink: PDF1,
      bookLink: "https://yourwebsite.com/book-ai-plagiarism",
    },
    {
      title: "Proposal Support",
      features: [
        "Outcome: A supervisor‑ready proposal with correct structure and citations.",
        "You get: introduction, objectives, and methodology (up to 2 pages); academic structure + referencing guidance; tracked‑changes review and comments.",
      ],
      price: "₹4,999",
      img: "📄",
      pdfLink: PDF2,
      bookLink: "https://yourwebsite.com/book-ai-plagiarism",
    },
    {
      title: "Research Design",
      features: [
        "Outcome: A practical research design that aligns questions, variables, and sampling.",
        "You get: method & tool recommendations; sampling strategy & variable map; conceptual framework; assumption checks and power guidance."
      ],
      price: "₹4,999",
      img: "⚙️",
      pdfLink: PDF3,
      bookLink: "https://yourwebsite.com/book-ai-plagiarism",
    },
    {
      title: "Ethics & Feasibility",
      features: [
        "Outcome: Fewer surprises at the ethics panel; realistic execution plan.",
        "You get: ethics considerations and consent/assent guidance; university ethics form review and suggestions; feasibility plan timeline, required resources, and implementation guidance."
      ],
      price: "₹3,999",
      img: "✅",
      pdfLink: PDF4,
      bookLink: "https://yourwebsite.com/book-ai-plagiarism",
    },
  ],
};
const faqs = [
  {
    question: "Do you align with my university’s template? ",
    answer: "Yes share your guide/sample; we’ll adapt."
  },
  {
    question: "Do you help with mixed‑methods designs? ",
    answer: "Yes quant + qual strands, sampling, and integration logic."

  },
  {
    question: "Can you prepare consent forms?",
    answer: "We provide templates and editorial guidance; you finalise per policy."
  },
  {
    question: "Do you ghostwrite graded work? ",
    answer: "No ethical advisory and editorial support only."
  },
  {
    question: "How many revisions are included? ",
    answer: "One (Basic), up to two (Standard/Premium)."
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