import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const About = () => {
  const [titleRef, titleRevealed] = useScrollReveal({ threshold: 0.2 })
  const timelineItems = [
    {
      date: "June 2025 - Present",
      title: "AI & UX Research Intern",
      company: "Digital Ops",
      side: "left",
      items: [
        "Evaluate adaptive learning dashboards using multimodal data (clickstream, logs, behavioral signals).",
        "Analyze datasets using Python to assess predictive models (BKT, DKT, regression, clustering).",
        "Conduct UX research, usability testing, and engagement analysis.",
        "Present insights through dashboards and reports for both technical and non-technical audiences."
      ]
    },
    {
      date: "2023 - 2025",
      title: "MSc Computer Science",
      company: "DTU",
      side: "right",
      items: [
        "Computational Tools for Data Science",
        "Social Data Analysis & Visualization",
        "Intro to Machine Learning & Data Mining",
        "User Experience Engineering",
        "Data Security & System Security"
      ]
    },
    {
      date: "2021 - 2023",
      title: "Frontend Developer",
      company: "Brixoptim",
      side: "left",
      items: [
        "Built and maintained responsive UIs using HTML, CSS, Bootstrap, Tailwind, JavaScript.",
        "Ensured mobile-first design and cross-browser compatibility.",
        "Managed workflows with Git and performed debugging & usability testing."
      ]
    }
  ]

  const TimelineItem = ({ item, index }) => {
    const [itemRef, itemRevealed] = useScrollReveal({ threshold: 0.2 })
    
    return (
      <div 
        ref={itemRef}
        className={`flex items-center w-full mb-8 ${
          item.side === 'right' ? 'md:flex-row-reverse' : ''
        } scroll-reveal-up ${itemRevealed ? 'revealed' : ''}`}
        style={{ transitionDelay: `${index * 0.2}s` }}
      >
        <div className={`w-full md:w-1/2 ${item.side === 'left' ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
          <div className="glass rounded-xl p-6 backdrop-blur-lg hover:bg-white/40 transition-all transform hover:scale-105 hover:shadow-xl">
                <p className="text-sm text-gray-600 mb-1">{item.date}</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-md text-blue-600 font-medium mb-3">{item.company}</p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {item.items.map((listItem, i) => (
                    <li key={i}>{listItem}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="hidden md:flex relative w-8 h-8 bg-blue-600 rounded-full items-center justify-center z-10 shadow-lg animate-pulse-glow">
              <div className="absolute w-4 h-4 bg-white rounded-full"></div>
            </div>
            <div className={`hidden md:block w-1/2 ${item.side === 'left' ? 'pl-8' : 'pr-8'}`}></div>
          </div>
    )
  }

  return (
    <section id="about" className="container mx-auto px-6 py-16 relative">
      <h2 
        ref={titleRef}
        className={`text-4xl font-bold text-gray-900 text-center mb-12 scroll-reveal-up ${titleRevealed ? 'revealed' : ''}`}
      >
        Timeline
      </h2>
      <div className="max-w-4xl mx-auto relative">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-300 via-blue-500 to-blue-300 h-full"></div>

        {timelineItems.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  )
}

export default About

