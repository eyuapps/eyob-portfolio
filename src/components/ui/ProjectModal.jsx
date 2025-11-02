import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX, HiExternalLink, HiCode } from 'react-icons/hi'

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  }

  const contentVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      y: 50,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          variants={contentVariants}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass rounded-3xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 glass rounded-full flex items-center justify-center hover:neon-glow hover:scale-110 transition-all duration-300"
            aria-label="Close modal"
          >
            <HiX className="w-5 h-5" />
          </button>

          {/* Project Image */}
          <div className="relative h-64 lg:h-80">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent"></div>
            
            {/* Title Overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-accent-500/90 text-dark-900 text-sm font-semibold rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Project Content */}
          <div className="p-6 lg:p-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Description */}
                <div>
                  <h4 className="text-xl font-bold mb-3 text-accent-400">Project Overview</h4>
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Problem & Solution */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-bold mb-3 text-red-400">The Problem</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.details.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-3 text-green-400">My Role</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.details.role}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-bold mb-3 text-accent-400">Key Features</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {project.details.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300 text-sm">
                        <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Challenges & Solutions */}
                <div>
                  <h4 className="text-lg font-bold mb-3 text-accent-400">Challenges & Solutions</h4>
                  <div className="space-y-4">
                    {project.details.challenges.map((challenge, index) => (
                      <div key={index} className="glass rounded-xl p-4">
                        <p className="text-red-300 text-sm mb-2">
                          <strong>Challenge:</strong> {challenge}
                        </p>
                        <p className="text-green-300 text-sm">
                          <strong>Solution:</strong> {project.details.solutions[index]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Project Links */}
                <div className="glass rounded-2xl p-6">
                  <h4 className="text-lg font-bold mb-4 text-accent-400">Project Links</h4>
                  <div className="space-y-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center gap-3 px-4 py-3 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-all duration-300"
                      >
                        <HiExternalLink className="w-5 h-5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center gap-3 px-4 py-3 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all duration-300"
                    >
                      <HiCode className="w-5 h-5" />
                      <span>View Code</span>
                    </a>
                  </div>
                </div>

                {/* Technologies Used */}
                <div className="glass rounded-2xl p-6">
                  <h4 className="text-lg font-bold mb-4 text-accent-400">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.details.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-2 bg-dark-700 text-gray-300 text-sm rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Info */}
                <div className="glass rounded-2xl p-6">
                  <h4 className="text-lg font-bold mb-4 text-accent-400">Project Info</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-400">Category:</span>
                      <span className="text-accent-400 ml-2">{project.category}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Status:</span>
                      <span className="text-green-400 ml-2">Completed</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Timeline:</span>
                      <span className="text-gray-300 ml-2">2-3 months</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ProjectModal