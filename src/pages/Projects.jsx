import { Link } from "react-router";
import './Projects.css';

const projects = [
    {
        name: 'BlueMInds',
        badge: '🥇 DigiEduHack 2025 · 1st Place',
        type: 'AI Educational Platform',
        date: 'Nov 2025',
        stack: ['FastAPI', 'React', 'GPT-5 API', 'ML Classification'],
        bullets: [
            'Full-stack app integrating GPT-5 API for personalized autism education with 100+ users.',
            'ML classification system analyzing quiz responses with 87% accuracy in learning pattern detection.',
        ],
        color: 'green',
    },
    {
        name: 'EnerQuantum',
        badge: '🥈 D3CODE 2025 · 2nd Place',
        type: 'AI Energy Platform',
        date: 'Sep 2025',
        stack: ['IBM Quantum', 'Python', 'PostgreSQL', 'AI Optimizer'],
        bullets: [
            'Hybrid quantum-classical AI optimizer using IBM Quantum for energy grid failure prediction.',
            'PostgreSQL schema for 90-day time-series data, optimizing queries for 60% faster real-time analysis.',
        ],
        color: 'cyan',
    },
    {
     name: 'Lune CD',
        badge: null,
        type: 'AI Desktop Assistant',
        date: 'Jul 2025',
        stack: ['PyQt6', 'Python', 'Ollama', 'OpenRouter', 'Edge-TTS'],
        bullets: [
            'Multi-provider desktop app with intelligent routing between local Ollama and cloud APIs (OpenRouter, DeepSeek, Character.AI).',
    'Dynamic facial expressions with emotion detection, integrated Telegram bot, and natural voice synthesis with automatic fallback.',
        ],
        color: 'purple',
    },
    {
        name: 'GeoFix',
        badge: '🥈 GuadalaHacks 2025 · 2nd Place',
        type: 'Geospatial Tool',
        date: 'May 2025',
        stack: ['Here APIs', 'Pandas', 'GeoPandas', 'R-tree'],
        bullets: [
            'Integrated Here Technologies REST APIs for real-time geospatial validation and processing.',
            'Pipeline with Pandas/GeoPandas and R-tree indexing, achieving 10x performance improvement.',
        ],
        color: 'cyan',
    },
];

const Projects = () => {
    return (
        <div className="projects-page">
            <div className="projects-header">
                <Link to="/" className="back-link">← Back</Link>
                <h1>Projects</h1>
                <p className="projects-tagline">Hackathons, internships & personal builds.</p>
            </div>

            <div className="projects-grid">
                {projects.map((p) => (
                    <div key={p.name} className={`project-card color-${p.color}`}>
                        <div className="card-top">
                            <div>
                                <h2 className="card-name">{p.name}</h2>
                                <span className="card-type">{p.type}</span>
                            </div>
                            <span className="card-date">{p.date}</span>
                        </div>
                        {p.badge && <span className="card-badge">{p.badge}</span>}
                        <ul className="card-bullets">
                            {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
                        </ul>
                        <div className="card-stack">
                            {p.stack.map(s => <span key={s} className="stack-tag">{s}</span>)}
                        </div>
                    </div>
                ))}
            </div>

            <div className="projects-footer">
                <Link to="/" className="back-link">← Back to Home</Link>
            </div>
        </div>
    );
};

export default Projects;