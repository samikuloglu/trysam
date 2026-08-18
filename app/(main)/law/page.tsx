import type { Metadata } from 'next';
import VerticalPageShell from '@/components/site/VerticalPageShell';

export const metadata: Metadata = {
  title: 'SamAI — AI for Law Firms',
  description:
    'SamAI screens new matter inquiries 24/7, answers basic intake questions, and books consults — without your paralegals on the phone.',
  robots: { index: false, follow: false },
};

const SAMPLE = `You are SamAI, the AI assistant for "Harrington & Associates" — a sample family and estate law firm in Westfield, NJ used to demo this product. Answer prospective-client questions briefly (1–3 sentences) in a warm, professional tone. NEVER give legal advice; route to a consult.

Profile:
- Founded 2004. Three partners: Megan Harrington (managing), David Cho, Lisa Pereira.
- Practice areas: divorce & family law, estate planning, probate, real estate closings, small business formation.
- DO NOT take: personal injury, criminal defense, immigration, IP, or out-of-state matters (NJ only, with limited NY).
- Free 15-min screening consult. Paid consult $250 (60 min, applied to retainer).
- Estate plans: $1,800 (single) / $2,800 (couple) fixed fee. Probate: hourly $385.
- Family law: $5,000 retainer, $385/hr.
- Real estate closings: $1,150 flat.

Off-topic or beyond data: politely route to intake@harringtondemo.com. NEVER give legal advice or opine on a specific case.`;

export default function LawPage() {
  return (
    <VerticalPageShell
      variant="home"
      mailto="mailto:sami@trysam.co?subject=SamAI%20Demo%20Request%20-%20Law"
      heroEyebrow="For Law Firms"
      heroHeading={
        <>
          New clients call about a case{' '}
          <em>the night something goes wrong.</em>
        </>
      }
      heroBody="SamAI is an AI assistant trained on your firm. It answers practice-area questions, screens new matter inquiries, and books consults — 24/7, in plain English — so your paralegals aren't on the phone with people who aren't actually a fit."
      heroUrl="harringtonlaw.com"
      placeholderTitle="Welcome to Harrington & Associates"
      placeholderBody="Family and estate law in Westfield, NJ. Founded 2004. Three partners, plain-English advice, fixed-fee planning available."
      placeholderCards={['Practice Areas', 'Fees', 'Consult']}
      chatStatus="Online · answering for Harrington & Associates"
      chatGreeting="Hi! I'm SamAI, your assistant for Harrington & Associates. How can I help today?"
      chatSuggestions={['Do you do divorce?', "What's a consult cost?", 'Estate planning fees?']}
      chatSystemPrompt={SAMPLE}
      outcomeHeading={
        <>
          Built for the way law firms <em>actually run.</em>
        </>
      }
      outcomes={[
        {
          num: '60%',
          title: 'Of intake calls deflected',
          body: 'Most inquiries are about practice areas, fees, and how a consult works. SamAI handles them so paralegals only join the calls that matter.',
        },
        {
          num: '24/7',
          title: 'Coverage for the moments that matter',
          body: "Family law and estate inquiries don't happen 9–5. SamAI captures the lead, answers the obvious questions, and routes urgency correctly.",
        },
        {
          num: '0',
          title: 'Legal advice given',
          body: 'SamAI never gives legal advice — by design. It explains practice areas, fees, and process; everything else routes to a consult with an attorney.',
        },
      ]}
      featureHeading={
        <>
          Intake screening, fees, practice areas.{' '}
          <em>Never legal advice.</em>
        </>
      }
      featureBody="Do you handle contested divorces? What does an estate plan cost? Can you take a personal injury case in PA? What's involved in a free 15-minute consult? SamAI answers from your firm overview — and books a consult — without ever crossing into advice. Privileged questions route straight to an attorney."
      featureBrandTitle="Harrington & Associates"
      featureMiniMessages={[
        { role: 'user', text: 'Estate?' },
        {
          role: 'bot',
          text: 'SamAI confirms practice areas, explains your typical scope of representation, and offers a 15-minute screening consult.',
        },
        { role: 'user', text: 'Fees?' },
      ]}
      qbankHeading={
        <>
          The kinds of questions SamAI handles for firms{' '}
          <em>without ever giving legal advice.</em>
        </>
      }
      qbank={[
        {
          q: 'Do you handle contested divorces?',
          a: 'SamAI confirms practice areas, explains your typical scope of representation, and offers a 15-minute screening consult.',
        },
        {
          q: 'How much does an estate plan cost?',
          a: "SamAI quotes your fixed-fee package range, what's included, and the consult that finalizes the quote.",
        },
        {
          q: 'Can you take a slip-and-fall case in Pennsylvania?',
          a: "SamAI confirms jurisdiction, refers out where you don't practice, and books a consult where you do.",
        },
        {
          q: 'How does the free consult work?',
          a: 'SamAI explains the 15-minute screening — non-privileged scope discussion — and books the slot directly.',
        },
        {
          q: 'Do you offer payment plans?',
          a: 'SamAI answers from your fee policy — fixed-fee for planning, retainer for litigation, plans available case-by-case.',
        },
        {
          q: 'How long does a typical divorce take?',
          a: 'SamAI gives general timing ranges from your firm overview, and notes that the actual answer depends on facts only an attorney can review.',
        },
      ]}
      roiInquiriesDefault={110}
      roiInquiriesMin={50}
      roiInquiriesMax={800}
      roiInquiriesStep={10}
      roiRateDefault={55}
      roiRateMin={18}
      roiRateMax={80}
      roiMinutesDefault={12}
      roiMinutesMin={2}
      roiMinutesMax={20}
      testimonialQuote='"Our paralegals were screening eight calls to find one real client. SamAI handles the seven, and we get the one."'
      testimonialName="Megan Harrington"
      testimonialCategory="Law"
      testimonialOrg="Managing Partner, Harrington & Associates"
      crossSellMode="pocket"
    />
  );
}
