'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';

interface LogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'medium',
  variant = 'light'
}) => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  
  const sizes = {
    small: 'w-40',
    medium: 'w-56',
    large: 'w-72'
  };

  const logoSrc = "/images/Artboard 3@4x.png";

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className={`${sizes[size]} relative aspect-[2/1]`}>
        <Image
          src={logoSrc}
          alt={t('logo.fullName')}
          fill
          style={{ 
            objectFit: 'contain',
            filter: theme === 'dark' ? 'invert(1)' : 'none'
          }}
          priority
        />
      </div>
    </div>
  );
};

export default Logo; 