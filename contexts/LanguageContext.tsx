import React, { createContext, useState, useMemo, ReactNode } from 'react';
import { en } from '../translations/en';
import { ar } from '../translations/ar';

type Locale = 'en' | 'ar';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  translations: typeof en; // Use one of them as the type template
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>('en');

  const translations = useMemo(() => {
    switch (locale) {
      case 'ar':
        return ar;
      case 'en':
      default:
        return en;
    }
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = React.useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
