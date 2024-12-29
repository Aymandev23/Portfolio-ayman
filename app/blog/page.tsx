'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Nav } from '@/components/nav'
import { GlassCard } from '@/components/ui/glass-card'
import { fadeIn, staggerContainer } from '@/utils/animation-variants'
import { useState } from 'react'
import { Contact } from '@/components/contact-section'
import { Footer } from '@/components/footer'


const articles = [
  {
    id: 'enhancing-brand-identity',
    title: 'Enhancing Brand Identity with an Interactive Webflow Website',
    category: 'Branding',
    date: 'November 5, 2024',
    image: '/placeholder.svg?height=400&width=600'
  },
  {
    id: 'webflow-good-platform',
    title: 'Is Webflow Good Platform for Building a Portfolio Website?',
    category: 'Web Design',
    date: 'November 5, 2024',
    image: '/placeholder.svg?height=400&width=600'
  },
  {
    id: 'webflow-vs-squarespace',
    title: 'Webflow vs. Squarespace',
    category: 'Web Design',
    date: 'November 5, 2024',
    image: '/placeholder.svg?height=400&width=600'
  },
  {
    id: 'webflow-vs-bubble',
    title: 'Webflow + Xano vs. Bubble',
    category: 'Web App',
    date: 'November 5, 2024',
    image: '/placeholder.svg?height=400&width=600'
  }
]

const categories = [
  'Maintenance',
  'Web Design',
  'Custom Code',
  'Wireframing',
  'App Design',
  'Web App',
  'Branding',
  'UI/UX Design',
  'Webflow Dev'
]

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(prevCategory => prevCategory === category ? null : category)
  }

  const filteredArticles = selectedCategory
    ? articles.filter(article => article.category === selectedCategory)
    : articles
  return (
    <><div className="min-h-screen bg-black">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#CCFF00]/20 via-transparent to-emerald-900/20 pointer-events-none" />
      <Nav />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-16"
          >
            Blog & Insights
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 mb-24"
          >
            {articles.slice(0, 2).map((article) => (
              <motion.div
                key={article.id}
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <Link href={`/blog/${article.id}`}>
                  <GlassCard className="aspect-video relative overflow-hidden">
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-[#CCFF00] text-black text-sm px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                    </div>
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                      <p className="text-sm text-gray-400">{article.date}</p>
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="bg-zinc-900 rounded-3xl p-8 md:p-16 text-center mb-24">
            <h2 className="text-4xl font-bold mb-4">Join our newsletter</h2>
            <p className="text-gray-400 mb-8">
              Write your email down below and get exclusive access to free resources!
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/5 border border-white/10 rounded-l-full px-6 py-3 outline-none focus:border-[#CCFF00]" />
              <button className="bg-[#CCFF00] text-black px-6 py-3 rounded-r-full">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Check out all articles</h2>
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategorySelect(category)}
                  className={`px-4 py-2 rounded-full border transition-colors ${selectedCategory === category
                      ? 'bg-[#CCFF00] text-black border-[#CCFF00]'
                      : 'border-white/10 hover:bg-white/5'}`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Link href={`/blog/${article.id}`}>
                    <GlassCard className="aspect-square relative overflow-hidden">
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-[#CCFF00] text-black text-sm px-3 py-1 rounded-full">
                          {article.category}
                        </span>
                      </div>
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                        <p className="text-sm text-gray-400">{article.date}</p>
                      </div>
                    </GlassCard>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
 
 {/* CTA Section */}
 <Contact />

      
        </div>
      </main>
    </div><Footer /></>
  )
}

