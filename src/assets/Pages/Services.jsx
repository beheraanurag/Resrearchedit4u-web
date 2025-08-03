import React, { useState } from "react";
import "../style/style.css";

const servicesData = {
  "Research Planning": [
    {
      title: "Topic Selection ",
      price: "₹2,999",
      features: ["2–3 research topics with title suggestions & rationale", "Problem statement and key research questions", "1-page summary with initial citations"],
      img: "📘",
    },
    {
      title: "Proposal Support",
      price: "₹4,999",
      features: ["Drafting introduction, objectives, and methodology (up to 2 pages)", "Proper academic structure and citation guidance", "Expert review of proposal outline"],
      img: "📄",
    },
    {
      title: "Research Design",
      price: "₹4,999",
      features: ["Tool and method recommendations based on research scope", "Sampling techniques and variable mapping", "Conceptual framework outline"],
      img: "⚙️",
    },
    {
      title: "Ethics & Feasibility ",
      price: "₹3,999",
      features: ["Ethical considerations and viability analysis", "University ethics form review and suggestions", "Timeline and resource feasibility plan"],
      img: "✅",
    },
  ],
  "Data Services": [
    {
      title: "Statistical Analysis ",
      price: "₹6,999",
      features: ["SPSS, R, or Python-based statistical testing (ANOVA, regression, etc.)", "Graphs, tables, and visualization of results", "Interpretation notes for each analysis output"],
      img: "📊",
    },
    {
      title: "Data Cleaning",
      price: "₹4,999",
      features: ["Removal of outliers, missing values, and errors", "Data transformation and coding for analysis", "Clean and structured datasets (Excel/SPSS/Python)"],
      img: "🔄",
    },
    {
      title: "ML Modelling",
      price: "₹7,999",
      features: ["Python/R-based regression, classification, or clustering models", "Data training and accuracy evaluation", "Clear outputs with step-by-step explanation"],
      img: "🤖",
    },
    {
      title: "Interpretation Help ",
      price: "₹5,999",
      features: ["Clear explanation of statistical findings", "Writing result summaries in academic style", "Analysis Graphical highlights and insights"],
      img: "🧾",
    },
  ],
  "Editorial Support": [
    {
      title: "Substantive Editing ",
      price: "₹4,999",
      features: ["Logical flow and content restructuring", "Coherence, readability, and sentence refinement", "Detailed suggestions via tracked changes"],
      img: "✍️",
    },
    {
      title: "Language Polishing",
      price: "₹4,000",
      features: ["Grammar, spelling, and punctuation checks", "Academic tone and vocabulary refinement", "Basic style and clarity adjustments"],
      img: "🖋️",
    },
    {
      title: "Formatting Help ",
      price: "₹3,999",
      features: ["APA, IEEE, MLA, or journal-specific formats", "Reference and citation alignment", "Table, figure, and margin consistency"],
      img: "📐",
    },
    {
      title: "AI + Plagiarism Fix",
      price: "₹2,500",
      features: ["Turnitin report with plagiarism reduction", "AI-generated content rewriting for originality", "Humanized rephrasing with proof certificate"],
      img: "🛡️",
    },
  ],
  "Publication Support": [
    {
      title: "Pre-Submission Review ",
      price: "₹5,999",
      features: ["Reviewer-style feedback on manuscript quality", "Suggestions for strengthening research arguments", "Error and compliance checks"],
      img: "📑",
    },
    {
      title: "Manuscript Editing ",
      price: "₹6,999",
      features: ["Polishing language and structure", "Reference and citation verification", "Final submission-ready formatting"],
      img: "📝",
    },
    {
      title: "Journal Selection",
      price: "₹4,999",
      features: ["3–5 journal suggestions with scope match", "Avoid predatory publishers", "Submission guidelines overview"],
      img: "📚",
    },
    {
      title: "Submission Guidance",
      price: "₹5,999",
      features: ["Portal setup and formatting checklist", "Cover letter drafting for editors", "Final compliance review"],
      img: "🚀",
    },
  ],

  "Academic Presentations": [
    {
      title: "PhD Presentations",
      price: "₹3,999",
      features: ["Registration, synopsis, and viva presentation decks", "Slide structure and university-specific formatting", "Error and compliance checks•	Visual elements like charts and flow diagrams"],
      img: "🎓",
    },
    {
      title: "Conference Posters  ",
      price: "₹3,999",
      features: ["Professional layouts and color themes", "Content placement and concise formatting", "Print-ready high-resolution files"],
      img: "📝",
    },
    {
      title: "Oral Conference Slides",
      price: "₹4,999",
      features: ["Content-to-slide structuring", "Visual highlights for data and results", "Optional speaker notes and script"],
      img: "💡 ",
    },
    {
      title: "Visual Enhancements",
      price: "₹2,999",
      features: ["Custom diagrams, flowcharts, and infographics", "Data visualization (graphs/charts)", "Animated or interactive slide elements"],
      img: "🖼️",
    },
  ],
};

const Services = () => {
  const [activeTab, setActiveTab] = useState("Research Planning");

  return (
    <div className="services-container">
      <h2 className="Core-services">Core Services</h2>
      <div className="tabs">
        {Object.keys(servicesData).map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="card-grid">
        {servicesData[activeTab].map((service, index) => (
          <div className="card" key={index}>
            <div className="icon">{service.img}</div>
            <h3>{service.title}</h3>
            <p className="price">Starts at {service.price}</p>
            <ul>
              {service.features.map((feat, i) => (
                <li key={i}>{feat}</li>
              ))}
            </ul>
            <div className="btn-group">
              <button className="book">Book Now</button>
              <button className="sample">Download Sample </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
