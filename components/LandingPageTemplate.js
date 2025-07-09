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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">PF</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">Paychex Findem</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm">
            <a href="#" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Log in</a>
            <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium">
              Sign up
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 
            className="text-6xl font-bold text-gray-900 mb-6 leading-tight"
            dangerouslySetInnerHTML={{ __html: headline.replace('<em>', '<span class="text-black">').replace('</em>', '</span>') }}
          />
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            {subtext}
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors">
            {ctaText}
          </button>
          <p className="text-sm text-gray-500 mt-3">{formNote}</p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Candidate Profile */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              {/* Candidate Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {exampleCandidate.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900">{exampleCandidate.name}</h3>
                  <p className="text-blue-600 font-medium">{exampleCandidate.role}</p>
                  <p className="text-gray-500 text-sm">{exampleCandidate.location}</p>
                </div>
                <div className="flex space-x-2">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                    Email
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                    Call
                  </button>
                </div>
              </div>

              {/* Bio Section */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Bio</h4>
                <p className="text-gray-700 text-sm leading-relaxed">{exampleCandidate.bio}</p>
              </div>

              {/* Work Experience */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Work Experience</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 text-sm">🏥</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{exampleCandidate.role}</p>
                      <p className="text-xs text-gray-500">Previous Healthcare Facility • 2019 - 2024</p>
                      <p className="text-xs text-gray-600 mt-1">Specialized in patient care with exceptional performance metrics and team collaboration.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="mt-6 text-center">
              <p className="text-2xl font-bold text-gray-900 mb-1">50 CANDIDATES</p>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Reach the <span className="italic">right talent</span>
              </h3>
              <p className="text-gray-600 text-sm">
                Reach out directly to high-quality candidates and start meaningful conversations
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="space-y-6">
            {/* Contact Form */}
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input 
                  className="border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  placeholder="First Name" 
                />
                <input 
                  className="border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  placeholder="Last Name" 
                />
              </div>
              <input 
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                placeholder="Email" 
              />
              <input 
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                placeholder="Phone" 
              />
              <input 
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                placeholder={persona.companyPlaceholder} 
              />
              <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700">
                <option>{selectPlaceholder}</option>
                {selectOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors"
              >
                {ctaText}
              </button>
            </form>

            {/* Message Interface Mockup */}
            <div className="bg-purple-50 rounded-xl p-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <div className="flex-1 bg-white rounded-lg p-3 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Interested Reply</span>
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <div className="flex-1 bg-white rounded-lg p-3 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Message Sent</span>
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <div className="flex-1 bg-white rounded-lg p-3 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Message</span>
                      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">Message</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <div className="flex-1 bg-white rounded-lg p-3 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Message</span>
                      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">Message</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Integration Section */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">EMAIL INTEGRATION</h4>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Keep talent <span className="italic">engaged</span>
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Engage and track candidates directly from your inbox—no need to switch platforms
              </p>
              <div className="space-y-2">
                <div className="bg-white rounded-lg p-3 border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <span className="text-blue-600">📧</span>
                    <span className="text-sm font-medium">Sign in with Google</span>
                    <span className="ml-auto">→</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3 border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <span className="text-blue-600">📨</span>
                    <span className="text-sm font-medium">Sign in with Microsoft</span>
                    <span className="ml-auto">→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <section className="mt-24">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">{pricingTitle}</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricing.map((tier) => (
              <div
                key={tier.title}
                className="border border-gray-200 rounded-2xl p-8 bg-white hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{tier.title}</h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">{tier.price}</p>
                <p className="text-gray-600 mb-6">{tier.description}</p>
                <ul className="space-y-3 text-gray-700">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600 text-xs">✓</span>
                      </span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-24 bg-black rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Make your next <span className="italic">great hire</span> today.
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            No subscriptions, no hassle—just a simple way to connect with top talent. Get started now and find the right candidate.
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            {ctaText}
          </button>
          <p className="text-gray-400 text-sm mt-4">99% one-time</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center space-x-8">
          <div className="flex items-center space-x-2">
            <span className="font-bold">PAYCHEX</span>
            <span className="text-gray-400">🤝</span>
            <span className="font-bold">findem</span>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-4">
          <p>© 2025, Findem. All Rights Reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-gray-700">Terms of Service</a>
            <a href="#" className="hover:text-gray-700">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
