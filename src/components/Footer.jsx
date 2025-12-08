import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-6 mt-12">
      <div className="container mx-auto px-6">
        <p>&copy; 2025 Md Rasel Mahmud. All rights reserved.</p>
        <div className="flex justify-center items-center space-x-4 mt-4">
          <a 
            href="mailto:r.mahmud2207@gmail.com" 
            className="hover:text-blue-400 transition-colors"
          >
            Email
          </a>
          <span className="text-gray-600">|</span>
          <a 
            href="https://www.linkedin.com/in/r-mahmud7/" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

