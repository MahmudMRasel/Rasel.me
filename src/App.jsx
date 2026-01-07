import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-slate-50 text-gray-900 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

