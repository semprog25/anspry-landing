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
    sub: "Tell Anspry what happened. We'll help you understand what you may be entitled to and what to do next.",
    examples: [
      'Train delays',
      'Online purchases',
      'Travel problems',
      'Tickets & events',
      'Bills & charges',
    ],
    cta: 'Check my situation',
    secondary: 'How it works',
    previewLabel: 'Illustrative example',
    previewTitle: 'What happened?',
    previewPlaceholder: 'Describe what went wrong…',
    previewNote: 'Empty-state product preview — not a live account.',
    previewModes: {
      type: 'Type',
      speak: 'Speak',
      scan: 'Scan',
    },
  },
  howItWorks: {
    eyebrow: 'How it works',
    title: 'From “something went wrong” to “what can I do?”',
    steps: [
      {
        title: 'Tell us what happened',
        desc: 'Type, speak or scan.',
      },
      {
        title: 'We check',
        desc: 'Anspry checks supported rules.',
      },
      {
        title: 'Understand',
        desc: 'See what may apply and what you need.',
      },
      {
        title: 'Take action',
        desc: 'Keep your case organised.',
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
    example: 'Describe what went wrong in your own words.',
    exampleShort: 'Describe what went wrong.',
  },
  product: {
    eyebrow: 'Inside the app',
    title: 'Everything you need to understand a problem.',
    desc: 'One calm home screen for describing a situation — then Voice, Claims, Evidence and Profile when you need them.',
    exampleLabel: 'Illustrative example',
    resultNote: 'Results depend on your situation and the information you provide.',
    navLabels: ['Home', 'Claims', 'Vault', 'Profile'],
    capabilities: [
      {
        key: 'voice',
        title: 'Voice',
        desc: 'Describe what happened by speaking. Anspry converts speech to text.',
      },
      {
        key: 'claims',
        title: 'Claims',
        desc: 'Keep situations and next steps organised in one place.',
      },
      {
        key: 'evidence',
        title: 'Evidence',
        desc: 'Store tickets, receipts and notices on your device by default.',
      },
      {
        key: 'profile',
        title: 'Profile',
        desc: 'Manage your account, language and privacy settings.',
      },
    ],
    screens: {
      home: 'Home',
      voice: 'Voice',
      vault: 'Vault',
      result: 'Claim result',
      claims: 'Claims',
      profile: 'Profile',
    },
  },
  categories: {
    eyebrow: 'Coverage',
    title: 'Problems Anspry can help you understand.',
    subtitle:
      'Tell us what happened. Anspry checks the information you provide against the rules it supports, explains what may apply, and shows you what evidence and next steps are needed.',
    expanding: 'Verified first. Expanded carefully.',
    available: 'Available',
    comingSoon: 'Coming soon',
    planned: 'Planned',
    live: 'Available',
    roadmap: 'Planned',
    openInApp: 'Open in the app',
    notAvailableYet: 'Not available in the app yet — check back as coverage expands.',
    situationsLabel: 'Supported situations',
    items: {
      train: 'Train delays',
      onlinePurchase: 'Online purchases',
      flight: 'Flights',
      parcel: 'Parcel problems',
      tickets: 'Tickets',
      parking: 'Parking',
      bills: 'Bills',
      travel: 'Travel',
      insurance: 'Insurance',
    },
    situations: {
      train: 'Delays and cancellations',
      onlinePurchase: 'Returns, refunds and delivery problems',
      flight: 'Delays, cancellations and denied boarding',
      parcel: 'Lost, damaged or late deliveries',
      tickets: 'Events, cancellations and postponements',
      parking: 'Parking charges and notices',
      bills: 'Energy, internet and incorrect charges',
      travel: 'Hotels, luggage and travel bookings',
      insurance: 'Coverage questions and claim prep',
    },
    desc: {
      train: 'Passenger-rights checks for supported rail journeys.',
      onlinePurchase: 'Understand which supported consumer-rights rules may apply.',
      flight: 'Check supported passenger-rights scenarios.',
      parcel: 'Organize the situation and identify what information is needed.',
      tickets: 'Event cancellations, reschedules and unusable tickets.',
      parking: 'Payment problems and disputed parking notices.',
      bills: 'Billing disputes — coming soon.',
      travel: 'Travel booking problems — coming soon.',
      insurance: 'Claim preparation support — coming soon.',
    },
    groups: {
      travel: {
        title: 'Travel',
        items: [
          { label: 'Train', live: true },
          { label: 'Flight', live: true },
          { label: 'Hotel', live: false },
          { label: 'Luggage', live: false },
        ],
      },
      shopping: {
        title: 'Shopping',
        items: [
          { label: 'Online purchase / refund', live: true },
          { label: 'Returns', live: false },
          { label: 'Warranty', live: false },
          { label: 'Deliveries', live: true },
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
          { label: 'Parking', live: true },
          { label: 'Car rental', live: false },
          { label: 'Public transport', live: false },
        ],
      },
      events: {
        title: 'Events',
        items: [
          { label: 'Tickets', live: true },
          { label: 'Cancellations', live: true },
          { label: 'Postponements', live: true },
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
    title: 'Coming soon',
    subtitle: 'More categories as rules are verified.',
    items: [],
  },
  availableNow: {
    title: 'Available',
    items: ['Train delays', 'Online purchases', 'Flights', 'Parcel problems', 'Tickets', 'Parking'],
  },
  roadmap: {
    title: 'Planned',
    items: ['Travel', 'Bills', 'Insurance'],
  },
  saveCases: {
    title: 'Save your case',
    subtitle: 'Not every category has verified rules yet — but Anspry can still help.',
    desc: 'Save travel, bills, and insurance cases now. Upload documents, add details, and get notified when checking goes live.',
    items: ['Hotel problems', 'Energy bills', 'Insurance prep'],
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
    deviceDefault: 'Your personal documents stay on your device by default.',
    accountSync: 'Profile, cases and settings can sync with your Anspry account.',
    explicitCloud:
      'Documents leave your device only when you explicitly choose to upload or share them.',
    disclaimer:
      'Anspry is a consumer assistance platform. It does not guarantee that a claim will succeed and does not replace professional legal advice.',
    layers: [
      {
        title: 'Your device',
        description: 'Documents stay local by default.',
      },
      {
        title: 'Your Anspry account',
        description: 'Profile, cases and settings can sync.',
      },
      {
        title: 'Your choice',
        description:
          'Cloud transfer only happens when you explicitly choose to upload or share information.',
      },
    ],
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
        q: 'What is Anspry?',
        a: 'Anspry is a money-recovery and claim-assistance app. You describe what went wrong; Anspry helps you understand what may apply and what to do next.',
      },
      {
        q: 'How does Anspry work?',
        a: 'Tell Anspry what happened by typing, speaking or scanning. Anspry checks supported rules, explains what may apply, and helps you organise evidence and next steps.',
      },
      {
        q: 'Is Anspry only for Deutsche Bahn?',
        a: 'No. Train delays are available now. More categories roll out as rules are verified.',
      },
      {
        q: "What happens if Anspry doesn't support my situation yet?",
        a: 'You can save the case with your details and documents on your device, then get notified when checking for that category becomes available.',
      },
      {
        q: 'What happens to my documents?',
        a: 'Personal documents stay on your device by default. They leave your device only if you explicitly choose a cloud transfer.',
      },
      {
        q: 'Can I delete my account?',
        a: 'Yes. You can delete your account and associated cloud data from the app. Local documents remain on your device until you remove them.',
      },
      {
        q: 'Does Anspry replace a lawyer?',
        a: 'No. Anspry is a consumer assistance tool. It does not provide legal representation and does not replace professional legal advice.',
      },
      {
        q: 'How does Anspry make money?',
        a: 'Core eligibility checking is free. Optional claim-preparation tools may later be offered as app-store purchases. Anspry does not take a percentage of compensation.',
      },
      {
        q: 'Does Anspry take a percentage of compensation?',
        a: 'No. Optional paid features are separate app purchases, not a share of your claim outcome.',
      },
      {
        q: 'Does Anspry guarantee money back?',
        a: 'No. Anspry helps you understand what may apply. Final decisions are made by providers, authorities, or courts.',
      },
      {
        q: 'Does Anspry submit claims for me?',
        a: 'Not yet. Anspry prepares your claim and explains next steps — you submit it to the relevant provider.',
      },
      {
        q: 'Can I use Anspry in English?',
        a: 'Yes. German, English, and Spanish are supported in the app.',
      },
    ],
  },
  cta: {
    title: "Ready to find what you're owed?",
    desc: 'Check your situation with Anspry. Public store listings are not live yet — testing builds are in progress.',
    button: 'Check my situation',
    comingSoon: 'Public listing not yet available',
    storeNote: 'See download status for Android and iOS testing details.',
  },
  download: {
    title: 'Get Anspry',
    desc: 'Find what you’re owed. Public Google Play and App Store listings are not live yet. Internal and closed testing are in progress — store links will appear here when public listings open.',
    androidStatus: 'Android testing in progress',
    iosStatus: 'iOS testing in progress',
    unavailable: 'Public listing not yet available',
    note: 'No fabricated store buttons. Real links appear only when listings are public.',
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
