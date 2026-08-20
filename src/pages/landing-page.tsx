import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FileStack, FolderKanban, Mic, UserRound } from 'lucide-react'
import { useReducedMotion, motion } from 'motion/react'
import { AnspryLogo } from '@/components/anspry-logo'
import { LandingFooter, LandingHeader } from '@/components/landing-chrome'
import {
  FaqItem,
  HeroProductPanel,
  PrimaryCtaLink,
  PrivacyArchitecture,
  ProductHomePreview,
  SecondaryCtaLink,
  StatusBadge,
} from '@/components/marketing-ui'
import { InView } from '@/components/motion/in-view'
import { PageHead } from '@/components/page-head'
import { PUBLIC_PATHS } from '@/config/site'

const CATEGORIES = [
  {
    key: 'train',
    status: 'available' as const,
    situations: 'train',
  },
  {
    key: 'flight',
    status: 'available' as const,
    situations: 'flight',
  },
  {
    key: 'onlinePurchase',
    status: 'available' as const,
    situations: 'onlinePurchase',
  },
  {
    key: 'parcel',
    status: 'available' as const,
    situations: 'parcel',
  },
  {
    key: 'tickets',
    status: 'available' as const,
    situations: 'tickets',
  },
  {
    key: 'parking',
    status: 'available' as const,
    situations: 'parking',
  },
  {
    key: 'travel',
    status: 'coming_soon' as const,
    situations: 'travel',
  },
  {
    key: 'bills',
    status: 'coming_soon' as const,
    situations: 'bills',
  },
  {
    key: 'insurance',
    status: 'coming_soon' as const,
    situations: 'insurance',
  },
] as const

function coverageBadgeLabel(
  status: (typeof CATEGORIES)[number]['status'],
  t: (key: string) => string,
): string {
  if (status === 'available') return t('categories.available')
  return t('categories.comingSoon')
}

const CAPABILITY_ICONS = {
  voice: Mic,
  claims: FolderKanban,
  evidence: FileStack,
  profile: UserRound,
} as const

export function LandingPage() {
  const { t } = useTranslation()
  const prefersReducedMotion = useReducedMotion()
  const base = import.meta.env.BASE_URL

  return (
    <>
      <PageHead title={t('meta.title')} description={t('meta.description')} path={PUBLIC_PATHS.home} />
      <LandingHeader />

      <section className="relative overflow-hidden">
        <img
          src={`${base}assets/haikei-glow.svg`}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
          width={1200}
          height={800}
          decoding="async"
          loading="eager"
        />
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:gap-16 md:py-24">
          <div className="max-w-xl">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <AnspryLogo size="lg" showWordmark />
            </motion.div>
            <motion.h1
              className="mt-7 text-4xl font-bold leading-[1.05] tracking-tight text-text md:text-5xl lg:text-6xl"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              {t('hero.headline')}
            </motion.h1>
            <motion.p
              className="mt-5 max-w-lg text-lg leading-relaxed text-text-muted md:text-xl"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {t('hero.sub')}
            </motion.p>
            <motion.div
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <PrimaryCtaLink to={PUBLIC_PATHS.download}>{t('hero.cta')}</PrimaryCtaLink>
              <SecondaryCtaLink href="#how">{t('hero.secondary')}</SecondaryCtaLink>
            </motion.div>
          </div>
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
          >
            <HeroProductPanel />
          </motion.div>
        </div>
        <img
          src={`${base}assets/haikei-wave.svg`}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 -z-10 h-20 w-full object-cover opacity-30 md:h-28"
          width={1440}
          height={320}
          decoding="async"
          loading="lazy"
        />
      </section>

      <section id="how" className="border-t border-border bg-charcoal-light py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <InView>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow">
              {t('howItWorks.eyebrow')}
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">{t('howItWorks.title')}</h2>
          </InView>
          <ol className="mt-12 grid gap-6 md:grid-cols-2">
            {(t('howItWorks.steps', { returnObjects: true }) as Array<{ title: string; desc: string }>).map(
              (step, i) => (
                <li key={step.title} className="border-l-2 border-yellow/40 pl-5">
                  <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-yellow">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold uppercase tracking-wide">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{step.desc}</p>
                </li>
              ),
            )}
          </ol>
        </div>
      </section>

      <section id="product" className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <InView>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow">
              {t('product.eyebrow')}
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">{t('product.title')}</h2>
            <p className="mt-4 max-w-2xl text-lg text-text-muted">{t('product.desc')}</p>
          </InView>

          <div className="mt-14 grid items-start gap-12 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <InView>
              <ProductHomePreview />
            </InView>
            <InView delay={0.05}>
              <ul className="space-y-8">
                {(
                  t('product.capabilities', { returnObjects: true }) as Array<{
                    key: keyof typeof CAPABILITY_ICONS
                    title: string
                    desc: string
                  }>
                ).map((item) => {
                  const Icon = CAPABILITY_ICONS[item.key]
                  return (
                    <li key={item.key} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-charcoal-light text-yellow">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-text">{item.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-text-muted">{item.desc}</p>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </InView>
          </div>
        </div>
      </section>

      <section id="privacy" className="border-t border-border bg-charcoal-light py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <InView className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              {t('trust.deviceControlTitle')}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">{t('trust.deviceDefault')}</p>
          </InView>
          <InView delay={0.05}>
            <PrivacyArchitecture
              layers={
                t('trust.layers', {
                  returnObjects: true,
                }) as Array<{ title: string; description: string }>
              }
            />
          </InView>
        </div>
      </section>

      <section id="trust" className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <InView>
            <h2 className="text-3xl font-bold md:text-4xl">{t('safety.title')}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">{t('safety.desc')}</p>
            <ul className="mx-auto mt-8 grid max-w-xl gap-3 text-left sm:grid-cols-2">
              {(t('safety.points', { returnObjects: true }) as string[]).map((point) => (
                <li key={point} className="border-l-2 border-yellow/30 pl-4 text-sm text-text">
                  {point}
                </li>
              ))}
            </ul>
            <p className="mx-auto mt-8 max-w-2xl text-sm text-text-muted">{t('trust.disclaimer')}</p>
          </InView>
        </div>
      </section>

      <section id="categories" className="border-y border-border bg-charcoal-light py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <InView>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow">
              {t('categories.eyebrow')}
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-bold md:text-4xl">{t('categories.title')}</h2>
            <p className="mt-4 max-w-3xl text-lg text-text-muted">{t('categories.subtitle')}</p>
          </InView>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map(({ key, status, situations }) => {
              const isAvailable = status === 'available'
              const cardClass = isAvailable
                ? 'border-yellow/25 bg-charcoal hover:border-yellow/50'
                : 'border-border bg-charcoal/80'

              const content = (
                <>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold uppercase tracking-wide text-text">
                      {t(`categories.items.${key}`)}
                    </h3>
                    <StatusBadge tone={status} label={coverageBadgeLabel(status, t)} />
                  </div>
                  <p className="mt-3 text-sm font-medium text-yellow">
                    {t(`categories.situations.${situations}`)}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {t(`categories.desc.${key}`)}
                  </p>
                  {isAvailable ? (
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-yellow">
                      {t('categories.openInApp')}
                    </p>
                  ) : (
                    <p className="mt-4 text-xs text-text-muted">{t('categories.notAvailableYet')}</p>
                  )}
                </>
              )

              if (isAvailable) {
                return (
                  <Link
                    key={key}
                    to={PUBLIC_PATHS.download}
                    className={`block rounded-xl border p-5 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow ${cardClass}`}
                    aria-label={`${t(`categories.items.${key}`)} — ${t('categories.openInApp')}`}
                  >
                    {content}
                  </Link>
                )
              }

              return (
                <article
                  key={key}
                  className={`rounded-xl border p-5 ${cardClass}`}
                  aria-disabled="true"
                >
                  {content}
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4">
          <InView>
            <h2 className="text-3xl font-bold">{t('faq.title')}</h2>
          </InView>
          <div className="mt-8">
            {(t('faq.items', { returnObjects: true }) as Array<{ q: string; a: string }>).map((item) => (
              <FaqItem key={item.q} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

      <section id="download" className="border-t border-border bg-charcoal-light py-20 md:py-28">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <InView>
            <h2 className="text-3xl font-bold md:text-5xl">{t('cta.title')}</h2>
            <p className="mt-4 text-lg text-text-muted">{t('cta.desc')}</p>
            <PrimaryCtaLink to={PUBLIC_PATHS.download} className="mt-8">
              {t('cta.button')}
            </PrimaryCtaLink>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-charcoal p-5 text-left">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow">Android</p>
                <p className="mt-2 font-semibold text-text">Google Play</p>
                <p className="mt-1 text-sm text-text-muted">{t('download.androidStatus')}</p>
                <p className="mt-4 text-xs text-text-muted">{t('cta.comingSoon')}</p>
              </div>
              <div className="rounded-xl border border-border bg-charcoal p-5 text-left">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow">iOS</p>
                <p className="mt-2 font-semibold text-text">App Store</p>
                <p className="mt-1 text-sm text-text-muted">{t('download.iosStatus')}</p>
                <p className="mt-4 text-xs text-text-muted">{t('cta.comingSoon')}</p>
              </div>
            </div>
            <p className="mt-6 text-sm text-text-muted">
              <Link to={PUBLIC_PATHS.download} className="text-yellow transition hover:underline">
                {t('cta.storeNote')}
              </Link>
            </p>
          </InView>
        </div>
      </section>

      <LandingFooter />
    </>
  )
}
