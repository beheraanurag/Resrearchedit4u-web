import PDF1 from "../images/Brochure.pdf";
import PDF2 from "../images/Brochure.pdf";
import PDF3 from "../images/Brochure.pdf";
import PDF4 from "../images/Brochure.pdf";
const servicesData = {
  "Research Planning": [
    {
      title: "Research Poster Design  ",
      features: [
        "	Layout built for scanning (columns, hierarchy, text).",
        "Clear figures/tables with purposeful visuals and headings, Word count and sizing aligned to common poster guidance."
      ],
      price: "₹3,499",

      img: "🖼️ ",
      pdfLink: PDF1,
      bookLink: "https://yourwebsite.com/book-ai-plagiarism",
    },
    {
      title: "Professional Slide Deck Design ",
      features: [
        "Crisp slide templates, large fonts, minimal text per slide.",
        "Visual storytelling: figures, charts, and captions that carry the message, Optional brand integration.",
      ],
      price: "₹4,499",

      img: "🖥️",
      pdfLink: PDF2,
      bookLink: "https://yourwebsite.com/book-ai-plagiarism",
    },
    {
      title: "Thesis Defense / Viva Presentation ",
      features: [
        "IMRaD-aligned narrative adapted to defense goals.",
        "Focus on gap, contribution, limitations, and future work, Speaker notes, timing plan, and Q&A preparation."
      ],
      price: "₹5,999",

      img: "📝",
      pdfLink: PDF3,
      bookLink: "https://yourwebsite.com/book-ai-plagiarism",
    },
    {
      title: "Presentation Coaching & Rehearsal ",
      features: [
        "Live rehearsals with structured feedback (timing, flow, narrative).",
        "Q&A drills for committee / conference formats, 	Practical delivery tips: pacing, slide rhythm, and audience cues."
      ],
      price: "₹3,999",

      img: "🧑‍🏫",
      pdfLink: PDF4,
      bookLink: "https://yourwebsite.com/book-ai-plagiarism",
    },
  ],
};
const faqs = [
  {
    question: "What makes a strong academic poster?  ",
    answer: "A clean, consistent layout with prominent title, short text, and purposeful visuals. Keep content readable from a distance."
  },
  {
    question: "How many lines/words per slide are ideal? ",
    answer: "YWe restructure sentences, refine arguments, and smooth transitions so that your manuscript reads seamlessly and delivers your ideas effectively.Keep slides scannable: short bullets, large fonts, minimal text (e.g., 6×6-style guidance). Avoid distracting transitions."

  },
  {
    question: "Do you help with thesis defense (viva) structure? ",
    answer: "Yes—opening context, gap/contribution, methods, results, limitations, and next steps, with speaker notes and Q&A practice."
  },
  {
    question: "Should research talks follow IMRaD? ",
    answer: "Often yes for empirical studies (Intro, Methods, Results, Discussion), adapted to audience/time. We adjust for theory/design-led work."
  },
  {
    question: "Can you redesign my existing slides/poster? ",
    answer: "Yes—light polish or full rebuild while preserving your content integrity."
  },
  {
    question: "Do you provide figure/chart clean-ups? ",
    answer: "Yes—labels, scales, and contrast for clarity; succinct captions and callouts tied to your message."
  },
  {
    question: "Will you also help me rehearse?  ",
    answer: "Yes—timing, narrative flow, and Q&A drills."
  },
{
    question: "Do you offer printing specs or export files?  ",
    answer: "Yes—final PDFs/PNGs sized to conference requirements (e.g., A0/A1; 16:9 slides) with bleed/resolution guidance."
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