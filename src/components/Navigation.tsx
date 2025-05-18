import React from 'react';
import { Sun, Moon, ChevronRight } from 'lucide-react';

interface NavigationProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <nav className="relative z-10 container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img 
            src="/GlaCK0N Transparent symbol.png"
            alt="MIllI Logo"
            className="w-12 h-12 object-contain"
          />
          <span className="text-xl font-bold tracking-wider">MIllI</span>
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#services" className="hover:text-[#00ff00] transition-colors">
            Services
          </a>
          <a href="#vision" className="hover:text-[#00ff00] transition-colors">
            Vision
          </a>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-[#00ff00]" />
            ) : (
              <Moon className="w-5 h-5 text-[#00ff00]" />
            )}
          </button>
          <a
            href="tel:+263786838849"
            className="inline-flex items-center space-x-2 bg-[#00ff00] text-black px-4 py-2 rounded-full hover:bg-[#00cc00] transition-colors"
          >
            <span>Call Now</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </nav>
  );
};