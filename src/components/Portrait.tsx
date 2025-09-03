'use client';

import { useRef, useEffect, useState } from 'react';

interface PortraitProps {
  imageSrc: string;
  videoSrcLight: string;
  videoSrcDark: string;
}

export default function Portrait({ imageSrc, videoSrcLight, videoSrcDark }: PortraitProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hasAutoPlayed, setHasAutoPlayed] = useState(false);

  // 检测主题变化
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleThemeChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    // 设置初始主题
    setIsDarkMode(mediaQuery.matches);

    // 监听主题变化
    mediaQuery.addEventListener('change', handleThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleThemeChange);
    };
  }, []);

  // 预加载视频并自动播放一遍
  useEffect(() => {
    if (videoRef.current && !hasAutoPlayed) {
      videoRef.current.load();
      videoRef.current.addEventListener('loadeddata', () => {
        setIsVideoReady(true);
        
        // 自动播放一遍
        if (!hasAutoPlayed) {
          videoRef.current?.play().then(() => {
            // 播放完成后标记为已自动播放
            if (videoRef.current) {
              videoRef.current.addEventListener('ended', () => {
                setHasAutoPlayed(true);
                // 播放完成后重置到第一帧并隐藏
                if (videoRef.current) {
                  videoRef.current.currentTime = 0;
                }
              }, { once: true });
            }
          }).catch(() => {
            // 如果自动播放失败，标记为已自动播放
            setHasAutoPlayed(true);
          });
        }
      });
    }
  }, [isDarkMode, hasAutoPlayed]);

  const handleMouseEnter = () => {
    if (videoRef.current && isVideoReady && hasAutoPlayed) {
      setIsHovering(true);
      // 确保视频从第一帧开始播放，并启用循环
      videoRef.current.currentTime = 0;
      videoRef.current.loop = true;
      videoRef.current.play().catch(() => {
        // 静默处理播放错误
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      setIsHovering(false);
      videoRef.current.pause();
      // 重置到第一帧，确保下次hover时从正确位置开始
      videoRef.current.currentTime = 0;
      // 禁用循环，回到自动播放模式
      videoRef.current.loop = false;
    }
  };

  // 根据主题选择视频源
  const currentVideoSrc = isDarkMode ? videoSrcDark : videoSrcLight;

  return (
    <div 
      className="bg-center bg-cover bg-no-repeat relative rounded-full w-[150px] h-[150px] md:w-[180px] md:h-[180px] shrink-0 group cursor-pointer overflow-hidden"
      style={{ backgroundImage: `url('${imageSrc}')` }}
    >
      {/* Video overlay - 自动播放时显示，hover时也显示 */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover rounded-full transition-all duration-500 ease-in-out"
        style={{
          opacity: (isHovering && isVideoReady && hasAutoPlayed) || (!hasAutoPlayed && isVideoReady) ? 1 : 0,
          transform: (isHovering && isVideoReady && hasAutoPlayed) || (!hasAutoPlayed && isVideoReady) ? 'scale(1)' : 'scale(1.02)',
        }}
        muted
        loop={false} // 自动播放时不循环，hover时才循环
        playsInline
        preload="metadata"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <source src={currentVideoSrc} type="video/mp4" />
      </video>
      
      <div 
        aria-hidden="true" 
        className="absolute border border-solid inset-[-0.5px] pointer-events-none rounded-full" 
        style={{ borderColor: 'var(--fill-secondary)' }}
      />
    </div>
  );
}
