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
    
    const score = Math.floor(Math.random() * 10) + 15
    alert(`Demo: Lead captured for ${persona.title}! Score: ${score} points. Email sequence triggered.`)
    
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

  return (
    <>
      <Head>
        <title>{persona.title} Recruiting | Paychex Findem</title>
        <meta name="description" content={persona.metaDescription} />
      </Head>

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
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
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
          </Link>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <a href="#pricing" style={{ color: '#6b7280', textDecoration: 'none' }}>Pricing</a>
            <a href="#" style={{ color: '#6b7280', textDecoration: 'none' }}>Log in</a>
            <a href="#signup" style={{ 
              background: '#000', 
              color: 'white', 
              padding: '10px 20px', 
              borderRadius: '8px', 
              textDecoration: 'none' 
            }}>Sign up</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ 
        background: persona.backgroundColor,
        padding: '5rem 1rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 440px', 
            gap: '5rem',
            alignItems: 'center'
          }}>
            {/* Left Side - Text */}
            <div>
              <h1 style={{ 
                fontSize: '4rem', 
                fontWeight: 'bold', 
                lineHeight: '1.1',
                marginBottom: '2rem',
                color: '#111827'
              }} dangerouslySetInnerHTML={{ __html: persona.headline }}>
              </h1>
              <p style={{ 
                fontSize: '1.25rem', 
                color: '#6b7280',
                marginBottom: '3rem',
                lineHeight: '1.6'
              }}>
                {persona.subtext}
              </p>
              <button 
                onClick={() => document.getElementById('signup').scrollIntoView({ behavior: 'smooth' })}
                style={{
                  background: '#000',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '12px',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                {persona.ctaText}
              </button>
            </div>

            {/* Right Side - Candidate Card */}
            <div style={{ 
              background: 'white', 
              borderRadius: '16px', 
              padding: '2rem',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
            }}>
              {/* Candidate Header */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'flex-start',
                marginBottom: '2rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <img 
                    src={persona.candidate.photo}
                    alt={persona.candidate.name}
                    style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div>
                    <h3 style={{ 
                      fontSize: '1.75rem', 
                      fontWeight: 'bold', 
                      lineHeight: '1.1',
                      marginBottom: '0.5rem',
                      color: '#111827'
                    }} dangerouslySetInnerHTML={{ __html: persona.candidate.name }}>
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <div style={{ 
                        width: '8px', 
                        height: '8px', 
                        background: '#10b981', 
                        borderRadius: '50%',
                        marginTop: '6px'
                      }}></div>
                      <span style={{ color: '#6b7280', fontSize: '1rem', lineHeight: '1.3' }} dangerouslySetInnerHTML={{ __html: persona.candidate.title }}>
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button style={{ 
                    background: '#3b82f6', 
                    color: 'white', 
                    padding: '8px 16px', 
                    border: 'none', 
                    borderRadius: '8px', 
                    fontSize: '14px',
                    cursor: 'pointer'
                  }}>Email</button>
                  <button style={{ 
                    background: '#3b82f6', 
                    color: 'white', 
                    padding: '8px 16px', 
                    border: 'none', 
                    borderRadius: '8px', 
                    fontSize: '14px',
                    cursor: 'pointer'
                  }}>Call</button>
                </div>
              </div>

              {/* Bio */}
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ 
                  fontSize: '1rem', 
                  fontWeight: '600', 
                  marginBottom: '0.75rem',
                  color: '#111827'
                }}>Bio</h4>
                <p style={{ 
                  color: '#6b7280', 
                  fontSize: '0.875rem', 
                  lineHeight: '1.6',
                  marginBottom: '0.5rem'
                }}>
                  {persona.candidate.bio}
                </p>
                <a href="#" style={{ color: '#3b82f6', fontSize: '0.875rem', textDecoration: 'none' }}>
                  See more
                </a>
              </div>

              {/* Work Experience */}
              <div>
                <h4 style={{ 
                  fontSize: '1rem', 
                  fontWeight: '600', 
                  marginBottom: '1rem',
                  color: '#111827'
                }}>Work Experience</h4>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    background: persona.candidate.iconColor, 
                    borderRadius: '8px',
                    marginTop: '4px'
                  }}></div>
                  <div style={{ flex: 1 }}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'flex-start',
                      marginBottom: '4px'
                    }}>
                      <span style={{ 
                        fontSize: '0.875rem', 
                        fontWeight: '600',
                        color: '#111827'
                      }}>{persona.candidate.experience.title}</span>
                      <span style={{ 
                        fontSize: '0.75rem', 
                        color: '#9ca3af'
                      }}>{persona.candidate.experience.duration}</span>
                    </div>
                    <div style={{ 
                      fontSize: '0.875rem', 
                      color: '#6b7280',
                      marginBottom: '0.5rem'
                    }}>
                      {persona.candidate.experience.company}
                    </div>
                    <div style={{ 
                      fontSize: '0.75rem', 
                      color: '#9ca3af',
                      lineHeight: '1.5'
                    }}>
                      {persona.candidate.experience.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="signup" style={{ background: 'white', padding: '5rem 1rem' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: '3rem', 
            fontWeight: 'bold', 
            marginBottom: '3rem',
            color: '#111827'
          }}>
            {persona.formTitle}
          </h2>
          
          <form onSubmit={handleFormSubmit} style={{ 
            background: '#f9fafb', 
            padding: '3rem', 
            borderRadius: '16px' 
          }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: '1.5rem',
              marginBottom: '1.5rem'
            }}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                value={formData.firstName}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '1rem 1.25rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  background: 'white'
                }}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                value={formData.lastName}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '1rem 1.25rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  background: 'white'
                }}
              />
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: '1.5rem',
              marginBottom: '1.5rem'
            }}>
              <input
                type="email"
                name="email"
                placeholder="Work Email"
                required
                value={formData.email}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '1rem 1.25rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  background: 'white'
                }}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '1rem 1.25rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  background: 'white'
                }}
              />
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <input
                type="text"
                name="companyName"
                placeholder={persona.companyPlaceholder}
                required
                value={formData.companyName}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '1rem 1.25rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  background: 'white'
                }}
              />
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <select
                name="hiringNeeds"
                required
                value={formData.hiringNeeds}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '1rem 1.25rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  background: 'white',
                  color: '#374151'
                }}
              >
                <option value="">{persona.selectPlaceholder}</option>
                {persona.selectOptions.map((option, index) => (
                  <option key={index} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            
            <button
              type="submit"
              style={{
                width: '100%',
                background: '#000',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '12px',
                fontSize: '1.125rem',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Get Free Access
            </button>
            
            <p style={{ 
              color: '#6b7280', 
              fontSize: '0.875rem', 
              marginTop: '1rem' 
            }}>
              {persona.formNote}
            </p>
          </form>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" style={{ background: '#f9fafb', padding: '5rem 1rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: '3rem', 
            fontWeight: 'bold', 
            marginBottom: '4rem',
            color: '#111827'
          }}>
            {persona.pricingTitle}
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '2rem'
          }}>
            {persona.pricing.map((plan, index) => (
              <PricingCard 
                key={index}
                title={plan.title}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                featured={plan.featured}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function PricingCard({ title, price, description, features, featured = false }) {
  return (
    <div style={{ 
      background: 'white', 
      padding: '2rem', 
      borderRadius: '16px',
      boxShadow: featured ? '0 10px 25px rgba(59, 130, 246, 0.3)' : '0 4px 6px rgba(0,0,0,0.1)',
      border: featured ? '2px solid #3b82f6' : '1px solid #e5e7eb',
      transform: featured ? 'scale(1.05)' : 'none'
    }}>
      <h3 style={{ 
        fontSize: '1.25rem', 
        fontWeight: '600', 
        marginBottom: '0.5rem',
        color: '#111827'
      }}>{title}</h3>
      <div style={{ 
        fontSize: '2.5rem', 
        fontWeight: 'bold', 
        marginBottom: '0.5rem',
        color: '#111827'
      }}>
        {price}<span style={{ fontSize: '1rem', color: '#6b7280' }}>/month</span>
      </div>
      <p style={{ color: '#6b7280', marginBottom: '2rem' }}>{description}</p>
      
      <button style={{ 
        width: '100%',
        background: '#000',
        color: 'white',
        padding: '0.75rem',
        borderRadius: '12px',
        border: 'none',
        fontWeight: '600',
        marginBottom: '2rem',
        cursor: 'pointer'
      }}>
        Select {title}
      </button>
      
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {features.map((feature, index) => (
          <li key={index} style={{ 
            display: 'flex',
            alignItems: 'center',
            marginBottom: '0.75rem',
            fontSize: '0.875rem',
            color: '#6b7280'
          }}>
            <div style={{ 
              width: '16px', 
              height: '16px', 
              background: '#10b981', 
              borderRadius: '50%',
              marginRight: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '10px',
              fontWeight: 'bold'
            }}>
              ✓
            </div>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}
