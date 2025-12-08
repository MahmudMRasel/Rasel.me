import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const Skills = () => {
  const [titleRef, titleRevealed] = useScrollReveal({ threshold: 0.2 })
  const [leftCardRef, leftCardRevealed] = useScrollReveal({ threshold: 0.2 })
  const [rightCardRef, rightCardRevealed] = useScrollReveal({ threshold: 0.2 })
  const dataSkills = [
    "Python (Pandas, NumPy)",
    "SQL",
    "Predictive Analytics",
    "Data Visualization"
  ]

  const devSkills = [
    "HTML/CSS",
    "Tailwind CSS",
    "JavaScript",
    "Git"
  ]

  return (
    <section id="skills" className="container mx-auto px-6 py-16">
      <h2 
        ref={titleRef}
        className={`text-4xl font-bold text-gray-900 text-center mb-12 scroll-reveal-up ${titleRevealed ? 'revealed' : ''}`}
      >
        My Dual-Skill Set
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-5xl mx-auto">
        {/* Data Skills Card */}
        <div 
          ref={leftCardRef}
          className={`glass rounded-2xl p-8 md:w-1/2 flex flex-col items-center text-center backdrop-blur-lg hover:bg-white/40 transition-all transform hover:scale-110 hover:shadow-2xl scroll-reveal-left ${leftCardRevealed ? 'revealed' : ''}`}
        >
          <div className="text-blue-600 mb-4 animate-pulse-glow transform transition-transform hover:rotate-12">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Analyst</h3>
          <ul className="list-none space-y-3 text-gray-700 text-lg">
            {dataSkills.map((skill, index) => (
              <li 
                key={index} 
                className="glass-dark rounded-lg px-4 py-2 backdrop-blur-sm transform transition-all hover:scale-105 hover:bg-blue-50"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Developer Skills Card */}
        <div 
          ref={rightCardRef}
          className={`glass rounded-2xl p-8 md:w-1/2 flex flex-col items-center text-center backdrop-blur-lg hover:bg-white/40 transition-all transform hover:scale-110 hover:shadow-2xl scroll-reveal-right ${rightCardRevealed ? 'revealed' : ''}`}
        >
          <div className="text-blue-600 mb-4 animate-pulse-glow transform transition-transform hover:rotate-12">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Frontend Developer</h3>
          <ul className="list-none space-y-3 text-gray-700 text-lg">
            {devSkills.map((skill, index) => (
              <li 
                key={index} 
                className="glass-dark rounded-lg px-4 py-2 backdrop-blur-sm transform transition-all hover:scale-105 hover:bg-blue-50"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills

