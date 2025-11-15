import React from 'react'
import { motion } from 'framer-motion'
import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: SiGithub,
      url: 'https://github.com/your-username',
      label: 'GitHub',
      gradient: 'from-gray-700 to-gray-900'
    },
    {
      icon: SiLinkedin,
      url: 'https://linkedin.com/in/your-profile',
      label: 'LinkedIn',
      gradient: 'from-blue-600 to-blue-800'
    },
    {
      icon: SiGmail,
      url: 'mailto:youremail@example.com',
      label: 'Email',
      gradient: 'from-red-500 to-red-600'
    }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-dark-900 backdrop-blur-md border-t border-white/10 text-white dark:text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-accent-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
               <img 
                  src="assets/logo_white.png"
                  alt="YOBTEX Logo" 
                  className={"w-1/2 h-[70px] object-contain transition-opacity duration-300 -my-2"}
                />
            </div>
            <p className="text-gray-100 dark:text-gray-300 text-sm leading-relaxed max-w-md">
              IT Student & Full-Stack Developer passionate about creating lightweight, 
              reliable applications with clean interfaces and optimal performance.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-gradient-to-br ${social.gradient} rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl text-white`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-bold font-display bg-gradient-to-r from-accent-400 to-purple-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-100 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white transition-all duration-300 text-sm hover:translate-x-2 flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-accent-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-bold font-display bg-gradient-to-r from-accent-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-accent-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <SiGmail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-100 dark:text-gray-300">
                    <a href="mailto:eyuapps@gmail.com" className="text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors duration-300 font-medium">
                      eyuapps@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z" />
                  </svg>
                </div>
                <p className="text-gray-100 dark:text-gray-300 font-medium">Available Dire Dawa</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
                <p className="text-gray-100 dark:text-gray-300 font-medium">Open for Opportunities</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-200 dark:text-gray-400 text-sm">
            © {currentYear} Eyob Tesfaye. All rights reserved.
          </p>
        </motion.div>

        {/* Built with love */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          {/* <p className="text-gray-500 text-xs">
            Built with ❤️ using React & Tailwind CSS
          </p> */}
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer