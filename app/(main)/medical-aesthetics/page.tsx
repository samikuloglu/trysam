import type { Metadata } from 'next';
import VerticalPage from '@/components/VerticalPage/VerticalPage';
import { medicalAesthetics } from '@/data/verticals';

export const metadata: Metadata = {
  title: medicalAesthetics.metaTitle,
  description: medicalAesthetics.metaDescription,
};

export default function MedicalAestheticsPage() {
  return <VerticalPage data={medicalAesthetics} />;
}
