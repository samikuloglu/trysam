import type { ReactNode } from 'react';

export type VerticalKey =
  | 'daycare'
  | 'k-12'
  | 'venues'
  | 'dental'
  | 'medical-aesthetics'
  | 'law';

export interface VerticalCrossSell {
  href: string;
  icon: string;
  title: string;
  body: string;
}

export interface VerticalConfig {
  key: VerticalKey;
  metaTitle: string;
  metaDescription: string;
  mailto: string;

  // Hero
  heroEyebrow: string;
  heroHeading: ReactNode;
  heroBody: string;
  heroUrl: string;
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
  featureMiniMessages: { role: 'bot' | 'user'; text: string }[];
  featureMiniBg?: string; // background gradient for the inner browser body
  featureBrandColors?: { coral?: string; navy?: string; sand?: string };

  // Question bank
  qbankHeading: ReactNode;
  qbank: { q: string; a: string }[];

  // ROI defaults
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

  // Testimonial
  testimonialQuote: string;
  testimonialName: string;
  testimonialCategory: string;
  testimonialOrg: string;

  // Cross-sell heading + which 3 industries appear
  crossSell: VerticalCrossSell[];
}
