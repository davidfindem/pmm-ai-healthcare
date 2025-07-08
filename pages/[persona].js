import personas from "../data/personas";
import LandingPageTemplate from "../components/LandingPageTemplate";

export default function PersonaPage({ persona }) {
  if (!persona) return <div>Persona not found</div>;
  return <LandingPageTemplate persona={persona} />;
}

export async function getStaticPaths() {
  const paths = Object.keys(personas).map((key) => ({ params: { persona: key } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const persona = personas[params.persona] || null;
  return {
    props: {
      persona
    }
  };
}
