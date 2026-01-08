import React, { useState, useEffect } from 'react'
import logo from '../images/logo.svg'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from 'react-i18next'

// Logo component - image logo
const Logo = () => {
  return (
    <div className="flex items-center">
      <img 
        src={logo} 
        alt="RM Logo" 
        className="h-12 md:h-14 w-auto object-contain"
      />
    </div>
  )
}

const Navbar = () => {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Detect active section
      const sections = ['hero', 'about', 'timeline', 'skills', 'projects', 'hire-me']
      const scrollPosition = window.scrollY + window.innerHeight / 2
      
      // Check if we're near the bottom of the page
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const isNearBottom = window.scrollY + windowHeight >= documentHeight - 100
      
      if (isNearBottom) {
        setActiveSection('hire-me')
        return
      }
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    handleScroll() // Check on mount
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const navLinkClass = (section) => {
    const isActive = activeSection === section
    return `text-lg px-4 py-2 rounded-lg transition-all ${
      isActive 
        ? 'bg-blue-600 text-white shadow-md' 
        : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
    }`
  }

  const mobileNavLinkClass = (section) => {
    const isActive = activeSection === section
    return `px-4 py-2 text-sm transition-all whitespace-nowrap ${
      isActive 
        ? 'bg-blue-600 text-white font-semibold' 
        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
    }`
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-lg ${
      scrolled ? '' : ''
    }`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group overflow-visible" onClick={closeMobileMenu}>
          <Logo />
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-2">
          <a href="#hero" className={navLinkClass('hero')}>{t('nav.home')}</a>
          <a href="#about" className={navLinkClass('about')}>{t('nav.about')}</a>
          <a href="#timeline" className={navLinkClass('timeline')}>{t('nav.timeline')}</a>
          <a href="#skills" className={navLinkClass('skills')}>{t('nav.skills')}</a>
          <a href="#projects" className={navLinkClass('projects')}>{t('nav.projects')}</a>
          <a href="#hire-me" className={navLinkClass('hire-me')}>{t('nav.hire')}</a>
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-900 hover:text-blue-600 transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu - Compact Dropdown */}
      {mobileMenuOpen && (
        <>
          <div className="md:hidden fixed inset-0 top-16 bg-black/10 z-40" onClick={closeMobileMenu}></div>
          <div className="md:hidden absolute top-full right-6 mt-2 bg-white/95 backdrop-blur-md shadow-xl rounded-lg overflow-visible z-50 min-w-[120px]">
            <div className="flex flex-col py-1">
              <a href="#hero" onClick={closeMobileMenu} className={mobileNavLinkClass('hero')}>{t('nav.home')}</a>
              <a href="#about" onClick={closeMobileMenu} className={mobileNavLinkClass('about')}>{t('nav.about')}</a>
              <a href="#timeline" onClick={closeMobileMenu} className={mobileNavLinkClass('timeline')}>{t('nav.timeline')}</a>
              <a href="#skills" onClick={closeMobileMenu} className={mobileNavLinkClass('skills')}>{t('nav.skills')}</a>
              <a href="#projects" onClick={closeMobileMenu} className={mobileNavLinkClass('projects')}>{t('nav.projects')}</a>
              <a href="#hire-me" onClick={closeMobileMenu} className={mobileNavLinkClass('hire-me')}>{t('nav.hire')}</a>
              <div className="px-4 py-2 border-t border-gray-200">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  )
}

export default Navbar

