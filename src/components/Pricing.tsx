import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const PricingCard = ({ 
  tier, 
  price, 
  yearlyPrice, 
  features, 
  isPopular, 
  description, 
  isYearly 
}: {
  tier: string;
  price: number;
  yearlyPrice: number;
  features: string[];
  isPopular?: boolean;
  description: string;
  isYearly: boolean;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="group relative"
    >
      <div 
        className="absolute -inset-[1px] bg-gradient-to-r from-[#00ff00] via-[#00cc00] to-[#00ff00] rounded-2xl opacity-0 
        group-hover:opacity-100 blur transition-all duration-500 animate-gradient-x"
        style={{
          background: 'linear-gradient(90deg, #00ff00, #00cc00, #00ff00)',
          backgroundSize: '200% 100%',
          animation: 'gradient 3s linear infinite'
        }}
      />
      
      <div className={`relative p-6 rounded-2xl backdrop-blur-md ${
        isPopular 
          ? 'bg-white/10 dark:bg-black/10' 
          : 'bg-white/5 dark:bg-black/5'
      } transition-all duration-500 group-hover:transform group-hover:scale-[1.02] group-hover:bg-black/20`}>
        {isPopular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-[#00ff00] text-black px-4 py-1 rounded-full text-sm font-bold">
              Most Popular
            </span>
          </div>
        )}

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">{tier}</h3>
          <p className="text-gray-400 mb-4">{description}</p>
          <div className="flex items-center justify-center mb-4">
            <span className="text-4xl font-bold">$</span>
            <motion.span 
              key={isYearly ? yearlyPrice : price}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl font-bold"
            >
              {isYearly ? yearlyPrice : price}
            </motion.span>
            <span className="text-gray-400 ml-2">/mo</span>
          </div>
          {isYearly && (
            <p className="text-[#00ff00] text-sm">Save 20% with annual billing</p>
          )}
        </div>

        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="w-5 h-5 text-[#00ff00] group-hover:text-black transition-colors duration-300 mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button className="w-full py-3 rounded-full bg-[#00ff00] text-black font-bold hover:bg-[#00cc00] 
          transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-[#00ff00]/20">
          Get Started
        </button>
      </div>
    </motion.div>
  );
};

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [activeTab, setActiveTab] = useState('pricing');

  const pricingTiers = [
    {
      tier: 'Ignite',
      price: 99,
      yearlyPrice: 79,
      description: 'Perfect for startups and small teams',
      features: [
        'Basic AI model customization',
        '5 concurrent projects',
        '24/7 priority support',
        'API access',
        'Basic analytics'
      ]
    },
    {
      tier: 'Evolve',
      price: 199,
      yearlyPrice: 159,
      description: 'Ideal for growing businesses',
      features: [
        'Advanced AI model customization',
        'Unlimited projects',
        'Priority support & training',
        'Full API access',
        'Advanced analytics & reporting'
      ],
      isPopular: true
    },
    {
      tier: 'Ascend',
      price: 399,
      yearlyPrice: 319,
      description: 'For enterprises and large teams',
      features: [
        'Custom AI model development',
        'Unlimited everything',
        'Dedicated support team',
        'White-label solutions',
        'Enterprise-grade security'
      ]
    }
  ];

  const faqs = [
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.'
    },
    {
      question: 'Can I switch plans later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required.'
    }
  ];

  return (
    <div className="min-h-screen py-20 backdrop-blur-md bg-gradient-to-b from-black/50 to-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Pricing for every stage of growth
          </motion.h1>
          <p className="text-gray-200 text-lg mb-8">
            Scale your AI capabilities with our flexible pricing options
          </p>

          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`${!isYearly ? 'text-[#00ff00]' : 'text-gray-400'}`}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                isYearly ? 'bg-[#00ff00]' : 'bg-gray-600'
              }`}
            >
              <motion.div
                className="absolute w-5 h-5 bg-white rounded-full top-1"
                animate={{ left: isYearly ? '1.75rem' : '0.25rem' }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`${isYearly ? 'text-[#00ff00]' : 'text-gray-400'}`}>Yearly</span>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <PricingCard
                key={index}
                {...tier}
                isYearly={isYearly}
              />
            ))}
          </div>

          <div className="mt-20">
            <div className="flex justify-center space-x-4 mb-8">
              <button
                onClick={() => setActiveTab('pricing')}
                className={`px-6 py-2 rounded-full ${
                  activeTab === 'pricing' 
                    ? 'bg-[#00ff00] text-black' 
                    : 'text-gray-400'
                }`}
              >
                Pricing
              </button>
              <button
                onClick={() => setActiveTab('enterprise')}
                className={`px-6 py-2 rounded-full ${
                  activeTab === 'enterprise' 
                    ? 'bg-[#00ff00] text-black' 
                    : 'text-gray-400'
                }`}
              >
                Enterprise
              </button>
            </div>

            {activeTab === 'enterprise' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl mx-auto"
              >
                <div className="bg-white/10 dark:bg-black/10 backdrop-blur-md border border-[#00ff00]/20 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4">Enterprise Solutions</h3>
                  <p className="text-gray-200 mb-6">
                    Custom solutions for large organizations with specific requirements
                  </p>
                  <div className="mb-8">
                    <h4 className="text-[#00ff00] font-bold mb-4">Suggested Solutions</h4>
                    <select className="w-full p-3 rounded-lg bg-white/60 dark:bg-black/60 backdrop-blur-md border border-[#00ff00]/20 text-gray-200 mb-6">
                      <option value="">Select a solution package</option>
                      <option value="ai_suite">AI Suite - Complete AI Integration</option>
                      <option value="security">Advanced Security Package</option>
                      <option value="automation">Enterprise Automation Suite</option>
                      <option value="custom">Custom Solution Package</option>
                    </select>
                  </div>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="w-full p-3 rounded-lg bg-white/5 dark:bg-black/5 backdrop-blur-md border border-[#00ff00]/20"
                    />
                    <input
                      type="email"
                      placeholder="Work Email"
                      className="w-full p-3 rounded-lg bg-white/5 dark:bg-black/5 backdrop-blur-md border border-[#00ff00]/20"
                    />
                    <textarea
                      placeholder="Tell us about your needs"
                      rows={4}
                      className="w-full p-3 rounded-lg bg-white/5 dark:bg-black/5 backdrop-blur-md border border-[#00ff00]/20"
                    />
                    <button
                      type="submit"
                      className="w-full py-3 rounded-full bg-[#00ff00] text-black font-bold hover:bg-[#00cc00] transition-colors"
                    >
                      Contact Sales
                    </button>
                  </form>
                </div>
              </motion.div>
            )}

            <div className="mt-20">
              <h3 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
              <div className="max-w-2xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 dark:bg-black/5 backdrop-blur-md border border-[#00ff00]/20 rounded-lg p-6"
                  >
                    <h4 className="text-lg font-bold mb-2">{faq.question}</h4>
                    <p className="text-gray-400">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};