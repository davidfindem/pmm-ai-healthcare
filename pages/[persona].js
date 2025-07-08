// pages/[persona].js
import { useRouter } from 'next/router'
import LandingPageTemplate from '../components/LandingPageTemplate'
import allPersonas from '../data/personas'

export default function PersonaPage() {
  const router = useRouter()
  const { persona } = router.query

  const personas = Object.values(allPersonas)
  const personaData = personas.find(p => p.route === persona)

  if (!personaData) return <div>Loading...</div>

  return <LandingPageTemplate persona={personaData} />
}
