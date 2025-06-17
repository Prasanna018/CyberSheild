"use client"

import { motion } from "framer-motion"
import { ArrowRight, Shield, Lock, Zap, Play, Star } from "lucide-react"
import { EncryptedText } from "./encrypted-text"
import { ParticleBackground } from "./particle-background"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-black">
      <ParticleBackground />

      {/* Enhanced gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/30 to-gray-950/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-purple-900/10" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center space-y-8 lg:space-y-12">
          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-8"
          >
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span>Trusted by 500+ companies</span>
            </div>
            <div className="h-4 w-px bg-gray-600 hidden sm:block" />
            <div className="text-sm text-gray-400">
              <span className="text-green-400 font-medium">99.9%</span> Success Rate
            </div>
            <div className="h-4 w-px bg-gray-600 hidden sm:block" />
            <div className="text-sm text-gray-400">
              <span className="text-blue-400 font-medium">24/7</span> Support
            </div>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-6 lg:space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-space-grotesk font-bold leading-tight tracking-tight"
            >
              <motion.span
                className="block text-white"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                Secure Your
              </motion.span>
              <motion.span
                className="block cyber-text"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                Digital Future
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4"
            >
              Elite cybersecurity solutions protecting your digital assets with{" "}
              <span className="text-blue-400 font-medium">cutting-edge technology</span>,{" "}
              <span className="text-purple-400 font-medium">advanced threat intelligence</span>, and{" "}
              <span className="text-green-400 font-medium">expert knowledge</span>.
            </motion.p>
          </div>

          {/* Encrypted Status */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center"
          >
            <div className="cyber-border px-6 py-3 rounded-full backdrop-blur-sm">
              <EncryptedText
                text="THREAT LEVEL: SECURE"
                className="text-green-400 font-mono text-sm sm:text-base tracking-wider"
              />
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 max-w-2xl mx-auto"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 lg:px-10 lg:py-5 rounded-xl font-semibold text-base lg:text-lg flex items-center justify-center space-x-3 cyber-glow group relative overflow-hidden min-w-[200px]"
            >
              <motion.div
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
              <Shield className="h-5 w-5 relative z-10" />
              <span className="relative z-10">Get Protected Now</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto border border-blue-500/50 px-8 py-4 lg:px-10 lg:py-5 rounded-xl font-semibold text-base lg:text-lg hover:bg-blue-500/10 hover:border-blue-400/70 transition-all backdrop-blur-sm relative overflow-hidden group min-w-[180px]"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-blue-500/5 rounded-xl"
              />
              <div className="flex items-center justify-center space-x-2 relative z-10">
                <Play className="h-5 w-5" />
                <span>Watch Demo</span>
              </div>
            </motion.button>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16 lg:mt-20 px-4 max-w-6xl mx-auto"
          >
            {[
              {
                icon: Shield,
                title: "24/7 Protection",
                desc: "Round-the-clock monitoring and threat detection with AI-powered security",
                color: "from-blue-500 to-cyan-500",
                stats: "500+ threats blocked daily",
              },
              {
                icon: Lock,
                title: "Zero-Trust Security",
                desc: "Advanced threat prevention and access control with military-grade encryption",
                color: "from-purple-500 to-pink-500",
                stats: "99.9% success rate",
              },
              {
                icon: Zap,
                title: "Real-time Intelligence",
                desc: "Proactive threat detection and rapid response within minutes",
                color: "from-green-500 to-emerald-500",
                stats: "<5min response time",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="cyber-border p-6 lg:p-8 rounded-xl backdrop-blur-sm card-hover group relative overflow-hidden"
              >
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-xl`}
                />

                <div className="relative z-10 text-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br ${item.color} p-3 mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <item.icon className="h-full w-full text-white" />
                  </motion.div>
                  <h3 className="font-semibold text-lg lg:text-xl mb-3 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm lg:text-base leading-relaxed mb-3">{item.desc}</p>
                  <div className="text-xs lg:text-sm text-blue-400 font-medium">{item.stats}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
            className="flex justify-center mt-16 lg:mt-20"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="flex flex-col items-center space-y-2 text-gray-400"
            >
              <span className="text-sm">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="w-1 h-3 bg-blue-400 rounded-full mt-2"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
