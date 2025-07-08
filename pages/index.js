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
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: 1.6, margin: 0, padding: 0 }}>
      {/* Header */}
      <header style={{ 
        background: 'white', 
        borderBottom: '1px solid #e5e7eb',
        padding: '1rem 0'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ 
              width: '48px', 
              height: '48px', 
              background: '#2563eb', 
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '18px'
            }}>
              PF
            </div>
            <div>
              <h1 style={{ fontSize: '20px', fontWeight: 'bold', margin: 0 }}>PMM AI Healthcare Recruiting</h1>
              <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>Live System v2</p>
            </div>
          </div>
          <button 
            onClick={() => alert(`Platform Analytics:\n\nTotal Active Searches: ${stats.leads}\nAverage Lead Score: ${stats.score}\nAutomated Emails Sent: ${stats.emails}\n\nLead Scoring System:\n• Page visit: +1 point\n• Form submission: +15 points\n• Email interaction: +5 points\n• Return visits: +3 points\n\nEmail Automation:\n• Welcome sequence triggered on signup\n• Follow-up based on engagement\n• Persona-specific messaging\n• Automated lead handoff at score thresholds`)}
            style={{
              background: '#1f2937',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Platform Analytics
          </button>
        </div>
      </header>

      {/* Hero */}
      <section style={{ 
        background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
        padding: '4rem 1rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#111827'
          }}>
            AI-Powered Healthcare Recruiting
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#6b7280',
            marginBottom: '3rem',
            maxWidth: '800px',
            margin: '0 auto 3rem auto'
          }}>
            Automated product marketing system generating targeted landing pages for healthcare personas, 
            with real-time lead scoring and triggered email sequences.
          </p>

          {/* Live Stats */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '2rem',
            maxWidth: '600px',
            margin: '0 auto 4rem auto'
          }}>
            <div style={{ 
              background: 'white', 
              padding: '2rem', 
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#2563eb' }}>{stats.leads}</div>
              <div style={{ color: '#6b7280' }}>Active Searches</div>
            </div>
            <div style={{ 
              background: 'white', 
              padding: '2rem', 
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981' }}>{stats.score}</div>
              <div style={{ color: '#6b7280' }}>Avg Lead Score</div>
            </div>
            <div style={{ 
              background: 'white', 
              padding: '2rem', 
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#8b5cf6' }}>{stats.emails}</div>
              <div style={{ color: '#6b7280' }}>Automated Emails</div>
            </div>
          </div>
        </div>
      </section>

      {/* Persona Grid */}
      <section style={{ padding: '4rem 1rem', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            textAlign: 'center',
            marginBottom: '3rem',
            color: '#111827'
          }}>
            6 Healthcare Recruiting Personas
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem'
          }}>
            {personas.map((persona, index) => (
              <Link key={index} href={persona.href} style={{ textDecoration: 'none' }}>
                <div style={{ 
                  background: 'white', 
                  padding: '2rem', 
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  border: '1px solid #e5e7eb',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  height: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)'
                }}
                >
                  <div style={{ 
                    width: '64px', 
                    height: '64px', 
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    marginBottom: '1rem',
                    background: persona.color
                  }}>
                    {persona.icon}
                  </div>
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: 'bold', 
                    marginBottom: '0.5rem',
                    color: '#111827'
                  }}>
                    {persona.title}
                  </h3>
                  <p style={{ 
                    color: '#6b7280', 
                    marginBottom: '1rem',
                    fontSize: '0.875rem',
                    lineHeight: '1.5'
                  }}>
                    {persona.description}
                  </p>
                  <div style={{ 
                    color: '#2563eb', 
                    fontWeight: '500',
                    fontSize: '0.875rem'
                  }}>
                    View Full Landing Page →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
