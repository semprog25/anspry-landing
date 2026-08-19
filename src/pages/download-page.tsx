import { Link } from 'react-router-dom'
import { PageHead } from '@/components/page-head'
import { AnspryLogo } from '@/components/anspry-logo'
import { LandingFooter, LandingHeader } from '@/components/landing-chrome'
import { PUBLIC_PATHS } from '@/config/site'

export function DownloadPage() {
  return (
    <>
      <PageHead
        title="Get Anspry — Download"
        description="Get Anspry for Android and iOS. Money-recovery and claim assistance in your pocket."
        path={PUBLIC_PATHS.download}
      />
      <LandingHeader />
      <main className="mx-auto max-w-3xl px-4 py-16 md:py-24">
        <div className="text-center">
          <AnspryLogo size="lg" showWordmark className="justify-center" />
          <h1 className="mt-8 text-3xl font-bold md:text-4xl">Get Anspry</h1>
          <p className="mx-auto mt-4 max-w-lg text-lg text-text-muted">
            Find what you&apos;re owed. Android and iOS apps are coming soon — the same experience
            you see on this site, in your pocket.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <article className="rounded-2xl border border-border bg-charcoal-light p-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow">Android</p>
            <p className="mt-4 text-2xl font-bold">Google Play</p>
            <p className="mt-3 text-sm text-text-muted">Coming soon</p>
            <span
              className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-dashed border-border px-6 text-sm font-bold uppercase tracking-wide text-text-muted"
              aria-disabled="true"
            >
              Coming soon
            </span>
          </article>

          <article className="rounded-2xl border border-border bg-charcoal-light p-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow">iOS</p>
            <p className="mt-4 text-2xl font-bold">App Store</p>
            <p className="mt-3 text-sm text-text-muted">Coming soon</p>
            <span
              className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-dashed border-border px-6 text-sm font-bold uppercase tracking-wide text-text-muted"
              aria-disabled="true"
            >
              Coming soon
            </span>
          </article>
        </div>

        <p className="mt-10 text-center text-sm text-text-muted">
          Store links will appear here as soon as public listings are live. No fake download buttons.
        </p>

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
