import { motion, type Variants } from 'motion/react'
import { cn } from '@/lib/utils'

type Preset = 'fade' | 'blur' | 'slide'
type TextTag = 'h1' | 'h2' | 'h3' | 'p' | 'span'

interface TextEffectProps {
  children: string
  className?: string
  as?: TextTag
  per?: 'word' | 'char'
  preset?: Preset
  delay?: number
  speedReveal?: number
}

const presets: Record<Preset, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  blur: {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 },
  },
  slide: {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  },
}

export function TextEffect({
  children,
  className,
  as = 'p',
  per = 'word',
  preset = 'blur',
  delay = 0,
  speedReveal = 1,
}: TextEffectProps) {
  const segments = per === 'word' ? children.split(' ') : Array.from(children)
  const itemVariants = presets[preset]
  const sharedProps = {
    className: cn('text-text', className),
    initial: 'hidden' as const,
    animate: 'visible' as const,
    variants: {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.04 / speedReveal,
          delayChildren: delay,
        },
      },
    },
    'aria-label': children,
    'data-motion-text': true,
  }

  const content = segments.map((segment, index) => (
    <motion.span
      key={`${segment}-${index}`}
      className="inline-block whitespace-pre"
      variants={itemVariants}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {segment}
      {per === 'word' && index < segments.length - 1 ? '\u00A0' : ''}
    </motion.span>
  ))

  if (as === 'h1') return <motion.h1 {...sharedProps}>{content}</motion.h1>
  if (as === 'h2') return <motion.h2 {...sharedProps}>{content}</motion.h2>
  if (as === 'h3') return <motion.h3 {...sharedProps}>{content}</motion.h3>
  if (as === 'span') return <motion.span {...sharedProps}>{content}</motion.span>
  return <motion.p {...sharedProps}>{content}</motion.p>
}
