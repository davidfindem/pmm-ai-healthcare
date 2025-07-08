
import { useRouter } from 'next/router';
import personas from '../../data/personas';

export default function EmailView() {
  const router = useRouter();
  const { id } = router.query;
  const persona = personas[id];

  if (!persona) return <div>Loading...</div>;

  return (
    <div style={{ padding: 40 }}>
      <h2>Mock Email to {persona.title}</h2>
      <p>Dear {persona.title},</p>
      <p>
        We understand the challenges you're facing in {id.replace('-', ' ')} recruitment.
        Our AI solution helps you source high-quality talent in minutes.
      </p>
      <p>Schedule a time with us to see a demo tailored to your needs.</p>
      <p>– The Findem Team</p>
    </div>
  );
}

