import Footer from '@/components/footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Higher or Lower - Game',
  description: 'Higher or Lower - Game by @levinspiekermann',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://higher-or-lower-six.vercel.app/',
    title: 'Higher or Lower - Game',
    description: 'Higher or Lower - Game by @levinspiekermann'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <main>
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
