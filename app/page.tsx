'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { HeroSection } from '@/components/hero-section'
import Image from 'next/image'
import { GlassCard } from '@/components/ui/glass-card'
import { SectionHeading } from '@/components/ui/section-heading'
import { fadeIn, staggerContainer, scaleOnHover } from '@/utils/animation-variants'
import { ArrowRight, CheckCircle2, Calendar } from 'lucide-react'
import { FeaturesGrid } from '@/components/features-grid'
import { FeaturedWork } from '@/components/featured-work'
import { TestimonialsSlider } from '@/components/testimonials-slider'
import { FAQSection } from '@/components/faq-section'
import Link from 'next/link';
import { LogoScroll } from '@/components/logo-scroll'
import {Contact} from '@/components/contact-section'
import {Nav} from '@/components/nav'
import { Footer } from '@/components/footer'

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
       <Nav />


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
 {/* CTA Section */}
 <Contact />
 <Footer />
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

