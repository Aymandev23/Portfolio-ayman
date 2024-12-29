'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { GlassCard } from '@/components/ui/glass-card'

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
        <GlassCard className="m-2 p-0">
    <nav className="container mx-auto flex items-center justify-between" aria-label="Main navigation">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
          eclipso™
          </Link>
          
          <div className="hidden md:flex items-center gap-8 ">
            <Link href="/about" className="text-sm hover:text-[#CCFF00] transition-colors">
              About
            </Link>
            <Link href="/services" className="text-sm hover:text-[#CCFF00] transition-colors">
            Services
            </Link>
            <Link href="/work" className=" text-sm hover:text-[#CCFF00] transition-colors">
              Work
            </Link>
            <Link href="/blog" className=" text-sm hover:text-[#CCFF00] transition-colors">
              Blog
            </Link>
            <Link href="/contact" className=" text-sm hover:text-[#CCFF00] transition-colors">
              Contact
            </Link>
            <button className="bg-[#CCFF00] text-black px-6 py-2 rounded-full text-sm font-medium">
              Get started
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          id="mobile-menu"
          aria-label="Mobile navigation menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 w-full bg-black p-4 md:hidden"
        >
          <div className="flex flex-col gap-4">
            <Link href="#services" className="hover:text-[#CCFF00] transition-colors">
              Services
            </Link>
            <Link href="#work" className="hover:text-[#CCFF00] transition-colors">
              Work
            </Link>
            <Link href="#pricing" className="hover:text-[#CCFF00] transition-colors">
              Pricing
            </Link>
            <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-[#CCFF00] transition-colors">
              Get started
            </button>
          </div>
        </motion.div>
      )}
    </nav>
    </GlassCard>
    </header>
  )
}

