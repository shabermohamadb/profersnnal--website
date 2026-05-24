import React, {useEffect, useState} from 'react'
import { motion, useAnimation } from 'framer-motion'
import Particles from './Particles'
import Intro from './Intro'
import StickyBottomNav from './StickyBottomNav'

const shutterVariants = {
  closed: { y: '0%' },
  open: { y: '-110%', transition: { duration: 1.6, ease: 'easeInOut' } }
}

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i=0) => ({ opacity: 1, y: 0, transition: { delay: 0.9 + i * 0.12, duration: 0.7, ease: 'easeOut' } })
}

export default function Hero(){
  const controls = useAnimation()
  const [opened, setOpened] = useState(false)
  const [showParticles, setShowParticles] = useState(true)

  const handleIntroComplete = async ()=>{
    await controls.start('open')
    setOpened(true)
  }

  useEffect(()=>{
    const onResize = ()=> setShowParticles(window.innerWidth > 800)
    onResize()
    window.addEventListener('resize', onResize)
    return ()=> window.removeEventListener('resize', onResize)
  },[])

  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 animated-metallic bg-[linear-gradient(120deg,#0b0b0b,rgba(80,80,80,0.06),#071011)]" />
      <video className="absolute inset-0 hero-video mix-blend-overlay opacity-60" src="/video.mp4" preload="metadata" muted loop playsInline />
      {showParticles && <Particles />}

      <div className="absolute inset-0 flex flex-col">
        <motion.div initial="closed" animate={controls} variants={shutterVariants} className="h-1/2 bg-gradient-to-b from-black to-black/90" />
        <motion.div initial="closed" animate={controls} variants={shutterVariants} className="h-1/2 bg-gradient-to-t from-black to-black/90" />
      </div>

      <div className="z-20 text-center px-6">
        <motion.div initial={{scale:0.85,opacity:0}} animate={{scale:1,opacity:1}} transition={{delay:1.2,duration:0.9}}>
          <motion.div initial={{scale:0.6,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:0.9}} className="mx-auto mb-4">
            <div className="brand-pts text-6xl md:text-8xl">PTS</div>
          </motion.div>

          <motion.div className="text-lg md:text-2xl mt-2 font-medium">
            <div className="brand-company inline-block"><TypingTitle text={'Al Ameen Rolling Shutter Manufacturing'} /></div>
          </motion.div>
        </motion.div>

        <motion.div className="mt-8 flex items-center justify-center gap-4">
          <motion.a whileHover={{scale:1.04}} href="#services" className="px-6 py-3 rounded-md glass metallic-border">Our Services</motion.a>
          <motion.a whileHover={{scale:1.04}} href="#contact" className="px-6 py-3 rounded-md bg-emerald-600 text-black font-semibold">Get a Quote</motion.a>
        </motion.div>
      </div>

      {!opened && (
        <Intro duration={1400} onComplete={handleIntroComplete} />
      )}

      <StickyBottomNav />
    </section>
  )
}

function TypingTitle({text}){
  const [display, setDisplay] = useState('')
  useEffect(()=>{
    // For reliability, set the full text immediately (avoids per-char rendering issues)
    setDisplay(text)
    return
  },[text])

  return (
    <div className="inline-block glow-text colorful-text">{display}<span className="animate-blink">|</span></div>
  )
}

