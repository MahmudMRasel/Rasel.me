import React from 'react'
import { useTranslation } from 'react-i18next'
import { useScrollReveal } from '../hooks/useScrollReveal'

const Skills = () => {
  const { t } = useTranslation()
  const [titleRef, titleRevealed] = useScrollReveal({ threshold: 0.2 })
  
  const skillGroups = [
    {
      title: t('skills.categories.analytics.title'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      skills: t('skills.categories.analytics.items', { returnObjects: true })
    },
    {
      title: t('skills.categories.dataVisualization.title'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      skills: t('skills.categories.dataVisualization.items', { returnObjects: true })
    },
    {
      title: t('skills.categories.machineLearning.title'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      skills: t('skills.categories.machineLearning.items', { returnObjects: true })
    },
    {
      title: t('skills.categories.softwareWeb.title'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      skills: t('skills.categories.softwareWeb.items', { returnObjects: true })
    },
    {
      title: t('skills.categories.dataProcessing.title'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      skills: t('skills.categories.dataProcessing.items', { returnObjects: true })
    },
    {
      title: t('skills.categories.uxResearch.title'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      skills: t('skills.categories.uxResearch.items', { returnObjects: true })
    },
    {
      title: t('skills.categories.tools.title'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      skills: t('skills.categories.tools.items', { returnObjects: true })
    },
    {
      title: t('skills.categories.versionControl.title'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v8m-4-4h8M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
        </svg>
      ),
      skills: t('skills.categories.versionControl.items', { returnObjects: true })
    }
  ]

  const SkillCard = ({ group, index }) => {
    const [cardRef, cardRevealed] = useScrollReveal({ threshold: 0.2 })
    
    return (
      <div 
        ref={cardRef}
        className={`group relative glass rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 flex flex-col items-center text-center backdrop-blur-lg border border-white/30 hover:border-blue-300 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 scroll-reveal-scale overflow-hidden ${cardRevealed ? 'revealed' : ''}`}
        style={{ transitionDelay: `${index * 0.1}s` }}
      >
        {/* Gradient background on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
        
        {/* Icon with gradient background */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-teal-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
          <div className="relative bg-gradient-to-br from-blue-500 to-teal-500 p-4 rounded-2xl text-white transform transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 shadow-lg">
            {group.icon}
          </div>
        </div>
        
        {/* Title with gradient on hover */}
        <h3 className="text-2xl font-bold mb-6 transition-colors duration-300 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-teal-600">
          {group.title}
        </h3>
        
        {/* Skills list with improved styling */}
        <ul className="list-none space-y-2 w-full">
          {group.skills.map((skill, i) => (
            <li 
              key={i} 
              className="flex items-center text-left text-sm md:text-base text-gray-700"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mr-3 flex-shrink-0"></span>
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <section id="skills" className="container mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h2 
          ref={titleRef}
          className={`text-5xl md:text-6xl font-extrabold mb-4 scroll-reveal-up ${titleRevealed ? 'revealed' : ''}`}
        >
          <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500 bg-clip-text text-transparent">{t('skills.title')}</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full"></div>
        <p className="text-gray-600 mt-4 text-lg">{t('skills.subtitle')}</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {skillGroups.map((group, index) => (
          <SkillCard key={index} group={group} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Skills

