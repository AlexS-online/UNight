'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { colors } from '@/styles/colors';
import Image from 'next/image';
import { createPortal } from 'react-dom';

interface ModalProps {
  onClose: () => void;
  theme: 'default' | 'terracotta' | 'dark';
  accommodationColors: {
    [key: string]: {
      bg: string;
      text: string;
      cardBg: string;
      accent: string;
    };
  };
}

const Modal: React.FC<ModalProps> = ({ onClose, theme, accommodationColors }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const modal = (
    <>
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-3xl overflow-hidden relative w-[95vw] h-[90vh] lg:w-[80vw]"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          style={{ backgroundColor: accommodationColors[theme].cardBg }}
          onClick={e => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:bg-white transition-colors"
            onClick={onClose}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <iframe
            src="https://www.booking.com/hotel/me/unight-hostel.html"
            className="w-full h-full border-0"
            title="Booking.com"
          />
        </motion.div>
      </motion.div>
    </>
  );

  return typeof document !== 'undefined' ? createPortal(modal, document.body) : null;
};

const Accommodation: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  const accommodationColors = {
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
  };

  const options = [
    {
      key: 'capsule',
      image: '/images/rooms/photo_2024-03-14_07-19-35.jpg'
    },
    {
      key: 'female',
      image: '/images/rooms/photo_2024-03-14_07-19-50.jpg'
    },
    {
      key: 'mixed',
      image: '/images/rooms/photo_2024-03-14_07-19-55.jpg'
    },
    {
      key: 'private',
      image: '/images/rooms/photo_2024-03-14_07-20-00.jpg'
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

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      },
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      },
    },
  };

  const getFeatures = (key: string): string[] => {
    const features = t(`accommodation.options.${key}.features`);
    return Array.isArray(features) ? features : [];
  };

  return (
    <section 
      id="accommodation" 
      className="py-16 sm:py-20 md:py-24 relative overflow-hidden backdrop-blur-md"
      style={{ 
        backgroundColor: theme === 'dark' ? 'rgba(18, 18, 18, 0.95)' : `${accommodationColors[theme].bg}CC`
      }}
    >
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${accommodationColors[theme].accent}20 1px, transparent 0)`,
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
            style={{ color: accommodationColors[theme].text }}
          >
            {t('accommodation.title')}
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {options.map((option) => (
            <motion.div
              key={option.key}
              variants={cardVariants}
              whileHover="hover"
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col backdrop-blur-sm"
              style={{ 
                backgroundColor: theme === 'dark' ? 'rgba(38, 38, 38, 0.95)' : `${accommodationColors[theme].cardBg}E6`,
                borderBottom: `3px solid ${accommodationColors[theme].accent}` 
              }}
              onClick={() => setSelectedRoom(option.key)}
            >
              <div className="relative w-full pt-[70%] overflow-hidden">
                <Image
                  src={option.image}
                  alt={t(`accommodation.options.${option.key}.title`)}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ objectPosition: 'center' }}
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"
                />
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4">
                  <h3 
                    className="text-xs sm:text-sm md:text-base font-medium text-white"
                  >
                    {t(`accommodation.options.${option.key}.title`)}
                  </h3>
                  <p className="text-white/80 text-[10px] sm:text-xs md:text-sm">
                    {t(`accommodation.options.${option.key}.shortDesc`)}
                  </p>
                </div>
              </div>
              <div className="p-2 sm:p-3 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3 items-center">
                  {getFeatures(option.key).map((feature: string) => (
                    <span 
                      key={feature}
                      className="inline-flex items-center text-[10px] sm:text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md"
                      style={{ 
                        backgroundColor: `${accommodationColors[theme].accent}15`,
                        color: accommodationColors[theme].accent
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-1 sm:pt-2 border-t border-gray-200 dark:border-gray-700 flex justify-end items-center">
                  <button
                    className="text-[10px] sm:text-xs px-2 py-1 sm:px-3 sm:py-1.5 rounded-md transition-all duration-300 flex items-center gap-1"
                    style={{ 
                      backgroundColor: `${accommodationColors[theme].accent}10`,
                      color: accommodationColors[theme].accent
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = accommodationColors[theme].accent;
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = `${accommodationColors[theme].accent}10`;
                      e.currentTarget.style.color = accommodationColors[theme].accent;
                    }}
                  >
                    <span className="font-semibold">{t(`accommodation.options.${option.key}.price`)}</span>
                    <span className="mx-1">•</span>
                    {t('accommodation.details')}
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 5L21 12M21 12L14 19M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedRoom && (
          <Modal
            onClose={() => setSelectedRoom(null)}
            theme={theme}
            accommodationColors={accommodationColors}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Accommodation; 