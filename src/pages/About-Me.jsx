import { Link } from 'react-router'
import './About-Me.css'

const AboutMe = () => {
  return (
    <div className="about-page">

      <div className="page-header">
        <Link to="/" className="back-link">← BACK</Link>
        <h1 data-text="ABOUT_ME">ABOUT_ME</h1>
        <p className="page-tagline">// COMPUTER_TECHNOLOGY_ENGINEER · AI &amp; FULL-STACK</p>
      </div>

      <div className="about-body">

        <section className="about-section">
          <h2 className="about-section-title">WHO_I_AM</h2>
          <p>
            I'm Diego Lizárraga, a Computer Technology Engineering student at{' '}
            <strong>Tecnológico de Monterrey (ITESM)</strong> on a 100% merit-based scholarship
            (Líderes del mañana), graduating Jun. 2028. I build full-stack products
            that live at the crossroads of <strong>AI, data, and performance engineering</strong>.
          </p>
          <p>
            I interned at <strong>Here Technologies</strong> as a Software Engineering Intern,
            where I optimized 500K+ polygon rendering in React, built scalable REST APIs,
            and migrated a legacy codebase to TypeScript — cutting runtime errors by 35%.
          </p>
        </section>

        <section className="about-section">
          <h2 className="about-section-title">EDUCATION</h2>
          <div className="about-entry">
            <div>
              <p className="entry-title">B.S. in Computer Technology Engineering</p>
              <p className="entry-sub">Tecnológico de Monterrey (ITESM) · Zapopan, Jalisco</p>
              <p className="entry-sub">100% Merit-Based Scholarship — Líderes del mañana</p>
            </div>
            <span className="entry-date">AUG 2024 – JUN 2028</span>
          </div>
        </section>

        <section className="about-section">
          <h2 className="about-section-title">TECHNICAL_SKILLS</h2>
          <div className="skills-block">
            {[
              {
                label: 'Languages',
                items: ['Python', 'TypeScript', 'JavaScript', 'C/C++', 'C#', 'Java', 'SQL', 'HTML/CSS'],
                type: 'default',
              },
              {
                label: 'Full-Stack',
                items: ['React', 'Next.js', 'FastAPI', 'Node.js', 'REST APIs', 'Electron', 'PostgreSQL'],
                type: 'default',
              },
              {
                label: 'AI & ML',
                items: ['GPT-5 API', 'Ollama', 'ML Classification', 'Pandas', 'NumPy', 'IBM Quantum'],
                type: 'cyan',
              },
              {
                label: 'Tools',
                items: ['Git', 'Docker', 'Linux', 'CI/CD', 'Agile', 'Oracle Cloud', 'AWS', 'Azure'],
                type: 'default',
              },
            ].map(({ label, items, type }) => (
              <div className="skill-row" key={label}>
                <span className="skill-label">{label}</span>
                <div className="skill-tags">
                  {items.map(s => (
                    <span key={s} className={`tag ${type === 'cyan' ? 'cyan' : ''}`}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="about-section">
          <h2 className="about-section-title">AWARDS_&amp;_RECOGNITION</h2>
          <div className="awards-list">
            <div className="award-item">
              <span className="award-badge green">1ST</span>
              <div className="award-content">
                <p className="award-title">DigiEduHack 2025 · European Commission</p>
                <p className="award-desc">AI-powered educational platform for autism support. GPT-5 + ML · 100+ users.</p>
              </div>
              <span className="entry-date">NOV 2025</span>
            </div>
            <div className="award-item">
              <span className="award-badge cyan">2ND</span>
              <div className="award-content">
                <p className="award-title">D3CODE 2025 · Mexico Edition</p>
                <p className="award-desc">Quantum computing + AI solution for energy grid optimization using IBM Quantum.</p>
              </div>
              <span className="entry-date">SEP 2025</span>
            </div>
            <div className="award-item">
              <span className="award-badge cyan">2ND</span>
              <div className="award-content">
                <p className="award-title">GuadalaHacks 2025</p>
                <p className="award-desc">Production-ready geospatial data correction tool using Here APIs. 10x performance.</p>
              </div>
              <span className="entry-date">MAY 2025</span>
            </div>
            <div className="award-item">
              <span className="award-badge silver">🥈</span>
              <div className="award-content">
                <p className="award-title">Sinaloa Computer Science Olympiad — Silver Medals</p>
                <p className="award-desc">Competitive programming excellence with C/C++.</p>
              </div>
              <span className="entry-date">2021 · 2024</span>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2 className="about-section-title">CERTIFICATIONS</h2>
          <div className="cert-list">
            <div className="cert-item">
              <p className="cert-title">Data Engineering &amp; AI in the Cloud Specialization</p>
              <p className="cert-sub">CIIP LATAM · 350 hours · Big Data, AWS, Azure, GCP, Databricks</p>
            </div>
            <div className="cert-item">
              <p className="cert-title">Oracle Next Education (ONE) – Backend Specialization</p>
              <p className="cert-sub">Oracle + Alura LATAM · 326 hours · Java, Spring, AI &amp; Java, Agile</p>
            </div>
            <div className="cert-item">
              <p className="cert-title">Professional Fundamentals of Software Development</p>
              <p className="cert-sub">Microsoft / LinkedIn</p>
            </div>
          </div>
        </section>

      </div>

      <div className="about-footer">
        <Link to="/" className="back-link">← BACK_TO_HOME</Link>
      </div>
    </div>
  )
}

export default AboutMe