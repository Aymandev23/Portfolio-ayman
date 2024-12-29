'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Nav } from '@/components/nav'
import { GlassCard } from '@/components/ui/glass-card'
import { fadeIn, staggerContainer } from '@/utils/animation-variants'
import { Contact } from '@/components/contact-section'
import { Footer } from '@/components/footer'

const projects = {
  givebacks: {
    title: 'Givebacks',
    hero: '/placeholder.svg?height=600&width=1200',
    industry: 'Nonprofit',
    services: ['Webflow Dev', 'Custom Code', 'Maintenance'],
    year: '2024',
    liveUrl: 'https://example.com',
    challenge: 'Givebacks needed a redesigned to empower nonprofit leaders, aimed to create a website that could clearly communicate their mission and services. With a growing user base and expanding services, B2B brands nonprofits and brands. The main challenge was to develop a site that was both informative and engaging, while facilitating easy navigation for diverse user groups.',
    process: 'We began with a thorough analysis of Givebacks target audience and their needs. The design process focused on creating a vibrant and user-friendly interface using Webflow. Interactive elements to guide users through the site key sections were designed to highlight how the platform works and its benefits. We incorporated compelling content and visuals to showcase the platform\'s impacts, including statistics and success stories, to build trust and credibility.',
    outcome: 'The resulting website is a dynamic and engaging platform that effectively communicates Givebacks mission and services. The intuitive design and clear information architecture make it easy for users to find the information they need and engage with the platform. The site has successfully increased user engagement and sign-ups, helping Givebacks expand their reach and impact.',
    gallery: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600'
    ],
    nextProject: {
      id: 'candy-shop',
      title: 'Candy Shop',
      image: '/placeholder.svg?height=400&width=800'
    }
  },
  'candy-shop': {
    title: 'Candy Shop',
    hero: '/placeholder.svg?height=600&width=1200',
    industry: 'E-commerce',
    services: ['App Design', 'UI/UX Design'],
    year: '2023',
    liveUrl: 'https://example.com/candy-shop',
    challenge: 'Candy Shop required a complete mobile app redesign to enhance the user experience and boost sales. The main challenge was creating an intuitive interface that would make browsing and purchasing candy products a delightful experience while maintaining efficient inventory management and order processing.',
    process: 'Our design process began with extensive user research and competitor analysis. We created detailed wireframes and prototypes, focusing on the user journey from product discovery to checkout. The design incorporated playful elements while maintaining professional functionality, including advanced filtering options and a streamlined checkout process.',
    outcome: 'The redesigned app resulted in a 40% increase in user engagement and a 25% boost in sales conversion. The new interface received positive feedback for its intuitive navigation and visually appealing design, successfully balancing fun and functionality.',
    gallery: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600'
    ],
    nextProject: {
      id: 'smart-zebra',
      title: 'Smart Zebra',
      image: '/placeholder.svg?height=400&width=800'
    }
  },
  'smart-zebra': {
    title: 'Smart Zebra',
    hero: '/placeholder.svg?height=600&width=1200',
    industry: 'Education',
    services: ['Webflow Dev', 'Maintenance'],
    year: '2023',
    liveUrl: 'https://example.com/smart-zebra',
    challenge: 'Smart Zebra needed a modern educational platform that could effectively deliver interactive learning content to students while providing robust tools for educators. The platform needed to handle multiple content types and maintain high performance under heavy user load.',
    process: 'We implemented a phased development approach, starting with core functionality and gradually adding features based on user feedback. The Webflow development focused on creating a responsive design that worked seamlessly across devices, with special attention to content loading optimization and user interaction patterns.',
    outcome: 'The new platform successfully handles thousands of daily users, with improved loading times and a significant reduction in support tickets. Teacher satisfaction increased by 60%, and student engagement metrics showed a marked improvement across all grade levels.',
    gallery: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600'
    ],
    nextProject: {
      id: 'wallet-app',
      title: 'Wallet App',
      image: '/placeholder.svg?height=400&width=800'
    }
  },
  'wallet-app': {
    title: 'Wallet App',
    hero: '/placeholder.svg?height=600&width=1200',
    industry: 'Finance',
    services: ['App Design', 'UI/UX Design'],
    year: '2024',
    liveUrl: 'https://example.com/wallet-app',
    challenge: 'Wallet App needed a comprehensive redesign to compete in the crowded digital finance space. The app required enhanced security features while maintaining user-friendly interfaces for complex financial transactions and portfolio management.',
    process: 'Our team conducted extensive security and usability research, creating detailed user personas and journey maps. We developed high-fidelity prototypes with a focus on simplified navigation and clear data visualization, incorporating biometric authentication and real-time transaction monitoring.',
    outcome: 'The redesigned app saw a 75% increase in daily active users and a 50% reduction in transaction errors. User satisfaction scores improved significantly, and the app received industry recognition for its innovative approach to financial management interfaces.',
    gallery: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600'
    ],
    nextProject: {
      id: 'exit-game',
      title: 'Exit Game',
      image: '/placeholder.svg?height=400&width=800'
    }
  },
  'exit-game': {
    title: 'Exit Game',
    hero: '/placeholder.svg?height=600&width=1200',
    industry: 'Gaming',
    services: ['Webflow Dev', 'Maintenance'],
    year: '2023',
    liveUrl: 'https://example.com/exit-game',
    challenge: 'Exit Game required a website that could effectively showcase their escape room experiences while handling complex booking and team management features. The site needed to maintain the mysterious and exciting atmosphere of their games while providing clear, practical information.',
    process: 'We developed a custom Webflow solution with advanced booking integration. The design process focused on creating an immersive experience that built anticipation while maintaining practical functionality. Special attention was paid to mobile responsiveness and booking flow optimization.',
    outcome: 'The new website resulted in a 45% increase in online bookings and a 30% reduction in booking-related customer service inquiries. The immersive design received positive feedback from both new and returning customers, contributing to increased social media sharing and organic growth.',
    gallery: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600'
    ],
    nextProject: {
      id: 'skinrates',
      title: 'SkinRates',
      image: '/placeholder.svg?height=400&width=800'
    }
  },
  'skinrates': {
    title: 'SkinRates',
    hero: '/placeholder.svg?height=600&width=1200',
    industry: 'Gaming',
    services: ['UI/UX Design', 'Web Design'],
    year: '2023',
    liveUrl: 'https://example.com/skinrates',
    challenge: 'SkinRates needed a sophisticated platform for gaming item trading and valuation. The main challenge was creating an interface that could handle complex real-time data while maintaining a clean, user-friendly design that appealed to both casual and professional traders.',
    process: 'We began with extensive market research and user interviews to understand trading patterns and user needs. The design process incorporated real-time price tracking, advanced filtering systems, and interactive charts while maintaining a clean, modern aesthetic that reduced cognitive load.',
    outcome: 'The platform launch resulted in a 200% increase in daily active users and a 150% increase in trading volume. User retention rates improved significantly, and the platform became a go-to resource for the gaming community, establishing SkinRates as a market leader.',
    gallery: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600'
    ],
    nextProject: {
      id: 'givebacks',
      title: 'Givebacks',
      image: '/placeholder.svg?height=400&width=800'
    }
  }
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projects[params.id as keyof typeof projects]

  if (!project) return null

  return (
    <><div className="min-h-screen bg-black">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#CCFF00]/20 via-transparent to-emerald-900/20 pointer-events-none" />
      <Nav />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="relative h-[70vh] rounded-3xl overflow-hidden mb-16">
            <Image
              src={project.hero}
              alt={project.title}
              fill
              className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div>
              <h3 className="text-sm text-gray-400 mb-2">Industry</h3>
              <span className="bg-[#CCFF00] text-black text-sm px-3 py-1 rounded-full">
                {project.industry}
              </span>
            </div>
            <div>
              <h3 className="text-sm text-gray-400 mb-2">Services</h3>
              <div className="flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <span
                    key={service}
                    className="bg-white/10 text-white text-sm px-3 py-1 rounded-full"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm text-gray-400 mb-2">Year</h3>
              <span className="text-white">{project.year}</span>
            </div>
            <div>
              <h3 className="text-sm text-gray-400 mb-2">Live Link</h3>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#CCFF00] text-black px-4 py-2 rounded-full text-sm hover:bg-[#CCFF00]/90 transition-colors"
              >
                Live Website
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl space-y-16 mb-24"
          >
            <motion.div variants={fadeIn}>
              <h2 className="text-2xl font-bold mb-6">Challenge</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {project.challenge}
              </p>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h2 className="text-2xl font-bold mb-6">Process</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {project.process}
              </p>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h2 className="text-2xl font-bold mb-6">Outcome</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {project.outcome}
              </p>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-24">
            {project.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
                  <Image
                    src={image}
                    alt={`${project.title} gallery ${index + 1}`}
                    fill
                    className="object-cover" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Next Case</h2>
            <Link href={`/work/${project.nextProject.id}`}>
              <GlassCard className="relative h-[50vh] overflow-hidden group">
                <Image
                  src={project.nextProject.image}
                  alt={project.nextProject.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-3xl font-bold">{project.nextProject.title}</h3>
                </div>
                <div className="absolute bottom-8 right-8">
                  <div className="bg-white/10 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </GlassCard>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <Contact />
      </main>
    </div><Footer /></>
  )
}

