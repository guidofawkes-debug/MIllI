
import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-[#00ff00]">Privacy Policy</h1>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          At MIllI, we take your privacy seriously. This policy outlines how we collect,
          use, and protect your personal information.
        </p>

        <h2 className="text-2xl font-bold mb-4">Information Collection</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          We collect information that you provide directly to us, including but not limited
          to your name, email address, and usage data when you use our services.
        </p>

        <h2 className="text-2xl font-bold mb-4">Data Usage</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Your data is used to provide and improve our services, communicate with you,
          and enhance your experience with our platform.
        </p>
      </div>
    </div>
  );
}
