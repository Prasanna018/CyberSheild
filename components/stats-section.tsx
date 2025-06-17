"use client"

import { motion } from "framer-motion"
import { Shield, Users, Award, Target, TrendingUp, Clock } from "lucide-react"
import { AnimatedCounter } from "./animated-counter"

const stats = [
  {
    icon: Shield,
    value: 500,
    suffix: "+",
    label: "Companies Protected",
    description: "Trusted by organizations worldwide",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    value: 50,
    suffix: "+",
    label: "Security Experts",
    description: "Certified cybersecurity professionals",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Award,
    value: 99.9,
    suffix: "%",
    label: "Success Rate",
    description: "Proven track record of excellence",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Clock,
    value: 24,
    suffix: "/7",
    label: "Monitoring",
    description: "Round-the-clock threat detection",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: TrendingUp,
    value: 10,
    suffix: "M+",
    label: "Threats Blocked",
    description: "Advanced threat prevention",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Target,
    value: 5,
    prefix: "<",
    suffix: "min",
    label: "Response Time",
    description: "Rapid incident response",
    color: "from-teal-500 to-green-500",
  },
]

export function StatsSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-950/50 to-gray-900/50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="particle-bg h-full w-full" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <div className="cyber-border px-6 py-3 rounded-full backdrop-blur-sm">
              <span className="text-blue-400 font-medium text-sm lg:text-base">Our Impact</span>
            </div>
          </motion.div>

          <h2 className="text-responsive-lg font-space-grotesk font-bold mb-6">
            Trusted by <span className="cyber-text">Industry Leaders</span>
          </h2>
          <p className="text-responsive-md text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our commitment to excellence is reflected in the numbers that matter most to your security.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="cyber-border p-6 lg:p-8 rounded-xl backdrop-blur-sm text-center group card-hover relative overflow-hidden"
            >
              {/* Animated background */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 0.1 }}
                transition={{ duration: 0.3 }}
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-xl`}
              />

              {/* Icon */}
              <div className="mb-4 relative z-10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br ${stat.color} p-3 mx-auto group-hover:scale-110 transition-all duration-300`}
                >
                  <stat.icon className="h-full w-full text-white" />
                </motion.div>
              </div>

              {/* Value with animated counter */}
              <div className="text-2xl lg:text-3xl xl:text-4xl font-bold cyber-text mb-2 group-hover:scale-110 transition-transform relative z-10">
                <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} duration={2} />
              </div>

              {/* Label */}
              <div className="text-base lg:text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors relative z-10">
                {stat.label}
              </div>

              {/* Description */}
              <div className="text-xs lg:text-sm text-gray-400 leading-relaxed relative z-10">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="flex justify-center mt-16 lg:mt-20"
        >
          <div className="flex items-center space-x-4 cyber-border px-8 py-4 rounded-full backdrop-blur-sm">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Shield className="h-6 w-6 text-blue-400" />
            </motion.div>
            <span className="text-gray-300 font-medium">Securing Digital Futures Since 2010</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
