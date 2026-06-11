import type { Metadata } from 'next';
import { Besley, Public_Sans, IBM_Plex_Mono, Lora } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const serif = Besley({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['400', '600', '800'],
  style: ['normal', 'italic'],
});

const sans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600'],
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '600'],
});

// Used only inside the fake school-site mockup, so the demo school
// reads as a third-party website with its own brand.
const school = Lora({
  subsets: ['latin'],
  variable: '--font-school',
  display: 'swap',
  weight: ['600'],
});

export const metadata: Metadata = {
  title: {
    default: 'Sam — AI Assistant for Private & Charter Schools',
    template: '%s · Sam',
  },
  description:
    'Sam is an AI assistant trained on your school. It answers your families around the clock, in their language — and files every answer with its source.',
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
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} ${mono.variable} ${school.variable}`}
    >
      <body>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
