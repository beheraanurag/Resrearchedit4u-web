import React from "react";
import "../style/style.css";

const CareerPage = () => {
  return (
    <div className="career-container">
      <header className="career-header">
        <h1>Careers at Our Company</h1>
        <p>Join us and be a part of our innovative journey.</p>
      </header>

      <section className="career-section">
        <h2>Current Openings</h2>
        <div className="no-openings">
          <p>🚫 There are currently no open positions available.</p>
          <p>
            However, we’re always looking for talented people!  
            You can send your resume to  
            <a href="mailto:hr@company.com"> hr@company.com</a>
          </p>
        </div>
      </section>

      <section className="career-section">
        <h2>Why Work With Us?</h2>
        <ul className="career-list">
          <li>🌱 Growth Opportunities</li>
          <li>💡 Innovative Work Culture</li>
          <li>🏆 Employee Recognition Programs</li>
          <li>📚 Continuous Learning</li>
        </ul>
      </section>

      
    </div>
  );
};

export default CareerPage;
