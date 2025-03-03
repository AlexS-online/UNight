'use client';

import React from 'react';
import { colors } from '@/styles/colors';
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
    small: 'w-32',
    medium: 'w-48',
    large: 'w-64'
  };

  const logoColors = {
    default: {
      text: variant === 'light' ? colors.default.text.light : colors.default.primary.main,
      hostelBg: variant === 'light' ? colors.default.primary.light : colors.default.background.light,
      hostelText: colors.default.primary.main
    },
    olive: {
      text: variant === 'light' ? colors.olive.text.light : colors.olive.primary.main,
      hostelBg: variant === 'light' ? colors.olive.primary.light : colors.olive.background.light,
      hostelText: colors.olive.primary.main
    },
    terracotta: {
      text: variant === 'light' ? colors.terracotta.text.light : colors.terracotta.primary.main,
      hostelBg: variant === 'light' ? colors.terracotta.primary.light : colors.terracotta.background.light,
      hostelText: colors.terracotta.primary.main
    }
  }[theme];

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className={`${sizes[size]} aspect-[2/1]`}>
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 200 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M20 50 Q 40 20, 60 50 T 100 50"
            stroke={logoColors.text}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="120"
            y="60"
            fill={logoColors.text}
            fontSize="40"
            fontFamily="Arial, sans-serif"
            fontWeight="bold"
            dominantBaseline="middle"
          >
            {t('logo.name')}
          </text>
          <rect
            x="20"
            y="70"
            width="160"
            height="30"
            rx="15"
            fill={logoColors.hostelBg}
          />
          <text
            x="100"
            y="85"
            fill={logoColors.hostelText}
            fontSize="20"
            fontFamily="Arial, sans-serif"
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {t('logo.hostel')}
          </text>
        </svg>
      </div>
    </div>
  );
};

export default Logo; 