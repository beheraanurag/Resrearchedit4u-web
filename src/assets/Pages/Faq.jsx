import React, { useState } from 'react';
import '../style/style.css';
import faqs from '../content/faqdata';

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
