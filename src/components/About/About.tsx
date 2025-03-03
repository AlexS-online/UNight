'use client';

import React from 'react';
import { colors } from '@/styles/colors';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const aboutColors = {
    default: {
      bg: colors.default.background.main,
      title: colors.default.primary.main,
      text: colors.default.text.secondary,
      icon: colors.default.accent.main,
      accent: colors.default.primary.light,
      card: colors.default.background.light,
      decorative: colors.default.primary.main + '20',
    },
    olive: {
      bg: colors.olive.background.main,
      title: colors.olive.primary.dark,
      text: colors.olive.text.secondary,
      icon: colors.olive.accent.main,
      accent: colors.olive.primary.light,
      card: colors.olive.background.light,
      decorative: colors.olive.primary.main + '20',
    },
    terracotta: {
      bg: colors.terracotta.background.main,
      title: colors.terracotta.primary.dark,
      text: colors.terracotta.text.secondary,
      icon: colors.terracotta.accent.main,
      accent: colors.terracotta.primary.light,
      card: colors.terracotta.background.light,
      decorative: colors.terracotta.primary.main + '20',
    }
  };

  const features = [
    { key: 'location', icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )},
    { key: 'rooms', icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )},
    { key: 'facilities', icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )},
    { key: 'security', icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )},
    { key: 'community', icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )},
    { key: 'events', icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )}
  ];

  return (
    <section 
      id="about" 
      className="py-32 relative overflow-hidden"
      style={{ backgroundColor: aboutColors[theme].bg }}
    >
      {/* Декоративный элемент */}
      <div 
        className="absolute top-0 right-0 w-1/3 h-full opacity-5 transform rotate-45"
        style={{ 
          backgroundColor: aboutColors[theme].accent,
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 100%)',
        }}
      />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Левая колонка с текстом */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: aboutColors[theme].title }}
            >
              {t('about.title')}
            </motion.h2>
            <motion.p 
              className="text-lg mb-12"
              style={{ color: aboutColors[theme].text }}
            >
              {t('about.description')}
            </motion.p>

            <motion.div 
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.key}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div 
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: aboutColors[theme].card }}
                  >
                    <div style={{ color: aboutColors[theme].icon }}>
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 
                      className="font-semibold mb-1"
                      style={{ color: aboutColors[theme].title }}
                    >
                      {t(`about.features.${feature.key}.title`)}
                    </h3>
                    <p 
                      className="text-sm"
                      style={{ color: aboutColors[theme].text }}
                    >
                      {t(`about.features.${feature.key}.description`)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Правая колонка с изображениями */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div 
                  className="h-64 rounded-2xl bg-cover bg-center transform hover:scale-105 transition-transform duration-300"
                  style={{ 
                    backgroundColor: aboutColors[theme].card,
                    backgroundImage: 'url("/images/about-1.jpg")',
                  }}
                  whileHover={{ scale: 1.05 }}
                />
                <motion.div 
                  className="h-32 rounded-2xl bg-cover bg-center transform hover:scale-105 transition-transform duration-300"
                  style={{ 
                    backgroundColor: aboutColors[theme].card,
                    backgroundImage: 'url("/images/about-2.jpg")',
                  }}
                  whileHover={{ scale: 1.05 }}
                />
              </div>
              <div className="space-y-4 pt-8">
                <motion.div 
                  className="h-32 rounded-2xl bg-cover bg-center transform hover:scale-105 transition-transform duration-300"
                  style={{ 
                    backgroundColor: aboutColors[theme].card,
                    backgroundImage: 'url("/images/about-3.jpg")',
                  }}
                  whileHover={{ scale: 1.05 }}
                />
                <motion.div 
                  className="h-64 rounded-2xl bg-cover bg-center transform hover:scale-105 transition-transform duration-300"
                  style={{ 
                    backgroundColor: aboutColors[theme].card,
                    backgroundImage: 'url("/images/about-4.jpg")',
                  }}
                  whileHover={{ scale: 1.05 }}
                />
              </div>
            </div>

            {/* Декоративный элемент */}
            <motion.div
              className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full"
              style={{ backgroundColor: aboutColors[theme].accent }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 