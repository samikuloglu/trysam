import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'Sam — AI That Answers Questions So Your Team Doesn\'t Have To',
    template: '%s | Sam',
  },
  description:
    'Sam is an AI assistant that lives on your website and answers customer questions about your business — accurately, 24/7.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    url: 'https://trysam.co',
    siteName: 'Sam',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
