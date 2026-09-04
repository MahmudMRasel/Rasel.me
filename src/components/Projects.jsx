import React from 'react'
import { useTranslation } from 'react-i18next'
import { useScrollReveal } from '../hooks/useScrollReveal'

const Projects = () => {
  const { t } = useTranslation()
  const [titleRef, titleRevealed] = useScrollReveal({ threshold: 0.2 })
  
  const projects = [
    {
      title: t('projects.items.thesis.title'),
      description: t('projects.items.thesis.description'),
      bullets: t('projects.items.thesis.bullets', { returnObjects: true }),
      tools: t('projects.items.thesis.tools', { returnObjects: true }),
      url: null
    },
    {
      title: t('projects.items.worldHappiness.title'),
      description: t('projects.items.worldHappiness.description'),
      bullets: t('projects.items.worldHappiness.bullets', { returnObjects: true }),
      tools: t('projects.items.worldHappiness.tools', { returnObjects: true }),
      url: null
    },
    {
      title: t('projects.items.hoursly.title'),
      description: t('projects.items.hoursly.description'),
      bullets: t('projects.items.hoursly.bullets', { returnObjects: true }),
      tools: t('projects.items.hoursly.tools', { returnObjects: true }),
      url: "https://hoursly-rm7.netlify.app"
    },
    {
      title: t('projects.items.processMining.title'),
      description: t('projects.items.processMining.description'),
      bullets: t('projects.items.processMining.bullets', { returnObjects: true }),
      tools: t('projects.items.processMining.tools', { returnObjects: true }),
      url: null
    },
    {
      title: t('projects.items.dataSecurity.title'),
      description: t('projects.items.dataSecurity.description'),
      bullets: t('projects.items.dataSecurity.bullets', { returnObjects: true }),
      tools: t('projects.items.dataSecurity.tools', { returnObjects: true }),
      url: null
    },
    {
      title: t('projects.items.computationalTools.title'),
      description: t('projects.items.computationalTools.description'),
      bullets: t('projects.items.computationalTools.bullets', { returnObjects: true }),
      tools: t('projects.items.computationalTools.tools', { returnObjects: true }),
      url: null
    }
  ]

  const ProjectCard = ({ project, index }) => {
    const [cardRef, cardRevealed] = useScrollReveal({ threshold: 0.1 })
    
    return (
      <div 
        ref={cardRef}
        className={`group glass rounded-2xl p-4 md:p-6 backdrop-blur-lg hover:bg-white/60 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl h-full flex flex-col border border-white/20 hover:border-blue-200 scroll-reveal-scale ${cardRevealed ? 'revealed' : ''}`}
        style={{ transitionDelay: `${index * 0.15}s` }}
      >
        {/* Header with gradient accent */}
        <div className="mb-3 pb-3 border-b border-gray-200/50">
          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight">
            {project.title}
          </h3>
        </div>
        
        <p className="text-gray-700 text-sm md:text-base mb-3 leading-relaxed flex-grow">{project.description}</p>
        
        {project.bullets && (
          <ul className="list-none text-sm text-gray-600 space-y-1.5 mb-3">
            {project.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start">
                <svg className="w-3.5 h-3.5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
        
        {project.tools && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tools.map((tool, i) => (
              <span 
                key={i} 
                className="text-xs px-2.5 py-1 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 rounded-full font-medium border border-blue-200/50 hover:from-blue-100 hover:to-blue-200 transition-all"
              >
                {tool}
              </span>
            ))}
          </div>
        )}
        
        {project.url && (
          <div className="mt-auto pt-3 border-t border-gray-200/50">
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm group-hover:gap-3 transition-all"
            >
              <span>{t('projects.liveDemo')}</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        )}
      </div>
    )
  }

  return (
    <section id="projects" className="container mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h2 
          ref={titleRef}
          className={`text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 scroll-reveal-up ${titleRevealed ? 'revealed' : ''}`}
        >
          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">{t('projects.title')}</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full"></div>
        <p className="text-gray-600 mt-4 text-lg">{t('projects.subtitle')}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Projects

