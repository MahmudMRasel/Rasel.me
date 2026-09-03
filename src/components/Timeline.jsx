import React from 'react'
import { useTranslation } from 'react-i18next'
import { useScrollReveal } from '../hooks/useScrollReveal'

const Timeline = () => {
  const { t } = useTranslation()
  const [titleRef, titleRevealed] = useScrollReveal({ threshold: 0.2 })

  const timelineItems = [
    {
      date: t('timeline.experience.digitalOps.date'),
      title: t('timeline.experience.digitalOps.title'),
      company: t('timeline.experience.digitalOps.company'),
      type: "experience",
      bullets: t('timeline.experience.digitalOps.bullets', { returnObjects: true }),
      tools: t('timeline.experience.digitalOps.tools', { returnObjects: true })
    },
    {
      date: t('timeline.education.dtu.date'),
      title: t('timeline.education.dtu.title'),
      company: t('timeline.education.dtu.company'),
      type: "education",
      selectedCourses: t('timeline.education.dtu.courses.selected', { returnObjects: true })
    },
    {
      date: t('timeline.experience.brixoptim.date'),
      title: t('timeline.experience.brixoptim.title'),
      company: t('timeline.experience.brixoptim.company'),
      type: "experience",
      bullets: t('timeline.experience.brixoptim.bullets', { returnObjects: true }),
      tools: t('timeline.experience.brixoptim.tools', { returnObjects: true })
    },
    {
      date: t('timeline.education.bsc.date'),
      title: t('timeline.education.bsc.title'),
      company: t('timeline.education.bsc.company'),
      type: "education",
      selectedCourses: t('timeline.education.bsc.courses.selected', { returnObjects: true })
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
            {item.company && <p className="text-md text-blue-600 font-medium mb-3">{item.company}</p>}
            
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
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">{t('timeline.education.dtu.selectedCoursework')}</h4>
                  <ul className={`list-disc ${isLeft ? 'list-inside' : 'list-inside md:list-outside md:ml-4'} text-sm text-gray-600 space-y-1`}>
                    {item.selectedCourses.map((course, i) => (
                      <li key={i}>{course}</li>
                    ))}
                  </ul>
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
          <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500 bg-clip-text text-transparent">{t('timeline.title')}</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full"></div>
        <p className="text-gray-600 mt-4 text-lg">{t('timeline.subtitle')}</p>
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
