import './Navbar.css'
import { Link, useLocation } from 'react-router'

const Navbar = ({ children }) => {
  const { pathname } = useLocation()

  const links = [
    { to: '/',         label: 'HOME' },
    { to: '/Projects', label: 'PROJECTS' },
    { to: '/AboutMe',  label: 'ABOUT' },
    { to: '/Contact',  label: 'CONTACT' },
  ]

  return (
    <>
      <header className="topbar">
        <div className="topbar-brand">
          <div className="topbar-icon">
            <span /><span /><span />
          </div>
          SYS_PROFILE_V3.0
        </div>
        <nav className="topbar-links">
          {links.map(l => (
            <Link key={l.to} to={l.to} className={pathname === l.to ? 'active' : ''}>
              {l.label}
            </Link>
          ))}
        </nav>
      </header>

      <main>{children}</main>

      <nav className="bottomnav">
        <Link to="/" className={`nav-item ${pathname === '/' ? 'active' : ''}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke={pathname === '/' ? '#2ff801' : '#5a4060'} strokeWidth="1.5" strokeLinecap="square">
            <path d="M3 12L12 4l9 8" /><path d="M5 10v10h5v-5h4v5h5V10" />
          </svg>
          <span className="nav-label">HOME</span>
        </Link>
        <Link to="/Projects" className={`nav-item ${pathname === '/Projects' ? 'active' : ''}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke={pathname === '/Projects' ? '#2ff801' : '#5a4060'} strokeWidth="1.5" strokeLinecap="square">
            <rect x="3" y="3" width="8" height="8" /><rect x="13" y="3" width="8" height="8" />
            <rect x="3" y="13" width="8" height="8" /><rect x="13" y="13" width="8" height="8" />
          </svg>
          <span className="nav-label">CODE</span>
        </Link>
        <Link to="/AboutMe" className={`nav-item ${pathname === '/AboutMe' ? 'active' : ''}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke={pathname === '/AboutMe' ? '#2ff801' : '#5a4060'} strokeWidth="1.5" strokeLinecap="square">
            <circle cx="12" cy="12" r="9" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
          </svg>
          <span className="nav-label">NET</span>
        </Link>
        <Link to="/Contact" className={`nav-item ${pathname === '/Contact' ? 'active' : ''}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke={pathname === '/Contact' ? '#2ff801' : '#5a4060'} strokeWidth="1.5" strokeLinecap="square">
            <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
          </svg>
          <span className="nav-label">USER</span>
        </Link>
      </nav>
    </>
  )
}

export default Navbar