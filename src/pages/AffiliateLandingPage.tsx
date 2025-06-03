import React from 'react';
import { Link } from 'react-router-dom';
import { Store, ExternalLink, CheckCircle } from 'lucide-react';
import { AFFILIATE_LINKS } from '../config/constants';

export default function AffiliateLandingPage() {
  const features = [
    'Custom domain integration',
    'Responsive design templates',
    'E-commerce platform setup',
    'Analytics dashboard',
    'A/B testing capabilities'
  ];

  const benefits = [
    'Increased conversion rates',
    'Professional brand presence',
    'Seamless user experience',
    'Performance tracking',
    'Revenue optimization'
  ];

  const affiliateLinks = [
    {
      title: 'Studios',
      description: 'Professional web development and design services',
      url: AFFILIATE_LINKS.studios
    },
    {
      title: 'DNW Studios',
      description: 'Creative digital solutions and web services',
      url: AFFILIATE_LINKS.dnwStudios
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00ff00]/5 to-transparent" />
        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col items-center text-center">
            <Store className="w-16 h-16 text-[#00ff00] mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Affiliate Landing Pages
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
              Create professional affiliate landing pages with domain services, hosting solutions, 
              and e-commerce integrations. Our pages are designed to maximize conversions while 
              maintaining brand consistency.
            </p>
            <Link
              to="#contact"
              className="bg-[#00ff00] text-black px-8 py-3 rounded-full font-bold hover:bg-[#00cc00] transition-colors"
            >
              Start Building Today
            </Link>
          </div>
        </div>
      </div>

      {/* Features & Benefits */}
      <div className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Features */}
            <div className="bg-white dark:bg-black rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#00ff00] mr-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-white dark:bg-black rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Benefits</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#00ff00] mr-3" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Affiliate Links */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Affiliate Partners</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {affiliateLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-black rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{link.title}</h3>
                  <ExternalLink className="w-5 h-5 text-[#00ff00] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-gray-600 dark:text-gray-300">{link.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Contact us today to learn more about our affiliate landing page solutions
              and how we can help grow your business.
            </p>
            <a
              href="mailto:contact@milli.com"
              className="inline-flex items-center bg-[#00ff00] text-black px-8 py-3 rounded-full font-bold hover:bg-[#00cc00] transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}