import React, { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const Timeline = () => {
  const [titleRef, titleRevealed] = useScrollReveal({ threshold: 0.2 })
  const [isCoursesExpanded, setIsCoursesExpanded] = useState(false)

  const timelineItems = [
    {
      date: "June 2025 - Present",
      title: "AI & UX Research Intern",
      company: "Digital Ops",
      type: "experience",
      bullets: [
        "Evaluate adaptive learning dashboards using multimodal data (clickstream, logs, behavioral signals).",
        "Analyze datasets using Python to assess predictive models (BKT, DKT, regression, clustering).",
        "Conduct UX research, usability testing, and engagement analysis.",
        "Present insights through dashboards and reports for both technical and non-technical audiences."
      ],
      tools: ["Python", "Power BI", "Figma", "UX Research"]
    },
    {
      date: "2023 - 2025",
      title: "MSc Computer Science",
      company: "Technical University of Denmark (DTU)",
      type: "education",
      selectedCourses: [
        "Computational Tools for Data Science",
        "Social Data Analysis & Visualization",
        "Intro to Machine Learning & Data Mining",
        "User Experience Engineering",
        "Data Security & System Security"
      ],
      allCourses: [
        "Computational Tools for Data Science",
        "Social Data Analysis & Visualization",
        "Intro to Machine Learning & Data Mining",
        "User Experience Engineering",
        "Data Security & System Security",
        "Advanced Algorithms",
        "Database Systems",
        "Software Engineering",
        "Computer Networks",
        "Distributed Systems",
        "Artificial Intelligence",
        "Natural Language Processing",
        "Computer Vision",
        "Cloud Computing",
        "DevOps Practices"
      ]
    },
    {
      date: "2021 - 2023",
      title: "Frontend Developer",
      company: "Brixoptim",
      type: "experience",
      bullets: [
        "Built and maintained responsive UIs using HTML, CSS, Bootstrap, Tailwind, JavaScript.",
        "Ensured mobile-first design and cross-browser compatibility.",
        "Managed workflows with Git and performed debugging & usability testing."
      ],
      tools: ["HTML", "CSS", "Bootstrap", "Tailwind", "JavaScript", "Git"]
    }
  ]

  const TimelineItem = ({ item, index }) => {
    const [itemRef, itemRevealed] = useScrollReveal({ threshold: 0.2 })
    const isLeft = index % 2 === 0
    
    return (
      <div 
        ref={itemRef}
        className={`flex items-center w-full mb-8 ${
          isLeft ? '' : 'md:flex-row-reverse'
        } scroll-reveal-up ${itemRevealed ? 'revealed' : ''}`}
        style={{ transitionDelay: `${index * 0.2}s` }}
      >
        <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
          <div className="glass rounded-xl p-6 backdrop-blur-lg hover:bg-white/40 transition-all transform hover:scale-105 hover:shadow-xl">
            <p className="text-sm text-gray-600 mb-1">{item.date}</p>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">{item.title}</h3>
            <p className="text-md text-blue-600 font-medium mb-3">{item.company}</p>
            
            {item.type === 'experience' && (
              <>
                <ul className={`list-disc ${isLeft ? 'list-inside' : 'list-inside md:list-outside md:ml-4'} text-sm text-gray-600 space-y-1 mb-3`}>
                  {item.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
                {item.tools && (
                  <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : ''}`}>
                    {item.tools.map((tool, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </>
            )}
            
            {item.type === 'education' && (
              <>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Selected Coursework:</h4>
                  <ul className={`list-disc ${isLeft ? 'list-inside' : 'list-inside md:list-outside md:ml-4'} text-sm text-gray-600 space-y-1`}>
                    {item.selectedCourses.map((course, i) => (
                      <li key={i}>{course}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-4">
                  <button
                    onClick={() => setIsCoursesExpanded(!isCoursesExpanded)}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-2 transition-colors"
                  >
                    {isCoursesExpanded ? 'Show Less' : 'View All Courses'}
                    <svg 
                      className={`w-4 h-4 transform transition-transform ${isCoursesExpanded ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {isCoursesExpanded && (
                    <div className="mt-4 p-4 glass-dark rounded-lg backdrop-blur-sm">
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">All Courses:</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {item.allCourses.map((course, i) => (
                          <div key={i} className="text-sm text-gray-600 flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
        <div className="hidden md:flex relative w-8 h-8 bg-blue-600 rounded-full items-center justify-center z-10 shadow-lg animate-pulse-glow">
          <div className="absolute w-4 h-4 bg-white rounded-full"></div>
        </div>
        <div className={`hidden md:block w-1/2 ${isLeft ? 'pl-8' : 'pr-8'}`}></div>
      </div>
    )
  }

  return (
    <section id="timeline" className="container mx-auto px-6 py-16 relative">
      <div className="text-center mb-16">
        <h2 
          ref={titleRef}
          className={`text-5xl md:text-6xl font-extrabold mb-4 scroll-reveal-up ${titleRevealed ? 'revealed' : ''}`}
        >
          <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500 bg-clip-text text-transparent">Timeline</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full"></div>
        <p className="text-gray-600 mt-4 text-lg">Experience & Education</p>
      </div>
      <div className="relative">
        {/* Vertical line for desktop */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200"></div>
        
        {timelineItems.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Timeline
