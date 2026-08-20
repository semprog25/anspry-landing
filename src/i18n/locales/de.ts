import type { LandingTranslation } from './en'

export const de: LandingTranslation = {
  meta: {
    title: 'Anspry — Finde, was dir zusteht.',
    description:
      'Anspry ist eine Plattform für Geld-zurück- und Anspruchshilfe. Erzähl uns, was schiefgelaufen ist — wir prüfen, ob dir Geld, eine Erstattung oder Entschädigung zustehen könnte, und helfen dir bei ehrlichen nächsten Schritten.',
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
    sub: 'Erzähl Anspry, was passiert ist. Wir helfen dir zu verstehen, was dir zustehen könnte — und was als Nächstes zu tun ist.',
    examples: [
      'Zugverspätungen',
      'Online-Käufe',
      'Reiseprobleme',
      'Tickets & Events',
      'Rechnungen & Gebühren',
    ],
    cta: 'Meine Situation prüfen',
    secondary: "So funktioniert's",
    previewLabel: 'Illustratives Beispiel',
    previewTitle: 'Was ist passiert?',
    previewPlaceholder: 'Beschreibe, was schiefgelaufen ist…',
    previewNote: 'Leerer Produkt-Preview — kein Live-Konto.',
    previewModes: {
      type: 'Tippen',
      speak: 'Sprechen',
      scan: 'Scannen',
    },
  },
  howItWorks: {
    eyebrow: "So funktioniert's",
    title: "Von ‚etwas ist schiefgelaufen‘ zu ‚was kann ich tun?‘",
    steps: [
      {
        title: 'Erzähl uns, was passiert ist',
        desc: 'Tippe, sprich oder scanne.',
      },
      {
        title: 'Wir prüfen',
        desc: 'Anspry prüft unterstützte Regeln.',
      },
      {
        title: 'Verstehen',
        desc: 'Sieh, was infrage kommen könnte und was du brauchst.',
      },
      {
        title: 'Handeln',
        desc: 'Behalte deinen Fall organisiert.',
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
    desc: 'Nutze deine Stimme, um zu erklären, was passiert ist. Anspry wandelt Sprache in Text um, damit du deine Situation schneller prüfen kannst.',
    step1: 'Stimme',
    step2: 'Was ist passiert?',
    example: 'Beschreibe in eigenen Worten, was schiefgelaufen ist.',
    exampleShort: 'Beschreibe in eigenen Worten, was schiefgelaufen ist.',
  },
  product: {
    eyebrow: 'In der App',
    title: 'Alles, was du brauchst, um ein Problem zu verstehen.',
    desc: 'Ein ruhiger Startbildschirm zum Beschreiben einer Situation — dann Stimme, Ansprüche, Belege und Profil, wenn du sie brauchst.',
    exampleLabel: 'Illustratives Beispiel',
    resultNote: 'Ergebnisse hängen von deiner Situation und den Angaben ab, die du machst.',
    navLabels: ['Start', 'Ansprüche', 'Tresor', 'Profil'],
    capabilities: [
      {
        key: 'voice',
        title: 'Stimme',
        desc: 'Beschreibe per Sprache, was passiert ist. Anspry wandelt Sprache in Text um.',
      },
      {
        key: 'claims',
        title: 'Ansprüche',
        desc: 'Behalte Situationen und nächste Schritte an einem Ort organisiert.',
      },
      {
        key: 'evidence',
        title: 'Belege',
        desc: 'Speichere Tickets, Quittungen und Mitteilungen standardmäßig auf deinem Gerät.',
      },
      {
        key: 'profile',
        title: 'Profil',
        desc: 'Verwalte Konto, Sprache und Datenschutzeinstellungen.',
      },
    ],
    screens: {
      home: 'Start',
      voice: 'Stimme',
      vault: 'Tresor',
      result: 'Anspruchsergebnis',
      claims: 'Ansprüche',
      profile: 'Profil',
    },
  },
  categories: {
    eyebrow: 'Abdeckung',
    title: 'Eine App. Mehr Situationen.',
    subtitle:
      'Anspry startet mit verifizierten Anspruchsszenarien und wächst, sobald neue Regeln und Abläufe getestet sind.',
    expanding: 'Zuerst verifiziert. Dann erweitert.',
    comingSoon: 'Demnächst',
    live: 'Jetzt verfügbar',
    roadmap: 'Roadmap',
    items: {
      train: 'Zugverspätungen',
      onlinePurchase: 'Online-Käufe',
      flight: 'Flüge',
      parcel: 'Paketprobleme',
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
    desc: 'Lade dein Ticket hoch. Anspry prüft die Fahrt und sagt dir, ob Entschädigung nach EU-Fahrgastrechten infrage kommen könnte.',
    bullets: [
      '60+ Minuten Verspätung → ggf. 25% Entschädigung',
      '120+ Minuten Verspätung → ggf. 50% Entschädigung',
      'Zugausfall → ggf. bis zu 50%',
    ],
    cta: 'Zug-Anspruch prüfen',
    note: 'Ein Beispiel dafür, wobei Anspry helfen kann — nicht das gesamte Produkt.',
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
    subtitle: 'Weitere Kategorien mit verifizierten Regeln.',
    items: ['Online-Käufe', 'Flüge', 'Paketprobleme'],
  },
  availableNow: {
    title: 'Jetzt verfügbar',
    items: ['Zugverspätungen'],
  },
  roadmap: {
    title: 'Roadmap',
    items: ['Tickets', 'Parken', 'Reisen', 'Rechnungen', 'Versicherung'],
  },
  saveCases: {
    title: 'Fall speichern',
    subtitle: 'Nicht jede Kategorie hat schon verifizierte Regeln — Anspry hilft trotzdem.',
    desc: 'Speichere Flug-, Paket-, Park- und Event-Fälle jetzt. Lade Dokumente hoch, ergänze Details und werde benachrichtigt, wenn die Prüfung live geht.',
    items: ['Flugprobleme', 'Paketprobleme', 'Parkgebühren', 'Eventprobleme', 'Hotelprobleme'],
  },
  documentVault: {
    title: 'Dokumententresor',
    desc: 'Tickets, Belege, Buchungen, Rechnungen und Mitteilungen — standardmäßig auf deinem Gerät gespeichert, unter deinen Fällen organisiert.',
  },
  claimsDashboard: {
    title: 'Anspruchs-Dashboard',
    desc: 'Aktive Ansprüche, gespeicherte Fälle und abgeschlossene Ergebnisse an einem Ort.',
  },
  trust: {
    deviceControlTitle: 'Deine Dokumente. Deine Kontrolle.',
    deviceDefault: 'Persönliche Dokumente bleiben standardmäßig auf deinem Gerät.',
    accountSync: 'Profil, Fälle und Einstellungen können mit deinem Anspry-Konto synchronisieren.',
    explicitCloud:
      'Dokumente verlassen dein Gerät nur, wenn du ausdrücklich hochlädst oder teilst.',
    disclaimer:
      'Anspry ist eine Verbraucherhilfe-Plattform. Sie garantiert keinen erfolgreichen Anspruch und ersetzt keine professionelle Rechtsberatung.',
    layers: [
      {
        title: 'Dein Gerät',
        description: 'Dokumente bleiben standardmäßig lokal.',
      },
      {
        title: 'Dein Anspry-Konto',
        description: 'Profil, Fälle und Einstellungen können synchronisieren.',
      },
      {
        title: 'Deine Entscheidung',
        description:
          'Cloud-Transfer findet nur statt, wenn du ausdrücklich Informationen hochlädst oder teilst.',
      },
    ],
  },
  why: {
    title: 'Warum Anspry',
    items: [
      {
        title: 'Regeln, keine Vermutungen',
        desc: 'Berechtigung kommt von einer deterministischen Regel-Engine. KI unterstützt — entscheidet nie.',
      },
      {
        title: 'Problem zuerst',
        desc: 'Erzähl uns, was passiert ist. Anspry ordnet deine Situation der richtigen Kategorie und dem richtigen Ablauf zu.',
      },
      {
        title: 'Einwohner und Expats',
        desc: 'Mehrsprachig von Anfang an. Für Menschen in Deutschland — und für diejenigen, die es aus dem Ausland navigieren.',
      },
      {
        title: 'Datenschutz zuerst',
        desc: 'Dokumente bleiben standardmäßig auf deinem Gerät. Kontodaten synchronisieren sich, wenn du dich anmeldest.',
      },
    ],
  },
  languages: {
    title: 'Verfügbare Sprachen',
    desc: 'Deutsch, Englisch und Spanisch in der App. Weitere Sprachen folgen bald.',
  },
  privacy: {
    title: 'Datenschutz & Sicherheit',
    desc: 'Dokumente standardmäßig lokal gespeichert. Kontodaten geschützt. Kein Verkauf deiner Daten.',
  },
  faq: {
    title: 'FAQ',
    items: [
      {
        q: 'Was ist Anspry?',
        a: 'Anspry ist eine App für Geld-zurück und Anspruchshilfe. Du beschreibst, was schiefgelaufen ist; Anspry hilft dir zu verstehen, was infrage kommen könnte und was als Nächstes zu tun ist.',
      },
      {
        q: 'Wie funktioniert Anspry?',
        a: 'Erzähl Anspry per Tippen, Sprechen oder Scannen, was passiert ist. Anspry prüft unterstützte Regeln, erklärt, was infrage kommen könnte, und hilft dir, Belege und nächste Schritte zu organisieren.',
      },
      {
        q: 'Ist Anspry nur für die Deutsche Bahn?',
        a: 'Nein. Zugverspätungen sind jetzt verfügbar. Weitere Kategorien folgen, sobald Regeln verifiziert sind.',
      },
      {
        q: 'Was passiert, wenn Anspry meine Situation noch nicht unterstützt?',
        a: 'Du kannst den Fall mit Details und Dokumenten auf dem Gerät speichern und wirst benachrichtigt, wenn die Prüfung für diese Kategorie verfügbar wird.',
      },
      {
        q: 'Was passiert mit meinen Dokumenten?',
        a: 'Persönliche Dokumente bleiben standardmäßig auf deinem Gerät. Sie verlassen dein Gerät nur, wenn du ausdrücklich einen Cloud-Transfer wählst.',
      },
      {
        q: 'Kann ich mein Konto löschen?',
        a: 'Ja. Du kannst Konto und zugehörige Cloud-Daten in der App löschen. Lokale Dokumente bleiben auf dem Gerät, bis du sie entfernst.',
      },
      {
        q: 'Ersetzt Anspry einen Anwalt?',
        a: 'Nein. Anspry ist ein Verbraucherhilfe-Tool. Es bietet keine rechtliche Vertretung und ersetzt keine professionelle Rechtsberatung.',
      },
      {
        q: 'Wie verdient Anspry Geld?',
        a: 'Die Kernprüfung der Berechtigung ist kostenlos. Optionale Tools zur Anspruchsvorbereitung können später als App-Store-Käufe angeboten werden. Anspry nimmt keinen Anteil an Entschädigungen.',
      },
      {
        q: 'Nimmt Anspry einen Anteil an Entschädigungen?',
        a: 'Nein. Optionale bezahlte Funktionen sind separate App-Käufe, kein Anteil an deinem Anspruchsergebnis.',
      },
      {
        q: 'Garantiert Anspry Geld zurück?',
        a: 'Nein. Anspry hilft dir zu verstehen, was infrage kommen könnte. Endgültige Entscheidungen treffen Anbieter, Behörden oder Gerichte.',
      },
      {
        q: 'Reicht Anspry Anträge für mich ein?',
        a: 'Noch nicht. Anspry bereitet deinen Anspruch vor und erklärt die nächsten Schritte — du reichst ihn beim zuständigen Anbieter ein.',
      },
      {
        q: 'Kann ich Anspry auf Englisch nutzen?',
        a: 'Ja. Deutsch, Englisch und Spanisch werden in der App unterstützt.',
      },
    ],
  },
  cta: {
    title: 'Bereit herauszufinden, was dir zusteht?',
    desc: 'Prüfe deine Situation mit Anspry. Öffentliche Store-Listings sind noch nicht live — Tests laufen.',
    button: 'Meine Situation prüfen',
    comingSoon: 'Öffentliche Listing noch nicht verfügbar',
    storeNote: 'Sieh den Download-Status für Android- und iOS-Testdetails.',
  },
  download: {
    title: 'Anspry holen',
    desc: 'Finde, was dir zusteht. Öffentliche Google-Play- und App-Store-Listings sind noch nicht live. Interne und Closed Tests laufen — Store-Links erscheinen hier, sobald öffentliche Listings verfügbar sind.',
    androidStatus: 'Android-Test läuft',
    iosStatus: 'iOS-Test läuft',
    unavailable: 'Öffentliche Listing noch nicht verfügbar',
    note: 'Keine erfundenen Store-Buttons. Echte Links erscheinen nur bei öffentlichen Listings.',
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
