import React from 'react';
import { servicesData, steps } from "../content/processdata";
import AI from '../images/ai.webp';
import Journal from '../images/journal.webp';
import Risk from '../images/risk.webp';
import PDF from "../images/Brochure.pdf";
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Process = () => {
    return (
        <section className="text-center px-5 py-2.5">
            {/* Offer section */}
            <section className="w-full overflow-hidden px-2 md:px-5 py-2.5 whitespace-nowrap m-0">
                <h1 className="inline-block text-lg md:text-2xl lg:text-3xl text-[#0B2662] animate-[marquee_15s_linear_infinite] font-serif cursor-pointer hover:[animation-play-state:paused]">
                    Expert editing ensures clarity, precision, and success in global publications. Upto 50% OFF! 🎉 Book Now!
                </h1>
            </section>

            {/* Subjects We Handle Section */}
            <section className="w-full px-5 py-5 flex justify-center relative">
                <div className="max-w-[1200px] w-full text-center relative z-[2]">
                    <h2 className="text-[2.5rem] font-extrabold text-[#0B2662] mb-2.5">Subjects We Handle</h2>
                    <p className="text-xl text-gray-600 mb-11">High-quality academic support across all major fields</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {[
                            { name: "STEM", icon: "🧪" },
                            { name: "Social Science", icon: "🌍" },
                            { name: "Arts & Humanities", icon: "🎨" },
                            { name: "Literature", icon: "📚" },
                            { name: "Business & Management", icon: "💼" },
                            { name: "Law", icon: "⚖️" },
                            { name: "Finance", icon: "💰" },
                            { name: "Education Studies", icon: "🎓" }
                        ].map((item, index) => (
                            <Card key={index} className="bg-white rounded-[18px] p-7 border border-[#d7f1f4] cursor-pointer shadow-md transition-all hover:-translate-y-2.5 hover:scale-[1.03] hover:border-[#0B2662] hover:shadow-lg relative overflow-hidden">
                                <div className="w-15 h-15 bg-[#e9fafb] rounded-full flex items-center justify-center text-[28px] text-[#0d6972] mx-auto mb-4 shadow-md">
                                    {item.icon}
                                </div>
                                <p className="text-lg font-semibold text-[#0B2662]">{item.name}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="px-5 py-2.5 text-center max-w-[1200px] mx-auto">
                <div>
                    <h2 className="text-[2.5rem] font-extrabold mb-4">Our Popular Services</h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Everything you need from planning to publication fast, ethical, and
                        university-compliant.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
                        {servicesData.map((service) => (
                            <Card key={service.id} className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all text-left flex flex-col w-full max-w-[340px] min-h-[380px] hover:-translate-y-1 hover:shadow-xl">
                                <span className="absolute -top-1 -left-1 bg-gradient-to-br from-[#ff6a00] to-[#ffaf38] text-white px-3.5 py-1.5 text-xs font-extrabold rounded-lg shadow-md pointer-events-none">
                                    Popular
                                </span>
                                <div className="text-5xl mb-1.5">{service.iicon}</div>
                                <CardHeader className="p-0">
                                    <CardTitle className="text-2xl font-semibold mb-2.5">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="p-0 flex-1 flex flex-col">
                                    <p className="text-base text-gray-600 mb-2.5">{service.tagline}</p>
                                    <ul className="list-disc pl-5 text-gray-800 text-base leading-6 mb-2.5">
                                        {service.bullets.map((b, i) => (
                                            <li key={i}>{b}</li>
                                        ))}
                                    </ul>
                                    <p className="mt-2.5 font-bold text-lg">Starts at {service.price}</p>
                                    <div className="mt-auto flex gap-3 pt-3.5">
                                        <Button asChild variant="outline" size="sm" className="bg-[#e0e7ff] text-[#153e75] hover:bg-[#c7d2fe]">
                                            <a href={service.sampleHref}>Download Sample</a>
                                        </Button>
                                        <Button asChild variant="link" size="sm" className="text-[#153e75] font-bold">
                                            <a href={service.exploreHref}>Explore →</a>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Simple Process */}
            <div className="my-8">
                <h2 className="text-[2.2rem] text-[#0B2662] font-bold mb-5">A Simple Process with Powerful Results</h2>
                <Button variant="outline" className="bg-transparent border-2 border-[#0B2662] text-[#0B2662] font-semibold rounded-lg hover:bg-[#0B2662] hover:text-white mb-10">
                    Get Started in 2 Minutes
                </Button>
                <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                    {steps.map((step, idx) => (
                        <Card key={idx} className="w-[180px] bg-gray-50 p-5 rounded-xl shadow-md transition-all hover:-translate-y-1 hover:shadow-lg hover:bg-[#89b6ea] cursor-pointer">
                            <CardContent className="p-0">
                                <img src={step.icon} alt={step.title} className="w-12 mb-4" />
                                <h4 className="text-lg text-gray-900 mb-2 font-bold">{step.title}</h4>
                                <p className="text-base text-gray-600 leading-[1.3]">{step.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <a href={PDF} download="Brochure.pdf" className="inline-block mt-10">
                    <Button className="bg-[#0B2662] text-white font-semibold rounded-lg hover:opacity-85">
                        Download Now
                    </Button>
                </a>
            </div>

            {/* Why Researchers Trust ResearchEdit4U */}
            <section className="text-center px-5 py-2.5">
                <h2 className="text-[2.2rem] font-bold text-[#0B2662] mb-5 font-serif">Why Researchers Trust ResearchEdit4U</h2>

                <div className="flex justify-center flex-wrap gap-6 mt-8">
                    <Card className="bg-white p-6 w-[300px] rounded-lg border border-gray-300 transition-all shadow-md border-b-2 border-b-[#001c55] hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:border-[#0a1a79] hover:bg-[#89b6ea] cursor-pointer">
                        <CardContent className="p-0">
                            <div className="text-8xl mb-4">🎓</div>
                            <h3 className="text-lg text-gray-900 mb-3 font-bold">PhD-Qualified Editors</h3>
                            <p className="text-base text-gray-600 leading-6 mb-1">Native-English editors with PhDs in your field</p>
                            <p className="text-base text-gray-600 leading-6 mb-1">Over 500 editors across Medicine, Engineering, Social Sciences</p>
                            <Link to="/about" className="inline-block mt-3 font-medium text-[#0a1a79] no-underline transition-colors hover:text-black text-xl">
                                Learn More &gt;
                            </Link>
                        </CardContent>
                    </Card>

                    <Card className="bg-white p-6 w-[300px] rounded-lg border border-gray-300 transition-all shadow-md border-b-2 border-b-[#001c55] hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:border-[#0a1a79] hover:bg-[#89b6ea] cursor-pointer">
                        <CardContent className="p-0">
                            <div className="text-8xl mb-4">🏆</div>
                            <h3 className="text-lg text-gray-900 mb-3 font-bold">SCI/Scopus Journal Success</h3>
                            <p className="text-base text-gray-600 leading-6 mb-1">Expert guidance & formatting for top-indexed journals</p>
                            <p className="text-base text-gray-600 leading-6 mb-1">90%+ acceptance rate; journals include <em>Nature, The Lancet</em></p>
                            <Link to="/about" className="inline-block mt-3 font-medium text-[#0a1a79] no-underline transition-colors hover:text-black text-xl">
                                Learn More &gt;
                            </Link>
                        </CardContent>
                    </Card>

                    <Card className="bg-white p-6 w-[300px] rounded-lg border border-gray-300 transition-all shadow-md border-b-2 border-b-[#001c55] hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:border-[#0a1a79] hover:bg-[#89b6ea] cursor-pointer">
                        <CardContent className="p-0">
                            <div className="text-8xl mb-4">⏱️</div>
                            <h3 className="text-lg text-gray-900 mb-3 font-bold">Quick Response</h3>
                            <p className="text-base text-gray-600 leading-6 mb-1">24-hr AI/plagiarism checks, 72-hr standard delivery</p>
                            <p className="text-base text-gray-600 leading-6 mb-1">Avg. turnaround: 48 hrs; 4.8/5 rating on customer service</p>
                            <Link to="/about" className="inline-block mt-3 font-medium text-[#0a1a79] no-underline transition-colors hover:text-black text-xl">
                                Learn More &gt;
                            </Link>
                        </CardContent>
                    </Card>
                </div>
                <div className="mt-8 text-2xl text-black">
                    4051+ researchers helped &bull; 200+ papers published &bull; 95% satisfaction rate
                </div>
            </section>

            {/* QuickOffers section */}
            <section className="text-center px-5 py-2.5 font-serif">
                <h2 className="text-[2.2rem] text-[#0B2662] font-bold">Quick Offers That Save Time & Rejections</h2>
                <p className="my-1 mx-auto text-xl font-medium text-gray-600 inline-block px-3 py-0.5 rounded mb-5">
                    Fast, focused services ideal before submission. Choose what you need
                </p>

                <div className="flex justify-center gap-4 md:gap-8 flex-wrap mb-8">
                    <Card className="bg-white p-5 w-[260px] rounded-xl shadow-md transition-all hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:bg-[#89b6ea]">
                        <CardContent className="p-0">
                            <img src={AI} alt="AI + Plagiarism Report" className="w-20 h-20 mb-2.5 mx-auto" />
                            <h3 className="text-lg text-black mb-2.5 font-bold">AI + Plagiarism Report ₹500</h3>
                            <p className="text-base text-gray-600 min-h-[40px] leading-[1.4]">Detect Turnitin + GPTZero flags in 24 hours.</p>
                            <Button className="bg-[#0B2662] text-white border-none px-3.5 py-2.5 rounded mt-2.5 text-sm hover:bg-[#1a1a59]">
                                See Sample Report
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="bg-white p-5 w-[260px] rounded-xl shadow-md transition-all hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:bg-[#89b6ea]">
                        <CardContent className="p-0">
                            <img src={Risk} alt="Rejection Risk Check" className="w-20 h-20 mb-2.5 mx-auto" />
                            <h3 className="text-lg text-black mb-2.5 font-bold">Rejection Risk Check ₹2000</h3>
                            <p className="text-base text-gray-600 min-h-[40px] leading-[1.4]">Expert Scorecard based on Structure, Scope & Readiness</p>
                            <Button className="bg-[#0B2662] text-white border-none px-3.5 py-2.5 rounded mt-2.5 text-sm hover:bg-[#1a1a59]">
                                Check My Score
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="bg-white p-5 w-[260px] rounded-xl shadow-md transition-all hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:bg-[#89b6ea]">
                        <CardContent className="p-0">
                            <img src={Journal} alt="Journal Match Pro" className="w-20 h-20 mb-2.5 mx-auto" />
                            <h3 className="text-lg text-black mb-2.5 font-bold">Journal Match Pro <br /> ₹2000</h3>
                            <p className="text-base text-gray-600 min-h-[40px] leading-[1.4]">4 Scopus/SCI Journals + Desk Rejection Score</p>
                            <Button className="bg-[#0B2662] text-white border-none px-3.5 py-2.5 rounded mt-2.5 text-sm hover:bg-[#1a1a59]">
                                Get Match Re
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                <div className="mb-5">
                    <p className="text-xl mb-5 text-[#0B2662]"><strong>Not sure which one to choose ?</strong></p>
                    <a
                        href="https://wa.me/+918093778526"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button variant="outline" className="bg-white text-[#0B2662] border-2 border-black px-5 py-2.5 rounded font-medium transition-all hover:bg-[#0B2662] hover:text-white">
                            Talk to an Expert
                        </Button>
                    </a>
                </div>
            </section>
        </section>
    );
};

export default Process;
