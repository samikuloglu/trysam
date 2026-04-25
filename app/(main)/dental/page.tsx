import type { Metadata } from 'next';
import VerticalPageShell from '@/components/site/VerticalPageShell';

export const metadata: Metadata = {
  title: 'Sam — AI for Dental & Orthodontic Practices',
  description:
    'Sam answers patient questions about insurance, pricing, and appointments — and books new-patient consults — without front-desk time.',
};

const SAMPLE = `You are Sam, the AI assistant for "Summit Orthodontics" — a sample family orthodontic practice in Summit, NJ used to demo this product. Answer patient questions briefly (1–3 sentences) in a warm, professional tone. NEVER provide clinical/medical advice; route to the office.

Profile:
- Doctors: Dr. Anjali Patel (DMD), Dr. Daniel Kim (DDS).
- Hours: Mon/Wed 8a–5p, Tues/Thurs 10a–7p, Fri 8a–2p, alt Sat 9a–1p.
- Insurance accepted (in-network): Delta Dental PPO, Aetna, Cigna, MetLife. Out-of-network reimbursement available for most others.
- Invisalign $4,800–$7,500. Traditional braces $4,200–$6,500. Initial consult: free.
- Financing: in-house 0% over 24 months with $500 down. CareCredit also accepted.
- Invisalign Diamond Provider since 2019.
- First check: AAO recommends age 7.

Off-topic or beyond data: politely route to hello@summitorthodemo.com. Never give medical advice or diagnose.`;

export default function DentalPage() {
  return (
    <VerticalPageShell
      variant="dental"
      mailto="mailto:sami@trysam.co?subject=Sam%20Demo%20Request%20-%20Dental"
      heroEyebrow="For Dental & Orthodontic Practices"
      heroHeading={
        <>
          Your front desk is on hold with insurance{' '}
          <em>while new patients wait.</em>
        </>
      }
      heroBody="Sam is an AI assistant trained on your practice. It answers insurance, pricing, and scheduling questions on your website — and books new-patient consults — so your front desk can actually focus on the patients in your chair."
      heroUrl="summitorthodontics.com"
      placeholderTitle="Welcome to Summit Orthodontics"
      placeholderBody="Family orthodontics in Summit, NJ. Dr. Patel and Dr. Kim. Invisalign Diamond Provider since 2019."
      placeholderCards={['Consult', 'Invisalign', 'Insurance']}
      chatStatus="Online · answering for Summit Orthodontics"
      chatGreeting="Hi! I'm Sam, your assistant for Summit Orthodontics. How can I help today?"
      chatSuggestions={['Do you take Delta Dental?', 'How much is Invisalign?', 'Free consult?']}
      chatSystemPrompt={SAMPLE}
      outcomeHeading={
        <>
          Built for the way dental offices <em>actually run.</em>
        </>
      }
      outcomes={[
        {
          num: '2×',
          title: 'More booked consults',
          body: 'Patients bounce when they have to wait for an insurance answer. Sam responds in seconds and books them while interest is high.',
        },
        {
          num: '0 holds',
          title: 'Front desk freed up',
          body: 'The questions Sam handles are the ones that put your patients on hold. Now your team is helping the patient in front of them.',
        },
        {
          num: 'HIPAA',
          title: 'Compliant by design',
          body: 'Sam never asks for or stores PHI. It answers public practice info — insurance accepted, pricing ranges, hours, location — and routes clinical questions to your team.',
        },
      ]}
      featureHeading={
        <>
          The insurance questions that eat your front desk{' '}
          <em>all day.</em>
        </>
      }
      featureBody="Do you take Delta Dental? What's the cost of Invisalign without insurance? Do you offer payment plans? Can my 8-year-old be seen for a first orthodontic check? Sam answers from your patient guide — and books the new-patient consult directly into your scheduling software."
      featureBrandTitle="Summit Orthodontics"
      featureMiniMessages={[
        { role: 'user', text: 'Delta?' },
        {
          role: 'bot',
          text: "Sam confirms which plans you're in-network for and explains how out-of-network reimbursement works.",
        },
        { role: 'user', text: 'Cost?' },
      ]}
      qbankHeading={
        <>
          The kinds of patient questions Sam handles{' '}
          <em>without front-desk time.</em>
        </>
      }
      qbank={[
        {
          q: 'Do you accept Delta Dental PPO?',
          a: "Sam confirms which plans you're in-network for and explains how out-of-network reimbursement works.",
        },
        {
          q: 'How much is Invisalign without insurance?',
          a: 'Sam quotes the typical range from your fee guide and offers a free consult to confirm.',
        },
        {
          q: 'Do you offer payment plans?',
          a: 'Sam describes your in-house financing and CareCredit options, and explains down payment requirements.',
        },
        {
          q: 'When should my child get their first orthodontic check?',
          a: 'Sam shares the AAO age-7 guideline and offers a complimentary growth-and-development consult.',
        },
        {
          q: 'What are your hours on Saturday?',
          a: 'Sam answers from your hours sheet — including which doctor is in on which day.',
        },
        {
          q: 'Can I book a free Invisalign consult?',
          a: 'Sam pulls available slots from your scheduler and books the consult on the spot.',
        },
      ]}
      roiInquiriesDefault={260}
      roiInquiriesMin={50}
      roiInquiriesMax={800}
      roiInquiriesStep={10}
      roiRateDefault={32}
      roiRateMin={18}
      roiRateMax={80}
      roiMinutesDefault={7}
      roiMinutesMin={2}
      roiMinutesMax={20}
      testimonialQuote='"We stopped losing new patients to whoever picked up the phone first. Sam answers in five seconds."'
      testimonialName="Dr. Anjali Patel"
      testimonialCategory="Dental"
      testimonialOrg="Owner, Summit Orthodontics"
      crossSell={[
        {
          href: '/daycare',
          icon: 'C',
          title: 'Childcare & Daycare',
          body: 'Tuition, openings, tours — answered for parents 24/7.',
        },
        {
          href: '/k-12',
          icon: 'K',
          title: 'Private K–12 Schools',
          body: 'Admissions Q&A and tour booking that runs while you sleep.',
        },
        {
          href: '/venues',
          icon: 'V',
          title: 'Wedding & Event Venues',
          body: 'Pricing, dates, capacity. Tour bookings without the email thread.',
        },
      ]}
    />
  );
}
