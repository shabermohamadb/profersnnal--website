import React from 'react'
import { motion } from 'framer-motion'

export default function Footer(){
  return (
    <motion.footer initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="mt-16 bg-black/80 py-8 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-start gap-6">
        <div>
          <div className="text-xl font-bold">Al Ameen Rolling Shutter Manufacturing</div>
          <div className="text-sm mt-2">Danishpet Main Road, Santhaipet, Kadayapatti(TK), Salem Dt.</div>
          <div className="text-sm mt-1">Phone: 96294 95874, 63835 14898</div>
          <div className="text-sm">Email: info@alameen.com</div>
        </div>
        <div className="text-sm text-gray-400">© {new Date().getFullYear()} Al Ameen Rolling Shutter Manufacturing. All rights reserved.</div>
      </div>
    </motion.footer>
  )
}
