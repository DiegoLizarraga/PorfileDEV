import { Link } from "react-router";
import './About-Me.css';

const AboutMe = () => {
    return (
        <div className="about-page">
            <div className="about-header">
                <Link to="/" className="back-link">← Back</Link>
                <h1>About Me</h1>
                <p className="about-tagline">Computer Technology Engineering Student · AI & Full-Stack Development</p>
            </div>

            <div className="about-body">

                <section className="about-section">
                    <h2>Who I am</h2>
                    <p>
                        I'm Diego Lizárraga, a Computer Technology Engineering student at
                        Tecnológico de Monterrey (ITESM) on a 100% merit-based scholarship
                        (Líderes del mañana), graduating Jun. 2028. I build full-stack products
                        that live at the crossroads of AI, data, and performance engineering.
                    </p>
                    <p>
                        I interned at <strong>Here Technologies</strong> as a Software Engineering
                        Intern, where I optimized 500K+ polygon rendering in React, built scalable
                        REST APIs, and migrated a legacy codebase to TypeScript — cutting runtime
                        errors by 35%.
                    </p>
                </section>

                <section className="about-section">
                    <h2>Education</h2>
                    <div className="about-entry">
                        <div>
                            <p className="entry-title">B.S. in Computer Technology Engineering</p>
                            <p className="entry-sub">Tecnológico de Monterrey (ITESM) · Zapopan, Jalisco</p>
                            <p className="entry-sub muted">100% Merit-Based Scholarship — Líderes del mañana</p>
                        </div>
                        <span className="entry-date">Aug. 2024 – Jun. 2028</span>
                    </div>
                </section>

                <section className="about-section">
                    <h2>Technical Skills</h2>
                    <div className="skills-block">
                        <div className="skill-row">
                            <span className="skill-label">Languages</span>
                            <div className="skill-tags">
                                {['Python','TypeScript','JavaScript','C/C++','C#','Java','SQL','HTML/CSS'].map(s => (
                                    <span key={s} className="tag">{s}</span>
                                ))}
                            </div>
                        </div>
                        <div className="skill-row">
                            <span className="skill-label">Full-Stack</span>
                            <div className="skill-tags">
                                {['React','Next.js','FastAPI','Node.js','REST APIs','Electron','PostgreSQL'].map(s => (
                                    <span key={s} className="tag">{s}</span>
                                ))}
                            </div>
                        </div>
                        <div className="skill-row">
                            <span className="skill-label">AI & ML</span>
                            <div className="skill-tags">
                                {['GPT-5 API','Ollama','ML Classification','Pandas','NumPy','IBM Quantum'].map(s => (
                                    <span key={s} className="tag cyan">{s}</span>
                                ))}
                            </div>
                        </div>
                        <div className="skill-row">
                            <span className="skill-label">Tools</span>
                            <div className="skill-tags">
                                {['Git','Docker','Linux','CI/CD','Agile','Oracle Cloud'].map(s => (
                                    <span key={s} className="tag">{s}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-section">
                    <h2>Awards & Recognition</h2>
                    <div className="awards-list">
                        <div className="award-item">
                            <span className="award-badge green">1st</span>
                            <div>
                                <p className="award-title">DigiEduHack 2025 · European Commission</p>
                                <p className="award-desc">Built AI-powered educational platform for autism support.</p>
                            </div>
                            <span className="entry-date">Nov 2025</span>
                        </div>
                        <div className="award-item">
                            <span className="award-badge cyan">2nd</span>
                            <div>
                                <p className="award-title">D3CODE 2025 · Mexico Edition</p>
                                <p className="award-desc">Quantum computing + AI solution for energy grid optimization.</p>
                            </div>
                            <span className="entry-date">Sep 2025</span>
                        </div>
                        <div className="award-item">
                            <span className="award-badge cyan">2nd</span>
                            <div>
                                <p className="award-title">GuadalaHacks 2025</p>
                                <p className="award-desc">Production-ready geospatial data correction tool using Here APIs.</p>
                            </div>
                            <span className="entry-date">May 2025</span>
                        </div>
                        <div className="award-item">
                            <span className="award-badge silver">🥈</span>
                            <div>
                                <p className="award-title">Sinaloa Computer Science Olympiad · Silver Medals</p>
                                <p className="award-desc">Competitive programming excellence with C/C++.</p>
                            </div>
                            <span className="entry-date">2021 · 2024</span>
                        </div>
                    </div>
                </section>

                <section className="about-section">
                    <h2>Professional Development</h2>
                    <div className="cert-list">
                        <div className="cert-item">
                            <p className="cert-title">Data Engineering & AI in the Cloud Specialization</p>
                            <p className="cert-sub">CIIP LATAM · 350 hours · Big Data, AWS, Azure, GCP, Databricks</p>
                        </div>
                        <div className="cert-item">
                            <p className="cert-title">Oracle Next Education (ONE) – Backend Specialization</p>
                            <p className="cert-sub">Oracle + Alura LATAM · 326 hours · Java, Spring, AI & Java, Agile</p>
                        </div>
                        <div className="cert-item">
                            <p className="cert-title">Professional Fundamentals of Software Development</p>
                            <p className="cert-sub">Microsoft / LinkedIn</p>
                        </div>
                    </div>
                </section>

            </div>

            <div className="about-footer">
                <Link to="/" className="back-link">← Back to Home</Link>
            </div>
        </div>
    );
};

export default AboutMe;