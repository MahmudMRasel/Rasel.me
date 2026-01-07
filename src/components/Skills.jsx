import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const Skills = () => {
  const [titleRef, titleRevealed] = useScrollReveal({ threshold: 0.2 })
  
  const skillGroups = [
    {
      title: "Data & BI",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      skills: ["Power BI (DAX, Power Query)", "SQL", "Excel", "Python (Pandas, NumPy, Matplotlib)", "Data Visualization", "Data Storytelling"]
    },
    {
      title: "Programming",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: ["Python", "JavaScript", "Git", "Data Structures & Algorithms"]
    },
    {
      title: "Frontend",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      skills: ["HTML", "CSS", "Tailwind CSS", "Bootstrap", "JavaScript", "Responsive Design"]
    },
    {
      title: "UX & Research",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      skills: ["Usability Testing", "Heuristic Evaluation", "Figma", "User Research"]
    }
  ]

  const SkillCard = ({ group, index }) => {
    const [cardRef, cardRevealed] = useScrollReveal({ threshold: 0.2 })
    
    return (
      <div 
        ref={cardRef}
        className={`glass rounded-2xl p-8 flex flex-col items-center text-center backdrop-blur-lg hover:bg-white/40 transition-all transform hover:scale-105 hover:shadow-2xl scroll-reveal-scale ${cardRevealed ? 'revealed' : ''}`}
        style={{ transitionDelay: `${index * 0.1}s` }}
      >
        <div className="text-blue-600 mb-4 animate-pulse-glow transform transition-transform hover:rotate-12">
          {group.icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{group.title}</h3>
        <ul className="list-none space-y-3 text-gray-700 text-lg w-full">
          {group.skills.map((skill, i) => (
            <li 
              key={i} 
              className="glass-dark rounded-lg px-4 py-2 backdrop-blur-sm transform transition-all hover:scale-105 hover:bg-blue-50"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <section id="skills" className="container mx-auto px-6 py-16">
      <h2 
        ref={titleRef}
        className={`text-4xl font-bold text-gray-900 text-center mb-12 scroll-reveal-up ${titleRevealed ? 'revealed' : ''}`}
      >
        Skills
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillGroups.map((group, index) => (
          <SkillCard key={index} group={group} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Skills

