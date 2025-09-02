import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JerryCode",
  description: "An independent developer focused on Swift ecosystem",
  keywords: ["Swift", "iOS", "macOS", "Independent Development", "JerryCode", "Mobile Apps", "App Development"],
  authors: [{ name: "JerryCode" }],
  creator: "JerryCode",
  publisher: "JerryCode",
  metadataBase: new URL('https://jerrycode.fun'),
  openGraph: {
    title: "JerryCode",
    description: "An independent developer focused on Swift ecosystem",
    type: "website",
    locale: "en_US",
    siteName: "JerryCode",
    url: "https://jerrycode.fun",
    images: [
      {
        url: "https://jerrycode.fun/homeimage/portrait.png",
        width: 400,
        height: 400,
        alt: "JerryCode Logo",
        type: "image/png",
      },
    ],
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/apple-touch-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/apple-touch-icon-167x167.png', sizes: '167x167', type: 'image/png' },
      { url: '/apple-touch-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#000000' },
    ],
  },
  manifest: '/site.webmanifest',
  twitter: {
    card: "summary_large_image",
    title: "JerryCode",
    description: "An independent developer focused on Swift ecosystem",
    images: ["https://jerrycode.fun/homeimage/portrait.png"],
    creator: "@jerrycode",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

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
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
