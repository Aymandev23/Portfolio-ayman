'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Search, Home, Mail } from 'lucide-react'
import { fadeIn } from '@/utils/animation-variants'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center"
        >
          {/* 404 Glitch Effect */}
          <div className="relative mb-8">
            <h1 className="text-[150px] md:text-[200px] font-bold leading-none tracking-tight">
              <span className="relative inline-block before:absolute before:inset-0 before:bg-[#CCFF00] before:animate-glitch-1 after:absolute after:inset-0 after:bg-[#FF00CC] after:animate-glitch-2 after:left-[2px]">
                404
              </span>
            </h1>
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <div className="w-full h-1 bg-white/20 animate-scan" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search our website..."
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 pr-12 focus:outline-none focus:border-[#CCFF00] transition-colors"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2">
                <Search className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 transition-colors rounded-full px-6 py-3"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 transition-colors rounded-full px-6 py-3"
            >
              <Mail className="w-4 h-4" />
              Contact Support
            </Link>
          </div>

          {/* Related Links */}
          <div className="text-center">
            <h3 className="text-lg font-medium mb-4">You might be interested in:</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Services', 'About Us', 'Portfolio', 'Blog'].map((link) => (
                <Link
                  key={link}
                  href={`/${link.toLowerCase().replace(' ', '-')}`}
                  className="text-[#CCFF00] hover:underline"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

