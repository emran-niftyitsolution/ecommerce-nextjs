import CartDrawer from '@/components/cart/CartDrawer';
import { ReduxProvider } from '@/lib/providers/ReduxProvider';
import { ToastProvider } from '@/lib/providers/ToastProvider';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ecommerce Store',
  description: 'Modern ecommerce store built with Next.js 15',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          {children}
          <ToastProvider />
          <CartDrawer />
        </ReduxProvider>
      </body>
    </html>
  );
}
