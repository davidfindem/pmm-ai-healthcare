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
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="border-b border-gray-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">PF</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">PMM AI Healthcare Recruiting</h1>
              <p className="text-sm text-gray-500">Live System v2</p>
            </div>
          </div>
          <button 
            onClick={() => alert(`Platform Analytics:\n\nTotal Active Searches: ${stats.leads}\nAverage Lead Score: ${stats.score}\nAutomated Emails Sent: ${stats.emails}\n\nLead Scoring System:\n• Page visit: +1 point\n• Form submission: +15 points\n• Email interaction: +5 points\n• Return visits: +3 points\n\nEmail Automation:\n• Welcome sequence triggered on signup\n• Follow-up based on engagement\n• Persona-specific messaging\n• Automated lead handoff at score thresholds`)}
            className="bg-gray-900 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Platform Analytics
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Instantly find<br />
            <span className="text-black">top talent.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            A simple, one-time purchase to connect with top talent. Perfect for when you just need to make that one great hire.
          </p>

          <button className="bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors mb-4">
            Purchase Essentials
          </button>
          <p className="text-gray-500 text-sm">99% one-time</p>

          {/* Live Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto mt-16">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stats.leads}</div>
              <div className="text-gray-600 text-sm">Active Searches</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="text-3xl font-bold text-green-600 mb-2">{stats.score}</div>
              <div className="text-gray-600 text-sm">Avg Lead Score</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="text-3xl font-bold text-purple-600 mb-2">{stats.emails}</div>
              <div className="text-gray-600 text-sm">Automated Emails</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 items-center mb-20">
            {/* Left Column */}
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                50 CANDIDATES<br />
                Reach the <span className="italic">right talent</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Reach out directly to high-quality candidates and start meaningful conversations
              </p>
            </div>

            {/* Center Column - Candidate Profile Preview */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">LZ</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900">Lily Zhang</h3>
                      <p className="text-blue-600 text-sm font-medium">Dentist at Starbucks</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium">Email</button>
                      <button className="border border-gray-300 text-gray-700 px-3 py-1 rounded text-xs">Call</button>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-900 mb-1">Bio</h4>
                    <p className="text-xs text-gray-700">
                      I am a dentist at Starbucks crafting drinks and creating great customer experiences every day. I bring a fun-paced environment, balancing...
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-900 mb-2">Work Experience</h4>
                    <div className="flex items-start space-x-2">
                      <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600 text-xs">🏢</span>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-900">Dentist at Starbucks</p>
                        <p className="text-xs text-gray-500">Sep 2020 - Jan 2024 (3 years)</p>
                        <p className="text-xs text-gray-600">San Francisco, CA, Brentwood, Antioch, Oakland, I have three-plus years of experience...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Messaging Interface */}
            <div className="lg:col-span-1">
              <div className="bg-purple-50 rounded-2xl p-6">
                <div className="space-y-3">
                  {[
                    { status: 'Interested Reply', color: 'green' },
                    { status: 'Message Sent', color: 'blue' },
                    { status: 'Message', color: 'blue', hasButton: true },
                    { status: 'Message', color: 'blue', hasButton: true }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                      <div className="flex-1 bg-white rounded-lg p-3 shadow-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">{item.status}</span>
                          {item.hasButton ? (
                            <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">Message</span>
                          ) : (
                            <span className={`w-2 h-2 bg-${item.color}-500 rounded-full`}></span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Email Integration */}
          <div className="bg-blue-50 rounded-2xl p-12 text-center">
            <h3 className="text-sm font-bold text-gray-700 mb-2">EMAIL INTEGRATION</h3>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Keep talent <span className="italic">engaged</span>
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Engage and track candidates directly from your inbox—no need to switch platforms
            </p>
            <div className="max-w-md mx-auto space-y-3">
              <div className="bg-white rounded-lg p-4 border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-blue-600">📧</span>
                    <span className="font-medium">Sign in with Google</span>
                  </div>
                  <span>→</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-blue-600">📨</span>
                    <span className="font-medium">Sign in with Microsoft</span>
                  </div>
                  <span>→</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Persona Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            6 Healthcare Recruiting Personas
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Specialized landing pages and automated workflows for different healthcare staffing needs
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personas.map((persona, index) => (
              <Link key={index} href={persona.href} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 h-full">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-6"
                    style={{ backgroundColor: persona.color + '20' }}
                  >
                    {persona.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {persona.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {persona.description}
                  </p>
                  <div className="text-blue-600 font-medium text-sm group-hover:text-blue-700">
                    View Landing Page →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-black py-20">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-5xl font-bold mb-6">
            Make your<br />
            next <span className="italic">great hire</span> today.
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            No subscriptions, no hassle—just a simple way to connect with top talent. Get started now and find the right candidate.
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Purchase Essentials
          </button>
          <p className="text-gray-400 text-sm mt-4">99% one-time</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center space-x-8 mb-8">
            <div className="flex items-center space-x-3">
              <span className="font-bold text-2xl">PAYCHEX</span>
              <span className="text-gray-400 text-2xl">🤝</span>
              <span className="font-bold text-2xl">findem</span>
            </div>
          </div>
          <div className="text-center text-gray-500">
            <p className="mb-4">© 2025, Findem. All Rights Reserved.</p>
            <div className="flex justify-center space-x-6 text-sm">
              <a href="#" className="hover:text-gray-700 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gray-700 transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
