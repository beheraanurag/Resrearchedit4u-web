import React from 'react';
import '../style/style.css';
import { servicesData, steps } from "../content/processdata";
import AI from '../images/ai.webp';
import Journal from '../images/journal.webp';
import Risk from '../images/risk.webp';
import PDF from "../images/Brochure.pdf";
import { Link } from 'react-router-dom';
const Process = () => {
    return (

        <section className="process-section">
            <section className="services">
                <div className="container">
                    <h2 className="title">Our Popular Services</h2>
                    <p className="subtitle">
                        Everything you need from planning to publication fast, ethical, and
                        university-compliant.
                    </p>

                    <div className="grid">
                        {servicesData.map((service) => (
                            <article key={service.id} className="card">
                                <span className="ribbon">Popular</span>
                                <div className="iicon">{service.iicon}</div>
                                <h4 className="card-title">{service.title}</h4>
                                <p className="card-sub">{service.tagline}</p>
                                <ul className="list">
                                    {service.bullets.map((b, i) => (
                                        <li key={i}>{b}</li>
                                    ))}
                                </ul>
                                <p className="price">Starts at {service.price}</p>
                                <div className="actions">
                                    <a href={service.sampleHref} className="btn primary">
                                        Download Sample
                                    </a>
                                    <a href={service.exploreHref} className="btn link">
                                        Explore →
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* offer section */}
            <section className="offer">
                <h1>Expert editing ensures clarity, precision, and success in global publications. Flat 50% OFF! 🎉 Book Now!</h1>
            </section>

            {/* Simple Process */}
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
            <a href={PDF} download="Brochure.pdf">
                <button className="download-btn">Download Now</button>
            </a>

            {/* Why Researchers Trust ResearchEdit4U */}
            <section className="trust-section">
                <h2 className="trust-heading">Why Researchers Trust ResearchEdit4U</h2>

                <div className="trust-cards">
                    <div className="trust-card">
                        <div className="trust-icon">🎓</div>
                        <h3>PhD-Qualified Editors</h3>
                        <p>Native-English editors with PhDs in your field</p>
                        <p>Over 500 editors across Medicine, Engineering, Social Sciences</p>
                        <Link to="/about">Learn More &gt;</Link>
                    </div>

                    <div className="trust-card">
                        <div className="trust-icon">🏆</div>
                        <h3>SCI/Scopus Journal Success</h3>
                        <p>Expert guidance & formatting for top-indexed journals</p>
                        <p>90%+ acceptance rate; journals include <em>Nature, The Lancet</em></p>
                        <Link to="/about">Learn More &gt;</Link>
                    </div>

                    <div className="trust-card">
                        <div className="trust-icon">⏱️</div>
                        <h3>Quick Response</h3>
                        <p>24-hr AI/plagiarism checks, 72-hr standard delivery</p>
                        <p>Avg. turnaround: 48 hrs; 4.8/5 rating on customer service</p>
                        <Link to="/about">Learn More &gt;</Link>
                    </div>
                </div>

                <div className="trust-stats">
                    4051+ researchers helped &bull; 200+ papers published &bull; 95% satisfaction rate
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
                        <h3>Journal Match Pro <br></br> ₹2000</h3>
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

export default Process;
