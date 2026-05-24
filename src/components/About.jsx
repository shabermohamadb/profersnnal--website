import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about" className="py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{opacity:0, x:-30}} whileInView={{opacity:1,x:0}} transition={{duration:0.7}} className="glass p-8 rounded-xl metallic-border">
          <h3 className="text-2xl font-bold mb-4">About Al Ameen Rolling Shutter Manufacturing</h3>
          <p className="text-gray-300">With decades of experience in manufacturing and automation, Al Ameen delivers premium rolling shutters and gate automation solutions designed for durability and style.</p>
        </motion.div>

        <motion.div initial={{opacity:0, x:30}} whileInView={{opacity:1,x:0}} transition={{duration:0.7}} className="glass p-8 rounded-xl metallic-border">
          <h4 className="font-semibold mb-2">What sets us apart</h4>
          <ul className="text-gray-300 list-disc list-inside">
            <li>Precision engineering and premium materials</li>
            <li>After-sales service and rapid maintenance</li>
            <li>Custom designs with industrial aesthetics</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
