"use client"

import { motion } from "framer-motion"
import { Shield } from "lucide-react"

export function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-gray-950 flex items-center justify-center z-50">
      <div className="relative">
        {/* Outer rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="w-24 h-24 border-2 border-blue-500/30 rounded-full border-t-blue-400"
        />

        {/* Inner rotating ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute inset-2 w-20 h-20 border-2 border-purple-500/30 rounded-full border-t-purple-400"
        />

        {/* Center shield */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Shield className="h-8 w-8 text-blue-400" />
        </motion.div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-10, -20, -10],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.3,
            }}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${50 + 30 * Math.cos((i * Math.PI) / 3)}%`,
              top: `${50 + 30 * Math.sin((i * Math.PI) / 3)}%`,
            }}
          />
        ))}
      </div>

      {/* Loading text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-1/3 text-center"
      >
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="text-blue-400 font-medium text-lg mb-2"
        >
          Securing Your Digital Future
        </motion.p>
        <div className="flex items-center justify-center space-x-1">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.5, 1] }}
              transition={{
                duration: 0.6,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              }}
              className="w-2 h-2 bg-blue-400 rounded-full"
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
