'use client'


import { motion } from 'framer-motion'
import { fadeIn,floatingAnimation } from '@/utils/animation-variants'
import { ArrowRight } from 'lucide-react'

export function Contact() {
 
  return (
    
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-[#CCFF00] rounded-3xl p-8 md:p-16 text-center text-black relative overflow-hidden"
          >
            <motion.div
              variants={floatingAnimation}
              initial="initial"
              animate="animate"
              className="relative z-10"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-black/60 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss your project and see how we can help you achieve your business goals.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-black text-white px-8 py-3 rounded-full font-medium inline-flex items-center gap-2 group"
              >
                Schedule a Call
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine" />
          </motion.div>
        </div>
      </section>
  )
}

