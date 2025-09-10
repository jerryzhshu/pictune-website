import type { Viewport } from "next";
import "./globals.css";
import { LocaleProvider } from '@/contexts/LocaleContext';
import HtmlLangUpdater from '@/components/HtmlLangUpdater';
import { generateMetadata } from '@/lib/metadata';
import DynamicTitle from '@/components/DynamicTitle';

export const metadata = generateMetadata('en'); // Default to English

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#FFFFFF" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1C1C1E" media="(prefers-color-scheme: dark)" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // 立即执行的标题检测脚本
                console.log('Inline script: 开始检测域名');
                console.log('Inline script: location.hostname:', location.hostname);
                console.log('Inline script: location.href:', location.href);
                console.log('Inline script: document.domain:', document.domain);
                
                // 尝试获取原始请求的域名信息
                var originalHost = location.hostname;
                var currentUrl = location.href;
                
                // 检查各种可能包含 pictune.net 的地方
                var isPictune = false;
                
                // 检查 URL 中是否包含 pictune
                if (currentUrl.includes('pictune.net') || originalHost.includes('pictune.net')) {
                  isPictune = true;
                }
                
                // 检查浏览器地址栏的实际显示（通过 document.URL）
                if (document.URL.includes('pictune.net')) {
                  isPictune = true;
                }
                
                // 尝试通过其他方式检测
                try {
                  // 检查是否可以从 window.name 或其他地方获取信息
                  if (window.name && window.name.includes('pictune')) {
                    isPictune = true;
                  }
                } catch(e) {
                  console.log('Inline script: 无法访问 window.name');
                }
                
                // 最后的检测：检查是否有任何迹象表明这是 pictune 访问
                var userAgent = navigator.userAgent || '';
                console.log('Inline script: User Agent:', userAgent);
                
                console.log('Inline script: isPictune:', isPictune);
                
                if (isPictune) {
                  document.title = 'PicTune 应用介绍';
                  console.log('Inline script: 设置标题为 PicTune 应用介绍');
                } else {
                  document.title = 'JerryCode';
                  console.log('Inline script: 设置标题为 JerryCode');
                }
                
                console.log('Inline script: 最终标题:', document.title);
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <DynamicTitle />
        <LocaleProvider>
          <HtmlLangUpdater />
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
