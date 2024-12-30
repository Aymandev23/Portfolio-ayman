'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { GlassCard } from '@/components/ui/glass-card'
import { SectionHeading } from '@/components/ui/section-heading'
import { fadeIn } from '@/utils/animation-variants'
import { useRef, useState } from 'react'

const milestones = [
  { 
    year: '2018', 
    title: 'Founded', 
    description: 'Eclipso Studio was born with a vision to revolutionize digital design.',
    image: '/placeholder.svg?height=300&width=400',
    hoverImage: '/placeholder.svg?height=300&width=400&text=Founding+Team'
  },
  { 
    year: '2020', 
    title: 'Expansion', 
    description: 'We expanded our team and services, venturing into web development.',
    image: '/placeholder.svg?height=300&width=400',
    hoverImage: '/placeholder.svg?height=300&width=400&text=Team+Growth'
  },
  { 
    year: '2022', 
    title: 'Global Reach', 
    description: 'Our client base expanded globally, working with brands across continents.',
    image: '/placeholder.svg?height=300&width=400',
    hoverImage: '/placeholder.svg?height=300&width=400&text=Global+Map'
  },
  { 
    year: '2024', 
    title: 'Innovation Hub', 
    description: 'Launched our innovation lab, pushing the boundaries of digital experiences.',
    image: '/placeholder.svg?height=300&width=400',
    hoverImage: '/placeholder.svg?height=300&width=400&text=Innovation+Lab'
  },
]

export function OurJourney() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <section className="py-20" ref={containerRef}>
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Our Journey"
          subtitle="Milestones that shaped our growth"
        />
        <motion.div
          style={{ scale, opacity }}
          className="relative"
        >
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="mb-16 last:mb-0"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <GlassCard className="p-6 relative overflow-hidden group">
                <div className="flex flex-col md:flex-row items-start md:items-center">
                  <div className="flex-grow pr-6 md:w-3/5">
                    <div className="flex items-center mb-4">
                      <div className="bg-[#CCFF00] text-black font-bold text-xl px-4 py-2 rounded-full mr-4">
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-bold">{milestone.title}</h3>
                    </div>
                    <p className="text-gray-400">{milestone.description}</p>
                  </div>
                  <div className="relative w-full md:w-2/5 aspect-video mt-4 md:mt-0 overflow-hidden rounded-lg">
                    <Image
                      src={milestone.image}
                      alt={milestone.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover object-center transition-opacity duration-300 ease-out"
                      style={{ opacity: hoveredIndex === index ? 0 : 1 }}
                    />
                    <Image
                      src={milestone.hoverImage}
                      alt={`${milestone.title} detail`}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover object-center transition-opacity duration-300 ease-out"
                      style={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#CCFF00] to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

