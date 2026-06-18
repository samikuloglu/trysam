import type { Metadata } from 'next';
import SiteNav from '@/components/site/SiteNav';
import SiteFooter from '@/components/site/SiteFooter';
import SchoolsCrossSell from '@/components/site/SchoolsCrossSell';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function WidgetLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteNav variant="home" />
      {children}
      <SchoolsCrossSell mode="pocket" />
      <SiteFooter />
    </>
  );
}
