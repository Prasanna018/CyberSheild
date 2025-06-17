"use client"

import { motion } from "framer-motion"
import { Shield, Search, FileCheck, AlertTriangle, ArrowRight, CheckCircle } from "lucide-react"

const services = [
  {
    icon: Search,
    title: "Penetration Testing",
    description: "Comprehensive security assessments to identify vulnerabilities before attackers do.",
    features: ["Network Security Testing", "Web Application Testing", "Social Engineering Tests"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: AlertTriangle,
    title: "Threat Intelligence",
    description: "Real-time threat monitoring and intelligence to stay ahead of emerging risks.",
    features: ["24/7 Monitoring", "Threat Analysis", "Risk Assessment"],
    color: "from-red-500 to-orange-500",
  },
  {
    icon: FileCheck,
    title: "Compliance & Audit",
    description: "Ensure your organization meets industry standards and regulatory requirements.",
    features: ["GDPR Compliance", "SOC 2 Audits", "ISO 27001 Certification"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Incident Response",
    description: "Rapid response and recovery services to minimize damage from security incidents.",
    features: ["24/7 Emergency Response", "Forensic Analysis", "Recovery Planning"],
    color: "from-purple-500 to-pink-500",
  },
]

export function ServicesSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-900/50 to-gray-950/50">
      <div className="container-custom">
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
            <div className="cyber-border px-6 py-2 rounded-full backdrop-blur-sm">
              <span className="text-blue-400 font-medium text-sm lg:text-base">Our Services</span>
            </div>
          </motion.div>

          <h2 className="text-responsive-lg font-space-grotesk font-bold mb-6">
            Comprehensive <span className="cyber-text">Security Solutions</span>
          </h2>
          <p className="text-responsive-md text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Tailored cybersecurity solutions designed to protect your organization from evolving threats with
            cutting-edge technology and expert knowledge.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="cyber-border p-6 lg:p-8 rounded-xl backdrop-blur-sm group cursor-pointer card-hover h-full flex flex-col"
            >
              {/* Icon */}
              <div className="mb-6">
                <div
                  className={`w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-br ${service.color} p-3 group-hover:scale-110 transition-all duration-300`}
                >
                  <service.icon className="h-full w-full text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-xl lg:text-2xl font-semibold mb-4 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed flex-1">{service.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm lg:text-base text-gray-300 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.div
                  className="flex items-center text-blue-400 text-sm lg:text-base font-medium group-hover:text-blue-300 transition-colors mt-auto"
                  whileHover={{ x: 5 }}
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 lg:mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 lg:px-10 lg:py-5 rounded-xl font-semibold text-base lg:text-lg flex items-center space-x-3 cyber-glow mx-auto"
          >
            <span>View All Services</span>
            <ArrowRight className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
