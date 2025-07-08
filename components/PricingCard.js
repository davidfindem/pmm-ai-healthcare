import React from 'react'

export default function PricingCard({ title, price, description, features, featured = false }) {
  return (
    <div
      style={{
        border: featured ? '2px solid #0070f3' : '1px solid #ccc',
        borderRadius: '12px',
        padding: '1.5rem',
        backgroundColor: featured ? '#f0f8ff' : '#fff',
        boxShadow: featured ? '0 4px 10px rgba(0, 112, 243, 0.2)' : 'none',
        marginBottom: '1.5rem'
      }}
    >
      <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ fontWeight: 'bold', margin: 0 }}>{price}</p>
      <p style={{ marginBottom: '1rem', color: '#555' }}>{description}</p>
      <ul style={{ paddingLeft: '1.2rem' }}>
        {features?.map((feature, index) => (
          <li key={index} style={{ marginBottom: '0.5rem' }}>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}
