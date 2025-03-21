'use client';

import React from 'react';
import { colors } from '@/styles/colors';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Concept: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const conceptColors = {
    default: {
      bg: colors.default.background.light,
      text: colors.default.text.secondary,
      cardBg: colors.default.background.main,
      accent: colors.default.accent.main,
    },
    dark: {
      bg: colors.dark.background.light,
      text: colors.dark.text.secondary,
      cardBg: colors.dark.background.main,
      accent: colors.dark.accent.main,
    },
    terracotta: {
      bg: colors.terracotta.background.light,
      text: colors.terracotta.text.secondary,
      cardBg: colors.terracotta.background.main,
      accent: colors.terracotta.accent.main,
    }
  };

  const concepts = [
    {
      key: 'location',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path
            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
            fill="currentColor"
          />
        </svg>
      ),
      image: '/images/concept/location.webp',
    },
    {
      key: 'capsules',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path
            d="M20 12c0-1.1-.9-2-2-2V7c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33L6 19h1l.67-2h8.67l.66 2h1l.67-2H20v-5zm-4-2H8V7h8v3z"
            fill="currentColor"
          />
        </svg>
      ),
      image: '/images/concept/capsules.webp',
    },
    {
      key: 'kitchen',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path
            d="M18 2.01L6 2c-1.1 0-2 .89-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99zM18 20H6v-9.02h12V20zm0-11H6V4h12v5zM8 5h2v3H8zm0 7h2v5H8z"
            fill="currentColor"
          />
        </svg>
      ),
      image: '/images/kitchen-people.webp',
    },
    {
      key: 'breakfast',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path
            d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"
            fill="currentColor"
          />
        </svg>
      ),
      image: '/images/concept/breakfast.webp',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        duration: 0.6,
        ease: "easeOut"
      },
    },
    hover: {
      scale: 1.03,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      },
    },
  };

  return (
    <section 
      id="concept" 
      className="py-16 sm:py-24 md:py-32 relative overflow-hidden"
      style={{ 
        backdropFilter: 'blur(10px)',
        background: theme === 'dark' ? 'rgba(26, 26, 26, 0.9)' : 'transparent'
      }}
    >
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${conceptColors[theme].accent}20 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />
      <div className="container mx-auto px-3 sm:px-4 relative">
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-8"
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
              className="relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-md shadow-lg group flex flex-col h-full"
              style={{ 
                backgroundColor: conceptColors[theme].cardBg,
                borderBottom: `3px solid ${conceptColors[theme].accent}` 
              }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 -mr-12 -mt-12 rounded-full opacity-10"
                style={{ backgroundColor: conceptColors[theme].accent }}
              />
              
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={t(`concept.${item.key}.title`)}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="p-3 sm:p-6 flex flex-col flex-grow">
                <div 
                  className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-2 sm:mb-4 rounded-full flex items-center justify-center transition-all duration-300 relative z-10 group-hover:scale-110 group-hover:shadow-lg"
                  style={{ 
                    backgroundColor: conceptColors[theme].accent,
                    color: '#ffffff',
                    boxShadow: `0 0 0 4px ${conceptColors[theme].accent}20`
                  }}
                >
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 10 }}
                    transition={{ duration: 0.3 }}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  >
                    {item.icon}
                  </motion.div>
                </div>
                <h3 
                  className="text-sm sm:text-lg font-medium text-center mb-1 sm:mb-3 transition-colors duration-300 group-hover:text-[1.15rem]"
                  style={{ color: conceptColors[theme].accent }}
                >
                  {t(`concept.${item.key}.title`)}
                </h3>
                <p 
                  className="text-xs sm:text-sm text-center leading-relaxed flex-grow"
                  style={{ color: conceptColors[theme].text }}
                >
                  {t(`concept.${item.key}.description`)}
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-3 sm:mt-4 py-2 sm:py-2 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 self-center"
                  style={{ 
                    backgroundColor: conceptColors[theme].accent + '20',
                    color: conceptColors[theme].accent,
                    border: `1px solid ${conceptColors[theme].accent}40`
                  }}
                >
                  {t('concept.learnMore')}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Concept; 