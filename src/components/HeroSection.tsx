import React from 'react';
import { ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  isVisible: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ isVisible }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#00ff00]/10 to-[#003300]/20 dark:from-[#00ff00]/20 dark:to-[#003300]/30 z-0" />
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] 
        bg-cover bg-center opacity-10 dark:opacity-20 z-[-1]"
      />

      <div className="relative container mx-auto px-6 py-24 md:py-32">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#00ff00] to-[#00cc00] bg-clip-text text-transparent mb-8">
            Straight Outta Area 51
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
            Advanced AI solutions beyond conventional boundaries. Welcome to
            the next evolution of technology.
          </p>
          <a
            href="tel:+263786838849"
            className="group flex items-center space-x-2 bg-[#00ff00] hover:bg-[#00cc00] text-black font-bold px-8 py-3 rounded-full transition-all w-fit"
          >
            <span>Call Us Now</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};