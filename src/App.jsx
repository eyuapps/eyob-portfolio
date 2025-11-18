import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Certificates from './components/Certificates'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import CaseStudy from './components/CaseStudy'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/ui/BackToTop'
import FloatingShapes from './components/ui/FloatingShapes'
import './index.css'


function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Check user's system preference or saved preference
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark')
    } else {
      setDarkMode(systemPrefersDark)
    }

    // // Simulate loading
    // const timer = setTimeout(() => setIsLoading(false), 0)
    // return () => clearTimeout(timer)


  }, [])

  useEffect(() => {
    // Save theme preference
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
    
    // Update HTML class
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-accent-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-accent-400">Loading Portfolio...</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className={` min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : 'light'}`}>
      <div className="relative bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden">
        <FloatingShapes />
        
        <a href="#main" className="skip-to-content">
          Skip to Content
        </a>

        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <main className='flex-1' id="main">
          <Hero />
          <About />
          <Skills />
          <Certificates />
          <Technologies />
          <Projects />
          <CaseStudy />
          <Contact />
        </main>

        <Footer />
        <BackToTop />
      </div>
    </div>
  )
}

export default App