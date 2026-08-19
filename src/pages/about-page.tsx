import { Link } from 'react-router-dom'
import { PageHead } from '@/components/page-head'
import { SiteLayout } from '@/components/site-layout'
import { PUBLIC_PATHS, SITE } from '@/config/site'

export function AboutPage() {
  return (
    <SiteLayout>
      <PageHead
        title="About Anspry"
        description="Anspry helps you find money you're owed — refunds, compensation, and valid challenges across everyday problems."
        path={PUBLIC_PATHS.about}
      />
      <div className="mx-auto max-w-3xl px-4 py-16">
        <Link to={PUBLIC_PATHS.home} className="text-sm text-yellow hover:underline">
          ← Anspry
        </Link>
        <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-yellow">ANSPRY</p>
        <h1 className="mt-2 text-3xl font-bold">About Anspry</h1>
        <p className="mt-4 text-xl text-yellow">{SITE.tagline}</p>

        <div className="mt-10 space-y-8 text-text-muted">
          <section>
            <h2 className="text-xl font-semibold text-text">What Anspry does</h2>
            <p className="mt-4">
              Anspry is a money-recovery and claim-assistance platform. Tell us what went wrong — a
              late train, a refused refund, a damaged parcel — and we check whether you may be owed
              money, compensation, or have grounds to challenge a charge.
            </p>
            <p className="mt-4">
              We use verified rules, not AI guesswork, to assess eligibility. Anspry prepares honest
              claims and explains next steps. We do not guarantee outcomes and we are not a law firm.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text">Who it&apos;s for</h2>
            <p className="mt-4">
              Residents and expats in Germany and beyond. Multilingual support from day one — German,
              English, and Spanish in the app.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text">Privacy by design</h2>
            <p className="mt-4">
              Documents stay on your device by default. Account data syncs when you sign in. Cloud
              transfer only happens with your explicit permission.
            </p>
            <Link to={PUBLIC_PATHS.privacy} className="mt-4 inline-block text-yellow hover:underline">
              Read our Privacy Policy →
            </Link>
          </section>

          <section>
            <Link
              to={PUBLIC_PATHS.download}
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-yellow px-8 py-3 font-semibold text-charcoal neon-glow-sm hover:bg-yellow-hover"
            >
              Download Anspry →
            </Link>
          </section>
        </div>
      </div>
    </SiteLayout>
  )
}
