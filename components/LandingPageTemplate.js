import React from 'react';
import Image from 'next/image';

export default function LandingPageTemplate({ persona }) {
  const {
    headline,
    subtext,
    selectPlaceholder,
    selectOptions,
    ctaText,
    formNote,
    exampleCandidate,
    pricingTitle,
    pricing,
  } = persona;

  return (
    <main className="max-w-7xl mx-auto px-6 py-16 font-sans bg-white text-gray-900">
      <header className="mb-12 border-b border-gray-200 pb-8">
        <h1
          className="text-5xl font-light leading-tight"
          dangerouslySetInnerHTML={{ __html: headline }}
        />
        <p className="text-lg text-gray-600 mt-4 max-w-2xl">{subtext}</p>
      </header>

      <section className="grid lg:grid-cols-[2fr_1fr] gap-12 items-start">
        {/* Form Section */}
        <form className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="border border-gray-300 rounded-md px-4 py-3 w-full text-sm" placeholder="First Name" />
            <input className="border border-gray-300 rounded-md px-4 py-3 w-full text-sm" placeholder="Last Name" />
          </div>
          <input className="border border-gray-300 rounded-md px-4 py-3 w-full text-sm" placeholder="Email" />
          <input className="border border-gray-300 rounded-md px-4 py-3 w-full text-sm" placeholder="Phone" />
          <input className="border border-gray-300 rounded-md px-4 py-3 w-full text-sm" placeholder={persona.companyPlaceholder} />

          <select className="border border-gray-300 rounded-md px-4 py-3 w-full text-sm text-gray-700">
            <option>{selectPlaceholder}</option>
            {selectOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md text-base font-semibold shadow-md hover:bg-blue-700 transition"
          >
            {ctaText}
          </button>
          <p className="text-xs italic text-gray-500">{formNote}</p>
        </form>

        {/* Candidate Card */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm text-center">
          {exampleCandidate.image && (
            <div className="w-32 h-32 mx-auto relative mb-4">
              <Image
                src={exampleCandidate.image}
                alt={exampleCandidate.name}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          )}
          <h3 className="text-xl font-semibold text-gray-800">{exampleCandidate.name}</h3>
          <p className="text-gray-700 font-medium text-sm">{exampleCandidate.role}</p>
          <p className="text-gray-400 text-xs mb-3">{exampleCandidate.location}</p>
          <div className="text-left mt-4">
            <h4 className="text-sm font-semibold mb-1 text-gray-800">About {exampleCandidate.name.split(' ')[0]}:</h4>
            <p className="text-sm text-gray-700 leading-relaxed">{exampleCandidate.bio}</p>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-3xl font-medium mb-8">{pricingTitle}</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {pricing.map((tier) => (
            <div
              key={tier.title}
              className="border border-gray-200 rounded-xl p-6 bg-white shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold mb-2 text-gray-800">{tier.title}</h3>
              <p className="text-lg font-semibold text-blue-600 mb-1">{tier.price}</p>
              <p className="text-sm text-gray-500 mb-4">{tier.description}</p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {tier.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
