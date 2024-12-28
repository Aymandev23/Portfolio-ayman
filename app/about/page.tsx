'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { GlassCard } from '@/components/ui/glass-card'
import { fadeIn, staggerContainer } from '@/utils/animation-variants'
import { Nav } from '@/components/nav'
import { FAQSection } from '@/components/faq-section'
import { ArrowRight, Figma, Framer, Globe, Instagram, Twitter, Linkedin } from 'lucide-react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const tools = [
  { name: 'Webflow', icon: <Globe className="w-8 h-8" /> },
  { name: 'Framer', icon: <Framer className="w-8 h-8" /> },
  { name: 'Figma', icon: <Figma className="w-8 h-8" /> },
  { name: 'Next.js', icon: <Globe className="w-8 h-8" /> },
]

function Box() {
  return (
    <mesh rotation={[0, Math.PI / 4, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#CCFF00" wireframe />
    </mesh>
  )
}

const coreValues = [
  {
    title: "Innovation",
    description: "We constantly push the boundaries of digital design and development to create cutting-edge solutions.",
    icon: "🚀"
  },
  {
    title: "Collaboration",
    description: "We believe in the power of teamwork and partner closely with our clients to achieve exceptional results.",
    icon: "🤝"
  },
  {
    title: "Excellence",
    description: "We strive for perfection in every project, paying meticulous attention to detail and quality.",
    icon: "🏆"
  },
  {
    title: "Adaptability",
    description: "We embrace change and continuously evolve our skills to stay ahead in the fast-paced digital landscape.",
    icon: "🔄"
  }
]

export default function About() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])

  return (
    <div className="min-h-screen bg-black">
      <Nav />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard className="p-8 h-full">
                <div className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm mb-4">
                  🎯 We are Eclipso Studio!
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  No Code & Design Agency
                </h1>
                <p className="text-gray-400">
                  Websites developed and designed with love that take you out of the atmosphere!
                </p>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <GlassCard className="aspect-square bg-zinc-900/50 overflow-hidden">
                <Canvas>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} />
                  <OrbitControls enableZoom={false} autoRotate />
                  <Box />
                </Canvas>
              </GlassCard>
            </motion.div>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-8 bg-[#CCFF00] h-full">
                <h3 className="text-black text-2xl font-bold mb-6">
                  Currently, we are working on RentOn.
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {[...Array(9)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="aspect-square bg-black/10 rounded-full"
                      animate={{
                        scale: [1, 1.1, 1],
                        transition: {
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        },
                      }}
                    />
                  ))}
                </div>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <GlassCard className="p-8 h-full">
                <h3 className="text-xl font-bold mb-4">How it started?</h3>
                <p className="text-gray-400">
                  Our journey began with a simple idea: to create websites that not only look amazing but also deliver results. We&apos;ve grown into a full-service digital agency.
                </p>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <GlassCard className="p-8 h-full">
                <h3 className="text-xl font-bold mb-4">Meet our Team!</h3>
                <p className="text-gray-400">
                  A group of passionate individuals dedicated to creating exceptional digital experiences. We&apos;re always looking for talented people to join us.
                </p>
              </GlassCard>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-16"
          >
            <GlassCard className="p-8">
              <h3 className="text-xl font-bold mb-8">Tools we use</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {tools.map((tool) => (
                  <motion.div
                    key={tool.name}
                    variants={fadeIn}
                    whileHover={{ scale: 1.05 }}
                    className="aspect-square bg-zinc-900 rounded-xl p-4 flex items-center justify-center group cursor-pointer"
                  >
                    <div className="text-gray-400 group-hover:text-[#CCFF00] transition-colors">
                      {tool.icon}
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Core Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard className="p-6 h-full flex flex-col items-center text-center">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-gray-400">{value.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Updated Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <GlassCard className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8">Meet Our Founder</h2>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/3">
                  <div className="relative aspect-square rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="Milos Bundalo"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-bold mb-2">Milos Bundalo</h3>
                  <p className="text-xl text-[#CCFF00] mb-4">Founder & CEO</p>
                  <p className="text-gray-300 mb-6">
                    With over a decade of experience in digital design and development, Milos founded Eclipso Studio with a vision to create impactful digital experiences. His expertise in UI/UX design and web development has been instrumental in shaping the company&apos;s innovative approach.
                  </p>
                  <div className="flex gap-4">
                    <a href="#" className="text-white hover:text-[#CCFF00] transition-colors">
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-white hover:text-[#CCFF00] transition-colors">
                      <Twitter className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-white hover:text-[#CCFF00] transition-colors">
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Our Journey Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Our Journey</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#CCFF00]" />
              {[
                { year: '2018', title: 'Founded', description: 'Eclipso Studio was born with a vision to revolutionize digital design.' },
                { year: '2020', title: 'Expansion', description: 'We expanded our team and services, venturing into web development.' },
                { year: '2022', title: 'Global Reach', description: 'Our client base expanded globally, working with brands across continents.' },
                { year: '2024', title: 'Innovation Hub', description: 'Launched our innovation lab, pushing the boundaries of digital experiences.' },
              ].map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                    <GlassCard className="p-6 inline-block">
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-gray-400">{milestone.description}</p>
                    </GlassCard>
                  </div>
                  <div className="w-1/2 flex justify-center">
                    <div className="bg-[#CCFF00] text-black rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl">
                      {milestone.year}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            style={{ y }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently asked Questions
            </h2>
            <FAQSection />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-[#CCFF00] rounded-3xl p-8 md:p-16 text-center text-black relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Let&apos;s Collab</h2>
              <button className="bg-black text-white px-8 py-3 rounded-full inline-flex items-center gap-2 group/btn">
                Book a call
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

