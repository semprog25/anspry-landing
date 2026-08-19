import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AnspryLogo } from '@/components/anspry-logo'
import { PUBLIC_PATHS } from '@/config/site'
import { setLandingLanguage } from '@/i18n'

const NAV_LINKS = [
  { href: '#how', key: 'howItWorks' },
  { href: '#product', key: 'product' },
  { href: '#categories', key: 'categories' },
  { href: '#faq', key: 'faq' },
] as const

export function LandingHeader() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'de' | 'en'
  const [isOpen, setIsOpen] = useState(false)
  const downloadPath = `${import.meta.env.BASE_URL}${PUBLIC_PATHS.download.replace(/^\//, '')}`

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-charcoal/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:py-4">
        <Link to={PUBLIC_PATHS.home} className="shrink-0" aria-label="Anspry home">
          <AnspryLogo size="sm" showWordmark />
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex" aria-label="Primary">
          {NAV_LINKS.map((item) => (
            <a key={item.key} href={item.href} className="text-text-muted transition hover:text-yellow">
              {t(`nav.${item.key}`)}
            </a>
          ))}
          <Link to={PUBLIC_PATHS.about} className="text-text-muted transition hover:text-yellow">
            {t('nav.about')}
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            type="button"
            onClick={() => setLandingLanguage(lang === 'de' ? 'en' : 'de')}
            className="hidden min-h-11 min-w-11 rounded-lg px-2 text-sm text-text-muted transition hover:text-yellow sm:inline-flex sm:items-center sm:justify-center"
            aria-label={lang === 'de' ? 'Switch to English' : 'Auf Deutsch wechseln'}
          >
            {lang === 'de' ? 'EN' : 'DE'}
          </button>
          <Link
            to={PUBLIC_PATHS.download}
            className="hidden min-h-11 items-center rounded-xl bg-yellow px-4 text-sm font-bold text-charcoal shadow-[0_0_20px_rgba(255,184,0,0.18)] transition hover:bg-yellow-hover sm:inline-flex"
          >
            {t('nav.getApp')}
          </Link>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-border md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="text-yellow">{isOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {isOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-border bg-charcoal-light px-4 py-4 md:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="min-h-11 rounded-lg px-3 py-2 text-sm text-text-muted hover:bg-charcoal hover:text-yellow"
                onClick={() => setIsOpen(false)}
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
            <Link
              to={PUBLIC_PATHS.about}
              className="min-h-11 rounded-lg px-3 py-2 text-sm text-text-muted hover:bg-charcoal hover:text-yellow"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.about')}
            </Link>
            <Link
              to={PUBLIC_PATHS.support}
              className="min-h-11 rounded-lg px-3 py-2 text-sm text-text-muted hover:bg-charcoal hover:text-yellow"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.support')}
            </Link>
            <button
              type="button"
              onClick={() => setLandingLanguage(lang === 'de' ? 'en' : 'de')}
              className="min-h-11 rounded-lg px-3 py-2 text-left text-sm text-text-muted hover:bg-charcoal hover:text-yellow"
            >
              {lang === 'de' ? 'English' : 'Deutsch'}
            </button>
            <a
              href={downloadPath}
              className="mt-2 inline-flex min-h-12 items-center justify-center rounded-xl bg-yellow px-4 text-sm font-bold text-charcoal"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.getApp')}
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}

export function LandingFooter() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-border bg-charcoal-light py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          <div className="text-center md:text-left">
            <AnspryLogo size="md" showWordmark className="justify-center md:justify-start" />
            <p className="mt-3 max-w-xs text-sm text-text-muted">{t('footer.tagline')}</p>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-text-muted sm:grid-cols-3">
            <Link to={PUBLIC_PATHS.about} className="hover:text-yellow">
              {t('nav.about')}
            </Link>
            <Link to={PUBLIC_PATHS.download} className="hover:text-yellow">
              {t('nav.download')}
            </Link>
            <Link to={PUBLIC_PATHS.support} className="hover:text-yellow">
              {t('footer.support')}
            </Link>
            <Link to={PUBLIC_PATHS.privacy} className="hover:text-yellow">
              {t('footer.privacy')}
            </Link>
            <Link to={PUBLIC_PATHS.terms} className="hover:text-yellow">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-text-muted md:text-left">{t('footer.copyright')}</p>
      </div>
    </footer>
  )
}
