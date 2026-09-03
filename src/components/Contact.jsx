import React from 'react'
import { useTranslation } from 'react-i18next'
import { useScrollReveal } from '../hooks/useScrollReveal'
import cv from '../cv/Resume_RM.pdf'

const Contact = () => {
  const { t } = useTranslation()
  const [titleRef, titleRevealed] = useScrollReveal({ threshold: 0.2 })
  const [contentRef, contentRevealed] = useScrollReveal({ threshold: 0.2 })

  return (
    <section id="hire-me" className="container mx-auto px-6 py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      
      <div className="text-center mb-12">
        <h2 
          ref={titleRef}
          className={`text-5xl md:text-6xl font-extrabold mb-4 scroll-reveal-up ${titleRevealed ? 'revealed' : ''}`}
        >
          <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500 bg-clip-text text-transparent">{t('contact.title')}</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full"></div>
        <p className="text-gray-600 text-lg mt-4">{t('contact.subtitle')}</p>
      </div>
      
      <div 
        ref={contentRef}
        className={`max-w-5xl mx-auto glass rounded-3xl p-8 md:p-12 backdrop-blur-lg shadow-2xl scroll-reveal-scale ${contentRevealed ? 'revealed' : ''}`}
      >
        <div className="space-y-8">
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            {t('contact.description')}
          </p>

          {/* Contact Options */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">{t('contact.connectWith')}</h3>
            
            {/* Buttons Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/r-mahmud7/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center px-5 py-3 glass rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all transform hover:scale-105 shadow-md hover:shadow-xl border border-white/40"
              >
                <svg className="w-5 h-5 text-blue-600 group-hover:scale-110 group-hover:rotate-6 transition-all mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="font-medium text-gray-800">{t('contact.buttons.linkedin')}</span>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/MahmudMRasel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center px-5 py-3 glass rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all transform hover:scale-105 shadow-md hover:shadow-xl border border-white/40"
              >
                <svg className="w-5 h-5 text-gray-800 group-hover:scale-110 group-hover:rotate-6 transition-all mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="font-medium text-gray-800">{t('contact.buttons.github')}</span>
              </a>

              {/* Download CV */}
              <a 
                href={cv} 
                download="Rasel_Mahmud_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center px-5 py-3 glass rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-purple-100 transition-all transform hover:scale-105 shadow-md hover:shadow-xl border border-white/40"
              >
                <svg className="w-5 h-5 text-purple-600 group-hover:scale-110 group-hover:rotate-6 transition-all mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="font-medium text-gray-800">{t('contact.buttons.downloadCV')}</span>
              </a>

              {/* Email Button */}
              <a
                href="mailto:r.mahmud2207@gmail.com"
                className="group flex flex-col items-center px-5 py-3 glass rounded-xl hover:bg-gradient-to-r hover:from-teal-50 hover:to-teal-100 transition-all transform hover:scale-105 shadow-md hover:shadow-xl border border-white/40"
              >
                <svg className="w-5 h-5 text-teal-600 group-hover:scale-110 group-hover:rotate-6 transition-all mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-medium text-gray-800">{t('contact.buttons.email')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

