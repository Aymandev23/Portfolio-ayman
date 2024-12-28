'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { GlassCard } from '@/components/ui/glass-card'

const faqs = [
  {
    question: "Can you help with maintaining an existing website?",
    answer: "Yes, we offer comprehensive website maintenance services. Our team can handle regular updates, security patches, content management, and performance optimization to keep your website running smoothly."
  },
  {
    question: "Can I maintain website after development?",
    answer: "We provide detailed documentation and training to help you manage your website independently. We also offer ongoing support packages if you need assistance in the future."
  },
  {
    question: "Do you provide hosting solutions?",
    answer: "Yes, we offer reliable hosting solutions optimized for performance and security. Our hosting packages include regular backups, SSL certificates, and 24/7 monitoring."
  },
  {
    question: "What's included in the support package?",
    answer: "Our support package includes technical maintenance, content updates, security monitoring, performance optimization, and priority customer support. We can customize the package based on your specific needs."
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <GlassCard
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="p-6 cursor-pointer group"
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        >
          <div className="flex items-center justify-between">
            <span className="font-medium">{faq.question}</span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-5 h-5 text-[#CCFF00]" />
            </motion.div>
          </div>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <p className="mt-4 text-gray-400">
                  {faq.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </GlassCard>
      ))}
    </div>
  )
}

