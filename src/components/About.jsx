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
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-accent-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto"></div>
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
              <div className="absolute inset-0 bg-accent-500/20 rounded-3xl rotate-6"></div>
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-accent-500/30">
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
                className="absolute -bottom-4 -right-4 glass px-6 py-3 rounded-lg neon-glow"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-400">5+</div>
                  <div className="text-sm">Years Experience</div>
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
            <motion.div variants={itemVariants} className="glass rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4 text-accent-400">Eyob Tesfaye</h3>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <HiAcademicCap className="w-5 h-5 text-accent-400" />
                  <span>IT Student at Dire Dawa University</span>
                </div>
                
                <div className="flex items-center gap-3 text-gray-300">
                  <HiLocationMarker className="w-5 h-5 text-accent-400" />
                  <span>Available for Remote Work & Freelance</span>
                </div>
                
                <div className="flex items-center gap-3 text-gray-300">
                  <HiCalendar className="w-5 h-5 text-accent-400" />
                  <span>Open to Internships & Collaborations</span>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300">
                I'm Eyob, an IT student at Dire Dawa University.eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee I build lightweight, reliable mobile apps 
                and clean web interfaces. I also design graphics and edit videos — everything I ship is 
                practical and optimized for performance.
              </p>
            </motion.div>

            {/* Quick Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-accent-400">10+</div>
                <div className="text-sm text-gray-300">Projects</div>
              </div>
              
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-accent-400">4</div>
                <div className="text-sm text-gray-300">Skills</div>
              </div>
              
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-accent-400">100%</div>
                <div className="text-sm text-gray-300">Client Satisfaction</div>
              </div>
              
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-accent-400">2+</div>
                <div className="text-sm text-gray-300">Years Learning</div>
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div variants={itemVariants} className="glass rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-accent-400">Currently Available</h4>
                  <p className="text-sm text-gray-300">For freelance projects and internships</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-400">Available</span>
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