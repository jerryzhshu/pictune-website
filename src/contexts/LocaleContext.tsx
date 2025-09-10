'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Locale, Translations } from '@/types/locale';
import { getTranslations } from '@/locales';

interface LocaleContextType {
  locale: Locale;
  translations: Translations;
  switchLocale: (newLocale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

interface LocaleProviderProps {
  children: ReactNode;
  initialLocale?: Locale;
}

export function LocaleProvider({ children, initialLocale = 'zh' }: LocaleProviderProps) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const [translations, setTranslations] = useState<Translations>(getTranslations(initialLocale));

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Get locale from localStorage first
      const savedLocale = localStorage.getItem('locale') as Locale;
      
      if (savedLocale && (savedLocale === 'en' || savedLocale === 'zh')) {
        // Use saved locale if available
        if (savedLocale !== locale) {
          setLocale(savedLocale);
          setTranslations(getTranslations(savedLocale));
        }
      } else {
        // Detect browser language if no saved locale
        const browserLang = navigator.language || navigator.languages?.[0] || 'zh';
        const detectedLocale: Locale = browserLang.startsWith('zh') ? 'zh' : 'en';
        
        if (detectedLocale !== locale) {
          setLocale(detectedLocale);
          setTranslations(getTranslations(detectedLocale));
        }
      }
    }
  }, [locale]);

  const switchLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    setTranslations(getTranslations(newLocale));
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale);
    }
  };

  return (
    <LocaleContext.Provider value={{ locale, translations, switchLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}
