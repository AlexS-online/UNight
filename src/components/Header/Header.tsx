'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { colors } from '@/styles/colors';
import Logo from '@/components/Logo/Logo';
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme } = useTheme();

  useEffect(() => {
    console.log('Header: theme changed to:', theme);
  }, [theme]);

  const headerColors = {
    default: {
      bg: colors.default.background.main,
      text: colors.default.text.primary,
      hover: colors.default.primary.main,
      accent: colors.default.accent.main,
      button: {
        active: colors.default.primary.main,
        inactive: colors.default.text.secondary,
      }
    },
    olive: {
      bg: colors.olive.background.main,
      text: colors.olive.text.primary,
      hover: colors.olive.primary.main,
      accent: colors.olive.accent.main,
      button: {
        active: colors.olive.primary.main,
        inactive: colors.olive.text.secondary,
      }
    },
    terracotta: {
      bg: colors.terracotta.background.main,
      text: colors.terracotta.text.primary,
      hover: colors.terracotta.primary.main,
      accent: colors.terracotta.accent.main,
      button: {
        active: colors.terracotta.primary.main,
        inactive: colors.terracotta.text.secondary,
      }
    }
  };

  const logoVariants = {
    default: 'dark',
    olive: 'dark',
    terracotta: 'dark'
  } as const;

  return (
    <header 
      className="fixed w-full backdrop-blur-sm z-50"
      style={{ 
        backgroundColor: `${headerColors[theme].bg}E6` // E6 = 90% opacity
      }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Logo size="small" variant={logoVariants[theme]} className="min-w-[120px]" />
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            {['concept', 'about', 'partners', 'contacts'].map((item) => (
              <Link 
                key={item}
                href={`#${item}`} 
                className="transition-all duration-300 hover:opacity-80"
                style={{ color: headerColors[theme].text }}
              >
                {t(`nav.${item}`)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button 
              className="transition-all duration-300 hover:opacity-80 text-sm font-medium"
              style={{ 
                color: language === 'en' ? headerColors[theme].button.active : headerColors[theme].button.inactive,
              }}
              onClick={() => setLanguage('en')}
              aria-label={t('languages.switchLanguage')}
              title={t('languages.en')}
            >
              EN
            </button>
            <button 
              className="transition-all duration-300 hover:opacity-80 text-sm font-medium"
              style={{ 
                color: language === 'mne' ? headerColors[theme].button.active : headerColors[theme].button.inactive,
              }}
              onClick={() => setLanguage('mne')}
              aria-label={t('languages.switchLanguage')}
              title={t('languages.mne')}
            >
              MNE
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 