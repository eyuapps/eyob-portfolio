import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiExternalLink, HiCode, HiEye } from 'react-icons/hi'
import ProjectModal from './ui/ProjectModal'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filters = ['All', 'Mobile', 'Web', 'Graphics', 'Video']

  const projects = [
    {
      id: 1,
      title: 'Hospital Management System',
      description: 'A comprehensive hospital management system with doctor and receptionist roles, patient records, and file storage capabilities.',
      category: 'Mobile',
      technologies: ['C++', 'File I/O', 'OOP'],
      image: '/assets/hospital-management.jpg',
      liveUrl: null,
      codeUrl: 'https://github.com/your-username/hospital-management',
      gradient: 'from-blue-500 to-cyan-500',
      details: {
        problem: "Need for an efficient hospital management system to handle patient records, appointments, and staff roles.",
        role: "Full-stack Developer & System Architect",
        technologies: ["C++", "File Storage System", "Object-Oriented Programming"],
        features: ["Doctor & Receptionist roles", "Patient record management", "Appointment scheduling", "File-based data storage"],
        challenges: ["Implementing secure file storage", "Managing user roles and permissions", "Optimizing data retrieval"],
        solutions: ["Used C++ file streams for data persistence", "Implemented role-based access control", "Created efficient data structures for quick access"]
      }
    },
    {
      id: 2,
      title: 'Modern Dashboard',
      description: 'A responsive admin dashboard built with React and Ant Design, featuring data visualization and user management.',
      category: 'Web',
      technologies: ['React', 'Ant Design', 'JavaScript'],
      image: '/assets/modern-dashboard.jpg',
      liveUrl: 'https://your-dashboard-demo.netlify.app',
      codeUrl: 'https://github.com/your-username/modern-dashboard',
      gradient: 'from-purple-500 to-pink-500',
      details: {
        problem: "Businesses needed a modern, responsive dashboard to monitor metrics and manage users effectively.",
        role: "Frontend Developer & UI Designer",
        technologies: ["React", "Ant Design", "Chart.js", "CSS3"],
        features: ["Responsive design", "Data visualization charts", "User management", "Dark/light mode"],
        challenges: ["Creating responsive data visualizations", "Ensuring cross-browser compatibility", "Optimizing performance"],
        solutions: ["Used Chart.js for responsive graphs", "Implemented CSS Grid and Flexbox", "Optimized React components with memoization"]
      }
    },
    {
      id: 3,
      title: 'POS System Concept',
      description: 'Point of Sale system concept for kitchen materials shop, designed for both mobile and desktop platforms.',
      category: 'Web',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: '/assets/pos-concept.jpg',
      liveUrl: null,
      codeUrl: 'https://github.com/your-username/pos-system',
      gradient: 'from-green-500 to-emerald-500',
      details: {
        problem: "Small businesses needed an affordable POS system tailored for kitchen materials inventory and sales.",
        role: "Full-stack Developer & UX Designer",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        features: ["Inventory management", "Sales tracking", "Receipt generation", "Multi-platform support"],
        challenges: ["Designing intuitive inventory management", "Handling real-time sales data", "Creating responsive design"],
        solutions: ["Developed custom React components", "Used Socket.io for real-time updates", "Implemented Progressive Web App features"]
      }
    }
  ]

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

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
    <section id="projects" className="py-20 relative bg-gradient-to-b from-gray-50 to-white dark:from-dark-800 dark:to-dark-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-60 h-60 bg-gradient-to-r from-accent-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 font-display bg-gradient-to-r from-gray-900 to-accent-600 dark:from-white dark:to-accent-400 bg-clip-text text-transparent">
            My <span className="text-accent-500">Projects</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-accent-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto text-lg">
            A collection of projects showcasing my skills across different domains and technologies
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-accent-500 to-purple-500 text-white shadow-lg shadow-accent-500/25'
                  : 'bg-white/60 dark:bg-dark-800/60 backdrop-blur-sm text-gray-700 dark:text-gray-300 border border-white/20 dark:border-white/10 hover:shadow-lg'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                initial="hidden"
                animate="visible"
                exit="hidden"
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-white/80 to-white/40 dark:from-dark-800/80 dark:to-dark-700/40 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 dark:border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 h-full flex flex-col">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-gradient-to-r from-accent-500 to-purple-500 text-white text-sm font-semibold rounded-2xl shadow-lg">
                        {project.category}
                      </span>
                    </div>

                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold font-display mb-3 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-500 group-hover:to-purple-500 transition-all duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed flex-1">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-white/50 dark:bg-white/5 backdrop-blur-sm text-gray-700 dark:text-gray-300 text-xs rounded-xl border border-white/20 dark:border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-auto">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300 flex-1 justify-center group"
                        >
                          <HiExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                          <span className="text-sm font-semibold">Live</span>
                        </a>
                      )}
                      
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300 flex-1 justify-center group"
                      >
                        <HiCode className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-sm font-semibold">Code</span>
                      </a>
                      
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-accent-500 to-purple-500 text-white rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300 flex-1 justify-center group"
                      >
                        <HiEye className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-sm font-semibold">Details</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 text-lg">
              No projects found in the {activeFilter} category.
            </div>
          </motion.div>
        )}

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects