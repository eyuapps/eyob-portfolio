import React from 'react'
import { motion } from 'framer-motion'

const FloatingShapes = () => {
  const shapes = [
    {
      id: 1,
      x: '10%',
      y: '20%',
      size: 'w-64 h-64',
      color: 'from-accent-500/10 to-cyan-500/5',
      animation: 'animate-float'
    },
    {
      id: 2,
      x: '80%',
      y: '40%',
      size: 'w-96 h-96',
      color: 'from-purple-500/5 to-pink-500/10',
      animation: 'animate-float-delayed'
    },
    {
      id: 3,
      x: '20%',
      y: '70%',
      size: 'w-48 h-48',
      color: 'from-blue-500/10 to-indigo-500/5',
      animation: 'animate-float'
    },
    {
      id: 4,
      x: '75%',
      y: '15%',
      size: 'w-32 h-32',
      color: 'from-green-500/5 to-emerald-500/10',
      animation: 'animate-float-delayed'
    }
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute ${shape.size} ${shape.animation} bg-gradient-to-br ${shape.color} rounded-full blur-3xl`}
          style={{
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.id * 0.5
          }}
        />
      ))}
    </div>
  )
}

export default FloatingShapes