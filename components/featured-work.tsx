'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

const projects = [
  {
    title: 'Givebacks',
    year: '2024',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Webflow Dev', 'Custom Code'],
  },
  {
    title: 'Candy Shop',
    year: '2024',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Web Design', 'Wireframing'],
  },
  {
    title: 'Merconic',
    year: '2023',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Webflow Dev', 'Maintenance'],
  },
  {
    title: 'Wallet App',
    year: '2024',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['App Design', 'Development'],
  },
]

export function FeaturedWork() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 420
      const currentScroll = scrollContainerRef.current.scrollLeft
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-bold">Featured Work</h2>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => scroll('left')}
            className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <button className="bg-white/10 hover:bg-white/20 transition-colors px-6 py-2 rounded-full text-sm">
            View More
          </button>
        </div>
      </div>
      
      <div className="relative">
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-8 snap-x snap-mandatory"
          style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="min-w-[400px] group snap-start"
            >
              <div className="relative bg-zinc-800/50 rounded-3xl overflow-hidden mb-4">
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[#CCFF00] text-black text-sm px-3 py-1 rounded-full">
                    {project.year}
                  </span>
                </div>
                <div className="absolute top-4 right-4 z-10">
                  <button className="bg-black/50 backdrop-blur-sm text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  priority={index < 2}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-black/50 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-medium">{project.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

