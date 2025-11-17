import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiDownload, HiCheckCircle, HiPhone } from 'react-icons/hi'
import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si'
import emailjs from 'emailjs-com';

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
      url: 'mailto:eyuapps@gmail.com',
      label: 'Gmail',
      gradient: 'from-red-500 to-red-600'
    }
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  //sending email
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await emailjs.send(
        'service_bw2x5sa',
        'template_zpaheot',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'eyuapps@gmail.com'
        },
        'tHWrJJaFBS4ohqZME'
      )

      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Failed to send email:', error)
      alert('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }
//ended////////////

  const copyEmail = () => {
    navigator.clipboard.writeText('yobtex@gmail.com')
    // You can add a toast notification here
  }

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/downloads/WUDASE.apk"
    link.download = "WUDASE.apk"
    link.click()
  }

  return (
    <section id="contact" className="py-20 relative bg-gradient-to-b from-white to-gray-50 dark:from-dark-900 dark:to-dark-800">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-accent-400/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
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
            Get In <span className="text-accent-500">Touch</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-accent-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            Let's build something meaningful together. I'm always open to discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-white/80 to-white/40 dark:from-dark-800/80 dark:to-dark-700/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold font-display mb-8 bg-gradient-to-r from-gray-900 to-accent-600 dark:from-white dark:to-accent-400 bg-clip-text text-transparent">
                Let's Connect
              </h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4 p-4 bg-white/50 dark:bg-white/5 rounded-2xl hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <HiMail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                    <div className="flex items-center gap-3">
                      <p className="text-gray-600 dark:text-gray-300">yobtex@gmail.com</p>
                      <button
                        onClick={copyEmail}
                        className="text-sm font-semibold bg-gradient-to-r from-accent-500 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 p-4 bg-white/50 dark:bg-white/5 rounded-2xl hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <HiPhone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Phone</h4>
                    <div className="flex items-center gap-3">
                      <p className="text-gray-600 dark:text-gray-300">0948594465</p>
                      <button
                        onClick={() => navigator.clipboard.writeText('0948594465')}
                        className="text-sm font-semibold bg-gradient-to-r from-accent-500 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-center gap-4 p-4 bg-white/50 dark:bg-white/5 rounded-2xl hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <HiCheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Availability</h4>
                    <p className="text-gray-600 dark:text-gray-300">Open for freelance projects & internships</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 bg-white/50 dark:bg-white/5 rounded-2xl hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">Dire Dawa (Available remotely)</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-4 border-t border-gray-200 dark:border-white/10">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-14 h-14 bg-gradient-to-br ${social.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110`}
                        aria-label={social.label}
                      >
                        <social.icon className="w-6 h-6" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Resume Download */}
                <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                  <button 
                    onClick={handleDownload}
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-accent-500 to-purple-500 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                  >
                    <HiDownload className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    Download Resume
                  </button>
                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-3">
                    PDF Format - Updated regularly
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-gradient-to-br from-accent-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl p-6 border border-accent-500/20">
              <h4 className="font-semibold text-lg mb-4 bg-gradient-to-r from-accent-600 to-purple-600 dark:from-accent-400 dark:to-purple-400 bg-clip-text text-transparent">
                Quick Response
              </h4>
              <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-accent-500 to-purple-500 rounded-full"></div>
                  Typically reply within 24 hours
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-accent-500 to-purple-500 rounded-full"></div>
                  Available for video calls
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-accent-500 to-purple-500 rounded-full"></div>
                  Open to both short and long-term projects
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-accent-500 to-purple-500 rounded-full"></div>
                  Student-friendly rates available
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/80 to-white/40 dark:from-dark-800/80 dark:to-dark-700/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-white/10 shadow-2xl"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <HiCheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-display mb-3 bg-gradient-to-r from-gray-900 to-green-600 dark:from-white dark:to-green-400 bg-clip-text text-transparent">
                  Message Sent!
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Thank you for your message. I'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <>
                <h3 className="text-2xl font-bold font-display mb-8 bg-gradient-to-r from-gray-900 to-accent-600 dark:from-white dark:to-accent-400 bg-clip-text text-transparent">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-white/60 dark:bg-dark-800/60 backdrop-blur-sm text-gray-900 dark:text-white border border-gray-200/60 dark:border-white/10 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-white/60 dark:bg-dark-800/60 backdrop-blur-sm text-gray-900 dark:text-white border border-gray-200/60 dark:border-white/10 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-4 bg-white/60 dark:bg-dark-800/60 backdrop-blur-sm text-gray-900 dark:text-white border border-gray-200/60 dark:border-white/10 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-accent-500 to-purple-500 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 disabled:shadow-lg flex items-center justify-center gap-3 group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <HiMail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                        Send Message
                      </>
                    )}
                  </button>
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