import { useState } from 'react';
import Head from 'next/head';

export default function LandingPageTemplate({ persona }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    hiringNeeds: ''
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    alert(`Thank you! Your information has been submitted. Our team will contact you within 24 hours to discuss your ${persona?.title?.toLowerCase() || 'staffing'} staffing needs.`);

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      companyName: '',
      hiringNeeds: ''
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!persona) return <div>Loading...</div>;

  return (
    <>
      <Head>
        <title>{persona.title || 'Healthcare Staffing Solutions'}</title>
        <meta name="description" content={persona.metaDescription || ''} />
      </Head>

      <main style={{
        padding: '2rem',
        fontFamily: 'system-ui, sans-serif',
        lineHeight: 1.6,
        maxWidth: '1080px',
        margin: '0 auto'
      }}>
        <h1 dangerouslySetInnerHTML={{ __html: persona.headline }} style={{ fontSize: '2.5rem', marginBottom: '1rem' }} />
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>{persona.subtext}</p>

        <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
          {/* Left Panel */}
          <div style={{ flex: 1 }}>
            <form onSubmit={handleFormSubmit} style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
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
              <button type="submit" style={{ padding: '0.75rem', fontSize: '1rem', background: '#000', color: '#fff', border: 'none', borderRadius: '4px' }}>
                {persona.ctaText}
              </button>
            </form>

            <div>
              <h2>{persona.pricingTitle || 'Pricing'}</h2>
              {Array.isArray(persona.pricing) ? (
                persona.pricing.map((plan) => (
                  <div key={plan.title} style={{
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    padding: '1rem',
                    marginBottom: '1rem',
                    backgroundColor: '#f9f9f9'
                  }}>
                    <h3 style={{ margin: '0 0 0.25rem' }}>{plan.title}</h3>
                    <p style={{ margin: '0 0 0.5rem' }}><strong>{plan.price}</strong> — {plan.description}</p>
                    <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
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

            <p style={{ marginTop: '1.5rem', fontStyle: 'italic' }}>{persona.formNote}</p>
          </div>

          {/* Right Panel: Example Candidate */}
          <div style={{
            flexBasis: '320px',
            flexShrink: 0,
            border: '1px solid #ddd',
            padding: '1.5rem',
            borderRadius: '10px',
            background: '#fafafa',
            textAlign: 'center'
          }}>
            {persona.exampleCandidate?.image && (
              <img
                src={persona.exampleCandidate.image}
                alt={persona.exampleCandidate.name}
                style={{
                  width: '100%',
                  maxWidth: '200px',
                  borderRadius: '12px',
                  objectFit: 'cover',
                  marginBottom: '1rem'
                }}
              />
            )}
            <h3 style={{ marginBottom: '0.25rem' }}>{persona.exampleCandidate.name}</h3>
            <p style={{ margin: '0', fontWeight: 'bold' }}>{persona.exampleCandidate.role}</p>
            <p style={{ marginTop: '0.5rem', fontStyle: 'italic' }}>{persona.exampleCandidate.bio}</p>
            <p style={{ marginTop: '1rem' }}><strong>Location:</strong> {persona.exampleCandidate.location}</p>
          </div>
        </div>
      </main>
    </>
  );
}
