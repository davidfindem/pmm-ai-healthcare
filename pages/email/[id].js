import { useRouter } from 'next/router';
import Head from 'next/head';
import personas from '../../data/personas';

export default function EmailView() {
  const router = useRouter();
  const { id } = router.query;

  if (!id || !personas[id]) return <div>Loading...</div>;

  const persona = personas[id];
  const candidate = persona.exampleCandidate;

  return (
    <>
      <Head>
        <title>Email Preview - {persona.title}</title>
      </Head>
      <main style={{ fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Subject: Need help hiring {candidate.role}s?</h1>
        <p style={{ marginBottom: '1rem' }}>Hi there,</p>

        <p style={{ marginBottom: '1rem' }}>
          I saw you were checking out our {persona.title} solutions. I wanted to reach out personally and share how
          <strong> Paychex Findem </strong> can help you quickly connect with pre-vetted candidates like
          <strong> {candidate.name}</strong>, a {candidate.role} based in {candidate.location}.
        </p>

        <p style={{ marginBottom: '1rem' }}>{candidate.bio}</p>

        <p style={{ marginBottom: '1rem' }}>
          Whether you need to hire now or are planning ahead, we’ll send you a shortlist in less than 24 hours so you can make faster, better staffing decisions.
        </p>

        <p style={{ marginBottom: '1rem' }}>
          Would you be open to trying it out? Just reply to this email or click below to view candidates:
        </p>

        <a
          href={`https://yourdomain.com/${id}`}
          style={{
            display: 'inline-block',
            backgroundColor: '#0070f3',
            color: '#fff',
            padding: '0.75rem 1.25rem',
            borderRadius: '6px',
            textDecoration: 'none',
            marginTop: '1rem'
          }}
        >
          View Candidates
        </a>

        <p style={{ marginTop: '2rem' }}>Best,<br />The Paychex Findem Team</p>
      </main>
    </>
  );
}
