'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { AnimatedText } from './animated-text'
import { HoverText } from './hover-text'
import { fadeIn, staggerContainer } from '@/utils/animation-variants'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            variants={fadeIn}
            className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm mb-6 backdrop-blur-md"
          >
            A solution for companies
          </motion.div>
          <motion.h1
            variants={fadeIn}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <HoverText>
              Your Brand&apos;s Digital Partner{' '}
              <span className="text-[#CCFF00]">made for <AnimatedText /></span>
            </HoverText>
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-gray-400 mb-8 text-lg md:text-xl"
          >
            Our integrated teams complement your core team of marketers giving your
            unlimited design and development power.
          </motion.p>
          <motion.button
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            className="bg-[#CCFF00] text-black px-8 py-3 rounded-full text-lg font-medium inline-flex items-center gap-2 group"
          >
            Get started today
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

