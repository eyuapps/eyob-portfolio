import React from 'react'
import { motion } from 'framer-motion'
import { HiCheckCircle, HiLightBulb, HiChartBar } from 'react-icons/hi'

const CaseStudy = () => {
  const caseStudy = {
    title: 'Hospital Management System',
    description: 'A comprehensive solution for managing hospital operations, patient records, and staff coordination.',
    image: '/assets/hospital-management.jpg',
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
      { value: "70%", label: "Faster Retrieval", gradient: "from-blue-500 to-cyan-500" },
      { value: "99.8%", label: "Data Accuracy", gradient: "from-green-500 to-emerald-500" },
      { value: "50%", label: "Time Saved", gradient: "from-purple-500 to-pink-500" }
    ]
  }

  return (
    <section className="py-20 relative bg-gradient-to-b from-white to-gray-50 dark:from-dark-900 dark:to-dark-800">
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 font-display bg-gradient-to-r from-gray-900 to-accent-600 dark:from-white dark:to-accent-400 bg-clip-text text-transparent">
            Case <span className="text-accent-500">Study</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-accent-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto text-lg">
            Deep dive into one of my significant projects showcasing problem-solving and technical expertise
          </p>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white/80 to-white/40 dark:from-dark-800/80 dark:to-dark-700/40 backdrop-blur-xl rounded-3xl overflow-hidden mb-12 border border-white/20 dark:border-white/10 shadow-2xl"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="p-8 lg:p-12">
              <h3 className="text-3xl lg:text-4xl font-bold font-display mb-6 bg-gradient-to-r from-gray-900 to-accent-600 dark:from-white dark:to-accent-400 bg-clip-text text-transparent">
                {caseStudy.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                {caseStudy.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {caseStudy.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-accent-500/20 to-purple-500/20 text-accent-600 dark:text-accent-400 rounded-2xl font-semibold border border-accent-500/20 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative h-80 lg:h-full min-h-[400px]">
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-dark-900/40 to-transparent lg:bg-gradient-to-l lg:from-dark-900/30"></div>
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 to-purple-500/10 opacity-60"></div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Problem & Solution */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-white/80 to-white/40 dark:from-dark-800/80 dark:to-dark-700/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-white/10 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <HiLightBulb className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-display text-gray-900 dark:text-white">The Problem</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                {caseStudy.problem}
              </p>
            </div>

            <div className="bg-gradient-to-br from-white/80 to-white/40 dark:from-dark-800/80 dark:to-dark-700/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-white/10 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <HiCheckCircle className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-display text-gray-900 dark:text-white">The Solution</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
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
            <div className="bg-gradient-to-br from-white/80 to-white/40 dark:from-dark-800/80 dark:to-dark-700/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold font-display mb-6 text-gray-900 dark:text-white">Challenges & Solutions</h3>
              <div className="space-y-6">
                {caseStudy.challenges.map((challenge, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="flex-shrink-0">
                      <div className="w-3 h-3 bg-gradient-to-br from-red-500 to-pink-500 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300"></div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-white/50 dark:bg-white/5 rounded-2xl p-4 backdrop-blur-sm border border-white/20">
                        <p className="text-gray-700 dark:text-gray-300 mb-3 font-medium">
                          <span className="text-red-500 dark:text-red-400 font-semibold">Challenge:</span> {challenge}
                        </p>
                        <p className="text-accent-600 dark:text-accent-400">
                          <span className="text-green-500 dark:text-green-400 font-semibold">Solution:</span> {caseStudy.solutions[index]}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="bg-gradient-to-br from-white/80 to-white/40 dark:from-dark-800/80 dark:to-dark-700/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-white/10 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <HiChartBar className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-display text-gray-900 dark:text-white">Key Results</h3>
              </div>
              <ul className="space-y-4">
                {caseStudy.results.map((result, index) => (
                  <li key={index} className="flex items-center gap-4 text-gray-600 dark:text-gray-300 group">
                    <div className="w-8 h-8 bg-gradient-to-br from-accent-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <HiCheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg font-medium">{result}</span>
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
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-white/80 to-white/40 dark:from-dark-800/80 dark:to-dark-700/40 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/20 dark:border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500"
            >
              <div className={`text-4xl lg:text-5xl font-bold font-display mb-3 bg-gradient-to-r ${metric.gradient} bg-clip-text text-transparent`}>
                {metric.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-semibold text-lg">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lessons Learned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-br from-white/80 to-white/40 dark:from-dark-800/80 dark:to-dark-700/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-white/10 shadow-2xl"
        >
          <h3 className="text-3xl font-bold font-display mb-8 text-center bg-gradient-to-r from-gray-900 to-accent-600 dark:from-white dark:to-accent-400 bg-clip-text text-transparent">
            Lessons Learned
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <HiLightBulb className="w-10 h-10 text-white" />
              </div>
              <h4 className="font-bold font-display text-lg mb-3 text-gray-900 dark:text-white">Technical Insight</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Learned to optimize file I/O operations and implement efficient data structures for better performance.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <HiCheckCircle className="w-10 h-10 text-white" />
              </div>
              <h4 className="font-bold font-display text-lg mb-3 text-gray-900 dark:text-white">Project Management</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
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