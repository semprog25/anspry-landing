import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AnspryLogo } from '@/components/anspry-logo'
import { LandingFooter, LandingHeader } from '@/components/landing-chrome'
import { PhoneFrame, SecondaryCtaLink, StatusBadge } from '@/components/marketing-ui'
import { PageHead } from '@/components/page-head'
import { PUBLIC_PATHS } from '@/config/site'

const LIVE_CATEGORIES = [
  { key: 'train', live: true },
  { key: 'onlinePurchase', live: true },
  { key: 'flight', live: false },
  { key: 'parcel', live: false },
  { key: 'tickets', live: false },
  { key: 'parking', live: false },
  { key: 'bills', live: false },
  { key: 'travel', live: false },
] as const

function HeroPhone() {
  return (
    <PhoneFrame label="Home">
      <div className="space-y-3 p-4">
        <div className="rounded-lg border border-border bg-charcoal-elevated p-3">
          <p className="text-[10px] uppercase tracking-wide text-text-muted">Your Anspry</p>
          <div className="mt-2 grid grid-cols-3 gap-2 text-center">
            <div>
              <p className="text-lg font-bold text-yellow">€0</p>
              <p className="text-[9px] text-text-muted">Recoverable</p>
            </div>
            <div>
              <p className="text-lg font-bold">0</p>
              <p className="text-[9px] text-text-muted">Claims</p>
            </div>
            <div>
              <p className="text-lg font-bold">0</p>
              <p className="text-[9px] text-text-muted">Saved</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-yellow/25 bg-yellow/5 p-3">
          <p className="text-[10px] uppercase tracking-wide text-yellow">What happened?</p>
          <p className="mt-2 text-sm leading-relaxed text-text">
            My train from Hamburg to Berlin was 90 minutes late.
          </p>
          <div className="mt-3 rounded-lg bg-yellow py-2.5 text-center text-[11px] font-bold uppercase tracking-wide text-charcoal">
            Check my situation
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 pt-1">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow/15 text-[10px] font-bold text-yellow ring-1 ring-yellow/30">
            MIC
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow text-[10px] font-bold text-charcoal shadow-[0_0_20px_rgba(255,184,0,0.35)]">
            SCAN
          </div>
        </div>
      </div>
    </PhoneFrame>
  )
}

function ProductScreen({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <PhoneFrame label={title} className="scroll-snap-align-start shrink-0">
      {children}
    </PhoneFrame>
  )
}

export function LandingPage() {
  const { t } = useTranslation()

  return (
    <>
      <PageHead title={t('meta.title')} description={t('meta.description')} path={PUBLIC_PATHS.home} />
      <LandingHeader />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,184,0,0.08),transparent_55%)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:gap-12 md:py-24">
          <div className="max-w-xl">
            <AnspryLogo size="lg" showWordmark />
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              {t('hero.headline')}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-text-muted md:text-xl">{t('hero.sub')}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {(t('hero.examples', { returnObjects: true }) as string[]).map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-charcoal-light px-3 py-1.5 text-xs text-text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to={PUBLIC_PATHS.download}
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-yellow px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-charcoal shadow-[0_0_24px_rgba(255,184,0,0.22)] transition hover:bg-yellow-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow"
              >
                {t('hero.cta')}
              </Link>
              <SecondaryCtaLink href="#how">{t('hero.secondary')}</SecondaryCtaLink>
            </div>
          </div>
          <HeroPhone />
        </div>
      </section>

      <section id="how" className="border-t border-border bg-charcoal-light py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow">{t('howItWorks.eyebrow')}</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">{t('howItWorks.title')}</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {(t('howItWorks.steps', { returnObjects: true }) as Array<{ title: string; desc: string }>).map(
              (step, i) => (
                <article
                  key={step.title}
                  className="rounded-2xl border border-border bg-charcoal p-6 transition hover:border-yellow/20"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-yellow/15 text-lg font-bold text-yellow">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{step.desc}</p>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section id="voice" className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:grid md:grid-cols-2 md:items-center md:gap-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow">{t('voice.eyebrow')}</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">{t('voice.title')}</h2>
            <p className="mt-4 text-lg text-text-muted">{t('voice.desc')}</p>
          </div>
          <div className="mt-10 space-y-4 md:mt-0">
            <div className="rounded-2xl border border-yellow/20 bg-yellow/5 p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-yellow">{t('voice.step1')}</p>
              <p className="mt-3 text-base italic leading-relaxed text-text">
                &ldquo;{t('voice.example')}&rdquo;
              </p>
            </div>
            <div className="flex justify-center text-yellow">↓</div>
            <div className="rounded-2xl border border-border bg-charcoal-light p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-text-muted">
                {t('voice.step2')}
              </p>
              <p className="mt-3 text-sm text-text">{t('voice.exampleShort')}</p>
            </div>
            <div className="flex justify-center text-yellow">↓</div>
            <div className="rounded-xl bg-yellow py-3 text-center text-sm font-bold uppercase tracking-wide text-charcoal">
              {t('hero.cta')}
            </div>
          </div>
        </div>
      </section>

      <section id="product" className="border-y border-border bg-charcoal-light py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow">{t('product.eyebrow')}</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">{t('product.title')}</h2>
          <p className="mt-4 max-w-3xl text-lg text-text-muted">{t('product.desc')}</p>
          <div className="mt-10 flex gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-4 md:overflow-visible">
            <ProductScreen title={t('product.screens.home')}>
              <div className="space-y-3 p-4">
                <div className="rounded-lg border border-border p-3 text-center">
                  <p className="text-[10px] text-text-muted">Recoverable</p>
                  <p className="text-2xl font-bold text-yellow">€0</p>
                </div>
                <div className="rounded-lg border border-yellow/20 bg-yellow/5 p-3 text-sm">What happened?</div>
              </div>
            </ProductScreen>
            <ProductScreen title={t('product.screens.vault')}>
              <div className="grid grid-cols-2 gap-2 p-4 text-xs">
                {['Tickets', 'Receipts', 'Bookings', 'Bills'].map((label) => (
                  <div key={label} className="rounded-md border border-border px-2 py-3 text-text-muted">
                    {label}
                  </div>
                ))}
              </div>
            </ProductScreen>
            <ProductScreen title={t('product.screens.result')}>
              <div className="space-y-3 p-4">
                <div className="rounded-lg border border-yellow/30 bg-yellow/5 p-3">
                  <p className="text-[10px] uppercase text-yellow">May apply</p>
                  <p className="mt-1 text-sm font-semibold">25% compensation</p>
                </div>
                <p className="text-xs leading-relaxed text-text-muted">{t('product.resultNote')}</p>
              </div>
            </ProductScreen>
            <ProductScreen title={t('product.screens.claims')}>
              <div className="flex gap-2 p-4 text-[10px] font-semibold uppercase">
                <span className="rounded-md border border-yellow bg-yellow/10 px-2 py-2 text-yellow">All</span>
                <span className="rounded-md border border-border px-2 py-2 text-text-muted">Active</span>
                <span className="rounded-md border border-border px-2 py-2 text-text-muted">Saved</span>
              </div>
            </ProductScreen>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-yellow/25 bg-gradient-to-br from-yellow/10 to-transparent p-8">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-yellow">{t('availableNow.title')}</p>
              <ul className="mt-6 space-y-4">
                {(t('availableNow.items', { returnObjects: true }) as string[]).map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-yellow shadow-[0_0_12px_rgba(255,184,0,0.5)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-charcoal-light p-8">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-text-muted">{t('comingNext.title')}</p>
              <p className="mt-3 text-text-muted">{t('comingNext.subtitle')}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {(t('comingNext.items', { returnObjects: true }) as string[]).map((item) => (
                  <li key={item} className="rounded-full border border-border px-3 py-1.5 text-xs text-text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="border-t border-border bg-charcoal-light py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow">{t('categories.eyebrow')}</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">{t('categories.title')}</h2>
          <p className="mt-4 max-w-3xl text-lg text-text-muted">{t('categories.subtitle')}</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {LIVE_CATEGORIES.map(({ key, live }) => (
              <article
                key={key}
                className={`rounded-2xl border p-5 transition ${
                  live ? 'border-yellow/25 bg-yellow/5' : 'border-border bg-charcoal'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold">{t(`categories.items.${key}`)}</h3>
                  <StatusBadge
                    live={live}
                    liveLabel={t('categories.live')}
                    soonLabel={t('categories.comingSoon')}
                  />
                </div>
                <p className="mt-3 text-sm text-text-muted">{t(`categories.desc.${key}`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="trust" className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-3xl border border-yellow/15 bg-[radial-gradient(ellipse_at_center,rgba(255,184,0,0.06),transparent_70%)] p-8 md:p-12">
            <h2 className="text-center text-3xl font-bold md:text-4xl">{t('trust.deviceControlTitle')}</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[t('trust.deviceDefault'), t('trust.accountSync'), t('trust.explicitCloud')].map((text) => (
                <p
                  key={text}
                  className="rounded-2xl border border-border bg-charcoal-light p-5 text-sm leading-relaxed text-text-muted"
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-8 rounded-2xl border border-border bg-charcoal-light p-6 md:p-8">
            <h3 className="text-xl font-semibold text-yellow">{t('safety.title')}</h3>
            <p className="mt-3 leading-relaxed text-text-muted">{t('safety.desc')}</p>
            <p className="mt-4 text-sm text-text-muted">{t('trust.disclaimer')}</p>
          </div>
        </div>
      </section>

      <section id="faq" className="border-t border-border bg-charcoal-light py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold">{t('faq.title')}</h2>
          <dl className="mt-10 space-y-8">
            {(t('faq.items', { returnObjects: true }) as Array<{ q: string; a: string }>).map((item) => (
              <div key={item.q} className="border-b border-border pb-8 last:border-0">
                <dt className="text-lg font-semibold">{item.q}</dt>
                <dd className="mt-3 leading-relaxed text-text-muted">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="download" className="py-16 md:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">{t('cta.title')}</h2>
          <p className="mt-4 text-lg text-text-muted">{t('cta.desc')}</p>
          <Link
            to={PUBLIC_PATHS.download}
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-yellow px-10 py-3.5 text-sm font-bold uppercase tracking-wide text-charcoal shadow-[0_0_24px_rgba(255,184,0,0.22)] transition hover:bg-yellow-hover"
          >
            {t('cta.button')}
          </Link>
        </div>
      </section>

      <LandingFooter />
    </>
  )
}
