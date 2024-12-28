'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { GlassCard } from '@/components/ui/glass-card'

const testimonials = [
  {
    quote: "We needed an agency to help us scale our online presence and Eclipso delivered beyond our expectations. Their team is incredibly talented and professional.",
    author: "John Smith",
    role: "CEO at TechCorp"
  },
  {
    quote: "Working with Eclipso has transformed our digital presence. Their attention to detail and creative solutions have helped us stand out in a crowded market.",
    author: "Sarah Johnson",
    role: "Marketing Director at InnovateCo"
  },
  {
    quote: "The team at Eclipso consistently delivers high-quality work. Their expertise in web development and design has been invaluable to our business growth.",
    author: "Michael Chen",
    role: "Founder of StartupX"
  },
  {
    quote: "Eclipso's approach to digital solutions is refreshing. They don't just build websites, they create experiences that drive results.",
    author: "Emma Williams",
    role: "Product Manager at DigitalFirst"
  }
]

export function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((current) => (current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative max-w-3xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <GlassCard className="p-8 md:p-12 text-center relative z-10">
            <div className="text-[#CCFF00] text-6xl font-serif mb-6">&apos;&apos;</div>
            <p className="text-xl md:text-2xl mb-6">
              {testimonials[currentIndex].quote}
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-600" />
              <div className="text-left">
                <div className="font-medium">{testimonials[currentIndex].author}</div>
                <div className="text-gray-400 text-sm">{testimonials[currentIndex].role}</div>
              </div>
            </div>
            <div className="flex justify-between mt-8">
              <button
                onClick={prev}
                className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={next}
                className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </GlassCard>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

