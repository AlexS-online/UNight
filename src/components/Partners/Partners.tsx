'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { colors } from '@/styles/colors';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';

interface ServiceColors {
  bg: string;
  title: string;
  text: string;
  cardBg: string;
  icon: string;
  hover: string;
}

interface ServiceColorsMap {
  default: ServiceColors;
  dark: ServiceColors;
  terracotta: ServiceColors;
}

interface Service {
  key: string;
  icon: React.ReactNode;
}

const Partners: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const serviceColors = useMemo<ServiceColorsMap>(() => ({
    default: {
      bg: colors.default.background.light,
      title: colors.default.primary.main,
      text: colors.default.text.secondary,
      cardBg: colors.default.background.main,
      icon: colors.default.primary.main,
      hover: colors.default.primary.light,
    },
    dark: {
      bg: colors.dark.background.light,
      title: colors.dark.primary.main,
      text: colors.dark.text.secondary,
      cardBg: colors.dark.background.main,
      icon: colors.dark.primary.main,
      hover: colors.dark.primary.light,
    },
    terracotta: {
      bg: colors.terracotta.background.light,
      title: colors.terracotta.primary.main,
      text: colors.terracotta.text.secondary,
      cardBg: colors.terracotta.background.main,
      icon: colors.terracotta.primary.main,
      hover: colors.terracotta.primary.light,
    }
  }), []);

  const services = useMemo<Service[]>(() => [
    {
      key: 'laundry',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
        </svg>
      )
    },
    {
      key: 'transfer',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      key: 'breakfast',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v18H3V3z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8m-4-4h8" />
        </svg>
      )
    },
    {
      key: 'excursions',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    },
    {
      key: 'rental',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      )
    }
  ], []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const currentColors = useMemo(() => serviceColors[theme], [theme, serviceColors]);

  return (
    <section 
      id="services" 
      className="py-16 sm:py-20 md:py-24 relative overflow-hidden"
      style={{ 
        backgroundColor: theme === 'dark' ? 'rgba(26, 26, 26, 0.9)' : currentColors.bg 
      }}
    >
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${currentColors.icon}20 1px, transparent 0)`,
          backgroundSize: '30px 30px',
        }}
      />
      
      <div className="container mx-auto px-3 sm:px-4 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 inline-block relative"
              style={{ color: currentColors.title }}
              variants={itemVariants}
            >
              {t('services.title')}
              <motion.div 
                className="absolute -bottom-2 sm:-bottom-3 left-1/2 h-1 rounded-full transform -translate-x-1/2"
                style={{ backgroundColor: currentColors.icon, width: '60%' }}
                initial={{ width: 0 }}
                whileInView={{ width: '60%' }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </motion.h2>
            
            <motion.p 
              className="text-base sm:text-lg max-w-2xl mx-auto"
              style={{ color: currentColors.text }}
              variants={itemVariants}
            >
              {t('services.subtitle')}
            </motion.p>
          </div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
            variants={containerVariants}
          >
            {services.map((service) => (
              <motion.div 
                key={service.key}
                className="group relative p-5 sm:p-6 md:p-8 rounded-2xl shadow-lg transition-all duration-200 hover:shadow-xl text-center flex flex-col h-full overflow-hidden"
                style={{ 
                  backgroundColor: currentColors.cardBg,
                  borderBottom: `3px solid ${currentColors.icon}` 
                }}
                variants={itemVariants}
                whileHover={{ scale: 1.01, y: -3 }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 -mr-12 -mt-12 rounded-full opacity-10"
                  style={{ backgroundColor: currentColors.icon }}
                />
                
                <div 
                  className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mx-auto mb-4 sm:mb-6 rounded-full flex items-center justify-center transition-all duration-200 relative z-10 group-hover:scale-105 group-hover:shadow-lg"
                  style={{ 
                    color: currentColors.icon,
                    backgroundColor: `${currentColors.icon}15`,
                    boxShadow: `0 0 0 4px ${currentColors.icon}10`
                  }}
                >
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 5 }}
                    transition={{ duration: 0.2 }}
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                  >
                    {service.icon}
                  </motion.div>
                </div>
                <h3 
                  className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 transition-all duration-200 group-hover:text-[1.15rem] sm:group-hover:text-[1.3rem]"
                  style={{ color: currentColors.title }}
                >
                  {t(`services.${service.key}.title`)}
                </h3>
                <p 
                  className="text-sm sm:text-base flex-grow mb-4 sm:mb-6"
                  style={{ color: currentColors.text }}
                >
                  {t(`services.${service.key}.description`)}
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-auto py-3 px-6 rounded-lg text-sm font-medium transition-all duration-200 self-center"
                  style={{ 
                    backgroundColor: currentColors.icon + '20',
                    color: currentColors.icon,
                    border: `1px solid ${currentColors.icon}40`
                  }}
                >
                  {t('services.learnMore')}
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners; 