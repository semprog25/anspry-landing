import { useEffect, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Mic, ScanLine, Type } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'

interface PhoneFrameProps {
  children: ReactNode
  className?: string
  label?: string
}

export function PhoneFrame({ children, className = '', label }: PhoneFrameProps) {
  return (
    <div className={cn('mx-auto w-full max-w-[280px]', className)}>
      <div className="rounded-[2rem] border border-border/80 bg-charcoal-light p-2.5 shadow-[0_24px_80px_rgba(0,0,0,0.45)] ring-1 ring-white/5 transition duration-300 hover:-translate-y-1 hover:border-yellow/20 hover:shadow-[0_28px_90px_rgba(0,0,0,0.5)]">
        <div className="overflow-hidden rounded-[1.5rem] border border-border bg-charcoal">
          {label && (
            <div className="border-b border-border bg-charcoal-light px-4 py-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-text-muted">
                {label}
              </p>
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  )
}

export function PrimaryCtaLink({
  children,
  to,
  className = '',
}: {
  children: ReactNode
  to: string
  className?: string
}) {
  return (
    <Link
      to={to}
      className={cn(
        'inline-flex min-h-12 items-center justify-center rounded-xl bg-yellow px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-charcoal shadow-[0_0_24px_rgba(255,184,0,0.22)] transition duration-200 hover:-translate-y-0.5 hover:bg-yellow-hover hover:shadow-[0_8px_32px_rgba(255,184,0,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow',
        className,
      )}
    >
      {children}
    </Link>
  )
}

export function SecondaryCtaLink({
  children,
  href,
  className = '',
}: {
  children: ReactNode
  href: string
  className?: string
}) {
  return (
    <a
      href={href}
      className={cn(
        'inline-flex min-h-12 items-center justify-center rounded-xl border border-border px-8 py-3.5 text-sm font-semibold text-text transition duration-200 hover:-translate-y-0.5 hover:border-yellow/40 hover:text-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow',
        className,
      )}
    >
      {children}
    </a>
  )
}

export function StatusBadge({
  live,
  liveLabel,
  soonLabel,
}: {
  live: boolean
  liveLabel: string
  soonLabel: string
}) {
  return (
    <span
      className={cn(
        'shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide',
        live
          ? 'bg-yellow/15 text-yellow ring-1 ring-yellow/25'
          : 'bg-charcoal-muted text-text-muted',
      )}
    >
      {live ? liveLabel : soonLabel}
    </span>
  )
}

export function FeatureCard({
  title,
  description,
  icon,
  className = '',
}: {
  title: string
  description: string
  icon: ReactNode
  className?: string
}) {
  return (
    <article
      className={cn(
        'group rounded-2xl border border-border bg-charcoal-light p-6 transition duration-300 hover:-translate-y-1 hover:border-yellow/25 hover:shadow-[0_16px_40px_rgba(0,0,0,0.28)]',
        className,
      )}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow/10 text-yellow ring-1 ring-yellow/20 transition group-hover:bg-yellow/15">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-text-muted">{description}</p>
    </article>
  )
}

export function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="border-b border-border last:border-0">
      <button
        type="button"
        className="flex w-full min-h-14 items-center justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="text-lg font-semibold">{question}</span>
        <span
          className={cn(
            'flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-yellow transition',
            isOpen && 'rotate-45 border-yellow/40',
          )}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 leading-relaxed text-text-muted">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const HERO_STAGES = [
  {
    key: 'input',
    title: 'What happened?',
    body: 'My ICE from Hamburg to Berlin was 90 minutes late.',
  },
  {
    key: 'checking',
    title: 'Checking your situation',
    body: 'Comparing your details with supported passenger-rights rules.',
  },
  {
    key: 'result',
    title: 'Possible claim',
    body: 'Possible eligibility found. Review what may apply before you continue.',
  },
] as const

export function HeroProductPanel() {
  const [stage, setStage] = useState(0)
  const prefersReducedMotion = useReducedMotion()
  const current = HERO_STAGES[stage]

  useEffect(() => {
    if (prefersReducedMotion) return
    const id = window.setInterval(() => {
      setStage((value) => (value + 1) % HERO_STAGES.length)
    }, 3200)
    return () => window.clearInterval(id)
  }, [prefersReducedMotion])

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.5rem] bg-[radial-gradient(circle_at_center,rgba(255,184,0,0.14),transparent_65%)]"
        aria-hidden="true"
      />
      <div className="rounded-[1.75rem] border border-border/90 bg-charcoal-light/95 p-5 shadow-[0_28px_90px_rgba(0,0,0,0.45)] ring-1 ring-white/5 backdrop-blur-sm md:p-6">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-yellow">Product preview</p>
          <div className="flex gap-1.5" aria-hidden="true">
            {HERO_STAGES.map((item, index) => (
              <span
                key={item.key}
                className={cn(
                  'h-1.5 w-1.5 rounded-full transition',
                  index === stage ? 'bg-yellow' : 'bg-border',
                )}
              />
            ))}
          </div>
        </div>

        <div className="mt-5 min-h-[168px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.key}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-border bg-charcoal p-5"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-yellow">
                {current.title}
              </p>
              <p className="mt-3 text-base leading-relaxed text-text">{current.body}</p>
              {current.key === 'result' && (
                <p className="mt-4 rounded-xl border border-yellow/20 bg-yellow/5 px-3 py-2 text-xs text-text-muted">
                  Illustrative example — not a live claim check.
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-5 rounded-2xl border border-border bg-charcoal p-4">
          <label className="text-[10px] font-bold uppercase tracking-[0.18em] text-text-muted" htmlFor="hero-demo-input">
            What happened?
          </label>
          <div className="mt-3 flex items-end gap-2">
            <input
              id="hero-demo-input"
              readOnly
              value="My ICE from Hamburg to Berlin was 90 minutes late."
              className="min-h-11 w-full rounded-xl border border-border bg-charcoal-light px-3 text-sm text-text"
              aria-readonly="true"
            />
            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-yellow/30 bg-yellow/10 text-yellow"
              aria-label="Microphone input (illustrative)"
              tabIndex={0}
            >
              <Mic className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-[10px] uppercase tracking-wide text-text-muted">
              <Type className="h-3 w-3" aria-hidden="true" /> Type
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-[10px] uppercase tracking-wide text-text-muted">
              <Mic className="h-3 w-3" aria-hidden="true" /> Speak
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-[10px] uppercase tracking-wide text-text-muted">
              <ScanLine className="h-3 w-3" aria-hidden="true" /> Scan
            </span>
          </div>
          <div className="mt-4 rounded-xl bg-yellow py-3 text-center text-xs font-bold uppercase tracking-wide text-charcoal">
            Check my situation
          </div>
        </div>
      </div>
    </div>
  )
}

export function PrivacyArchitecture() {
  return (
    <div className="mx-auto mt-12 grid max-w-3xl gap-3">
      {[
        { title: 'DEVICE', items: ['Documents'] },
        { title: 'ANSPRY ACCOUNT', items: ['Cases', 'Profile', 'Settings'] },
        { title: 'EXPLICIT CLOUD TRANSFER', items: ['Only when you choose it.'] },
      ].map((layer, index) => (
        <div key={layer.title}>
          <div className="rounded-2xl border border-border bg-charcoal-light/90 p-5 text-center shadow-[0_12px_40px_rgba(0,0,0,0.2)]">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-yellow">{layer.title}</p>
            <ul className="mt-3 flex flex-wrap items-center justify-center gap-2">
              {layer.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-charcoal px-3 py-1.5 text-sm text-text"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {index < 2 && (
            <div className="flex justify-center py-2 text-yellow" aria-hidden="true">
              ↓
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
