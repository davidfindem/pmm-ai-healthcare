import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

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

      <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1 dangerouslySetInnerHTML={{ __html: persona.headline }} />
        <p>{persona.subtext}</p>

        <form onSubmit={handleFormSubmit}>
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
          <button type="submit">{persona.ctaText}</button>
        </form>

        <div style={{ marginTop: '2rem' }}>
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
      </main>
    </>
  )
}
