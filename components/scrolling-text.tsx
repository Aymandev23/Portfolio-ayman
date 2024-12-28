'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useState } from 'react'
import { SmileyFace } from './smiley-face'

export function ScrollingText() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 400 } // Reduced stiffness for slower movement
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    if (!containerRef.current) return

    const rect = (e.currentTarget as HTMLSpanElement).getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    mouseX.set(x - 20) // Adjust for smiley size
    mouseY.set(y - 20) // Adjust for smiley size
    setActiveIndex(index)
  }

  const handleMouseLeave = () => {
    setActiveIndex(null)
  }

  return (
    <div 
      ref={containerRef}
      className="relative w-full overflow-hidden py-8 mb-8"
    >
      <div className="animate-scroll-text whitespace-nowrap text-4xl md:text-6xl font-bold tracking-wider">
        {[...Array(8)].map((_, i) => (
          <span 
            key={i}
            className="inline-block mr-8 relative"
            onMouseMove={(e) => handleMouseMove(e, i)}
            onMouseLeave={handleMouseLeave}
          >
            ECLIPSO STUDIO™
            {activeIndex === i && (
              <motion.div
                className="pointer-events-none absolute w-10 h-10 z-50"
                style={{
                  x: springX,
                  y: springY,
                }}
              >
                <SmileyFace />
              </motion.div>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}

