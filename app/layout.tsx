import type { Metadata } from 'next';
import { Mulish, Source_Serif_4, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const sans = Mulish({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const serif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: {
    default: 'Sam — An intelligent assistant for small businesses',
    template: '%s | Sam',
  },
  description:
    'Sam is an AI assistant trained on your business that answers customer questions instantly — 24/7 — so your team can focus on the people in front of them.',
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
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
