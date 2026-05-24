import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import About from './components/About'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import CallNowButton from './components/CallNowButton'

export default function App(){
  return (
    <div className="scroll-smooth bg-black text-white font-display min-h-screen">
      <Header />
      <div className="pt-28">{/* spacer for fixed header */}
        <Hero />
      </div>
      <main className="max-w-7xl mx-auto px-6 md:px-8 space-y-24 -mt-6">
        <Services />
        <Gallery />
        <About />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <CallNowButton />
    </div>
  )
}
