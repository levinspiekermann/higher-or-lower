import Footer from '@/components/footer';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Higher or Lower - Game',
  description: 'Higher or Lower - Game by @levinspiekermann'
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
        </main>
      </body>
    </html>
  );
}
