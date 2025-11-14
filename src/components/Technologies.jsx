import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaJava, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaPython, 
  FaGitAlt, 
  FaGithub,
  FaFigma,
  FaVideo,
  FaPalette,
  FaCode
} from 'react-icons/fa'
import { 
  SiAdobephotoshop, 
  SiAdobeillustrator, 
  SiAdobepremierepro,
  SiAndroidstudio,
  SiVisualstudiocode,
  SiCplusplus,
  SiCsharp
} from 'react-icons/si'
import { BiSolidFileJson } from "react-icons/bi"

const Technologies = () => {
  const technologies = [
    { icon: FaHtml5, name: 'HTML5', color: 'text-orange-500', gradient: 'from-orange-500 to-red-500' },
    { icon: FaCss3Alt, name: 'CSS3', color: 'text-blue-500', gradient: 'from-blue-500 to-cyan-500' },
    { icon: FaJs, name: 'JavaScript', color: 'text-yellow-400', gradient: 'from-yellow-400 to-orange-500' },
    { icon: FaJava, name: 'Java', color: 'text-red-500', gradient: 'from-red-500 to-orange-500' },
    { icon: FaPython, name: 'Python', color: 'text-blue-400', gradient: 'from-blue-400 to-cyan-500' },
    { icon: SiCplusplus, name: 'C++', color: 'text-blue-600', gradient: 'from-blue-600 to-purple-600' },
    { icon: SiCsharp, name: 'C#', color: 'text-purple-500', gradient: 'from-purple-500 to-pink-500' },
    { icon: BiSolidFileJson, name: 'JSON', color: 'text-gray-400', gradient: 'from-gray-400 to-gray-600' },
    { icon: SiAndroidstudio, name: 'Android Studio', color: 'text-green-500', gradient: 'from-green-500 to-emerald-500' },
    { icon: SiVisualstudiocode, name: 'VS Code', color: 'text-blue-500', gradient: 'from-blue-500 to-cyan-500' },
    { icon: FaGithub, name: 'GitHub', color: 'text-gray-300', gradient: 'from-gray-600 to-gray-800' },
    { icon: FaGitAlt, name: 'Git', color: 'text-orange-600', gradient: 'from-orange-600 to-red-600' },
    { icon: FaFigma, name: 'Figma', color: 'text-purple-400', gradient: 'from-purple-400 to-pink-400' },
    { icon: SiAdobephotoshop, name: 'Photoshop', color: 'text-blue-500', gradient: 'from-blue-500 to-cyan-500' },
    { icon: SiAdobeillustrator, name: 'Illustrator', color: 'text-orange-500', gradient: 'from-orange-500 to-yellow-500' },
    { icon: SiAdobepremierepro, name: 'Premiere Pro', color: 'text-purple-500', gradient: 'from-purple-500 to-pink-500' }
  ]

  const categories = [
    { title: 'Programming', count: '7+ Languages', gradient: 'from-blue-500 to-cyan-500', icon: FaCode },
    { title: 'Development', count: '5+ Tools', gradient: 'from-green-500 to-emerald-500', icon: FaCode },
    { title: 'Design', count: '4+ Software', gradient: 'from-purple-500 to-pink-500', icon: FaPalette },
    { title: 'Productivity', count: '3+ Platforms', gradient: 'from-orange-500 to-red-500', icon: FaVideo }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="py-20 relative bg-gradient-to-b from-gray-50 to-white dark:from-dark-800 dark:to-dark-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-60 h-60 bg-gradient-to-r from-accent-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
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
            Technologies & <span className="text-accent-500">Tools</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-accent-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto text-lg">
            Technologies and tools I use to bring ideas to life across different domains
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-16"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1,
                y: -5
              }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-white/80 to-white/40 dark:from-dark-800/80 dark:to-dark-700/40 backdrop-blur-xl rounded-2xl p-4 aspect-square flex flex-col items-center justify-center border border-white/20 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-accent-500/30">
                {/* Icon with gradient background on hover */}
                <div className={`w-12 h-12 bg-gradient-to-br ${tech.gradient} rounded-2xl flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className="w-6 h-6 text-white" />
                </div>

                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-500 group-hover:to-purple-500 transition-all duration-300">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-white/80 to-white/40 dark:from-dark-800/80 dark:to-dark-700/40 backdrop-blur-xl rounded-3xl p-6 text-center border border-white/20 dark:border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold font-display text-lg mb-2 text-gray-900 dark:text-white">{category.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{category.count}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-white/80 to-white/40 dark:from-dark-800/80 dark:to-dark-700/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-white/10 shadow-2xl"
        >
          <h3 className="text-2xl font-bold font-display mb-8 text-center bg-gradient-to-r from-gray-900 to-accent-600 dark:from-white dark:to-accent-400 bg-clip-text text-transparent">
            Tech Stack Overview
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Frontend', techs: ['HTML5', 'CSS3', 'JavaScript'], gradient: 'from-blue-500 to-cyan-500' },
              { title: 'Backend', techs: ['Java', 'Python', 'C++'], gradient: 'from-green-500 to-emerald-500' },
              { title: 'Tools', techs: ['VS Code', 'Git', 'Android Studio'], gradient: 'from-purple-500 to-pink-500' },
              { title: 'Design', techs: ['Figma', 'Photoshop', 'Illustrator'], gradient: 'from-orange-500 to-red-500' }
            ].map((stack, index) => (
              <div key={stack.title} className="text-center group">
                <div className={`w-16 h-16 bg-gradient-to-br ${stack.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <FaCode className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold font-display text-gray-900 dark:text-white mb-3">{stack.title}</h4>
                <div className="space-y-2">
                  {stack.techs.map((tech) => (
                    <div key={tech} className="text-sm text-gray-600 dark:text-gray-300 bg-white/50 dark:bg-white/5 rounded-xl py-2 backdrop-blur-sm border border-white/20">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Technologies