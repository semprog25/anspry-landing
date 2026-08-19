import { Link } from 'react-router-dom'
import { PageHead } from '@/components/page-head'
import { SiteLayout } from '@/components/site-layout'
import { PLANNED_EMAIL, PUBLIC_PATHS } from '@/config/site'

export function SupportPage() {
  return (
    <SiteLayout>
      <PageHead
        title="Support — Anspry"
        description="Get help with Anspry login, documents, claims, and account deletion. Money-recovery and claim-assistance support."
        path={PUBLIC_PATHS.support}
      />
      <div className="mx-auto max-w-3xl px-4 py-16">
        <Link to={PUBLIC_PATHS.home} className="text-sm text-yellow hover:underline">
          ← Anspry
        </Link>
        <h1 className="mt-8 text-3xl font-bold">Support</h1>
        <p className="mt-4 text-lg text-text-muted">
          Help with Anspry — the money-recovery and claim-assistance app.
        </p>

        <div className="mt-10 space-y-8 text-text-muted">
          <section>
            <h2 className="text-xl font-semibold text-text">Common questions</h2>
            <dl className="mt-4 space-y-6">
              <div>
                <dt className="font-semibold text-text">I cannot sign in</dt>
                <dd className="mt-2">
                  Try Google, Apple, or email magic link from the app login screen. Ensure you use
                  the same method you registered with. If email login fails, check spam for the
                  magic link.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-text">Where are my documents?</dt>
                <dd className="mt-2">
                  Personal documents (tickets, receipts, invoices) stay on your device by default.
                  Anspry does not silently upload them. See our{' '}
                  <Link to={PUBLIC_PATHS.privacy} className="text-yellow hover:underline">
                    Privacy Policy
                  </Link>{' '}
                  for details.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-text">Does Anspry submit claims for me?</dt>
                <dd className="mt-2">
                  Anspry helps you understand eligibility and prepare honest claims. You submit
                  claims to the relevant provider unless a feature explicitly states otherwise.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-text">How do I delete my account?</dt>
                <dd className="mt-2">
                  Open the app → Profile or About → Delete account. This removes your cloud account
                  data. Local documents on your device can be removed from the document vault
                  separately.
                </dd>
              </div>
            </dl>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text">Document privacy</h2>
            <p className="mt-4">
              Your documents remain on your device unless a specific workflow requires cloud transfer
              and you explicitly approve it. Anspry will explain why before any upload.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text">Claim help</h2>
            <p className="mt-4">
              Anspry uses verified rules — not guesses — to assess whether you may have a valid
              claim. Complex cases may need professional advice. Anspry is not a law firm.
            </p>
          </section>

          <section className="rounded-lg border border-border bg-charcoal-light p-6">
            <h2 className="text-xl font-semibold text-text">Contact</h2>
            <p className="mt-4">
              Email support at{' '}
              <span className="text-text">{PLANNED_EMAIL.support}</span> will be available once our
              domain mail service is active. Until then, use in-app help from Profile → Help.
            </p>
            <p className="mt-4 text-sm">
              Planned addresses: {PLANNED_EMAIL.privacy} (privacy), {PLANNED_EMAIL.security}{' '}
              (security), {PLANNED_EMAIL.legal} (legal).
            </p>
          </section>
        </div>
      </div>
    </SiteLayout>
  )
}
