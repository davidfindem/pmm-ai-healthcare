import React from 'react';
import Link from 'next/link';

export default function LandingPageTemplate({ persona }) {
  const {
    headline,
    subtext,
    selectPlaceholder,
    selectOptions,
    ctaText,
    formNote,
    exampleCandidate,
    pricingTitle,
    pricing,
  } = persona;

  return (
    <div style={{ minHeight: '100vh', background: 'white', fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Header */}
      <header style={{ borderBottom: '1px solid #e5e7eb', padding: '1rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '32px', height: '32px', background: '#3b82f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '16px' }}>
              PF
            </div>
            <span style={{ fontSize: '18px', fontWeight: '600', color: '#1e293b' }}>Findem</span>
          </div>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem', fontSize: '14px' }}>
            <a href="#" style={{ color: '#64748b', textDecoration: 'none', fontWeight: '500' }}>Features</a>
            <a href="#" style={{ color: '#64748b', textDecoration: 'none', fontWeight: '500' }}>Pricing</a>
            <a href="#" style={{ color: '#64748b', textDecoration: 'none', fontWeight: '500' }}>FAQ</a>
            <a href="#" style={{ color: '#64748b', textDecoration: 'none', fontWeight: '500' }}>Log in</a>
            <button style={{ background: '#000', color: 'white', padding: '8px 16px', borderRadius: '6px', border: 'none', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>
              Sign up
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 
            style={{ fontSize: '4rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '1rem', lineHeight: '1.1' }}
            dangerouslySetInnerHTML={{ __html: headline.replace('<em>', '<span style="color: #000;">').replace('</em>', '</span>') }}
          />
          <p style={{ fontSize: '1.25rem', color: '#64748b', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto', lineHeight: '1.5' }}>
            {subtext}
          </p>
          <button style={{ background: '#000', color: 'white', padding: '12px 32px', borderRadius: '8px', fontSize: '16px', fontWeight: '600', border: 'none', cursor: 'pointer', marginBottom: '0.5rem' }}>
            {ctaText}
          </button>
          <p style={{ fontSize: '14px', color: '#64748b' }}>99% one-time</p>
        </div>

        {/* Two Column Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '4rem', alignItems: 'start', marginBottom: '4rem' }}>
          
          {/* Left Column - Candidate Profile */}
          <div style={{ background: 'linear-gradient(135deg, #dbeafe 0%, #c7d2fe 100%)', borderRadius: '16px', padding: '2rem' }}>
            <div style={{ background: 'white', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              
              {/* Candidate Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ position: 'relative' }}>
                  <div style={{ width: '64px', height: '64px', background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '1.5rem' }}>
                    {exampleCandidate.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div style={{ position: 'absolute', bottom: '-2px', right: '-2px', width: '20px', height: '20px', background: '#10b981', borderRadius: '50%', border: '2px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: 'white', fontSize: '10px' }}>✓</span>
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e293b', margin: '0 0 4px 0' }}>{exampleCandidate.name}</h3>
                  <p style={{ color: '#3b82f6', fontWeight: '600', margin: '0 0 4px 0', fontSize: '14px' }}>{exampleCandidate.role}</p>
                  <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>{exampleCandidate.location}</p>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button style={{ background: '#3b82f6', color: 'white', padding: '8px 16px', borderRadius: '6px', fontSize: '14px', fontWeight: '500', border: 'none', cursor: 'pointer' }}>
                    Email
                  </button>
                  <button style={{ border: '1px solid #d1d5db', color: '#374151', background: 'white', padding: '8px 16px', borderRadius: '6px', fontSize: '14px', fontWeight: '500', cursor: 'pointer' }}>
                    Call
                  </button>
                </div>
              </div>

              {/* Bio Section */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>Bio</h4>
                <p style={{ color: '#374151', fontSize: '14px', lineHeight: '1.5' }}>{exampleCandidate.bio}</p>
              </div>

              {/* Work Experience */}
              <div>
                <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '12px' }}>Work Experience</h4>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ width: '32px', height: '32px', background: '#10b981', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ color: 'white', fontSize: '16px' }}>🏥</span>
                  </div>
                  <div>
                    <p style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', margin: '0 0 4px 0' }}>{exampleCandidate.role}</p>
                    <p style={{ fontSize: '13px', color: '#64748b', margin: '0 0 4px 0' }}>Previous Healthcare Facility • 2019 - 2024 (5 years)</p>
                    <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>Specialized in patient care with exceptional performance metrics and team collaboration.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '4px' }}>50 CANDIDATES</p>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>
                Reach the <span style={{ fontStyle: 'italic' }}>right talent</span>
              </h3>
              <p style={{ color: '#64748b', fontSize: '14px' }}>
                Reach out directly to high-quality candidates and start meaningful conversations
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Contact Form */}
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <input 
                  style={{ border: '1px solid #d1d5db', borderRadius: '6px', padding: '12px', fontSize: '14px', outline: 'none', background: 'white' }} 
                  placeholder="First Name" 
                />
                <input 
                  style={{ border: '1px solid #d1d5db', borderRadius: '6px', padding: '12px', fontSize: '14px', outline: 'none', background: 'white' }} 
                  placeholder="Last Name" 
                />
              </div>
              <input 
                style={{ border: '1px solid #d1d5db', borderRadius: '6px', padding: '12px', fontSize: '14px', outline: 'none', background: 'white' }} 
                placeholder="Email" 
              />
              <input 
                style={{ border: '1px solid #d1d5db', borderRadius: '6px', padding: '12px', fontSize: '14px', outline: 'none', background: 'white' }} 
                placeholder="Phone" 
              />
              <input 
                style={{ border: '1px solid #d1d5db', borderRadius: '6px', padding: '12px', fontSize: '14px', outline: 'none', background: 'white' }} 
                placeholder={persona.companyPlaceholder} 
              />
              <select style={{ border: '1px solid #d1d5db', borderRadius: '6px', padding: '12px', fontSize: '14px', outline: 'none', color: '#374151', background: 'white' }}>
                <option>{selectPlaceholder}</option>
                {selectOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <button
                type="submit"
                style={{ background: '#3b82f6', color: 'white', padding: '14px', borderRadius: '6px', fontSize: '16px', fontWeight: '600', border: 'none', cursor: 'pointer' }}
              >
                {ctaText}
              </button>
            </form>

            {/* Message Interface */}
            <div style={{ background: '#faf5ff', borderRadius: '12px', padding: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '32px', height: '32px', background: '#d1d5db', borderRadius: '50%' }}></div>
                  <div style={{ flex: 1, background: 'white', borderRadius: '8px', padding: '10px 12px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '14px', color: '#64748b' }}>Interested Reply</span>
                      <div style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '32px', height: '32px', background: '#d1d5db', borderRadius: '50%' }}></div>
                  <div style={{ flex: 1, background: 'white', borderRadius: '8px', padding: '10px 12px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '14px', color: '#64748b' }}>Message Sent</span>
                      <div style={{ width: '8px', height: '8px', background: '#3b82f6', borderRadius: '50%' }}></div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '32px', height: '32px', background: '#d1d5db', borderRadius: '50%' }}></div>
                  <div style={{ flex: 1, background: 'white', borderRadius: '8px', padding: '10px 12px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '14px', color: '#64748b' }}>Message</span>
                      <span style={{ background: '#3b82f6', color: 'white', fontSize: '11px', padding: '3px 8px', borderRadius: '12px', fontWeight: '500' }}>Message</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '32px', height: '32px', background: '#d1d5db', borderRadius: '50%' }}></div>
                  <div style={{ flex: 1, background: 'white', borderRadius: '8px', padding: '10px 12px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '14px', color: '#64748b' }}>Message</span>
                      <span style={{ background: '#3b82f6', color: 'white', fontSize: '11px', padding: '3px 8px', borderRadius: '12px', fontWeight: '500' }}>Message</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Integration */}
            <div style={{ background: '#dbeafe', borderRadius: '12px', padding: '1.5rem' }}>
              <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#1e293b', marginBottom: '8px', letterSpacing: '0.5px' }}>EMAIL INTEGRATION</h4>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>
                Keep talent <span style={{ fontStyle: 'italic' }}>engaged</span>
              </h3>
              <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '1rem', lineHeight: '1.4' }}>
                Engage and track candidates directly from your inbox—no need to switch platforms
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ background: 'white', borderRadius: '8px', padding: '12px', border: '1px solid #cbd5e1', cursor: 'pointer', transition: 'all 0.2s' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '16px' }}>📧</span>
                      <span style={{ fontSize: '14px', fontWeight: '500', color: '#1e293b' }}>Sign in with Google</span>
                    </div>
                    <span style={{ color: '#64748b' }}>→</span>
                  </div>
                </div>
                <div style={{ background: 'white', borderRadius: '8px', padding: '12px', border: '1px solid #cbd5e1', cursor: 'pointer', transition: 'all 0.2s' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '16px' }}>📨</span>
                      <span style={{ fontSize: '14px', fontWeight: '500', color: '#1e293b' }}>Sign in with Microsoft</span>
                    </div>
                    <span style={{ color: '#64748b' }}>→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <section style={{ background: '#000', borderRadius: '16px', padding: '4rem 2rem', textAlign: 'center', color: 'white' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', lineHeight: '1.1' }}>
            Make your<br />
            next <span style={{ fontStyle: 'italic' }}>great hire</span> today.
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#d1d5db', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto', lineHeight: '1.5' }}>
            No subscriptions, no hassle—just a simple way to connect with top talent. Get started now and find the right candidate.
          </p>
          <button style={{ background: 'white', color: '#000', padding: '12px 32px', borderRadius: '8px', fontSize: '16px', fontWeight: '600', border: 'none', cursor: 'pointer', marginBottom: '0.5rem' }}>
            {ctaText}
          </button>
          <p style={{ color: '#9ca3af', fontSize: '14px' }}>99% one-time</p>
        </section>

        {/* Back to Dashboard Link */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/" style={{ color: '#3b82f6', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>
            ← Back to Experiment Dashboard
          </Link>
        </div>

      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #e5e7eb', padding: '2rem 0', marginTop: '3rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '1rem' }}>
            <span style={{ fontWeight: 'bold', fontSize: '18px' }}>PAYCHEX</span>
            <span style={{ color: '#9ca3af', fontSize: '18px' }}>🤝</span>
            <span style={{ fontWeight: 'bold', fontSize: '18px' }}>findem</span>
          </div>
          <div style={{ color: '#64748b', fontSize: '14px' }}>
            <p style={{ marginBottom: '0.5rem' }}>© 2025, Findem. All Rights Reserved.</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
              <a href="#" style={{ color: '#64748b', textDecoration: 'none' }}>Terms of Service</a>
              <a href="#" style={{ color: '#64748b', textDecoration: 'none' }}>Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
