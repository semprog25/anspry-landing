import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AnspryLogo } from '@/components/anspry-logo'
import { PUBLIC_PATHS } from '@/config/site'
import { setLandingLanguage } from '@/i18n'

interface SiteLayoutProps {
  children: React.ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'de' | 'en'

  return (
    <div className="min-h-screen bg-charcoal">
      <header className="sticky top-0 z-50 border-b border-border bg-charcoal-light/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link to={PUBLIC_PATHS.home} className="shrink-0" aria-label="Anspry home">
            <AnspryLogo size="sm" showWordmark />
          </Link>
          <nav className="hidden gap-6 text-sm md:flex">
            <Link to={PUBLIC_PATHS.about} className="text-text-muted hover:text-yellow">
              {t('nav.about')}
            </Link>
            <Link to={PUBLIC_PATHS.support} className="text-text-muted hover:text-yellow">
              {t('nav.support')}
            </Link>
            <Link to={PUBLIC_PATHS.download} className="text-text-muted hover:text-yellow">
              {t('nav.download')}
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setLandingLanguage(lang === 'de' ? 'en' : 'de')}
              className="text-sm text-text-muted hover:text-yellow"
              aria-label={lang === 'de' ? 'Switch to English' : 'Auf Deutsch wechseln'}
            >
              {lang === 'de' ? 'EN' : 'DE'}
            </button>
            <Link
              to={PUBLIC_PATHS.download}
              className="rounded-lg bg-yellow px-4 py-2 text-sm font-semibold text-charcoal neon-glow-sm hover:bg-yellow-hover"
            >
              {t('nav.download')}
            </Link>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-border py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <Link to={PUBLIC_PATHS.home} aria-label="Anspry home">
            <AnspryLogo size="sm" showWordmark />
          </Link>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-text-muted">
            <Link to={PUBLIC_PATHS.about} className="hover:text-yellow">
              {t('nav.about')}
            </Link>
            <Link to={PUBLIC_PATHS.privacy} className="hover:text-yellow">
              {t('footer.privacy')}
            </Link>
            <Link to={PUBLIC_PATHS.terms} className="hover:text-yellow">
              {t('footer.terms')}
            </Link>
            <Link to={PUBLIC_PATHS.support} className="hover:text-yellow">
              {t('footer.support')}
            </Link>
            <Link to={PUBLIC_PATHS.download} className="hover:text-yellow">
              {t('nav.download')}
            </Link>
          </div>
          <p className="text-sm text-text-muted">{t('footer.copyright')}</p>
        </div>
      </footer>
    </div>
  )
}
