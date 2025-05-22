import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
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
import { ROUTES, SOCIAL_LINKS } from './config/constants';
import { OptimizedImage } from './components/ui/OptimizedImage';
import { LegalCard } from './components/ui/LegalCard';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  // Preload hero image
  useEffect(() => {
    const preloadImage = new Image();
    preloadImage.src = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80';
  }, []);

  const services = [
    // ... services array remains exactly the same as in original
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
        {/* WhatsApp Bubble */}
        <a
          href="https://wa.me/263715338621"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-[#25D366] p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors z-50"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </a>

        {/* Hero Section */}
        <div className="relative overflow-hidden min-h-screen">
          <OptimizedImage
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Hero background"
            priority
            className="absolute inset-0"
            sizes="100vw"
          />
          
          {/* Rest of the component structure remains exactly the same until the footer */}

        {/* Footer */}
        <footer className="bg-white/5 dark:bg-black/5 border-t border-[#00ff00]/20 mt-20">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* First three footer sections remain exactly the same */}
              <div>
                <h3 className="font-bold mb-6">Legal</h3>
                <ul className="space-y-4">
                  <li>
                    <button
                      onClick={() => navigate(ROUTES.privacy)}
                      className="text-gray-400 hover:text-[#00ff00] transition-colors"
                    >
                      Privacy Policy
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => navigate(ROUTES.terms)}
                      className="text-gray-400 hover:text-[#00ff00] transition-colors"
                    >
                      Terms of Service
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => navigate(ROUTES.cookies)}
                      className="text-gray-400 hover:text-[#00ff00] transition-colors"
                    >
                      Cookie Policy
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => navigate(ROUTES.security)}
                      className="text-gray-400 hover:text-[#00ff00] transition-colors"
                    >
                      Security
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

        <Routes>
          <Route path={ROUTES.privacy} element={
            <LegalCard isOpen={true} onClose={() => navigate('/')} title="Privacy Policy">
              <PrivacyPolicy />
            </LegalCard>
          } />
          <Route path={ROUTES.terms} element={
            <LegalCard isOpen={true} onClose={() => navigate('/')} title="Terms of Service">
              <Terms />
            </LegalCard>
          } />
          <Route path={ROUTES.cookies} element={
            <LegalCard isOpen={true} onClose={() => navigate('/')} title="Cookie Policy">
              <CookiePolicy />
            </LegalCard>
          } />
          <Route path={ROUTES.security} element={
            <LegalCard isOpen={true} onClose={() => navigate('/')} title="Security">
              <SecurityPolicy />
            </LegalCard>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;