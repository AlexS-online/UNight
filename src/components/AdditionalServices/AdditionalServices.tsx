'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { colors } from '@/styles/colors';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';

const AdditionalServices: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const servicesColors = useMemo(() => ({
    default: {
      bg: colors.default.background.main,
      text: colors.default.text.secondary,
      cardBg: colors.default.background.light,
      accent: colors.default.accent.main,
    },
    dark: {
      bg: colors.dark.background.dark,
      text: colors.dark.text.primary,
      cardBg: colors.dark.background.main,
      accent: colors.dark.accent.main,
    },
    terracotta: {
      bg: colors.terracotta.background.main,
      text: colors.terracotta.text.secondary,
      cardBg: colors.terracotta.background.light,
      accent: colors.terracotta.accent.main,
    }
  }), []);

  const services = useMemo(() => [
    {
      key: 'laundry',
      icon: '🧺',
      image: '/images/services/laundry.jpg'
    },
    {
      key: 'transfer',
      icon: '🚗',
      image: '/images/services/transfer.jpg'
    },
    {
      key: 'breakfast',
      icon: '🍳',
      image: '/images/services/breakfast.jpg'
    },
    {
      key: 'excursions',
      icon: '🏔️',
      image: '/images/services/excursions.jpg'
    },
    {
      key: 'rental',
      icon: '🚲',
      image: '/images/services/bike.jpg'
    }
  ], []);

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
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      },
    },
  };

  return (
    <section 
      id="services" 
      className="py-12 sm:py-16 md:py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 
            className="text-2xl sm:text-3xl font-bold mb-3"
            style={{ color: servicesColors[theme].text }}
          >
            {t('services.title')}
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <motion.div
              key={service.key}
              variants={cardVariants}
              whileHover="hover"
              className="relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer group"
              style={{
                backgroundColor: servicesColors[theme].cardBg,
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60 group-hover:to-black/70 transition-all duration-300" />
              
              <div className="absolute inset-0 flex flex-col items-center">
                <div className="flex-grow flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <span className="text-5xl sm:text-6xl filter drop-shadow-lg">{service.icon}</span>
                </div>
                
                <div className="w-full p-3 text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-base font-semibold text-white mb-1 drop-shadow-md">
                    {t(`services.${service.key}.title`)}
                  </h3>
                  <p className="text-xs text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                    {t(`services.${service.key}.description`)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices; 