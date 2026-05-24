import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare } from 'lucide-react'

export default function WhatsAppButton(){
  return (
    <motion.a aria-label="WhatsApp" href="https://wa.me/9629495874" target="_blank" rel="noreferrer" whileHover={{scale:1.06}} animate={{y:[0,-8,0]}} transition={{repeat:Infinity,duration:3}} className="fixed right-4 bottom-24 z-50 bg-emerald-500 p-4 rounded-full shadow-lg">
      <MessageSquare size={18} className="text-black" />
    </motion.a>
  )
}
