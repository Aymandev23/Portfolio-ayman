import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/animation-variants'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeading({ title, subtitle, className = "" }: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className={`text-center mb-12 ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  )
}

