'use client';

import React, { useState, useMemo } from 'react';
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

  // Мемоизируем цвета для предотвращения пересчета при каждом рендере
  const heroColors = useMemo(() => ({
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
  }), []);

  // Оптимизированные анимации с меньшим количеством кадров
  const animations = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.2 }
    },
    slideInLeft: {
      initial: { opacity: 0, x: -5 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.2 }
    },
    slideInRight: {
      initial: { opacity: 0, x: 5 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.2, delay: 0.1 }
    },
    scaleIn: {
      initial: { scale: 0.98, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      transition: { duration: 0.2, delay: 0.1 }
    },
    fadeInUp: {
      initial: { opacity: 0, y: 5 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.2, delay: 0.1 }
    }
  };

  return (
    <>
      <section 
        id="hero"
        className="h-[100dvh] pt-16 sm:pt-[72px] flex items-center relative overflow-hidden bg-white/10 backdrop-blur-md"
        style={{ 
          backgroundColor: 'transparent',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)'
        }}
      >
        <div className="container mx-auto h-full px-3 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-16">
          {/* Левая колонка с логотипом и текстом */}
          <motion.div 
            className="flex flex-col justify-center h-full pt-0 pb-12 sm:py-4 lg:py-6"
            {...animations.slideInLeft}
          >
            <motion.div 
              className="relative w-full h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[45vh] mb-2 sm:mb-3 lg:mb-6"
              {...animations.scaleIn}
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
                  loading="eager"
                  quality={75}
                />
              </div>
            </motion.div>

            <motion.p 
              className="text-xs sm:text-sm md:text-base lg:text-xl max-w-lg mb-3 sm:mb-4 lg:mb-6 leading-relaxed tracking-wide"
              style={{ color: heroColors[theme].text }}
              {...animations.fadeInUp}
            >
              {t('hero.subtitle')}
            </motion.p>

            <Link href="#accommodation">
              <motion.button 
                className="px-5 py-2 sm:px-8 sm:py-3 lg:px-10 lg:py-4 rounded-lg text-xs sm:text-sm md:text-base lg:text-lg font-medium transition-colors duration-200 shadow-lg"
                style={{ 
                  backgroundColor: heroColors[theme].accent,
                  color: '#FFFFFF',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)'
                }}
                {...animations.fadeInUp}
                whileHover={{ 
                  scale: 1.01,
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
            {...animations.slideInRight}
          >
            <Image
              src="/images/kitchen-people.webp"
              alt="Happy people in kitchen"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ 
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              className="rounded-[32px] scale-105 hover:scale-100 transition-transform duration-300"
              loading="eager"
              quality={75}
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
          {...animations.fadeIn}
        >
          <Image
            src="/images/kitchen-people.webp"
            alt="Background"
            fill
            sizes="100vw"
            style={{ 
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            loading="eager"
            quality={60}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10 backdrop-blur-sm" />
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