import React, {useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { motion } from 'framer-motion'

const imgs = [
  '/images/p1.jpg','/images/p2.jpg','/images/p3.jpg','/images/p4.jpg','/images/p5.jpg','/images/p6.jpg','/images/p7.jpg','/images/p8.jpg'
]

const slide = { hidden:{ opacity:0, scale:0.98 }, visible:{ opacity:1, scale:1, transition:{duration:0.6} } }

export default function Gallery(){
  const [lightbox, setLightbox] = useState({open:false,src:''})
  return (
    <section id="gallery" className="py-12">
      <h2 className="text-3xl font-bold mb-6">Product Showcase</h2>
      <motion.div initial="hidden" whileInView="visible" viewport={{once:true,amount:0.2}} className="glass p-6 rounded-xl metallic-border">
        <Swiper spaceBetween={20} slidesPerView={1} autoplay={{delay:3000}} loop breakpoints={{768:{slidesPerView:2},1024:{slidesPerView:3}}}>
          {imgs.map((src,i)=> (
            <SwiperSlide key={i}>
              <motion.div variants={slide} className="h-64 bg-gray-800 rounded overflow-hidden flex items-center justify-center cursor-pointer" onClick={()=>setLightbox({open:true,src})}>
                <img src={src} alt={`product-${i}`} className="object-cover w-full h-full" />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-6 columns-2 md:columns-4 gap-4">
          {imgs.map((src,i)=> (
            <img key={i} src={src} alt={`thumb-${i}`} className="mb-4 w-full rounded cursor-pointer" onClick={()=>setLightbox({open:true,src})} />
          ))}
        </div>

        {lightbox.open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={()=>setLightbox({open:false,src:''})}>
            <img src={lightbox.src} className="max-h-[80vh] max-w-[90vw] rounded" />
          </div>
        )}
      </motion.div>
    </section>
  )
}
