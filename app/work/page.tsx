'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Nav } from '@/components/nav'
import { GlassCard } from '@/components/ui/glass-card'
import { fadeIn, staggerContainer } from '@/utils/animation-variants'
import { FAQSection } from '@/components/faq-section'

const projects = [
  {
    id: 'givebacks',
    title: 'Givebacks',
    year: '2024',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Custom Code', 'Webflow Dev'],
    type: 'desktop'
  },
  {
    id: 'candy-shop',
    title: 'Candy Shop',
    year: '2023',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['App Design', 'UI/UX Design'],
    type: 'mobile'
  },
  {
    id: 'smart-zebra',
    title: 'Smart Zebra',
    year: '2023',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Webflow Dev', 'Maintenance'],
    type: 'desktop'
  },
  {
    id: 'wallet-app',
    title: 'Wallet App',
    year: '2024',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['App Design', 'UI/UX Design'],
    type: 'mobile'
  },
  {
    id: 'exit-game',
    title: 'Exit Game',
    year: '2023',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Webflow Dev', 'Maintenance'],
    type: 'desktop'
  },
  {
    id: 'skinrates',
    title: 'SkinRates',
    year: '2023',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['UI/UX Design', 'Web Design'],
    type: 'mobile'
  }
]

export default function Work() {
  return (
    <div className="min-h-screen bg-black">
      <Nav />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-16"
          >
            CASE STUDIES
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link href={`/work/${project.id}`}>
                  <GlassCard className="relative aspect-square overflow-hidden">
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-[#CCFF00] text-black text-sm px-3 py-1 rounded-full">
                        {project.year}
                      </span>
                    </div>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-white/10 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="bg-white/10 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="mb-24">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">
                Frequently asked Questions
              </h2>
              <button className="bg-[#CCFF00] text-black px-4 py-2 rounded-full text-sm">
                Ask a question
              </button>
            </div>
            <FAQSection />
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-[#CCFF00] rounded-3xl p-8 md:p-16 text-center text-black relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Let&apos;s Collab</h2>
              <p className="text-black/60 mb-8">
                Fill our form, book a call or contact us via email and let&apos;s see if we are good fit!
              </p>
              <button className="bg-black text-white px-8 py-3 rounded-full">
                Book a call
              </button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

