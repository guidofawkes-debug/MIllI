import React from 'react';
import { X } from 'lucide-react';

interface ServiceModalProps {
  activeService: number;
  setActiveService: (index: number | null) => void;
  setIsModalOpen: (isOpen: boolean) => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({
  activeService,
  setActiveService,
  setIsModalOpen,
}) => {
  const services = [
    {
      title: "AI Model Design",
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
    {
      title: "Systems Architecture",
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
    {
      title: "Advanced Cybersecurity",
      fullDescription:
        "Our Advanced Cybersecurity solutions combine AI-driven threat detection with zero-trust architecture to protect against sophisticated cyber attacks.",
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
        "Regulatory compliance",
        "24/7 Security monitoring",
      ],
    },
    {
      title: "Agentive AI & Automation",
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
  ];

  const handleClose = () => {
    setActiveService(null);
    setIsModalOpen(false);
  };

  const service = services[activeService];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-[#001a00] rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white dark:bg-[#001a00] p-6 border-b border-[#00ff00]/20 flex justify-between items-center">
          <h2 className="text-2xl font-bold">{service.title}</h2>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-[#003300] rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <div>
            <p className="text-gray-600 dark:text-gray-300">
              {service.fullDescription}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">Key Features</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              {service.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">Benefits</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              {service.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="sticky bottom-0 bg-white dark:bg-[#001a00] p-6 border-t border-[#00ff00]/20">
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-[#00ff00] text-black font-bold py-3 rounded-full hover:bg-[#00cc00] transition-colors"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;