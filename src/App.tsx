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
        {/* Previous JSX content remains unchanged until Routes section */}

        <Routes>
          <Route path={ROUTES.home} element={
            <div>
              {/* Main content components */}
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
      </div>
    </Router>
  );
}

export default App;