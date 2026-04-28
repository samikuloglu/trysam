import type { Metadata } from 'next';
import VerticalPageShell from '@/components/site/VerticalPageShell';

export const metadata: Metadata = {
  title: 'Sam — AI for Medical Aesthetics & Med Spas',
  description:
    'Sam answers client questions about treatments, pricing, and downtime — and books consults — instantly, 24/7.',
  robots: { index: false, follow: false },
};

const SAMPLE = `You are Sam, the AI assistant for "Lume Aesthetics" — a sample medical aesthetics practice in Short Hills, NJ used to demo this product. Answer client questions briefly (1–3 sentences) in a discreet, professional tone. NEVER give medical advice or diagnose; route to a consult.

Profile:
- Medical Director: Dr. Rachel Voss, MD. NPs: Sara Lin, Megan O'Brien.
- Treatments: Botox $14/unit, Dysport $5/unit, Restylane/Juvederm $725/syringe, Sculptra $850/vial, fractional CO2 $1,800–$2,800, microneedling w/ PRP $650, IV therapy $150–$300.
- Hours: Tues/Thurs 10a–7p, Wed/Fri 9a–5p, alternating Sat 10a–3p. Closed Mon/Sun.
- Consult: free, 30 min with NP. Treatment plan + pricing at consult.
- Financing: Cherry, Affirm, in-house for laser packages over $1,500.
- Always require consult before any treatment. Never confirm candidacy without exam.
- Pregnancy/breastfeeding: defer all neuromodulator/filler questions to consult.

Off-topic or beyond data: politely route to hello@lumeaestheticsdemo.com. Never give medical advice.`;

export default function MedicalAestheticsPage() {
  return (
    <VerticalPageShell
      variant="home"
      mailto="mailto:sami@trysam.co?subject=Sam%20Demo%20Request%20-%20Aesthetics"
      heroEyebrow="For Medical Aesthetics & Med Spas"
      heroHeading={
        <>
          Your clients research treatments <em>at 11pm in bed.</em>
        </>
      }
      heroBody="Sam is an AI assistant trained on your practice. It answers questions about Botox, fillers, lasers, downtime, and pricing — discreetly and accurately — and books consults directly onto your calendar, even when your front desk is closed."
      heroUrl="lumeaesthetics.com"
      placeholderTitle="Welcome to Lume Aesthetics"
      placeholderBody="Medical aesthetics in Short Hills, NJ. Board-certified physician oversight. Tox, filler, laser, microneedling, IV therapy."
      placeholderCards={['Treatments', 'Pricing', 'Consult']}
      chatStatus="Online · answering for Lume Aesthetics"
      chatGreeting="Hi! I'm Sam, your assistant for Lume Aesthetics. How can I help today?"
      chatSuggestions={['How much is Botox?', "What's the downtime for fillers?", 'Free consult?']}
      chatSystemPrompt={SAMPLE}
      outcomeHeading={
        <>
          Built for the way med spas <em>actually run.</em>
        </>
      }
      outcomes={[
        {
          num: '3×',
          title: 'More booked consults',
          body: "Clients won't call to ask about downtime — but they'll ask Sam. And they'll book the consult right after.",
        },
        {
          num: '100%',
          title: 'On-brand voice',
          body: 'Sam matches the tone of your practice — discreet, clinical, never salesy. We tune it on your existing copy and review every answer.',
        },
        {
          num: '24/7',
          title: 'Available when clients are looking',
          body: 'Most aesthetics research happens 9pm–midnight. Sam answers — and books — when your front desk is asleep.',
        },
      ]}
      featureHeading={
        <>
          Pricing, downtime, candidacy.{' '}
          <em>All the awkward questions, answered.</em>
        </>
      }
      featureBody="How much is a syringe of filler? How long is downtime for a CO2 laser? Am I a candidate for Sculptra at 32? Can I get Botox while breastfeeding? Sam answers from your clinical guide — accurately, discreetly, and never with medical advice — and books the consult."
      featureBrandTitle="Lume Aesthetics"
      featureMiniMessages={[
        { role: 'user', text: 'Botox?' },
        {
          role: 'bot',
          text: 'Sam quotes from your menu and notes that final pricing is set at consult based on units needed.',
        },
        { role: 'user', text: 'Downtime?' },
      ]}
      qbankHeading={
        <>
          The kinds of questions Sam handles for med spas{' '}
          <em>discreetly, 24/7.</em>
        </>
      }
      qbank={[
        {
          q: 'How much is a syringe of Restylane?',
          a: 'Sam quotes from your menu and notes that final pricing is set at consult based on units needed.',
        },
        {
          q: "What's the downtime for fractional CO2?",
          a: 'Sam answers from your post-care guide — typical 5–7 days social downtime — and offers a consult.',
        },
        {
          q: 'Am I a candidate for Botox?',
          a: 'Sam explains general candidacy and routes to a complimentary consult with your nurse practitioner — never medical advice.',
        },
        {
          q: 'Do you offer payment plans for laser packages?',
          a: 'Sam describes your Cherry/Affirm options and the deposit terms.',
        },
        {
          q: 'How soon can I get a consult?',
          a: 'Sam shows the next 3 open consult slots and books directly.',
        },
        {
          q: 'Do you have weekend appointments?',
          a: 'Sam answers from your schedule — typically alternating Saturdays — and offers to add to the waitlist if full.',
        },
      ]}
      roiInquiriesDefault={200}
      roiInquiriesMin={50}
      roiInquiriesMax={800}
      roiInquiriesStep={10}
      roiRateDefault={38}
      roiRateMin={18}
      roiRateMax={80}
      roiMinutesDefault={9}
      roiMinutesMin={2}
      roiMinutesMax={20}
      testimonialQuote={"\"Sam answers the questions clients won't ask a person. Our consult bookings doubled in the first month.\""}
      testimonialName="Dr. Rachel Voss"
      testimonialCategory="Aesthetics"
      testimonialOrg="Medical Director, Lume Aesthetics"
      crossSellMode="pocket"
    />
  );
}
