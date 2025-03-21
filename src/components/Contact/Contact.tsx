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
      }
    },
    dark: {
      bg: colors.dark.background.main,
      title: colors.dark.primary.main,
      text: colors.dark.text.secondary,
      cardBg: colors.dark.background.light,
      icon: colors.dark.accent.main,
      button: {
        bg: colors.dark.primary.main,
        text: colors.dark.text.light,
        hover: colors.dark.primary.light,
      },
      input: {
        border: colors.dark.text.secondary,
        focus: colors.dark.primary.main,
        bg: colors.dark.background.main,
      }
    },
    terracotta: {
      bg: colors.terracotta.background.main,
      title: colors.terracotta.primary.main,
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
        focus: colors.terracotta.primary.main,
        bg: colors.terracotta.background.main,
      }
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
      id="contact" 
      className="py-24 relative overflow-hidden"
      style={{ 
        backgroundColor: theme === 'dark' ? 'rgba(26, 26, 26, 0.9)' : contactColors[theme].bg 
      }}
    >
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
            <motion.div variants={itemVariants} className="h-full">
              <div className="p-8 rounded-lg shadow-lg bg-white/20 backdrop-blur-md border border-white/30 h-full flex flex-col">
                <form className="mb-0 flex-grow">
                  <div className="space-y-5">
                    <div>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          className="peer w-full px-4 pt-6 pb-2 rounded-lg transition-all duration-300 border-0 ring-0 focus:ring-2 focus:ring-opacity-50 bg-white/10 backdrop-blur-sm focus:outline-none"
                          style={{ 
                            color: contactColors[theme].text,
                            boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.1)'
                          }}
                          placeholder=" "
                        />
                        <label 
                          htmlFor="name"
                          className="absolute top-2 left-4 text-xs font-medium transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs"
                          style={{ color: contactColors[theme].text }}
                        >
                          {t('contact.form.name')}
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          className="peer w-full px-4 pt-6 pb-2 rounded-lg transition-all duration-300 border-0 ring-0 focus:ring-2 focus:ring-opacity-50 bg-white/10 backdrop-blur-sm focus:outline-none"
                          style={{ 
                            color: contactColors[theme].text,
                            boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.1)'
                          }}
                          placeholder=" "
                        />
                        <label 
                          htmlFor="email"
                          className="absolute top-2 left-4 text-xs font-medium transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs"
                          style={{ color: contactColors[theme].text }}
                        >
                          {t('contact.form.email')}
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <div className="relative">
                        <textarea
                          id="message"
                          rows={4}
                          className="peer w-full px-4 pt-6 pb-2 rounded-lg transition-all duration-300 border-0 ring-0 focus:ring-2 focus:ring-opacity-50 bg-white/10 backdrop-blur-sm focus:outline-none resize-none"
                          style={{ 
                            color: contactColors[theme].text,
                            boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.1)'
                          }}
                          placeholder=" "
                        ></textarea>
                        <label 
                          htmlFor="message"
                          className="absolute top-2 left-4 text-xs font-medium transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs"
                          style={{ color: contactColors[theme].text }}
                        >
                          {t('contact.form.message')}
                        </label>
                      </div>
                    </div>
                    
                    <motion.button
                      type="submit"
                      className="w-full px-8 py-3 rounded-lg text-base font-medium transition-all duration-300 shadow-lg"
                      style={{ 
                        backgroundColor: contactColors[theme].button.bg,
                        color: contactColors[theme].button.text,
                        boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)'
                      }}
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)'
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {t('contact.form.send')}
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="h-full">
              <div className="p-8 rounded-lg shadow-lg bg-white/20 backdrop-blur-md border border-white/30 h-full flex flex-col">
                <div className="space-y-4 flex-grow">
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
                
                <motion.div 
                  className="mt-auto pt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="rounded-lg overflow-hidden shadow-md" style={{ height: "200px" }}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2951.6784947317915!2d18.865086100000003!3d42.28538590000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134dd5003d0bb871%3A0x115f2c8646719aa7!2sU-Night%20Hostel!5e0!3m2!1sru!2s!4v1741938058836!5m2!1sru!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 