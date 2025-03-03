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
    console.log('Current theme:', theme);
    const themes: Array<'default' | 'olive' | 'terracotta'> = ['default', 'olive', 'terracotta'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const newTheme = themes[nextIndex];
    console.log('Switching to theme:', newTheme);
    setTheme(newTheme);
  };

  const buttonColors = {
    default: {
      bg: colors.default.primary.main,
      text: colors.default.text.light,
      hover: colors.default.primary.light,
    },
    olive: {
      bg: colors.olive.primary.main,
      text: colors.olive.text.light,
      hover: colors.olive.primary.light,
    },
    terracotta: {
      bg: colors.terracotta.primary.main,
      text: colors.terracotta.text.light,
      hover: colors.terracotta.primary.light,
    }
  };

  const themeIcons = {
    default: '🏠',
    olive: '🌿',
    terracotta: '🌅'
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-all duration-300"
      style={{
        backgroundColor: buttonColors[theme].bg,
        color: buttonColors[theme].text,
        width: '36px',
        height: '36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      whileHover={{
        backgroundColor: buttonColors[theme].hover,
      }}
      aria-label={t('themes.switchTheme')}
      title={t(`themes.${theme}`)}
    >
      {themeIcons[theme]}
    </motion.button>
  );
};

export default ThemeToggle; 