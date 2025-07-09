// components/PricingCard.js

import React from 'react';

export default function PricingCard({ title, price, description, features, featured = false }) {
  return (
    <div
      className={`rounded-xl p-6 bg-white transition shadow-sm hover:shadow-md border ${
        featured ? 'border-blue-600 bg-blue-50' : 'border-gray-200'
      }`}
    >
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-lg font-semibold text-blue-600 mb-1">{price}</p>
      <p className="text-sm text-gray-500 mb-4">{description}</p>
      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
        {features?.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}
