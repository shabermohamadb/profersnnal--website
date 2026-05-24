import React, { useState } from 'react'
import { Phone, MessageSquare } from 'lucide-react'
import BrandPTS from './BrandPTS'
import { X, Menu } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Header(){
  const [open, setOpen] = useState(false)
  return (
    <header className="w-full py-4 px-4 md:px-12 flex items-center justify-between z-40 fixed top-0 left-0 bg-transparent">
      <div className="flex items-center gap-4">
        <BrandPTS size={'text-3xl md:text-4xl'} />
        <div className="flex flex-col text-sm text-gray-300 leading-tight">
          <span className="brand-company colorful-text">Al Ameen Rolling Shutter Manufacturing</span>
          <span className="text-xs text-gray-400">Danishpet Main Road, Santhaipet, Kadayapatti(TK), Salem Dt.</span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-3">
        <a href="https://wa.me/9629495874" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-emerald-600 text-black px-3 py-2 rounded-md shadow-md">
          <MessageSquare size={16} /> <span className="text-sm">WhatsApp</span>
        </a>
        <a href="tel:9629495874" className="flex items-center gap-2 border border-emerald-600 text-emerald-400 px-3 py-2 rounded-md">
          <Phone size={16} /> <span className="text-sm">Call</span>
        </a>
      </div>

      {/* Mobile hamburger */}
      <div className="md:hidden">
        <button aria-label="menu" onClick={()=>setOpen(true)} className="p-2 rounded-md bg-black/30">
          <Menu size={20} />
        </button>
      </div>

      {open && (
        <div className="mobile-menu-overlay">
          <motion.div initial={{scale:0.95,opacity:0}} animate={{scale:1,opacity:1}} exit={{opacity:0}} className="mobile-menu-content glass metallic-border text-center">
            <div className="flex justify-end">
              <button onClick={()=>setOpen(false)} className="p-2 rounded-md"><X size={20} /></button>
            </div>
            <nav className="mt-4 space-y-4">
              <a href="#services" onClick={()=>setOpen(false)} className="block text-xl font-semibold">Our Services</a>
              <a href="#gallery" onClick={()=>setOpen(false)} className="block text-xl font-semibold">Product Showcase</a>
              <a href="#reviews" onClick={()=>setOpen(false)} className="block text-xl font-semibold">Reviews</a>
              <a href="#contact" onClick={()=>setOpen(false)} className="block text-xl font-semibold">Contact</a>
            </nav>
            <div className="mt-6 flex items-center justify-center gap-3">
              <a href="https://wa.me/9629495874" className="mobile-nav-button bg-emerald-600 text-black">WhatsApp</a>
              <a href="tel:9629495874" className="mobile-nav-button border border-emerald-600 text-emerald-400">Call</a>
            </div>
          </motion.div>
        </div>
      )}
    </header>
  )
}
