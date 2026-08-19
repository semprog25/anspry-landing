import type { ReactNode } from 'react'

interface PhoneFrameProps {
  children: ReactNode
  className?: string
  label?: string
}

export function PhoneFrame({ children, className = '', label }: PhoneFrameProps) {
  return (
    <div className={`mx-auto w-full max-w-[280px] ${className}`}>
      <div className="rounded-[2rem] border border-border/80 bg-charcoal-light p-2.5 shadow-[0_24px_80px_rgba(0,0,0,0.45)] ring-1 ring-white/5">
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

interface PrimaryCtaProps {
  children: ReactNode
  to: string
  className?: string
}

export function PrimaryCtaLink({ children, to, className = '' }: PrimaryCtaProps) {
  return (
    <a
      href={to}
      className={`inline-flex min-h-12 items-center justify-center rounded-xl bg-yellow px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-charcoal shadow-[0_0_24px_rgba(255,184,0,0.22)] transition hover:bg-yellow-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow ${className}`}
    >
      {children}
    </a>
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
      className={`inline-flex min-h-12 items-center justify-center rounded-xl border border-border px-8 py-3.5 text-sm font-semibold text-text transition hover:border-yellow/40 hover:text-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow ${className}`}
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
      className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${
        live ? 'bg-yellow/15 text-yellow ring-1 ring-yellow/25' : 'bg-charcoal-muted text-text-muted'
      }`}
    >
      {live ? liveLabel : soonLabel}
    </span>
  )
}
