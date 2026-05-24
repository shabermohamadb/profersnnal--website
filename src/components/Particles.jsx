import React, { useRef, useEffect } from 'react'

export default function Particles(){
  const ref = useRef(null)

  useEffect(()=>{
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight
    const particles = Array.from({length:40}).map(()=>({
      x: Math.random()*w, y: Math.random()*h, r: Math.random()*2+0.6, vx:(Math.random()-0.5)*0.4, vy:-Math.random()*0.6-0.1, alpha: Math.random()*0.6+0.1
    }))

    let raf
    function resize(){ w=canvas.width=window.innerWidth; h=canvas.height=window.innerHeight }
    window.addEventListener('resize', resize)

    function render(){
      ctx.clearRect(0,0,w,h)
      particles.forEach(p=>{
        p.x += p.vx; p.y += p.vy; p.alpha -= 0.0006
        if(p.y < -10){ p.y = h+10; p.x = Math.random()*w; p.alpha = Math.random()*0.6+0.1 }
        ctx.beginPath(); ctx.fillStyle = `rgba(160,255,200,${p.alpha})`; ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill()
      })
      raf = requestAnimationFrame(render)
    }
    render()
    return ()=>{ cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  },[])

  return <canvas ref={ref} className="pointer-events-none absolute inset-0 z-10" />
}
