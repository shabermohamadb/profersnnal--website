import React from 'react'
import MapJS from './MapJS'
import { motion } from 'framer-motion'

export default function Contact(){
  return (
    <section id="contact" className="py-12">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <motion.form initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="glass p-6 rounded-xl metallic-border space-y-4" onSubmit={(e)=>{e.preventDefault(); alert('Form submitted (demo)')}}>
          <input required placeholder="Name" className="w-full p-3 bg-transparent border rounded focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          <input required placeholder="Email" type="email" className="w-full p-3 bg-transparent border rounded focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          <input placeholder="Phone" className="w-full p-3 bg-transparent border rounded focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          <textarea placeholder="Message" rows={5} className="w-full p-3 bg-transparent border rounded focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          <motion.button whileHover={{scale:1.03}} whileTap={{scale:0.98}} className="px-6 py-3 bg-emerald-600 text-black rounded font-semibold">Send Message</motion.button>
        </motion.form>

        <motion.div initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6, delay:0.08}} className="glass p-6 rounded-xl metallic-border">
          <h3 className="font-semibold mb-2">Visit Us</h3>
          <p className="text-gray-300">Danishpet Main Road, Santhaipet, Kadayapatti(TK), Salem Dt.</p>
          <div className="mt-4">
              {/* Embedded map: prefer Maps JS API for better control. Falls back to iframe if no API key. */}
              {import.meta.env.VITE_GOOGLE_MAPS_API_KEY ? (
                // eslint-disable-next-line react/jsx-no-undef
                <MapJS lat={11.8706204} lng={78.1074396} zoom={18} />
              ) : (
                <iframe
                  title="company-map"
                  src="https://www.google.com/maps?q=11.8706204,78.1074396&z=18&output=embed"
                  width="100%"
                  height="300"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-64 rounded overflow-hidden"
                />
              )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
