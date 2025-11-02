import React from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown, HiMail } from 'react-icons/hi'

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background with subtle parallax */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-100 to-accent-100 dark:from-dark-900 dark:via-dark-800 dark:to-accent-900/20"></div>
        
        {/* Animated background shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold mb-6"
            >
              <span className="block">Eyob</span>
              <span className="block text-accent-400 text-glow">Tesfaye</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl lg:text-2xl text-gray-300 mb-8"
            >
              IT Student — Mobile App & Web Developer, Graphics & Video
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => scrollToSection('#projects')}
                className="group relative px-8 py-4 bg-accent-500 text-dark-900 rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:neon-glow hover:scale-105"
              >
                <span className="relative z-10">View Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-400 to-accent-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>

              <button
                onClick={() => scrollToSection('#contact')}
                className="group relative px-8 py-4 glass rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:neon-border hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <HiMail className="w-5 h-5" />
                  Contact Me
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
              {/* Glass card background */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute inset-0 glass rounded-3xl rotate-6"
              ></motion.div>
              
              {/* Profile image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-accent-500/30"
              >
                <img
                  src="/assets/profile.jpg"
                  alt="Eyob Tesfaye - IT Student and Developer"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-lg"
              >
                <span className="text-sm font-semibold text-accent-400">Available for Work</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection('#about')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 glass rounded-full hover:neon-glow transition-all duration-300"
            aria-label="Scroll to about section"
          >
            <HiArrowDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero