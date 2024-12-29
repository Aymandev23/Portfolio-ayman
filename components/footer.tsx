'use client'


import Link from 'next/link'
import Image from 'next/image'
import { ScrollingText } from '@/components/scrolling-text'
import { ArrowRight,Instagram, DribbbleIcon as Behance, Linkedin, Dribbble } from 'lucide-react';

export function Footer() {
 

  return (
       
         <footer className="bg-black border-t border-white/10">
         <div className="container mx-auto px-4 py-16">
           <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
    
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
  )
}

