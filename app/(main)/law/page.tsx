import type { Metadata } from 'next';
import VerticalPage from '@/components/VerticalPage/VerticalPage';
import { law } from '@/data/verticals';

export const metadata: Metadata = {
  title: law.metaTitle,
  description: law.metaDescription,
};

export default function LawPage() {
  return <VerticalPage data={law} />;
}
