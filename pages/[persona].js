import { useRouter } from 'next/router'
import LandingPageTemplate from '../components/LandingPageTemplate'
import { personas } from '../data/personas'

export default function PersonaPage() {
  const router = useRouter()
  const { persona } = router.query
  
  // Get persona data
  const personaData = personas[persona]
  
  // Handle invalid persona
  if (!personaData) {
    return (
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh',
        fontFamily: 'system-ui, sans-serif'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Persona Not Found</h1>
          <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
            The persona "{persona}" doesn't exist.
          </p>
          <a 
            href="/" 
            style={{ 
              background: '#000', 
              color: 'white', 
              padding: '12px 24px', 
              borderRadius: '8px', 
              textDecoration: 'none' 
            }}
          >
            Back to Homepage
          </a>
        </div>
      </div>
    )
  }
  
  return <LandingPageTemplate persona={personaData} />
}

// This tells Next.js which paths are valid
export async function getStaticPaths() {
  const paths = Object.keys(personas).map((persona) => ({
    params: { persona }
  }))
  
  return {
    paths,
    fallback: false // Show 404 for invalid personas
  }
}

// This gets the persona data at build time
export async function getStaticProps({ params }) {
  const personaData = personas[params.persona]
  
  if (!personaData) {
    return {
      notFound: true
    }
  }
  
  return {
    props: {
      persona: personaData
    }
  }
}
