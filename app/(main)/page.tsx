import type { Metadata } from 'next';
import SiteNav from '@/components/site/SiteNav';
import SiteFooter from '@/components/site/SiteFooter';
import HomeHero from '@/components/site/HomeHero';
import Industries from '@/components/site/Industries';
import OutcomeStats from '@/components/site/OutcomeStats';
import CTABanner from '@/components/site/CTABanner';

export const metadata: Metadata = {
  title: 'Sam — AI Assistant for Private & Charter Schools',
  description:
    "Sam is an AI assistant trained on your school. It answers your families accurately, around the clock, in their language — grounded in your handbook, calendar, and policies.",
};

export default function HomePage() {
  return (
    <>
      <SiteNav variant="home" />

      <HomeHero />

      <Industries
        cols={2}
        eyebrow="Which best describes your school?"
        heading={
          <>
            Two paths. Same <em>Sam.</em>
          </>
        }
        cta="Learn more"
        industries={[
          {
            href: '/private',
            icon: 'P',
            title: 'For Private Schools',
            body:
              'Tuition-supported. Admissions-driven. Sam answers tuition and financial aid questions, books campus tours, and captures inquiries from families researching at midnight.',
            cta: 'See Sam for private schools',
          },
          {
            href: '/charter',
            icon: 'C',
            title: 'For Charter Schools',
            body:
              'Tuition-free. Lottery-based. Sam answers enrollment, lottery, and sibling-preference questions across one campus or an entire network — without bloating your front office.',
            cta: 'See Sam for charter schools',
          },
        ]}
      />

      <OutcomeStats
        eyebrow="What you get"
        heading={
          <>
            Three things Sam does, <em>for every school.</em>
          </>
        }
        stats={[
          {
            num: '01',
            title: 'Grounded in your school',
            body: "Sam answers from your handbook, calendar, and policy pages — and politely says “I don't know” when it's not confident, instead of guessing.",
          },
          {
            num: '02',
            title: 'Multilingual for your families',
            body: 'Parents ask in their language; Sam answers in their language. Spanish, Turkish, Arabic, Mandarin and more — no toggles, no setup.',
          },
          {
            num: '03',
            title: 'Transparent and reviewable',
            body: 'Every answer cites the source page. Browse every conversation. See what your website is and isn’t answering, week by week.',
          },
        ]}
      />

      <CTABanner
        heading={
          <>
            Ready to give your families <em>better answers?</em>
          </>
        }
        body="20 minutes on a call. We'll show you a live demo trained on your school's real info. No commitment, no slide deck."
        buttonHref="mailto:sami@trysam.co?subject=Sam%20Demo%20Request"
        buttonLabel="Book a 20-minute demo"
      />

      <SiteFooter />
    </>
  );
}
