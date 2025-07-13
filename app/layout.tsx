import './globals.css';
import type { Metadata } from 'next';
import { AuthProvider } from '@/contexts/AuthContext';
import { Toaster } from '@/components/ui/sonner';
import localFont from 'next/font/local';
import { Noto_Sans_Arabic } from 'next/font/google';

const slimJoe = localFont({
  src: '../public/font/Slim Joe.otf',
  display: 'swap',
  variable: '--font-slim-joe',
});

const bigJohn = localFont({
  src: '../public/font/BIG JOHN.otf',
  display: 'swap',
  variable: '--font-big-john',
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-noto-sans-arabic',
});

export const metadata: Metadata = {
  title: 'Shaoor - Online Learning Platform',
  description: 'Connect volunteers with orphanages for online learning',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${slimJoe.className} ${bigJohn.variable} ${notoSansArabic.variable}`}>
        <AuthProvider>
          {children}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}