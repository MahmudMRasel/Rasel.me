import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import cv from '../cv/Rasel Mahmud.pdf'

const Contact = () => {
  const [titleRef, titleRevealed] = useScrollReveal({ threshold: 0.2 })
  const [contentRef, contentRevealed] = useScrollReveal({ threshold: 0.2 })

  return (
    <section id="hire-me" className="container mx-auto px-6 py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      
      <h2 
        ref={titleRef}
        className={`text-4xl font-bold text-gray-900 text-center mb-6 scroll-reveal-up ${titleRevealed ? 'revealed' : ''}`}
      >
        Hire Me
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Let's collaborate and create something amazing together
      </p>
      
      <div 
        ref={contentRef}
        className={`max-w-4xl mx-auto glass rounded-3xl p-8 md:p-12 backdrop-blur-lg shadow-2xl scroll-reveal-scale ${contentRevealed ? 'revealed' : ''}`}
      >
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left side - Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Work Together</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm open to roles in Business Intelligence, Data Analytics, Frontend Development, or UX Research—or anything that combines these. If you think I'd fit, let's talk.
              </p>
            </div>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-start group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-700">Copenhagen, Denmark</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - CTA & Links */}
          <div className="flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Connect With Me</h3>
              
              <div className="space-y-3">
                <a 
                  href="https://linkedin.com/in/md-rasel-mahmud-08" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 glass-dark rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group border border-white/40"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <span className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">LinkedIn</span>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                
                <a 
                  href="https://github.com/rmm2805" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 glass-dark rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group border border-white/40"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <span className="font-semibold text-gray-900 group-hover:text-gray-800 transition-colors">GitHub</span>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                <a 
                  href={cv} 
                  download="Rasel_Mahmud_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 glass-dark rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-purple-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group border border-white/40"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <span className="font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">Download CV</span>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="mt-8">
              <a
                href="mailto:raselm2805@gmail.com"
                className="group block w-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white text-center px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
              >
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="group-hover:tracking-wide transition-all duration-300">Write Me</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

