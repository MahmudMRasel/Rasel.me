import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const About = () => {
  const [titleRef, titleRevealed] = useScrollReveal({ threshold: 0.2 })
  const [contentRef, contentRevealed] = useScrollReveal({ threshold: 0.2 })

  return (
    <section id="about" className="container mx-auto px-6 py-16 relative">
      <div className="text-center mb-12">
        <h2 
          ref={titleRef}
          className={`text-5xl md:text-6xl font-extrabold mb-4 scroll-reveal-up ${titleRevealed ? 'revealed' : ''}`}
        >
          <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500 bg-clip-text text-transparent">About Me</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full"></div>
        <p className="text-gray-600 mt-4 text-lg">Who I am & what I do</p>
      </div>
      <div 
        ref={contentRef}
        className={`glass rounded-xl p-8 md:p-10 backdrop-blur-lg hover:bg-white/40 transition-all scroll-reveal-scale mx-auto max-w-4xl mb-16 ${contentRevealed ? 'revealed' : ''}`}
      >
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify">
          With a background in Frontend Development, I naturally gravitated toward Analytics & Power Bi  because I enjoy not only building interfaces, but also understanding what the numbers mean. I hold an MSc in Computer Science from the Technical University of Denmark (DTU), Copenhagen. I turn complex datasets into clear visuals, practical KPIs, and interactive dashboards that people can use without needing extra explanations. I'm seeking a full-time role where I can help teams make better, faster decisions through data.
        </p>
      </div>
    </section>
  )
}

export default About


