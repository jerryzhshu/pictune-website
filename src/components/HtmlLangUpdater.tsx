'use client';

import { useEffect } from 'react';
import { useLocale } from '@/contexts/LocaleContext';

export default function HtmlLangUpdater() {
  const { locale } = useLocale();

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en';
    }
  }, [locale]);

  return null;
}
