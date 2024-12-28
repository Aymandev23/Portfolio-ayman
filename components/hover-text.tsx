'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SmileyFace } from './smiley-face'

interface HoverTextProps {
  children: React.ReactNode
  className?: string
}

export function HoverText({ children, className = "" }: HoverTextProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const textRef = useRef<HTMLSpanElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!textRef.current) return
    
    const rect = textRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    setMousePosition({ x, y })
  }

  return (
    <span
      ref={textRef}
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {children}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="pointer-events-none absolute z-50"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            style={{
              left: mousePosition.x - 24, // Half the width of the smiley
              top: mousePosition.y - 24,  // Half the height of the smiley
            }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <SmileyFace />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  )
}

