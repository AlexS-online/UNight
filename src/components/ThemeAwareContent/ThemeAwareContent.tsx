'use client';

import { useTheme } from '@/context/ThemeContext'
import { useEffect } from 'react'

export default function ThemeAwareContent({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  
  useEffect(() => {
    document.body.style.backgroundColor = theme === 'dark' ? '#1A1A1A' : 'white';
    document.body.style.color = theme === 'dark' ? 'white' : 'rgb(45, 52, 54)';
    
    if (theme === 'dark') {
      document.body.style.borderLeft = '4px solid rgba(208, 90, 69, 0.3)';
      document.body.style.borderRight = '4px solid rgba(208, 90, 69, 0.3)';
    } else {
      document.body.style.borderLeft = 'none';
      document.body.style.borderRight = 'none';
    }
  }, [theme]);

  return children;
} 