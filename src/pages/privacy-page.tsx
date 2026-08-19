import { LegalPageShell } from '@/components/legal-page-shell'
import { PLANNED_EMAIL, PUBLIC_PATHS } from '@/config/site'

export function PrivacyPage() {
  return (
    <LegalPageShell
      title="Privacy Policy"
      description="How Anspry handles account data, documents on your device, voice input, authentication, analytics, and account deletion."
      path={PUBLIC_PATHS.privacy}
    >
      <p>Last updated: August 2026</p>
      <p>
        Anspry (&quot;we&quot;, &quot;us&quot;) is a money-recovery and claim-assistance platform.
        This policy describes what we collect, what stays on your device, and your rights. Some
        legal wording may require professional review before publication in all jurisdictions.
      </p>

      <h2 className="text-xl font-semibold text-text">Account data</h2>
      <p>
        When you sign in, account and sync data is stored in the Anspry Supabase account system,
        including:
      </p>
      <ul className="list-disc space-y-2 pl-6">
        <li>Email and authentication identity (Google, Apple, or email magic link)</li>
        <li>Language and app settings</li>
        <li>Claim metadata (category, provider, status, dates, structured answers)</li>
        <li>Profile photo if you choose cloud profile storage</li>
        <li>Purchase or entitlement state for premium features (via Google Play, Apple, or RevenueCat where applicable)</li>
      </ul>

      <h2 className="text-xl font-semibold text-text">Documents</h2>
      <p>
        Personal documents (tickets, receipts, invoices, ID documents, correspondence, or similar
        evidence) remain on your device by default. Anspry does{' '}
        <strong className="text-text">not</strong> automatically upload personal documents to the
        cloud.
      </p>

      <h2 className="text-xl font-semibold text-text">Cloud transfer</h2>
      <p>
        Documents are not silently uploaded. If a future workflow requires a document or file to
        leave your device, Anspry will explain why, where it is sent, and ask for your explicit
        permission before uploading. If you decline, local or manual alternatives will be offered
        where possible.
      </p>

      <h2 className="text-xl font-semibold text-text">Voice</h2>
      <p>
        Voice input is used to create text in the &quot;What happened?&quot; field. Raw audio is
        not retained by Anspry by default — speech is converted to text and the audio is discarded
        after transcription. On some platforms, speech recognition may use OS or network services;
        check your device settings for details.
      </p>

      <h2 className="text-xl font-semibold text-text">AI processing</h2>
      <p>
        When text or extracted metadata is sent to an AI provider for classification or claim
        preparation, Anspry prefers structured text over raw documents where possible. We do not log
        document contents or private claim text in analytics.
      </p>

      <h2 className="text-xl font-semibold text-text">Authentication</h2>
      <p>
        You may sign in with Google, Apple, or email magic link. Each provider processes data
        according to its own terms in addition to this policy.
      </p>

      <h2 className="text-xl font-semibold text-text">Analytics</h2>
      <p>
        We collect only non-sensitive product usage data — such as screen views, claim started,
        category selected, or voice used. Analytics do not include document contents, OCR text,
        addresses, names, or payment information.
      </p>

      <h2 className="text-xl font-semibold text-text">Payments</h2>
      <p>
        Premium features may be purchased through Google Play or Apple App Store, managed via
        RevenueCat where applicable. Payment processing is handled by the store provider; we receive
        entitlement status, not full payment card details.
      </p>

      <h2 className="text-xl font-semibold text-text">Cross-device behaviour</h2>
      <p>
        Account data syncs when you sign in on another device. Local-only documents remain on the
        original device unless you use an explicit backup feature in the future.
      </p>

      <h2 className="text-xl font-semibold text-text">Account deletion</h2>
      <p>
        You can delete your account and associated cloud data from the app Profile or About screen.
        Local documents can be removed from the document vault on your device. For GDPR requests,
        contact {PLANNED_EMAIL.privacy} once our domain mail service is active, or use in-app account
        deletion in the meantime.
      </p>

      <h2 className="text-xl font-semibold text-text">Contact</h2>
      <p>
        Privacy enquiries: {PLANNED_EMAIL.privacy} (available once domain mail is configured).
        General support: see our{' '}
        <a href="/support" className="text-yellow hover:underline">
          Support page
        </a>
        .
      </p>
    </LegalPageShell>
  )
}
