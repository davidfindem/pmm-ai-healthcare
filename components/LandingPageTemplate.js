// File: components/LandingPageTemplate.js

import { useState } from 'react'
import Head from 'next/head'

export default function LandingPageTemplate({ persona }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    hiringNeeds: ''
  })

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    alert(`Thank you! Your information has been submitted. Our team will contact you within 24 hours to discuss your ${persona?.title?.toLowerCase() || 'staffing'} staffing needs.`)

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      companyName: '',
      hiringNeeds: ''
    })
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (!persona) return <div>Loading...</div>

  return (
    <>
      <Head>
        <title>{persona.title || 'Healthcare Staffing Solutions'}</title>
        <meta name="description" content={persona.metaDescription || ''} />
      </Head>

      <main style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '960px', margin: '0 auto' }}>
        <h1 dangerouslySetInnerHTML={{ __html: persona.headline }} style={{ fontSize: '2.5rem', marginBottom: '1rem' }} />
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>{persona.subtext}</p>

        <div style={{ display: 'flex', gap: '2rem' }}>
          {/* Left: Form and Pricing */}
          <div style={{ flex: 1 }}>
            <form onSubmit={handleFormSubmit} style={{ display: 'grid', gap: '1rem' }}>
              <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleInputChange} />
              <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} />
              <input name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
              <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleInputChange} />
              <input name="companyName" placeholder={persona.companyPlaceholder} value={formData.companyName} onChange={handleInputChange} />
              <select name="hiringNeeds" value={formData.hiringNeeds} onChange={handleInputChange}>
                <option value="">{persona.selectPlaceholder}</option>
                {persona.selectOptions?.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
              <button type="submit" style={{ padding: '0.75rem', fontSize: '1rem' }}>{persona.ctaText}</button>
            </form>

            <div style={{ marginTop: '3rem' }}>
              <h2>{persona.pricingTitle || 'Pricing'}</h2>
              {Array.isArray(persona.pricing) ? (
                persona.pricing.map((plan) => (
                  <div key={plan.title} style={{
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    padding: '1rem',
                    marginBottom: '1rem'
                  }}>
                    <h3>{plan.title}</h3>
                    <p><strong>{plan.price}</strong> — {plan.description}</p>
                    <ul>
                      {plan.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                ))
              ) : (
                <p>No pricing plans available.</p>
              )}
            </div>

            <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>{persona.formNote}</p>
          </div>

          {/* Right: Candidate Profile */}
          <div style={{ flexBasis: '280px', flexShrink: 0, border: '1px solid #ddd', padding: '1rem', borderRadius: '10px', background: '#fafafa' }}>
            <h3 style={{ marginTop: 0 }}>{persona.exampleCandidate.name}</h3>
            <p style={{ margin: 0, fontWeight: 'bold' }}>{persona.exampleCandidate.role}</p>
            <p style={{ marginTop: '0.5rem', fontStyle: 'italic' }}>{persona.exampleCandidate.bio}</p>
            <p><strong>Location:</strong> {persona.exampleCandidate.location}</p>
            <p><strong>Experience:</strong> {persona.exampleCandidate.experience}</p>
          </div>
        </div>
      </main>
    </>
  )
}
