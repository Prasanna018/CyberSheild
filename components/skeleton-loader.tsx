"use client"

import { motion } from "framer-motion"

interface SkeletonProps {
  className?: string
  variant?: "text" | "rectangular" | "circular"
}

export function Skeleton({ className = "", variant = "rectangular" }: SkeletonProps) {
  const baseClasses = "bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse"

  const variantClasses = {
    text: "h-4 rounded",
    rectangular: "rounded-lg",
    circular: "rounded-full",
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <motion.div
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="h-full w-full bg-gradient-to-r from-transparent via-gray-600/50 to-transparent"
      />
    </motion.div>
  )
}

export function ServiceCardSkeleton() {
  return (
    <div className="cyber-border p-6 lg:p-8 rounded-xl backdrop-blur-sm">
      <div className="mb-6">
        <Skeleton className="w-14 h-14 lg:w-16 lg:h-16" variant="rectangular" />
      </div>
      <Skeleton className="h-6 w-3/4 mb-4" variant="text" />
      <Skeleton className="h-4 w-full mb-2" variant="text" />
      <Skeleton className="h-4 w-5/6 mb-6" variant="text" />
      <div className="space-y-3 mb-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center space-x-3">
            <Skeleton className="w-4 h-4" variant="circular" />
            <Skeleton className="h-4 flex-1" variant="text" />
          </div>
        ))}
      </div>
      <Skeleton className="h-10 w-full" variant="rectangular" />
    </div>
  )
}

export function TestimonialSkeleton() {
  return (
    <div className="cyber-border p-6 lg:p-8 rounded-xl backdrop-blur-sm">
      <Skeleton className="w-8 h-8 mb-4" variant="rectangular" />
      <Skeleton className="h-4 w-full mb-2" variant="text" />
      <Skeleton className="h-4 w-5/6 mb-2" variant="text" />
      <Skeleton className="h-4 w-4/5 mb-6" variant="text" />
      <div className="flex items-center space-x-2 mb-4">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="w-4 h-4" variant="circular" />
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <Skeleton className="w-12 h-12" variant="circular" />
        <div className="flex-1">
          <Skeleton className="h-4 w-1/2 mb-1" variant="text" />
          <Skeleton className="h-3 w-1/3" variant="text" />
        </div>
      </div>
    </div>
  )
}
