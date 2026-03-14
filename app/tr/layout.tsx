import type { Metadata } from 'next';
import NavTR from '@/components/NavTR/NavTR';
import FooterTR from '@/components/FooterTR/FooterTR';
import SamWidget from '@/components/SamWidget/SamWidget';

export const metadata: Metadata = {
  title: 'Sam — Müşteri Sorularını Yapay Zeka ile Yanıtlayın',
  description:
    'Sam, web sitenizde yaşayan ve müşteri sorularını 7/24 doğru şekilde yanıtlayan bir yapay zeka asistanıdır.',
  openGraph: {
    type: 'website',
    url: 'https://trysam.co/tr/giris',
    siteName: 'Sam',
    title: 'Sam — Müşteri Sorularını Yapay Zeka ile Yanıtlayın',
    description:
      'Sam, web sitenizde yaşayan ve müşteri sorularını 7/24 doğru şekilde yanıtlayan bir yapay zeka asistanıdır.',
  },
};

export default function TurkishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div lang="tr">
      <NavTR />
      <main>{children}</main>
      <FooterTR />
      <SamWidget />
    </div>
  );
}
