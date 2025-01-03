'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Lightbulb, CheckCircle2} from 'lucide-react'
import Image from 'next/image'
import { Nav } from '@/components/nav'
import { GlassCard } from '@/components/ui/glass-card'
import { fadeIn, staggerContainer} from '@/utils/animation-variants'
import { TestimonialsSlider } from '@/components/testimonials-slider'
import { FAQSection } from '@/components/faq-section'
import { SectionHeading } from '@/components/ui/section-heading'
import { Footer } from '@/components/footer'
import{Contact} from '@/components/contact-section'

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Web Development",
    description: "Custom web applications built with modern technologies and best practices.",
    features: [
      "Next.js Development",
      "React Applications",
      "E-commerce Solutions",
      "API Integration",
      "Performance Optimization"
    ]
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "User-centered design solutions that create engaging digital experiences.",
    features: [
      "User Interface Design",
      "User Experience Design",
      "Design Systems",
      "Prototyping",
      "Usability Testing"
    ]
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Digital Strategy",
    description: "Strategic planning and consultation for digital transformation.",
    features: [
      "Market Research",
      "Competitive Analysis",
      "Digital Roadmap",
      "Technology Stack",
      "Growth Strategy"
    ]
  }
]

const process = [
  {
    number: "01",
    title: "Discovery",
    description: "We start by understanding your business, goals, and target audience through in-depth research and analysis."
  },
  {
    number: "02",
    title: "Strategy",
    description: "Based on our findings, we develop a comprehensive strategy tailored to your specific needs and objectives."
  },
  {
    number: "03",
    title: "Design",
    description: "Our design team creates visually stunning and user-friendly interfaces that align with your brand identity."
  },
  {
    number: "04",
    title: "Development",
    description: "We bring designs to life using cutting-edge technologies and development best practices."
  },
  {
    number: "05",
    title: "Testing",
    description: "Rigorous testing ensures your product works flawlessly across all devices and platforms."
  },
  {
    number: "06",
    title: "Launch",
    description: "We handle the deployment process and provide ongoing support to ensure continued success."
  }
]

const technologies = [
  { name: "React", image: "/placeholder.svg?height=80&width=80" },
  { name: "Next.js", image: "/placeholder.svg?height=80&width=80" },
  { name: "TypeScript", image: "/placeholder.svg?height=80&width=80" },
  { name: "Node.js", image: "/placeholder.svg?height=80&width=80" },
  { name: "Tailwind CSS", image: "/placeholder.svg?height=80&width=80" },
  { name: "Figma", image: "/placeholder.svg?height=80&width=80" },
]

const pricingPlans = [
  {
    name: "Basic",
    price: "$999",
    description: "Perfect for small businesses and startups",
    features: [
      "Custom Website Design",
      "Responsive Development",
      "Content Management System",
      "Basic SEO Optimization",
      "1 Month of Support"
    ]
  },
  {
    name: "Pro",
    price: "$2,499",
    description: "Ideal for growing businesses",
    features: [
      "Everything in Basic",
      "E-commerce Functionality",
      "Advanced SEO Package",
      "Performance Optimization",
      "3 Months of Support"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations",
    features: [
      "Everything in Pro",
      "Custom Integrations",
      "Dedicated Project Manager",
      "Priority Support",
      "Ongoing Maintenance"
    ]
  }
]

export default function Services() {
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
              Our Services
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

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <GlassCard className="p-8 h-full">
                  
                  <div className="bg-[#CCFF00]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <div className="text-[#CCFF00]">{service.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-8">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#CCFF00]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-400">
              We follow a systematic approach to deliver exceptional results for every project.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className=" absolute inset-0 bg-gradient-to-br from-[#CCFF00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl "></div>
                <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8">
                  <div className="text-4xl font-bold text-[#CCFF00] mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-gray-400">
              We work with the latest technologies to deliver modern and scalable solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <Image
                    src={tech.image}
                    alt={tech.name}
                    width={80}
                    height={80}
                    className="w-12 h-12 md:w-16 md:h-16" />
                </div>
                <span className="text-sm text-gray-400">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Pricing Plans Section */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing Plans</h2>
            <p className="text-gray-400">
              Choose the perfect plan for your business needs and budget.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-8 h-full flex flex-col">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-[#CCFF00] mb-4">{plan.price}</div>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#CCFF00]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="bg-[#CCFF00] text-black px-6 py-3 rounded-full font-medium hover:bg-[#CCFF00]/90 transition-colors">
                    Choose Plan
                  </button>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     

 

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-400">
              Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
            </p>
          </div>
          <TestimonialsSlider />
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
    </div><Footer /></>
    
  )
}

