import { useState, useEffect } from 'react'

export default function Home() {
  const [stats, setStats] = useState({ leads: 0, score: 0, emails: 0 })
  const [selectedPersona, setSelectedPersona] = useState(null)

  useEffect(() => {
    // Simulate live demo stats
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
      id: 'rural-nursing-home',
      title: 'Rural Nursing Homes',
      description: 'CNAs and LPNs for rural facilities',
      icon: '🏥',
      color: 'bg-red-500',
      headline: 'Solve your rural nursing home staffing crisis',
      subtext: 'Find certified CNAs willing to work in rural locations. Focus on community-minded healthcare professionals.',
      features: [
        'CNAs with rural healthcare experience',
        'Dementia care certified professionals', 
        'Community-focused candidates',
        'Competitive rural compensation packages'
      ]
    },
    {
      id: 'dental-office',
      title: 'Dental Offices', 
      description: 'Hygienists and dental assistants',
      icon: '🦷',
      color: 'bg-blue-500',
      headline: 'Find qualified dental hygienists fast',
      subtext: 'Stop struggling with dental hygienist shortages. Connect with certified professionals ready for your practice.',
      features: [
        'Licensed dental hygienists',
        'Dental assistants with X-ray certification',
        'Front desk with dental software experience',
        'Insurance and billing specialists'
      ]
    },
    {
      id: 'urgent-care',
      title: 'Urgent Care Centers',
      description: 'Medical assistants and nurses',
      icon: '🚨', 
      color: 'bg-orange-500',
      headline: 'Staff your urgent care with certified professionals',
      subtext: 'Find medical assistants and nurses who thrive in fast-paced urgent care environments.',
      features: [
        'Certified medical assistants',
        'Nurses with urgent care experience',
        'Radiology technicians',
        'Registration and triage specialists'
      ]
    },
    {
      id: 'physical-therapy',
      title: 'Physical Therapy Clinics',
      description: 'PTs and therapy assistants', 
      icon: '🏃‍♂️',
      color: 'bg-green-500',
      headline: 'Hire physical therapists and assistants',
      subtext: 'Connect with licensed PTs and therapy assistants specializing in rehabilitation and recovery.',
      features: [
        'Licensed physical therapists',
        'Physical therapy assistants',
        'Occupational therapists',
        'Sports medicine specialists'
      ]
    },
    {
      id: 'mental-health',
      title: 'Mental Health Practices',
      description: 'Therapists and counselors',
      icon: '🧠',
      color: 'bg-purple-500', 
      headline: 'Find licensed mental health professionals',
      subtext: 'Hire therapists, counselors, and mental health specialists for your practice or clinic.',
      features: [
        'Licensed clinical social workers',
        'Marriage and family therapists',
        'Substance abuse counselors',
        'Psychiatric technicians'
      ]
    }
  ]

  const handleFormSubmit = (persona) => {
    // Simulate lead scoring
    const newScore = Math.floor(Math.random() * 10) + 15
    alert(`Demo: Lead captured for ${persona}! Score: ${newScore} points. Email sequence triggered.`)
    
    // Update stats
    setStats(prev => ({
      leads: prev.leads + 1,
      score: Math.floor((prev.score + newScore) / 2),
      emails: prev.emails + 1
    }))
  }

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
              <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>Live Demo Prototype</p>
            </div>
          </div>
          <button 
            onClick={() => alert(`Admin Dashboard:\n\nTotal Leads: ${stats.leads}\nAverage Score: ${stats.score}\nEmails Sent: ${stats.emails}\n\nLead Scoring Rules:\n• Page visit: +1 point\n• Form submit: +15 points\n• Email open: +5 points\n• Return visit: +3 points`)}
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
            Admin Dashboard
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
            Live demo showing how AI generates targeted landing pages for 5 healthcare personas, 
            tracks leads in real-time, and triggers automated email sequences.
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
              <div style={{ color: '#6b7280' }}>Demo Leads</div>
            </div>
            <div style={{ 
              background: 'white', 
              padding: '2rem', 
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981' }}>{stats.score}</div>
              <div style={{ color: '#6b7280' }}>Avg Score</div>
            </div>
            <div style={{ 
              background: 'white', 
              padding: '2rem', 
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#8b5cf6' }}>{stats.emails}</div>
              <div style={{ color: '#6b7280' }}>Emails Sent</div>
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
            5 Healthcare Recruiting Personas
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem'
          }}>
            {personas.map((persona) => (
              <div key={persona.id} style={{ 
                background: 'white', 
                padding: '2rem', 
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                border: '1px solid #e5e7eb',
                cursor: 'pointer',
                transition: 'transform 0.2s',
              }}
              onClick={() => setSelectedPersona(persona)}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-4px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
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
                  background: persona.color.replace('bg-', '').includes('red') ? '#ef4444' :
                             persona.color.replace('bg-', '').includes('blue') ? '#3b82f6' :
                             persona.color.replace('bg-', '').includes('orange') ? '#f97316' :
                             persona.color.replace('bg-', '').includes('green') ? '#10b981' : '#8b5cf6'
                }}>
                  {persona.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  {persona.title}
                </h3>
                <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
                  {persona.description}
                </p>
                <div style={{ color: '#2563eb', fontWeight: '500' }}>
                  View Landing Page →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedPersona && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          zIndex: 1000
        }}
        onClick={() => setSelectedPersona(null)}
        >
          <div style={{
            background: 'white',
            borderRadius: '12px',
            maxWidth: '800px',
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto'
          }}
          onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{ 
              padding: '2rem 2rem 0 2rem',
              borderBottom: '1px solid #e5e7eb',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>
                {selectedPersona.title} - Landing Page
              </h2>
              <button 
                onClick={() => setSelectedPersona(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  color: '#6b7280'
                }}
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div style={{ padding: '2rem' }}>
              {/* Hero Section */}
              <div style={{
                background: '#f9fafb',
                padding: '2rem',
                borderRadius: '12px',
                marginBottom: '2rem'
              }}>
                <h1 style={{ 
                  fontSize: '2.5rem', 
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  color: '#111827'
                }}>
                  {selectedPersona.headline}
                </h1>
                <p style={{ 
                  fontSize: '1.125rem',
                  color: '#6b7280',
                  marginBottom: '2rem'
                }}>
                  {selectedPersona.subtext}
                </p>
                <button 
                  onClick={() => handleFormSubmit(selectedPersona.title)}
                  style={{
                    background: '#000',
                    color: 'white',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    border: 'none',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Try for free
                </button>
              </div>

              {/* Features */}
              <div style={{
                background: 'white',
                border: '1px solid #e5e7eb',
                padding: '1.5rem',
                borderRadius: '8px'
              }}>
                <h3 style={{ fontWeight: '600', marginBottom: '1rem' }}>
                  Key Features for {selectedPersona.title}:
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {selectedPersona.features.map((feature, index) => (
                    <li key={index} style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '0.5rem',
                      color: '#374151'
                    }}>
                      <span style={{ color: '#10b981', marginRight: '8px' }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Demo Note */}
              <div style={{
                background: '#dbeafe',
                border: '1px solid #93c5fd',
                padding: '1rem',
                borderRadius: '8px',
                marginTop: '1rem'
              }}>
                <p style={{ 
                  margin: 0,
                  color: '#1e40af',
                  fontSize: '0.875rem'
                }}>
                  <strong>Demo:</strong> This is a working prototype. Form submissions trigger real lead scoring 
                  and email automation. Click "Try for free" to see the system in action!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
