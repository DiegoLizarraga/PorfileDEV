import { useState } from 'react'
import { Link } from 'react-router'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'ok' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSend = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/server', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('ok')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div style={{ minHeight: '100vh', paddingBottom: '80px' }}>

      <div className="page-header">
        <Link to="/" className="back-link">← BACK</Link>
        <h1 data-text="CONTACT">CONTACT</h1>
        <p className="page-tagline">// OPEN_FOR_COLLAB · FULL-TIME · HACKATHONS</p>
      </div>

      <div style={{ padding: '0 20px', maxWidth: '600px' }}>

        {/* Info block */}
        <div style={{
          marginTop: '28px',
          background: 'var(--bg-surface)',
          padding: '16px',
          borderLeft: '3px solid var(--secondary)',
          marginBottom: '28px',
        }}>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '10px',
            fontWeight: '700',
            letterSpacing: '0.2em',
            color: 'var(--text-dim)',
            textTransform: 'uppercase',
            marginBottom: '8px',
          }}>// CONTACT_CHANNELS</p>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.7 }}>
            Reach me at{' '}
            <span style={{ color: 'var(--primary)', fontFamily: 'var(--font-display)' }}>
              lizarragasanchezdiego@gmail.com
            </span>
            {' '}or fill the form below.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSend} style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px' }}>
            <div>
              <label style={labelStyle}>// NAME</label>
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Diego Lizárraga"
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>// EMAIL</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@domain.com"
                style={inputStyle}
              />
            </div>
          </div>

          <div>
            <label style={labelStyle}>// MESSAGE</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={8}
              placeholder="Hey Diego, I want to collaborate on..."
              style={{ ...inputStyle, resize: 'vertical', lineHeight: '1.6' }}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '12px',
              fontWeight: '700',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              padding: '18px',
              background: status === 'sending' ? 'var(--bg-raised)' : 'var(--secondary)',
              color: status === 'sending' ? 'var(--text-dim)' : 'var(--secondary-on)',
              border: 'none',
              cursor: status === 'sending' ? 'not-allowed' : 'pointer',
              transition: 'opacity 0.15s',
              marginTop: '4px',
            }}
          >
            {status === 'sending' ? 'TRANSMITTING...' : 'SEND_MESSAGE →'}
          </button>

          {status === 'ok' && (
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: '11px',
              color: 'var(--secondary)',
              letterSpacing: '0.14em',
              textAlign: 'center',
              padding: '10px',
              background: 'var(--bg-surface)',
            }}>
              ✓ MESSAGE_TRANSMITTED SUCCESSFULLY
            </p>
          )}

          {status === 'error' && (
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: '11px',
              color: '#ff4466',
              letterSpacing: '0.14em',
              textAlign: 'center',
              padding: '10px',
              background: 'var(--bg-surface)',
            }}>
              ✗ TRANSMISSION_FAILED — try again or email directly
            </p>
          )}

        </form>

        <div style={{ padding: '32px 0' }}>
          <Link to="/" className="back-link">← BACK_TO_HOME</Link>
        </div>
      </div>
    </div>
  )
}

const labelStyle = {
  display: 'block',
  fontFamily: 'var(--font-display)',
  fontSize: '9px',
  fontWeight: '700',
  letterSpacing: '0.2em',
  color: 'var(--text-dim)',
  textTransform: 'uppercase',
  marginBottom: '6px',
}

const inputStyle = {
  width: '100%',
  display: 'block',
  background: '#000',
  border: 'none',
  borderBottom: '2px solid var(--bg-raised)',
  padding: '12px 14px',
  color: 'var(--text)',
  fontFamily: 'var(--font-body)',
  fontSize: '14px',
  outline: 'none',
  transition: 'border-color 0.15s',
}

export default Contact