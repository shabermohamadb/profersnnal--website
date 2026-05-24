import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import BrandPTS from './BrandPTS'

export default function Intro({ duration=1800, onComplete=()=>{} }){
  useEffect(()=>{
    const t = setTimeout(()=> onComplete(), duration + 300)
    return ()=>clearTimeout(t)
  },[duration,onComplete])

  return (
    <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none">
      <motion.div initial={{opacity:1}} animate={{opacity:0}} transition={{delay:duration/1000,duration:0.8}} className="w-full h-full flex items-center justify-center">
        <div className="text-center pointer-events-auto">
          <div className="mx-auto mb-4">
            <BrandPTS size={'text-6xl md:text-8xl'} />
          </div>
          <motion.div initial={{y:12, opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.45,duration:0.6}} className="text-sm md:text-lg text-gray-300">
            Premium Rolling Shutters & Gate Automation
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
