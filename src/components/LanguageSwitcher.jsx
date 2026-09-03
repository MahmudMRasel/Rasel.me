import React, { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'da', name: 'Dansk', flag: '🇩🇰' },
    { code: 'bn', name: 'বাংলা', flag: '🇧🇩' }
  ]

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0]

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode)
    setIsOpen(false)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close dropdown when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isOpen])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 glass px-3 py-1.5 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all transform hover:scale-105 shadow-sm hover:shadow-md border border-white/40 text-sm"
      >
        <span className="text-2xl inline-flex items-center justify-center min-w-[24px]" style={{ fontFamily: 'Segoe UI Emoji, Apple Color Emoji, Noto Color Emoji, Arial, sans-serif', lineHeight: '1' }}>{currentLanguage.flag}</span>
        <span className="font-medium text-gray-800 text-sm">{currentLanguage.name}</span>
        <svg 
          className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 bg-white/95 backdrop-blur-xl rounded-lg shadow-2xl border border-gray-200 overflow-hidden z-[60]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200 transition-all text-sm ${
                i18n.language === lang.code ? 'bg-blue-100/70' : ''
              }`}
            >
              <span className="text-2xl inline-flex items-center justify-center min-w-[28px]" style={{ fontFamily: 'Segoe UI Emoji, Apple Color Emoji, Noto Color Emoji, Arial, sans-serif', lineHeight: '1' }}>{lang.flag}</span>
              <span className="font-medium text-gray-800 text-sm">{lang.name}</span>
              {i18n.language === lang.code && (
                <svg className="w-4 h-4 ml-auto text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher
