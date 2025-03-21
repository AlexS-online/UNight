'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { colors } from '@/styles/colors';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';
import BookingModal from '@/components/BookingModal/BookingModal';
import Link from 'next/link';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const heroColors = {
    default: {
      bg: colors.default.background.main,
      text: colors.default.text.primary,
      accent: colors.default.accent.main,
    },
    dark: {
      bg: colors.dark.background.main,
      text: colors.dark.text.primary,
      accent: colors.dark.accent.main,
    },
    terracotta: {
      bg: colors.terracotta.background.main,
      text: colors.terracotta.text.primary,
      accent: colors.terracotta.accent.main,
    }
  };

  return (
    <>
      <section 
        className="h-[100dvh] pt-16 sm:pt-[72px] flex items-center relative overflow-hidden"
        style={{ backgroundColor: theme === 'dark' ? 'rgba(26, 26, 26, 0.9)' : 'rgba(255, 255, 255, 0.5)' }}
      >
        <div className="container mx-auto h-full px-3 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-16">
          {/* Левая колонка с логотипом и текстом */}
          <motion.div 
            className="flex flex-col justify-center h-full pt-0 pb-12 sm:py-4 lg:py-6 backdrop-blur-[2px]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="relative w-full h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[45vh] mb-2 sm:mb-3 lg:mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/Artboard 1@4x.png"
                  alt="Unight Hostel"
                  fill
                  style={{ 
                    objectFit: 'contain',
                    filter: theme === 'dark' ? 'brightness(0) invert(1)' : 'none'
                  }}
                  priority
                />
              </div>
            </motion.div>

            <motion.p 
              className="text-xs sm:text-sm md:text-base lg:text-xl max-w-lg mb-3 sm:mb-4 lg:mb-6 leading-relaxed tracking-wide"
              style={{ color: heroColors[theme].text }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {t('hero.subtitle')}
            </motion.p>

            <Link href="#accommodation">
              <motion.button 
                className="px-5 py-2 sm:px-8 sm:py-3 lg:px-10 lg:py-4 rounded-lg text-xs sm:text-sm md:text-base lg:text-lg font-medium transition-all duration-300 shadow-lg"
                style={{ 
                  backgroundColor: heroColors[theme].accent,
                  color: '#FFFFFF',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                {t('hero.bookNow')}
              </motion.button>
            </Link>
          </motion.div>

          {/* Правая колонка с фотографией */}
          <motion.div 
            className="relative h-full lg:h-[85%] my-auto rounded-2xl sm:rounded-[32px] overflow-hidden hidden sm:block lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/images/kitchen-people.webp"
              alt="Happy people in kitchen"
              fill
              style={{ 
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              className="rounded-[32px] scale-105 hover:scale-100 transition-transform duration-700"
            />
            {/* Градиентный оверлей для лучшей читаемости текста */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-black/10 via-black/5 to-transparent"
            />
          </motion.div>
        </div>
        
        {/* Мобильная версия изображения */}
        <motion.div 
          className="absolute inset-0 -z-10 sm:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="/images/kitchen-people.webp"
            alt="Background"
            fill
            style={{ 
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            className="blur-[1px]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/50 dark:from-black/80 dark:to-black/50" />
        </motion.div>
      </section>

      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
};

export default Hero; 