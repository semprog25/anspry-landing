import { Link } from 'react-router-dom'
import { PageHead } from '@/components/page-head'
import { LandingFooter, LandingHeader } from '@/components/landing-chrome'
import { PLANNED_EMAIL, PUBLIC_PATHS } from '@/config/site'

export function SupportPage() {
  return (
    <>
      <PageHead
        title="Support — Anspry"
        description="Get help with Anspry login, documents, claims, and account deletion."
        path={PUBLIC_PATHS.support}
      />
      <LandingHeader />
      <main className="mx-auto max-w-3xl px-4 py-16">
        <Link to={PUBLIC_PATHS.home} className="text-sm text-yellow hover:underline">
          ← Anspry
        </Link>
        <h1 className="mt-8 text-3xl font-bold">Support</h1>
        <p className="mt-4 text-lg text-text-muted">
          Help with Anspry — money-recovery and claim assistance.
        </p>

        <div className="mt-10 space-y-8 text-text-muted">
          <section>
            <h2 className="text-xl font-semibold text-text">Common questions</h2>
            <dl className="mt-4 space-y-6">
              <div>
                <dt className="font-semibold text-text">I cannot sign in</dt>
                <dd className="mt-2">
                  Try Google, Apple, or email magic link from the app. Use the same method you registered
                  with.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-text">Where are my documents?</dt>
                <dd className="mt-2">
                  On your device by default. See our{' '}
                  <Link to={PUBLIC_PATHS.privacy} className="text-yellow hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-text">How do I delete my account?</dt>
                <dd className="mt-2">
                  App → Profile or About → Delete account. Local documents can be removed from the vault
                  separately.
                </dd>
              </div>
            </dl>
          </section>

          <section className="rounded-2xl border border-border bg-charcoal-light p-6">
            <h2 className="text-xl font-semibold text-text">Contact</h2>
            <p className="mt-4">
              Email at {PLANNED_EMAIL.support} will be available once domain mail is active. Until then,
              use in-app help from Profile.
            </p>
          </section>
        </div>
      </main>
      <LandingFooter />
    </>
  )
}
