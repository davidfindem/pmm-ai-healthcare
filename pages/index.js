import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  const [stats, setStats] = useState({ leads: 0, score: 0, emails: 0 })

  useEffect(() => {
    const updateStats = () => {
      setStats({
        leads: Math.floor(Math.random() * 10) + 25,
        score: Math.floor(Math.random() * 5) + 18,
        emails: Math.floor(Math.random() * 20) + 140
      })
    }
    updateStats()
    const interval = setInterval(updateStats, 3000)
    return () => clearInterval(interval)
  }, [])

  const personas = [
    {
      title: 'Rural Nursing Homes',
      description: 'CNAs and LPNs for rural facilities',
      icon: '🏥',
      color: '#ef4444',
      href: '/rural-nursing-home'
    },
    {
      title: 'Dental Offices', 
      description: 'Hygienists and dental assistants',
      icon: '🦷',
      color: '#3b82f6',
      href: '/dental-office'
    },
    {
      title: 'Urgent Care Centers',
      description: 'Medical assistants and nurses',
      icon: '🚨', 
      color: '#f97316',
      href: '/urgent-care'
    },
    {
      title: 'Physical Therapy Clinics',
      description: 'PTs and therapy assistants', 
      icon: '🏃‍♂️',
      color: '#10b981',
      href: '/physical-therapy'
    },
    {
      title: 'Mental Health Practices',
      description: 'Therapists and counselors',
      icon: '🧠',
      color: '#8b5cf6',
      href: '/mental-health'
    },
    {
      title: 'Senior Living Communities',
      description: 'Caregivers and activity coordinators',
      icon: '🏠',
      color: '#06b6d4',
      href: '/senior-living'
    }
  ]

  return (
    <div>
      {/* Header */}
      <header>
        <div className="header-container">
          <div className="header-brand">
            <div className="header-logo">PF</div>
            <div>
              <h1 className="header-title">PMM AI Healthcare Recruiting</h1>
              <p className="header-subtitle">Live System v2</p>
            </div>
          </div>
          <button 
            onClick={() => alert(`Platform Analytics:\n\nTotal Active Searches: ${stats.leads}\nAverage Lead Score: ${stats.score}\nAutomated Emails Sent: ${stats.emails}\n\nLead Scoring System:\n• Page visit: +1 point\n• Form submission: +15 points\n• Email interaction: +5 points\n• Return visits: +3 points\n\nEmail Automation:\n• Welcome sequence triggered on signup\n• Follow-up based on engagement\n• Persona-specific messaging\n• Automated lead handoff at score thresholds`)}
            className="analytics-btn"
          >
            Platform Analytics
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <h1 className="hero-title">
            Instantly find<br />
            top talent.
          </h1>
          <p className="hero-subtitle">
            A simple, one-time purchase to connect with top talent. Perfect for when you just need to make that one great hire.
          </p>

          <button className="btn-primary">Purchase Essentials</button>
          <p className="hero-note">99% one-time</p>

          {/* Live Stats */}
          <div className="stats">
            <div className="stat-card">
              <div className="stat-number blue">{stats.leads}</div>
              <div className="stat-label">Active Searches</div>
            </div>
            <div className="stat-card">
              <div className="stat-number green">{stats.score}</div>
              <div className="stat-label">Avg Lead Score</div>
            </div>
            <div className="stat-card">
              <div className="stat-number purple">{stats.emails}</div>
              <div className="stat-label">Automated Emails</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-container">
          <div className="features-grid">
            {/* Left Column */}
            <div>
              <h2 className="features-title">
                50 CANDIDATES<br />
                Reach the <em>right talent</em>
              </h2>
              <p className="features-description">
                Reach out directly to high-quality candidates and start meaningful conversations
              </p>
            </div>

            {/* Center Column - Candidate Profile Preview */}
            <div>
              <div className="candidate-wrapper">
                <div className="candidate-card">
                  <div className="candidate-header">
                    <div className="candidate-avatar">LZ</div>
                    <div className="candidate-info">
                      <h3 className="candidate-name">Lily Zhang</h3>
                      <p className="candidate-role">Dentist at Starbucks</p>
                    </div>
                    <div className="candidate-buttons">
                      <button className="btn-small btn-blue">Email</button>
                      <button className="btn-small btn-outline">Call</button>
                    </div>
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <h4 style={{ fontSize: '12px', fontWeight: '600', marginBottom: '4px' }}>Bio</h4>
                    <p style={{ fontSize: '12px', color: '#374151' }}>
                      I am a dentist at Starbucks crafting drinks and creating great customer experiences every day. I bring a fun-paced environment, balancing...
                    </p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '12px', fontWeight: '600', marginBottom: '8px' }}>Work Experience</h4>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <div style={{ width: '24px', height: '24px', background: '#dcfce7', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span style={{ fontSize: '12px' }}>🏢</span>
                      </div>
                      <div>
                        <p style={{ fontSize: '12px', fontWeight: '500' }}>Dentist at Starbucks</p>
                        <p style={{ fontSize: '12px', color: '#6b7280' }}>Sep 2020 - Jan 2024 (3 years)</p>
                        <p style={{ fontSize: '12px', color: '#6b7280' }}>San Francisco, CA, Brentwood, Antioch, Oakland, I have three-plus years of experience...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Messaging Interface */}
            <div>
              <div style={{ background: '#faf5ff', borderRadius: '16px', padding: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { status: 'Interested Reply', color: 'green' },
                    { status: 'Message Sent', color: 'blue' },
                    { status: 'Message', color: 'blue', hasButton: true },
                    { status: 'Message', color: 'blue', hasButton: true }
                  ].map((item, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '32px', height: '32px', background: '#d1d5db', borderRadius: '50%' }}></div>
                      <div style={{ flex: 1, background: 'white', borderRadius: '8px', padding: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span style={{ fontSize: '14px', color: '#6b7280' }}>{item.status}</span>
                          {item.hasButton ? (
                            <span style={{ background: '#2563eb', color: 'white', fontSize: '12px', padding: '2px 8px', borderRadius: '4px' }}>Message</span>
                          ) : (
                            <span style={{ width: '8px', height: '8px', background: item.color === 'green' ? '#10b981' : '#2563eb', borderRadius: '50%' }}></span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Persona Grid */}
      <section className="personas">
        <div className="personas-container">
          <h2 className="personas-title">
            6 Healthcare Recruiting Personas
          </h2>
          <p className="personas-subtitle">
            Specialized landing pages and automated workflows for different healthcare staffing needs
          </p>
          
          <div className="personas-grid">
            {personas.map((persona, index) => (
              <Link key={index} href={persona.href} className="persona-card">
                <div 
                  className="persona-icon"
                  style={{ backgroundColor: persona.color + '20' }}
                >
                  {persona.icon}
                </div>
                <h3 className="persona-card-title">
                  {persona.title}
                </h3>
                <p className="persona-card-description">
                  {persona.description}
                </p>
                <div className="persona-link">
                  View Landing Page →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bottom-cta">
        <div className="bottom-cta-container">
          <h2 className="bottom-cta-title">
            Make your<br />
            next <em>great hire</em> today.
          </h2>
          <p className="bottom-cta-subtitle">
            No subscriptions, no hassle—just a simple way to connect with top talent. Get started now and find the right candidate.
          </p>
          <button className="btn-white">Purchase Essentials</button>
          <p className="bottom-note">99% one-time</p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-container">
          <div className="footer-brand">
            <span>PAYCHEX</span>
            <span style={{ color: '#9ca3af' }}>🤝</span>
            <span>findem</span>
          </div>
          <div className="footer-links">
            <p>© 2025, Findem. All Rights Reserved.</p>
            <div>
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
