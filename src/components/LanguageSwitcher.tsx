'use client';

import { useLocale } from '@/contexts/LocaleContext';
import { Locale } from '@/types/locale';

export default function LanguageSwitcher() {
  const { locale, switchLocale } = useLocale();

  const handleChineseClick = () => {
    if (locale !== 'zh') {
      switchLocale('zh');
    }
  };

  const handleEnglishClick = () => {
    if (locale !== 'en') {
      switchLocale('en');
    }
  };

  return (
    <div className="footnote" style={{ color: 'var(--label-secondary)' }}>
      <button
        onClick={handleChineseClick}
        className={`transition-all duration-200 ${locale !== 'zh' ? 'hover:underline' : ''}`}
        style={{
          color: locale === 'zh' ? 'var(--label-primary)' : 'var(--label-secondary)',
          background: 'none',
          border: 'none',
          padding: '0',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          cursor: locale === 'zh' ? 'default' : 'pointer',
        }}
        aria-label="切换到中文"
      >
        中文
      </button>
      <span style={{ margin: '0 4px', color: 'var(--label-secondary)' }}> / </span>
      <button
        onClick={handleEnglishClick}
        className={`transition-all duration-200 ${locale !== 'en' ? 'hover:underline' : ''}`}
        style={{
          color: locale === 'en' ? 'var(--label-primary)' : 'var(--label-secondary)',
          background: 'none',
          border: 'none',
          padding: '0',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          cursor: locale === 'en' ? 'default' : 'pointer',
        }}
        aria-label="Switch to English"
      >
        ENGLISH
      </button>
    </div>
  );
}
