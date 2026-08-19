import type { LandingTranslation } from './en'

export const de: LandingTranslation = {
  meta: {
    title: 'Anspry — Finde, was dir zusteht.',
    description:
      'Anspry ist eine Plattform für Geld-zurück- und Anspruchshilfe. Erzähl uns, was schiefgelaufen ist — wir prüfen, ob dir Geld, eine Erstattung oder Entschädigung zustehen könnte.',
  },
  nav: {
    howItWorks: 'So funktioniert\'s',
    product: 'Die App',
    categories: 'Kategorien',
    example: 'Zugverspätung',
    faq: 'FAQ',
    download: 'Download',
    about: 'Über uns',
    support: 'Support',
    getApp: 'Anspry holen',
  },
  hero: {
    headline: 'Finde, was dir zusteht.',
    sub:
      'Etwas ist schiefgelaufen? Erzähl Anspry, was passiert ist. Wir prüfen, ob dir Geld, eine Erstattung, Entschädigung oder ein Widerspruch zustehen könnte — und helfen dir, den Anspruch zu organisieren.',
    examples: [
      'Zugverspätungen',
      'Online-Käufe',
      'Reiseprobleme',
      'Tickets & Events',
      'Rechnungen & Gebühren',
    ],
    cta: 'Meine Situation prüfen',
    secondary: 'So funktioniert\'s',
  },
  howItWorks: {
    eyebrow: 'Einfacher Ablauf',
    title: 'Vom Problem zum vorbereiteten Anspruch',
    steps: [
      {
        title: 'Erzähl, was passiert ist',
        desc: 'Starte mit deiner Situation — verspäteter Zug, abgelehnte Erstattung, beschädigtes Paket.',
      },
      {
        title: 'Anspry prüft die Situation',
        desc: 'Verifizierte Regeln — keine Vermutungen — bewerten, ob ein berechtigter Anspruch besteht.',
      },
      {
        title: 'Belege und nächste Schritte',
        desc: 'Anspry erklärt, welche Nachweise wichtig sind, und hilft bei einer ehrlichen Antwort oder Geltendmachung.',
      },
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
    title: 'Für echte Alltagsprobleme gebaut',
    desc: 'Tickets scannen, Dokumente lokal speichern, Ansprüche verfolgen — alles in einer fokussierten App.',
    resultNote: 'Die Berechtigung hängt von deiner Fahrt und den Angaben ab, die du machst.',
    screens: {
      home: 'Start',
      vault: 'Dokumententresor',
      result: 'Ergebnis',
      claims: 'Ansprüche',
    },
  },
  categories: {
    eyebrow: 'Eine Plattform, viele Situationen',
    title: 'Geld zurück im Alltag',
    subtitle:
      'Anspry ist eine breitere Anspruchshilfe-Plattform. Einige Kategorien sind heute live; weitere folgen mit verifizierten Regeln.',
    comingSoon: 'Demnächst',
    live: 'Jetzt verfügbar',
    items: {
      train: 'Zug',
      onlinePurchase: 'Online-Kauf',
      flight: 'Flug',
      parcel: 'Paket',
      tickets: 'Tickets',
      parking: 'Parken',
      bills: 'Rechnungen',
      travel: 'Reise',
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
          { label: 'Online-Kauf / Erstattung', live: true },
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
  },
  comingNext: {
    title: 'Demnächst',
    subtitle: 'Weitere Kategorien mit verifizierten Regeln — nie fake Funktionen.',
    items: ['Flug', 'Paket', 'Parken', 'Events', 'Hotels', 'Rechnungen'],
  },
  availableNow: {
    title: 'Jetzt verfügbar',
    items: ['Zugverspätungen & Annullierungen', 'Online-Kauf / Erstattung'],
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
    deviceDefault:
      'Dokumente bleiben standardmäßig auf deinem Gerät. Anspry lädt persönliche Dokumente nicht heimlich hoch.',
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
        a: 'Nein. Anspry ist eine breitere Plattform für Geld-zurück und Anspruchshilfe. Zug und Online-Erstattung sind jetzt verfügbar.',
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
    title: 'Bereit, deine Situation zu prüfen?',
    desc: 'Hol dir Anspry auf dein Handy. Android und iOS — demnächst.',
    button: 'Anspry holen',
  },
  footer: {
    privacy: 'Datenschutz',
    terms: 'AGB',
    support: 'Support',
    tagline: 'Finde, was dir zusteht.',
    copyright: '© Anspry. Alle Rechte vorbehalten.',
  },
}
