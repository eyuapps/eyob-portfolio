import React from 'react'
import { motion } from 'framer-motion'
import { HiAcademicCap, HiCalendar, HiLocationMarker } from 'react-icons/hi'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="about" className="py-20 relative bg-gradient-to-b from-white to-gray-50/80 dark:from-dark-900 dark:to-dark-800">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-accent-400/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 font-display bg-gradient-to-r from-gray-900 to-accent-600 dark:from-white dark:to-accent-400 bg-clip-text text-transparent">
            About <span className="text-accent-500">Me</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-accent-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
              {/* Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500 via-purple-500 to-blue-500 rounded-3xl p-1">
                <div className="w-full h-full bg-white dark:bg-gray-900 rounded-3xl"></div>
              </div>
              
              {/* Main Image */}
              <div className="absolute inset-2 rounded-3xl overflow-hidden">
                <img
                  src="/assets/profile.jpg"
                  alt="Eyob Tesfaye - IT Student at Dire Dawa University"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -right-4 bg-gradient-to-br from-accent-500 to-purple-600 backdrop-blur-lg px-6 py-4 rounded-2xl shadow-2xl border border-white/20"
              >
                <div className="text-center text-white">
                  <div className="text-2xl font-bold font-display">5+</div>
                  <div className="text-sm font-medium">Years Experience</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div 
              variants={itemVariants} 
              className="bg-gradient-to-br from-white/80 to-white/40 dark:from-dark-800/80 dark:to-dark-700/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-white/10 shadow-2xl"
            >
              <h3 className="text-3xl font-bold mb-6 font-display bg-gradient-to-r from-gray-900 to-accent-600 dark:from-white dark:to-accent-400 bg-clip-text text-transparent">
                Eyob Tesfaye
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-4 p-3 bg-white/50 dark:bg-white/5 rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <HiAcademicCap className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-semibold text-gray-800 dark:text-white">IT Student at Dire Dawa University</span>
                </div>
                
                <div className="flex items-center gap-4 p-3 bg-white/50 dark:bg-white/5 rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                    <HiLocationMarker className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-semibold text-gray-800 dark:text-white">Available for Remote Work & Freelance</span>
                </div>
                
                <div className="flex items-center gap-4 p-3 bg-white/50 dark:bg-white/5 rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                    <HiCalendar className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-semibold text-gray-800 dark:text-white">Open to Internships & Collaborations</span>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                I'm Eyob Tesfaye an IT student at Dire Dawa University who enjoys building simple, fast, and user friendly digital products. I work across mobile development, web design, graphics, and video editing.
                My focus is always the same keep it clean, keep it functional, keep it reliable.
              </p>
            </motion.div>

            {/* Quick Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              {[
                { number: '10+', label: 'Projects', gradient: 'from-accent-500 to-purple-500' },
                { number: '4', label: 'Skills', gradient: 'from-blue-500 to-cyan-500' },
                { number: '100%', label: 'Client Satisfaction', gradient: 'from-green-500 to-emerald-500' },
                { number: '2+', label: 'Years Learning', gradient: 'from-orange-500 to-red-500' }
              ].map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-white/60 to-white/40 dark:from-dark-800/60 dark:to-dark-700/40 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/20 dark:border-white/10 shadow-lg">
                  <div className={`text-2xl font-bold font-display bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.number}
                  </div>
                  <div className="text-sm font-semibold text-gray-600 dark:text-gray-300 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Availability */}
            <motion.div variants={itemVariants} className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-xl rounded-2xl p-6 border border-green-500/20">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-green-600 dark:text-green-400 text-lg">Currently Available</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">For freelance projects and internships</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                  <span className="text-sm font-semibold text-green-600 dark:text-green-400">Available</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About