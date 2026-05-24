import React, { useEffect, useRef, useState } from 'react'

function loadScript(src){
  return new Promise((resolve, reject)=>{
    if(document.querySelector(`script[src*="${src.split('?')[0]}"]`)) return resolve()
    const s = document.createElement('script')
    s.src = src
    s.async = true
    s.onerror = reject
    s.onload = resolve
    document.head.appendChild(s)
  })
}

export default function MapJS({lat=11.8706204, lng=78.1074396, zoom=18}){
  const ref = useRef(null)
  const [err, setErr] = useState(null)

  useEffect(()=>{
    const key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    if(!key){ setErr('No Google Maps API key set. Set VITE_GOOGLE_MAPS_API_KEY in .env'); return }
    const src = `https://maps.googleapis.com/maps/api/js?key=${key}`
    let cancelled = false
    loadScript(src).then(()=>{
      if(cancelled) return
      if(!window.google || !window.google.maps){ setErr('Google Maps failed to load'); return }
      const map = new window.google.maps.Map(ref.current, {
        center: { lat: Number(lat), lng: Number(lng) },
        zoom,
        disableDefaultUI: false,
        styles: [
          { elementType: 'geometry', stylers: [{ color: '#0f1724' }] },
          { elementType: 'labels.text.fill', stylers: [{ color: '#9ca3af' }] }
        ]
      })
      new window.google.maps.Marker({ position: {lat:Number(lat), lng:Number(lng)}, map })
    }).catch(e=> setErr(String(e)))
    return ()=>{ cancelled = true }
  },[lat,lng,zoom])

  return (
    <div className="w-full h-64 rounded overflow-hidden bg-gray-900">
      {err ? (
        <div className="w-full h-full flex items-center justify-center text-sm text-rose-400 p-4">{err}</div>
      ) : (
        <div ref={ref} className="w-full h-full" />
      )}
    </div>
  )
}
