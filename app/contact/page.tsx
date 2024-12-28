'use client'

import { motion } from 'framer-motion'
import { Nav } from '@/components/nav'
import { fadeIn } from '@/utils/animation-variants'
import { GlassCard } from '@/components/ui/glass-card'

const services = [
  'Web Design',
  'Webflow Development',
  'On-page SEO',
  'Migration',
  'UI/UX Design',
  'App Development',
  'Other'
]

const budgets = [
  '<5k$',
  '$5k-$10k',
  '$10k-$20k',
  '$20k+'
]

export default function Contact() {
  return (
    <div className="min-h-screen bg-black">
      <Nav />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Let&apos;s grow together
            </h1>
            <p className="text-gray-400">
              Awesome, you finally made your decision here! Fill these forms & we will contact you back :)
            </p>
          </motion.div>

          <GlassCard className="p-8 relative">
            <div className="absolute -top-12 -right-12">
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 bg-[#CCFF00] rounded-full animate-spin-slow">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <path
                        id="circle"
                        d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      />
                    </defs>
                    <text className="text-[14px]">
                      <textPath href="#circle" className="text-black font-medium">
                        schedule a free call • schedule a free call •
                      </textPath>
                    </text>
                  </svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4 h-4 bg-black transform rotate-45" />
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <h2 className="text-xl font-bold mb-6">Fill out form</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-full bg-white/5 border border-white/10 focus:border-[#CCFF00] outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email *"
                  required
                  className="w-full px-4 py-3 rounded-full bg-white/5 border border-white/10 focus:border-[#CCFF00] outline-none transition-colors"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full px-4 py-3 rounded-full bg-white/5 border border-white/10 focus:border-[#CCFF00] outline-none transition-colors"
                />
                <input
                  type="url"
                  placeholder="Website Url"
                  className="w-full px-4 py-3 rounded-full bg-white/5 border border-white/10 focus:border-[#CCFF00] outline-none transition-colors"
                />
              </div>

              <textarea
                placeholder="Message *"
                required
                rows={6}
                className="w-full px-4 py-3 rounded-3xl bg-white/5 border border-white/10 focus:border-[#CCFF00] outline-none transition-colors"
              />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Service</h3>
                <div className="flex flex-wrap gap-2">
                  {services.map((service) => (
                    <label
                      key={service}
                      className="group cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        name="service"
                        value={service}
                        className="peer sr-only"
                      />
                      <span className="px-4 py-2 rounded-full border border-white/10 peer-checked:bg-[#CCFF00] peer-checked:text-black peer-checked:border-[#CCFF00] transition-colors">
                        {service}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Budget</h3>
                <div className="flex flex-wrap gap-2">
                  {budgets.map((budget) => (
                    <label
                      key={budget}
                      className="group cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="budget"
                        value={budget}
                        className="peer sr-only"
                      />
                      <span className="px-4 py-2 rounded-full border border-white/10 peer-checked:bg-[#CCFF00] peer-checked:text-black peer-checked:border-[#CCFF00] transition-colors">
                        {budget}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="bg-[#CCFF00] text-black px-8 py-3 rounded-full font-medium hover:bg-[#CCFF00]/90 transition-colors"
              >
                Submit
              </button>
            </form>
          </GlassCard>
        </div>
      </main>
    </div>
  )
}

