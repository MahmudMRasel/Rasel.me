import React from 'react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()
  
  return (
    <footer className="bg-gray-800 text-white text-center p-6 mt-12">
      <div className="container mx-auto px-6">
        <p>{t('footer.copyright')}</p>
        <div className="flex justify-center items-center space-x-4 mt-4">
          <a 
            href="https://linkedin.com/in/md-rasel-mahmud-08"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            {t('footer.links.linkedin')}
          </a>
          <span className="text-gray-600">|</span>
          <a 
            href="https://github.com/MahmudMRasel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            {t('footer.links.github')}
          </a>
          <span className="text-gray-600">|</span>
          <a 
            href="mailto:raselm2805@gmail.com" 
            className="hover:text-blue-400 transition-colors"
          >
            {t('footer.links.email')}
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

