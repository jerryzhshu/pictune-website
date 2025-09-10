import { Locale, Translations } from '@/types/locale';
import { en } from './en';
import { zh } from './zh';

export const translations: Record<Locale, Translations> = {
  en,
  zh,
};

export const getTranslations = (locale: Locale): Translations => {
  return translations[locale] || translations.en;
};
