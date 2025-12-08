import React, { useState, useEffect } from 'react'
import logo from '../images/logo.png'

// Logo component - simple and clean
const Logo = () => {
  return (
    <div className="flex items-center justify-center overflow-visible">
      <img 
        src={logo} 
        alt="RM Logo" 
        className="h-10 w-auto md:h-12 md:w-auto max-w-[60px] md:max-w-[80px] object-contain transition-transform group-hover:scale-110"
        style={{ maxHeight: '100%' }}
      />
    </div>
  )
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
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
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-lg text-gray-600 hover:text-blue-600 transition-colors">Timeline</a>
          <a href="#skills" className="text-lg text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
          <a href="#projects" className="text-lg text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
          <a href="#contact" className="text-lg text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
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
          <div className="md:hidden absolute top-full right-6 mt-2 bg-white/95 backdrop-blur-md shadow-xl rounded-lg overflow-hidden z-50 min-w-[120px]">
            <div className="flex flex-col py-1">
              <a href="#about" onClick={closeMobileMenu} className="px-4 py-1.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors whitespace-nowrap">Timeline</a>
              <a href="#skills" onClick={closeMobileMenu} className="px-4 py-1.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors whitespace-nowrap">Skills</a>
              <a href="#projects" onClick={closeMobileMenu} className="px-4 py-1.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors whitespace-nowrap">Projects</a>
              <a href="#contact" onClick={closeMobileMenu} className="px-4 py-1.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors whitespace-nowrap">Contact</a>
            </div>
          </div>
        </>
      )}
    </nav>
  )
}

export default Navbar

