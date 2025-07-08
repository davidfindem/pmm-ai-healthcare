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

  // Add safety checks for persona data
  if (!persona) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Head>
        <title>{persona.title || 'Healthcare'} Recruiting | Paychex Findem</title>
        <meta name="description" content={persona.metaDescription || 'Find qualified healthcare professionals'} />
      </Head>

      {/* Header */}
      <header style={{ 
        background: 'white', 
        borderBottom: '1px solid #e5e7eb',
        padding: '20px 0'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <div style={{ 
              width: '50px', 
              height: '50px', 
              background: '#1e40af', 
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              <span style={{ 
                color: 'white', 
                fontWeight: '700', 
                fontSize: '20px',
                position: 'absolute',
                left: '8px'
              }}>P</span>
              <div style={{
                position: 'absolute',
                right: '16px',
                top: '50%',
                transform: 'translateY(-50%)'
              }}>
                <div style={{ width: '12px', height: '2px', background: 'white', marginBottom: '2px' }}></div>
                <div style={{ width: '12px', height: '2px', background: 'white', marginBottom: '2px' }}></div>
                <div style={{ width: '12px', height: '2px', background: 'white' }}></div>
              </div>
              <span style={{ 
                color: 'white', 
                fontWeight: '700', 
                fontSize: '20px',
                position: 'absolute',
                right: '8px'
              }}>F</span>
            </div>
          </Link>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <a href="#pricing" style={{ color: '#6b7280', textDecoration: 'none', fontSize: '16px', fontWeight: '500' }}>Pricing</a>
            <a href="#" style={{ color: '#6b7280', textDecoration: 'none', fontSize: '16px', fontWeight: '500' }}>Log in</a>
            <a href="#signup" style={{ 
              background: '#000', 
              color: 'white', 
              padding: '12px 24px', 
              borderRadius: '8px', 
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500'
            }}>Sign up</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ 
        background: persona.backgroundColor || '#f9fafb',
        padding: '80px 0',
        minHeight: '600px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 440px', 
            gap: '80px',
            alignItems: 'start',
            paddingTop: '40px'
          }}>
            {/* Left Side - Text */}
            <div>
              <h1 style={{ 
                fontSize: '72px', 
                fontWeight: '700', 
                lineHeight: '0.9',
                color: '#000',
                marginBottom: '32px'
              }} dangerouslySetInnerHTML={{ __html: persona.headline || 'Find Top Talent' }}>
              </h1>
              <p style={{ 
                fontSize: '18px', 
                color: '#6b7280',
                lineHeight: '1.6',
                marginBottom: '48px',
                maxWidth: '500px'
              }}>
                {persona.subtext || 'Connect with qualified professionals in your industry.'}
              </p>
              <button 
                onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  background: '#000',
                  color: 'white',
                  padding: '16px 32px',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '18px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
              >
                {persona.ctaText || 'Get Started'}
              </button>
            </div>

            {/* Right Side - Candidate Card */}
            {persona.candidate && (
              <div style={{ 
                background: 'white', 
                borderRadius: '16px', 
                padding: '32px',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                width: '440px',
                position: 'relative'
              }}>
                {/* Candidate Header */}
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start',
                  marginBottom: '32px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', flex: 1 }}>
                    <img 
                      src={persona.candidate.photo || '/placeholder-avatar.jpg'}
                      alt={persona.candidate.name?.replace(/<br\/>/g, ' ') || 'Candidate'}
                      style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ 
                        fontSize: '28px', 
                        fontWeight: '700', 
                        color: '#000',
                        marginBottom: '8px',
                        lineHeight: '1.1'
                      }} dangerouslySetInnerHTML={{ __html: persona.candidate.name || 'John Doe' }}>
                      </div>
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        gap: '8px',
                        color: '#6b7280',
                        fontSize: '16px',
                        fontWeight: '500',
                        lineHeight: '1.3'
                      }}>
                        <div style={{ 
                          width: '8px', 
                          height: '8px', 
                          background: '#10b981', 
                          borderRadius: '50%',
                          marginTop: '6px',
                          flexShrink: 0
                        }}></div>
                        <span dangerouslySetInnerHTML={{ __html: persona.candidate.title || 'Professional' }}></span>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', flexShrink: 0, marginLeft: '16px' }}>
                    <button style={{ 
                      background: '#3b82f6', 
                      color: 'white', 
                      padding: '10px 20px', 
                      border: 'none', 
                      borderRadius: '8px', 
                      fontSize: '14px',
                      fontWeight: '500',
                      cursor: 'pointer'
                    }}>Email</button>
                    <button style={{ 
                      background: '#3b82f6', 
                      color: 'white', 
                      padding: '10px 20px', 
                      border: 'none', 
                      borderRadius: '8px', 
                      fontSize: '14px',
                      fontWeight: '500',
                      cursor: 'pointer'
                    }}>Call</button>
                  </div>
                </div>

                {/* Bio */}
                <div style={{ marginBottom: '32px' }}>
                  <h4 style={{ 
                    fontSize: '18px', 
                    fontWeight: '700', 
                    color: '#000',
                    marginBottom: '16px'
                  }}>Bio</h4>
                  <p style={{ 
                    color: '#6b7280', 
                    fontSize: '15px', 
                    lineHeight: '1.6',
                    marginBottom: '12px'
                  }}>
                    {persona.candidate.bio || 'Experienced professional with a track record of success.'}
                  </p>
                  <a href="#" style={{ 
                    color: '#3b82f6', 
                    fontSize: '15px', 
                    fontWeight: '500',
                    textDecoration: 'none'
                  }}>
                    See more
                  </a>
                </div>

                {/* Work Experience */}
                {persona.candidate.experience && (
                  <div>
                    <h4 style={{ 
                      fontSize: '18px', 
                      fontWeight: '700', 
                      color: '#000',
                      marginBottom: '16px'
                    }}>Work Experience</h4>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                      <div style={{ 
                        width: '48px', 
                        height: '48px', 
                        background: persona.candidate.iconColor || '#3b82f6', 
                        borderRadius: '8px',
                        marginTop: '4px',
                        flexShrink: 0
                      }}></div>
                      <div style={{ flex: 1 }}>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between', 
                          alignItems: 'flex-start',
                          marginBottom: '4px'
                        }}>
                          <span style={{ 
                            fontSize: '16px', 
                            fontWeight: '700',
                            color: '#000'
                          }}>{persona.candidate.experience.title || 'Position'}</span>
                          <span style={{ 
                            fontSize: '13px', 
                            color: '#9ca3af',
                            whiteSpace: 'nowrap'
                          }}>{persona.candidate.experience.duration || '2020-Present'}</span>
                        </div>
                        <div style={{ 
                          fontSize: '14px', 
                          color: '#6b7280',
                          marginBottom: '8px'
                        }}>
                          {persona.candidate.experience.company || 'Company Name'}
                        </div>
                        <div style={{ 
                          fontSize: '13px', 
                          color: '#9ca3af',
                          lineHeight: '1.5'
                        }}>
                          {persona.candidate.experience.description || 'Professional experience description.'}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="signup" style={{ background: 'white', padding: '100px 0' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 40px', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: '48px', 
            fontWeight: '700', 
            color: '#000',
            marginBottom: '48px'
          }}>
            {persona.formTitle || 'Get Started Today'}
          </h2>
          
          <form onSubmit={handleFormSubmit} style={{ 
            background: '#f9fafb', 
            padding: '48px', 
            borderRadius: '16px',
            textAlign: 'left'
          }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: '20px',
              marginBottom: '24px'
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
                  padding: '16px 20px',
                  border: '1px solid #d1d5db',
                  borderRadius: '12px',
                  fontSize: '16px',
                  background: 'white',
                  color: '#000'
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
                  padding: '16px 20px',
                  border: '1px solid #d1d5db',
                  borderRadius: '12px',
                  fontSize: '16px',
                  background: 'white',
                  color: '#000'
                }}
              />
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: '20px',
              marginBottom: '24px'
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
                  padding: '16px 20px',
                  border: '1px solid #d1d5db',
                  borderRadius: '12px',
                  fontSize: '16px',
                  background: 'white',
                  color: '#000'
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
                  padding: '16px 20px',
                  border: '1px solid #d1d5db',
                  borderRadius: '12px',
                  fontSize: '16px',
                  background: 'white',
                  color: '#000'
                }}
              />
            </div>
            
            <div style={{ marginBottom: '24px' }}>
              <input
                type="text"
                name="companyName"
                placeholder={persona.companyPlaceholder || 'Company Name'}
                required
                value={formData.companyName}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '16px 20px',
                  border: '1px solid #d1d5db',
                  borderRadius: '12px',
                  fontSize: '16px',
                  background: 'white',
                  color: '#000'
                }}
              />
            </div>
            
            <div style={{ marginBottom: '32px' }}>
              <select
                name="hiringNeeds"
                required
                value={formData.hiringNeeds}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '16px 20px',
                  border: '1px solid #d1d5db',
                  borderRadius: '12px',
                  fontSize: '16px',
                  background: 'white',
                  color: '#000'
                }}
              >
                <option value="">{persona.selectPlaceholder || 'Select your hiring needs'}</option>
                {(persona.selectOptions || []).map((option, index) => (
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
                padding: '16px 32px',
                border: 'none',
                borderRadius: '12px',
                fontSize: '18px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Get Free Access
            </button>
            
            <p style={{ 
              textAlign: 'center',
              color: '#6b7280', 
              fontSize: '15px', 
              marginTop: '20px' 
            }}>
              {persona.formNote || 'We\'ll get back to you within 24 hours.'}
            </p>
          </form>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" style={{ background: '#f9fafb', padding: '100px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{ 
              color: '#6b7280',
              fontSize: '14px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '16px'
            }}>PRICING</div>
            <h2 style={{ 
              fontSize: '48px', 
              fontWeight: '700', 
              color: '#000'
            }}>
              {persona.pricingTitle || 'Simple, Transparent Pricing'}
            </h2>
          </div>
          
          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '60px'
          }}>
            <div style={{ 
              background: 'white',
              borderRadius: '12px',
              padding: '4px',
              display: 'flex',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
              <button style={{ 
                padding: '12px 24px',
                border: 'none',
                background: '#f3f4f6',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: '500',
                cursor: 'pointer',
                color: '#000'
              }}>Monthly</button>
              <button style={{ 
                padding: '12px 24px',
                border: 'none',
                background: 'none',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: '500',
                cursor: 'pointer',
                color: '#6b7280'
              }}>Annual <span style={{ color: '#3b82f6', fontWeight: '600', marginLeft: '8px' }}>Save 20%</span></button>
            </div>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '32px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {(persona.pricing || []).map((pricingPlan, index) => (
              <PricingCard 
                key={index}
                title={pricingPlan?.title || 'Plan'}
                price={pricingPlan?.price || '$0'}
                description={pricingPlan?.description || 'Basic plan'}
                features={pricingPlan?.features || []}
                featured={pricingPlan?.featured || false}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function PricingCard({ title, price, description, features, featured }) {
  // Ensure all props have defaults
  const safeTitle = title || 'Plan'
  const safePrice = price || '$0'
  const safeDescription = description || 'Basic plan description'
  const safeFeatures = Array.isArray(features) ? features : []
  const safeFeatured = Boolean(featured)

  return (
    <div style={{ 
      background: 'white', 
      borderRadius: '16px',
      padding: '40px 32px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      border: safeFeatured ? '2px solid #3b82f6' : 'none',
      transform: safeFeatured ? 'scale(1.05)' : 'none'
    }}>
      <div style={{ 
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        marginBottom: '24px'
      }}>
        <div style={{ 
          width: '40px',
          height: '40px',
          background: '#dbeafe',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          <div style={{ 
            width: '16px',
            height: '16px',
            background: '#3b82f6',
            borderRadius: '4px'
          }}></div>
        </div>
        <div>
          <h4 style={{ 
            fontSize: '20px', 
            fontWeight: '600', 
            color: '#000',
            marginBottom: '4px'
          }}>{safeTitle}</h4>
          <div style={{ 
            fontSize: '14px', 
            color: '#6b7280'
          }}>Monthly only</div>
        </div>
      </div>
      
      <div style={{ marginBottom: '32px' }}>
        <span style={{ 
          fontSize: '48px', 
          fontWeight: '700', 
          color: '#000'
        }}>{safePrice}</span>
        <span style={{ 
          fontSize: '18px', 
          color: '#6b7280',
          marginLeft: '4px'
        }}>per month</span>
        <div style={{ 
          fontSize: '15px', 
          color: '#6b7280',
          marginTop: '8px'
        }}>{safeDescription}</div>
      </div>
      
      <button style={{ 
        width: '100%',
        background: '#000',
        color: 'white',
        padding: '16px',
        border: 'none',
        borderRadius: '12px',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        marginBottom: '32px'
      }}>
        Select {safeTitle}
      </button>
      
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {safeFeatures.map((feature, index) => (
          <li key={index} style={{ 
            display: 'flex',
            alignItems: 'center',
            marginBottom: '16px',
            fontSize: '15px',
            color: '#6b7280'
          }}>
            <div style={{ 
              width: '20px', 
              height: '20px', 
              background: '#10b981', 
              borderRadius: '50%',
              marginRight: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '12px',
              fontWeight: '600',
              flexShrink: 0
            }}>
              ✓
            </div>
            {feature || 'Feature'}
          </li>
        ))}
      </ul>
    </div>
  )
}
