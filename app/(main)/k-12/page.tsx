import type { Metadata } from 'next';
import VerticalPage from '@/components/VerticalPage/VerticalPage';
import { k12 } from '@/data/verticals';

export const metadata: Metadata = {
  title: k12.metaTitle,
  description: k12.metaDescription,
};

export default function K12Page() {
  return <VerticalPage data={k12} />;
}
