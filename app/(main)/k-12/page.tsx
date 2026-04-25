import type { Metadata } from 'next';
import SchoolHero from '@/components/SchoolHero/SchoolHero';
import FeatureTabs from '@/components/FeatureTabs/FeatureTabs';
import SingleURLSetup from '@/components/SingleURLSetup/SingleURLSetup';
import ROICalculator from '@/components/ROICalculator/ROICalculator';
import StatsHighlight from '@/components/StatsHighlight/StatsHighlight';
import CTASection from '@/components/CTASection/CTASection';
import { k12 } from '@/data/verticals';

export const metadata: Metadata = {
  title: k12.metaTitle,
  description: k12.metaDescription,
};

export default function K12Page() {
  return (
    <>
      <SchoolHero mailto={k12.mailto} />
      <FeatureTabs />
      <SingleURLSetup />
      <ROICalculator />
      <StatsHighlight />
      <CTASection
        title="Smarter support, happier families, less work for you."
        subtitle="Sam — it's not your ordinary chatbot. Try it today."
        buttonText="Book Your Free Demo"
        buttonHref={k12.mailto}
        variant="teal"
      />
    </>
  );
}
