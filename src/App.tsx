import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import {
  Brain,
  Shield,
  Code2,
  ChevronRight,
  Sparkles,
  X,
  Sun,
  Moon,
  Bot,
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
  MessageCircle,
  Store
} from "lucide-react";
import { Auth } from "./components/Auth";
import { Pricing } from "./components/Pricing";
import { Dashboard } from './components/Dashboard';
import { useAuth } from "./hooks/useAuth";
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import CookiePolicy from './pages/CookiePolicy';
import SecurityPolicy from './pages/SecurityPolicy';
import AffiliateLandingPage from './pages/AffiliateLandingPage';
import { ROUTES, SOCIAL_LINKS } from './config/constants';
import { ModalPage } from './components/ui/Modal';

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isModalRoute = [ROUTES.about, ROUTES.privacy, ROUTES.terms, ROUTES.cookies, ROUTES.security].includes(location.pathname);

  if (isModalRoute) {
    return <ModalPage>{children}</ModalPage>;
  }

  return <>{children}</>;
};

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const { currentUser } = useAuth();

  const services = [
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
      icon: <Code2 className="w-8 h-8 text-[#00ff00] group-hover:animate-pulse-scale" />,
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
    {
      icon: <Store className="w-8 h-8 text-[#00ff00]" />,
      title: "Affiliate Landing Pages",
      description: "High-converting affiliate landing pages that seamlessly integrate partner products while maintaining your brand identity.",
      details: {
        fullDescription: 
          "Create professional affiliate landing pages with domain services, hosting solutions, and e-commerce integrations. Our pages are designed to maximize conversions while maintaining brand consistency.",
        features: [
          "Custom domain integration",
          "Responsive design templates",
          "E-commerce platform setup",
          "Analytics dashboard",
          "A/B testing capabilities"
        ],
        benefits: [
          "Increased conversion rates",
          "Professional brand presence",
          "Seamless user experience",
          "Performance tracking",
          "Revenue optimization"
        ]
      },
      link: ROUTES.affiliates
    }
  ];

  useEffect(() => {
    setIsVisible(true);

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  if (showDashboard && currentUser) {
    return <Dashboard />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 dark:bg-black/10 backdrop-blur-md border-b border-[#00ff00]/20">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="text-2xl font-bold">MIllI</Link>
              
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/about" className="hover:text-[#00ff00]">About</Link>
                <Link to="/pricing" className="hover:text-[#00ff00]">Pricing</Link>
                {currentUser ? (
                  <button 
                    onClick={() => setShowDashboard(true)}
                    className="bg-[#00ff00] text-black px-6 py-2 rounded-full hover:bg-[#00cc00]"
                  >
                    Dashboard
                  </button>
                ) : (
                  <Auth />
                )}
              </div>

              <button 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <div className="space-y-2">
                    <div className="w-6 h-0.5 bg-current"></div>
                    <div className="w-6 h-0.5 bg-current"></div>
                    <div className="w-6 h-0.5 bg-current"></div>
                  </div>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/10 dark:bg-black/10 backdrop-blur-md">
              <div className="container mx-auto px-6 py-4">
                <div className="flex flex-col space-y-4">
                  <Link to="/about" className="hover:text-[#00ff00]">About</Link>
                  <Link to="/pricing" className="hover:text-[#00ff00]">Pricing</Link>
                  {currentUser ? (
                    <button 
                      onClick={() => setShowDashboard(true)}
                      className="bg-[#00ff00] text-black px-6 py-2 rounded-full hover:bg-[#00cc00]"
                    >
                      Dashboard
                    </button>
                  ) : (
                    <Auth />
                  )}
                </div>
              </div>
            </div>
          )}
        </nav>

        <Routes>
          <Route path={ROUTES.home} element={
            <div className="pt-20">
              {/* Services Grid */}
              <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="group relative bg-white/10 dark:bg-black/10 backdrop-blur-md border border-[#00ff00]/20 rounded-xl p-6 hover:bg-[#00ff00]/5 transition-all duration-300"
                      onClick={() => service.link ? null : setActiveService(index)}
                    >
                      {service.link ? (
                        <Link to={service.link} className="block">
                          <div className="flex items-center mb-4">
                            {service.icon}
                            <h3 className="text-xl font-bold ml-3">{service.title}</h3>
                          </div>
                          <p className="text-gray-400">{service.description}</p>
                        </Link>
                      ) : (
                        <>
                          <div className="flex items-center mb-4">
                            {service.icon}
                            <h3 className="text-xl font-bold ml-3">{service.title}</h3>
                          </div>
                          <p className="text-gray-400">{service.description}</p>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Section */}
              <Pricing />
            </div>
          } />
          <Route path={ROUTES.about} element={
            <PageWrapper>
              <AboutUs />
            </PageWrapper>
          } />
          <Route path={ROUTES.privacy} element={
            <PageWrapper>
              <PrivacyPolicy />
            </PageWrapper>
          } />
          <Route path={ROUTES.terms} element={
            <PageWrapper>
              <Terms />
            </PageWrapper>
          } />
          <Route path={ROUTES.cookies} element={
            <PageWrapper>
              <CookiePolicy />
            </PageWrapper>
          } />
          <Route path={ROUTES.security} element={
            <PageWrapper>
              <SecurityPolicy />
            </PageWrapper>
          } />
          <Route path={ROUTES.affiliates} element={
            <AffiliateLandingPage />
          } />
        </Routes>

        {/* Footer */}
        <footer className="bg-white/5 dark:bg-black/5 backdrop-blur-md border-t border-[#00ff00]/20 py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">MIllI</h3>
                <p className="text-gray-400">AI Beyond Human Limits</p>
              </div>
              <div>
                <h4 className="font-bold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><Link to="/about" className="text-gray-400 hover:text-[#00ff00]">About</Link></li>
                  <li><Link to="/pricing" className="text-gray-400 hover:text-[#00ff00]">Pricing</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><Link to="/privacy" className="text-gray-400 hover:text-[#00ff00]">Privacy Policy</Link></li>
                  <li><Link to="/terms" className="text-gray-400 hover:text-[#00ff00]">Terms of Service</Link></li>
                  <li><Link to="/cookies" className="text-gray-400 hover:text-[#00ff00]">Cookie Policy</Link></li>
                  <li><Link to="/security" className="text-gray-400 hover:text-[#00ff00]">Security</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Connect</h4>
                <div className="flex space-x-4">
                  <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00ff00]">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00ff00]">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00ff00]">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00ff00]">
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;