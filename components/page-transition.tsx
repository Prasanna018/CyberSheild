"use client"

import type React from "react"

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 800)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <>
      {/* Page transition overlay */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isLoading ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed inset-0 bg-gradient-to-b from-blue-600 to-purple-600 z-50 origin-top"
      >
        <div className="flex items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: isLoading ? 1 : 0, scale: isLoading ? 1 : 0.5 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full mx-auto mb-4"
            />
            <p className="text-white font-semibold text-xl">Loading...</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Page content */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, delay: isLoading ? 0.5 : 0 }}
      >
        {children}
      </motion.div>
    </>
  )
}
