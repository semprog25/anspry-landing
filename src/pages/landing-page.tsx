import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { PUBLIC_PATHS } from '@/config/site'
import { setLandingLanguage } from '@/i18n'

const CATEGORY_GROUP_KEYS = ['travel', 'shopping', 'bills', 'transport', 'events'] as const

function AppShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="rounded-[2rem] border border-border bg-charcoal-light p-3 neon-glow-sm">
        <div className="overflow-hidden rounded-[1.5rem] border border-border bg-charcoal">
          <div className="border-b border-border px-4 py-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-yellow">ANSPRY</p>
            <p className="mt-1 text-sm font-semibold text-text">Find what you&apos;re owed.</p>
          </div>
          <div className="space-y-3 p-4">
            <div className="rounded-lg border border-border bg-charcoal-elevated p-3">
              <p className="text-[10px] uppercase tracking-wide text-text-muted">Your Anspry</p>
              <div className="mt-2 grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-lg font-bold neon-text">€0</p>
                  <p className="text-[9px] text-text-muted">Recoverable</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-text">0</p>
                  <p className="text-[9px] text-text-muted">Claims</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-text">0</p>
                  <p className="text-[9px] text-text-muted">Saved</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-yellow/30 bg-yellow/5 p-3">
              <p className="text-xs text-text-muted">Tell us what happened</p>
              <p className="mt-1 text-sm text-text">My train was late…</p>
              <div className="mt-3 rounded-md bg-yellow py-2 text-center text-xs font-bold text-charcoal">
                CHECK MY SITUATION
              </div>
            </div>
            <div className="flex justify-center pt-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow text-charcoal neon-glow-sm">
                <span className="text-[10px] font-bold">SCAN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function LandingPage() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'de' | 'en'

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-charcoal-light/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <span className="text-lg font-bold tracking-widest text-yellow">ANSPRY</span>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#how" className="text-text-muted hover:text-yellow">
              {t('nav.howItWorks')}
            </a>
            <a href="#categories" className="text-text-muted hover:text-yellow">
              {t('nav.categories')}
            </a>
            <a href="#faq" className="text-text-muted hover:text-yellow">
              {t('nav.faq')}
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setLandingLanguage(lang === 'de' ? 'en' : 'de')}
              className="text-sm text-text-muted hover:text-yellow"
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

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-yellow">ANSPRY</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            {t('hero.headline')}
          </h1>
          <p className="mt-6 text-lg text-text-muted md:text-xl">{t('hero.sub')}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to={PUBLIC_PATHS.download}
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-yellow px-8 py-3 font-semibold text-charcoal neon-glow-sm hover:bg-yellow-hover"
            >
              {t('hero.cta')} →
            </Link>
            <a
              href="#how"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-border px-8 py-3 font-medium hover:border-yellow/40"
            >
              {t('hero.secondary')}
            </a>
          </div>
        </div>
        <AppShowcase />
      </section>

      <section id="how" className="border-t border-border bg-charcoal-light py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold">{t('howItWorks.title')}</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {(t('howItWorks.steps', { returnObjects: true }) as Array<{ title: string; desc: string }>).map(
              (step, i) => (
                <div key={step.title} className="rounded-lg border border-border p-6">
                  <span className="text-2xl font-bold text-yellow">{i + 1}</span>
                  <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-text-muted">{step.desc}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 md:grid md:grid-cols-2 md:gap-12">
          <div className="rounded-lg border border-yellow/30 bg-yellow/5 p-8">
            <h2 className="text-2xl font-bold text-yellow">{t('availableNow.title')}</h2>
            <ul className="mt-6 space-y-3">
              {(t('availableNow.items', { returnObjects: true }) as string[]).map((item) => (
                <li key={item} className="flex items-center gap-3 text-text">
                  <span className="h-2 w-2 rounded-full bg-yellow neon-glow-sm" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 rounded-lg border border-border bg-charcoal-light p-8 md:mt-0">
            <h2 className="text-2xl font-bold">{t('saveCases.title')}</h2>
            <p className="mt-3 text-text-muted">{t('saveCases.subtitle')}</p>
            <p className="mt-4 text-sm text-text-muted">{t('saveCases.desc')}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {(t('saveCases.items', { returnObjects: true }) as string[]).map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border px-3 py-1.5 text-xs text-text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="categories" className="border-t border-border bg-charcoal-light py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold">{t('categories.title')}</h2>
          <p className="mt-4 max-w-3xl text-lg text-text-muted">{t('categories.subtitle')}</p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORY_GROUP_KEYS.map((groupKey) => {
              const group = t(`categories.groups.${groupKey}`, {
                returnObjects: true,
              }) as { title: string; items: Array<{ label: string; live: boolean }> }
              return (
                <div key={groupKey} className="rounded-lg border border-border bg-charcoal p-6">
                  <h3 className="text-lg font-semibold text-yellow">{group.title}</h3>
                  <ul className="mt-4 space-y-3">
                    {group.items.map((item) => (
                      <li key={item.label} className="flex items-center justify-between gap-2 text-sm">
                        <span className={item.live ? 'text-text' : 'text-text-muted'}>{item.label}</span>
                        <span
                          className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                            item.live
                              ? 'bg-yellow/15 text-yellow'
                              : 'bg-charcoal-muted text-text-muted'
                          }`}
                        >
                          {item.live ? t('categories.live') : t('categories.comingSoon')}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-yellow/20 bg-yellow/5 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-text">{t('trust.deviceControlTitle')}</h2>
          <div className="mt-10 space-y-6 text-left md:mx-auto md:max-w-2xl">
            <p className="rounded-lg border border-border bg-charcoal-light p-5 text-text-muted">
              {t('trust.deviceDefault')}
            </p>
            <p className="rounded-lg border border-border bg-charcoal-light p-5 text-text-muted">
              {t('trust.accountSync')}
            </p>
            <p className="rounded-lg border border-border bg-charcoal-light p-5 text-text-muted">
              {t('trust.explicitCloud')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 md:grid md:grid-cols-2 md:gap-12 md:items-center">
          <div>
            <h2 className="text-3xl font-bold">{t('documentVault.title')}</h2>
            <p className="mt-4 text-lg text-text-muted">{t('documentVault.desc')}</p>
          </div>
          <div className="mt-8 rounded-lg border border-border bg-charcoal-light p-6 md:mt-0">
            <div className="grid grid-cols-2 gap-3 text-sm">
              {['Tickets', 'Receipts', 'Bookings', 'Bills', 'Notices', 'Other'].map((label) => (
                <div key={label} className="rounded-md border border-border px-3 py-2 text-text-muted">
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-charcoal-light py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold">{t('claimsDashboard.title')}</h2>
          <p className="mt-4 max-w-3xl text-lg text-text-muted">{t('claimsDashboard.desc')}</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-4">
            {['All', 'Active', 'Saved', 'Completed'].map((tab) => (
              <div
                key={tab}
                className={`rounded-lg border px-4 py-3 text-center text-sm font-semibold ${
                  tab === 'All' ? 'border-yellow bg-yellow/10 text-yellow' : 'border-border text-text-muted'
                }`}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold">{t('comingNext.title')}</h2>
          <p className="mt-3 max-w-2xl text-text-muted">{t('comingNext.subtitle')}</p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {(t('comingNext.items', { returnObjects: true }) as Array<{ label: string; live: boolean }>).map(
              (item) => (
                <li
                  key={item.label}
                  className="rounded-full border border-border bg-charcoal px-4 py-2 text-sm text-text-muted"
                >
                  {item.label}
                </li>
              ),
            )}
          </ul>
        </div>
      </section>

      <section id="train" className="border-t border-border bg-charcoal-light py-20">
        <div className="mx-auto max-w-6xl px-4 md:grid md:grid-cols-2 md:gap-12 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-yellow">
              {t('trainExample.note')}
            </p>
            <h2 className="mt-3 text-3xl font-bold">{t('trainExample.title')}</h2>
            <p className="mt-4 text-lg text-text-muted">{t('trainExample.desc')}</p>
            <ul className="mt-6 space-y-2">
              {(t('trainExample.bullets', { returnObjects: true }) as string[]).map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 text-yellow">✓</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10 rounded-xl border border-yellow/20 bg-yellow/5 p-8 md:mt-0">
            <p className="text-sm text-text-muted">{t('safety.title')}</p>
            <p className="mt-3 leading-relaxed text-text-muted">{t('safety.desc')}</p>
            <p className="mt-4 text-xs leading-relaxed text-text-muted">{t('trust.disclaimer')}</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold">{t('why.title')}</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {(t('why.items', { returnObjects: true }) as Array<{ title: string; desc: string }>).map(
              (item) => (
                <div key={item.title} className="rounded-lg border border-border p-6">
                  <h3 className="text-lg font-semibold text-yellow">{item.title}</h3>
                  <p className="mt-2 text-text-muted">{item.desc}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-charcoal-light py-20">
        <div className="mx-auto max-w-6xl px-4 md:grid md:grid-cols-2 md:gap-12">
          <div>
            <h2 className="text-2xl font-bold">{t('languages.title')}</h2>
            <p className="mt-4 text-text-muted">{t('languages.desc')}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">{t('privacy.title')}</h2>
            <p className="mt-4 text-text-muted">{t('privacy.desc')}</p>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold">{t('faq.title')}</h2>
          <dl className="mt-10 space-y-8">
            {(t('faq.items', { returnObjects: true }) as Array<{ q: string; a: string }>).map(
              (item) => (
                <div key={item.q}>
                  <dt className="font-semibold">{item.q}</dt>
                  <dd className="mt-2 text-text-muted">{item.a}</dd>
                </div>
              ),
            )}
          </dl>
        </div>
      </section>

      <section id="download" className="border-t border-border bg-charcoal-light py-20">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="text-3xl font-bold">{t('cta.title')}</h2>
          <p className="mt-4 text-text-muted">{t('cta.desc')}</p>
          <Link
            to={PUBLIC_PATHS.download}
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-yellow px-10 py-3 font-semibold text-charcoal neon-glow-sm hover:bg-yellow-hover"
          >
            {t('cta.button')}
          </Link>
          <p className="mt-4 text-xs text-text-muted">App Store & Google Play — coming soon</p>
        </div>
      </section>

      <footer className="border-t border-border py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <span className="font-bold tracking-widest text-yellow">ANSPRY</span>
          <div className="flex gap-6 text-sm text-text-muted">
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
    </>
  )
}
