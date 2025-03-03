'use client';

import React from 'react';
import { colors } from '@/styles/colors';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';

const Concept: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const conceptColors = {
    default: {
      bg: colors.default.background.light,
      title: colors.default.primary.main,
      text: colors.default.text.secondary,
      cardBg: colors.default.background.main,
      icon: colors.default.primary.main,
      accent: colors.default.accent.main,
      decorative: colors.default.accent.main + '20',
    },
    olive: {
      bg: colors.olive.background.light,
      title: colors.olive.primary.dark,
      text: colors.olive.text.secondary,
      cardBg: colors.olive.background.main,
      icon: colors.olive.primary.dark,
      accent: colors.olive.accent.main,
      decorative: colors.olive.accent.main + '20',
    },
    terracotta: {
      bg: colors.terracotta.background.light,
      title: colors.terracotta.primary.dark,
      text: colors.terracotta.text.secondary,
      cardBg: colors.terracotta.background.main,
      icon: colors.terracotta.primary.dark,
      accent: colors.terracotta.accent.main,
      decorative: colors.terracotta.accent.main + '20',
    }
  };

  const concepts = [
    {
      key: 'community',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5c.83-1.19 2.23-2 3.5-2h4c1.27 0 2.67.81 3.5 2 .83-1.19 1.5-2.54 1.5-4 0-3.31-2.69-6-6-6s-6 2.69-6 6c0 1.46.67 2.81 1.5 4zm5.5-7c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      key: 'comfort',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
          <path
            d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V7H1v10h22v-6c0-2.21-1.79-4-4-4zm-2 8h-8v-5h8v5z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      key: 'culture',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14h2v7h-2zm0 8h2v2h-2z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section 
      id="concept" 
      className="py-32 relative overflow-hidden"
      style={{ backgroundColor: conceptColors[theme].bg }}
    >
      {/* Декоративные элементы */}
      <div 
        className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-10"
        style={{ backgroundColor: conceptColors[theme].accent }}
      />
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10"
        style={{ backgroundColor: conceptColors[theme].accent }}
      />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ color: conceptColors[theme].title }}
          >
            {t('concept.title')}
          </h2>
          <p 
            className="text-xl max-w-2xl mx-auto"
            style={{ color: conceptColors[theme].text }}
          >
            {t('concept.subtitle')}
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {concepts.map((item) => (
            <motion.div 
              key={item.key}
              variants={cardVariants}
              whileHover="hover"
              className="relative p-8 rounded-2xl"
              style={{ backgroundColor: conceptColors[theme].cardBg }}
            >
              <div 
                className="absolute top-0 left-0 w-2 h-full rounded-l-2xl"
                style={{ backgroundColor: conceptColors[theme].accent }}
              />
              <div className="mb-8" style={{ color: conceptColors[theme].icon }}>
                {item.icon}
              </div>
              <h3 
                className="text-2xl font-bold mb-4"
                style={{ color: conceptColors[theme].title }}
              >
                {t(`concept.${item.key}.title`)}
              </h3>
              <p style={{ color: conceptColors[theme].text }}>
                {t(`concept.${item.key}.description`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Concept; 