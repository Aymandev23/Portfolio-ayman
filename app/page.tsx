'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { HeroSection } from '@/components/hero-section'
import Image from 'next/image'
import { GlassCard } from '@/components/ui/glass-card'
import { SectionHeading } from '@/components/ui/section-heading'
import { fadeIn, staggerContainer, floatingAnimation, scaleOnHover } from '@/utils/animation-variants'
import { ArrowRight, CheckCircle2, Calendar } from 'lucide-react'
import { FeaturesGrid } from '@/components/features-grid'
import { FeaturedWork } from '@/components/featured-work'
import { TestimonialsSlider } from '@/components/testimonials-slider'
import { FAQSection } from '@/components/faq-section'
import Link from 'next/link';
import { Instagram, DribbbleIcon as Behance, Linkedin, Dribbble } from 'lucide-react';
import { ScrollingText } from '@/components/scrolling-text'
import { LogoScroll } from '@/components/logo-scroll'

export default function Home() {
  const containerRef = useRef(null)
  


  const latestBlogPosts = [
    {
      title: "10 UI/UX Trends to Watch in 2024",
      excerpt: "Explore the cutting-edge design trends that are shaping the digital landscape in 2024.",
      date: "March 15, 2024",
      image: "/placeholder.svg?height=200&width=300",
      slug: "ui-ux-trends-2024"
    },
    {
      title: "The Future of Web Development: AI and No-Code Solutions",
      excerpt: "Discover how artificial intelligence and no-code platforms are revolutionizing web development.",
      date: "March 10, 2024",
      image: "/placeholder.svg?height=200&width=300",
      slug: "future-web-development-ai-no-code"
    },
    {
      title: "Maximizing Conversion Rates Through Strategic UX Design",
      excerpt: "Learn how to leverage user experience design to boost your website's conversion rates.",
      date: "March 5, 2024",
      image: "/placeholder.svg?height=200&width=300",
      slug: "maximizing-conversion-rates-ux-design"
    }
  ]

  return (
    <div ref={containerRef} className="relative min-h-screen bg-black">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#CCFF00]/20 via-transparent to-emerald-900/20 pointer-events-none" />
      
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <GlassCard className="m-4 p-4">
          <nav className="container mx-auto flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold"
            >
              eclipso™
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="hidden md:flex items-center gap-8"
            >
              {["Services", "Work", "About", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  variants={fadeIn}
                  whileHover={{ scale: 1.05 }}
                  className="text-sm hover:text-[#CCFF00] transition-colors"
                >
                  {item}
                </motion.a>
              ))}
              <motion.button
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                className="bg-[#CCFF00] text-black px-6 py-2 rounded-full text-sm font-medium"
              >
                Get Started
              </motion.button>
            </motion.div>
          </nav>
        </GlassCard>
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* Features Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FeaturesGrid />
        </div>
      </section>

      {/* Logo Scroll Section */}
      <LogoScroll />

      {/* Featured Work */}
      <section id="work" className="py-20">
        <div className="container mx-auto px-4">
          <FeaturedWork />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Unlock Your Growth Through Our Plans"
            subtitle="Choose the perfect plan for your business needs"
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {[
              {
                name: 'Starter Growth',
                price: '$3,499',
                period: '/month',
                features: [
                  'Unlimited Design Development',
                  'Responsive Design',
                  'SEO Optimization',
                  'Analytics Setup',
                  'Content Strategy',
                ],
              },
              {
                name: 'Premium Growth',
                price: '$2,000',
                period: '/month',
                features: [
                  'Everything in Starter',
                  'Priority Support',
                  'Custom Integrations',
                  'A/B Testing',
                  'Advanced Analytics',
                ],
              },
            ].map((plan) => (
              <GlassCard
                key={plan.name}
                variants={fadeIn}
                whileHover={scaleOnHover.hover}
                className="p-8 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#CCFF00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                  <div className="text-3xl font-bold mb-6">
                    {plan.price}
                    <span className="text-gray-400 text-base font-normal">{plan.period}</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#CCFF00]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    className="w-full bg-[#CCFF00] text-black py-3 rounded-full font-medium"
                  >
                    Choose plan
                  </motion.button>
                </div>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Clients Can't Say Anything Bad About Us"
            subtitle="Don't just take our word for it"
          />
          <TestimonialsSlider />
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Latest from Our Blog"
            subtitle="Stay updated with our latest insights and tips"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {latestBlogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <GlassCard className="h-full flex flex-col overflow-hidden group">
                    <div className="relative h-48 mb-4">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-[#CCFF00] transition-colors">{post.title}</h3>
                      <p className="text-gray-400 mb-4 flex-grow">{post.excerpt}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        {post.date}
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[#CCFF00] hover:underline">
              View All Posts
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Frequently asked Questions" />
          <FAQSection />
        </div>
      </section>

      {/* Contact Section */}
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
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Let&apos;s Collab</h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-black text-white px-8 py-3 rounded-full font-medium inline-flex items-center gap-2 group"
              >
                Contact us
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine" />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
            {/* Logo and Subscribe Section */}
            <div className="md:col-span-3">
              <Link href="/" className="inline-block mb-8">
                <Image
                  src="/placeholder.svg?height=40&width=120"
                  alt="Eclipso"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <div className="mb-8">
                <h3 className="text-lg mb-4">Subscribe & enjoy weekly free resources!</h3>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-2 pr-12 focus:outline-none focus:border-[#CCFF00]"
                  />
                  <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#CCFF00] rounded-full p-2 hover:bg-[#CCFF00]/90 transition-colors">
                    <ArrowRight className="w-4 h-4 text-black" />
                  </button>
                </div>
              </div>
              <div className="flex gap-4">
                <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-white/10 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-white/10 transition-colors">
                  <Behance className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-white/10 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-white/10 transition-colors">
                  <Dribbble className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Company Links */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-medium mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Work</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact us</a></li>
              </ul>
            </div>

            {/* Work Links */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-medium mb-4">Work</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">SkinRats</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Candy Shop</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Wallet App</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Smart-Zebra</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Exit-Game</a></li>
              </ul>
            </div>

            {/* Services Links */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-medium mb-4">Services</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">UI/UX Design</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Webflow Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Branding</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Maintenance</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Migrations</a></li>
              </ul>
            </div>

            {/* Contact and Location */}
            <div className="md:col-span-3">
              <h3 className="text-lg font-medium mb-4">Contact us</h3>
              <a href="mailto:office@eclipso.studio" className="text-gray-400 hover:text-white transition-colors">
                office@eclipso.studio
              </a>
              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Based in</h3>
                <p className="text-gray-400">
                  Banja Luka, Bosnia & Herzegovina
                </p>
              </div>
            </div>
          </div>

          {/* Scrolling Text */}
          <ScrollingText />

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
            <p className="text-gray-400 mb-4 md:mb-0">Copyright © 2024 Eclipso Studio™</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Eclipso Studio",
  "url": "https://www.eclipsostudio.com",
  "logo": "https://www.eclipsostudio.com/logo.png",
  "sameAs": [
    "https://www.facebook.com/eclipsostudio",
    "https://www.twitter.com/eclipsostudio",
    "https://www.linkedin.com/company/eclipsostudio",
    "https://www.instagram.com/eclipsostudio"
  ]
})}} />
    </div>
  )
}

