'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { colors } from '@/styles/colors';
import Image from 'next/image';
import { createPortal } from 'react-dom';

interface ModalProps {
  onClose: () => void;
  theme: string;
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
        transition={{ duration: 0.15 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-3xl overflow-hidden relative w-[95vw] h-[90vh] lg:w-[80vw]"
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.98, opacity: 0 }}
          transition={{ duration: 0.15 }}
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
            loading="lazy"
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

  const accommodationColors = useMemo(() => ({
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

  const options = useMemo(() => [
    {
      key: 'capsule',
      image: '/images/rooms/capsule.jpg'
    },
    {
      key: 'female',
      image: '/images/rooms/female.jpg'
    },
    {
      key: 'mixed',
      image: '/images/rooms/mixed.jpg'
    },
    {
      key: 'private',
      image: '/images/rooms/private.jpg'
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
      y: -3,
      transition: {
        duration: 0.15,
        ease: "easeInOut"
      },
    },
  };

  return (
    <section
      id="accommodation"
      className="py-16 sm:py-20 md:py-24 relative overflow-hidden"
    >
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
              className="relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => setSelectedRoom(option.key)}
            >
              <Image
                src={option.image}
                alt={t(`accommodation.options.${option.key}.title`)}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                quality={75}
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white backdrop-blur-[1px] md:bg-[rgba(0,0,0,0.4)]">
                <h3 className="text-lg font-medium mb-1">
                  {t(`accommodation.options.${option.key}.title`)}
                </h3>
                <p className="text-sm opacity-90 mb-2">
                  {t(`accommodation.options.${option.key}.description`)}
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-4 py-2 rounded-lg text-sm font-medium bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedRoom(option.key);
                  }}
                >
                  {t('accommodation.bookNow')}
                </motion.button>
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
