import React from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import { FaReact, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa'
import { SiAndroid, SiNodedotjs, SiJavascript, SiTailwindcss } from 'react-icons/si'

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/downloads/wdaseegzi.apk"; // use absolute path from public
    link.download = "wdaseegzi.apk";
    link.click();
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20 sm:pt-28 md:pt-32 lg:pt-36"
      style={{ scrollMarginTop: '96px' }}
    >
      {/* Background with subtle parallax */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-100 to-accent-100 dark:from-dark-900 dark:via-dark-800 dark:to-accent-900/20"></div>

        {/* Animated background shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6">

  <div>
      <button onClick={handleDownload}>Download Example PDF</button>
    </div>


          {/* Left column: intro, role, social and tech icons */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 flex flex-col items-start space-y-6"
          >
            <div className="glass rounded-2xl px-6 py-5 shadow-lg w-full max-w-lg">
              <p className="text-sm text-gray-400">Well Hello There, I am</p>
              <h2 className="text-3xl font-bold text-accent-400">Eyob Tesfaye</h2>
            </div>

            <div className="rounded-2xl px-6 py-5 shadow-sm w-full max-w-md border border-accent-400/25 bg-transparent">
              <p className="text-base text-gray-900 dark:text-white font-semibold">Building secure, user-first digital experiences.</p>
            </div>

            {/* Social row */}
            <div className="flex items-center gap-3">
              <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white/90 text-blue-600 shadow" href="#" aria-label="LinkedIn">
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white/90 text-sky-500 shadow" href="#" aria-label="Twitter">
                <FaTwitter className="w-4 h-4" />
              </a>
              <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white/90 text-pink-500 shadow" href="#" aria-label="Instagram">
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>

            {/* Tech icons: vertical on desktop, horizontal on mobile */}
            <div className="mt-2">
              <div className="hidden lg:flex flex-col items-start space-y-4">
                {[
                  { icon: <FaReact className="w-6 h-6 text-sky-400" />, key: 'react' },
                  { icon: <SiTailwindcss className="w-6 h-6 text-cyan-400" />, key: 'tailwind' },
                  { icon: <SiNodedotjs className="w-6 h-6 text-green-600" />, key: 'node' },
                  { icon: <SiJavascript className="w-6 h-6 text-yellow-400" />, key: 'js' },
                  { icon: <SiAndroid className="w-6 h-6 text-green-400" />, key: 'android' },
                ].map((it, idx) => (
                  <motion.div key={it.key} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: [0, -6, 0] }} transition={{ delay: 0.12 * idx, duration: 2, repeat: Infinity }} className="w-12 h-12 bg-white/90 dark:bg-dark-700 rounded-full flex items-center justify-center shadow-lg">
                    {it.icon}
                  </motion.div>
                ))}
              </div>

              <div className="flex lg:hidden items-center gap-3 mt-4">
                {[
                  { icon: <FaReact className="w-5 h-5 text-sky-400" />, key: 'react-m' },
                  { icon: <SiTailwindcss className="w-5 h-5 text-cyan-400" />, key: 'tailwind-m' },
                  { icon: <SiNodedotjs className="w-5 h-5 text-green-600" />, key: 'node-m' },
                  { icon: <SiJavascript className="w-5 h-5 text-yellow-400" />, key: 'js-m' },
                  { icon: <SiAndroid className="w-5 h-5 text-green-400" />, key: 'android-m' },
                ].map((it, idx) => (
                  <motion.div key={it.key} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: [0, -4, 0] }} transition={{ delay: 0.08 * idx, duration: 2, repeat: Infinity }} className="w-10 h-10 bg-white/90 dark:bg-dark-700 rounded-full flex items-center justify-center shadow-md">
                    {it.icon}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column: landing photo only (no icons) */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-3xl overflow-hidden shadow-2xl">
              <img src="/assets/profile.jpg" alt="Eyob Tesfaye" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection('#about')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 glass rounded-full hover:neon-glow transition-all duration-300"
            aria-label="Scroll to about section"
          >
            <HiArrowDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero