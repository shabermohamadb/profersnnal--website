import React from 'react'
import { motion } from 'framer-motion'

const letters = ['P','T','S']

export default function BrandPTS({size='text-4xl md:text-5xl'}){
  return (
    <div className={`relative inline-block ${size} pts-logo`} aria-hidden>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden:{},
          visible:{ transition:{ staggerChildren:0.08 }}
        }}
        className="flex items-center gap-0"
      >
        {letters.map((l,i)=>(
          <motion.span key={i} className="pts-letter font-extrabold tracking-tight" variants={{hidden:{opacity:0,y:8, scale:0.9}, visible:{opacity:1,y:0, scale:1, transition:{duration:0.45, ease:[0.2,0.9,0.2,1]}}}}>
            {l}
          </motion.span>
        ))}
      </motion.div>

      <div className="pts-shine" aria-hidden />
    </div>
  )
}
