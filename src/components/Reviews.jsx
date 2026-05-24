import React from 'react'
import { motion } from 'framer-motion'
import CountUp from './CountUp'

const reviews = [
  {name:'A. Khan', text:'Exceptional build quality and fast installation.'},
  {name:'S. Rahim', text:'Professional team and great after-sales service.'}
]

export default function Reviews(){
  // Use CountUp component to animate when visible

  return (
    <section id="reviews" className="py-12">
      <h2 className="text-3xl font-bold mb-6">Customer Reviews</h2>
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true,amount:0.2}} transition={{duration:0.6}} className="grid md:grid-cols-3 gap-6">
        <motion.div initial={{scale:0.98, opacity:0}} whileInView={{scale:1, opacity:1}} viewport={{once:true}} transition={{duration:0.6}} className="glass p-6 rounded-xl metallic-border text-center">
          <div className="text-3xl font-bold text-emerald-400"><CountUp end={1248} duration={1600} /></div>
          <div className="text-gray-300">Installations</div>
        </motion.div>

        <motion.div initial={{scale:0.98, opacity:0}} whileInView={{scale:1, opacity:1}} viewport={{once:true}} transition={{duration:0.6}} className="glass p-6 rounded-xl metallic-border text-center">
          <div className="text-3xl font-bold text-emerald-400"><CountUp end={28} duration={1200} />+</div>
          <div className="text-gray-300">Years Experience</div>
        </motion.div>

        <motion.div initial={{scale:0.98, opacity:0}} whileInView={{scale:1, opacity:1}} viewport={{once:true}} transition={{duration:0.6}} className="glass p-6 rounded-xl metallic-border text-center">
          <div className="text-3xl font-bold text-emerald-400"><CountUp end={320} duration={1500} /></div>
          <div className="text-gray-300">Support Tickets</div>
        </motion.div>
      </motion.div>

      <div className="mt-8 space-y-4">
        {reviews.map((r,i)=>(
          <motion.div key={i} initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{delay:i*0.08,duration:0.6}} className="glass p-4 rounded-xl metallic-border">
            <div className="font-semibold">{r.name}</div>
            <div className="text-gray-300">{r.text}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
