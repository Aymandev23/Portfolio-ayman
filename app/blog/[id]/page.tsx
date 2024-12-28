'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {  Facebook, Twitter, Linkedin, Copy } from 'lucide-react'
import { Nav } from '@/components/nav'
import { GlassCard } from '@/components/ui/glass-card'
import { fadeIn, staggerContainer } from '@/utils/animation-variants'

const articles = {
  'enhancing-brand-identity': {
    title: 'Enhancing Brand Identity with an Interactive Webflow Website',
    category: 'Branding',
    date: 'November 5, 2024',
    image: '/placeholder.svg?height=600&width=1200',
    content: {
      intro: 'In todays fast-paced digital landscape, your brands online presence is more than just a business card. Its how first impressions are formulated, the conversation starter between you and your audience.',
      sections: [
        {
          title: 'Why Brand Identity Matters',
          content: 'Before we dive into the technicalities of building with Webflow, lets first establish the importance of brand identity. A brand is more than just a logo or color palette. The brand your audience perceives plays a vital story in shaping their relationship with your business.'
        },
        {
          title: 'Webflow: The Ultimate Platform for Building Interactive Websites',
          content: 'A good content management system is the key for strong online presence. Webflow provides the perfect balance of flexibility and structure, allowing you to create stunning websites without sacrificing functionality or requiring extensive development resources.'
        },
        {
          title: 'Building an Interactive Website that Represents Your Brand',
          content: 'Creating a website with Webflow isnt just about designing a good-looking site. Its about ensuring every interaction, every animation, and every piece of content aligns with your brand identity.',
          subsections: [
            {
              title: '1. Define Your Brand Voice and Visual Identity',
              content: 'Start with clear brand guidelines you want to reflect on your website. This includes defining your color palette, typography, tone of voice, and visual elements. These guidelines will help ensure consistency across channels. Consider how your brand personality can be expressed through micro-interactions and animations.'
            },
            {
              title: '2. Leverage Animations for Brand Personality',
              content: 'Webflows animation capabilities allow you to add subtle movements that enhance user experience. Use animations to guide users through your content, highlight important information, and add personality to your site.'
            },
            {
              title: '3. Enhance User Engagement with Micro-interactions',
              content: 'Micro-interactions are small design elements that respond to user actions. These could be hover states, loading animations, or form feedback. Each interaction should align with your brand personality.'
            }
          ]
        }
      ],
      conclusion: 'An interactive website built with Webflow can be a powerful tool for enhancing your brand identity. By focusing on user experience, incorporating meaningful interactions, and maintaining consistent design elements, you can create a website that not only looks great but effectively communicates your brand story.'
    },
    relatedArticles: [
      {
        id: 'webflow-good-platform',
        title: 'Is Webflow Good Platform for Building a Portfolio Website?',
        category: 'Web Design',
        image: '/placeholder.svg?height=400&width=600'
      },
      {
        id: 'webflow-vs-squarespace',
        title: 'Webflow vs. Squarespace',
        category: 'Web Design',
        image: '/placeholder.svg?height=400&width=600'
      }
    ]
  },
  'webflow-good-platform': {
    title: 'Is Webflow Good Platform for Building a Portfolio Website?',
    category: 'Web Design',
    date: 'November 5, 2024',
    image: '/placeholder.svg?height=600&width=1200',
    content: {
      intro: 'When it comes to building a portfolio website, choosing the right platform is crucial. Webflow has emerged as a powerful contender, but is it the right choice for your portfolio?',
      sections: [
        {
          title: 'Understanding Webflows Capabilities',
          content: 'Webflow combines the flexibility of custom code with the ease of a visual editor. This unique approach makes it particularly suitable for portfolio websites that need to showcase creativity while maintaining professional functionality.'
        }
      ],
      conclusion: 'For creative professionals looking to build a standout portfolio, Webflow offers the perfect balance of creative freedom and professional features.'
    },
    relatedArticles: [
      {
        id: 'enhancing-brand-identity',
        title: 'Enhancing Brand Identity with an Interactive Webflow Website',
        category: 'Branding',
        image: '/placeholder.svg?height=400&width=600'
      }
    ]
  },
  'webflow-vs-squarespace': {
    title: 'Webflow vs. Squarespace',
    category: 'Web Design',
    date: 'November 5, 2024',
    image: '/placeholder.svg?height=600&width=1200',
    content: {
      intro: 'Choosing between Webflow and Squarespace? Lets break down the key differences to help you make an informed decision.',
      sections: [
        {
          title: 'Design Flexibility',
          content: 'While both platforms offer visual editing, Webflow provides significantly more control over design and functionality. This comes with a steeper learning curve but offers greater creative freedom.'
        }
      ],
      conclusion: 'Both platforms have their merits, but Webflow edges out for those seeking more control and customization capabilities.'
    },
    relatedArticles: [
      {
        id: 'enhancing-brand-identity',
        title: 'Enhancing Brand Identity with an Interactive Webflow Website',
        category: 'Branding',
        image: '/placeholder.svg?height=400&width=600'
      }
    ]
  },
  'webflow-vs-bubble': {
    title: 'Webflow + Xano vs. Bubble',
    category: 'Web App',
    date: 'November 5, 2024',
    image: '/placeholder.svg?height=600&width=1200',
    content: {
      intro: 'When building web applications, the choice of tech stack is crucial. Lets compare two popular approaches: Webflow + Xano versus Bubble.',
      sections: [
        {
          title: 'Development Approach',
          content: 'While Bubble offers an all-in-one solution, the combination of Webflow and Xano provides more flexibility and scalability for complex applications.'
        }
      ],
      conclusion: 'The choice between these approaches depends on your specific needs, technical expertise, and scalability requirements.'
    },
    relatedArticles: [
      {
        id: 'enhancing-brand-identity',
        title: 'Enhancing Brand Identity with an Interactive Webflow Website',
        category: 'Branding',
        image: '/placeholder.svg?height=400&width=600'
      }
    ]
  }
}

export default function ArticleDetail({ params }: { params: { id: string } }) {
  const article = articles[params.id as keyof typeof articles]

  if (!article) return null

  return (
    <div className="min-h-screen bg-black">
      <Nav />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="relative h-[70vh] rounded-3xl overflow-hidden mb-16">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
            <div className="absolute top-8 left-8">
              <span className="bg-[#CCFF00] text-black text-sm px-3 py-1 rounded-full">
                {article.category}
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 mb-24">
            <div className="lg:col-span-8">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="prose prose-invert max-w-none"
              >
                <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl font-bold mb-6">
                  {article.title}
                </motion.h1>
                
                <motion.p variants={fadeIn} className="text-gray-400 mb-8">
                  {article.date}
                </motion.p>

                <motion.div variants={fadeIn} className="flex items-center gap-4 mb-12">
                  <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                    <Copy className="w-5 h-5" />
                  </button>
                </motion.div>

                <motion.p variants={fadeIn} className="text-xl text-gray-300 mb-12">
                  {article.content.intro}
                </motion.p>

            
                {article.content.conclusion && (
                  <motion.div variants={fadeIn}>
                    <h2 className="text-2xl font-bold mb-4">Final Thoughts</h2>
                    <p className="text-gray-300">{article.content.conclusion}</p>
                  </motion.div>
                )}
              </motion.div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <GlassCard className="p-6 mb-8">
                  <h3 className="text-lg font-bold mb-4">Table of contents</h3>
                  <nav className="space-y-2">
                    {article.content.sections.map((section) => (
                      <a
                        key={section.title}
                        href={`#${section.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block text-gray-400 hover:text-white transition-colors"
                      >
                        {section.title}
                      </a>
                    ))}
                  </nav>
                </GlassCard>

                <GlassCard className="p-6">
                  <h3 className="text-lg font-bold mb-4">Start Project!</h3>
                  <p className="text-gray-400 mb-6">
                    Ready to start your project? Let&apos;s create something amazing together!
                  </p>
                  <button className="w-full bg-[#CCFF00] text-black px-4 py-2 rounded-full">
                    Book a call
                  </button>
                </GlassCard>
              </div>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-2xl font-bold mb-8">You may also like</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {article.relatedArticles.map((related) => (
                <motion.div
                  key={related.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Link href={`/blog/${related.id}`}>
                    <GlassCard className="aspect-square relative overflow-hidden">
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-[#CCFF00] text-black text-sm px-3 py-1 rounded-full">
                          {related.category}
                        </span>
                      </div>
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold">{related.title}</h3>
                      </div>
                    </GlassCard>
                  </Link>
                </motion.div>
              ))}
            </div>
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

