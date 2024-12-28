'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const words = ['Growth', 'Success', 'Innovation', 'Excellence']

export function AnimatedText() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 3000) // Change word every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <span className="relative inline-block w-[200px] h-[60px]"> {/* Adjust width and height as needed */}
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

