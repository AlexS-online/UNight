'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { colors } from '@/styles/colors';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';

const AdditionalServices: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const serviceColors = {
    default: {
      bg: colors.default.background.light,
      title: colors.default.primary.main,
      text: colors.default.text.secondary,
      cardBg: colors.default.background.main,
      icon: colors.default.primary.main,
      hover: colors.default.primary.light,
    },
    dark: {
      bg: colors.dark.background.dark,
      title: colors.dark.text.primary,
      text: colors.dark.text.secondary,
      cardBg: colors.dark.background.main,
      icon: colors.dark.accent.main,
      hover: colors.dark.accent.main,
    },
    terracotta: {
      bg: colors.terracotta.background.light,
      title: colors.terracotta.primary.main,
      text: colors.terracotta.text.secondary,
      cardBg: colors.terracotta.background.main,
      icon: colors.terracotta.primary.main,
      hover: colors.terracotta.primary.light,
    }
  };

  const services = [
    {
      key: 'laundry',
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
        </svg>
      )
    },
    {
      key: 'transfer',
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      key: 'breakfast',
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v18H3V3z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8m-4-4h8" />
        </svg>
      )
    },
    {
      key: 'excursions',
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    },
    {
      key: 'rental',
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      )
    }
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section 
      id="services" 
      className="py-16 sm:py-20 md:py-24 relative overflow-hidden backdrop-blur-md"
      style={{ 
        backgroundColor: theme === 'dark' ? 'rgba(18, 18, 18, 0.95)' : `${serviceColors[theme].bg}CC`
      }}
    >
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${serviceColors[theme].icon}20 1px, transparent 0)`,
          backgroundSize: '30px 30px',
        }}
      />
      
      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-3 md:mb-4"
            style={{ color: serviceColors[theme].title }}
          >
            {t('services.title')}
          </h2>
          <p 
            className="text-xs sm:text-sm md:text-base max-w-2xl mx-auto"
            style={{ color: serviceColors[theme].text }}
          >
            {t('services.subtitle')}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              variants={itemVariants}
              custom={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
              style={{ 
                backgroundColor: theme === 'dark' ? 'rgba(38, 38, 38, 0.95)' : `${serviceColors[theme].cardBg}E6`
              }}
            >
              <div className="p-3 sm:p-5 md:p-6 flex flex-col h-full">
                <div 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mx-auto mb-2 sm:mb-3 flex items-center justify-center transition-all duration-300 relative z-10 group-hover:scale-110 group-hover:shadow-lg"
                  style={{ 
                    backgroundColor: serviceColors[theme].icon,
                    color: '#ffffff',
                    boxShadow: `0 0 0 4px ${serviceColors[theme].icon}20`
                  }}
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6">
                    {service.icon}
                  </div>
                </div>
                <h3 
                  className="text-sm sm:text-lg font-medium text-center mb-1 sm:mb-2"
                  style={{ color: serviceColors[theme].title }}
                >
                  {t(`services.${service.key}.title`)}
                </h3>
                <p 
                  className="text-xs sm:text-sm text-center mb-3 sm:mb-4 flex-grow"
                  style={{ color: serviceColors[theme].text }}
                >
                  {t(`services.${service.key}.description`)}
                </p>
                <button
                  className="mt-auto text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-md transition-all duration-300 mx-auto flex items-center gap-1 sm:gap-2"
                  style={{ 
                    backgroundColor: `${serviceColors[theme].icon}10`,
                    color: serviceColors[theme].icon
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = serviceColors[theme].icon;
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = `${serviceColors[theme].icon}10`;
                    e.currentTarget.style.color = serviceColors[theme].icon;
                  }}
                >
                  {t('services.learnMore')}
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 5L21 12M21 12L14 19M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices; 