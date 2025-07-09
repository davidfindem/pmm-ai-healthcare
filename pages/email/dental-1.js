import Link from 'next/link'

export default function DentalEmail1() {
  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '2rem', fontFamily: 'system-ui, sans-serif', background: '#f8fafc', minHeight: '100vh' }}>
      {/* Email Header */}
      <div style={{ background: 'white', borderRadius: '12px 12px 0 0', padding: '1.5rem', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '32px', height: '32px', background: '#2563eb', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '14px' }}>PF</div>
            <span style={{ fontWeight: '600', color: '#1e293b' }}>Paychex Findem</span>
          </div>
          <Link href="/" style={{ background: '#64748b', color: 'white', padding: '6px 12px', borderRadius: '6px', textDecoration: 'none', fontSize: '12px' }}>
            ← Back to Dashboard
          </Link>
        </div>
        <div style={{ background: '#f1f5f9', padding: '12px', borderRadius: '6px', fontSize: '14px' }}>
          <strong>Email #1:</strong> Welcome - Your Dental Staff Search Starts Here<br />
          <span style={{ color: '#64748b' }}>Trigger: Form Submit (15+ points) • Sent immediately</span>
        </div>
      </div>

      {/* Email Content */}
      <div style={{ background: 'white', padding: '2rem', borderRadius: '0 0 12px 12px', border: '1px solid #e2e8f0', borderTop: 'none' }}>
        
        {/* Subject Line */}
        <div style={{ marginBottom: '1.5rem', padding: '1rem', background: '#eff6ff', borderRadius: '8px', borderLeft: '4px solid #2563eb' }}>
          <div style={{ fontSize: '12px', color: '#2563eb', fontWeight: '600', marginBottom: '4px' }}>SUBJECT LINE</div>
          <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>Welcome - Your Dental Staff Search Starts Here</div>
        </div>

        {/* Email Body */}
        <div style={{ lineHeight: '1.6', color: '#374151' }}>
          <p style={{ marginBottom: '1rem' }}>Hi Sarah,</p>

          <p style={{ marginBottom: '1rem' }}>
            Thanks for your interest in finding dental staff! I wanted to reach out personally and share how 
            <strong> Paychex Findem</strong> can help you quickly connect with pre-vetted candidates like 
            <strong> Kim Tran</strong>, a Dental Hygienist based in Fresno, CA.
          </p>

          {/* Candidate Profile Card */}
          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.5rem', margin: '1.5rem 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '18px' }}>
                KT
              </div>
              <div>
                <div style={{ fontWeight: '600', fontSize: '16px', color: '#1e293b' }}>Kim Tran</div>
                <div style={{ color: '#2563eb', fontWeight: '500' }}>Dental Hygienist</div>
                <div style={{ color: '#64748b', fontSize: '14px' }}>Fresno, CA • 10+ years experience</div>
              </div>
            </div>
            <p style={{ fontSize: '14px', color: '#374151', marginBottom: '1rem' }}>
              Kim has over 10 years of experience in general and pediatric dentistry. She's known for her patient communication skills and speed, performing 14+ cleanings/day. Certified in local anesthesia administration with experience in digital radiography and periodontal therapy.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <span style={{ background: '#dcfce7', color: '#166534', padding: '4px 8px', borderRadius: '12px', fontSize: '12px', fontWeight: '500' }}>Available Now</span>
              <span style={{ background: '#dbeafe', color: '#1d4ed8', padding: '4px 8px', borderRadius: '12px', fontSize: '12px', fontWeight: '500' }}>Verified License</span>
              <span style={{ background: '#fef3c7', color: '#92400e', padding: '4px 8px', borderRadius: '12px', fontSize: '12px', fontWeight: '500' }}>References Checked</span>
            </div>
          </div>

          <p style={{ marginBottom: '1rem' }}>
            Whether you need to hire now or are planning ahead, we'll send you a shortlist of qualified candidates in less than 24 hours so you can make faster, better staffing decisions.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            Would you be open to a quick 15-minute call to discuss your specific needs? Just reply to this email or click below:
          </p>

          {/* CTA Button */}
          <div style={{ textAlign: 'center', margin: '2rem 0' }}>
            <a href="#" style={{
              display: 'inline-block',
              background: '#2563eb',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '16px'
            }}>
              Schedule 15-Min Call
            </a>
          </div>

          <p style={{ marginBottom: '1rem' }}>
            Or if you'd prefer, you can view more dental candidates here: 
            <a href="#" style={{ color: '#2563eb', textDecoration: 'none' }}> View Dental Candidate Pool →</a>
          </p>

          <p style={{ marginBottom: '0' }}>
            Best regards,<br />
            <strong>Jessica Martinez</strong><br />
            Healthcare Recruiting Specialist<br />
            Paychex Findem<br />
            📞 (555) 123-4567
          </p>
        </div>

        {/* Email Footer */}
        <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #e2e8f0', fontSize: '12px', color: '#64748b' }}>
          <p style={{ marginBottom: '0.5rem' }}>
            This email was sent because you submitted a form on our dental staffing page. 
            <a href="#" style={{ color: '#2563eb' }}>Unsubscribe</a> | 
            <a href="#" style={{ color: '#2563eb' }}> Update preferences</a>
          </p>
          <p style={{ marginBottom: '0' }}>Paychex Findem • 1234 Healthcare Blvd • Austin, TX 78701</p>
        </div>
      </div>

      {/* Email Analytics */}
      <div style={{ background: 'white', marginTop: '1rem', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
        <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#1e293b' }}>📊 Email Performance (Demo)</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', fontSize: '12px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: '600', color: '#10b981' }}>94%</div>
            <div style={{ color: '#64748b' }}>Open Rate</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: '600', color: '#2563eb' }}>23%</div>
            <div style={{ color: '#64748b' }}>Click Rate</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: '600', color: '#f59e0b' }}>12%</div>
            <div style={{ color: '#64748b' }}>Reply Rate</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: '600', color: '#8b5cf6' }}>2.1%</div>
            <div style={{ color: '#64748b' }}>Conversion</div>
          </div>
        </div>
      </div>
    </div>
  )
}
