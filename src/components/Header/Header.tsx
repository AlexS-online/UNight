'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { colors } from '@/styles/colors';
import Logo from '@/components/Logo/Logo';
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle';
import LanguageToggle from '@/components/LanguageToggle/LanguageToggle';
import { motion, AnimatePresence } from 'framer-motion';
import { useActiveSection } from '@/hooks/useActiveSection';
import Image from 'next/image';

const Header: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const activeSection = useActiveSection();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const headerColors = {
    default: {
      bg: colors.default.background.main,
      text: colors.default.text.primary,
      hover: colors.default.accent.main,
    },
    dark: {
      bg: colors.dark.background.main,
      text: colors.dark.text.primary,
      hover: colors.dark.accent.main,
    },
    terracotta: {
      bg: colors.terracotta.background.main,
      text: colors.terracotta.text.primary,
      hover: colors.terracotta.accent.main,
    }
  };

  const logoVariants = {
    default: 'dark',
    dark: 'light',
    terracotta: 'dark'
  } as const;

  return (
    <motion.header 
      className="fixed w-full z-50 backdrop-blur-sm"
      style={{ 
        backgroundColor: theme === 'dark' ? 'rgba(42, 42, 42, 0.8)' : 'rgba(255, 255, 255, 0.5)'
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >      
      <div className="container mx-auto px-4 py-1 relative">
        <div className="flex justify-between items-center h-10">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/images/Artboard 2@4x.png"
                alt="Unight Hostel"
                width={120}
                height={40}
                className="h-8 w-auto"
                style={{
                  filter: theme === 'dark' ? 'brightness(0) invert(1)' : 'none'
                }}
                priority
              />
            </Link>
          </motion.div>
          
          <div className="flex-1 flex justify-center">
            <nav className="hidden md:flex space-x-8">
              {['concept', 'accommodation', 'services', 'contact'].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link 
                    href={`#${item}`} 
                    className="text-xs tracking-wide relative"
                    style={{ 
                      color: activeSection === item 
                        ? (theme === 'terracotta' || theme === 'dark') ? '#cc5440' : headerColors[theme].hover
                        : headerColors[theme].text,
                      opacity: activeSection === item ? 1 : 0.7,
                      fontWeight: activeSection === item ? 600 : 400
                    }}
                  >
                    {t(`nav.${item}`).toUpperCase()}
                    {activeSection === item && (
                      <motion.div
                        className="absolute -bottom-1 left-0 w-full h-0.5"
                        style={{ 
                          backgroundColor: (theme === 'terracotta' || theme === 'dark') ? '#cc5440' : headerColors[theme].hover,
                          opacity: 0.8 
                        }}
                        layoutId="activeSection"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Мобильное меню иконка */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{ color: headerColors[theme].text }}
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
        
        {/* Мобильное меню выпадающее */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
              style={{ 
                backgroundColor: theme === 'dark' ? 'rgba(42, 42, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)', 
                backdropFilter: 'blur(10px)'
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-4 px-4 space-y-2">
                {['concept', 'accommodation', 'services', 'contact'].map((item) => (
                  <motion.div 
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={`#${item}`}
                      className="block py-2 text-center text-sm font-medium"
                      style={{ 
                        color: activeSection === item 
                          ? (theme === 'terracotta' || theme === 'dark') ? '#cc5440' : headerColors[theme].hover
                          : headerColors[theme].text,
                        fontWeight: activeSection === item ? 600 : 400
                      }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t(`nav.${item}`).toUpperCase()}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header; 