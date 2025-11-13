import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiDownload, HiCheckCircle } from 'react-icons/hi'
import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const socialLinks = [
    {
      icon: SiGithub,
      url: 'https://github.com/your-username',
      label: 'GitHub',
      color: 'text-gray-300 hover:text-white'
    },
    {
      icon: SiLinkedin,
      url: 'https://linkedin.com/in/your-profile',
      label: 'LinkedIn',
      color: 'text-blue-400 hover:text-blue-300'
    },
    {
      icon: SiGmail,
      url: 'mailto:eyuapps@gmail.com',
      label: 'Gmail',
      color: 'text-red-400 hover:text-red-300'
    }
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Reset form after success
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: '', email: '', message: '' })
      }, 3000)
    }, 2000)
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('eyuapps@gmail.com')
    // You can add a toast notification here
  }

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/downloads/WUDASE.apk"; // use absolute path from public
    link.download = "WUDASE.apk";
    link.click();
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="text-accent-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-accent-400">
                Let's Connect
              </h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center">
                    <HiMail className="w-6 h-6 text-accent-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <div className="flex items-center gap-2">
                      <p className="text-gray-300">eyuapps@gmail.com</p>
                      <button
                        onClick={copyEmail}
                        className="text-sm text-accent-400 hover:text-accent-300 transition-colors"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <HiCheckCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Availability</h4>
                    <p className="text-gray-300">Open for freelance projects and internships</p>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="font-semibold mb-4">Follow Me</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 glass rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:neon-glow ${social.color}`}
                        aria-label={social.label}
                      >
                        <social.icon className="w-6 h-6" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Resume Download */}
                <div className="pt-6 border-t border-white/10">
                  <button onClick={handleDownload} className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-accent-500 text-dark-900 rounded-xl font-semibold hover:neon-glow hover:scale-105 transition-all duration-300">
                    <HiDownload className="w-5 h-5" />
                    Download Resume
                  </button>
                  <p className="text-xs text-gray-400 text-center mt-2">
                    PDF Format - Updated regularly
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="glass rounded-2xl p-6">
              <h4 className="font-semibold mb-4 text-accent-400">Quick Response</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Typically reply within 24 hours</li>
                <li>• Available for video calls</li>
                <li>• Open to both short and long-term projects</li>
                <li>• Student-friendly rates available</li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <HiCheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-accent-400">
                  Message Sent!
                </h3>
                <p className="text-gray-300">
                  Thank you for your message. I'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <>
                <h3 className="text-2xl font-bold mb-6 text-accent-400">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/60 text-dark-900 border border-gray-200/40 rounded-lg shadow-sm focus:outline-none focus:border-accent-500 transition-colors duration-300 dark:bg-dark-800 dark:text-white dark:border-white/10"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/60 text-dark-900 border border-gray-200/40 rounded-lg shadow-sm focus:outline-none focus:border-accent-500 transition-colors duration-300 dark:bg-dark-800 dark:text-white dark:border-white/10"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 bg-white/60 text-dark-900 border border-gray-200/40 rounded-lg shadow-sm focus:outline-none focus:border-accent-500 transition-colors duration-300 resize-none dark:bg-dark-800 dark:text-white dark:border-white/10"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-accent-500 text-dark-900 rounded-xl font-semibold hover:neon-glow hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-dark-900 border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <HiMail className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    {/* Form handling instructions */}
                    Note: This form uses frontend validation. For production, integrate with 
                    <a href="https://www.netlify.com/products/forms/" target="_blank" rel="noopener noreferrer" className="text-accent-400 hover:underline mx-1">
                      Netlify Forms
                    </a>
                    or
                    <a href="https://formspree.io/" target="_blank" rel="noopener noreferrer" className="text-accent-400 hover:underline mx-1">
                      Formspree
                    </a>
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact