import { useRouter } from 'next/router'
import LandingPageTemplate from '../components/LandingPageTemplate'
import { personas } from '../data/personas'

export default function PersonaPage({ persona: personaData }) {
  const router = useRouter()

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

export async function getStaticPaths() {
  const paths = Object.keys(personas).map((persona) => ({
    params: { persona }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const personaData = personas[params.persona] || null

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
