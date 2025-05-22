import React from 'react';
import { Twitter, Linkedin, Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../../config/constants';

export const SocialIcons = () => {
  const icons = [
    { Icon: Twitter, href: SOCIAL_LINKS.twitter },
    { Icon: Linkedin, href: SOCIAL_LINKS.linkedin },
    { Icon: Instagram, href: SOCIAL_LINKS.instagram },
    { Icon: Facebook, href: SOCIAL_LINKS.facebook },
  ];

  return (
    <div className="flex space-x-4">
      {icons.map(({ Icon, href }, index) => (
        <motion.a
          key={index}
          href={href}
          className="text-gray-400 hover:text-[#00ff00] transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Icon className="w-5 h-5" />
        </motion.a>
      ))}
    </div>
  );
};