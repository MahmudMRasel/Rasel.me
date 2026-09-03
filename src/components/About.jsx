import React from 'react'
import { useTranslation } from 'react-i18next'
import { useScrollReveal } from '../hooks/useScrollReveal'

const About = () => {
  const { t } = useTranslation()
  const [titleRef, titleRevealed] = useScrollReveal({ threshold: 0.2 })
  const [contentRef, contentRevealed] = useScrollReveal({ threshold: 0.2 })

  return (
    <section id="about" className="container mx-auto px-6 py-16 relative">
      <div className="text-center mb-12">
        <h2 
          ref={titleRef}
          className={`text-5xl md:text-6xl font-extrabold mb-4 scroll-reveal-up ${titleRevealed ? 'revealed' : ''}`}
        >
          <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500 bg-clip-text text-transparent">{t('about.title')}</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full"></div>
        <p className="text-gray-600 mt-4 text-lg">{t('about.subtitle')}</p>
      </div>
      <div 
        ref={contentRef}
        className={`glass rounded-xl p-8 md:p-10 backdrop-blur-lg hover:bg-white/40 transition-all scroll-reveal-scale mx-auto max-w-4xl mb-16 ${contentRevealed ? 'revealed' : ''}`}
      >
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify">
          {t('about.description')}
        </p>
      </div>
    </section>
  )
}

export default About


