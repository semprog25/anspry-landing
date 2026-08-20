import { motion, type Variants } from 'motion/react'
import { cn } from '@/lib/utils'

interface AnimatedGroupProps {
  children: React.ReactNode
  className?: string
  delay?: number
  stagger?: number
}

const container: Variants = {
  hidden: {},
  visible: (stagger = 0.08) => ({
    transition: { staggerChildren: stagger, delayChildren: 0 },
  }),
}

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
}

export function AnimatedGroup({
  children,
  className,
  delay = 0,
  stagger = 0.08,
}: AnimatedGroupProps) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      variants={container}
      custom={stagger}
      transition={{ delayChildren: delay }}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div key={index} variants={item}>
              {child}
            </motion.div>
          ))
        : (
            <motion.div variants={item}>{children}</motion.div>
          )}
    </motion.div>
  )
}
