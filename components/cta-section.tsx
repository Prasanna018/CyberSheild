"use client"

import { motion } from "framer-motion"
import { ArrowRight, Shield, Phone, Mail, Calendar } from "lucide-react"

export function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-blue-900/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="particle-bg h-full w-full" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-8 lg:space-y-12"
        >
          {/* Animated Shield */}
          <div className="flex justify-center mb-8 lg:mb-12">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="relative"
            >
              <Shield className="h-16 w-16 lg:h-20 lg:w-20 text-blue-400 cyber-glow" />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="absolute inset-0 bg-blue-400/20 rounded-full blur-md"
              />
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="space-y-6 lg:space-y-8">
            <h2 className="text-responsive-lg font-space-grotesk font-bold">
              Ready to <span className="cyber-text">Secure Your Future</span>?
            </h2>

            <p className="text-responsive-md text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Don't wait for a security breach to happen. Get a comprehensive security assessment and consultation with
              our cybersecurity experts today. Protect what matters most.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-2xl mx-auto">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 lg:px-10 lg:py-5 rounded-xl font-semibold text-base lg:text-lg flex items-center justify-center space-x-3 cyber-glow group"
            >
              <Calendar className="h-5 w-5" />
              <span>Get Free Consultation</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto border border-blue-500/50 px-8 py-4 lg:px-10 lg:py-5 rounded-xl font-semibold text-base lg:text-lg hover:bg-blue-500/10 hover:border-blue-400/70 transition-all backdrop-blur-sm"
            >
              View Our Services
            </motion.button>
          </div>

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-16"
          >
            {[
              {
                icon: Phone,
                title: "Call Us",
                description: "Speak with our experts",
                action: "+1 (555) 123-4567",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: Mail,
                title: "Email Us",
                description: "Get detailed information",
                action: "contact@cybershield.com",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Calendar,
                title: "Schedule Meeting",
                description: "Book a consultation",
                action: "Schedule Now",
                color: "from-purple-500 to-pink-500",
              },
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="cyber-border p-6 rounded-xl backdrop-blur-sm text-center group card-hover"
              >
                <div
                  className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br ${contact.color} p-3 mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <contact.icon className="h-full w-full text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-400 transition-colors">
                  {contact.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{contact.description}</p>
                <p className="text-blue-400 font-medium text-sm group-hover:text-blue-300 transition-colors">
                  {contact.action}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 mt-16 lg:mt-20 max-w-4xl mx-auto"
          >
            {[
              { value: "500+", label: "Companies Protected", desc: "Trusted worldwide" },
              { value: "99.9%", label: "Uptime Guarantee", desc: "Reliable security" },
              { value: "24/7", label: "Expert Support", desc: "Always available" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl lg:text-3xl xl:text-4xl font-bold cyber-text mb-2">{stat.value}</div>
                <div className="text-white font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.desc}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
