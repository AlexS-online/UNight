'use client';

import React from 'react';
import { colors } from '@/styles/colors';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import Logo from '@/components/Logo/Logo';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const heroColors = {
    default: {
      bg: colors.default.primary.main,
      text: colors.default.text.light,
      accent: colors.default.accent.main,
      button: {
        bg: colors.default.background.main,
        text: colors.default.primary.main,
        hover: colors.default.primary.light,
      },
      decorative: colors.default.accent.main + '20',
    },
    olive: {
      bg: colors.olive.primary.main,
      text: colors.olive.text.light,
      accent: colors.olive.accent.main,
      button: {
        bg: colors.olive.background.light,
        text: colors.olive.primary.main,
        hover: colors.olive.primary.light,
      },
      decorative: colors.olive.accent.main + '20',
    },
    terracotta: {
      bg: colors.terracotta.primary.main,
      text: colors.terracotta.text.light,
      accent: colors.terracotta.accent.main,
      button: {
        bg: colors.terracotta.background.light,
        text: colors.terracotta.primary.main,
        hover: colors.terracotta.primary.light,
      },
      decorative: colors.terracotta.accent.main + '20',
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: heroColors[theme].bg }}
    >
      {/* Декоративные элементы */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <div 
          className="absolute top-20 left-20 w-64 h-64 rounded-full"
          style={{ backgroundColor: heroColors[theme].decorative }}
        />
        <div 
          className="absolute bottom-40 right-20 w-96 h-96 rounded-full"
          style={{ backgroundColor: heroColors[theme].decorative }}
        />
      </motion.div>

      <motion.div 
        className="container mx-auto px-4 py-20 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-8"
          style={{ color: heroColors[theme].text }}
          variants={itemVariants}
        >
          {t('hero.welcome')}
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto"
          style={{ color: heroColors[theme].text }}
          variants={itemVariants}
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div 
          className="mb-12"
          variants={itemVariants}
        >
          <Logo size="large" variant="light" />
        </motion.div>

        <motion.button 
          className="px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
          style={{ 
            backgroundColor: heroColors[theme].button.bg,
            color: heroColors[theme].button.text,
          }}
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            backgroundColor: heroColors[theme].button.hover,
          }}
          whileTap={{ scale: 0.95 }}
        >
          {t('hero.bookNow')}
        </motion.button>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        style={{ color: heroColors[theme].text }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div 
          className="animate-bounce cursor-pointer"
          whileHover={{ scale: 1.2 }}
          onClick={() => {
            const conceptSection = document.getElementById('concept');
            conceptSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 