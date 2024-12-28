'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'


const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export function FeaturesGrid() {
  const services = [
    { name: 'UI/UX Design', color: 'bg-sky-400/20', position: 'top-0 left-[20%]' },
    { name: 'Branding', color: 'bg-blue-400/20', position: 'top-[20%] left-[10%]' },
    { name: 'Web Apps', color: 'bg-yellow-400/20', position: 'top-[10%] right-[20%]' },
    { name: 'Maintenance', color: 'bg-purple-400/20', position: 'top-[40%] right-[10%]' },
    { name: 'Webflow', color: 'bg-pink-400/20', position: 'bottom-[20%] left-[30%]' },
    { name: 'Framer', color: 'bg-gray-400/20', position: 'top-[30%] left-[40%]' },
    { name: 'Lumos', color: 'bg-orange-400/20', position: 'bottom-[10%] right-[30%]' },
    { name: 'Xeno', color: 'bg-red-400/20', position: 'bottom-[30%] left-[20%]' },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Responsive Device Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-black rounded-3xl p-8 col-span-1 lg:col-span-2 relative overflow-hidden"
      >
        <div className="max-w-md">
          <h3 className="text-4xl font-bold mb-4">
            Responsive for every{' '}
            <span className="text-[#CCFF00]">device</span> and{' '}
            <span className="text-[#CCFF00]">browser!</span>
          </h3>
          <p className="text-gray-400 text-lg">
            We make sure that your website is available for every device user!
          </p>
        </div>
        <div className="absolute -right-4 top-1/2 -translate-y-1/2 transform rotate-6">
          <div className="bg-zinc-900 rounded-3xl p-4 w-[280px] shadow-xl">
            <div className="mb-4">
              <h4 className="text-sm mb-2">Your friends list</h4>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-600 border-2 border-black" />
                ))}
                <div className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-black flex items-center justify-center text-sm">
                  +
                </div>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { name: 'Savannah Nguyen', time: 'Just now', amount: '$64.43' },
                { name: 'Marvin McKinney', time: '11 minutes ago', amount: '$25.00' },
                { name: 'Ralph Edwards', time: '1 hour ago', amount: '$54.50' }
              ].map((user, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between bg-zinc-800 rounded-xl p-2"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gray-600" />
                    <div>
                      <div className="text-sm font-medium">{user.name}</div>
                      <div className="text-xs text-gray-400">Credit request • {user.time}</div>
                    </div>
                  </div>
                  <div className="text-[#CCFF00] text-sm">{user.amount}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Testimonial Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-emerald-800 rounded-3xl p-8"
      >
        <div className="mb-4 text-2xl">givebacks</div>
        <div className="text-5xl font-serif mb-6">&apos;&apos;</div>
        <p className="text-lg">
          We needed an agency to help us manage our four Webflow subdomains and began working with Eclipso. They are a fantastic partner and we&apos;re so glad we found them. Their work is on time, high-quality, and they&apos;re very easy to work with.
        </p>
      </motion.div>

      {/* 8+ Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#CCFF00] text-black rounded-3xl p-8 relative"
      >
        <motion.div
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
          className="text-7xl font-bold mb-4"
        >
          8+
        </motion.div>
        <p className="text-xl mb-6">Successfully launched websites</p>
        <button className="bg-white rounded-full px-6 py-2 flex items-center gap-2 group hover:bg-white/90 transition-colors">
          Contact us
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>

      {/* Services Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-emerald-800 rounded-3xl p-8 relative overflow-hidden"
      >
        <h3 className="text-4xl font-bold mb-12">Services</h3>
        <div className="relative h-[300px]">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              variants={floatingAnimation}
              initial="initial"
              animate="animate"
              style={{ animationDelay: `${index * 0.2}s` }}
              className={`absolute ${service.position} ${service.color} px-4 py-2 rounded-full whitespace-nowrap backdrop-blur-sm`}
            >
              {service.name}
            </motion.div>
          ))}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-black font-bold">E</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

