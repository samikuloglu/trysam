import type { Metadata } from 'next';
import VerticalPage from '@/components/VerticalPage/VerticalPage';
import { venues } from '@/data/verticals';

export const metadata: Metadata = {
  title: venues.metaTitle,
  description: venues.metaDescription,
};

export default function VenuesPage() {
  return <VerticalPage data={venues} />;
}
