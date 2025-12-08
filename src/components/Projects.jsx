import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const Projects = () => {
  const [titleRef, titleRevealed] = useScrollReveal({ threshold: 0.2 })
  const projects = [
    {
      title: "Hoursly",
      description: "A modern web application built with React and deployed on Netlify. Features responsive design and interactive user interface.",
      url: "https://hoursly-rm7.netlify.app"
    },
    {
      title: "StriveAI",
      description: "Master's Thesis in collaboration with Digital Ops. Designed UX architecture for adaptive learning (BKT/DKT models) and Generative Nudges."
    },
    {
      title: "Social Data Mining",
      description: "Analyzed behavioral datasets using clustering algorithms in Python."
    }
  ]

  const ProjectCard = ({ project, index }) => {
    const [cardRef, cardRevealed] = useScrollReveal({ threshold: 0.1 })
    
    const CardContent = (
      <div 
        ref={cardRef}
        className={`glass rounded-xl p-6 backdrop-blur-lg hover:bg-white/40 transition-all transform hover:scale-110 hover:shadow-2xl cursor-pointer h-full flex flex-col scroll-reveal-scale ${cardRevealed ? 'revealed' : ''}`}
        style={{ transitionDelay: `${index * 0.15}s` }}
      >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-3 flex-grow">{project.description}</p>
              {project.url && (
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold text-sm inline-flex items-center gap-1 mt-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  Visit Project
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
    )
    
    return project.url ? (
      <a 
        key={index}
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {CardContent}
      </a>
    ) : (
      <div key={index}>
        {CardContent}
      </div>
    )
  }

  return (
    <section id="projects" className="container mx-auto px-6 py-16">
      <h2 
        ref={titleRef}
        className={`text-4xl font-bold text-gray-900 text-center mb-12 scroll-reveal-up ${titleRevealed ? 'revealed' : ''}`}
      >
        My Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Projects

