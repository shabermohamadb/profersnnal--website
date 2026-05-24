import React from 'react'
import { MessageSquare, Phone, Home, Grid } from 'lucide-react'

export default function StickyBottomNav(){
  return (
    <div className="mobile-bottom-nav md:hidden">
      <a href="#services" className="mobile-nav-button text-emerald-400">
        <Grid className="icon" />
      </a>
      <a href="https://wa.me/9629495874" className="mobile-nav-button bg-emerald-600 text-black">
        <MessageSquare className="icon" />
      </a>
      <a href="#contact" className="mobile-nav-button bg-black/40 text-white">
        <Phone className="icon" />
      </a>
    </div>
  )
}
