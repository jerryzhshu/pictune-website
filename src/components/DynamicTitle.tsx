'use client';

import { useEffect } from 'react';

export default function DynamicTitle() {
  useEffect(() => {
    const updateTitle = () => {
      if (typeof window !== 'undefined') {
        const hostname = window.location.hostname;
        const href = window.location.href;
        const origin = window.location.origin;
        
        console.log('DynamicTitle: 当前域名:', hostname);
        console.log('DynamicTitle: 完整URL:', href);
        console.log('DynamicTitle: Origin:', origin);
        console.log('DynamicTitle: User Agent:', navigator.userAgent);
        console.log('DynamicTitle: 当前标题:', document.title);
        
        // 检查多种可能的方式来识别 pictune.net
        const isPictune = hostname.includes('pictune.net') || 
                         href.includes('pictune.net') || 
                         origin.includes('pictune.net') ||
                         document.referrer.includes('pictune.net') ||
                         // 检查是否通过特定的 URL 参数或路径来识别
                         window.location.search.includes('source=pictune') ||
                         // 检查 localStorage 中是否有标识
                         localStorage.getItem('domain_source') === 'pictune';
        
        console.log('DynamicTitle: 是否为 PicTune:', isPictune);
        console.log('DynamicTitle: Referrer:', document.referrer);
        
        let newTitle;
        if (isPictune) {
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
