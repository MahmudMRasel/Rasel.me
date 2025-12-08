import React, { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const Contact = () => {
  const [titleRef, titleRevealed] = useScrollReveal({ threshold: 0.2 })
  const [formRef, formRevealed] = useScrollReveal({ threshold: 0.2 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission will be handled by Netlify
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="container mx-auto px-6 py-16">
      <h2 
        ref={titleRef}
        className={`text-4xl font-bold text-gray-900 text-center mb-12 scroll-reveal-up ${titleRevealed ? 'revealed' : ''}`}
      >
        Contact Me
      </h2>
      <div 
        ref={formRef}
        className={`max-w-xl mx-auto glass rounded-2xl p-8 backdrop-blur-lg scroll-reveal-scale ${formRevealed ? 'revealed' : ''}`}
      >
        <form 
          name="contact" 
          method="POST" 
          data-netlify="true" 
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Name:
            </label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent glass-dark backdrop-blur-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email:
            </label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent glass-dark backdrop-blur-sm"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
              Message:
            </label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent glass-dark backdrop-blur-sm"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button 
              type="submit" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact

