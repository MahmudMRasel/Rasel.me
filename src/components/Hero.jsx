import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import profileImage from '../images/Avatar.png'
import cv from '../cv/Resume_RM.pdf'

const Hero = () => {
  const { t, i18n } = useTranslation()
  const fullHeadline = t('hero.headline')
  const roles = [t('hero.roles.dataAnalysis'), t('hero.roles.machineLearning'), t('hero.roles.documentAnalytics')]
  
  const [headlineText, setHeadlineText] = useState('')
  const [headlineComplete, setHeadlineComplete] = useState(false)
  const [currentRole, setCurrentRole] = useState('')
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [showHeadlineCursor, setShowHeadlineCursor] = useState(true)

  // Reset animation when language changes
  useEffect(() => {
    setHeadlineText('')
    setHeadlineComplete(false)
    setCurrentRole('')
    setCurrentRoleIndex(0)
    setIsDeleting(false)
    setShowHeadlineCursor(true)
  }, [i18n.language])

  // Render headline with colored highlights (works across all languages)
  const renderHeadline = () => {
    const text = headlineText
    const raselMahmud = "Rasel Mahmud"
    
    // Find "Rasel Mahmud" in any language headline
    const nameEnd = text.indexOf(raselMahmud) + raselMahmud.length
    
    if (nameEnd < raselMahmud.length) {
      // Name not found or still typing name
      return <span className="text-blue-600">{text}</span>
    }
    
    // Get the rest of the text after name
    const restOfText = text.slice(nameEnd)
    
    // Find the last part (data/beslutninger/সিদ্ধান্তে) to highlight
    // Split by common separators and get the last significant word(s)
    const words = restOfText.trim().split(' ')
    const lastWordIndex = words.length > 0 ? restOfText.lastIndexOf(words[words.length - 1]) : -1
    
    if (lastWordIndex === -1 || words.length < 2) {
      // Not enough text yet, just highlight name
      return (
        <>
          <span className="text-blue-600">{raselMahmud}</span>
          <span>{restOfText}</span>
        </>
      )
    }
    
    // Highlight last 2-3 words (the key phrase in any language)
    const keyPhraseStart = Math.max(0, restOfText.lastIndexOf(words[Math.max(0, words.length - 3)]))
    const beforeKeyPhrase = restOfText.slice(0, keyPhraseStart)
    const keyPhrase = restOfText.slice(keyPhraseStart)
    
    return (
      <>
        <span className="text-blue-600">{raselMahmud}</span>
        <span>{beforeKeyPhrase}</span>
        <span className="text-blue-600 font-bold">{keyPhrase}</span>
      </>
    )
  }

  // One-time headline typing animation
  useEffect(() => {
    if (headlineText.length < fullHeadline.length) {
      const timeout = setTimeout(() => {
        setHeadlineText(fullHeadline.slice(0, headlineText.length + 1))
      }, 50) // typing speed
      return () => clearTimeout(timeout)
    } else {
      setHeadlineComplete(true)
      // Hide headline cursor after completion
      setTimeout(() => setShowHeadlineCursor(false), 500)
    }
  }, [headlineText, fullHeadline])

  // Continuous role typing animation
  useEffect(() => {
    if (!headlineComplete) return // Wait for headline to finish

    const currentRoleText = roles[currentRoleIndex]
    
    if (!isDeleting && currentRole.length < currentRoleText.length) {
      // Typing
      const timeout = setTimeout(() => {
        setCurrentRole(currentRoleText.slice(0, currentRole.length + 1))
      }, 100)
      return () => clearTimeout(timeout)
    } else if (!isDeleting && currentRole.length === currentRoleText.length) {
      // Pause at end before deleting
      const timeout = setTimeout(() => {
        setIsDeleting(true)
      }, 2000)
      return () => clearTimeout(timeout)
    } else if (isDeleting && currentRole.length > 0) {
      // Deleting
      const timeout = setTimeout(() => {
        setCurrentRole(currentRole.slice(0, -1))
      }, 50)
      return () => clearTimeout(timeout)
    } else if (isDeleting && currentRole.length === 0) {
      // Move to next role
      setIsDeleting(false)
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length)
    }
  }, [currentRole, isDeleting, currentRoleIndex, headlineComplete, roles])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between z-10 relative gap-8">
        {/* Left side - Text content */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 order-2 md:order-1">
          <div className="glass rounded-3xl p-8 md:p-10 mb-6 backdrop-blur-md border border-white/20 shadow-lg">
            {/* One-time typing headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 text-gray-900 min-h-[100px] md:min-h-[120px]">
              {renderHeadline()}
              {showHeadlineCursor && <span className="animate-pulse">|</span>}
            </h1>
            
            {/* Continuous looping roles */}
            <div className="mb-8 h-8 flex items-center justify-center md:justify-start">
              {headlineComplete && (
                <p className="text-xl md:text-2xl font-semibold text-blue-600">
                  {currentRole}
                  <span className="animate-pulse">|</span>
                </p>
              )}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <a 
                href="#projects" 
                className="group bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white px-10 py-4 rounded-xl text-lg font-bold hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3"
              >
                <span className="group-hover:tracking-wide transition-all duration-300">{t('hero.buttons.viewProjects')}</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:rotate-6 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a 
                href={cv} 
                download="Rasel_Mahmud_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group glass text-gray-900 px-10 py-4 rounded-xl text-lg font-bold hover:bg-gradient-to-r hover:from-purple-50 hover:to-purple-100 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border-2 border-blue-200 hover:border-blue-400 flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="group-hover:tracking-wide transition-all duration-300">{t('hero.buttons.downloadCV')}</span>
              </a>
            </div>
            
            {/* Hero Links */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start">
              <a 
                href="https://www.linkedin.com/in/r-mahmud7/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 glass px-5 py-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all transform hover:scale-105 shadow-md hover:shadow-xl border border-white/40"
              >
                <svg className="w-5 h-5 text-blue-600 group-hover:scale-110 group-hover:rotate-6 transition-all" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
                <span className="font-medium text-gray-800">{t('hero.links.linkedin')}</span>
              </a>
              <a 
                href="https://github.com/MahmudMRasel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 glass px-5 py-3 rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all transform hover:scale-105 shadow-md hover:shadow-xl border border-white/40"
              >
                <svg className="w-5 h-5 text-gray-800 group-hover:scale-110 group-hover:rotate-6 transition-all" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                <span className="font-medium text-gray-800">{t('hero.links.github')}</span>
              </a>
              <a 
                href="mailto:r.mahmud2207@gmail.com"
                className="group flex items-center gap-2 glass px-5 py-3 rounded-xl hover:bg-gradient-to-r hover:from-teal-50 hover:to-teal-100 transition-all transform hover:scale-105 shadow-md hover:shadow-xl border border-white/40"
              >
                <svg className="w-5 h-5 text-teal-600 group-hover:scale-110 group-hover:rotate-6 transition-all" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                <span className="font-medium text-gray-800">{t('hero.links.email')}</span>
              </a>
            </div>
            
          </div>
        </div>

        {/* Right side - Profile picture with glassmorphism */}
        <div className="md:w-1/2 flex justify-center items-center relative order-1 md:order-2">
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

