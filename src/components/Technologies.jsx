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
import { BiSolidFileJson } from "react-icons/bi";

const Technologies = () => {
  const technologies = [
    
    { icon: FaHtml5, name: 'HTML5', color: 'text-orange-500' },
    { icon: FaCss3Alt, name: 'CSS3', color: 'text-blue-500' },
    { icon: FaJs, name: 'JavaScript', color: 'text-yellow-400' },
    { icon: FaJava, name: 'Java', color: 'text-red-500' },
    { icon: FaPython, name: 'Python', color: 'text-blue-400' },
    { icon: SiCplusplus, name: 'C++', color: 'text-blue-600' },
    { icon: SiCsharp, name: 'C#', color: 'text-purple-500' },
    { icon: BiSolidFileJson, name: 'JSON', color: 'text-gray-400' },
    { icon: SiAndroidstudio, name: 'Android Studio', color: 'text-green-500' },
    { icon: SiVisualstudiocode, name: 'Visual Studio Code', color: 'text-blue-500' },
    { icon: FaGithub, name: 'GitHub', color: 'text-gray-300' },
    { icon: FaGitAlt, name: 'Git', color: 'text-orange-600' },
    { icon: FaFigma, name: 'Figma', color: 'text-purple-400' },
    { icon: SiAdobephotoshop, name: 'Adobe Photoshop', color: 'text-blue-500' },
    { icon: SiAdobeillustrator, name: 'Adobe Illustrator', color: 'text-orange-500' },
    { icon: SiAdobepremierepro, name: 'Adobe Premiere Pro', color: 'text-purple-500' }
   
    
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
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Technologies & <span className="text-accent-500">Tools</span>
          </h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life across different domains
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1,
                y: -5
              }}
              className="group relative mx-2 my-2"
            >
              <div 
                className="bg-white/80 dark:bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-1 aspect-square flex flex-col items-center justify-center transition-all duration-300 group-hover:border-accent-500/50 shadow-md dark:shadow-none"
                role="img"
                aria-label={tech.name}
              >
                {/* Icon container with rounded corners and elevated shadow for better light-mode visibility */}
                <div className="p-0 rounded-md bg-white/95 dark:bg-dark-800 shadow-sm dark:shadow-none flex items-center justify-center mb-1 transition-transform duration-300 group-hover:scale-105">
                  <tech.icon className={`w-10 h-10 ${tech.color}`} />
                </div>

                <span className="text-xs font-normal text-gray-400 group-hover:text-white text-center tracking-wide" style={{ fontFamily: 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial' }}>
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
          className="mt-12 grid md:grid-cols-4 gap-6"
        >
          {[
            { title: 'Programming', count: '7+ Languages', color: 'bg-blue-500/20' },
            { title: 'Development', count: '5+ Tools', color: 'bg-green-500/20' },
            { title: 'Design', count: '4+ Software', color: 'bg-purple-500/20' },
            { title: 'Productivity', count: '3+ Platforms', color: 'bg-orange-500/20' }
          ].map((category) => (
            <div key={category.title} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 text-center">
              <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mx-auto mb-3 shadow-lg` }>
                <div className="w-6 h-6 bg-accent-500 rounded-full shadow-md"></div>
              </div>
              <h3 className="font-semibold mb-1">{category.title}</h3>
              <p className="text-sm text-gray-300">{category.count}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Technologies