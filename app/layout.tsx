import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { TopBar } from '@/components/layout/TopBar';
import { Footer } from '@/components/layout/footer';
import { siteConfig } from "@/content/site";
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: '/images/logo-gidrorobot.webp',
    shortcut: '/images/logo-gidrorobot.webp',
    apple: '/images/logo-gidrorobot.webp',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={cn(inter.className, "min-h-screen bg-white")}>
        <TopBar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
