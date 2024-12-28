import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

import { HTMLMotionProps } from 'framer-motion'

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  className?: string
}

export function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}

