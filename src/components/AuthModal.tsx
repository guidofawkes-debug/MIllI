import React from 'react';
import { X } from 'lucide-react';
import { Auth } from './Auth';

interface AuthModalProps {
  setIsModalOpen: (isOpen: boolean) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ setIsModalOpen }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-[#001a00] rounded-xl max-w-md w-full">
        <div className="p-6 border-b border-[#00ff00]/20 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Access Portal</h2>
          <button
            onClick={() => setIsModalOpen(false)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-[#003300] rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6">
          <Auth />
        </div>
      </div>
    </div>
  );
};

export default AuthModal;