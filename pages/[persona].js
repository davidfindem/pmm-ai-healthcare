import { personas } from "../data/personas";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const router = useRouter();
  const { persona } = router.query;
  const [data, setData] = useState(null);

  useEffect(() => {
    if (persona && personas[persona]) {
      setData(personas[persona]);
    }
  }, [persona]);

  if (!data) return null;

  return (
    <div className="font-sans">
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.metaDescription} />
      </Head>

      <header className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <img src="/logo.svg" alt="Findem Logo" className="h-8" />
          <a
            href="https://app.findem.ai"
            className="text-sm text-green-700 hover:underline"
          >
            Sign In
          </a>
        </div>
      </header>

      <main className="bg-gray-50 min-h-screen">
        <section className="text-center py-16 px-4">
          <h1
            className="text-4xl font-bold leading-snug"
            dangerouslySetInnerHTML={{ __html: data.headline }}
          />
          <p className="text-gray-600 text-lg mt-4">{data.subtext}</p>
          <div className="mt-8 max-w-xl mx-auto">
            <input
              className="border w-full p-3 rounded mb-4"
              placeholder={data.companyPlaceholder}
            />
            <select className="border w-full p-3 rounded mb-4 text-gray-600">
              <option value="">{data.selectPlaceholder}</option>
              {data.selectOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded w-full">
              {data.ctaText}
            </button>
            <p className="text-xs text-gray-500 mt-2">{data.formNote}</p>
          </div>
        </section>

        <section className="bg-white py-12 px-4">
          <h2 className="text-center text-2xl font-semibold mb-8">
            {data.pricingTitle}
          </h2>
          <div className="flex gap-6 justify-center flex-wrap">
            {data.pricing.map((plan) => (
              <div
                key={plan.title}
                className="border rounded-lg w-72 p-6 shadow-sm bg-gray-50"
              >
                <h3 className="text-xl font-bold text-green-700">
                  {plan.title}
                </h3>
                <p className="text-3xl font-semibold mt-2">{plan.price}</p>
                <p className="text-sm text-gray-600 mt-1">{plan.description}</p>
                <ul className="text-sm mt-4 space-y-1">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-600">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto flex gap-10 items-center">
            <img
              src={data.exampleCandidate.image}
              alt={data.exampleCandidate.name}
              className="w-48 h-48 object-cover rounded-full border"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-800">
                Meet {data.exampleCandidate.name}
              </h3>
              <p className="text-green-700 font-semibold">
                {data.exampleCandidate.role} – {data.exampleCandidate.location}
              </p>
              <p className="text-gray-600 mt-2 text-sm">
                {data.exampleCandidate.bio}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
