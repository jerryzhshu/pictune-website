import React from 'react';

interface ThemedBackgroundImageProps {
  lightSrc: string;
  darkSrc: string;
  className?: string;
  style?: React.CSSProperties;
  backgroundSize?: string;
  children?: React.ReactNode;
}

export default function ThemedBackgroundImage({ 
  lightSrc, 
  darkSrc, 
  className = "", 
  style = {},
  backgroundSize = "cover",
  children
}: ThemedBackgroundImageProps) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      {/* Light mode background */}
      <div 
        className="absolute inset-0 block dark:hidden"
        style={{ 
          backgroundImage: `url('${lightSrc}')`,
          backgroundSize: backgroundSize,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Dark mode background */}
      <div 
        className="absolute inset-0 hidden dark:block"
        style={{ 
          backgroundImage: `url('${darkSrc}')`,
          backgroundSize: backgroundSize,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
