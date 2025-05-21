
import React from 'react';

export default function AboutUs() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-[#00ff00]">About MIllI</h1>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          MIllI (Milli Intelligent Technologies) is at the forefront of AI innovation, 
          pushing the boundaries of what's possible in artificial intelligence and automation.
          Founded with a vision to revolutionize how businesses interact with AI, we've 
          grown into a leading provider of advanced AI solutions.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 mt-8">Our Mission</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          To democratize access to cutting-edge AI technology and empower businesses 
          of all sizes to harness the power of artificial intelligence.
        </p>

        <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          To create a future where AI seamlessly integrates with human intelligence, 
          enhancing capabilities and driving innovation across industries.
        </p>

        <h2 className="text-2xl font-bold mb-4">Core Values</h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-300">
          <li>Innovation First</li>
          <li>Ethical AI Development</li>
          <li>Customer Success</li>
          <li>Continuous Learning</li>
          <li>Global Impact</li>
        </ul>
      </div>
    </div>
  );
}
