import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi'

const Header = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

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

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const scrollToSection = (href) => {
  const element = document.querySelector(href)
  if (!element) return

  setIsMenuOpen(false)

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const header = document.querySelector('header')
      const headerHeight = header ? header.offsetHeight : 0
      
      // Check if mobile view (you can adjust the breakpoint)
      const isMobile = window.innerWidth < 768 // md breakpoint
      const extraOffset = isMobile ? -350 : 5 // 40px for mobile, 8px for desktop
      
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
          ? 'bg-white/10 dark:bg-gray-900/10 backdrop-blur-2xl border-b border-white/20 dark:border-white/10 shadow-2xl' 
          : 'bg-transparent backdrop-blur-lg'
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dynamic Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 10, 0],
            y: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-4 left-10 w-32 h-32 bg-gradient-to-r from-accent-400/15 to-purple-500/15 rounded-full blur-xl"
          style={{
            x: `${mousePosition.x * 0.1}px`,
            y: `${mousePosition.y * 0.1}px`
          }}
        />
        <motion.div
          animate={{
            x: [0, -8, 0],
            y: [0, 6, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-4 right-10 w-28 h-28 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-xl"
          style={{
            x: `${mousePosition.x * -0.08}px`,
            y: `${mousePosition.y * -0.08}px`
          }}
        />
        
       
      </div>

      <nav className="container mx-auto px-4 py-3 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 group"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-10 h-10 bg-gradient-to-br from-accent-500 to-purple-500 rounded-2xl shadow-lg flex items-center justify-center relative overflow-hidden"
            >
              {/* Animated shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: ['-100%', '200%', '-100%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-white font-bold text-sm relative z-10">ET</span>
            </motion.div>
            <motion.span 
              className="text-xl font-bold font-display bg-gradient-to-r from-gray-900 to-accent-600 dark:from-white dark:to-accent-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
            >
              YOBTEX
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
               
                whileTap={{ scale: 0.75 }}
                className={`group relative px-4 py-2.5 transition-all duration-300 font-medium  ${
                  activeSection === item.href
                    ? ' text-accent-500'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900  '
                }`}
              >
                <span className="relative inline-block">
                  {item.name}

<motion.div
  layout
  className="relative px-3 py-1 cursor-pointer"
  onClick={() => setActiveSection(item.href)}
>
  <span>{item.label}</span>

  {activeSection === item.href && (
    <motion.div
      layoutId="activeSection"
      className="absolute left-0 right-0 -bottom-1 h-1 bg-gradient-to-r from-accent-500 to-purple-500 rounded-full"
      transition={{ 
  type: "spring", 
  stiffness: 380, 
  damping: 30 
}}

    />
  )}
</motion.div>

                  {/* Hover effect
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-accent-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    layoutId="hoverBg"
                  /> */}
                </span>
              </motion.button>
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
              {/* Mobile menu background elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-accent-500/10 to-purple-500/10 rounded-full blur-2xl"
                />
              </div>

              <div className="py-2 space-y-1 relative z-10">
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