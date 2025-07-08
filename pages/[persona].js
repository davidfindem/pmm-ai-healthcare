import { useRouter } from 'next/router'
import LandingPageTemplate from '../components/LandingPageTemplate'
import { personas } from '../data/personas'

export default function PersonaPage({ persona: personaData }) {
  const router = useRouter()
  
  // If we're in fallback mode or persona data is missing, show loading
  if (router.isFallback || !personaData) {
    return (
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh',
        fontFamily: 'system-ui, sans-serif'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Loading...</h1>
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
