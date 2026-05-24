import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import * as Lucide from 'lucide-react'

const fallback = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...props}><rect width="20" height="14" x="2" y="5" rx="2" stroke="currentColor" strokeWidth="1.5"/></svg>
)

const services = [
  {title:'Rolling Shutters', desc:'Custom-built shutters for homes and commercial properties.', icon: Lucide.Archive || fallback},
  {title:'Gate Motors', desc:'Reliable, high-torque automation solutions for gates.', icon: Lucide.Zap || fallback},
  {title:'Maintenance & Repair', desc:'Rapid service and preventive maintenance plans.', icon: Lucide.Wrench || fallback},
  {title:'Installations', desc:'Large-scale industrial installations and setup.', icon: Lucide.Layout || Lucide.Grid || fallback},
  {title:'Logistics', desc:'Delivery and spare parts support.', icon: Lucide.Truck || fallback},
]

const container = { hidden:{}, visible:{ transition:{ staggerChildren:0.12 } } }
const item = { hidden:{ opacity:0, y:18 }, visible:{ opacity:1, y:0, transition:{duration:0.6, ease:'easeOut'} } }

function useTilt(){
  const ref = useRef(null)
  function onMove(e){
    const el = ref.current; if(!el) return
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width; const y = (e.clientY - rect.top) / rect.height
    el.style.transform = `perspective(800px) rotateX(${(y-0.5)*8}deg) rotateY(${(x-0.5)*-8}deg) translateZ(12px)`
  }
  function onLeave(){ const el = ref.current; if(!el) return; el.style.transform = '' }
  return {ref, onMove, onLeave}
}

export default function Services(){
  return (
    <section id="services" className="py-12">
      <h2 className="text-3xl font-bold mb-8">What We Do</h2>
      <motion.div initial="hidden" whileInView="visible" viewport={{once:true, amount:0.2}} variants={container} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s,idx)=> {
          const Tilt = useTilt()
          const Icon = s.icon
          return (
          <motion.div key={s.title} variants={item} whileHover={{scale:1.03}} className="card-3d glass p-6 rounded-xl metallic-border" onMouseMove={Tilt.onMove} onMouseLeave={Tilt.onLeave} ref={Tilt.ref}>
            <div className="h-2 w-12 bg-emerald-600 rounded mb-4" />
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-black/30 rounded text-emerald-300"><Icon size={20} /></div>
              <h3 className="text-xl font-semibold mb-0">{s.title}</h3>
            </div>
            <p className="text-gray-300">{s.desc}</p>
          </motion.div>
        )})}
      </motion.div>
    </section>
  )
}
