
import React from 'react';

export default function CookiePolicy() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-[#00ff00]">Cookie Policy</h1>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          This policy explains how we use cookies and similar technologies to provide
          and improve our services.
        </p>

        <h2 className="text-2xl font-bold mb-4">What Are Cookies</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Cookies are small text files stored on your device that help us provide and
          improve our services by tracking usage patterns and preferences.
        </p>

        <h2 className="text-2xl font-bold mb-4">How We Use Cookies</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          We use cookies for authentication, analytics, and to provide a better user
          experience on our platform.
        </p>
      </div>
    </div>
  );
}
