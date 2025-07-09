import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function ExperimentDashboard() {
  const [stats, setStats] = useState({ 
    totalVisits: 0, 
    totalEmails: 0, 
    newAccounts: 0,
    conversionRate: 0 
  })

  const [personaStats, setPersonaStats] = useState([])

  useEffect(() => {
    const updateStats = () => {
      const newStats = {
        totalVisits: Math.floor(Math.random() * 50) + 450,
        totalEmails: Math.floor(Math.random() * 20) + 78,
        newAccounts: Math.floor(Math.random() * 10) + 23,
        conversionRate: (Math.random() * 2 + 4.5).toFixed(1)
      }
      setStats(newStats)

      // Generate persona-specific stats
      const personas = [
        { name: 'Dental Office', visits: Math.floor(Math.random() * 20) + 80, emails: Math.floor(Math.random() * 5) + 15, accounts: Math.floor(Math.random() * 3) + 4, color: '#3b82f6' },
        { name: 'Urgent Care', visits: Math.floor(Math.random() * 20) + 75, emails: Math.floor(Math.random() * 5) + 12, accounts: Math.floor(Math.random() * 3) + 3, color: '#f97316' },
        { name: 'Mental Health', visits: Math.floor(Math.random() * 20) + 65, emails: Math.floor(Math.random() * 5) + 10, accounts: Math.floor(Math.random() * 3) + 5, color: '#8b5cf6' },
        { name: 'Physical Therapy', visits: Math.floor(Math.random() * 20) + 70, emails: Math.floor(Math.random() * 5) + 8, accounts: Math.floor(Math.random() * 3) + 2, color: '#10b981' },
        { name: 'Rural Nursing', visits: Math.floor(Math.random() * 20) + 60, emails: Math.floor(Math.random() * 5) + 9, accounts: Math.floor(Math.random() * 3) + 4, color: '#ef4444' },
        { name: 'Senior Living', visits: Math.floor(Math.random() * 20) + 55, emails: Math.floor(Math.random() * 5) + 7, accounts: Math.floor(Math.random() * 3) + 2, color: '#06b6d4' }
      ]
      setPersonaStats(personas)
    }
    updateStats()
    const interval = setInterval(updateStats, 5000)
    return () => clearInterval(interval)
  }, [])

  const scoringRules = [
    { action: 'Page Visit', points: 1, description: 'Basic engagement tracking' },
    { action: 'Form Interaction', points: 3, description: 'Started filling out contact form' },
    { action: 'Video Play', points: 5, description: 'Watched candidate profile video' },
    { action: 'Form Submit', points: 15, description: 'Completed contact form' },
    { action: 'Return Visit', points: 8, description: 'Came back within 7 days' },
    { action: 'Multiple Pages', points: 12, description: 'Viewed 3+ persona pages' }
  ]

  const emailSequence = [
    { 
      id: 1, 
      trigger: 'Form Submit (15+ points)', 
      subject: 'Welcome - Your Dental Staff Search Starts Here',
      description: 'Immediate welcome email with Kim Tran profile',
      delay: '0 minutes'
    },
    { 
      id: 2, 
      trigger: 'No Response (24h)', 
      subject: 'Quick Question About Your Dental Hiring Needs',
      description: 'Follow-up with specific dental challenges',
      delay: '24 hours'
    },
    { 
      id: 3, 
      trigger: 'Email Open + No Click', 
      subject: '3 More Dental Hygienists Ready to Interview',
      description: 'Social proof with multiple candidate profiles',
      delay: '3 days'
    },
    { 
      id: 4, 
      trigger: 'Still Engaged (1 week)', 
      subject: 'Free 15-min Consultation - Dental Staffing Strategy',
      description: 'Direct calendar booking for sales call',
      delay: '7 days'
    }
  ]

  const personas = [
    { title: 'Dental Offices', href: '/dental-office', color: '#3b82f6', icon: '🦷' },
    { title: 'Urgent Care Centers', href: '/urgent-care', color: '#f97316', icon: '🚨' },
    { title: 'Mental Health Practices', href: '/mental-health', color: '#8b5cf6', icon: '🧠' },
    { title: 'Physical Therapy Clinics', href: '/physical-therapy', color: '#10b981', icon: '🏃‍♂️' },
    { title: 'Rural Nursing Homes', href: '/rural-nursing-home', color: '#ef4444', icon: '🏥' },
    { title: 'Senior Living Communities', href: '/senior-living', color: '#06b6d4', icon: '🏠' }
  ]

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ background: 'white', borderBottom: '1px solid #e2e8f0', padding: '1rem 2rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', background: '#2563eb', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
              PF
            </div>
            <div>
              <h1 style={{ fontSize: '20px', fontWeight: 'bold', margin: 0, color: '#1e293b' }}>Healthcare Recruiting Experiment Dashboard</h1>
              <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>6-Persona Landing Page Test • Live Results</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ background: '#10b981', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '600' }}>
              🟢 LIVE
            </span>
            <button 
              onClick={() => window.open('/scoreboard', '_blank')}
              style={{ background: '#475569', color: 'white', padding: '8px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: '500' }}
            >
              View Raw Data
            </button>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem' }}>
        
        {/* Key Metrics */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '1rem', color: '#1e293b' }}>Experiment Performance</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2563eb', marginBottom: '0.5rem' }}>{stats.totalVisits}</div>
              <div style={{ fontSize: '14px', color: '#64748b', fontWeight: '500' }}>Total Visits</div>
              <div style={{ fontSize: '12px', color: '#10b981', marginTop: '4px' }}>↗ +12% vs last week</div>
            </div>
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#f59e0b', marginBottom: '0.5rem' }}>{stats.totalEmails}</div>
              <div style={{ fontSize: '14px', color: '#64748b', fontWeight: '500' }}>Emails Sent</div>
              <div style={{ fontSize: '12px', color: '#10b981', marginTop: '4px' }}>Automated sequences</div>
            </div>
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#10b981', marginBottom: '0.5rem' }}>{stats.newAccounts}</div>
              <div style={{ fontSize: '14px', color: '#64748b', fontWeight: '500' }}>New Accounts</div>
              <div style={{ fontSize: '12px', color: '#10b981', marginTop: '4px' }}>Qualified leads</div>
            </div>
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#8b5cf6', marginBottom: '0.5rem' }}>{stats.conversionRate}%</div>
              <div style={{ fontSize: '14px', color: '#64748b', fontWeight: '500' }}>Conversion Rate</div>
              <div style={{ fontSize: '12px', color: '#10b981', marginTop: '4px' }}>Visit → Lead</div>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
          
          {/* Persona Performance */}
          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '1rem', color: '#1e293b' }}>Performance by Persona</h3>
            <div style={{ display: 'grid', gap: '12px' }}>
              {personaStats.map((persona, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px', background: '#f8fafc', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: persona.color }}></div>
                    <span style={{ fontWeight: '500', fontSize: '14px' }}>{persona.name}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '16px', fontSize: '14px', color: '#64748b' }}>
                    <span>{persona.visits} visits</span>
                    <span>{persona.emails} emails</span>
                    <span style={{ color: '#10b981', fontWeight: '600' }}>{persona.accounts} accounts</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scoring System */}
          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '1rem', color: '#1e293b' }}>Lead Scoring Rules</h3>
            <div style={{ display: 'grid', gap: '8px' }}>
              {scoringRules.map((rule, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px', borderRadius: '6px', background: '#f8fafc' }}>
                  <div>
                    <div style={{ fontWeight: '500', fontSize: '14px', color: '#1e293b' }}>{rule.action}</div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>{rule.description}</div>
                  </div>
                  <div style={{ background: '#2563eb', color: 'white', padding: '4px 8px', borderRadius: '12px', fontSize: '12px', fontWeight: '600' }}>
                    +{rule.points}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Email Sequence Demo */}
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '1rem', color: '#1e293b' }}>Email Automation Demo (Dental Office Persona)</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            {emailSequence.map((email, index) => (
              <Link key={email.id} href={`/email/dental-${email.id}`} style={{ textDecoration: 'none' }}>
                <div style={{ border: '2px solid #e2e8f0', borderRadius: '8px', padding: '1rem', cursor: 'pointer', transition: 'all 0.2s', background: 'white' }}
                     onMouseEnter={(e) => {
                       e.currentTarget.style.borderColor = '#3b82f6'
                       e.currentTarget.style.transform = 'translateY(-2px)'
                       e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'
                     }}
                     onMouseLeave={(e) => {
                       e.currentTarget.style.borderColor = '#e2e8f0'
                       e.currentTarget.style.transform = 'translateY(0)'
                       e.currentTarget.style.boxShadow = 'none'
                     }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <div style={{ background: '#3b82f6', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' }}>
                      {email.id}
                    </div>
                    <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '500' }}>{email.delay}</span>
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '4px' }}>{email.subject}</div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '8px' }}>{email.description}</div>
                  <div style={{ fontSize: '11px', color: '#3b82f6', fontWeight: '500' }}>Trigger: {email.trigger}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Industry Landing Pages */}
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '1rem', color: '#1e293b' }}>6 Industry Landing Pages</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {personas.map((persona, index) => (
              <Link key={index} href={persona.href} style={{ textDecoration: 'none' }}>
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem', cursor: 'pointer', transition: 'all 0.2s', background: '#fafafa' }}
                     onMouseEnter={(e) => {
                       e.currentTarget.style.borderColor = persona.color
                       e.currentTarget.style.background = 'white'
                       e.currentTarget.style.transform = 'translateY(-2px)'
                     }}
                     onMouseLeave={(e) => {
                       e.currentTarget.style.borderColor = '#e2e8f0'
                       e.currentTarget.style.background = '#fafafa'
                       e.currentTarget.style.transform = 'translateY(0)'
                     }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <div style={{ fontSize: '1.5rem' }}>{persona.icon}</div>
                    <div style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b' }}>{persona.title}</div>
                  </div>
                  <div style={{ fontSize: '12px', color: '#3b82f6', fontWeight: '500' }}>View Landing Page →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
