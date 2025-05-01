'use client';

import { useTheme } from '@/context/ThemeContext'
import { useEffect, useState } from 'react'

export default function ThemeAwareContent({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (theme === 'dark') {
      document.body.style.backgroundColor = '#1A1A1A';
      document.body.style.color = 'white';
      document.body.style.borderLeft = '4px solid rgba(208, 90, 69, 0.3)';
      document.body.style.borderRight = '4px solid rgba(208, 90, 69, 0.3)';
    } else if (theme === 'terracotta') {
      document.body.style.backgroundColor = '#D05A45';
      document.body.style.color = 'white';
      document.body.style.borderLeft = '4px solid rgba(255, 255, 255, 0.3)';
      document.body.style.borderRight = '4px solid rgba(255, 255, 255, 0.3)';
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'rgb(45, 52, 54)';
      document.body.style.borderLeft = 'none';
      document.body.style.borderRight = 'none';
    }
  }, [theme, mounted]);

  if (!mounted) {
    return null;
  }

  return children;
} 