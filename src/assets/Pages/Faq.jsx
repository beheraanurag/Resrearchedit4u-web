import React, { useState } from 'react';
import '../style/style.css';

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer editing, proofreading, plagiarism reduction, AI reduction, thesis writing assistance, PhD synopsis help, journal selection, submission support, conference paper preparation, poster design, presentations, formatting, and response-to-reviewer help."
  },
  {
    question: "Who works on my project?",
    answer: "Your project is handled by experienced academic editors, peer reviewers, PhDs, post-doctorates, and professionals with deep expertise in the scientific publication industry."
  },
  {
    question: "Do you support ghostwriting?",
    answer: "No. We strictly do not offer ghostwriting. Our mission is to improve research integrity by assisting you in polishing, rewriting, and strengthening your own work, not writing it for you."
  },
  {
    question: "I don’t have data. Can you prepare data and write the paper for me?",
    answer: "No. We cannot create data or fabricate research for clients. We only assist in strengthening your own genuine research."
  },
  {
    question: "I have collected and analyzed data. Can you write the paper?",
    answer: "We do not encourage ghostwriting. If you are a PhD candidate, we can assist you in developing the paper with your input. For MD students, we require a draft or at least research notes from your side to proceed."
  },
  {
    question: "Do you directly start working when I submit my files?",
    answer: "No. We first conduct an expert review at a nominal fee of ₹1000 INR. This includes analysis by a domain expert who will highlight the strengths, weaknesses, and missing elements in your paper to help you develop it for publication success."
  },
  {
    question: "Can you guarantee publication?",
    answer: "No. We do not guarantee publication, nor do we have direct tie-ups with predatory journals. If someone claims guaranteed publication, they likely work with predatory or soon-to-be de-indexed journals. Please visit our Predatory Journal Checklist page (updated daily) for guidance."
  },
  {
    question: "I have written part of my thesis (e.g., introduction). Can you help complete it?",
    answer: "Yes! Please email us or fill out our inquiry form. One of our academic coordinators will reach out to assist you."
  },
  {
    question: "I have written my paper. Can you publish it?",
    answer: "Yes. We will first provide a journal selection report and check if your paper meets the target journal’s author guidelines. For this pre-submission technical check, we charge a nominal fee of ₹700–₹1000 INR to help prevent desk rejection."
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-header">
            <div className="faq-question">{faq.question}</div>
            <button
              className="faq-toggle-button"
              onClick={() => toggleFAQ(index)}
            >
              {openIndex === index ? "−" : "+"}
            </button>
          </div>
          {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default Faq;
