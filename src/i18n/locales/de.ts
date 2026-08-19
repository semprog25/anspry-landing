import type { LandingTranslation } from './en'

export const de: LandingTranslation = {
  meta: {
    title: 'Anspry — Finde, was dir zusteht.',
    description:
      'Anspry prüft alltägliche Probleme und hilft dir zu verstehen, wann dir Geld, eine Erstattung, Entschädigung oder ein berechtigter Widerspruch zustehen könnte. Für Einwohner und Expats.',
  },
  nav: {
    howItWorks: 'So funktioniert\'s',
    categories: 'Kategorien',
    example: 'Zugverspätung',
    faq: 'FAQ',
    download: 'Download',
    about: 'Über uns',
    support: 'Support',
  },
  hero: {
    headline: 'Finde, was dir zusteht.',
    sub:
      'Erzähl Anspry, was schiefgelaufen ist. Wir prüfen, ob dir Geld, eine Erstattung, Entschädigung oder ein berechtigter Widerspruch zustehen könnte.',
    cta: 'Meine Situation prüfen',
    secondary: 'So funktioniert Anspry',
  },
  howItWorks: {
    title: 'So funktioniert Anspry',
    steps: [
      {
        title: 'Was ist passiert?',
        desc: 'Starte mit deinem Problem — verspäteter Zug, beschädigtes Paket, abgelehnte Erstattung — nicht mit dem Unternehmen.',
      },
      {
        title: 'Regeln prüfen Berechtigung',
        desc: 'Deterministische Regeln — keine KI-Ratelspiele — bewerten, ob ein berechtigter Anspruch oder Widerspruchsgrund besteht.',
      },
      {
        title: 'Nachweise und nächste Schritte',
        desc: 'Anspry erklärt, welche Belege wichtig sind, und hilft bei einer ehrlichen, wahrheitsgemäßen Antwort oder Geltendmachung.',
      },
    ],
  },
  categories: {
    title: 'Wobei kann Anspry helfen?',
    subtitle: 'Wir starten Kategorien erst mit geprüften Regeln. Die meisten kommen demnächst.',
    comingSoon: 'Demnächst',
    live: 'Jetzt verfügbar',
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
    desc: 'Lade dein Ticket hoch. Anspry prüft die Fahrt und sagt dir, ob nach EU-Fahrgastrechten Entschädigung infrage kommen könnte.',
    bullets: [
      '60+ Minuten Verspätung → ggf. 25% Entschädigung',
      '120+ Minuten Verspätung → ggf. 50% Entschädigung',
      'Zugausfall → ggf. bis zu 50%',
    ],
    cta: 'Zug-Anspruch prüfen',
    note: 'Ein Beispiel, wobei Anspry helfen kann — nicht das gesamte Produkt.',
  },
  safety: {
    title: 'Nur ehrliche Ansprüche',
    desc: 'Anspry hilft dir nie beim Lügen, beim Fälschen von Belegen oder beim Umgehen legitimer Bußgelder. Wir unterscheiden berechtigte Ansprüche von anfechtbaren Gebühren und Fällen, die professionelle Beratung brauchen.',
  },
  comingNext: {
    title: 'Demnächst',
    subtitle: 'Verifizierte Regeln werden schrittweise ergänzt — nie fake Funktionen.',
    items: [
      { label: 'Paketprobleme', live: false },
      { label: 'Parkgebühren', live: false },
      { label: 'Eventprobleme', live: false },
      { label: 'Hotelprobleme', live: false },
    ],
  },
  availableNow: {
    title: 'Jetzt verfügbar',
    items: ['Zugverspätungen & Annullierungen', 'Online-Kauf / Erstattung'],
  },
  saveCases: {
    title: 'Fall speichern',
    subtitle: 'Nicht jede Kategorie hat schon verifizierte Regeln — Anspry hilft trotzdem.',
    desc: 'Speichere Flug-, Paket-, Park- und Event-Fälle. Lade Dokumente hoch und werde benachrichtigt, wenn die Prüfung live geht.',
    items: ['Flugprobleme', 'Paketprobleme', 'Parkgebühren', 'Eventprobleme', 'Hotelprobleme'],
  },
  documentVault: {
    title: 'Dokumententresor',
    desc: 'Lade Tickets, Belege, Buchungen, Rechnungen und Mitteilungen hoch. Anspry organisiert Beweise — auch bevor jeder Anbieter live ist.',
  },
  claimsDashboard: {
    title: 'Anspruchs-Dashboard',
    desc: 'Verfolge aktive Ansprüche, gespeicherte Fälle und abgeschlossene Ergebnisse. Scanne Dokumente und prüfe unterstützte Kategorien.',
  },
  trust: {
    deviceControlTitle: 'Deine Dokumente. Deine Kontrolle.',
    deviceDefault:
      'Deine Dokumente bleiben standardmäßig auf deinem Gerät. Anspry lädt persönliche Dokumente nicht automatisch in die Cloud hoch.',
    accountSync: 'Dein Konto synchronisiert sich sicher zwischen Geräten, wenn du angemeldet bist.',
    explicitCloud:
      'Wenn eine Funktion ein Dokument in die Cloud senden muss, erklären wir warum und fragen zuerst um Erlaubnis.',
    disclaimer:
      'Anspry ist eine Verbraucherhilfe-Plattform. Es garantiert keinen Erfolg und ersetzt keine professionelle Rechtsberatung.',
  },
  why: {
    title: 'Warum Anspry',
    items: [
      {
        title: 'Regeln, keine Vermutungen',
        desc: 'Die Berechtigung kommt von einer deterministischen Regel-Engine. KI unterstützt — entscheidet nicht.',
      },
      {
        title: 'Problem zuerst',
        desc: 'Erzähl uns, was passiert ist. Anspry ordnet deine Situation der richtigen Kategorie und dem richtigen Prozess zu.',
      },
      {
        title: 'Einwohner und Expats',
        desc: 'Mehrsprachig von Anfang an. Für Menschen in Deutschland — und die es aus dem Ausland navigieren.',
      },
      {
        title: 'Datenschutz zuerst',
        desc: 'Deine Dokumente und Daten bleiben sicher. DSGVO-konforme Architektur.',
      },
    ],
  },
  languages: {
    title: 'Verfügbare Sprachen',
    desc: 'Deutsch, Englisch und Spanisch in der App. Weitere Sprachen folgen.',
  },
  privacy: {
    title: 'Datenschutz & Sicherheit',
    desc: 'Dokumente in privatem, verschlüsseltem Speicher. Row-Level Security — nur du siehst deine Ansprüche.',
  },
  faq: {
    title: 'FAQ',
    items: [
      {
        q: 'Ist Anspry nur für die Deutsche Bahn?',
        a: 'Nein. Anspry ist eine Plattform für viele alltägliche Geld-zurück-Situationen. Zugverspätungen sind die erste voll unterstützte Kategorie; weitere folgen.',
      },
      {
        q: 'Reicht Anspry Anträge automatisch ein?',
        a: 'Noch nicht. Anspry bereitet deinen Antrag vor und erklärt die nächsten Schritte — du reichst ihn selbst ein.',
      },
      {
        q: 'Ist das Rechtsberatung?',
        a: 'Nein. Anspry gibt Orientierung basierend auf geprüften Regeln. Komplexe Fälle brauchen ggf. professionelle Beratung.',
      },
      {
        q: 'Funktioniert es für Expats in Deutschland?',
        a: 'Ja. Anspry ist für Einwohner und Expats gedacht, mit mehrsprachiger Unterstützung.',
      },
    ],
  },
  cta: {
    title: 'Bereit zur Prüfung?',
    desc: 'Finde heraus, ob dir bei einem Problem Geld zurückzustehen könnte.',
    button: 'Meine Situation prüfen',
  },
  footer: {
    privacy: 'Datenschutz',
    terms: 'AGB',
    support: 'Support',
    copyright: '© Anspry. Alle Rechte vorbehalten.',
  },
}
