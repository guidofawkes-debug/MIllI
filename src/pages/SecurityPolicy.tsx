
import React from 'react';

export default function SecurityPolicy() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-[#00ff00]">Security Policy</h1>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Security is at the core of everything we do at MIllI. We implement industry-leading
          practices to protect your data and privacy.
        </p>

        <h2 className="text-2xl font-bold mb-4">Data Protection</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          We use enterprise-grade encryption and security measures to protect your data
          at rest and in transit.
        </p>

        <h2 className="text-2xl font-bold mb-4">Security Measures</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Our platform implements multiple layers of security including encryption,
          access controls, and regular security audits.
        </p>
      </div>
    </div>
  );
}
