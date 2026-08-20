import type { LandingTranslation } from './en'

export const de: LandingTranslation = {
  meta: {
    title: 'Anspry — Finde, was dir zusteht.',
    description:
      'Anspry ist eine Plattform für Geld-zurück- und Anspruchshilfe. Erzähl uns, was schiefgelaufen ist — wir prüfen, ob dir Geld, eine Erstattung oder Entschädigung zustehen könnte.',
  },
  nav: {
    howItWorks: "So funktioniert's",
    product: 'Die App',
    categories: 'Kategorien',
    privacy: 'Datenschutz',
    example: 'Zugverspätung',
    faq: 'FAQ',
    download: 'Download',
    about: 'Über uns',
    support: 'Support',
    getApp: 'Meine Situation prüfen',
  },
  hero: {
    headline: 'Finde, was dir zusteht.',
    sub: 'Etwas ist schiefgelaufen? Erzähl Anspry, was passiert ist, und finde heraus, was infrage kommen könnte.',
    examples: [
      'Zugverspätungen',
      'Online-Käufe',
      'Reiseprobleme',
      'Tickets & Events',
      'Rechnungen & Gebühren',
    ],
    cta: 'Meine Situation prüfen',
    secondary: "So funktioniert's",
  },
  howItWorks: {
    eyebrow: "So funktioniert's",
    title: 'Ein klarer Weg vom Problem zum nächsten Schritt',
    steps: [
      {
        title: 'Erzähl, was passiert ist',
        desc: 'Tippen, sprechen oder scannen. Starte mit deiner Situation.',
      },
      {
        title: 'Situation prüfen',
        desc: 'Anspry vergleicht deine Angaben mit unterstützten Regeln.',
      },
      {
        title: 'Belege organisieren',
        desc: 'Deine Dokumente bleiben standardmäßig auf deinem Gerät.',
      },
      {
        title: 'Übersicht behalten',
        desc: 'Deine Fälle bleiben an einem Ort organisiert.',
      },
    ],
  },
  features: {
    eyebrow: 'Funktionen',
    title: 'Für echte Alltagsprobleme gebaut',
    subtitle: 'Die Werkzeuge, um zu verstehen, was infrage kommt — und die Kontrolle zu behalten.',
    items: [
      { key: 'voice', title: 'Stimme', desc: 'Natürlich sprechen.' },
      { key: 'scan', title: 'Scan', desc: 'Dokumente in strukturierte Informationen verwandeln.' },
      { key: 'claimCheck', title: 'Anspruchsprüfung', desc: 'Verstehen, was infrage kommen könnte.' },
      { key: 'vault', title: 'Dokumententresor', desc: 'Belege organisiert auf deinem Gerät behalten.' },
      { key: 'claims', title: 'Ansprüche', desc: 'Deine Fälle zusammenhalten.' },
      { key: 'profile', title: 'Profil', desc: 'Konto, Aktivität und Einstellungen.' },
    ],
  },
  voice: {
    eyebrow: 'Einfach sprechen',
    title: 'Beschreib es in deinen Worten',
    desc: 'Nutze deine Stimme, um zu erklären, was passiert ist. Anspry wandelt Sprache in Text um.',
    step1: 'Stimme',
    step2: 'Was ist passiert?',
    example: 'Mein Zug von Hamburg nach Berlin hatte 90 Minuten Verspätung.',
    exampleShort: 'Mein Zug von Hamburg nach Berlin hatte 90 Minuten Verspätung.',
  },
  product: {
    eyebrow: 'In der App',
    title: 'So arbeitet Anspry',
    desc: 'Eine ruhige, fokussierte Erfahrung zum Beschreiben von Problemen, Prüfen von Situationen und Organisieren von Belegen.',
    resultNote: 'Die Berechtigung hängt von deiner Fahrt und den Angaben ab, die du machst.',
    screens: {
      home: 'Start',
      voice: 'Stimme',
      vault: 'Tresor',
      result: 'Anspruch',
      claims: 'Ansprüche',
      profile: 'Profil',
    },
  },
  categories: {
    eyebrow: 'Wachsende Abdeckung',
    title: 'Anspry wächst weiter',
    subtitle:
      'Starte heute mit Zugverspätungen. Weitere Alltagssituationen folgen, sobald Regeln verifiziert sind.',
    expanding: 'Eine klare Produktvision — Kategorie für Kategorie.',
    comingSoon: 'Demnächst',
    live: 'Jetzt verfügbar',
    items: {
      train: 'Zugverspätungen',
      onlinePurchase: 'Online-Käufe',
      flight: 'Flüge',
      parcel: 'Pakete',
      tickets: 'Tickets',
      parking: 'Parken',
      bills: 'Rechnungen',
      travel: 'Reisen',
      insurance: 'Versicherung',
    },
    desc: {
      train: 'Verspätungen und Annullierungen nach EU-Fahrgastrechten.',
      onlinePurchase: 'Erstattungen und Rückgaben bei Online-Käufen.',
      flight: 'Störungen, Verspätungen und denied boarding.',
      parcel: 'Beschädigte, verlorene oder verspätete Sendungen.',
      tickets: 'Events, Absagen und Verschiebungen.',
      parking: 'Gebühren, die du anfechten kannst.',
      bills: 'Energie, Internet, Abos und falsche Abbuchungen.',
      travel: 'Hotels, Gepäck und Reisebuchungen.',
      insurance: 'Deckungsfragen und Unterstützung bei der Anspruchs­vorbereitung.',
    },
    groups: {
      travel: {
        title: 'Reisen',
        items: [
          { label: 'Zug', live: true },
          { label: 'Flug', live: false },
          { label: 'Hotel', live: false },
          { label: 'Gepäck', live: false },
        ],
      },
      shopping: {
        title: 'Einkaufen',
        items: [
          { label: 'Online-Kauf / Erstattung', live: false },
          { label: 'Rückgaben', live: false },
          { label: 'Garantie', live: false },
          { label: 'Lieferungen', live: false },
        ],
      },
      bills: {
        title: 'Rechnungen',
        items: [
          { label: 'Energie', live: false },
          { label: 'Internet', live: false },
          { label: 'Abos', live: false },
          { label: 'Falsche Abbuchungen', live: false },
        ],
      },
      transport: {
        title: 'Mobilität',
        items: [
          { label: 'Parken', live: false },
          { label: 'Mietwagen', live: false },
          { label: 'ÖPNV', live: false },
        ],
      },
      events: {
        title: 'Events',
        items: [
          { label: 'Tickets', live: false },
          { label: 'Absagen', live: false },
          { label: 'Verschiebungen', live: false },
        ],
      },
    },
  },
  trainExample: {
    title: 'Zug verspätet?',
    desc: 'Lade dein Ticket hoch. Anspry prüft die Fahrt und sagt dir, ob Entschädigung infrage kommen könnte.',
    bullets: [
      '60+ Minuten → ggf. 25% Entschädigung',
      '120+ Minuten → ggf. 50% Entschädigung',
      'Zugausfall → ggf. bis zu 50%',
    ],
    cta: 'Zug-Anspruch prüfen',
    note: 'Ein Beispiel — nicht das gesamte Produkt.',
  },
  safety: {
    title: 'Nur ehrliche Ansprüche',
    desc: 'Anspry erfindet keine Belege und garantiert keine Entschädigung. Wir helfen dir zu verstehen, was auf Basis deiner Angaben infrage kommen könnte.',
    points: [
      'Keine erfundenen Belege.',
      'Keine garantierte Entschädigung.',
      'Keine versteckten Dokument-Uploads.',
      'Keine irreführenden Versprechen.',
    ],
  },
  comingNext: {
    title: 'Demnächst',
    subtitle: 'Weitere Kategorien mit verifizierten Regeln — nie fake Funktionen.',
    items: ['Online-Käufe', 'Flüge', 'Pakete', 'Tickets', 'Parken', 'Reisen', 'Rechnungen', 'Versicherung'],
  },
  availableNow: {
    title: 'Jetzt verfügbar',
    items: ['Zugverspätungen'],
  },
  saveCases: {
    title: 'Fall speichern',
    subtitle: 'Nicht jede Kategorie hat schon verifizierte Regeln — Anspry hilft trotzdem.',
    desc: 'Speichere Flug-, Paket-, Park- und Event-Fälle jetzt schon.',
    items: ['Flugprobleme', 'Paketprobleme', 'Parkgebühren', 'Eventprobleme', 'Hotelprobleme'],
  },
  documentVault: {
    title: 'Dokumententresor',
    desc: 'Tickets, Belege, Buchungen und Rechnungen — standardmäßig auf deinem Gerät gespeichert.',
  },
  claimsDashboard: {
    title: 'Anspruchs-Dashboard',
    desc: 'Aktive Ansprüche, gespeicherte Fälle und Ergebnisse an einem Ort.',
  },
  trust: {
    deviceControlTitle: 'Deine Dokumente. Deine Kontrolle.',
    deviceDefault: 'Persönliche Dokumente bleiben standardmäßig auf deinem Gerät.',
    accountSync: 'Kontoinformationen synchronisieren sich sicher, wenn du angemeldet bist.',
    explicitCloud:
      'Wenn eine Funktion ein Dokument vom Gerät braucht, erklären wir warum und fragen um Erlaubnis.',
    disclaimer:
      'Anspry ist eine Verbraucherhilfe-Plattform. Kein Erfolgsversprechen und keine Rechtsberatung.',
  },
  why: {
    title: 'Warum Anspry',
    items: [
      {
        title: 'Regeln, keine Vermutungen',
        desc: 'Berechtigung kommt von einer Regel-Engine. KI unterstützt — entscheidet nicht.',
      },
      {
        title: 'Problem zuerst',
        desc: 'Erzähl uns, was passiert ist. Anspry ordnet es der richtigen Kategorie zu.',
      },
      {
        title: 'Einwohner und Expats',
        desc: 'Mehrsprachig von Anfang an — für Menschen in Deutschland und Expats.',
      },
      {
        title: 'Datenschutz zuerst',
        desc: 'Dokumente bleiben auf dem Gerät. Kontodaten synchronisieren sich beim Anmelden.',
      },
    ],
  },
  languages: {
    title: 'Verfügbare Sprachen',
    desc: 'Deutsch, Englisch und Spanisch in der App.',
  },
  privacy: {
    title: 'Datenschutz & Sicherheit',
    desc: 'Dokumente lokal gespeichert. Kontodaten geschützt. Kein Verkauf deiner Daten.',
  },
  faq: {
    title: 'FAQ',
    items: [
      {
        q: 'Ist Anspry nur für die Deutsche Bahn?',
        a: 'Nein. Anspry ist eine breitere Plattform für Geld-zurück und Anspruchshilfe. Zugverspätungen sind jetzt verfügbar; weitere Kategorien folgen.',
      },
      {
        q: 'Garantiert Anspry Geld zurück?',
        a: 'Nein. Anspry hilft dir zu verstehen, was auf Basis verifizierter Regeln infrage kommen könnte.',
      },
      {
        q: 'Wo werden meine Dokumente gespeichert?',
        a: 'Standardmäßig auf deinem Gerät. Persönliche Dokumente werden nicht automatisch in die Cloud hochgeladen.',
      },
      {
        q: 'Lädt Anspry meine Dokumente hoch?',
        a: 'Nicht automatisch. Bei Cloud-Transfer fragen wir zuerst um deine ausdrückliche Erlaubnis.',
      },
      {
        q: 'Kann ich Anspry auf Englisch nutzen?',
        a: 'Ja. Deutsch, Englisch und Spanisch werden unterstützt.',
      },
      {
        q: 'Kann ich die Stimme nutzen?',
        a: 'Ja. Beschreibe per Sprache, was passiert ist. Audio wird standardmäßig nicht gespeichert.',
      },
      {
        q: 'Ist Anspry kostenlos?',
        a: 'Kernfunktionen sind im Early Access kostenlos. Premium-Funktionen können später über App-Store-Abos angeboten werden.',
      },
      {
        q: 'Reicht Anspry Anträge für mich ein?',
        a: 'Noch nicht. Anspry bereitet vor und erklärt die nächsten Schritte — du reichst selbst ein.',
      },
    ],
  },
  cta: {
    title: 'Bereit herauszufinden, was dir zusteht?',
    desc: 'Prüfe deine Situation mit Anspry. Android- und iOS-Apps folgen in Kürze.',
    button: 'Meine Situation prüfen',
    comingSoon: 'Demnächst',
    storeNote: 'Store-Links erscheinen, sobald die öffentlichen Listings live sind.',
  },
  footer: {
    product: 'Produkt',
    privacy: 'Datenschutz',
    terms: 'AGB',
    support: 'Support',
    tagline: 'Finde, was dir zusteht.',
    copyright: '© Anspry. Alle Rechte vorbehalten.',
  },
}
