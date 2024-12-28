'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

interface MouseFollowerProps {
  isVisible: boolean
}

export function MouseFollower({ isVisible }: MouseFollowerProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Add spring physics for smoother movement
  const springConfig = { damping: 25, stiffness: 400 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 25) // Offset by half the width of the smiley
      mouseY.set(e.clientY - 25) // Offset by half the height of the smiley
    }

    if (isVisible) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isVisible, mouseX, mouseY])

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      style={{
        x: springX,
        y: springY,
      }}
    >
      <svg width="50" height="50" viewBox="0 0 100 100" className="drop-shadow-lg">
        <circle cx="50" cy="50" r="50" fill="#CCFF00"/>
        <circle cx="35" cy="40" r="5" fill="black"/>
        <circle cx="65" cy="40" r="5" fill="black"/>
        <path
          d="M 25 60 Q 50 80 75 60"
          stroke="black"
          strokeWidth="4"
          fill="none"
        />
      </svg>
    </motion.div>
  )
}

