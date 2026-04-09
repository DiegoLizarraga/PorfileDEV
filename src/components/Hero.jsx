import './Hero.css'
import { Link } from 'react-router'

const skills = {
  LANGUAGES:   ['TypeScript', 'Python', 'C/C++', 'Java', 'JavaScript', 'SQL', 'C#', 'Dart'],
  FRAMEWORKS:  ['React', 'Next.js', 'FastAPI', 'Node.js', 'Flutter', 'Django', 'Spring'],
  'AI & QUANTUM': ['GPT-5 API', 'Ollama', 'IBM Quantum', 'ML Classification', 'Pandas', 'NumPy'],
  TOOLS:       ['Docker', 'Git', 'Linux', 'PostgreSQL', 'Oracle Cloud', 'AWS', 'Azure', 'CI/CD'],
}

const logs = [
  { ts: '14:02:44', text: 'Deployment of ', highlight: 'BLUEMINDS_v1', suffix: ' successful.' },
  { ts: '09:12:01', text: 'Internship at ', highlight: 'HERE_TECHNOLOGIES', suffix: ' completed.' },
  { ts: '07:30:00', text: 'Award — ', highlight: 'DIGIEDUHACK_2025', suffix: ' · EU Commission · 1st place.' },
  { ts: '04:22:18', text: 'Patches applied to ', highlight: 'ENERGQUANTUM', suffix: '. D3CODE 2nd place.' },
  { ts: '01:00:00', text: 'Scholarship ', highlight: 'LÍDERES_DEL_MAÑANA', suffix: ' activated at ITESM.' },
]

const Hero = () => {
  return (
    <div className="hero-wrapper">

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="hero-section">
        <p className="hero-eyebrow">// SENIOR_FULLSTACK_ARCHITECT</p>

        <div className="hero-name-block">
          <div className="hero-name-row">
            <span className="hero-name-ghost electric" aria-hidden="true">DIEGO</span>
            <span className="hero-name-text electric">DIEGO</span>
          </div>
          <div className="hero-name-row">
            <span className="hero-name-ghost neon" aria-hidden="true">LIZÁRRAGA</span>
            <span className="hero-name-text neon">LIZÁRRAGA</span>
          </div>
        </div>

        <div className="hero-meta">
          <span className="meta-tag">@DiegoLizarraga</span>
          <span className="meta-sep" aria-hidden="true" />
          <span className="meta-tag">Guadalajara, MX</span>
          <span className="meta-sep" aria-hidden="true" />
          <span className="meta-tag">ITESM · 2028</span>
        </div>

        <p className="hero-bio">
          Computer Technology Engineering student at Tecnológico de Monterrey on a{' '}
          <strong>100% merit scholarship</strong>. Building at the intersection of{' '}
          <strong>AI, quantum computing &amp; full-stack engineering</strong>.
          Software Engineering Intern at <strong>Here Technologies</strong>.
          Multiple international hackathon champion.
        </p>
      </section>

      {/* ── STATUS BAR ────────────────────────────────────── */}
      <div className="status-bar">
        <span className="status-chip active">● ACTIVE</span>
        <span className="status-chip">B.S. ENG · 2028</span>
        <span className="status-chip">HE / HIM</span>
        <span className="status-chip">ZAPOPAN · MX</span>
      </div>

      {/* ── LINKS ─────────────────────────────────────────── */}
      <div className="links-section">
        <p className="section-eyebrow">// NETWORK_LINKS</p>
        <a href="https://github.com/DiegoLizarraga" target="_blank" rel="noreferrer">
          <div className="link-row github">
            <span className="link-label">GITHUB</span>
            <span className="link-arrow">→</span>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/diegolizarragasanchez/" target="_blank" rel="noreferrer">
          <div className="link-row linkedin">
            <span className="link-label">LINKEDIN</span>
            <span className="link-arrow">→</span>
          </div>
        </a>
        <a href="https://devpost.com/lizarragasanchezdiego/achievements" target="_blank" rel="noreferrer">
          <div className="link-row devpost">
            <span className="link-label">DEVPOST</span>
            <span className="link-arrow">→</span>
          </div>
        </a>
      </div>

      {/* ── CTA ───────────────────────────────────────────── */}
      <div className="cta-row">
        <Link to="/Projects">
          <button className="cta-btn primary">VIEW_PROJECTS</button>
        </Link>
        <Link to="/AboutMe">
          <button className="cta-btn ghost">ABOUT_ME</button>
        </Link>
      </div>

      {/* ── SKILLS ────────────────────────────────────────── */}
      <section className="skills-section">
        <div className="section-header">
          <h2 className="section-title" data-text="SKILLS_SET">SKILLS_SET</h2>
          <span className="section-meta">[ID: 00482]</span>
        </div>
        {Object.entries(skills).map(([cat, items]) => (
          <div className="skill-group" key={cat}>
            <p className="skill-group-label">/ {cat}</p>
            <div className="skill-chips">
              {items.map(s => <span className="chip" key={s}>{s}</span>)}
            </div>
          </div>
        ))}
      </section>

      {/* ── EXPERIENCE & AWARDS ───────────────────────────── */}
      <section className="exp-section">
        <div className="section-header">
          <h2 className="section-title" data-text="EXPERIENCE">EXPERIENCE</h2>
        </div>

        <div className="exp-card blue">
          <div className="exp-header">
            <span className="exp-title">Software Engineering Intern</span>
            <span className="exp-date">2025</span>
          </div>
          <p className="exp-sub">Here Technologies · Guadalajara, MX</p>
          <p className="exp-desc">
            Optimized 500K+ polygon rendering in React. Built scalable REST APIs.
            Migrated legacy codebase to TypeScript — cutting runtime errors by 35%.
          </p>
        </div>

        <div className="exp-card green" style={{ marginTop: '8px' }}>
          <div className="exp-header">
            <span className="exp-title">DigiEduHack 2025 · EU Commission</span>
            <span className="exp-date">NOV 2025</span>
          </div>
          <span className="exp-badge green">🥇 1ST PLACE</span>
          <p className="exp-desc">
            AI-powered educational platform for autism support. GPT-5 API + ML Classification · 100+ users · 87% accuracy.
          </p>
        </div>

        <div className="exp-card purple" style={{ marginTop: '8px' }}>
          <div className="exp-header">
            <span className="exp-title">D3CODE 2025 · Quantum AI</span>
            <span className="exp-date">SEP 2025</span>
          </div>
          <span className="exp-badge cyan">🥈 2ND PLACE</span>
          <p className="exp-desc">
            Hybrid quantum-classical AI optimizer using IBM Quantum for energy grid failure prediction.
          </p>
        </div>

        <div className="exp-card purple" style={{ marginTop: '8px' }}>
          <div className="exp-header">
            <span className="exp-title">GuadalaHacks 2025 · GeoFix</span>
            <span className="exp-date">MAY 2025</span>
          </div>
          <span className="exp-badge cyan">🥈 2ND PLACE</span>
          <p className="exp-desc">
            Geospatial correction tool using Here APIs + Pandas/GeoPandas + R-tree indexing. 10x performance gain.
          </p>
        </div>
      </section>

      {/* ── SYSTEM LOGS ───────────────────────────────────── */}
      <section className="logs-section">
        <div className="section-header">
          <h2 className="section-title" data-text="SYSTEM_LOGS">SYSTEM_LOGS</h2>
        </div>
        <div className="logs-box">
          <span className="logs-tag">LATEST</span>
          {logs.map((l, i) => (
            <p className="log-line" key={i}>
              <span className="ts">[{l.ts}]</span>{' '}
              {l.text}<span className="highlight">{l.highlight}</span>{l.suffix}
            </p>
          ))}
        </div>
      </section>

    </div>
  )
}

export default Hero