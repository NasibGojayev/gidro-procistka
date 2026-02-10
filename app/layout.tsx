import type { Metadata, Viewport } from 'next';
import './globals.css';
import './fonts.css';
import { Header } from '@/components/layout/header';
import { TopBar } from '@/components/layout/TopBar';
import { Footer } from '@/components/layout/footer';
import { siteConfig } from "@/content/site";
import { cn } from '@/lib/utils';



export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL('https://gidroprocistkaufa.ru'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={cn("font-['Inter',sans-serif]", "min-h-screen bg-white")}>
        <TopBar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
