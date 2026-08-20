import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { PageHead } from '@/components/page-head'
import { AnspryLogo } from '@/components/anspry-logo'
import { LandingFooter, LandingHeader } from '@/components/landing-chrome'
import { PUBLIC_PATHS } from '@/config/site'

export function DownloadPage() {
  const { t } = useTranslation()

  return (
    <>
      <PageHead
        title={`${t('download.title')} — Anspry`}
        description={t('download.desc')}
        path={PUBLIC_PATHS.download}
      />
      <LandingHeader />
      <main className="mx-auto max-w-3xl px-4 py-16 md:py-24">
        <div className="text-center">
          <AnspryLogo size="lg" showWordmark className="justify-center" />
          <h1 className="mt-8 text-3xl font-bold text-text md:text-4xl">{t('download.title')}</h1>
          <p className="mx-auto mt-4 max-w-lg text-lg text-text-muted">{t('download.desc')}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <article className="rounded-2xl border border-border bg-charcoal-light p-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow">Android</p>
            <p className="mt-4 text-2xl font-bold text-text">Google Play</p>
            <p className="mt-3 text-sm text-text-muted">{t('download.androidStatus')}</p>
            <span
              className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-dashed border-border px-6 text-sm font-bold uppercase tracking-wide text-text-muted"
              aria-disabled="true"
            >
              {t('download.unavailable')}
            </span>
          </article>

          <article className="rounded-2xl border border-border bg-charcoal-light p-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow">iOS</p>
            <p className="mt-4 text-2xl font-bold text-text">App Store</p>
            <p className="mt-3 text-sm text-text-muted">{t('download.iosStatus')}</p>
            <span
              className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-dashed border-border px-6 text-sm font-bold uppercase tracking-wide text-text-muted"
              aria-disabled="true"
            >
              {t('download.unavailable')}
            </span>
          </article>
        </div>

        <p className="mt-10 text-center text-sm text-text-muted">{t('download.note')}</p>

        <div className="mt-10 text-center">
          <Link
            to={PUBLIC_PATHS.home}
            className="text-sm text-yellow hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow"
          >
            ← Back to homepage
          </Link>
        </div>
      </main>
      <LandingFooter />
    </>
  )
}
