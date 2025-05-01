'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { colors } from '@/styles/colors';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';

type Theme = 'default' | 'dark' | 'terracotta';

interface ServiceColors {
  bg: string;
  text: string;
  cardBg: string;
  accent: string;
}

interface ServiceColorsMap {
  default: ServiceColors;
  dark: ServiceColors;
  terracotta: ServiceColors;
}

const AdditionalServices: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme() as { theme: Theme };

  const servicesColors = useMemo<ServiceColorsMap>(() => ({
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
        staggerChildren: 0.1,
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
        duration: 0.4,
        ease: "easeOut"
      },
    },
    hover: {
      y: -8,
      scale: 1.03,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      },
    },
  };

  return (
    <section 
      id="services" 
      className="py-16 sm:py-20 md:py-24 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: servicesColors[theme].text }}
          >
            {t('services.title')}
          </h2>
          <p 
            className="text-base sm:text-lg max-w-2xl mx-auto"
            style={{ color: servicesColors[theme].text }}
          >
            {t('services.subtitle')}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <motion.div
              key={service.key}
              variants={cardVariants}
              whileHover="hover"
              className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group"
              style={{
                backgroundColor: servicesColors[theme].cardBg,
                boxShadow: `0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 group-hover:to-black/90 transition-all duration-500" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-between p-6">
                <div className="flex-grow flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                  <span className="text-6xl sm:text-7xl filter drop-shadow-lg">{service.icon}</span>
                </div>
                
                <div className="w-full text-center transform translate-y-0 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 drop-shadow-md">
                    {t(`services.items.${service.key}.title`)}
                  </h3>
                  <p className="text-sm sm:text-base text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-h-0 group-hover:max-h-40 overflow-hidden">
                    {t(`services.items.${service.key}.description`)}
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