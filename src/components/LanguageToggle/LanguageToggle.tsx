'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';

const LanguageToggle = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme } = useTheme();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'mne' : 'en');
  };

  const toggleColors = {
    default: {
      bg: 'rgba(0, 0, 255, 0.05)',
      text: '#0000FF',
      hover: 'rgba(0, 0, 255, 0.1)',
    },
    dark: {
      bg: 'rgba(208, 90, 69, 0.05)',
      text: '#D05A45',
      hover: 'rgba(208, 90, 69, 0.1)',
    },
    terracotta: {
      bg: 'rgba(208, 90, 69, 0.05)',
      text: '#D05A45',
      hover: 'rgba(208, 90, 69, 0.1)',
    },
  };

  const currentColors = toggleColors[theme];

  return (
    <motion.button
      onClick={toggleLanguage}
      className="px-4 py-1.5 text-sm font-medium rounded-full"
      style={{
        backgroundColor: currentColors.bg,
        color: currentColors.text,
      }}
      whileHover={{
        backgroundColor: currentColors.hover,
      }}
      whileTap={{ scale: 0.95 }}
    >
      {language === 'en' ? 'EN' : 'MNE'}
    </motion.button>
  );
};

export default LanguageToggle; 