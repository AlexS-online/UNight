'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import en from '@/locales/en.json';
import mne from '@/locales/mne.json';
import ru from '@/locales/ru.json';

interface TranslationValue {
  [key: string]: string | string[] | TranslationValue;
}

interface LanguageContextType {
  language: string;
  setLanguage: (language: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en,
  mne,
  ru
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<string>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguageState(savedLanguage);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    localStorage.setItem('language', language);
    document.documentElement.setAttribute('lang', language);
    
    const event = new CustomEvent('languageChange', { 
      detail: { language },
      bubbles: true 
    });
    document.dispatchEvent(event);
  }, [language, mounted]);

  const setLanguage = (lang: string) => {
    setLanguageState(lang);
  };

  const t = useCallback((key: string): string => {
    const keys = key.split('.');
    let value: TranslationValue = translations[language as keyof typeof translations];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k] as TranslationValue;
      } else {
        return key;
      }
    }
    
    if (Array.isArray(value)) {
      return value[0];
    }
    
    return typeof value === 'string' ? value : key;
  }, [language]);

  if (!mounted) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 