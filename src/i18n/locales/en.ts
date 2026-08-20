export const en = {
  meta: {
    title: "Anspry — Find what you're owed.",
    description:
      'Anspry is a money-recovery and claim-assistance platform. Tell us what went wrong — we check whether you may be owed money, a refund, or compensation, and help you prepare honest next steps.',
  },
  nav: {
    howItWorks: 'How it works',
    product: 'The app',
    categories: 'Categories',
    privacy: 'Privacy',
    example: 'Train delays',
    faq: 'FAQ',
    download: 'Download',
    about: 'About',
    support: 'Support',
    getApp: 'Check my situation',
  },
  hero: {
    headline: "Find what you're owed.",
    sub: 'Something went wrong? Tell Anspry what happened and find out what may apply.',
    examples: [
      'Train delays',
      'Online purchases',
      'Travel problems',
      'Tickets & events',
      'Bills & charges',
    ],
    cta: 'Check my situation',
    secondary: 'How it works',
  },
  howItWorks: {
    eyebrow: 'How it works',
    title: 'A clear path from problem to next step',
    steps: [
      {
        title: 'Tell us what happened',
        desc: 'Type, speak or scan. Start with your situation — not which company to blame.',
      },
      {
        title: 'Check your situation',
        desc: 'Anspry compares your information with supported rules.',
      },
      {
        title: 'Organise your evidence',
        desc: 'Your documents stay on your device by default.',
      },
      {
        title: 'Keep track',
        desc: 'Your cases stay organised in one place.',
      },
    ],
  },
  features: {
    eyebrow: 'Capabilities',
    title: 'Built for real everyday problems',
    subtitle: 'The tools you need to understand what may apply — and stay in control.',
    items: [
      { key: 'voice', title: 'Voice', desc: 'Speak naturally.' },
      { key: 'scan', title: 'Scan', desc: 'Turn documents into structured information.' },
      { key: 'claimCheck', title: 'Claim check', desc: 'Understand what may apply.' },
      { key: 'vault', title: 'Document vault', desc: 'Keep evidence organised on your device.' },
      { key: 'claims', title: 'Claims', desc: 'Keep your cases together.' },
      { key: 'profile', title: 'Profile', desc: 'Your account, activity and settings.' },
    ],
  },
  voice: {
    eyebrow: 'Just speak',
    title: 'Describe it in your own words',
    desc: 'Use your voice to explain what happened. Anspry turns speech into text so you can check your situation faster.',
    step1: 'Voice',
    step2: 'What happened?',
    example: 'My train from Hamburg to Berlin was 90 minutes late.',
    exampleShort: 'My train from Hamburg to Berlin was 90 minutes late.',
  },
  product: {
    eyebrow: 'Inside the app',
    title: 'See how Anspry works',
    desc: 'A calm, focused experience for describing problems, checking situations, and organising evidence.',
    resultNote: 'Eligibility depends on your journey and the information you provide.',
    screens: {
      home: 'Home',
      voice: 'Voice',
      vault: 'Vault',
      result: 'Claim',
      claims: 'Claims',
      profile: 'Profile',
    },
  },
  categories: {
    eyebrow: 'Expanding coverage',
    title: 'Anspry is expanding',
    subtitle:
      'Start with train delays today. More everyday situations are coming as rules are verified.',
    expanding: 'One clear product vision — rolling out category by category.',
    comingSoon: 'Coming next',
    live: 'Available now',
    items: {
      train: 'Train delays',
      onlinePurchase: 'Online purchases',
      flight: 'Flights',
      parcel: 'Parcels',
      tickets: 'Tickets',
      parking: 'Parking',
      bills: 'Bills',
      travel: 'Travel',
      insurance: 'Insurance',
    },
    desc: {
      train: 'Delays and cancellations under EU passenger rights.',
      onlinePurchase: 'Refunds and returns for online purchases.',
      flight: 'Disruptions, delays, and denied boarding.',
      parcel: 'Damaged, lost, or late deliveries.',
      tickets: 'Events, cancellations, and postponements.',
      parking: 'Charges you may be able to challenge.',
      bills: 'Energy, internet, subscriptions, and incorrect charges.',
      travel: 'Hotels, luggage, and travel bookings.',
      insurance: 'Coverage questions and claim preparation support.',
    },
    groups: {
      travel: {
        title: 'Travel',
        items: [
          { label: 'Train', live: true },
          { label: 'Flight', live: false },
          { label: 'Hotel', live: false },
          { label: 'Luggage', live: false },
        ],
      },
      shopping: {
        title: 'Shopping',
        items: [
          { label: 'Online purchase / refund', live: false },
          { label: 'Returns', live: false },
          { label: 'Warranty', live: false },
          { label: 'Deliveries', live: false },
        ],
      },
      bills: {
        title: 'Bills',
        items: [
          { label: 'Energy', live: false },
          { label: 'Internet', live: false },
          { label: 'Subscriptions', live: false },
          { label: 'Incorrect charges', live: false },
        ],
      },
      transport: {
        title: 'Transport',
        items: [
          { label: 'Parking', live: false },
          { label: 'Car rental', live: false },
          { label: 'Public transport', live: false },
        ],
      },
      events: {
        title: 'Events',
        items: [
          { label: 'Tickets', live: false },
          { label: 'Cancellations', live: false },
          { label: 'Postponements', live: false },
        ],
      },
    },
  },
  trainExample: {
    title: 'Train delayed?',
    desc: 'Upload your ticket. Anspry checks the journey and tells you whether compensation may apply under EU passenger rights.',
    bullets: [
      '60+ minutes late → 25% compensation may apply',
      '120+ minutes late → 50% compensation may apply',
      'Train cancelled → up to 50% may apply',
    ],
    cta: 'Check a train claim',
    note: 'One example of what Anspry can help with — not the whole product.',
  },
  safety: {
    title: 'Honest claims only',
    desc: 'Anspry does not invent evidence or guarantee compensation. We help you understand what may apply based on the information you provide.',
    points: [
      'No fabricated evidence.',
      'No guaranteed compensation.',
      'No hidden document uploads.',
      'No misleading promises.',
    ],
  },
  comingNext: {
    title: 'Coming next',
    subtitle: 'More categories as rules are verified — never fake functionality.',
    items: ['Online purchases', 'Flights', 'Parcels', 'Tickets', 'Parking', 'Travel', 'Bills', 'Insurance'],
  },
  availableNow: {
    title: 'Available now',
    items: ['Train delays'],
  },
  saveCases: {
    title: 'Save your case',
    subtitle: 'Not every category has verified rules yet — but Anspry can still help.',
    desc: 'Save flight, parcel, parking, and event cases now. Upload documents, add details, and get notified when checking goes live.',
    items: ['Flight problems', 'Parcel problems', 'Parking charges', 'Event problems', 'Hotel problems'],
  },
  documentVault: {
    title: 'Document vault',
    desc: 'Tickets, receipts, bookings, bills, and notices — stored on your device by default, organised under your cases.',
  },
  claimsDashboard: {
    title: 'Claims dashboard',
    desc: 'Track active claims, saved cases, and completed outcomes in one place.',
  },
  trust: {
    deviceControlTitle: 'Your documents. Your control.',
    deviceDefault: 'Personal documents stay on your device by default.',
    accountSync: 'Account information syncs securely when you sign in.',
    explicitCloud: 'If a feature needs a document to leave your device, Anspry explains why and asks for your permission first.',
    disclaimer:
      'Anspry is a consumer assistance platform. It does not guarantee that a claim will succeed and does not replace professional legal advice.',
  },
  why: {
    title: 'Why Anspry',
    items: [
      {
        title: 'Rules, not guesses',
        desc: 'Eligibility comes from a deterministic rules engine. AI assists — it never decides.',
      },
      {
        title: 'Problem-first',
        desc: 'Tell us what happened. Anspry maps your situation to the right category and process.',
      },
      {
        title: 'Residents and expats',
        desc: 'Multilingual from day one. Built for people living in Germany — and those navigating it from abroad.',
      },
      {
        title: 'Privacy first',
        desc: 'Documents stay on your device by default. Account data syncs when you sign in.',
      },
    ],
  },
  languages: {
    title: 'Available languages',
    desc: 'German, English, and Spanish in the app. More languages coming soon.',
  },
  privacy: {
    title: 'Privacy & security',
    desc: 'Documents stored locally by default. Account data protected. No selling your data.',
  },
  faq: {
    title: 'FAQ',
    items: [
      {
        q: 'Is Anspry only for Deutsche Bahn?',
        a: 'No. Anspry is a broader money-recovery and claim-assistance platform. Train delays are available now; more categories are rolling out as rules are verified.',
      },
      {
        q: 'Does Anspry guarantee money back?',
        a: 'No. Anspry helps you understand what may apply based on verified rules and the information you provide. Final decisions are made by providers, authorities, or courts.',
      },
      {
        q: 'Where are my documents stored?',
        a: 'On your device by default. Personal documents are not automatically uploaded to the cloud.',
      },
      {
        q: 'Does Anspry upload my documents?',
        a: 'Not automatically. If a workflow requires cloud transfer, Anspry asks for your explicit permission first.',
      },
      {
        q: 'Can I use Anspry in English?',
        a: 'Yes. German, English, and Spanish are supported in the app.',
      },
      {
        q: 'Can I use voice?',
        a: 'Yes. Describe what happened by voice on the home screen. Speech is converted to text; raw audio is not retained by Anspry by default.',
      },
      {
        q: 'Is Anspry free?',
        a: 'Core checking and claim preparation are free during early access. Premium features may be offered later through app store subscriptions.',
      },
      {
        q: 'Does Anspry submit claims for me?',
        a: 'Not yet. Anspry prepares your claim and explains next steps — you submit it to the relevant provider.',
      },
    ],
  },
  cta: {
    title: "Ready to find what you're owed?",
    desc: 'Check your situation with Anspry. Android and iOS apps are coming soon.',
    button: 'Check my situation',
    comingSoon: 'Coming soon',
    storeNote: 'Store links appear when public listings go live.',
  },
  footer: {
    product: 'Product',
    privacy: 'Privacy',
    terms: 'Terms',
    support: 'Support',
    tagline: "Find what you're owed.",
    copyright: '© Anspry. All rights reserved.',
  },
}

export type LandingTranslation = typeof en
