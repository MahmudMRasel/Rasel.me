import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const Projects = () => {
  const [titleRef, titleRevealed] = useScrollReveal({ threshold: 0.2 })
  const projects = [
    {
      title: "StriveAI: Adaptive Learning Platform (Master's Thesis)",
      description: "Designed UX architecture for an AI-driven learning dashboard (adaptive algorithms: BKT, DKT) and GenAI-based generative nudges. Delivered final prototype and research recommendations.",
      bullets: [
        "Evaluated adaptive algorithms (BKT, DKT) through behavioral data analysis",
        "Designed nudge systems using GenAI",
        "Created UX prototypes for student dashboards"
      ],
      tools: ["Python", "UX Research", "Figma", "GenAI"],
      url: null
    },
    {
      title: "Hoursly: Time Tracking & Budgeting Web App",
      description: "Built a time-tracking app featuring secure login, project tracking, categorized budgets, CSV export, and custom notifications with sound/visual alerts.",
      bullets: [
        "Secure user authentication and session management",
        "Real-time project time tracking with category filters",
        "Budget tracking with CSV data export",
        "Custom notifications with sound and visual alerts"
      ],
      tools: ["HTML", "CSS", "JavaScript", "Netlify"],
      url: "https://hoursly-rm7.netlify.app"
    },
    {
      title: "Process Mining & Predictive Analytics",
      description: "Applied process mining to supply chain datasets, built classification models (Decision Tree, Random Forest, XGBoost) to predict delays, and conducted extensive exploratory data analysis.",
      bullets: [
        "Process mining on supply chain event logs",
        "Built Decision Tree, Random Forest, XGBoost models",
        "Exploratory data analysis and feature engineering"
      ],
      tools: ["Python", "Scikit-learn", "PM4Py", "Pandas", "NumPy"],
      url: null
    },
    {
      title: "Data Security Research: Two-Factor Authentication & Phishing Detection",
      description: "Researched authentication security protocols (FIDO2, TOTP, SMS) and phishing detection systems. Delivered a research paper and presentation on best practices and system design.",
      bullets: [
        "Evaluated FIDO2, TOTP, SMS-based 2FA protocols",
        "Analyzed phishing detection mechanisms",
        "Research paper and presentation delivery"
      ],
      tools: ["Research", "Security Protocols", "Documentation"],
      url: null
    },
    {
      title: "Computational Tools for Data Science",
      description: "Delivered a full research project covering data cleaning, NLP (NER, lemmatization), classification, graph network analysis, and visualization techniques using Python.",
      bullets: [
        "Data preprocessing, cleaning, and feature extraction",
        "NLP: NER, lemmatization, text classification",
        "Graph network analysis and visualization"
      ],
      tools: ["Python", "NetworkX", "SpaCy", "Matplotlib", "Seaborn"],
      url: null
    }
  ]

  const ProjectCard = ({ project, index }) => {
    const [cardRef, cardRevealed] = useScrollReveal({ threshold: 0.1 })
    
    return (
      <div 
        ref={cardRef}
        className={`group glass rounded-2xl p-5 backdrop-blur-lg hover:bg-white/60 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl h-full flex flex-col border border-white/20 hover:border-blue-200 scroll-reveal-scale ${cardRevealed ? 'revealed' : ''}`}
        style={{ transitionDelay: `${index * 0.15}s` }}
      >
        {/* Header with gradient accent */}
        <div className="mb-3 pb-3 border-b border-gray-200/50">
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight">
            {project.title}
          </h3>
        </div>
        
        <p className="text-gray-700 text-sm mb-3 leading-relaxed flex-grow">{project.description}</p>
        
        {project.bullets && (
          <ul className="list-none text-xs text-gray-600 space-y-1.5 mb-3">
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
              <span>Live Demo</span>
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
      <h2 
        ref={titleRef}
        className={`text-4xl font-bold text-gray-900 text-center mb-12 scroll-reveal-up ${titleRevealed ? 'revealed' : ''}`}
      >
        Projects
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

