'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { colors } from '@/styles/colors';
import Logo from '@/components/Logo/Logo';
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle';
import LanguageToggle from '@/components/LanguageToggle/LanguageToggle';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useActiveSection } from '@/hooks/useActiveSection';

const Header: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Мемоизируем цвета для предотвращения пересчета при каждом рендере
  const headerColors = useMemo(() => ({
    default: {
      bg: colors.default.background.main,
      text: colors.default.text.primary,
      hover: colors.default.accent.main,
      active: colors.default.accent.main,
      activeBg: 'rgba(255, 255, 255, 0.1)',
    },
    dark: {
      bg: colors.dark.background.main,
      text: colors.dark.text.primary,
      hover: colors.dark.accent.main,
      active: colors.dark.accent.main,
      activeBg: 'rgba(208, 90, 69, 0.2)',
    },
    terracotta: {
      bg: colors.terracotta.background.main,
      text: '#FFFFFF',
      hover: '#FFFFFF',
      active: '#FFFFFF',
      activeBg: 'rgba(255, 255, 255, 0.25)',
    }
  }), []);

  // Мемоизируем навигационные элементы
  const navItems = ['hero', 'concept', 'accommodation', 'services', 'contact'];

  // Оптимизированные анимации с меньшим количеством кадров
  const menuItemAnimation = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.2 }
  };

  // Получаем текущий цвет фона для шапки
  const headerBgColor = theme === 'terracotta' 
    ? `${headerColors[theme].bg}95`
    : `${headerColors[theme].bg}80`;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      key={`header-${theme}`}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{
        backgroundColor: headerBgColor,
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      role="banner"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />
          
          <nav className="hidden md:flex items-center space-x-1" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <motion.div
                key={item}
                {...menuItemAnimation}
              >
                <Link 
                  href={`#${item}`} 
                  className={`text-xs tracking-wide relative px-3 py-1.5 rounded-md transition-colors duration-200 ${
                    theme === 'terracotta' ? 'drop-shadow-sm hover:drop-shadow-md' : ''
                  }`}
                  style={{ 
                    color: activeSection === item ? headerColors[theme].active : headerColors[theme].text,
                    opacity: activeSection === item ? 1 : 0.85,
                    backgroundColor: activeSection === item ? headerColors[theme].activeBg : 'transparent',
                    textShadow: theme === 'terracotta' ? '0 1px 2px rgba(0,0,0,0.1)' : 'none',
                  }}
                >
                  {t(`nav.${item}`).toUpperCase()}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <LanguageToggle />
            <button
              ref={menuButtonRef}
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? t('common.closeMenu') : t('common.openMenu')}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <Image
                src={`/icons/menu-${isMobileMenuOpen ? 'close' : 'open'}.svg`}
                alt={isMobileMenuOpen ? t('common.closeMenu') : t('common.openMenu')}
                width={24}
                height={24}
                style={{
                  filter: theme === 'dark' ? 'invert(1)' : 'none'
                }}
              />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              ref={mobileMenuRef}
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden"
              role="navigation"
              aria-label="Mobile navigation"
            >
              <div className="py-4 space-y-1">
                {navItems.map((item) => (
                  <motion.div 
                    key={item}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Link
                      href={`#${item}`}
                      className={`block py-2 px-4 text-center text-sm rounded-md transition-colors duration-200 ${
                        theme === 'terracotta' ? 'drop-shadow-sm hover:drop-shadow-md' : ''
                      }`}
                      style={{ 
                        color: activeSection === item ? headerColors[theme].active : headerColors[theme].text,
                        opacity: activeSection === item ? 1 : 0.85,
                        backgroundColor: activeSection === item ? headerColors[theme].activeBg : 'transparent',
                        textShadow: theme === 'terracotta' ? '0 1px 2px rgba(0,0,0,0.1)' : 'none',
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