'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { colors } from '@/styles/colors';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  // Мемоизируем цвета для предотвращения пересчета при каждом рендере
  const contactColors = useMemo(() => ({
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
      title: colors.dark.text.primary,
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
  }), []);

  // Оптимизированные анимации с меньшим количеством кадров
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
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
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
              <div className="p-8 rounded-lg shadow-lg backdrop-blur-md border border-white/30 h-full flex flex-col">
                <form className="mb-0 flex-grow">
                  <div className="space-y-5">
                    <div>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          className="peer w-full px-4 pt-6 pb-2 rounded-lg transition-colors duration-200 border-0 ring-0 focus:ring-2 focus:ring-opacity-50 bg-white/10 backdrop-blur-sm focus:outline-none"
                          style={{
                            color: contactColors[theme].text,
                            boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.1)'
                          }}
                          placeholder=" "
                        />
                        <label
                          htmlFor="name"
                          className="absolute top-2 left-4 text-xs font-medium transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs"
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
                          className="peer w-full px-4 pt-6 pb-2 rounded-lg transition-colors duration-200 border-0 ring-0 focus:ring-2 focus:ring-opacity-50 bg-white/10 backdrop-blur-sm focus:outline-none"
                          style={{
                            color: contactColors[theme].text,
                            boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.1)'
                          }}
                          placeholder=" "
                        />
                        <label
                          htmlFor="email"
                          className="absolute top-2 left-4 text-xs font-medium transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs"
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
                          className="peer w-full px-4 pt-6 pb-2 rounded-lg transition-colors duration-200 border-0 ring-0 focus:ring-2 focus:ring-opacity-50 bg-white/10 backdrop-blur-sm focus:outline-none resize-none"
                          style={{
                            color: contactColors[theme].text,
                            boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.1)'
                          }}
                          placeholder=" "
                        ></textarea>
                        <label
                          htmlFor="message"
                          className="absolute top-2 left-4 text-xs font-medium transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs"
                          style={{ color: contactColors[theme].text }}
                        >
                          {t('contact.form.message')}
                        </label>
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full px-8 py-3 rounded-lg text-base font-medium transition-colors duration-200 shadow-lg"
                      style={{
                        backgroundColor: contactColors[theme].button.bg,
                        color: contactColors[theme].button.text,
                        boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)'
                      }}
                      whileHover={{
                        scale: 1.01,
                        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)'
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {t('contact.form.send')}
                    </motion.button>
                  </div>
                </form>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <h4 className="font-semibold mb-4" style={{ color: contactColors[theme].title }}>{t('contact.social.label')}</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.instagram.com/unight_hostel/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                      style={{
                        backgroundColor: contactColors[theme].button.bg,
                        color: contactColors[theme].button.text
                      }}
                      aria-label={t('contact.social.instagram')}
                      title={t('contact.social.instagram')}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/unight.hostel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                      style={{
                        backgroundColor: contactColors[theme].button.bg,
                        color: contactColors[theme].button.text
                      }}
                      aria-label={t('contact.social.facebook')}
                      title={t('contact.social.facebook')}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a
                      href="https://www.booking.com/hotel/me/unight-hostel.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                      style={{
                        backgroundColor: contactColors[theme].button.bg,
                        color: contactColors[theme].button.text
                      }}
                      aria-label={t('contact.social.booking')}
                      title={t('contact.social.booking')}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.5 2H3.5C2.67 2 2 2.67 2 3.5V20.5C2 21.33 2.67 22 3.5 22H20.5C21.33 22 22 21.33 22 20.5V3.5C22 2.67 21.33 2 20.5 2ZM20.5 20.5H3.5V3.5H20.5V20.5Z"/>
                        <path d="M12 6C9.24 6 7 8.24 7 11C7 13.76 9.24 16 12 16C14.76 16 17 13.76 17 11C17 8.24 14.76 6 12 6ZM12 14C10.34 14 9 12.66 9 11C9 9.34 10.34 8 12 8C13.66 8 15 9.34 15 11C15 12.66 13.66 14 12 14Z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="h-full">
              <div className="p-8 rounded-lg shadow-lg backdrop-blur-md border border-white/30 h-full flex flex-col">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-6" style={{ color: contactColors[theme].title }}>
                    {t('contact.address.label')}
                  </h3>
                  <p className="text-lg" style={{ color: contactColors[theme].text }}>
                    {t('contact.address.value')}
                  </p>
                </div>

                <div className="w-full h-[300px] sm:h-[400px] rounded-lg overflow-hidden mb-8">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2944.5524664825493!2d18.8382!3d42.2882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDE3JzE3LjUiTiAxOMKwNTAnMTcuNSJF!5e0!3m2!1sen!2s!4v1635959123456!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                    title="U-Night Hostel location"
                  />
                </div>

                <div className="mt-auto">
                  <h3 className="text-2xl font-bold mb-6" style={{ color: contactColors[theme].title }}>
                    {t('contact.contact.label')}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: contactColors[theme].button.bg }}>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" style={{ color: contactColors[theme].button.text }}>
                          <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
                        </svg>
                      </div>
                      <a href="mailto:info@unight.me" className="text-lg hover:underline" style={{ color: contactColors[theme].text }}>
                        info@unight.me
                      </a>
                    </div>

                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: contactColors[theme].button.bg }}>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" style={{ color: contactColors[theme].button.text }}>
                          <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"/>
                        </svg>
                      </div>
                      <a href="tel:+38269123456" className="text-lg hover:underline" style={{ color: contactColors[theme].text }}>
                        +382 69 123 456
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
