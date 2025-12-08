import React, { useState, useEffect } from 'react'
import profileImage from '../images/Rasel.jpg'
import cv from '../cv/Rasel Mahmud.pdf'

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = "Hi, I'm R Mahmud.\nI turn data into insights."
  const [showCursor, setShowCursor] = useState(true)
  const nameStartIndex = fullText.indexOf('R Mahmud')
  const nameEndIndex = nameStartIndex + 'R Mahmud'.length

  useEffect(() => {
    let currentIndex = 0
    const typingSpeed = 100 // milliseconds per character

    const typeText = () => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.substring(0, currentIndex + 1))
        currentIndex++
        setTimeout(typeText, typingSpeed)
      } else {
        // Blink cursor after typing is done, then hide it
        const cursorInterval = setInterval(() => {
          setShowCursor(prev => !prev)
        }, 530)
        setTimeout(() => {
          clearInterval(cursorInterval)
          setShowCursor(false)
        }, 2000)
      }
    }

    // Start typing after a short delay
    const timer = setTimeout(() => {
      typeText()
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  // Render text with "R Mahmud" highlighted in blue
  const renderAnimatedText = () => {
    if (displayedText.length === 0) return ''
    
    const beforeName = displayedText.substring(0, nameStartIndex)
    const namePart = displayedText.substring(nameStartIndex, Math.min(nameEndIndex, displayedText.length))
    const afterName = displayedText.substring(Math.min(nameEndIndex, displayedText.length))
    
    return (
      <>
        {beforeName}
        {namePart && <span className="text-blue-600">{namePart}</span>}
        {afterName}
      </>
    )
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between z-10 relative">
        {/* Left side - Text content */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <div className="glass rounded-2xl p-8 mb-6 backdrop-blur-lg">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4 min-h-[200px] md:min-h-[150px] whitespace-pre-line">
              {renderAnimatedText()}
              {showCursor && (
                <span className="inline-block w-0.5 h-12 bg-blue-600 ml-1 animate-pulse align-middle">|</span>
              )}
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              Data Analyst with experience in predictive modeling, dashboard design, and frontend development. Currently working at Digital Ops on adaptive learning AI systems while completing my Master's in Computer Science at DTU.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href={cv} 
                download="Rasel_Mahmud_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Download CV
              </a>
              <a 
                href="#projects" 
                className="glass text-gray-800 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-white/30 transition-all transform hover:scale-105"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>

        {/* Right side - Profile picture with glassmorphism */}
        <div className="md:w-1/2 flex justify-center items-center relative">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Glowing background circles */}
            <div className="absolute inset-0 bg-blue-400 rounded-full blur-3xl opacity-30 animate-pulse-glow"></div>
            <div className="absolute inset-4 bg-blue-500 rounded-full blur-2xl opacity-40"></div>
            
            {/* Glassmorphism frame */}
            <div className="relative w-full h-full glass rounded-full p-2 backdrop-blur-xl border-2 border-white/30 shadow-2xl animate-float">
              {/* Profile image container */}
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <img 
                  src={profileImage} 
                  alt="Rasel Mahmud" 
                  className="w-full h-full object-cover"
                  style={{ 
                    objectPosition: 'center 25%',
                    transform: 'scale(1.05)',
                    transformOrigin: 'center center'
                  }}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-full"></div>
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 glass rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
              <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 glass rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '3s' }}>
              <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

