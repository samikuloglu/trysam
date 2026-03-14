import type { ReactNode } from 'react';

export interface VerticalData {
  slug: string;
  badge: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  mailto: string;
  metaTitle: string;
  metaDescription: string;
  chatBusinessName: string;
  chatMessages: { role: 'user' | 'bot'; text: string }[];
  painLabel?: string;
  painTitle: string;
  painSubtitle: string;
  painCards: { title: string; description: string; icon: string }[];
  howItWorksSteps: { title: string; description: string }[];
  stats: { value: string; label: string }[];
  ctaTitle: string;
  ctaSubtitle: string;
}

export const daycare: VerticalData = {
  slug: 'daycare',
  badge: 'Built for Childcare Centers',
  title: 'Your front desk answers the same 10 parent questions',
  titleAccent: '50 times a day.',
  subtitle: 'Sam is an AI assistant that lives on your website and answers parent questions about enrollment, schedules, rates, and policies — instantly, 24/7 — so your staff can focus on the kids.',
  mailto: 'mailto:sami@trysam.co?subject=Sam%20Demo%20Request%20-%20Childcare%20Center&body=Hi%20Sami%2C%0A%0AI\'d%20like%20to%20learn%20more%20about%20Sam%20for%20my%20childcare%20center.%0A%0ACenter%20name%3A%20%0ALocation%3A%20%0ABest%20time%20to%20chat%3A%20%0A%0AThanks!',
  metaTitle: 'Sam — AI for Childcare & Daycare Centers',
  metaDescription: 'Sam is an AI assistant for childcare centers that answers parent questions about enrollment, rates, schedules, and policies — instantly, 24/7.',
  chatBusinessName: 'Bright Horizons Daycare',
  chatMessages: [
    { role: 'user', text: 'Hi! Do you have openings for a 3-year-old starting in September?' },
    { role: 'bot', text: 'Hi there! We do have limited availability in our Preschool Room (ages 3–4) for September. Hours are 7:30 AM – 6:00 PM, Mon–Fri. Would you like me to add your child to our tour list?' },
    { role: 'user', text: 'Yes please! What documents do I need?' },
    { role: 'bot', text: 'Great! For enrollment you\'ll need: immunization records, a registration form, and a birth certificate copy. What\'s the best email to reach you?' },
  ],
  painTitle: 'Your staff is buried in questions they\'ve already answered a thousand times.',
  painSubtitle: 'Parents want instant answers. Your team wants to focus on kids. Both are right.',
  painCards: [
    { title: 'Phone rings non-stop', description: '"What are your hours?" "Do you have infant openings?" "How much is tuition?" Your staff answers these on repeat, all day, every day.', icon: 'phone' },
    { title: 'Parents browse after hours', description: '70% of parents research childcare evenings and weekends — when no one is there to answer. Every unanswered inquiry is a lost enrollment.', icon: 'moon' },
    { title: 'Enrollment inquiries slip through', description: 'During drop-off, pickup, and nap transitions, voicemails pile up. By the time you call back, that parent already called the center down the street.', icon: 'clock' },
  ],
  howItWorksSteps: [
    { title: 'Give us your website URL', description: 'That\'s all we need to get started. We pull your hours, programs, rates, and policies directly from your site. Want Sam to know something that isn\'t on your website? Just send it over — but it\'s completely optional.' },
    { title: 'We build your assistant', description: 'Sam learns your rates, policies, hours, programs, waitlist status — everything. It answers questions exactly the way you would.' },
    { title: 'One line of code on your website', description: 'We add a small chat widget to your site. Parents get instant answers. Your phone stops ringing for the same 10 questions.' },
  ],
  stats: [
    { value: '70%', label: 'of routine parent questions answered without staff' },
    { value: '24/7', label: 'availability — parents get answers evenings, weekends, holidays' },
    { value: '1 week', label: 'from signup to live on your website' },
  ],
  ctaTitle: 'Stop answering the same questions. Let Sam handle it.',
  ctaSubtitle: 'Book a 15-minute call. We\'ll show you exactly what Sam would look like for your center — with your real info.',
};

export const k12: VerticalData = {
  slug: 'k-12',
  badge: 'Built for Private Schools & Academies',
  title: 'Prospective families visit your website at 10 PM.',
  titleAccent: 'No one is there to answer.',
  subtitle: 'Sam is an AI admissions assistant that lives on your school\'s website and answers parent questions about tuition, programs, enrollment, and campus life — instantly, 24/7 — so your admissions team never misses a prospective family.',
  mailto: 'mailto:sami@trysam.co?subject=Sam%20Demo%20Request%20-%20School&body=Hi%20Sami%2C%0A%0AI\'d%20like%20to%20learn%20more%20about%20Sam%20for%20my%20school.%0A%0ASchool%20name%3A%20%0ALocation%3A%20%0ABest%20time%20to%20chat%3A%20%0A%0AThanks!',
  metaTitle: 'Sam — AI for Private Schools & K-12',
  metaDescription: 'Sam is an AI admissions assistant for private schools that answers parent questions about tuition, programs, enrollment, and campus life — instantly, 24/7.',
  chatBusinessName: 'Admissions Assistant',
  chatMessages: [
    { role: 'user', text: 'Do you have openings for 9th grade next year?' },
    { role: 'bot', text: 'Yes, we do have limited availability for 9th grade! We offer 35 AP & Honors courses, and 92% of our graduates are accepted to top-50 universities. Would you like to schedule a campus tour?' },
    { role: 'user', text: 'What about financial aid?' },
    { role: 'bot', text: 'We offer financial aid through Blackbaud, plus a 10% sibling discount and a Board of Trustees Scholarship of up to $8,000 for qualifying 9th graders. Want me to walk you through the application steps?' },
  ],
  painTitle: 'Your admissions team can\'t be online 24/7. Sam can.',
  painSubtitle: 'Private schools lose prospective families to slow response times. Sam fixes that.',
  painCards: [
    { title: 'Repetitive inquiries', description: '"What\'s tuition?" "Do you offer financial aid?" "How do I apply?" Your admissions team answers the same questions hundreds of times each enrollment season.', icon: 'phone' },
    { title: 'Parents browse at night', description: '70% of families research schools in the evening and on weekends — when your admissions office is closed. Every unanswered inquiry is a lost enrollment.', icon: 'moon' },
    { title: 'Families move fast', description: 'Parents compare 3-5 schools at once. The first school to respond with helpful, specific information wins the campus tour — and usually the enrollment.', icon: 'bolt' },
  ],
  howItWorksSteps: [
    { title: 'Give us your website URL', description: 'That\'s all we need to get started. We pull your programs, tuition, admissions info, and policies directly from your site. Want Sam to know something that isn\'t on your website? Just send it over — but it\'s completely optional.' },
    { title: 'We build your assistant', description: 'Sam learns your tuition, programs, admissions process, financial aid, campus life — everything. It answers questions exactly the way your admissions team would.' },
    { title: 'One line of code on your website', description: 'We add a chat widget to your website. Families get instant answers. Your admissions team gets warm leads with contact info already captured.' },
  ],
  stats: [
    { value: '70%', label: 'of routine questions answered without staff' },
    { value: '24/7', label: 'availability — families get answers evenings, weekends, holidays' },
    { value: '1 week', label: 'from signup to live on your website' },
  ],
  ctaTitle: 'Stop losing families to slow responses. Let Sam handle it.',
  ctaSubtitle: 'Book a 15-minute call. We\'ll show you exactly what Sam would look like for your school — with your real info.',
};

export const property: VerticalData = {
  slug: 'property',
  badge: 'Built for Property Managers',
  title: 'Your office spends 4+ hours a day answering the',
  titleAccent: 'same tenant questions.',
  subtitle: 'Sam is an AI assistant that lives on your website and answers tenant questions about rent, maintenance, leases, and policies — instantly, 24/7 — so your team can focus on managing properties, not fielding calls.',
  mailto: 'mailto:sami@trysam.co?subject=Sam%20Demo%20Request%20-%20Property%20Management&body=Hi%20Sami%2C%0A%0AI\'d%20like%20to%20learn%20more%20about%20Sam%20for%20my%20property%20management%20company.%0A%0ACompany%20name%3A%20%0ANumber%20of%20units%3A%20%0ABest%20time%20to%20chat%3A%20%0A%0AThanks!',
  metaTitle: 'Sam — AI for Property Management',
  metaDescription: 'Sam is an AI assistant for property managers that answers tenant questions about rent, maintenance, leases, and policies — instantly, 24/7.',
  chatBusinessName: 'Maple Ridge Properties',
  chatMessages: [
    { role: 'user', text: 'When is rent due and how do I set up autopay?' },
    { role: 'bot', text: 'Rent is due on the 1st of each month. You can set up autopay through your tenant portal — go to Payments → Autopay and link your bank account. Late fees of $50 apply after the 5th. Need help with anything else?' },
    { role: 'user', text: 'Yeah, my kitchen faucet is leaking. How do I submit a maintenance request?' },
    { role: 'bot', text: 'You can submit a maintenance request through the tenant portal under Maintenance → New Request. For urgent issues like active leaks, call the emergency line at (555) 123-4567. Would you like me to start the request?' },
  ],
  painTitle: 'Your front office is drowning in routine questions that have the same answer every time.',
  painSubtitle: 'Tenants want fast answers. Your team wants to focus on operations. Both are right.',
  painCards: [
    { title: '50–100 tenant contacts per day', description: '"When is rent due?" "How do I set up autopay?" "What\'s the pet policy?" Your staff answers these on repeat — consuming 4 to 12 hours of staff time daily.', icon: 'phone' },
    { title: 'Vacancy costs you real money', description: 'Every day a unit sits empty costs $50–$70. When a prospective tenant\'s inquiry goes unanswered because your office is busy, that\'s lost rent walking out the door.', icon: 'building' },
    { title: 'After-hours inquiries wait until tomorrow', description: 'Prospective tenants browse listings evenings and weekends. Response times stretch to 24–48 hours. By then, they\'ve signed elsewhere.', icon: 'moon' },
  ],
  howItWorksSteps: [
    { title: 'Give us your website URL', description: 'That\'s all we need to get started. We pull your rent info, policies, amenities, and maintenance procedures directly from your site. Want Sam to know something that isn\'t on your website? Just send it over — but it\'s completely optional.' },
    { title: 'We build your assistant', description: 'Sam learns your rent policies, maintenance procedures, amenities, lease terms, and office hours. It answers questions exactly the way your front desk would.' },
    { title: 'One line of code on your website', description: 'We add a chat widget to your property site. Tenants and prospects get instant answers. Your phone stops ringing for the same routine questions.' },
  ],
  stats: [
    { value: '70%', label: 'of routine tenant questions answered without staff' },
    { value: '24/7', label: 'availability — tenants get answers evenings, weekends, holidays' },
    { value: '1 week', label: 'from signup to live on your website' },
  ],
  ctaTitle: 'Stop answering the same questions. Let Sam handle it.',
  ctaSubtitle: 'Book a 15-minute call. We\'ll show you exactly what Sam would look like for your properties — with your real info.',
};

export const venues: VerticalData = {
  slug: 'venues',
  badge: 'Built for Wedding & Event Venues',
  title: 'Every unanswered inquiry is a',
  titleAccent: '$10,000+ booking walking away.',
  subtitle: 'Sam is an AI assistant that lives on your venue website and answers couple and planner inquiries about availability, packages, and tours — instantly, 24/7 — so you never lose a lead to a slower response.',
  mailto: 'mailto:sami@trysam.co?subject=Sam%20Demo%20Request%20-%20Wedding%20%2F%20Event%20Venue&body=Hi%20Sami%2C%0A%0AI\'d%20like%20to%20learn%20more%20about%20Sam%20for%20my%20venue.%0A%0AVenue%20name%3A%20%0ALocation%3A%20%0ATypes%20of%20events%3A%20%0ABest%20time%20to%20chat%3A%20%0A%0AThanks!',
  metaTitle: 'Sam — AI for Wedding & Event Venues',
  metaDescription: 'Sam is an AI assistant for wedding and event venues that answers inquiries about availability, packages, and tours — instantly, 24/7.',
  chatBusinessName: 'The Grand Oak Estate',
  chatMessages: [
    { role: 'user', text: 'Hi! We\'re looking at June 2027 for about 150 guests. Do you have availability?' },
    { role: 'bot', text: 'Congratulations! For June 2027 with 150 guests, our Grand Ballroom would be a perfect fit. We currently have June 7th and June 21st available. Would you like to schedule a tour?' },
    { role: 'user', text: 'Yes! What\'s included in the package?' },
    { role: 'bot', text: 'Our all-inclusive package includes ceremony and reception space, tables, chairs, linens, a bridal suite, complimentary parking, a dedicated coordinator, and a 6-hour rental. What day works best for a tour?' },
  ],
  painTitle: 'Couples expect instant answers. Your team is busy running events.',
  painSubtitle: 'The venue that responds first wins the booking. It\'s that simple.',
  painCards: [
    { title: 'First to respond wins', description: 'Couples contact 5–10 venues at once. The one that replies first gets the tour — and usually the booking. If your response takes 24 hours, they\'ve already fallen in love with somewhere else.', icon: 'heart' },
    { title: 'Couples browse at night', description: 'Most venue research happens evenings and weekends — exactly when your office is closed. Every inquiry that waits until Monday is a potential $10,000–$30,000 booking at risk.', icon: 'moon' },
    { title: 'Same questions, every inquiry', description: '"What\'s your capacity?" "Do you have June dates?" "What\'s included?" "Can we bring our own caterer?" Your events team answers these dozens of times a week.', icon: 'clipboard' },
  ],
  howItWorksSteps: [
    { title: 'Give us your website URL', description: 'That\'s all we need to get started. We pull your packages, pricing, capacity, and venue details directly from your site. Want Sam to know something that isn\'t on your website? Just send it over — but it\'s completely optional.' },
    { title: 'We build your assistant', description: 'Sam learns your packages, availability, venue rules, and what makes your space special. It answers inquiries with the warmth and detail your couples expect.' },
    { title: 'One line of code on your website', description: 'We add a chat widget to your venue site. Couples get instant answers and tour scheduling. You wake up to qualified leads instead of missed inquiries.' },
  ],
  stats: [
    { value: '30%', label: 'more tour bookings from instant inquiry response' },
    { value: '24/7', label: 'availability — couples get answers evenings, weekends, holidays' },
    { value: '1 week', label: 'from signup to live on your website' },
  ],
  ctaTitle: 'Stop losing bookings to slow responses. Let Sam handle it.',
  ctaSubtitle: 'Book a 15-minute call. We\'ll show you exactly what Sam would look like for your venue — with your real packages and info.',
};
