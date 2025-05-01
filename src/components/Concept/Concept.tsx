'use client';

import React, { useMemo } from 'react';
import { colors } from '@/styles/colors';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 10,
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    },
  },
  hover: {
    y: -2,
    transition: {
      duration: 0.15,
      ease: "easeInOut"
    },
  },
};

const Concept: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const conceptColors = useMemo(() => ({
    default: {
      bg: colors.default.background.light,
      text: colors.default.text.secondary,
      cardBg: colors.default.background.main,
      accent: colors.default.accent.main,
    },
    dark: {
      bg: colors.dark.background.dark,
      text: colors.dark.text.primary,
      cardBg: colors.dark.background.main,
      accent: colors.dark.accent.main,
    },
    terracotta: {
      bg: colors.terracotta.background.light,
      text: colors.terracotta.text.secondary,
      cardBg: colors.terracotta.background.main,
      accent: colors.terracotta.accent.main,
    }
  }), []);

  const concepts = useMemo(() => [
    {
      key: 'location',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      key: 'comfort',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      key: 'community',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      key: 'culture',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    }
  ], []);

  const currentColors = useMemo(() => conceptColors[theme], [theme, conceptColors]);

  return (
    <section 
      id="concept" 
      className="py-16 sm:py-24 md:py-32"
      style={{ backgroundColor: 'transparent' }}
    >
      <div className="container mx-auto px-3 sm:px-4">
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {concepts.map((item) => (
            <motion.div 
              key={item.key}
              variants={cardVariants}
              whileHover="hover"
              className="group p-5 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl text-center flex flex-col h-full bg-white/10 backdrop-blur-md"
              style={{ 
                borderBottom: `3px solid ${currentColors.accent}`
              }}
            >
              <div 
                className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mx-auto mb-4 sm:mb-6 rounded-full flex items-center justify-center"
                style={{ 
                  color: currentColors.accent,
                  backgroundColor: currentColors.bg,
                  boxShadow: `0 0 0 4px ${currentColors.accent}`
                }}
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.2 }}
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                >
                  {item.icon}
                </motion.div>
              </div>
              
              <h3 
                className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4"
                style={{ color: currentColors.text }}
              >
                {t(`concept.items.${item.key}.title`)}
              </h3>
              <p 
                className="text-sm sm:text-base flex-grow mb-4 sm:mb-6"
                style={{ color: currentColors.text }}
              >
                {t(`concept.items.${item.key}.description`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Concept; 