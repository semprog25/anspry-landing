interface AnspryLogoProps {
  size?: 'sm' | 'md' | 'lg'
  showWordmark?: boolean
  className?: string
}

const SIZE_MAP = {
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-14 w-14',
} as const

export function AnspryLogo({ size = 'md', showWordmark = false, className = '' }: AnspryLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={`${import.meta.env.BASE_URL}anspry-logo-mark.png`}
        alt="Anspry"
        width={56}
        height={56}
        className={`${SIZE_MAP[size]} object-contain`}
        loading="eager"
        decoding="async"
      />
      {showWordmark && (
        <span className="text-sm font-bold uppercase tracking-[0.22em] text-yellow">ANSPRY</span>
      )}
    </div>
  )
}
