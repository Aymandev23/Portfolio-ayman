'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { GlassCard } from '@/components/ui/glass-card'
import { fadeIn, staggerContainer } from '@/utils/animation-variants'
import { Nav } from '@/components/nav'
import { FAQSection } from '@/components/faq-section'
import { SectionHeading } from '@/components/ui/section-heading'
import { Figma, Framer, Globe, Instagram, Twitter, Linkedin } from 'lucide-react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Footer } from '@/components/footer'
import { Contact } from '@/components/contact-section'

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



  return (
    <><div className="min-h-screen bg-black">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#CCFF00]/20 via-transparent to-emerald-900/20 pointer-events-none" />
      <Nav />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeIn}
              className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm mb-6 backdrop-blur-md"
            >
              About Us
            </motion.div>
            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              We Build Digital{' '}
              <span className="text-[#CCFF00]">Products</span>{' '}
              That Drive Growth
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-gray-400 mb-8 text-lg md:text-xl"
            >
              From concept to launch, we create digital experiences that users love and businesses rely on.
            </motion.p>
            <motion.div
              variants={fadeIn}
              className="flex justify-center gap-4"
            >
              <button className="bg-[#CCFF00] text-black px-8 py-3 rounded-full font-medium hover:bg-[#CCFF00]/90 transition-colors">
                Get Started
              </button>
              <button className="bg-white/10 text-white px-8 py-3 rounded-full font-medium hover:bg-white/20 transition-colors">
                View Our Work
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
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
                      }} />
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
                      className="object-cover" />
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

         
           {/* FAQ Section */}
               <section className="py-20">
                 <div className="container mx-auto px-4">
                   <SectionHeading title="Frequently asked Questions" />
                   <FAQSection />
                 </div>
               </section>
 {/* CTA Section */}
 <Contact />
         
        </div>
      </main>

    </div>
    <Footer /></>
  )
}

