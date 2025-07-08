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
              paddin
