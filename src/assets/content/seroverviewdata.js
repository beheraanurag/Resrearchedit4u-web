import PDF1 from "../images/Brochure.pdf";
import PDF2 from "../images/Brochure.pdf";
import PDF3 from "../images/Brochure.pdf";
import PDF4 from "../images/Brochure.pdf";
import PDF6 from "../images/Brochure.pdf";
import PDF7 from "../images/Brochure.pdf";
import PDF8 from "../images/Brochure.pdf";
import PDF9 from "../images/Brochure.pdf";
import PDF10 from "../images/Brochure.pdf";
import PDF11 from "../images/Brochure.pdf";
import PDF12 from "../images/Brochure.pdf";
import PDF13 from "../images/Brochure.pdf";
import PDF14 from "../images/Brochure.pdf";
import PDF15 from "../images/Brochure.pdf";
import PDF16 from "../images/Brochure.pdf";
import PDF17 from "../images/Brochure.pdf";
import PDF18 from "../images/Brochure.pdf";
import PDF19 from "../images/Brochure.pdf";
import PDF20 from "../images/Brochure.pdf";
import PDF5 from "../images/Brochure.pdf";
import uploadIcon from '../images/online.webp';
import reviewIcon from '../images/expert.webp';
import paymentIcon from '../images/payment.webp';
import qcIcon from '../images/review.webp';
import deliveryIcon from '../images/delivery.webp';
import USER from "../images/user.webp"
import { FaClipboardList, FaChartBar, FaPenFancy, FaBookOpen, FaGraduationCap } from "react-icons/fa";

const servicesData = {
  "Research Planning": [
    {
      title: "Topic Selection ",
      price: "₹2,999",
      features: ["2–3 research topics with title suggestions & rationale", "Problem statement and key research questions", "1-page summary with initial citations"],
      img: "📘",
      pdfLink: PDF1,
      bookLink: "https://yourwebsite.com/book-ai-plagiarism"
    },
    {
      title: "Proposal Support",
      price: "₹4,999",
      features: ["Drafting introduction, objectives, and methodology (up to 2 pages)", "Proper academic structure and citation guidance", "Expert Review of Proposal Outline Document"],
      img: "📄",
      pdfLink: PDF2,
      bookLink: "https://yourwebsite.com/book-ai-plagiarism"
    },
    {
      title: "Research Design",
      price: "₹4,999",
      features: ["Tool and method recommendations based on research scope", "Sampling techniques and variable mapping", "Conceptual framework outline"],
      img: "⚙️",
      pdfLink: PDF3,
      bookLink: "https://yourwebsite.com/book-ai-plagiarism"
    },
    {
      title: "Ethics & Feasibility ",
      price: "₹3,999",
      features: ["Ethical considerations and viability analysis", "University ethics form review and suggestions", "Timeline and resource feasibility plan"],
      img: "✅",
      pdfLink: PDF4,
      bookLink: "https://yourwebsite.com/book-ai-plagiarism"
    },
  ],
  "Data Services": [
    {
      title: "Statistical Analysis ",
      price: "₹6,999",
      features: ["SPSS, R, or Python-based statistical testing (ANOVA, regression, etc.)", "Graphs, tables, and visualization of results", "Interpretation notes for each analysis output"],
      img: "📊",
      pdfLink: PDF5,
      bookLink: "https://yourwebsite.com/book-ai-plagiarism"
    },
    {
      title: "Data Cleaning",
      price: "₹4,999",
      features: ["Removal of outliers, missing values, errors, inconsistencies, anomalies, and noise", "Data transformation and coding for analysis", "Clean and structured datasets (Excel/SPSS/Python)"],
      img: "🔄",
      pdfLink: PDF6,
      bookLink: "https://yourwebsite.com/book-ai-plagiarism"
    },
    {
      title: "ML Modelling",
      price: "₹7,999",
      features: ["Python/R-based regression, classification, or clustering models", "Data training and accuracy evaluation", "Clear outputs with step-by-step explanation"],
      img: "🤖",
      pdfLink: PDF7,
      bookLink: "https://yourwebsite.com/book-ai-plagiarism"
    },
    {
      title: "Interpretation Help ",
      price: "₹5,999",
      features: ["Clear explanation of statistical findings for informed decision-making", "Writing result summaries in academic style", "Analysis Graphical highlights and insights"],
      img: "🧾",
      pdfLink: PDF8,
      bookLink: "https://yourwebsite.com/book-ai-plagiarism"
    },
  ],
  "Editorial Support": [
    {
      title: "Substantive Editing ",
      price: "₹4,999",
      features: ["Logical flow and content restructuring", "Coherence, readability, and sentence refinement", "Detailed suggestions via tracked changes"],
      img: "✍️",
      pdfLink: PDF9,
      bookLink: "https://yourwebsite.com/book-ai-plagiarism"
    },
    {
      title: "Language Polishing",
      price: "₹4,000",
      features: ["Grammar, spelling, and punctuation checks", "Academic tone and vocabulary refinement", "Basic style and clarity adjustments"],
      img: "🖋️",
      pdfLink: PDF10,
      bookLink: "https://yourwebsite.com/book-ai-plagiarism"
    },
    {
      title: "Formatting Help ",
      price: "₹3,999",
      features: ["APA, IEEE, MLA, or journal-specific formats", "Reference and citation style alignment", "Table, figure, and margin consistency"],
      img: "📐",
      pdfLink: PDF11,
      bookLink: "https://yourwebsite.com/book-ai-plagiarism"
    },
    {
      title: "AI + Plagiarism Fix",
      price: "₹2,500",
      features: ["Turnitin report with plagiarism reduction", "AI-generated content rewriting for originality", "Humanized rephrasing with proof certificate"],
      img: "🛡️",
      pdfLink: PDF12,
      bookLink: "https://yourwebsite.com/book-ai-plagiarism"
    },
  ],
  "Publication Support": [
    {
      title: "Pre-Submission Review ",
      price: "₹5,999",
      features: ["Reviewer-style feedback on manuscript quality", "Suggestions for strengthening research arguments", "Error detection and compliance checks"],
      img: "📑",
      pdfLink: PDF13,
      bookLink: "https://yourwebsite.com/book-ai-plagiarism"
    },
    {
      title: "Manuscript Editing ",
      price: "₹6,999",
      features: ["Polishing academic language and structure", "Reference and citation verification", "Final submission-ready formatting"],
      img: "📝",
      pdfLink: PDF14,
      bookLink: "https://yourwebsite.com/book-ai-plagiarism"
    },
    {
      title: "Journal Selection",
      price: "₹4,999",
      features: ["3–5 journal suggestions with scope match", "Avoid unethical predatory publishers", "Journal submission guidelines overview"],
      img: "📚",
      pdfLink: PDF15,
      bookLink: "https://yourwebsite.com/book-ai-plagiarism"
    },
    {
      title: "Submission Guidance",
      price: "₹5,999",
      features: ["Portal setup and formatting checklist", "Cover letter drafting for journal editors", "Final compliance and accuracy review"],
      img: "🚀",
      pdfLink: PDF16,
      bookLink: "https://yourwebsite.com/book-ai-plagiarism"
    },
  ],

  "Academic Presentations": [
    {
      title: "PhD Presentations",
      price: "₹3,999",
      features: ["Registration, synopsis, and viva presentation decks", "Slide structure and university-specific formatting", "Error compliance checks, visual elements charts and diagrams"],
      img: "🎓",
      pdfLink: PDF17,
      bookLink: "https://yourwebsite.com/book-ai-plagiarism"
    },
    {
      title: "Conference Posters  ",
      price: "₹3,999",
      features: ["Professional layouts and color themes", "Content placement and concise formatting", "Print-ready high-resolution design files"],
      img: "📝",
      pdfLink: PDF18,
      bookLink: "https://yourwebsite.com/book-ai-plagiarism"
    },
    {
      title: "Oral Conference Slides",
      price: "₹4,999",
      features: ["Effective content-to-slide structuring techniques", "Visual highlights for data and results", "Optional speaker notes and script"],
      img: "💡 ",
      pdfLink: PDF19,
      bookLink: "https://yourwebsite.com/book-ai-plagiarism"
    },
    {
      title: "Visual Enhancements",
      price: "₹2,999",
      features: ["Custom diagrams, flowcharts, and infographics", "Data visualization using graphs/charts", "Animated or interactive slide elements"],
      img: "🖼️",
      pdfLink: PDF20,
      bookLink: "https://yourwebsite.com/book-ai-plagiarism"
    },
  ],
};
const faqs = [
  {
    question: "How do I know which service is right for my research needs?",
    answer: "We offer a free initial consultation to understand your requirements, project stage, and university or journal guidelines. Based on this, our team recommends the most suitable service package."
  },
  {
    question: "How is pricing determined for each service?",
    answer: "Pricing depends on the service type, document length or data size, complexity, and turnaround time. You will receive a clear, itemised quotation before any payment is required."
  },
  {
    question: "Do I have to pay the full amount upfront?",
    answer: "For most services, payment is made after we analyse your requirements and share a quote. However, for peer review services, payment must be made immediately after the consultation and before the analysis begins."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept secure online payments via credit/debit cards, PayPal, and bank transfers. International clients can pay in their preferred currency using supported payment gateways."
  },
  {
    question: "How quickly can you deliver the work?",
    answer: "Turnaround times vary based on service complexity and length. We offer flexible delivery options — urgent, priority, and standard — to match your deadlines."
  },
  {
    question: "Will my work remain confidential?",
    answer: "  Yes. We sign non-disclosure agreements (NDAs) when required, and all files are handled securely. Your research will never be shared with third parties without your consent."
  },
  {
    question: "Can you work with my university’s or journal’s specific guidelines?",
    answer: "Absolutely. We adapt to your required formatting, citation style, and submission requirements, ensuring your work meets all academic or publication standards."
  },
  {
    question: "What if I’m not satisfied with the delivered work?",
    answer: "We offer free revisions within the agreed scope to address your feedback. Our goal is to ensure your complete satisfaction before final delivery."
  },
];
const steps = [
  {
    title: 'Consultation',
    icon: uploadIcon,
  },
  {
    title: 'Requirement Analysis',
    icon: reviewIcon,
  },
  {
    title: 'Payment & Service',
    icon: paymentIcon,
  },
  {
    title: 'Execution & Review',
    icon: qcIcon,
  },
  {
    title: 'Final Delivery',
    icon: deliveryIcon,
  },
];
const services = [
  {
    icon: FaClipboardList,
    title: "Research Planning",
    subtitle: "Start right, move faster.",
    description: "Tailored research roadmaps, topic validation, and methodology design to ensure your project begins with clarity and purpose.",
  },
  {
    icon: FaChartBar,
    title: "Data Services",
    subtitle: "Stats & ML that hold up.",
    description: "Accurate statistical testing and machine learning models using SPSS, R, and Python, with clear result interpretation.",
  },
  {
    icon: FaPenFancy,
    title: "Editorial Support",
    subtitle: "Clear & Compliant.",
    description: "Structural editing, formatting, and citation checks to meet journal style guides and academic standards.",
  },
  {
    icon: FaBookOpen,
    title: "Publication Support",
    subtitle: "Sub with confidence.",
    description: "Journal targeting, reviewer-style critique, and submission readiness to improve your acceptance rate.",
  },
  {
    icon: FaGraduationCap,
    title: "Presentations",
    subtitle: "Impactful visuals.",
    description: "Professional slide decks, posters, and visual elements designed for conferences, vivas, and academic milestones.",
  },
];
const summary = [
  {
    icon: FaClipboardList,
    title: "Research Planning",
    subtitle: "What We Need from You:",
    para: ["Research topic or idea", "University/research guidelines", "Project timeline and degree level"],
    description: "What You Get:",
    content: ["Validated research topic", "Defined research objectives", "Structured methodology outline"],

  },
  {
    icon: FaChartBar,
    title: "Data Services",
    subtitle: "What We Need from You:",
    para: ["Raw or cleaned dataset", "Research objectives and hypotheses", "Preferred analysis software (SPSS, R, Python)"],
    description: "What You Get:",
    content: ["Cleaned and processed dataset", "Statistical or ML analysis report", "Detailed interpretation notes"],

  },
  {
    icon: FaPenFancy,
    title: "Editorial Support",
    subtitle: "What We Need from You:",
    para: ["Manuscript or thesis draft", "Language preference (US/UK English)", "Target journal and readership profile"],
    description: "What You Get:",
    content: ["Edited and polished manuscript", "Formatted document to journal style", "Reviewer-style improvement suggestions"],

  },
  {
    icon: FaBookOpen,
    title: "Publication Support",
    subtitle: "What We Need from You:",
    para: ["Final or near-final manuscript", "Preferred journal list or scope", "Previous review feedback"],
    description: "What You Get:",
    content: ["Curated journal shortlist", "Submission process assistance", "Edited response letter to reviewers"],

  },
  {
    icon: FaGraduationCap,
    title: "Presentations",
    subtitle: "What We Need from You:",
    para: ["Research summary or manuscript", "Event type (conference, viva, etc.)", "Project timeline & degree"],
    description: "What You Get:",
    content: ["Professionally designed slides/posters", "Custom charts, infographics, and diagrams", "Speaker notes and rehearsal session"],

  },
];
const testimonials = [
  {
    name: "PhD Scholar",
    company: "Saudi Arabia",
    message: "The proposal support I received truly helped me clear my PhD synopsis in one go!",
    image: USER,
    countryCode: "SA",


  },
  {
    name: "Associate Professor",
    company: " India",
    message: "Excellent service for data analysis and manuscript editing. Highly recommend for any research project.",
    image: USER,
    countryCode: "IN",

  },
  {
    name: "Lecturer",
    company: "Australia",
    message: "The team exceeded my expectations in preparing my journal paper with perfect formatting and citations.",
    image: USER,
    countryCode: "AU",

  },
  {
    name: "Postdoctoral Researcher",
    company: "United Kingdom",
    message: "Their publication guidance was spot on — I got accepted in my target journal without a single revision request.",
    image: USER,
    countryCode: "GB",

  },
  {
    name: "Research Consultant",
    company: "United States",
    message: "From topic selection to final delivery, every step was smooth and professional. Truly global quality.",
    image: USER,
    countryCode: "US",

  },
  {
    name: "Assistant Professor",
    company: "United Arab Emirates",
    message: "The presentation they designed for my conference got amazing feedback from the audience and panel.",
    image: USER,
    countryCode: "AE",

  },
  {
    name: "Master’s Student",
    company: "Canada",
    message: "Clear communication, timely delivery, and outstanding editorial support. My thesis looks impeccable now.",
    image: USER,
    countryCode: "CA"

  },
  {
    name: "PhD Candidate",
    company: "South Africa",
    message: "I appreciated their ethical approach, clear communication, and detailed design for my doctoral research..",
    image: USER,
    countryCode: "ZA",

  },
  {
    name: "Research Fellow",
    company: "Singapore",
    message: "Their statistical analysis and visual presentation helped my research stand out in an international conference.",
    image: USER,
    countryCode: "SG",

  },

];
const cstudies = [
  {
    countryCode: "SA",
    title: "PhD Success in Saudi Arabia",
    Client: "Client",
    Clientdesc: "PhD Scholar, Saudi Arabia ",
    Challenge: "Challenge",
    Challengedesc: "Struggling to prepare a clear, journal-ready manuscript in engineering.",
    Solution: "Solution",
    Solutiondesc: "Editorial Support + Journal Selection Service.",
    Result: "Result",
    Resultsdesc: "Accepted in Scopus-indexed journal within 45 days."
  },
  {
    countryCode: "IN",
    title: "Clinical Research Paper in India",
    Client: "Client",
    Clientdesc: "Medical Researcher, India",
    Challenge: "Challenge",
    Challengedesc: "Repeated rejections due to weak statistical analysis and unclear methodology.",
    Solution: "Solution",
    Solutiondesc: "Advance Data Analysis + Methodology Restructuring.",
    Result: "Result",
    Resultsdesc: "Published in Q1 SCI-indexed medical journal."
  },
  {
    countryCode: "AU",
    title: "Conference Win in Australia",
    Client: "Client",
    Clientdesc: "Academic Presenter, Australia  ",
    Challenge: "Challenge",
    Challengedesc: "Needed high-impact visuals and script for an international education conference.",
    Solution: "Solution",
    Solutiondesc: "Academic Presentation Design + Speech Coaching.",
    Result: "Result",
    Resultsdesc: "Presentation ranked among top 3 in the conference."
  },

];
export { servicesData, faqs, steps, services, summary, testimonials, cstudies };