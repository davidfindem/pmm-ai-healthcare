import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function LandingPageTemplate({ persona }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    hiringNeeds: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you! Your information has been submitted. Our team will contact you within 24 hours to discuss your ${persona?.title?.toLowerCase() || 'staffing'} staffing needs.`);
    setFormData({ firstName: '', lastName: '', email: '', phone: '', companyName: '', hiringNeeds: '' });
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

      <main style={{ fontFamily: 'sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <h1 dangerouslySetInnerHTML={{ __html: persona.headline }} style={{ fontSize: '2.5rem', marginBottom: '1rem' }} />
        <p style={{ fontSize: '1.2rem', color: '#444', marginBottom: '2rem' }}>{persona.subtext}</p>

        <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start' }}>
          {/* LEFT COLUMN: Form + Pricing */}
          <div style={{ flex: 2 }}>
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

            <p style={{ marginTop: '1rem', fontStyle: 'italic', color: '#555' }}>{persona.formNote}</p>

            <section style={{ marginTop: '3rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{persona.pricingTitle || 'Pricing Plans'}</h2>
              {Array.isArray(persona.pricing) && persona.pricing.map((plan) => (
                <div key={plan.title} style={{
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  marginBottom: '1.5rem',
                  background: '#fff'
                }}>
                  <h3>{plan.title}</h3>
                  <p style={{ margin: '0.5rem 0' }}><strong>{plan.price}</strong> — {plan.description}</p>
                  <ul>
                    {plan.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          </div>

          {/* RIGHT COLUMN: Candidate Card */}
          <div style={{ flex: 1, padding: '1rem', background: '#f5f5f5', borderRadius: '10px', textAlign: 'center' }}>
            <Image
              src={persona.exampleCandidate.image || '/images/default.jpg'}
              alt={persona.exampleCandidate.name}
              width={200}
              height={200}
              style={{ borderRadius: '50%', objectFit: 'cover' }}
            />
            <h3 style={{ marginTop: '1rem' }}>{persona.exampleCandidate.name}</h3>
            <p style={{ fontWeight: 'bold', margin: 0 }}>{persona.exampleCandidate.role}</p>
            <p style={{ color: '#777', margin: '0.5rem 0' }}>{persona.exampleCandidate.location}</p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.4 }}>{persona.exampleCandidate.bio}</p>
          </div>
        </div>
      </main>
    </>
  );
}
