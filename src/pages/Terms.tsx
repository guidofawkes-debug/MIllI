
import React from 'react';

export default function Terms() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-[#00ff00]">Terms of Service</h1>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          By using MIllI's services, you agree to these terms. Please read them carefully.
        </p>

        <h2 className="text-2xl font-bold mb-4">Service Usage</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Our services are provided "as is" and are subject to change. We reserve the right
          to modify or discontinue services at any time.
        </p>

        <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Users are responsible for maintaining the security of their accounts and
          complying with applicable laws and regulations.
        </p>
      </div>
    </div>
  );
}
