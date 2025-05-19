import React from 'react';
import { ChevronRight } from 'lucide-react';

interface VisionSectionProps {
  setIsModalOpen: (isOpen: boolean) => void;
}

export const VisionSection: React.FC<VisionSectionProps> = ({ setIsModalOpen }) => {
  return (
    <section id="vision" className="py-20 bg-gradient-to-b from-[#e6ffe6]/20 dark:from-[#003300]/20 to-white dark:to-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 text-center">
          Our Trajectory
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-gray-50 to-[#e6ffe6] dark:from-black dark:to-[#001a00] p-8 rounded-xl border border-[#00ff00]/20">
            <h3 className="text-2xl font-bold mb-6 text-[#00ff00]">Mission</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              To pioneer cutting-edge technologies that challenge the norm and inspire limitless innovation.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center space-x-2 text-[#00ff00] hover:text-[#00cc00] transition-colors"
            >
              <span>Join Our Mission</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-[#e6ffe6] dark:from-black dark:to-[#001a00] p-8 rounded-xl border border-[#00ff00]/20">
            <h3 className="text-2xl font-bold mb-6 text-[#00ff00]">Vision</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              To become the leading force in futuristic technology, empowering a world where imagination and reality converge.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center space-x-2 text-[#00ff00] hover:text-[#00cc00] transition-colors"
            >
              <span>Shape the Future</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};