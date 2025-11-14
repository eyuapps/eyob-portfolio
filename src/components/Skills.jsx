import React from 'react'
import { motion } from 'framer-motion'
import { 
  HiDeviceMobile, 
  HiCode, 
  HiPhotograph, 
  HiFilm 
} from 'react-icons/hi'

const Skills = () => {
  const skills = [
    {
      icon: HiDeviceMobile,
      title: 'Mobile App Development',
      description: 'Building cross-platform mobile applications with modern frameworks',
      level: 'Advanced',
      color: 'from-blue-500 to-cyan-500',
      progress: 85
    },
    {
      icon: HiCode,
      title: 'Website Building',
      description: 'Crafting responsive, modern websites and clean user interfaces.',
      level: 'Advanced',
      color: 'from-purple-500 to-pink-500',
      progress: 90
    },
    {
      icon: HiPhotograph,
      title: 'Graphics Designing',
      description: 'Designing visually appealing graphics and user interfaces',
      level: 'Intermediate',
      color: 'from-green-500 to-emerald-500',
      progress: 75
    },
    {
      icon: HiFilm,
      title: 'Video Editing',
      description: 'Editing and producing engaging video content',
      level: 'Intermediate',
      color: 'from-orange-500 to-red-500',
      progress: 70
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
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
    <section id="skills" className="py-20 relative bg-gradient-to-b from-gray-50 to-white dark:from-dark-800 dark:to-dark-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-60 h-60 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
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
            My <span className="text-accent-500">Skills</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-accent-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto text-lg">
            Specialized in multiple domains with focus on delivering high-quality, 
            performant solutions across different platforms.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                y: -8
              }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-white/80 to-white/40 dark:from-dark-800/80 dark:to-dark-700/40 backdrop-blur-xl rounded-3xl p-6 h-full border border-white/20 dark:border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500">
                {/* Animated Gradient Border on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
                
                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold font-display mb-3 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/80 transition-all duration-300">
                    {skill.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
                    {skill.description}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Progress</span>
                      <span className="text-sm font-bold bg-gradient-to-r from-accent-500 to-purple-500 bg-clip-text text-transparent">
                        {skill.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200/50 dark:bg-white/10 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.progress}%` }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} shadow-lg`}
                      />
                    </div>
                  </div>
                  
                  {/* Level Badge */}
                  <div className="flex items-center justify-between mt-4">
                    <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
                      skill.level === 'Advanced' 
                        ? 'bg-green-500/20 text-green-600 dark:text-green-400' 
                        : 'bg-blue-500/20 text-blue-600 dark:text-blue-400'
                    }`}>
                      {skill.level}
                    </span>
                    
                    {/* Animated dots */}
                    <div className="flex space-x-1">
                      {[1, 2, 3].map((dot) => (
                        <motion.div
                          key={dot}
                          className={`w-2 h-2 rounded-full ${
                            dot <= (skill.level === 'Advanced' ? 3 : 2)
                              ? `bg-gradient-to-r ${skill.color}`
                              : 'bg-gray-300 dark:bg-gray-600'
                          }`}
                          animate={{
                            scale: [1, 1.3, 1]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: dot * 0.3
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-white/80 to-white/40 dark:from-dark-800/80 dark:to-dark-700/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-white/10 shadow-2xl"
        >
          <h3 className="text-3xl font-bold font-display mb-8 text-center bg-gradient-to-r from-gray-900 to-accent-600 dark:from-white dark:to-accent-400 bg-clip-text text-transparent">
            Skill Development Journey
          </h3>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => (
              <div key={skill.title} className="text-center group">
                <div className="relative inline-block mb-4">
                  <div className={`w-20 h-20 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <h4 className="font-bold font-display text-gray-900 dark:text-white mb-2 text-lg">
                  {skill.title}
                </h4>
                
                <div className="text-2xl font-bold font-display bg-gradient-to-r from-accent-500 to-purple-500 bg-clip-text text-transparent mb-2">
                  {skill.progress}%
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {skill.description}
                </p>
                
                <div className="mt-3">
                  <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
                    skill.level === 'Advanced' 
                      ? 'bg-green-500/20 text-green-600 dark:text-green-400' 
                      : 'bg-blue-500/20 text-blue-600 dark:text-blue-400'
                  }`}>
                    {skill.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills