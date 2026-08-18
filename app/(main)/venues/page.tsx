import type { Metadata } from 'next';
import VerticalPageShell from '@/components/site/VerticalPageShell';

export const metadata: Metadata = {
  title: 'SamAI — AI for Wedding & Event Venues',
  description:
    "SamAI answers couples' questions about pricing, dates, capacity, and amenities instantly — and books venue tours directly onto your calendar.",
  robots: { index: false, follow: false },
};

const SAMPLE = `You are SamAI, the AI assistant for "Stone River Estate" — a sample 1920s Hudson Valley wedding venue used to demo this product. Answer couples' questions briefly (1–3 sentences) in a warm, professional tone.

Profile:
- Stone barn (180 seated) + lawn (240 standing). 12-acre garden estate.
- Saturday peak rate: $14,500. Friday/Sunday: $10,500. Weekday: $7,000. Off-season (Nov–Mar) 30% off.
- Package includes: 10-hr rental, ceremony + reception, tables/chairs/linens, prep kitchen, day-of coordinator, 2 hr photo time before ceremony, bridal suite + groom's room.
- Catering: 4 preferred caterers; off-list allowed with $1,500 surcharge and licensed insurance.
- Bar service: licensed bartenders required, BYO liquor allowed.
- Tours: Saturdays 11am and 2pm, by appointment.
- Booking: $5,000 deposit, balance due 60 days before event.
- Coordinator: Elena Russo.

Off-topic or beyond data: politely route to events@stoneriverdemo.com.`;

export default function VenuesPage() {
  return (
    <VerticalPageShell
      variant="home"
      mailto="mailto:sami@trysam.co?subject=SamAI%20Demo%20Request%20-%20Venues"
      heroEyebrow="For Wedding & Event Venues"
      heroHeading={
        <>
          Couples plan their wedding <em>on a Sunday at midnight.</em>
        </>
      }
      heroBody="SamAI is an AI assistant trained on your venue. It answers questions about availability, capacity, packages, and what's included — and books tour appointments directly onto your calendar — so your event manager isn't drowning in repeat emails."
      heroUrl="stoneriverestate.com"
      placeholderTitle="Welcome to Stone River Estate"
      placeholderBody="A 1920s Hudson Valley estate with a 12-acre garden, restored stone barn, and 180-guest capacity. Hosting weddings since 1998."
      placeholderCards={['Tour', 'Packages', 'Dates']}
      chatStatus="Online · answering for Stone River Estate"
      chatGreeting="Hi! I'm SamAI, your assistant for Stone River Estate. How can I help today?"
      chatSuggestions={['Is May 2026 available?', 'What does the package include?', 'How many guests fit?']}
      chatSystemPrompt={SAMPLE}
      outcomeHeading={
        <>
          Built for the way venues <em>actually run.</em>
        </>
      }
      outcomes={[
        {
          num: '5×',
          title: 'More qualified tour requests',
          body: 'When couples get a real answer in 30 seconds, they book a tour. When they wait 3 days for an email reply, they book a competitor.',
        },
        {
          num: '$0',
          title: 'Lost weekend inquiries',
          body: 'Most venue research happens Friday–Sunday. SamAI answers it all instead of letting it sit in your inbox until Monday.',
        },
        {
          num: '1 hr',
          title: 'Saved per couple',
          body: 'SamAI handles the first 8 questions every couple asks. Your event manager only joins for the conversation that\'s actually ready to book.',
        },
      ]}
      featureHeading={
        <>
          Pricing, dates, capacity, the bar.{' '}
          <em>SamAI handles the first ten questions.</em>
        </>
      }
      featureBody="Is October 12th still open? What does the off-season package include? Is there a bridal suite? Can we bring our own caterer? Do you have liability insurance for fireworks? SamAI answers all of it from your packet — and books a tour for the couples who are actually ready."
      featureBrandTitle="Stone River Estate"
      featureMiniMessages={[
        { role: 'user', text: 'Oct 12?' },
        {
          role: 'bot',
          text: 'SamAI checks your booking calendar and confirms availability — or suggests the closest open Saturdays.',
        },
        { role: 'user', text: 'Tour?' },
      ]}
      qbankHeading={
        <>
          The kinds of questions SamAI handles for venues{' '}
          <em>while you&apos;re running an event.</em>
        </>
      }
      qbank={[
        {
          q: 'Is October 12, 2026 still available?',
          a: 'SamAI checks your booking calendar and confirms availability — or suggests the closest open Saturdays.',
        },
        {
          q: 'What does the Saturday package include?',
          a: 'SamAI itemizes from your contract: rental hours, tables and chairs, prep kitchen, ceremony rehearsal, day-of coordinator.',
        },
        {
          q: "What's your max guest count?",
          a: 'SamAI answers by space — barn 180 seated, lawn 240 standing — and notes the over-200 surcharge if relevant.',
        },
        {
          q: 'Can we use our own caterer?',
          a: 'SamAI explains your preferred-caterer list, the off-list policy, and the licensing requirements you require.',
        },
        {
          q: 'Is there a bridal suite?',
          a: 'SamAI describes the room, the prep time included, and offers to share photos.',
        },
        {
          q: 'Can we tour next Saturday?',
          a: 'SamAI offers tour slots (Saturdays 11am and 2pm by appointment) and books directly into your calendar.',
        },
      ]}
      roiInquiriesDefault={140}
      roiInquiriesMin={50}
      roiInquiriesMax={800}
      roiInquiriesStep={10}
      roiRateDefault={42}
      roiRateMin={18}
      roiRateMax={80}
      roiMinutesDefault={12}
      roiMinutesMin={2}
      roiMinutesMax={20}
      testimonialQuote={"\"Half my job used to be answering 'is this date available' emails. Now I just walk into already-warmed-up tours.\""}
      testimonialName="Elena Russo"
      testimonialCategory="Venues"
      testimonialOrg="Events Director, Stone River Estate"
      crossSellMode="pocket"
    />
  );
}
