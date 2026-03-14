import type { Metadata } from 'next';
import VerticalPage from '@/components/VerticalPage/VerticalPage';
import { property } from '@/data/verticals';

export const metadata: Metadata = {
  title: property.metaTitle,
  description: property.metaDescription,
};

export default function PropertyPage() {
  return <VerticalPage data={property} />;
}
