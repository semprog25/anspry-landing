import { LegalPageShell } from '@/components/legal-page-shell'
import { PLANNED_EMAIL, PUBLIC_PATHS } from '@/config/site'

export function TermsPage() {
  return (
    <LegalPageShell
      title="Terms of Service"
      description="Terms for using Anspry — claim assistance, user responsibilities, supported categories, and limitations."
      path={PUBLIC_PATHS.terms}
    >
      <p>Last updated: August 2026</p>
      <p>
        These terms govern your use of Anspry, a money-recovery and claim-assistance platform.
        Anspry helps you understand potential compensation eligibility and prepare claims.{' '}
        <strong className="text-text">Anspry is not a law firm and does not provide legal advice.</strong>{' '}
        Legal entity details may require professional review before final publication.
      </p>

      <h2 className="text-xl font-semibold text-text">Anspry&apos;s role</h2>
      <p>
        Anspry provides tools to assess whether you may have a valid claim or grounds to challenge
        a charge, based on verified rules and the information you provide. We explain what evidence
        matters and help you prepare honest, truthful responses or claims.
      </p>

      <h2 className="text-xl font-semibold text-text">No guarantee of compensation</h2>
      <p>
        Eligibility estimates are based on the information you provide and applicable rules. Final
        decisions are made by the relevant provider, authority, or court. Anspry does not guarantee
        that any claim will succeed or that you will receive compensation.
      </p>

      <h2 className="text-xl font-semibold text-text">Provider relationships</h2>
      <p>
        Anspry is independent of transport operators, retailers, insurers, and other providers. We
        do not act on their behalf. Unless explicitly stated, Anspry does not submit claims on your
        behalf — you are responsible for submitting claims to the relevant provider.
      </p>

      <h2 className="text-xl font-semibold text-text">Your responsibilities</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>Provide truthful and accurate information</li>
        <li>Do not fabricate evidence or misrepresent facts</li>
        <li>Review generated claim text before submission</li>
        <li>Seek professional advice for complex or high-value cases</li>
      </ul>

      <h2 className="text-xl font-semibold text-text">Supported and unsupported categories</h2>
      <p>
        Anspry launches categories only when rules are verified. Some categories (e.g. train delays,
        online purchase refunds) are available now; others use a save-case workflow until rules are
        ready. Unsupported categories may not produce eligibility results.
      </p>

      <h2 className="text-xl font-semibold text-text">Document handling</h2>
      <p>
        Documents you add remain on your device by default. You are responsible for the documents you
        store and submit. Anspry will ask for explicit permission before any cloud transfer.
      </p>

      <h2 className="text-xl font-semibold text-text">Account usage</h2>
      <p>
        You must not misuse the service, attempt to circumvent security, or use Anspry for fraudulent
        claims. We may suspend accounts that violate these terms.
      </p>

      <h2 className="text-xl font-semibold text-text">Payments</h2>
      <p>
        Premium features, where offered, are billed through Google Play or Apple App Store according
        to their terms. Refunds follow store policies.
      </p>

      <h2 className="text-xl font-semibold text-text">Limitation of liability</h2>
      <p>
        To the extent permitted by law, Anspry is not liable for outcomes of claims, provider
        decisions, or losses arising from reliance on eligibility estimates. Use the service at your
        own discretion.
      </p>

      <h2 className="text-xl font-semibold text-text">Contact</h2>
      <p>
        Legal enquiries: {PLANNED_EMAIL.legal} (available once domain mail is configured). General
        support: see our{' '}
        <a href="/support" className="text-yellow hover:underline">
          Support page
        </a>
        .
      </p>

      <p className="text-sm italic">
        Flag for legal review: operating entity name, registered address, governing law, and dispute
        resolution clauses should be confirmed before final publication.
      </p>
    </LegalPageShell>
  )
}
