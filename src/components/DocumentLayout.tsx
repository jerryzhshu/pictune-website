'use client';

import { useEffect } from 'react';

interface DocumentLayoutProps {
  children: React.ReactNode;
}

export default function DocumentLayout({ children }: DocumentLayoutProps) {
  useEffect(() => {
    // 添加文档页面的CSS类，CSS会自动处理html和body的背景色
    document.body.classList.add('document-page');
    
    // 确保背景覆盖整个视口
    document.body.style.minHeight = '100vh';
    document.body.style.minHeight = '100dvh';
    
    // 清理函数：组件卸载时移除CSS类和样式
    return () => {
      document.body.classList.remove('document-page');
      document.body.style.minHeight = '';
    };
  }, []);

  return (
    <div className="min-h-screen transition-colors duration-300 flex justify-center" style={{ padding: '20px' }}>
      <div className="w-full max-w-[750px]">
        {children}
      </div>
    </div>
  );
}
