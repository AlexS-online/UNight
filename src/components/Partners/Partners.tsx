'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { colors } from '@/styles/colors';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';

const Partners: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const partnerColors = {
    default: {
      bg: colors.default.background.light,
      title: colors.default.primary.main,
      text: colors.default.text.secondary,
      cardBg: colors.default.background.main,
      button: {
        bg: colors.default.primary.main,
        text: colors.default.text.light,
        hover: colors.default.primary.light,
      },
      placeholder: colors.default.background.dark + '40',
      decorative: colors.default.primary.main + '20',
    },
    olive: {
      bg: colors.olive.background.light,
      title: colors.olive.primary.dark,
      text: colors.olive.text.secondary,
      cardBg: colors.olive.background.main,
      button: {
        bg: colors.olive.primary.main,
        text: colors.olive.text.light,
        hover: colors.olive.primary.light,
      },
      placeholder: colors.olive.background.dark + '40',
      decorative: colors.olive.primary.main + '20',
    },
    terracotta: {
      bg: colors.terracotta.background.light,
      title: colors.terracotta.primary.dark,
      text: colors.terracotta.text.secondary,
      cardBg: colors.terracotta.background.main,
      button: {
        bg: colors.terracotta.primary.main,
        text: colors.terracotta.text.light,
        hover: colors.terracotta.primary.light,
      },
      placeholder: colors.terracotta.background.dark + '40',
      decorative: colors.terracotta.primary.main + '20',
    }
  };

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
      id="partners" 
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: partnerColors[theme].bg }}
    >
      {/* Декоративные элементы */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 right-0 w-64 h-64 rounded-full -translate-y-1/2 translate-x-1/2"
        style={{ backgroundColor: partnerColors[theme].decorative }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full translate-y-1/2 -translate-x-1/2"
        style={{ backgroundColor: partnerColors[theme].decorative }}
      />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-4"
            style={{ color: partnerColors[theme].title }}
            variants={itemVariants}
          >
            {t('partners.title')}
          </motion.h2>
          
          <motion.p 
            className="text-lg text-center mb-12 max-w-2xl mx-auto"
            style={{ color: partnerColors[theme].text }}
            variants={itemVariants}
          >
            {t('partners.subtitle')}
          </motion.p>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {[1, 2, 3, 4].map((partner) => (
              <motion.div 
                key={partner}
                className="group relative p-8 rounded-2xl shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
                style={{ backgroundColor: partnerColors[theme].cardBg }}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div 
                  className="w-full aspect-square rounded-lg overflow-hidden"
                >
                  <div 
                    className="w-full h-full bg-gradient-to-br transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundColor: partnerColors[theme].placeholder }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-16 text-center"
            variants={containerVariants}
          >
            <motion.p 
              className="text-lg mb-8 max-w-2xl mx-auto" 
              style={{ color: partnerColors[theme].text }}
              variants={itemVariants}
            >
              {t('partners.description')}
            </motion.p>
            
            <motion.button 
              className="px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg"
              style={{ 
                backgroundColor: partnerColors[theme].button.bg,
                color: partnerColors[theme].button.text,
              }}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: partnerColors[theme].button.hover,
              }}
              whileTap={{ scale: 0.95 }}
            >
              {t('partners.becomePartner')}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners; 