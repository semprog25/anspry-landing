import { Link } from 'react-router-dom'
import { PageHead } from '@/components/page-head'
import { SiteLayout } from '@/components/site-layout'
import { PUBLIC_PATHS } from '@/config/site'

export function DownloadPage() {
  return (
    <SiteLayout>
      <PageHead
        title="Download Anspry"
        description="Download Anspry for Android and iOS. Find what you're owed — money-recovery and claim assistance."
        path={PUBLIC_PATHS.download}
      />
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <Link to={PUBLIC_PATHS.home} className="text-sm text-yellow hover:underline">
          ← Anspry
        </Link>
        <h1 className="mt-8 text-3xl font-bold">Download Anspry</h1>
        <p className="mt-4 text-lg text-text-muted">
          Find what you&apos;re owed. Available on mobile — Android and iOS.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-charcoal-light p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-yellow">Android</p>
            <p className="mt-4 text-2xl font-bold text-text">Google Play</p>
            <p className="mt-4 text-sm text-text-muted">Coming soon</p>
            <span
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-lg border border-border px-8 py-3 text-sm font-semibold text-text-muted"
              aria-disabled="true"
            >
              COMING SOON
            </span>
          </div>

          <div className="rounded-xl border border-border bg-charcoal-light p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-yellow">iOS</p>
            <p className="mt-4 text-2xl font-bold text-text">App Store</p>
            <p className="mt-4 text-sm text-text-muted">Coming soon</p>
            <span
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-lg border border-border px-8 py-3 text-sm font-semibold text-text-muted"
              aria-disabled="true"
            >
              COMING SOON
            </span>
          </div>
        </div>

        <p className="mt-10 text-sm text-text-muted">
          Store links will appear here once public listings are live.
        </p>
      </div>
    </SiteLayout>
  )
}
