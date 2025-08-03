import React from 'react';
import '../style/style.css';
import uploadIcon from '../images/Submit.webp';
import reviewIcon from '../images/expert.webp';
import paymentIcon from '../images/payment.webp';
import qcIcon from '../images/review.webp';
import deliveryIcon from '../images/delivery.webp';
import AI from '../images/ai.webp';
import Journal from '../images/journal.webp';
import Risk from '../images/risk.webp';


const steps = [
    {
        title: 'Submit Requirement',
        desc: 'Upload your draft, select services.',
        icon: uploadIcon,
    },
    {
        title: 'Expert Review',
        desc: 'PhD expert assesses & gives quote.',
        icon: reviewIcon,
    },
    {
        title: 'Payment',
        desc: 'Matched with subject editor.',
        icon: paymentIcon,
    },
    {
        title: 'QC & Review',
        desc: 'Reviewed for quality, originality.',
        icon: qcIcon,
    },
    {
        title: 'Final Delivery',
        desc: 'Delivered security revisions allowed.',
        icon: deliveryIcon,
    },
];

const ProcessSteps = () => {
    return (
        <section className="process-section">
            <h2 >A Simple Process with Powerful Results</h2>
            <button className="primary-btn">Get Started in 2 Minutes</button>
            <div className="steps-grid">
                {steps.map((step, idx) => (
                    <div key={idx} className="step-card">
                        <img src={step.icon} alt={step.title} />
                        <h4>{step.title}</h4>
                        <p>{step.desc}</p>
                    </div>
                ))}
            </div>
            <button className="download-btn">Download Now</button>

            {/* Why Researchers Trust ResearchEdit4U */}
            <section className="trust-section">
                <h2 className="trust-heading">Why Researchers Trust ResearchEdit4U</h2>

                <div className="trust-cards">
                    <div className="trust-card">
                        <div className="trust-icon">🎓</div>
                        <h3>PhD-Qualified Editors</h3>
                        <p>Native-English editors with PhDs in your field</p>
                        <p>Over 500 editors across Medicine, Engineering, Social Sciences</p>
                        <a href="#">Learn More &gt;</a>
                    </div>

                    <div className="trust-card">
                        <div className="trust-icon">🏆</div>
                        <h3>SCI/Scopus Journal Success</h3>
                        <p>Expert guidance & formatting for top-indexed journals</p>
                        <p>90%+ acceptance rate; journals include <em>Nature, The Lancet</em></p>
                        <a href="#">Learn More &gt;</a>
                    </div>

                    <div className="trust-card">
                        <div className="trust-icon">⏱️</div>
                        <h3>Fast Turnaround & Responsiveness</h3>
                        <p>24-hr AI/plagiarism checks, 72-hr standard delivery</p>
                        <p>Avg. turnaround: 48 hrs; 4.8/5 rating on customer service</p>
                        <a href="#">Learn More &gt;</a>
                    </div>
                </div>

                <div className="trust-stats">
                    20,000+ researchers helped &bull; 1,000+ papers published &bull; 95% satisfaction rate
                </div>
            </section>

            {/* QuickOffers section */}
            <section class="quick-offers">
                <h2>Quick Offers That Save Time & Rejections</h2>
                <p class="subtext">Fast, focused services ideal before submission. Choose what you need</p>

                <div class="offers">
                    <div class="offer-card">
                        <img src={AI} alt="AI + Plagiarism Report" />
                        <h3>AI + Plagiarism Report ₹500</h3>
                        <p>Detect Turnitin + GPTZero flags in 24 hours.</p>
                        <button>See Sample Report</button>
                    </div>

                    <div class="offer-card">
                        <img src={Risk} alt="Rejection Risk Check" />
                        <h3>Rejection Risk Check ₹2000</h3>
                        <p>Expert Scorecard based on Structure, Scope & Readiness</p>
                        <button>Check My Score</button>
                    </div>

                    <div class="offer-card">
                        <img src={Journal} alt="Journal Match Pro" />
                        <h3>Journal Match Pro ₹2000</h3>
                        <p>4 Scopus/SCI Journals + Desk Rejection Score</p>
                        <button>Get Match Re</button>
                    </div>
                </div>

                <div class="help-box">
                    <p><strong>Not sure which one to choose ?</strong></p>
                    <a
                        href="https://wa.me/+918093778526"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button class="expert-btn">Talk to an Expert</button>
                    </a>

                </div>
            </section>


        </section>


    );
};

export default ProcessSteps;
