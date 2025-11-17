import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiExternalLink, HiDownload, HiAcademicCap, HiCalendar } from 'react-icons/hi'

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  const certificates = [
    {
      id: 1,
      title: 'Hackaton Competition Ranked Certificate',
      issuer: 'Dire Dawa University',
      date: '2025',
      image: '/assets/certificates/hackaton certificate.jpg',
      skills: ['React', 'JS','UI'],
      downloadUrl: '/assets/certificates/hackaton certificate.jpg',
      category: 'Competition' 
    },
    {
      id: 2,
      title: 'E-commerce Website Development Competition', 
      issuer: 'Solve IT',
      date: '2023',
      image: '/assets/certificates/solveit certificate.jpg',
      skills: ['Wordpress', 'Innovative idea'],
      downloadUrl: '/assets/certificates/solveit certificate.jpg',
      category: 'Competition'
    },
    {
      id: 3,
      title: '"Timhirt Bete Beje" Ranked 1st Certificate',
      issuer: 'Dire Dawa TVET Agency',
      date: '2021',
      image: '/assets/certificates/technic cirtifcate.png',
      skills: ['Android', 'Java', 'Firebase'],
      downloadUrl: '/assets/certificates/technic cirtifcate.png',
      category: 'Competition'
    },
    {
      id: 4,
      title: 'Python Development Completion Certificate',
      issuer: 'Programming Hub',
      date: '2021',
      image: '/assets/certificates/python certificate.png',
      skills: ['Python', 'Pandas', 'NumPy', 'Data Visualization'],
      downloadUrl: '/assets/certificates/python certificate.png',
      category: 'Course Compeletion'
    },
    {
      id: 5,
      title: 'Web Development Certificate',
      issuer: 'ETCoders (5 Million Coders)',
      date: '2022',
      image: '/assets/certificates/web development certificate.png',
      skills: ['HTML', 'CSS', 'Javascript'],
      downloadUrl: '/assets/certificates/web development certificate.png',
      category: 'Course Compeletion'
    },
    {
      id: 6,
      title: 'Basic Computer Skills Certificate',
      issuer: 'EBS Computer Training Center',
      date: '2015',
      image: '/assets/certificates/ebs computer certificate.png',
      skills: ['MS Word', 'MS Excel', 'MS PowerPoint', 'MS Publisher'],
      downloadUrl: '/assets/certificates/ebs computer certificate.png',
      category: 'Course Compeletion'
    }
  ]

  const categories = ['All', 'Web Development', 'Mobile Development', 'Design', 'Data Science', 'Cloud', 'Project Management']

  const [activeCategory, setActiveCategory] = useState('All')

  const filteredCertificates = activeCategory === 'All' 
    ? certificates 
    : certificates.filter(cert => cert.category === activeCategory)

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
    <section id="certificates" className="py-20 relative bg-gradient-to-b from-white to-gray-50 dark:from-dark-800 dark:to-dark-900">
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
            Certificates & <span className="text-accent-500">Achievements</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-accent-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto text-lg">
            Professional certifications and achievements that validate my skills and expertise across various domains
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-accent-500 to-purple-500 text-white shadow-lg shadow-accent-500/25'
                  : 'bg-white/60 dark:bg-dark-800/60 backdrop-blur-sm text-gray-700 dark:text-gray-300 border border-white/20 dark:border-white/10 hover:shadow-lg'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredCertificates.map((certificate) => (
              <motion.div
                key={certificate.id}
                variants={itemVariants}
                layout
                initial="hidden"
                animate="visible"
                exit="hidden"
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-white/80 to-white/40 dark:from-dark-800/80 dark:to-dark-700/40 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 dark:border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 h-full flex flex-col">
                  
                  {/* Certificate Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-gradient-to-r from-accent-500 to-purple-500 text-white text-xs font-semibold rounded-2xl shadow-lg">
                        {certificate.category}
                      </span>
                    </div>

                    {/* Issuer Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                        <HiAcademicCap className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Certificate Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold font-display mb-3 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-500 group-hover:to-purple-500 transition-all duration-300">
                      {certificate.title}
                    </h3>

                    <div className="flex items-center gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <HiCalendar className="w-4 h-4 text-accent-500" />
                        <span>{certificate.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <span className="font-semibold">{certificate.issuer}</span>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {certificate.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-white/50 dark:bg-white/5 backdrop-blur-sm text-gray-700 dark:text-gray-300 text-xs rounded-xl border border-white/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-auto pt-4">
                     
                      <button
                        onClick={() => setSelectedCertificate(certificate)}
                        className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-accent-500 to-purple-500 text-white rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300 flex-1 justify-center group/btn"
                      >
                        <HiDownload className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                        <span className="text-sm font-semibold">View</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredCertificates.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 text-lg">
              No certificates found in the {activeCategory} category.
            </div>
          </motion.div>
        )}

        {/* Certificate Modal */}
        <AnimatePresence>
          {selectedCertificate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelectedCertificate(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-gradient-to-br from-white/90 to-white/40 dark:from-dark-800/90 dark:to-dark-700/40 backdrop-blur-xl rounded-3xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/20 dark:border-white/10 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <button
                    onClick={() => setSelectedCertificate(null)}
                    className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-200"
                  >
                    <HiExternalLink className="w-4 h-4 rotate-45" />
                  </button>

                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    className="w-full h-64 object-cover rounded-2xl mb-6 shadow-lg"
                  />

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold font-display text-gray-900 dark:text-white">
                      {selectedCertificate.title}
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-white/5 rounded-2xl">
                        <HiAcademicCap className="w-5 h-5 text-accent-500" />
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">Issuer</p>
                          <p className="text-gray-600 dark:text-gray-300">{selectedCertificate.issuer}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-white/5 rounded-2xl">
                        <HiCalendar className="w-5 h-5 text-accent-500" />
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">Issued</p>
                          <p className="text-gray-600 dark:text-gray-300">{selectedCertificate.date}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Skills Covered</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCertificate.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 bg-gradient-to-r from-accent-500/20 to-purple-500/20 text-accent-600 dark:text-accent-400 rounded-xl text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      
                      <a
                        href={selectedCertificate.downloadUrl}
                        download
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-500 to-purple-500 text-white rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300 flex-1 justify-center font-semibold"
                      >
                        <HiDownload className="w-4 h-4" />
                        Download PDF
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Certificates