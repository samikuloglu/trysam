import type { Metadata } from 'next';
import VerticalPage from '@/components/VerticalPage/VerticalPage';
import { dental } from '@/data/verticals';

export const metadata: Metadata = {
  title: dental.metaTitle,
  description: dental.metaDescription,
};

export default function DentalPage() {
  return <VerticalPage data={dental} />;
}
