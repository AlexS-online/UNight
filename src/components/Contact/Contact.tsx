'use client';

import React from 'react';
import { colors } from '@/styles/colors';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const contactColors = {
    default: {
      bg: colors.default.background.main,
      title: colors.default.primary.main,
      text: colors.default.text.secondary,
      cardBg: colors.default.background.light,
      icon: colors.default.accent.main,
      button: {
        bg: colors.default.primary.main,
        text: colors.default.text.light,
        hover: colors.default.primary.light,
      },
      input: {
        border: colors.default.text.secondary,
        focus: colors.default.primary.main,
        bg: colors.default.background.main,
      },
      decorative: colors.default.accent.main + '20',
    },
    olive: {
      bg: colors.olive.background.main,
      title: colors.olive.primary.dark,
      text: colors.olive.text.secondary,
      cardBg: colors.olive.background.light,
      icon: colors.olive.accent.main,
      button: {
        bg: colors.olive.primary.main,
        text: colors.olive.text.light,
        hover: colors.olive.primary.light,
      },
      input: {
        border: colors.olive.text.secondary,
        focus: colors.olive.primary.dark,
        bg: colors.olive.background.main,
      },
      decorative: colors.olive.accent.main + '20',
    },
    terracotta: {
      bg: colors.terracotta.background.main,
      title: colors.terracotta.primary.dark,
      text: colors.terracotta.text.secondary,
      cardBg: colors.terracotta.background.light,
      icon: colors.terracotta.accent.main,
      button: {
        bg: colors.terracotta.primary.main,
        text: colors.terracotta.text.light,
        hover: colors.terracotta.primary.light,
      },
      input: {
        border: colors.terracotta.text.secondary,
        focus: colors.terracotta.primary.dark,
        bg: colors.terracotta.background.main,
      },
      decorative: colors.terracotta.accent.main + '20',
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
      id="contacts" 
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: contactColors[theme].bg }}
    >
      {/* Декоративные элементы */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 right-0 w-64 h-64 rounded-full -translate-y-1/2 translate-x-1/2"
        style={{ backgroundColor: contactColors[theme].decorative }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full translate-y-1/2 -translate-x-1/2"
        style={{ backgroundColor: contactColors[theme].decorative }}
      />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-12"
            style={{ color: contactColors[theme].title }}
            variants={itemVariants}
          >
            {t('contact.title')}
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <div className="p-8 rounded-lg shadow-lg" style={{ backgroundColor: contactColors[theme].cardBg }}>
                <h3 className="text-2xl font-semibold mb-6"
                    style={{ color: contactColors[theme].title }}>
                  {t('contact.info')}
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg 
                      className="w-6 h-6 mr-4 mt-1" 
                      fill="none" 
                      stroke="currentColor"
                      style={{ color: contactColors[theme].icon }}
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <h4 className="font-semibold" style={{ color: contactColors[theme].title }}>{t('contact.address.label')}</h4>
                      <p style={{ color: contactColors[theme].text }}>{t('contact.address.value')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg 
                      className="w-6 h-6 mr-4 mt-1" 
                      fill="none" 
                      stroke="currentColor"
                      style={{ color: contactColors[theme].icon }}
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div>
                      <h4 className="font-semibold" style={{ color: contactColors[theme].title }}>{t('contact.email.label')}</h4>
                      <p style={{ color: contactColors[theme].text }}>{t('contact.email.value')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg 
                      className="w-6 h-6 mr-4 mt-1" 
                      fill="none" 
                      stroke="currentColor"
                      style={{ color: contactColors[theme].icon }}
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div>
                      <h4 className="font-semibold" style={{ color: contactColors[theme].title }}>{t('contact.phone.label')}</h4>
                      <p style={{ color: contactColors[theme].text }}>{t('contact.phone.value')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <form className="p-8 rounded-lg shadow-lg" style={{ backgroundColor: contactColors[theme].cardBg }}>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: contactColors[theme].text }}>
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg transition-all duration-300 border-2 focus:outline-none"
                      style={{ 
                        borderColor: contactColors[theme].input.border,
                        color: contactColors[theme].text,
                        backgroundColor: contactColors[theme].input.bg,
                      }}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: contactColors[theme].text }}>
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 rounded-lg transition-all duration-300 border-2 focus:outline-none"
                      style={{ 
                        borderColor: contactColors[theme].input.border,
                        color: contactColors[theme].text,
                        backgroundColor: contactColors[theme].input.bg,
                      }}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: contactColors[theme].text }}>
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg transition-all duration-300 border-2 focus:outline-none"
                      style={{ 
                        borderColor: contactColors[theme].input.border,
                        color: contactColors[theme].text,
                        backgroundColor: contactColors[theme].input.bg,
                      }}
                    ></textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="w-full px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
                    style={{ 
                      backgroundColor: contactColors[theme].button.bg,
                      color: contactColors[theme].button.text,
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: contactColors[theme].button.hover,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t('contact.form.send')}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 