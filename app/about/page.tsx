"use client"

import { motion } from "framer-motion"
import { Shield, Users, Award, Target } from "lucide-react"

const team = [
  {
    name: "Alex Thompson",
    role: "Chief Security Officer",
    bio: "15+ years in cybersecurity with expertise in threat intelligence and incident response.",
    avatar: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Sarah Chen",
    role: "Lead Penetration Tester",
    bio: "Certified ethical hacker with a track record of identifying critical vulnerabilities.",
    avatar: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Michael Rodriguez",
    role: "Compliance Director",
    bio: "Expert in regulatory compliance with extensive experience in SOC 2 and ISO 27001.",
    avatar: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Emily Johnson",
    role: "Threat Intelligence Analyst",
    bio: "Specialized in advanced persistent threats and cyber threat landscape analysis.",
    avatar: "/placeholder.svg?height=200&width=200",
  },
]

const stats = [
  { icon: Shield, value: "500+", label: "Companies Protected" },
  { icon: Users, value: "50+", label: "Security Experts" },
  { icon: Award, value: "99.9%", label: "Success Rate" },
  { icon: Target, value: "24/7", label: "Monitoring" },
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-space-grotesk font-bold">
              About <span className="cyber-text">CyberShield</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a team of elite cybersecurity professionals dedicated to protecting organizations from evolving
              digital threats.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-6">
                Our <span className="cyber-text">Mission</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                To provide world-class cybersecurity solutions that enable organizations to operate securely in an
                increasingly digital world. We believe that security should never be an afterthought, but a fundamental
                foundation for business success.
              </p>
              <p className="text-lg text-gray-300">
                Our team combines cutting-edge technology with deep expertise to deliver comprehensive security
                solutions that adapt to the ever-evolving threat landscape.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="cyber-border p-8 rounded-lg backdrop-blur-sm"
            >
              <Shield className="h-16 w-16 text-blue-400 mb-6 cyber-glow" />
              <h3 className="text-xl font-semibold mb-4">Why Choose CyberShield?</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  <span>Industry-leading expertise</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  <span>24/7 monitoring and support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  <span>Cutting-edge technology</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  <span>Proven track record</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="cyber-border p-6 rounded-lg backdrop-blur-sm">
                  <stat.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold cyber-text mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-4">
              Meet Our <span className="cyber-text">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our team of cybersecurity experts brings decades of combined experience in protecting organizations
              worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="cyber-border p-6 rounded-lg backdrop-blur-sm text-center group"
              >
                <img
                  src={member.avatar || "/placeholder.svg"}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-blue-500/30 group-hover:border-blue-400/50 transition-colors"
                />
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-blue-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
