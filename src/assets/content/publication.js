import PDF1 from "../images/Brochure.pdf";
import PDF2 from "../images/Brochure.pdf";
import PDF3 from "../images/Brochure.pdf";
import PDF4 from "../images/Brochure.pdf";
const servicesData = {
  "Research Planning": [
    {
      title: "Journal Selection & Targeting ",
      features: [
         "Scope mapping across Scopus, UGC, IEEE, Elsevier, Springer.",
        "Indexing, acceptance profile, timeline indicators, and publication fees/APCs, 3–5 journal shortlist + cover-letter template + submission checklist."
      ],
      price: "₹3,999",

      img: "📑",
      pdfLink: PDF1,
      bookLink: "https://yourwebsite.com/book-ai-plagiarism",
    },
    {
      title: "Manuscript Formatting & Compliance",
      features: [
        "Section order, template structure, word-limit checks. ",
        "References, tables, figures styled to target (APA/IEEE/MLA or journal-specific),Ethics declarations, data availability, author roles, conflict statements.",
      ],
      price: "₹3,499",

      img: "📝",
      pdfLink: PDF2,
      bookLink: "https://yourwebsite.com/book-ai-plagiarism",
    },
    {
      title: "Submission & Portal Support",
      features: [
        "Portal metadata, keywords, cover letter, suggested reviewers.",
        "Mandatory uploads validated; file naming, image resolution, table formatting, Optional open access review, waiver flags, and funder compliance notes."
      ],
      price: "₹4,499",

      img: "📚",
      pdfLink: PDF3,
      bookLink: "https://yourwebsite.com/book-ai-plagiarism",
    },
    {
      title: "Peer Review & Response Drafting",
      features: [
        "Pre-submission internal critique to surface clarity/method issues.",
        "Point-by-point peer review response drafting with citations and change-log, Resubmission roadmap aligned to editor and reviewer expectations."
      ],
      price: "₹5,499",

      img: "🧾",
      pdfLink: PDF4,
      bookLink: "https://yourwebsite.com/book-ai-plagiarism",
    },
  ],
};
const faqs = [
  {
    question: "Do you guarantee acceptance?  ",
    answer: "No ethical provider can. We strengthen scope fit, clarity, and compliance so your work can be fairly assessed."
  },
  {
    question: "How long does the publication process take?  ",
    answer: "Varies by journal/field. We share historical ranges per target and set expectations accordingly."

  },
  {
    question: "What are typical publication fees/APCs? ",
    answer: "Depends on open access vs subscription and the publisher. We list APCs (if applicable) separately from our service quote."
  },
  {
    question: "Can I publish without paying APCs? ",
    answer: "Yes—many subscription journals charge no APC. We flag free publication options or waivers where relevant."
  },
  {
    question: "Which journals do you support?  ",
    answer: "We work across reputable publication sites including Scopus journal titles and major publishers (IEEE journals, Elsevier journal, Springer journal)—selection is based on scope and ethics."
  },
  {
    question: "Do you write the research for me? ",
    answer: "No. We don’t create or alter results. We focus on presentation quality, compliance, and response strategy."
  },
  {
    question: "Will you handle peer review responses?  ",
    answer: "Yes—structured point-by-point replies with citations, edits, and change-logs, maintaining respectful tone."
  },
  {
    question: "Is this aligned with UGC and institutional policies? ",
    answer: "We align with UGC journals guidance and document your publication process for transparency/audit."
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