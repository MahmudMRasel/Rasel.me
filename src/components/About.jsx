import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const About = () => {
  const [titleRef, titleRevealed] = useScrollReveal({ threshold: 0.2 })
  const [contentRef, contentRevealed] = useScrollReveal({ threshold: 0.2 })

  return (
    <section id="about" className="container mx-auto px-6 py-16 relative">
      <h2 
        ref={titleRef}
        className={`text-4xl font-bold text-gray-900 mb-8 scroll-reveal-up ${titleRevealed ? 'revealed' : ''}`}
      >
        About
      </h2>
      <div 
        ref={contentRef}
        className={`glass rounded-xl p-8 backdrop-blur-lg hover:bg-white/40 transition-all scroll-reveal-scale ${contentRevealed ? 'revealed' : ''}`}
      >
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          I'm an MSc Computer Science student at DTU in Copenhagen. I started as a Frontend Developer and I'm now expanding into Data Analytics and BI, because I enjoy making information simple, visual, and usable.
        </p>
      </div>
    </section>
  )
}

export default About


