import type { Metadata } from 'next';
import VerticalPageShell from '@/components/site/VerticalPageShell';

export const metadata: Metadata = {
  title: 'Sam — AI for Private K–12 Schools',
  description:
    'Sam turns prospective families browsing your admissions page at midnight into actual tour bookings — instantly, 24/7.',
};

const SAMPLE = `You are Sam, the AI admissions assistant for "Oakridge Academy" — a sample independent K–12 day school in Princeton, NJ used to demo this product. Answer prospective-family questions briefly (1–3 sentences) in a warm, professional tone.

Profile:
- Founded 1958. K–12 day school, ~480 students.
- Tuition (annual): Lower (K–4) $34,500 / Middle (5–8) $38,900 / Upper (9–12) $42,500. Sibling discount 7%.
- Financial aid: ~28% of families receive aid. Average award $14k. Applications via SSS by Jan 15.
- Open houses: Oct 12, Nov 9, Jan 18 (10am–noon). Private tours Tues/Thurs.
- Application deadline: Jan 31 for fall enrollment. Decisions Mar 10.
- Class size avg 14. Six AP offerings. 100% 4-year college placement.
- Bus service from Princeton, Hopewell, Lawrenceville.
- Head of School: Dr. Anita Rao. Director of Admissions: James Whitfield.

Off-topic or beyond data: politely route to admissions@oakridgedemo.org.`;

export default function K12Page() {
  return (
    <VerticalPageShell
      variant="k-12"
      mailto="mailto:sami@trysam.co?subject=Sam%20Demo%20Request%20-%20K%E2%80%9312"
      heroEyebrow="For Private K–12 Schools"
      heroHeading={
        <>
          Prospective families research schools{' '}
          <em>after the kids go to bed.</em>
        </>
      }
      heroBody="Sam is an AI assistant trained on your school. It answers admissions questions, books campus tours, and captures interested families — including the ones browsing at 11pm — so your enrollment team isn't chasing cold leads on Monday."
      heroUrl="oakridgeacademy.org"
      placeholderTitle="Welcome to Oakridge Academy"
      placeholderBody="Independent K–12 day school in Princeton, NJ. Founded 1958. Small classes, six AP courses, 100% college placement."
      placeholderCards={['Admissions', 'Tuition', 'Visit']}
      chatStatus="Online · answering for Oakridge Academy"
      chatGreeting="Hi! I'm Sam, your admissions assistant for Oakridge Academy. How can I help?"
      chatSuggestions={['What is tuition?', 'When is the next open house?', 'Do you offer aid?']}
      chatSystemPrompt={SAMPLE}
      outcomeHeading={
        <>
          Built for the way private schools <em>actually run.</em>
        </>
      }
      outcomes={[
        {
          num: '3×',
          title: 'More tour bookings',
          body: "Capture families when they're browsing — not when your office happens to be staffed. Most inquiries come outside 9–5.",
        },
        {
          num: '<2 min',
          title: 'Average answer time',
          body: 'Replace the back-and-forth email thread with one clear answer, on your site, the moment a parent asks.',
        },
        {
          num: '100%',
          title: 'Trained on your viewbook',
          body: 'Sam answers from your admissions handbook, tuition sheet, and FAQ — and politely routes anything else to your team.',
        },
      ]}
      featureHeading={
        <>
          From inquiry to scheduled tour, <em>without a single email.</em>
        </>
      }
      featureBody="Tuition by grade band. Application deadlines. Financial aid availability. Whether you offer transportation from a specific town. The next open house date. Sam answers from your handbook, then offers to book the family directly onto your tour calendar."
      featureBrandTitle="Oakridge Academy"
      featureMiniMessages={[
        { role: 'user', text: 'Tuition?' },
        {
          role: 'bot',
          text: 'Sam pulls from your admissions calendar and offers to RSVP the family directly.',
        },
        { role: 'user', text: 'Tours?' },
      ]}
      qbankHeading={
        <>
          The kinds of admissions questions Sam handles{' '}
          <em>without staff time.</em>
        </>
      }
      qbank={[
        {
          q: 'When is your next open house?',
          a: 'Sam pulls from your admissions calendar and offers to RSVP the family directly.',
        },
        {
          q: 'How much is tuition for 7th grade?',
          a: 'Sam quotes the right grade band and notes sibling discounts or aid eligibility.',
        },
        {
          q: 'Do you offer financial aid?',
          a: 'Sam explains your aid program, average award, and links to the application process.',
        },
        {
          q: "What's the application deadline for fall 2026?",
          a: 'Sam answers from your admissions calendar and offers to send a reminder.',
        },
        {
          q: 'Do you have a bus from Hopewell?',
          a: 'Sam answers from your transportation map and shares the morning pickup time if available.',
        },
        {
          q: "What's your average class size?",
          a: 'Sam quotes the number from your viewbook and adds context — student-teacher ratio, advisory size, etc.',
        },
      ]}
      roiInquiriesDefault={180}
      roiInquiriesMin={50}
      roiInquiriesMax={800}
      roiInquiriesStep={10}
      roiRateDefault={35}
      roiRateMin={18}
      roiRateMax={80}
      roiMinutesDefault={8}
      roiMinutesMin={2}
      roiMinutesMax={20}
      testimonialQuote='"Our admissions team used to spend Monday mornings on email triage. Now they spend it on the families who actually want to enroll."'
      testimonialName="James Whitfield"
      testimonialCategory="K–12"
      testimonialOrg="Director of Admissions, Oakridge Academy"
      crossSell={[
        {
          href: '/daycare',
          icon: 'C',
          title: 'Childcare & Daycare',
          body: 'Tuition, openings, tours — answered for parents 24/7.',
        },
        {
          href: '/venues',
          icon: 'V',
          title: 'Wedding & Event Venues',
          body: 'Pricing, dates, capacity. Tour bookings without the email thread.',
        },
        {
          href: '/dental',
          icon: 'D',
          title: 'Dental & Orthodontics',
          body: 'Insurance and pricing answers that free up your front desk.',
        },
      ]}
    />
  );
}
