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
      description: 'Editing and producing engaging video content',
      level: 'Intermediate',
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

        {/* Progress Overview */}
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div key={skill.title} className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-3">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#333"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke={skill.level === 'Advanced' ? '#00d4ff' : '#0099ff'}
                      strokeWidth="3"
                      strokeDasharray={`${skill.level === 'Advanced' ? 85 : 70}, 100`}
                    />
                    <text x="18" y="20.5" className="text-[10px] fill-white font-bold">
                      {skill.level === 'Advanced' ? '85%' : '70%'}
                    </text>
                  </svg>
                </div>
                <h4 className="font-semibold text-sm">{skill.title}</h4>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills