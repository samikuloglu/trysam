import { ReactNode } from 'react';
import SiteNav from './SiteNav';
import SiteFooter from './SiteFooter';
import VerticalHero from './VerticalHero';
import OutcomeStats from './OutcomeStats';
import FeatureBlock from './FeatureBlock';
import BrowserMockup from './BrowserMockup';
import MiniChat, { MiniMsg } from './MiniChat';
import QuestionBank, { QA } from './QuestionBank';
import ROICalculator from './ROICalculator';
import Testimonial from './Testimonial';
import SchoolsCrossSell from './SchoolsCrossSell';
import FeatureChecklist, { ChecklistItem } from './FeatureChecklist';
import CTABanner from './CTABanner';

type Variant = 'home' | 'private' | 'charter';
type CrossSellMode = 'two-model' | 'pocket' | 'none';

interface CTA {
  label: string;
  href: string;
}

interface Props {
  variant: Variant;
  mailto: string;

  // Hero
  heroEyebrow: string;
  heroHeading: ReactNode;
  heroBody: string;
  heroUrl: string;
  heroPrimaryCta?: CTA;
  heroSecondaryCta?: CTA;
  placeholderTitle: string;
  placeholderBody: string;
  placeholderCards: [string, string, string];

  // Live chat
  chatStatus: string;
  chatGreeting: string;
  chatSuggestions: string[];
  chatSystemPrompt: string;

  // Outcome stats
  outcomeHeading: ReactNode;
  outcomes: { num: ReactNode; title: string; body: string }[];

  // Feature block
  featureHeading: ReactNode;
  featureBody: string;
  featureBrandTitle: string;
  featureMiniMessages: MiniMsg[];

  // Question bank
  qbankHeading: ReactNode;
  qbank: QA[];

  // ROI
  roiInquiriesDefault: number;
  roiRateDefault: number;
  roiMinutesDefault: number;
  roiInquiriesMin?: number;
  roiInquiriesMax?: number;
  roiInquiriesStep?: number;
  roiRateMin?: number;
  roiRateMax?: number;
  roiMinutesMin?: number;
  roiMinutesMax?: number;
  roiInquiriesLabel?: string;
  roiRateLabel?: string;
  roiOutputLabel?: string;

  // Testimonial (optional — omit name/org for unattributed pull-quote)
  testimonialQuote?: string;
  testimonialName?: string;
  testimonialCategory?: string;
  testimonialOrg?: string;

  // Feature checklist (optional)
  featureChecklist?: {
    eyebrow: string;
    heading: ReactNode;
    subhead: string;
    features: ChecklistItem[];
    liveHeading?: string;
    roadmapHeading?: string;
  };

  // Cross-sell
  crossSellMode: CrossSellMode;
  crossSellEyebrow?: string;
  crossSellHeading?: ReactNode;
  crossSellHref?: string;
  crossSellLabel?: string;
}

export default function VerticalPageShell(p: Props) {
  return (
    <>
      <SiteNav variant={p.variant} />

      <VerticalHero
        eyebrow={p.heroEyebrow}
        heading={p.heroHeading}
        body={p.heroBody}
        mailto={p.mailto}
        primaryCta={p.heroPrimaryCta}
        secondaryCta={p.heroSecondaryCta}
        url={p.heroUrl}
        placeholderTitle={p.placeholderTitle}
        placeholderBody={p.placeholderBody}
        placeholderCards={p.placeholderCards}
        chatStatus={p.chatStatus}
        chatGreeting={p.chatGreeting}
        chatSuggestions={p.chatSuggestions}
        chatSystemPrompt={p.chatSystemPrompt}
      />

      <OutcomeStats
        eyebrow="What changes for you"
        heading={p.outcomeHeading}
        stats={p.outcomes}
      />

      <FeatureBlock
        background="soft"
        reverse
        eyebrow="What Sam handles"
        heading={p.featureHeading}
        body={p.featureBody}
        cta={{ href: '#roi', label: 'See the ROI' }}
        visual={
          <div style={{ maxWidth: 480, margin: '0 auto' }}>
            <BrowserMockup
              url={p.heroUrl}
              bodyStyle={{
                background:
                  'linear-gradient(135deg, var(--bg-warm) 0%, #ece6db 100%)',
                minHeight: 360,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ padding: 32 }}>
                <div
                  style={{
                    fontFamily: 'var(--serif)',
                    fontSize: 26,
                    color: 'var(--navy)',
                    lineHeight: 1.15,
                    maxWidth: 280,
                    marginBottom: 20,
                  }}
                >
                  {p.featureBrandTitle}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: 'var(--ink-3)',
                    maxWidth: 280,
                    lineHeight: 1.5,
                  }}
                >
                  {p.placeholderBody}
                </div>
                <div style={{ display: 'flex', gap: 8, marginTop: 20 }}>
                  <div style={{ width: 60, height: 50, background: 'var(--coral)', borderRadius: 6 }} />
                  <div style={{ width: 60, height: 50, background: 'var(--navy)', borderRadius: 6 }} />
                  <div style={{ width: 60, height: 50, background: 'oklch(75% 0.05 60)', borderRadius: 6 }} />
                </div>
              </div>
              <MiniChat messages={p.featureMiniMessages} />
            </BrowserMockup>
          </div>
        }
      />

      {p.featureChecklist && (
        <FeatureChecklist
          eyebrow={p.featureChecklist.eyebrow}
          heading={p.featureChecklist.heading}
          subhead={p.featureChecklist.subhead}
          features={p.featureChecklist.features}
          liveHeading={p.featureChecklist.liveHeading}
          roadmapHeading={p.featureChecklist.roadmapHeading}
        />
      )}

      <QuestionBank heading={p.qbankHeading} qa={p.qbank} />

      <ROICalculator
        background="soft"
        heading={
          <>
            See what Sam saves you <em>every month.</em>
          </>
        }
        inquiriesDefault={p.roiInquiriesDefault}
        rateDefault={p.roiRateDefault}
        minutesDefault={p.roiMinutesDefault}
        inquiriesMin={p.roiInquiriesMin}
        inquiriesMax={p.roiInquiriesMax}
        inquiriesStep={p.roiInquiriesStep}
        rateMin={p.roiRateMin}
        rateMax={p.roiRateMax}
        minutesMin={p.roiMinutesMin}
        minutesMax={p.roiMinutesMax}
        inquiriesLabel={p.roiInquiriesLabel}
        rateLabel={p.roiRateLabel}
        outputLabel={p.roiOutputLabel}
      />

      {p.testimonialQuote && (
        <section className="section">
          <div className="frame">
            <Testimonial
              quote={p.testimonialQuote}
              name={p.testimonialName}
              category={p.testimonialCategory}
              org={p.testimonialOrg}
            />
          </div>
        </section>
      )}

      {p.crossSellMode !== 'none' && (
        <SchoolsCrossSell
          mode={p.crossSellMode}
          eyebrow={p.crossSellEyebrow}
          heading={p.crossSellHeading}
          href={p.crossSellHref}
          label={p.crossSellLabel}
        />
      )}

      <CTABanner
        heading={
          <>
            Ready to give your families <em>better answers?</em>
          </>
        }
        buttonHref={p.mailto}
        buttonLabel="Book a 20-minute demo"
      />

      <SiteFooter />
    </>
  );
}
