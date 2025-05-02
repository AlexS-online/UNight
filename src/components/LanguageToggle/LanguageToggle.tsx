'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';

interface ColorScheme {
  bg: string;
  text: string;
  hover: string;
  active: string;
}

interface ColorSchemes {
  default: ColorScheme;
  dark: ColorScheme;
  terracotta: ColorScheme;
}

const LanguageToggle: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const languages = useMemo(() => [
    { code: 'en', label: t('languages.en') },
    { code: 'mne', label: t('languages.mne') },
    { code: 'ru', label: t('languages.ru') }
  ], [t]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const currentColors = useMemo(() => {
    const colorSchemes: ColorSchemes = {
      default: {
        bg: 'rgba(0, 0, 255, 0.1)',
        text: '#2A2A2A',
        hover: 'rgba(0, 0, 255, 0.2)',
        active: '#0000FF',
      },
      dark: {
        bg: 'rgba(208, 90, 69, 0.6)',
        text: '#FFFFFF',
        hover: 'rgba(208, 90, 69, 0.2)',
        active: 'rgba(208, 90, 69, 0.8)',
      },
      terracotta: {
        bg: 'rgba(255, 255, 255, 0.1)',
        text: '#FFFFFF',
        hover: 'rgba(255, 255, 255, 0.2)',
        active: '#FFFFFF',
      },
    };
    return colorSchemes[theme];
  }, [theme]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg"
        style={{
          color: currentColors.text,
          backgroundColor: isOpen ? `${currentColors.bg}80` : 'transparent',
        }}
        aria-label={t('languages.switchLanguage')}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="text-xs font-medium">
          {languages.find(lang => lang.code === language)?.label}
        </span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 py-2 w-40 rounded-lg shadow-lg overflow-hidden"
            style={{ backgroundColor: currentColors.bg }}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="language-menu"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code as 'en' | 'mne' | 'ru');
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-2 text-left text-sm transition-colors duration-200 ${
                  language === lang.code ? 'font-medium' : ''
                }`}
                style={{
                  color: currentColors.text,
                  backgroundColor: language === lang.code ? currentColors.active : 'transparent',
                }}
                role="menuitem"
              >
                {lang.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageToggle;
