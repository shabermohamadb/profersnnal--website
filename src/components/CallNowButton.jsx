import React from 'react'
import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'

export default function CallNowButton(){
  return (
    <motion.a aria-label="Call now" href="tel:9629495874" whileHover={{scale:1.06}} animate={{y:[0,-6,0]}} transition={{repeat:Infinity,duration:3}} className="fixed right-4 bottom-4 z-50 bg-gray-900/80 border border-emerald-600 p-3 rounded-full shadow-lg text-emerald-400">
      <Phone size={16} />
    </motion.a>
  )
}
