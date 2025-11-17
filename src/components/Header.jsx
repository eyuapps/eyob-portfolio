import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi'

const Header = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const [language, setLanguage] = useState('en')


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 20)

      const header = document.querySelector('header')
      const offset = header ? header.offsetHeight + 12 : 100

      let current = -1
      navItems.forEach((item, idx) => {
        const el = document.querySelector(item.href)
        if (!el) return
        const top = el.getBoundingClientRect().top
        if (top <= offset) current = idx
      })

      if (current !== -1) {
        setActiveSection(navItems[current].href)
      }
    }


  // const googleTranslateScript = document.createElement("script")
  // googleTranslateScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
  // document.body.appendChild(googleTranslateScript)

  // window.googleTranslateElementInit = () => {
  //   new window.google.translate.TranslateElement({
  //     pageLanguage: "en",
  //     includedLanguages: "en,am",
  //     autoDisplay: false
  //   }, "google_translate_element")
  // }






    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  



// useEffect(() => {
//   const int = setInterval(() => {
//     const select = document.querySelector(".goog-te-combo")
//     if (select) {
//       select.value = "am"
//       select.dispatchEvent(new Event("change"))
//       clearInterval(int)
//     }
//   }, 500)
// }, [])

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (!element) return

    setIsMenuOpen(false)

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const header = document.querySelector('header')
        const headerHeight = header ? header.offsetHeight : 0
        
        const isMobile = window.innerWidth < 768
        const extraOffset = isMobile ? -350 : 5
        
        const top = element.getBoundingClientRect().top + window.pageYOffset - headerHeight - extraOffset
        window.scrollTo({ top, behavior: 'smooth' })

        setActiveSection(href)

        try {
          history.pushState(null, '', href)
        } catch (e) {
          // ignore if not allowed
        }
      })
    })
  }

  return (
   <motion.header
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    isScrolled 
      ? 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 shadow-2xl' 
      : 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl'
  }`}
>

  {/* <div id="google_translate_element" style={{ display: "none" }}></div> */}

      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo Section - Compact but large logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('#home')}
          >
            {/* Compact Logo Container with Large Image */}
            <div className="flex items-center justify-center">
              {/* Logo Images - Large size but compact container */}
              <div className="relative">
                {/* Light Mode Logo */}
                <img 
                  src="assets/logo_black.png"
                  alt="YOBTEX Logo" 
                  className={`w-1/2 h-[70px] object-contain transition-opacity duration-300 -my-2 ${
                    darkMode ? 'opacity-0 absolute' : 'opacity-100'
                  }`}
                />
                
                {/* Dark Mode Logo */}
                <img 
                  src="assets/logo_white.png"
                  alt="YOBTEX Logo" 
                  className={`w-1/2 h-[70px] object-contain transition-opacity duration-300 -my-2 ${
                    darkMode ? 'opacity-100' : 'opacity-0 absolute'
                  }`}
                />
              </div>
            </div>

          
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                className="relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`px-4 py-2.5 transition-all duration-300 font-medium ${
                    activeSection === item.href
                      ? 'text-accent-500'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {item.name}
                </button>

              {activeSection === item.href && (
  <motion.div
    layoutId="activeSection"
    className="absolute bottom-0 left-0 right-0 mx-auto w-2/3 h-1 bg-gradient-to-r from-accent-500 to-purple-500 rounded-full"
    transition={{ 
      type: "spring", 
      stiffness: 380, 
      damping: 30 
    }}
  />
)}
              </motion.div>
            ))}

            {/* Dark Mode Toggle */}
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/20 dark:bg-dark-800/20 backdrop-blur-sm rounded-2xl border border-white/30 dark:border-white/10 hover:border-accent-500/50 transition-all duration-300 shadow-lg hover:shadow-xl group"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <motion.div
                animate={{ rotate: darkMode ? 180 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {darkMode ? (
                  <HiSun className="w-5 h-5 text-yellow-400 group-hover:text-yellow-300" />
                ) : (
                  <HiMoon className="w-5 h-5 text-gray-700 group-hover:text-gray-900" />
                )}
              </motion.div>
            </motion.button>

            {/* Language Selector
<div className="relative">
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={() => setLanguage(prev => prev === 'en' ? 'am' : 'en')}
    className="p-2 rounded-full border border-white/30 dark:border-white/10 bg-white/20 dark:bg-dark-800/20 backdrop-blur-sm shadow-lg hover:border-accent-500/50 transition-all duration-300"
  >
    <img
      src="https://flagcdn.com/w20/et.png"
      alt="Ethiopia Flag"
      className="w-6 h-6 rounded-full object-cover"
    />
  </motion.button>

  {language !== 'en' && (
    <div className="absolute top-12 right-0 w-32 bg-white dark:bg-gray-800 shadow-xl rounded-xl border border-gray-200 dark:border-gray-700 p-2 text-sm">
      <button
        onClick={() => setLanguage('en')}
        className="w-full text-left px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
      >
        English
      </button>

      <button
        onClick={() => setLanguage('am')}
        className="w-full text-left px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
      >
        አማርኛ
      </button>
    </div>
  )}
</div> */}

          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/20 dark:bg-dark-800/20 backdrop-blur-sm rounded-2xl border border-white/30 dark:border-white/10 shadow-lg"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? (
                <HiSun className="w-5 h-5 text-yellow-400" />
              ) : (
                <HiMoon className="w-5 h-5 text-gray-700" />
              )}
            </motion.button>
            
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/20 dark:bg-dark-800/20 backdrop-blur-sm rounded-2xl border border-white/30 dark:border-white/10 hover:border-accent-500/50 transition-all duration-300 shadow-lg group"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiX className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-accent-500" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiMenu className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-accent-500" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 bg-white/20 dark:bg-dark-800/20 backdrop-blur-2xl border border-white/30 dark:border-white/10 rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="py-2 space-y-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full text-left px-6 py-4 transition-all duration-300 font-medium group ${
                      activeSection === item.href
                        ? 'bg-gradient-to-r from-accent-500/30 to-purple-500/30 text-accent-500 border-r-2 border-accent-500'
                        : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/20 dark:hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <motion.div
                        className={`w-2 h-2 rounded-full ${
                          activeSection === item.href 
                            ? 'bg-gradient-to-r from-accent-500 to-purple-500' 
                            : 'bg-gray-400 group-hover:bg-accent-400'
                        }`}
                        animate={{
                          scale: activeSection === item.href ? [1, 1.2, 1] : 1
                        }}
                        transition={{
                          duration: 2,
                          repeat: activeSection === item.href ? Infinity : 0
                        }}
                      />
                      <span className="font-display">{item.name}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header