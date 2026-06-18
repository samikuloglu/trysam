import type { Metadata } from 'next';
import VerticalPage from '@/components/VerticalPage/VerticalPage';
import SiteNav from '@/components/site/SiteNav';
import SiteFooter from '@/components/site/SiteFooter';
import SchoolsCrossSell from '@/components/site/SchoolsCrossSell';
import { property } from '@/data/verticals';

export const metadata: Metadata = {
  title: property.metaTitle,
  description: property.metaDescription,
  robots: { index: false, follow: false },
};

export default function PropertyPage() {
  return (
    <>
      <SiteNav variant="home" />
      <VerticalPage data={property} />
      <SchoolsCrossSell mode="pocket" />
      <SiteFooter />
    </>
  );
}
