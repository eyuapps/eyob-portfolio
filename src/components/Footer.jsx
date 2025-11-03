import React from 'react'
import { motion } from 'framer-motion'
import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: SiGithub,
      url: 'https://github.com/your-username',
      label: 'GitHub'
    },
    {
      icon: SiLinkedin,
      url: 'https://linkedin.com/in/your-profile',
      label: 'LinkedIn'
    },
    {
      icon: SiGmail,
      url: 'mailto:youremail@example.com',
      label: 'Email'
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
  <footer className="relative bg-black/95 backdrop-blur-md border-t border-white/10 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent-500 rounded-xl"></div>
              <span className="text-xl font-bold text-glow">Eyob Tesfaye</span>
            </div>
            <p className="text-white dark:text-gray-300 text-sm leading-relaxed">
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
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center transition-all duration-300 hover:neon-glow hover:scale-110 text-white hover:text-accent-400 dark:text-gray-300"
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
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-accent-400">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white hover:text-accent-400 transition-colors duration-300 text-sm dark:text-gray-300"
                  >
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
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-accent-400">Get In Touch</h3>
            <div className="space-y-3 text-sm">
              <p className="text-white dark:text-gray-300">
                <strong>Email:</strong>{' '}
                <a href="mailto:youremail@example.com" className="text-accent-400 hover:underline">
                  youremail@example.com
                </a>
              </p>
              <p className="text-white dark:text-gray-300">
                <strong>Location:</strong> Available Worldwide
              </p>
              <p className="text-white dark:text-gray-300">
                <strong>Status:</strong> Open for Opportunities
              </p>
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
          <p className="text-white/90 dark:text-gray-400 text-sm">
            © {currentYear} Eyob Tesfaye. All rights reserved.
          </p>
          
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/90 hover:text-accent-400 transition-colors dark:text-gray-400">
              Privacy
            </a>
            <a href="#" className="text-white/90 hover:text-accent-400 transition-colors dark:text-gray-400">
              Terms
            </a>
          </div>
        </motion.div>

        {/* Built with love */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-white/80 dark:text-gray-500 text-xs">
            Built with React, TailwindCSS & Framer Motion • Deployed on Vercel
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer