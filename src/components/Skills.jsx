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
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: HiCode,
      title: 'Website Building',
      description: 'Creating responsive, performant web applications with clean code',
      level: 'Advanced',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: HiPhotograph,
      title: 'Graphics Designing',
      description: 'Designing visually appealing graphics and user interfaces',
      level: 'Intermediate',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: HiFilm,
      title: 'Video Editing',
      description: 'Editing and producing engaging video content ',
      level: 'Intermediate\n',
      color: 'from-orange-500 to-red-500'
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
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-accent-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
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
                y: -5
              }}
              className="group relative"
            >
              <div className="relative glass rounded-2xl p-6 h-full transition-all duration-300 group-hover:neon-border">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <skill.icon className={`w-8 h-8 text-${skill.color.split('-')[1]}-400`} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent-400 transition-colors duration-300">
                    {skill.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {skill.description}
                  </p>
                  
                  {/* Level Indicator */}
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                      skill.level === 'Advanced' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-blue-500/20 text-blue-400'
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
                              ? `bg-${skill.color.split('-')[1]}-400`
                              : 'bg-gray-600'
                          }`}
                          animate={{
                            scale: [1, 1.2, 1]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: dot * 0.2
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

        {/* Progress Overview — modern horizontal progress bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 glass rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-accent-400">
            Skill Development Journey
          </h3>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => {
              const percent = skill.level === 'Advanced' ? 85 : 70
              return (
                <div key={skill.title} className="p-4 bg-transparent">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-accent-500 flex-shrink-0" />
                      <h4 className="font-semibold text-sm text-left">{skill.title}</h4>
                    </div>
                    <div className="text-sm font-medium text-gray-300 tabular-nums">{percent}%</div>
                  </div>

                  <div className="w-full bg-dark-700/60 dark:bg-white/5 h-3 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${percent}%`, background: 'linear-gradient(90deg, rgb(var(--accent-500)), rgb(var(--accent-400)))' }}
                      role="progressbar"
                      aria-valuenow={percent}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>

                  {/* Description above level (muted) */}
                  <div className="mt-3 text-center">
                    <p className="text-xs text-gray-400 leading-snug">{skill.description}</p>
                  </div>

                  {/* Level pill below the description with gradient background */}
                  <div className="mt-3 flex items-center justify-center">
                    <span
                      className="px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wide shadow-sm"
                      style={{
                        background: 'linear-gradient(90deg, rgb(var(--accent-500)), rgb(var(--accent-400)))',
                        color: 'white'
                      }}
                    >
                      {skill.level}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills