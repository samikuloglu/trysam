import type { Metadata } from 'next';
import VerticalPage from '@/components/VerticalPage/VerticalPage';
import { daycare } from '@/data/verticals';

export const metadata: Metadata = {
  title: daycare.metaTitle,
  description: daycare.metaDescription,
};

export default function DaycarePage() {
  return <VerticalPage data={daycare} />;
}
