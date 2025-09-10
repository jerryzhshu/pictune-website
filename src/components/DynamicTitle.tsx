'use client';

import { useEffect } from 'react';

export default function DynamicTitle() {
  useEffect(() => {
    const updateTitle = () => {
      if (typeof window !== 'undefined') {
        const hostname = window.location.hostname;
        
        console.log('DynamicTitle: 当前域名:', hostname);
        console.log('DynamicTitle: 当前标题:', document.title);
        
        let newTitle;
        if (hostname.includes('pictune.net')) {
          newTitle = 'PicTune 应用介绍';
        } else {
          newTitle = 'JerryCode';
        }
        
        document.title = newTitle;
        console.log('DynamicTitle: 新标题设置为:', newTitle);
        console.log('DynamicTitle: 实际标题:', document.title);
      }
    };

    // 立即执行一次
    updateTitle();
    
    // 100ms后再执行一次，确保覆盖Next.js的设置
    setTimeout(updateTitle, 100);
    
    // 500ms后再执行一次，确保在所有其他脚本执行后
    setTimeout(updateTitle, 500);
    
    // 监听页面完全加载后再执行一次
    if (document.readyState === 'complete') {
      setTimeout(updateTitle, 1000);
    } else {
      window.addEventListener('load', () => {
        setTimeout(updateTitle, 1000);
      });
    }
  }, []);

  return null;
}
