import React, { useState, useEffect, lazy, Suspense } from "react";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { VisionSection } from "./components/VisionSection";
import { Footer } from "./components/Footer";

const ServiceModal = lazy(() => import("./components/ServiceModal"));
const AuthModal = lazy(() => import("./components/AuthModal"));

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      <Navigation isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <HeroSection isVisible={isVisible} />
      <ServicesSection 
        setActiveService={setActiveService} 
        setIsModalOpen={setIsModalOpen}
      />
      <VisionSection setIsModalOpen={setIsModalOpen} />
      <Footer />

      <Suspense fallback={<div className="fixed inset-0 bg-black/50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00ff00]"></div>
      </div>}>
        {activeService !== null && (
          <ServiceModal
            activeService={activeService}
            setActiveService={setActiveService}
            setIsModalOpen={setIsModalOpen}
          />
        )}
        {isModalOpen && (
          <AuthModal setIsModalOpen={setIsModalOpen} />
        )}
      </Suspense>
    </div>
  );
}

export default App;