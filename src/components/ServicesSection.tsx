import React from 'react';
import { Brain, Code, Shield, Bot } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  details?: {
    fullDescription: string;
    features: string[];
    benefits: string[];
  };
}

interface ServicesSectionProps {
  setActiveService: (index: number | null) => void;
  setIsModalOpen: (isOpen: boolean) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ setActiveService, setIsModalOpen }) => {
  const coreServices: Service[] = [
    {
      icon: <Brain className="w-8 h-8 text-[#00ff00]" />,
      title: "AI Model Design",
      description:
        "Extraterrestrial intelligence solutions that evolve beyond human limitations",
      details: {
        fullDescription:
          "Our AI Model Design service leverages cutting-edge machine learning algorithms and neural networks to create sophisticated AI solutions that push the boundaries of what's possible.",
        features: [
          "Custom machine learning algorithms",
          "Natural language processing",
          "Computer vision systems",
          "Predictive analytics",
          "Neural network architecture design",
        ],
        benefits: [
          "Increased operational efficiency",
          "Enhanced decision-making capabilities",
          "Automated process optimization",
          "Scalable AI solutions",
          "Future-proof technology integration",
        ],
      },
    },
    {
      icon: <Code className="w-8 h-8 text-[#00ff00]" />,
      title: "Systems Architecture",
      description: "Infrastructure from the future, built for the present",
      details: {
        fullDescription:
          "Our Systems Architecture service provides robust, scalable, and future-proof infrastructure solutions designed to handle the most demanding technological challenges.",
        features: [
          "Microservices architecture",
          "Cloud-native solutions",
          "Distributed systems design",
          "High-availability infrastructure",
          "Security-first architecture",
        ],
        benefits: [
          "Improved system reliability",
          "Enhanced scalability",
          "Reduced operational costs",
          "Better resource utilization",
          "Faster time-to-market",
        ],
      },
    },
    {
      icon: <Shield className="w-8 h-8 text-[#00ff00]" />,
      title: "Advanced Cybersecurity",
      description: "Next-gen protection for modern threats",
      details: {
        fullDescription:
          "Our Advanced Cybersecurity solutions combine AI-driven threat detection with zero-trust architecture to protect against sophisticated cyber attacks, ransomware, and emerging threats in the cloud-native era.",
        features: [
          "Zero-Trust Architecture Implementation",
          "AI-Powered Threat Detection",
          "Cloud Security Posture Management",
          "Ransomware Protection & Recovery",
          "Supply Chain Security Assessment",
        ],
        benefits: [
          "Real-time threat prevention",
          "Reduced attack surface",
          "Automated incident response",
          "Regulatory compliance (GDPR, CCPA)",
          "24/7 Security monitoring",
        ],
      },
    },
    {
      icon: <Bot className="w-8 h-8 text-[#00ff00]" />,
      title: "Agentive AI & Automation",
      description:
        "Autonomous agents, workflow automation, and chatbot integration.",
      details: {
        fullDescription:
          "We build and integrate autonomous agents, automate workflows, and develop custom chatbots to streamline your business processes and enhance efficiency.",
        features: [
          "Autonomous Agent Development",
          "Workflow Automation",
          "Natural Language to SQL",
          "Complex Data Pipelines",
          "Self-Adaptive Systems",
        ],
        benefits: [
          "Increased efficiency and productivity",
          "Reduced operational costs",
          "Improved data management",
          "Enhanced decision-making",
          "Scalable and adaptable solutions",
        ],
      },
    },
  ];

  const additionalServices: Service[] = [
    {
      icon: <Bot className="w-8 h-8 text-[#00ff00]" />,
      title: "Autonomous AI Agent Development",
      description:
        "Craft custom, vertical-specialized AI agents (chatbots, data-pipeline bots, reporting assistants) tailored to each client's workflow.",
    },
    {
      icon: <Bot className="w-8 h-8 text-[#00ff00]" />,
      title: "Business Process Automation (RPA)",
      description:
        "Automate repetitive tasks and end-to-end workflows—everything from lead routing and email follow-ups to inventory updates and scheduling.",
    },
    {
      icon: <Bot className="w-8 h-8 text-[#00ff00]" />,
      title: "Data Analytics & Reporting",
      description:
        "Ingest raw data (sheets, databases, APIs), apply AI-driven analysis, and deliver visual dashboards or PDF reports with actionable insights.",
    },
    {
      icon: <Code className="w-8 h-8 text-[#00ff00]" />,
      title: "Custom Web & Mobile App Development",
      description:
        "Design, build, and deploy full-stack applications (e-commerce storefronts, client portals) using AI-accelerated coding agents and modern frameworks.",
    },
    {
      icon: <Brain className="w-8 h-8 text-[#00ff00]" />,
      title: "AI Consulting & Support",
      description:
        "End-to-end AI strategy, implementation roadmaps, training workshops, and on-going maintenance to ensure your automation scales smoothly.",
    },
  ];

  const upgradedServiceOfferings = [
    "Agentive Web App Builder",
    "Automated CRM & Lead Engine",
    "Self-Service Booking & Client Portals",
    "AI Invoicing & Payment Automation",
    "Intelligent Messaging & Support Agent",
    "Custom AI Workflows & Integrations",
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-white dark:from-black to-[#e6ffe6]/20 dark:to-[#003300]/20"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 text-center">
          Classified Operations
        </h2>

        <h3 className="text-2xl font-bold mb-8 text-center">Core Services</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreServices.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-[#e6ffe6] dark:from-black dark:to-[#001a00] p-8 rounded-xl hover:shadow-2xl hover:shadow-[#00ff00]/20 transition-all duration-300 border border-[#00ff00]/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff00]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity" />
              <div className="relative">
                {service.icon}
                <h3 className="text-xl font-bold mt-4 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
                <button
                  onClick={() => setActiveService(index)}
                  className="mt-6 flex items-center text-[#00ff00] group-hover:text-[#00cc00]"
                >
                  <span>Learn More</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold mt-16 mb-8 text-center">Additional Services</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {additionalServices.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-[#e6ffe6] dark:from-black dark:to-[#001a00] p-8 rounded-xl hover:shadow-2xl hover:shadow-[#00ff00]/20 transition-all duration-300 border border-[#00ff00]/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff00]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity" />
              <div className="relative">
                {service.icon}
                <h3 className="text-xl font-bold mt-4 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="mt-6 flex items-center text-[#00ff00] group-hover:text-[#00cc00]"
                >
                  <span>Request Service</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold mt-16 mb-8 text-center">Upgraded Service Offerings (Coming Soon)</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upgradedServiceOfferings.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gray-100 dark:bg-gray-900 p-8 rounded-xl border border-gray-500/20 opacity-50"
            >
              <div className="relative">
                <h3 className="text-xl font-bold mt-4 mb-2">
                  {service}
                </h3>
                <p className="text-gray-400">Coming Soon</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};