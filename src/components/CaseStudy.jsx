import React from 'react'
import { motion } from 'framer-motion'
import { HiCheckCircle, HiLightBulb, HiChartBar } from 'react-icons/hi'

const CaseStudy = () => {
  const caseStudy = {
    title: 'Hospital Management System',
    description: 'A comprehensive solution for managing hospital operations, patient records, and staff coordination.',
    image: '/src/assets/hospital-management.jpg',
    problem: "Hospitals faced challenges in managing patient records, appointments, and staff roles efficiently. Manual systems led to errors, delays, and security concerns.",
    solution: "Developed a robust C++ application with role-based access, secure file storage, and intuitive user interfaces for different hospital staff.",
    challenges: [
      "Implementing secure data storage without database",
      "Managing concurrent access to patient records",
      "Creating intuitive interfaces for different user roles"
    ],
    solutions: [
      "Used C++ file streams with encryption for data security",
      "Implemented record locking mechanism",
      "Designed role-specific UI workflows"
    ],
    results: [
      "Reduced record retrieval time by 70%",
      "Improved data accuracy to 99.8%",
      "Streamlined appointment scheduling process"
    ],
    technologies: ["C++", "File I/O", "OOP", "Data Structures"],
    metrics: [
      { value: "70%", label: "Faster Retrieval" },
      { value: "99.8%", label: "Data Accuracy" },
      { value: "50%", label: "Time Saved" }
    ]
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
            Case <span className="text-accent-400">Study</span>
          </h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Deep dive into one of my significant projects showcasing problem-solving and technical expertise
          </p>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass rounded-3xl overflow-hidden mb-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="p-8 lg:p-12">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-accent-400">
                {caseStudy.title}
              </h3>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {caseStudy.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {caseStudy.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-accent-500/20 text-accent-400 rounded-lg font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative h-80 lg:h-full">
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-dark-900/50 to-transparent lg:bg-gradient-to-l"></div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Problem & Solution */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                  <HiLightBulb className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold">The Problem</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <HiCheckCircle className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold">The Solution</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </motion.div>

          {/* Challenges & Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Challenges & Solutions</h3>
              <div className="space-y-4">
                {caseStudy.challenges.map((challenge, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-2 bg-red-400 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-gray-300 mb-2">
                        <strong>Challenge:</strong> {challenge}
                      </p>
                      <p className="text-accent-400">
                        <strong>Solution:</strong> {caseStudy.solutions[index]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <HiChartBar className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold">Key Results</h3>
              </div>
              <ul className="space-y-3">
                {caseStudy.results.map((result, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          {caseStudy.metrics.map((metric, index) => (
            <div key={index} className="glass rounded-2xl p-6 text-center">
              <div className="text-3xl lg:text-4xl font-bold text-accent-400 mb-2">
                {metric.value}
              </div>
              <div className="text-gray-300 font-semibold">
                {metric.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Lessons Learned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 glass rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-accent-400 text-center">
            Lessons Learned
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <HiLightBulb className="w-8 h-8 text-purple-400" />
              </div>
              <h4 className="font-semibold mb-2">Technical Insight</h4>
              <p className="text-gray-300 text-sm">
                Learned to optimize file I/O operations and implement efficient data structures for better performance.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <HiCheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <h4 className="font-semibold mb-2">Project Management</h4>
              <p className="text-gray-300 text-sm">
                Gained experience in requirement analysis and creating user-centric design for different roles.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudy