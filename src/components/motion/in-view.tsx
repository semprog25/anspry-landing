import { useRef } from 'react'
import { motion, useInView, useReducedMotion, type UseInViewOptions, type Variants } from 'motion/react'
import { cn } from '@/lib/utils'

interface InViewProps {
  children: React.ReactNode
  className?: string
  variants?: Variants
  once?: boolean
  viewOptions?: UseInViewOptions
  delay?: number
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
}

export function InView({
  children,
  className,
  variants = defaultVariants,
  once = true,
  viewOptions = { margin: '0px 0px -8% 0px' },
  delay = 0,
}: InViewProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, ...viewOptions })
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={cn(className)}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
