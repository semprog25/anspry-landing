import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Mic, ScanLine, Type } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/utils'

interface PhoneFrameProps {
  children: ReactNode
  className?: string
  label?: string
}

export function PhoneFrame({ children, className = '', label }: PhoneFrameProps) {
  return (
    <div className={cn('mx-auto w-full max-w-[300px]', className)}>
      <div className="rounded-[1.75rem] border border-border bg-charcoal-light p-2">
        <div className="overflow-hidden rounded-[1.35rem] border border-border bg-charcoal">
          {label && (
            <div className="border-b border-border bg-charcoal-light px-4 py-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-text-muted">
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
        'inline-flex min-h-12 items-center justify-center rounded-lg bg-yellow px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-charcoal transition duration-200 hover:bg-yellow-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow',
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
        'inline-flex min-h-12 items-center justify-center rounded-lg border border-border px-8 py-3.5 text-sm font-semibold text-text transition duration-200 hover:border-yellow/40 hover:text-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow',
        className,
      )}
    >
      {children}
    </a>
  )
}

export function StatusBadge({
  tone,
  label,
}: {
  tone: 'available' | 'coming_soon' | 'planned' | 'live' | 'next' | 'roadmap'
  label: string
}) {
  const normalized =
    tone === 'live' ? 'available' : tone === 'next' ? 'coming_soon' : tone === 'roadmap' ? 'planned' : tone

  return (
    <span
      className={cn(
        'shrink-0 rounded px-2 py-1 text-[10px] font-bold uppercase tracking-wide',
        normalized === 'available' && 'bg-yellow/15 text-yellow',
        normalized === 'coming_soon' && 'bg-charcoal-muted text-yellow-hover',
        normalized === 'planned' && 'bg-charcoal-muted text-text-muted',
      )}
    >
      {label}
    </span>
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
        <span className="text-lg font-semibold text-text">{question}</span>
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
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 leading-relaxed text-text-muted">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/** Single static home-screen illustration — empty state, no invented account data. */
export function HeroProductPanel() {
  const { t } = useTranslation()

  return (
    <div className="relative mx-auto w-full max-w-sm">
      <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-text-muted">
        {t('hero.previewLabel')}
      </p>
      <PhoneFrame>
        <div className="space-y-5 p-5">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-yellow">ANSPRY</p>
            <p className="mt-2 text-lg font-bold leading-tight text-text">{t('hero.headline')}</p>
          </div>

          <div className="rounded-lg border border-border bg-charcoal-elevated p-4">
            <p className="text-sm font-semibold text-text">{t('hero.previewTitle')}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded border border-border px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-text-muted">
                <Type className="h-3 w-3 text-yellow" aria-hidden="true" />
                {t('hero.previewModes.type')}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded border border-border px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-text-muted">
                <Mic className="h-3 w-3 text-yellow" aria-hidden="true" />
                {t('hero.previewModes.speak')}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded border border-border px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-text-muted">
                <ScanLine className="h-3 w-3 text-yellow" aria-hidden="true" />
                {t('hero.previewModes.scan')}
              </span>
            </div>
            <div className="mt-3 min-h-16 rounded-lg border border-dashed border-border bg-charcoal px-3 py-3 text-sm text-text-muted">
              {t('hero.previewPlaceholder')}
            </div>
            <div className="mt-3 rounded-lg bg-yellow py-2.5 text-center text-xs font-bold uppercase tracking-wide text-charcoal">
              {t('hero.cta')}
            </div>
          </div>

          <p className="text-center text-[10px] leading-relaxed text-text-muted">
            {t('hero.previewNote')}
          </p>
        </div>
      </PhoneFrame>
    </div>
  )
}

/** Larger product showcase for the Inside the app section. */
export function ProductHomePreview() {
  const { t } = useTranslation()

  return (
    <div>
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-text-muted">
        {t('product.exampleLabel')}
      </p>
      <PhoneFrame className="max-w-[320px] md:mx-0">
        <div className="space-y-5 p-5">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-yellow">ANSPRY</p>
            <p className="mt-2 text-xl font-bold leading-tight text-text">{t('hero.headline')}</p>
          </div>
          <div className="rounded-lg border border-border bg-charcoal-elevated p-4">
            <p className="text-sm font-semibold text-text">{t('hero.previewTitle')}</p>
            <div className="mt-3 min-h-20 rounded-lg border border-dashed border-border bg-charcoal px-3 py-3 text-sm text-text-muted">
              {t('hero.previewPlaceholder')}
            </div>
            <div className="mt-3 rounded-lg bg-yellow py-2.5 text-center text-xs font-bold uppercase tracking-wide text-charcoal">
              {t('hero.cta')}
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 border-t border-border pt-3 text-center">
            {(
              t('product.navLabels', { returnObjects: true }) as string[]
            ).map((label) => (
              <span key={label} className="text-[9px] font-medium uppercase tracking-wide text-text-muted">
                {label}
              </span>
            ))}
          </div>
        </div>
      </PhoneFrame>
    </div>
  )
}

export function PrivacyArchitecture({
  layers,
}: {
  layers: Array<{ title: string; description: string }>
}) {
  return (
    <div className="mx-auto mt-12 grid max-w-3xl gap-4">
      {layers.map((layer, index) => (
        <div key={layer.title}>
          <div className="rounded-xl border border-border bg-charcoal-light p-6 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-yellow">
              {layer.title}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-text">{layer.description}</p>
          </div>
          {index < layers.length - 1 && (
            <div className="flex justify-center py-2 text-text-muted" aria-hidden="true">
              ↓
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
