import React, { useEffect, useRef, useState } from 'react'

function easeOutCubic(t){ return 1 - Math.pow(1-t, 3) }

export default function CountUp({ end=100, duration=1500, start=0, separator=',' }){
  const ref = useRef(null)
  const [value, setValue] = useState(start)
  const started = useRef(false)

  useEffect(()=>{
    const el = ref.current
    if(!el) return
    const obs = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting && !started.current){
          started.current = true
          const t0 = performance.now()
          const loop = (t)=>{
            const elapsed = t - t0
            const p = Math.min(1, elapsed / duration)
            const v = Math.round(start + (end - start) * easeOutCubic(p))
            setValue(v)
            if(p < 1) requestAnimationFrame(loop)
          }
          requestAnimationFrame(loop)
        }
      })
    },{threshold:0.3})
    obs.observe(el)
    return ()=>obs.disconnect()
  },[end,duration,start])

  const fmt = (n)=> String(n).replace(/\B(?=(\d{3})+(?!\d))/g, separator)

  return <span ref={ref}>{fmt(value)}</span>
}
