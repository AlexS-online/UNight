'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';
import { colors } from '@/styles/colors';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();

  const toggleTheme = () => {
    const themes: Array<'default' | 'terracotta' | 'dark'> = ['default', 'terracotta', 'dark'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  const themeColors = {
    default: {
      bg: 'rgba(0, 0, 255, 0.1)',
      dot: '#0000FF',
    },
    terracotta: {
      bg: 'rgba(255, 255, 255, 0.2)',
      dot: '#FFFFFF',
    },
    dark: {
      bg: 'rgba(42, 42, 42, 0.3)',
      dot: '#FFFFFF',
    },
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="w-8 h-8 flex items-center justify-center"
      whileTap={{ scale: 0.95 }}
      aria-label={t('themes.switchTheme')}
      title={t(`themes.${theme}`)}
    >
      <div
        className="w-4 h-4 rounded-full"
        style={{
          border: `1px solid ${themeColors[theme].dot}`,
          backgroundColor: themeColors[theme].bg,
        }}
      >
        <div
          className="w-2 h-2 rounded-full m-0.5"
          style={{ backgroundColor: themeColors[theme].dot }}
        />
      </div>
    </motion.button>
  );
};

export default ThemeToggle; 