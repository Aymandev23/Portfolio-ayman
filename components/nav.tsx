'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full bg-black/50 backdrop-blur-md" aria-label="Main navigation">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Eclipso
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
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
  )
}

