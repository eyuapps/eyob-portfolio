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
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-accent-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
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
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-accent-500 text-dark-900 neon-glow'
                  : 'glass text-gray-300 hover:text-white hover:neon-border'
              }`}
            >
              {filter}
            </button>
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
                whileHover={{ y: -5 }}
                className="group relative glass rounded-2xl overflow-hidden transition-all duration-300 hover:neon-border"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-accent-500/90 text-dark-900 text-sm font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-dark-700 text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-all duration-300 flex-1 justify-center"
                      >
                        <HiExternalLink className="w-4 h-4" />
                        <span className="text-sm">Live</span>
                      </a>
                    )}
                    
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all duration-300 flex-1 justify-center"
                    >
                      <HiCode className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                    
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-2 px-4 py-2 bg-accent-500/20 text-accent-400 rounded-lg hover:bg-accent-500/30 transition-all duration-300 flex-1 justify-center"
                    >
                      <HiEye className="w-4 h-4" />
                      <span className="text-sm">Details</span>
                    </button>
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