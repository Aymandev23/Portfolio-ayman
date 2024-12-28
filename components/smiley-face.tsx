'use client'

import { motion } from 'framer-motion'

interface SmileyFaceProps {
  className?: string
}

export function SmileyFace({ className = "" }: SmileyFaceProps) {
  return (
    <motion.svg 
      viewBox="0 0 100 100" 
      className={`w-12 h-12 ${className}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <circle cx="50" cy="50" r="50" fill="#FFD700" />
      <ellipse cx="35" cy="40" rx="6" ry="8" fill="black" />
      <ellipse cx="65" cy="40" rx="6" ry="8" fill="black" />
      <path
        d="M 30 60 Q 50 75 70 60"
        stroke="black"
        strokeWidth="4"
        fill="none"
      />
    </motion.svg>
  )
}

