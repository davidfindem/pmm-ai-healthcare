import React from 'react';

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
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '32px', height: '32px', background: '#2563eb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '14px' }}>
              PF
            </div>
            <span style={{ fontSize: '20px', fontWeight: '600', color: '#1e293b' }}>Paychex Findem</span>
          </div>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem', fontSize: '14px' }}>
            <a href="#" style={{ color: '#64748b', textDecoration: 'none' }}>Features</a>
            <a href="#" style={{ color: '#64748b', textDecoration: 'none' }}>Pricing</a>
            <a href="#" style={{ color: '#64748b', textDecoration: 'none' }}>FAQ</a>
            <a href="#" style={{ color: '#64748b', textDecoration: 'none' }}>Log in</a>
            <button style={{ background: '#000', color: 'white', padding: '8px 16px', borderRadius: '6px', border: 'none', fontSize: '14px', fontWeight: '500', cursor: 'pointer' }}>
              Sign up
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 
            style={{ fontSize: '3.75rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '1.5rem', lineHeight: '1.1' }}
            dangerouslySetInnerHTML={{ __html: headline.replace('<em>', '<span style="color: #000;">').replace('</em>', '</span>') }}
          />
          <p style={{ fontSize: '1.25rem', color: '#64748b', marginBottom: '2rem', maxWidth: '640px', margin: '0 auto 2rem auto', lineHeight: '1.6' }}>
            {subtext}
          </p>
          <button style={{ background: '#000', color: 'white', padding: '1rem 2rem', borderRadius: '8px', fontSize: '18px', fontWeight: '600', border: 'none', cursor: 'pointer', marginBottom: '0.75rem' }}>
            {ctaText}
          </button>
          <p style={{ fontSize: '14px', color: '#64748b' }}>{formNote}</p>
        </div>

        {/* Two Column Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start', marginBottom: '6rem' }}>
          {/* Left Column - Candidate Profile */}
          <div style={{ background: 'linear-gradient(135deg, #dbeafe 0%, #c7d2fe 100%)', borderRadius: '16px', padding: '2rem' }}>
            <div style={{ background: 'white', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              {/* Candidate Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ position: 'relative' }}>
                  <div style={{ width: '64px', height: '64px', background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '1.5rem' }}>
                    {exampleCandidate.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div style={{ position: 'absolute', bottom: '-2px', right: '-2px', width: '24px', height: '24px', background: '#10b981', borderRadius: '50%', border: '2px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: 'white', fontSize: '12px' }}>✓</span>
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e293b', margin: '0 0 4px 0' }}>{exampleCandidate.name}</h3>
                  <p style={{ color: '#2563eb', fontWeight: '500', margin: '0 0 4px 0' }}>{exampleCandidate.role}</p>
                  <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>{exampleCandidate.location}</p>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button style={{ background: '#2563eb', color: 'white', padding: '8px 16px', borderRadius: '8px', fontSize: '14px', fontWeight: '500', border: 'none', cursor: 'pointer' }}>
                    Email
                  </button>
                  <button style={{ border: '1px solid #d1d5db', color: '#374151', background: 'white', padding: '8px 16px', borderRadius: '8px', fontSize: '14px', fontWeight: '500', cursor: 'pointer' }}>
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
                  <div style={{ width: '32px', height: '32px', background: '#dcfce7', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ color: '#16a34a', fontSize: '14px' }}>🏥</span>
                  </div>
                  <div>
                    <p style={{ fontSize: '14px', fontWeight: '500', color: '#1e293b', margin: '0 0 4px 0' }}>{exampleCandidate.role}</p>
                    <p style={{ fontSize: '12px', color: '#64748b', margin: '0 0 4px 0' }}>Previous Healthcare Facility • 2019 - 2024</p>
                    <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>Specialized in patient care with exceptional performance metrics and team collaboration.</p>
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
                  style={{ border: '1px solid #d1d5db', borderRadius: '8px', padding: '12px 16px', fontSize: '14px', outline: 'none' }} 
                  placeholder="First Name" 
                />
                <input 
                  style={{ border: '1px solid #d1d5db', borderRadius: '8px', padding: '12px 16px', fontSize: '14px', outline: 'none' }} 
                  placeholder="Last Name" 
                />
              </div>
              <input 
                style={{ border: '1px solid #d1d5db', borderRadius: '8px', padding: '12px 16px', fontSize: '14px', outline: 'none' }} 
                placeholder="Email" 
              />
              <input 
                style={{ border: '1px solid #d1d5db', borderRadius: '8px', padding: '12px 16px', fontSize: '14px', outline: 'none' }} 
                placeholder="Phone" 
              />
              <input 
                style={{ border: '1px solid #d1d5db', borderRadius: '8px', padding: '12px 16px', fontSize: '14px', outline: 'none' }} 
                placeholder={persona.companyPlaceholder} 
              />
              <select style={{ border: '1px solid #d1d5db', borderRadius: '8px', padding: '12px 16px', fontSize: '14px', outline: 'none', color: '#374151' }}>
                <option>{selectPlaceholder}</option>
                {selectOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <button
                type="submit"
                style={{ background: '#2563eb', color: 'white', padding: '12px', borderRadius: '8px', fontSize: '16px', fontWeight: '600', border: 'none', cursor: 'pointer' }}
              >
                {ctaText}
              </button>
            </form>

            {/* Message Interface Mockup */}
            <div style={{ background: '#faf5ff', borderRadius: '12px', padding: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { status: 'Interested Reply', color: '#10b981' },
                  { status: 'Message Sent', color: '#2563eb' },
                  { status: 'Message', color: '#2563eb', hasButton: true },
                  { status: 'Message', color: '#2563eb', hasButton: true }
                ].map((item, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '32px', height: '32px', background: '#d1d5db', borderRadius: '50%' }}></div>
                    <div style={{ flex: 1, background: 'white', borderRadius: '8px', padding: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '14px', color: '#64748b' }}>{item.status}</span>
                        {item.hasButton ? (
                          <span style={{ background: '#2563eb', color: 'white', fontSize: '12px', padding: '4px 8px', borderRadius: '4px' }}>Message</span>
                        ) : (
                          <span style={{ width: '8px', height: '8px', background: item.color, borderRadius: '50%' }}></span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Integration Section */}
            <div style={{ background: '#eff6ff', borderRadius: '12px', padding: '1.5rem' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#1e293b', marginBottom: '12px' }}>EMAIL INTEGRATION</h4>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1e293b', marginBottom: '12px' }}>
                Keep talent <span style={{ fontStyle: 'italic' }}>engaged</span>
              </h3>
              <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '1rem' }}>
                Engage and track candidates directly from your inbox—no need to switch platforms
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ background: 'white', borderRadius: '8px', padding: '12px', border: '1px solid #d1d5db', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ color: '#2563eb' }}>📧</span>
                    <span style={{ fontSize: '14px', fontWeight: '500' }}>Sign in with Google</span>
                    <span style={{ marginLeft: 'auto' }}>→</span>
                  </div>
                </div>
                <div style={{ background: 'white', borderRadius: '8px', padding: '12px', border: '1px solid #d1d5db', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ color: '#2563eb' }}>📨</span>
                    <span style={{ fontSize: '14px', fontWeight: '500' }}>Sign in with Microsoft</span>
                    <span style={{ marginLeft: 'auto' }}>→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <section style={{ marginTop: '6rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', color: '#1e293b', marginBottom: '3rem' }}>{pricingTitle}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', maxWidth: '1024px', margin: '0 auto' }}>
            {pricing.map((tier) => (
              <div
                key={tier.title}
                style={{ border: '1px solid #d1d5db', borderRadius: '16px', padding: '2rem', background: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}
              >
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '12px', color: '#1e293b' }}>{tier.title}</h3>
                <p style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#2563eb', marginBottom: '8px' }}>{tier.price}</p>
                <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>{tier.description}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {tier.features.map((feature, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                      <span style={{ width: '20px', height: '20px', background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span style={{ color: '#16a34a', fontSize: '12px' }}>✓</span>
                      </span>
                      <span style={{ fontSize: '14px' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section style={{ marginTop: '6rem', background: '#000', borderRadius: '16px', padding: '3rem', textAlign: 'center', color: 'white' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Make your next <span style={{ fontStyle: 'italic' }}>great hire</span> today.
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#d1d5db', marginBottom: '2rem', maxWidth: '640px', margin: '0 auto 2rem auto' }}>
            No subscriptions, no hassle—just a simple way to connect with top talent. Get started now and find the right candidate.
          </p>
          <button style={{ background: 'white', color: '#000', padding: '1rem 2rem', borderRadius: '8px', fontSize: '18px', fontWeight: '600', border: 'none', cursor: 'pointer', marginBottom: '1rem' }}>
            {ctaText}
          </button>
          <p style={{ color: '#9ca3af', fontSize: '14px' }}>99% one-time</p>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #e5e7eb', padding: '2rem 0', marginTop: '4rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontWeight: 'bold' }}>PAYCHEX</span>
            <span style={{ color: '#9ca3af' }}>🤝</span>
            <span style={{ fontWeight: 'bold' }}>findem</span>
          </div>
        </div>
        <div style={{ textAlign: 'center', color: '#64748b', fontSize: '14px', marginTop: '1rem' }}>
          <p style={{ marginBottom: '1rem' }}>© 2025, Findem. All Rights Reserved.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
            <a href="#" style={{ color: '#64748b', textDecoration: 'none' }}>Terms of Service</a>
            <a href="#" style={{ color: '#64748b', textDecoration: 'none' }}>Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
