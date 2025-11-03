import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'  // Add AnimatePresence here
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi'

const Header = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // activeSection stores the href (e.g. '#home') to match navItems[i].href
  const [activeSection, setActiveSection] = useState('#home')

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header')
      const offset = header ? header.offsetHeight + 12 : 100

      // Find the last section whose top is above the offset (closest to top)
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

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (!element) return

    // Close the mobile menu first so the page layout returns to its final state.
    // Then perform the scroll on the next paint to ensure the computed position
    // is correct (avoids computing while the mobile nav is open which shifts layout).
    setIsMenuOpen(false)

    // Use two RAFs to run after the DOM has updated and the menu collapse animation
    // has had a chance to change layout. This is more reliable than a fixed timeout.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const header = document.querySelector('header')
        const headerHeight = header ? header.offsetHeight : 0
        const top = element.getBoundingClientRect().top + window.pageYOffset - headerHeight - 8
        window.scrollTo({ top, behavior: 'smooth' })

        // Immediately set active so the underline appears on click
        setActiveSection(href)

        // Update the URL hash without causing an instant jump
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
className="fixed top-0 left-0 right-0 z-50 glass-dark border-b"    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
              <img
                src="/assets/logo.png"
                alt="Logo"
                className="h-8 md:h-9 lg:h-10 object-contain"
              />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`group relative px-3 py-2 transition-all duration-300 ${
                  activeSection === item.href
                    ? 'text-accent-400 font-semibold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <span className="relative inline-block">
                  {item.name}

                  {/* Hover-only short underline placed relative to the text */}
                  <span
                    className="absolute -bottom-0.5 w-8 h-1 rounded-full bg-accent-400/25 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center"
                    style={{ left: 'calc(50% - 10px)' }}
                    aria-hidden="true"
                  />

                  {/* Active short underline (centered under text) */}
                  {activeSection === item.href && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-0.5 w-8 md:w-10 lg:w-12 h-1 rounded-full bg-accent-400"
                      style={{ left: 'calc(50% - 10px)' }}
                    />
                  )}
                </span>
              </button>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-accent-500/50 transition-all duration-300"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <HiSun className="w-5 h-5" /> : <HiMoon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-white/5 border border-white/10"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <HiSun className="w-5 h-5" /> : <HiMoon className="w-5 h-5" />}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-accent-500/50 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden"
            >
              <div className="py-2 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full text-left px-4 py-3 transition-all duration-300 ${
                      activeSection === item.href
                        ? 'bg-accent-500/20 text-accent-400 font-semibold'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </button>
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