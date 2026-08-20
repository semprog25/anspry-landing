import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  FileStack,
  Mic,
  ScanLine,
  ShieldCheck,
  FolderKanban,
  UserRound,
} from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { AnspryLogo } from '@/components/anspry-logo'
import { LandingFooter, LandingHeader } from '@/components/landing-chrome'
import {
  FaqItem,
  FeatureCard,
  HeroProductPanel,
  PhoneFrame,
  PrimaryCtaLink,
  PrivacyArchitecture,
  SecondaryCtaLink,
  StatusBadge,
} from '@/components/marketing-ui'
import { AnimatedGroup } from '@/components/motion/animated-group'
import { InView } from '@/components/motion/in-view'
import { TextEffect } from '@/components/motion/text-effect'
import { PageHead } from '@/components/page-head'
import { PUBLIC_PATHS } from '@/config/site'

const CATEGORIES = [
  { key: 'train', live: true },
  { key: 'onlinePurchase', live: false },
  { key: 'flight', live: false },
  { key: 'parcel', live: false },
  { key: 'tickets', live: false },
  { key: 'parking', live: false },
  { key: 'travel', live: false },
  { key: 'bills', live: false },
  { key: 'insurance', live: false },
] as const

const FEATURE_ICONS = {
  voice: Mic,
  scan: ScanLine,
  claimCheck: ShieldCheck,
  vault: FileStack,
  claims: FolderKanban,
  profile: UserRound,
} as const

function AppShowcaseScreen({
  title,
  children,
  className = '',
}: {
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <PhoneFrame label={title} className={className}>
      {children}
    </PhoneFrame>
  )
}

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
          className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-70"
          width={1200}
          height={800}
          decoding="async"
          loading="eager"
        />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(255,184,0,0.07),transparent_55%)]" />
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:gap-14 md:py-24">
          <div className="max-w-xl">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <AnspryLogo size="lg" showWordmark />
            </motion.div>
            <TextEffect
              as="h1"
              per="word"
              preset="blur"
              delay={0.12}
              className="mt-7 text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl"
            >
              {t('hero.headline')}
            </TextEffect>
            <motion.p
              className="mt-5 text-lg leading-relaxed text-text-muted md:text-xl"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.35 }}
            >
              {t('hero.sub')}
            </motion.p>
            <motion.div
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.45 }}
            >
              <PrimaryCtaLink to={PUBLIC_PATHS.download}>{t('hero.cta')}</PrimaryCtaLink>
              <SecondaryCtaLink href="#how">{t('hero.secondary')}</SecondaryCtaLink>
            </motion.div>
          </div>
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroProductPanel />
          </motion.div>
        </div>
        <img
          src={`${base}assets/haikei-wave.svg`}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 -z-10 h-28 w-full object-cover opacity-60 md:h-40"
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
          <AnimatedGroup className="mt-12 grid gap-5 md:grid-cols-2" stagger={0.1}>
            {(t('howItWorks.steps', { returnObjects: true }) as Array<{ title: string; desc: string }>).map(
              (step, i) => (
                <article
                  key={step.title}
                  className="rounded-2xl border border-border bg-charcoal p-6 transition duration-300 hover:-translate-y-1 hover:border-yellow/25"
                >
                  <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-yellow">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{step.desc}</p>
                </article>
              ),
            )}
          </AnimatedGroup>
        </div>
      </section>

      <section id="features" className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <InView>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow">
              {t('features.eyebrow')}
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">{t('features.title')}</h2>
            <p className="mt-4 max-w-2xl text-lg text-text-muted">{t('features.subtitle')}</p>
          </InView>
          <AnimatedGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
            {(
              t('features.items', { returnObjects: true }) as Array<{
                key: keyof typeof FEATURE_ICONS
                title: string
                desc: string
              }>
            ).map((item) => {
              const Icon = FEATURE_ICONS[item.key]
              return (
                <FeatureCard
                  key={item.key}
                  title={item.title}
                  description={item.desc}
                  icon={<Icon className="h-5 w-5" aria-hidden="true" />}
                />
              )
            })}
          </AnimatedGroup>
        </div>
      </section>

      <section id="categories" className="border-y border-border bg-charcoal-light py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <InView>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow">
              {t('categories.eyebrow')}
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">{t('categories.title')}</h2>
            <p className="mt-4 max-w-3xl text-lg text-text-muted">{t('categories.subtitle')}</p>
          </InView>

          <div className="mt-10 grid gap-4 lg:grid-cols-[1.1fr_1.4fr]">
            <InView className="rounded-3xl border border-yellow/25 bg-gradient-to-br from-yellow/12 to-transparent p-7 md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow">
                {t('availableNow.title')}
              </p>
              <ul className="mt-6 space-y-4">
                {(t('availableNow.items', { returnObjects: true }) as string[]).map((item) => (
                  <li key={item} className="flex items-start gap-3 text-lg font-medium">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-yellow shadow-[0_0_12px_rgba(255,184,0,0.5)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-text-muted">{t('categories.expanding')}</p>
            </InView>

            <AnimatedGroup className="grid gap-3 sm:grid-cols-2" stagger={0.05}>
              {CATEGORIES.map(({ key, live }) => (
                <article
                  key={key}
                  className={`rounded-2xl border p-5 transition duration-300 hover:-translate-y-0.5 ${
                    live ? 'border-yellow/30 bg-yellow/5' : 'border-border bg-charcoal'
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
            </AnimatedGroup>
          </div>
        </div>
      </section>

      <section id="privacy" className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <InView className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              {t('trust.deviceControlTitle')}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">{t('trust.deviceDefault')}</p>
          </InView>
          <InView delay={0.08}>
            <PrivacyArchitecture />
          </InView>
          <InView className="mx-auto mt-10 max-w-3xl rounded-2xl border border-border bg-charcoal-light p-6 text-center md:p-8">
            <p className="text-sm leading-relaxed text-text-muted">{t('trust.explicitCloud')}</p>
          </InView>
        </div>
      </section>

      <section id="trust" className="border-t border-border bg-charcoal-light py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <InView className="rounded-3xl border border-yellow/20 bg-[radial-gradient(ellipse_at_center,rgba(255,184,0,0.08),transparent_70%)] p-8 md:p-12">
            <h2 className="text-center text-3xl font-bold md:text-4xl">{t('safety.title')}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-text-muted">{t('safety.desc')}</p>
            <ul className="mx-auto mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
              {(t('safety.points', { returnObjects: true }) as string[]).map((point) => (
                <li
                  key={point}
                  className="rounded-xl border border-border bg-charcoal/70 px-4 py-3 text-sm text-text"
                >
                  {point}
                </li>
              ))}
            </ul>
            <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-text-muted">
              {t('trust.disclaimer')}
            </p>
          </InView>
        </div>
      </section>

      <section id="product" className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <InView>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow">
              {t('product.eyebrow')}
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">{t('product.title')}</h2>
            <p className="mt-4 max-w-3xl text-lg text-text-muted">{t('product.desc')}</p>
          </InView>

          <div className="relative mt-14">
            <div
              className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-40 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,184,0,0.08),transparent_70%)]"
              aria-hidden="true"
            />
            <AnimatedGroup
              className="flex gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-5 md:overflow-visible"
              stagger={0.08}
            >
              <AppShowcaseScreen title={t('product.screens.home')} className="shrink-0 md:translate-y-4">
                <div className="space-y-3 p-4">
                  <div className="rounded-lg border border-border p-3">
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
                  <div className="rounded-lg border border-yellow/25 bg-yellow/5 p-3 text-sm">
                    What happened?
                  </div>
                </div>
              </AppShowcaseScreen>

              <AppShowcaseScreen title={t('product.screens.voice')} className="shrink-0">
                <div className="space-y-3 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-yellow">Voice</p>
                  <p className="text-sm italic leading-relaxed text-text">
                    &ldquo;My train was 90 minutes late.&rdquo;
                  </p>
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-yellow text-charcoal shadow-[0_0_20px_rgba(255,184,0,0.3)]">
                    <Mic className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>
              </AppShowcaseScreen>

              <AppShowcaseScreen title={t('product.screens.result')} className="shrink-0 md:-translate-y-2">
                <div className="space-y-3 p-4">
                  <div className="rounded-lg border border-yellow/30 bg-yellow/5 p-3">
                    <p className="text-[10px] uppercase text-yellow">Possible claim</p>
                    <p className="mt-1 text-sm font-semibold">Possible eligibility found</p>
                  </div>
                  <p className="text-xs leading-relaxed text-text-muted">{t('product.resultNote')}</p>
                </div>
              </AppShowcaseScreen>

              <AppShowcaseScreen title={t('product.screens.vault')} className="shrink-0">
                <div className="grid grid-cols-2 gap-2 p-4 text-xs">
                  {['Tickets', 'Receipts', 'Bookings', 'Bills'].map((label) => (
                    <div key={label} className="rounded-md border border-border px-2 py-3 text-text-muted">
                      {label}
                    </div>
                  ))}
                </div>
              </AppShowcaseScreen>

              <AppShowcaseScreen title={t('product.screens.profile')} className="shrink-0 md:translate-y-6">
                <div className="space-y-3 p-4 text-sm">
                  <div className="rounded-lg border border-border p-3">
                    <p className="text-[10px] uppercase text-text-muted">Account</p>
                    <p className="mt-1 font-semibold">Profile & settings</p>
                  </div>
                  <div className="rounded-lg border border-border p-3 text-text-muted">Activity</div>
                  <div className="rounded-lg border border-border p-3 text-text-muted">Privacy</div>
                </div>
              </AppShowcaseScreen>
            </AnimatedGroup>
          </div>
        </div>
      </section>

      <section id="faq" className="border-t border-border bg-charcoal-light py-16 md:py-24">
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

      <section id="download" className="relative overflow-hidden py-20 md:py-28">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,184,0,0.1),transparent_60%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-2xl px-4 text-center">
          <InView>
            <h2 className="text-3xl font-bold md:text-5xl">{t('cta.title')}</h2>
            <p className="mt-4 text-lg text-text-muted">{t('cta.desc')}</p>
            <PrimaryCtaLink to={PUBLIC_PATHS.download} className="mt-8">
              {t('cta.button')}
            </PrimaryCtaLink>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-charcoal-light p-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow">Android</p>
                <p className="mt-2 font-semibold">Google Play</p>
                <p className="mt-1 text-sm text-text-muted">{t('cta.comingSoon')}</p>
              </div>
              <div className="rounded-2xl border border-border bg-charcoal-light p-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow">iOS</p>
                <p className="mt-2 font-semibold">App Store</p>
                <p className="mt-1 text-sm text-text-muted">{t('cta.comingSoon')}</p>
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
