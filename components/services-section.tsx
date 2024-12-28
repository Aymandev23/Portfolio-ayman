'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Monitor, Share2, Search } from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: "Création de sites web",
    description: "Conception de divers types de sites tels que des sites WordPress, des vitrines en ligne, les plateformes e-commerce, des landing pages, et bien plus encore.",
  },
  {
    icon: Share2,
    title: "Optimisation de la performance",
    description: "Optimisez les performances de votre site web pour une expérience utilisateur améliorée grâce à une gestion efficace des ressources et une navigation fluide.",
  },
  {
    icon: Search,
    title: "Référencement SEO",
    description: "Améliorer la visibilité de votre site web sur les moteurs de recherche grâce à des techniques d'optimisation du référencement naturel.",
  },
]

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState('dev')

  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 bg-[#CCFF00]/10 text-[#CCFF00] rounded-full text-sm mb-6">
            ÉLABOREZ VOTRE VISION EN LIGNE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Découvrez les Services
          </h2>
          <p className="text-gray-400 text-lg">
            Offrez-vous une présence en ligne exceptionnelle avec des services en développement web et marketing digital : Création de sites web sur mesure, optimisation de la performance et design élégant, tout pour donner vie à votre vision digitale.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-16">
          <button
            onClick={() => setActiveTab('dev')}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
              activeTab === 'dev' 
                ? 'bg-[#CCFF00] text-white' 
                : 'bg-white/5 hover:bg-white/10'
            }`}
          >
            Développement web
          </button>
          <button
            onClick={() => setActiveTab('design')}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
              activeTab === 'design' 
                ? 'bg-[#CCFF00] text-white' 
                : 'bg-white/5 hover:bg-white/10'
            }`}
          >
            Web Design
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 rounded-3xl p-8 hover:bg-white/10 transition-colors group"
            >
              <div className="bg-[#CCFF00]/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-[#CCFF00]" />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <a 
                href="#" 
                className="text-[#CCFF00] inline-flex items-center group-hover:gap-2 transition-all"
              >
                Découvrir 
                <svg 
                  className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

