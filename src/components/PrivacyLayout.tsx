'use client';

import { useEffect } from 'react';

interface PrivacyLayoutProps {
  children: React.ReactNode;
}

export default function PrivacyLayout({ children }: PrivacyLayoutProps) {
  useEffect(() => {
    // 获取当前页面的背景色
    const pageBackgroundColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--layer-secondary')
      .trim();
    
    // 设置 body 背景色与页面背景色一致
    document.body.style.backgroundColor = pageBackgroundColor;
    document.body.style.background = pageBackgroundColor;
    
    // 确保背景覆盖整个视口
    document.body.style.minHeight = '100vh';
    document.body.style.minHeight = '100dvh';
    
    // 清理函数：组件卸载时恢复默认背景
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.background = '';
      document.body.style.minHeight = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-[var(--layer-secondary)] transition-colors duration-300 flex justify-center" style={{ padding: '20px' }}>
      <div className="w-full max-w-[750px] p-5" style={{ maxWidth: '750px' }}>
        {children}
      </div>
    </div>
  );
}
