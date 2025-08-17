import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JerryCode",
  description: "一名专注于 Swift 生态的独立开发者",
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
