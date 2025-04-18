'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'default' | 'terracotta' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('default');

  // Инициализация темы из localStorage при загрузке
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && ['default', 'terracotta', 'dark'].includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  // Сохранение темы в localStorage и применение к документу
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.setAttribute('data-theme', theme);
    
    // Принудительное обновление DOM для применения новой темы
    const event = new CustomEvent('themeChanged', { detail: { theme } });
    window.dispatchEvent(event);
    
    // Принудительное обновление всех элементов с transition
    document.querySelectorAll('*').forEach(el => {
      if (window.getComputedStyle(el).transition !== 'none') {
        el.classList.add('theme-transition');
        setTimeout(() => el.classList.remove('theme-transition'), 10);
      }
    });
  }, [theme]);

  const updateTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 