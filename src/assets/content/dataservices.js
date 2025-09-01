
import PDF1 from "../images/Brochure.pdf";
import PDF2 from "../images/Brochure.pdf";
import PDF3 from "../images/Brochure.pdf";
import PDF4 from "../images/Brochure.pdf";
const servicesData = {
  "Research Planning": [
    {
      title: "Quantitative Data Analysis ",
      features: [
        " Expertise in SPSS, R, and Python for advanced quantitative data analysis and accurate interpretation.",
        "Specialized in regression, ANOVA, and SEM techniques to deliver reliable and research-focused results."
      ],
      price: "₹6,999",

      img: "📊",
      pdfLink: PDF1,
      bookLink: "https://yourwebsite.com/book-ai-plagiarism",
    },
    {
      title: "Qualitative Data Analysis ",
      features: [
        "Qualitative Data Analysis – NVivo, thematic coding, content analysis.",
        "Focused on systematic interpretation of patterns and themes to ensure accuracy and credibility in qualitative research findings.",
      ],
      price: "₹4,999",

      img: "📈",
      pdfLink: PDF2,
      bookLink: "https://yourwebsite.com/book-ai-plagiarism",
    },
    {
      title: "Survey & Questionnaire Analysis",
      features: [
        "Expertise in survey data cleaning and reliability checks to ensure accuracy before analysis.",
        "Applying hypothesis testing techniques to derive meaningful insights from survey and questionnaire responses."
      ],
      price: "₹7,999",
      img: "📋",
      pdfLink: PDF3,
      bookLink: "https://yourwebsite.com/book-ai-plagiarism",
    },
    {
      title: "Visualization & Interpretation",
      features: [
        "Creating clear graphs, APA-standard reports, and detailed data visualizations for research.",
        "Delivering journal-ready charts and interpretation insights to support academic publications and research reporting effectively."
      ],
      price: "₹5,999",
      img: "📉",
      pdfLink: PDF4,
      bookLink: "https://yourwebsite.com/book-ai-plagiarism",
    },
  ],
};
const faqs = [
  {
    question: "What data formats do you accept? ",
    answer: "We accept Excel, CSV, SPSS, Stata, R, and most common research data formats."
  },
  {
    question: "Do you provide interpretation? ",
    answer: "Yes, we not only analyze but also provide meaningful interpretation of results."

  },
  {
    question: "Can you match my university’s format?",
    answer: "Absolutely, we customize reports to meet your institution or journal guidelines."
  },
  {
    question: "What is the turnaround time? ",
    answer: "Depending on project size, turnaround ranges from 3 to 10 working days."
  },
  {
    question: "How is pricing calculated? ",
    answer: "Pricing is based on project complexity, data size, and analysis requirements."
  },
  {
    question: "Do you handle both quantitative and qualitative data? ",
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