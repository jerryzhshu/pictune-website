'use client';

import { useEffect } from 'react';

export default function DynamicTitle() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname;
      
      // 使用 setTimeout 确保在 Next.js 设置标题后再修改
      setTimeout(() => {
        if (hostname.includes('pictune.net')) {
          document.title = 'PicTune 应用介绍';
        } else {
          document.title = 'JerryCode';
        }
      }, 100);
    }
  }, []);

  return null;
}
