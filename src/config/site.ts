/** Canonical production identity — never use GitHub Pages or preview URLs here. */
export const CANONICAL_ORIGIN = 'https://anspry.de'

export const SITE = {
  name: 'Anspry',
  title: "Anspry — Find what you're owed.",
  description:
    'Anspry is a money-recovery and claim-assistance platform. Tell us what went wrong — we check whether you may be owed money, a refund, or compensation, and help you prepare honest next steps.',
  tagline: "Find what you're owed.",
  themeColor: '#FFB800',
  locale: 'en',
  twitterHandle: '@anspry',
} as const

export const PUBLIC_PATHS = {
  home: '/',
  privacy: '/privacy',
  terms: '/terms',
  support: '/support',
  download: '/download',
  about: '/about',
} as const

export function canonicalUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  if (normalized === '/') return `${CANONICAL_ORIGIN}/`
  // GitHub Pages serves directory routes with a trailing slash; keep canonicals aligned.
  const withSlash = normalized.endsWith('/') ? normalized : `${normalized}/`
  return `${CANONICAL_ORIGIN}${withSlash}`
}

export const PUBLIC_PAGES = [
  { path: PUBLIC_PATHS.home, changefreq: 'weekly', priority: '1.0' },
  { path: PUBLIC_PATHS.about, changefreq: 'monthly', priority: '0.8' },
  { path: PUBLIC_PATHS.download, changefreq: 'weekly', priority: '0.9' },
  { path: PUBLIC_PATHS.support, changefreq: 'monthly', priority: '0.7' },
  { path: PUBLIC_PATHS.privacy, changefreq: 'monthly', priority: '0.6' },
  { path: PUBLIC_PATHS.terms, changefreq: 'monthly', priority: '0.6' },
] as const

/** Intended addresses once STRATO mail is configured — not advertised as live until then. */
export const PLANNED_EMAIL = {
  support: 'support@anspry.de',
  privacy: 'privacy@anspry.de',
  security: 'security@anspry.de',
  legal: 'legal@anspry.de',
} as const
