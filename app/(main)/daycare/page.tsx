import type { Metadata } from 'next';
import VerticalPageShell from '@/components/site/VerticalPageShell';

export const metadata: Metadata = {
  title: 'SamAI — AI for Childcare & Daycare',
  description:
    "SamAI answers parent questions about tuition, openings, hours, and tours instantly — 24/7 — so your director isn't on the phone all day.",
  robots: { index: false, follow: false },
};

const SAMPLE = `You are SamAI, the AI assistant for "Bright Horizons Daycare" — a sample family-owned childcare center in Maplewood, NJ used to demo this product. Answer parent questions briefly (1–3 sentences) in a warm, professional tone.

Profile:
- Hours: Mon–Fri 7:30am–6pm. Closed weekends and federal holidays.
- Programs: Infant (6wk–18mo), Toddler (18mo–3y), Preschool (3y–5y), Pre-K.
- Tuition (full-time, monthly): Infant $1,950 / Toddler $1,750 / Preschool $1,450 / Pre-K $1,300.
- Enrollment: immunization records, registration form, birth certificate copy, $250 deposit.
- Infant room has a 3-month waitlist; other rooms rolling.
- Tours: Tues & Thurs 10am, or by appointment.
- Lunch + 2 snacks included. Allergy-friendly options.
- Curriculum: Reggio Emilia inspired, outdoor play.
- Director: Maria Chen.

Off-topic or beyond data: politely route to hello@brighthorizonsdemo.com.`;

export default function DaycarePage() {
  return (
    <VerticalPageShell
      variant="home"
      mailto="mailto:sami@trysam.co?subject=SamAI%20Demo%20Request%20-%20Childcare"
      heroEyebrow="For Childcare & Daycare"
      heroHeading={
        <>
          Parents are calling about tuition <em>while you&apos;re with the kids.</em>
        </>
      }
      heroBody="SamAI is an AI assistant trained on your daycare. It handles tuition questions, waitlist asks, and tour bookings on your website — even on Saturday morning — so your director isn't fielding the same five calls every day."
      heroUrl="brighthorizonsdaycare.com"
      placeholderTitle="Welcome to Bright Horizons Daycare"
      placeholderBody="Family-owned childcare in Maplewood, NJ. Reggio-inspired curriculum, six classrooms, twenty years of warmth."
      placeholderCards={['Programs', 'Tuition', 'Tour']}
      chatStatus="Online · answering for Bright Horizons"
      chatGreeting="Hi! I'm SamAI, your assistant for Bright Horizons Daycare. How can I help today?"
      chatSuggestions={['How much is tuition?', 'Do you have openings?', 'When can we tour?']}
      chatSystemPrompt={SAMPLE}
      outcomeHeading={
        <>
          Built for the way childcare <em>actually runs.</em>
        </>
      }
      outcomes={[
        {
          num: '70%',
          title: 'Of parent questions answered instantly',
          body: 'Hours, tuition, age bands, openings, what to bring on day one — SamAI handles them all without staff time.',
        },
        {
          num: '24/7',
          title: 'Available when parents are looking',
          body: "Most parents research childcare at night after their kids go to bed. SamAI answers them when you can't.",
        },
        {
          num: '1 wk',
          title: 'Live on your site',
          body: "Send us your handbook, FAQ, and tuition sheet. We train SamAI, you review, and it's live in five business days.",
        },
      ]}
      featureHeading={
        <>
          The five calls you get every Monday morning,{' '}
          <em>answered Saturday at 10pm.</em>
        </>
      }
      featureBody="Tuition by age group. Sibling discounts. Waitlist status. What's included in lunch. When you're closed for holidays. Whether you take state vouchers. SamAI knows all of it because we trained it on your handbook — and it never makes anything up."
      featureBrandTitle="Bright Horizons Daycare"
      featureMiniMessages={[
        { role: 'user', text: 'Tuition?' },
        {
          role: 'bot',
          text: 'SamAI quotes the right age band, mentions sibling discount, and offers to start a waitlist application.',
        },
        { role: 'user', text: 'Tour?' },
      ]}
      qbankHeading={
        <>
          The kinds of questions SamAI handles <em>without staff time.</em>
        </>
      }
      qbank={[
        {
          q: 'How much is tuition for the toddler room?',
          a: 'SamAI quotes the right age band, mentions sibling discount, and offers to start a waitlist application.',
        },
        {
          q: 'Do you have any openings for September?',
          a: 'SamAI checks current waitlist status by classroom and offers to add the family with a refundable hold.',
        },
        {
          q: 'What time do you open and close?',
          a: 'SamAI pulls hours from your handbook — including early-care and late-pickup options if you offer them.',
        },
        {
          q: 'Is lunch included? My son has a peanut allergy.',
          a: "SamAI confirms what's included, your nut-free policy, and offers to flag the allergy for the director's review.",
        },
        {
          q: 'Do you accept the state subsidy program?',
          a: 'SamAI answers based on whether you participate, and routes the family to the right paperwork.',
        },
        {
          q: 'Can we schedule a tour this Saturday?',
          a: 'SamAI offers your tour slots (Tuesday/Thursday 10am, or by appointment) and books it directly into your calendar.',
        },
      ]}
      roiInquiriesDefault={220}
      roiInquiriesMin={50}
      roiInquiriesMax={800}
      roiInquiriesStep={10}
      roiRateDefault={28}
      roiRateMin={18}
      roiRateMax={80}
      roiMinutesDefault={6}
      roiMinutesMin={2}
      roiMinutesMax={20}
      testimonialQuote='"We were getting fifteen tuition calls a day. Now we get fifteen scheduled tours a week."'
      testimonialName="Maria Chen"
      testimonialCategory="Childcare"
      testimonialOrg="Director, Bright Horizons Daycare"
      crossSellMode="pocket"
    />
  );
}
