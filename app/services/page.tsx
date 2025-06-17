"use client"

import { motion } from "framer-motion"
import { Search, AlertTriangle, FileCheck, Shield, ArrowRight, Check, Star, Users } from "lucide-react"

const services = [
  {
    icon: Search,
    title: "Penetration Testing",
    description: "Comprehensive security assessments to identify vulnerabilities before attackers do.",
    features: [
      "Network Security Testing",
      "Web Application Testing",
      "Mobile App Security",
      "Social Engineering Tests",
      "Wireless Network Testing",
      "Physical Security Assessment",
    ],
    price: "Starting at $5,000",
    duration: "2-4 weeks",
    deliverables: "Detailed report with remediation steps",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: AlertTriangle,
    title: "Threat Intelligence",
    description: "Real-time threat monitoring and intelligence to stay ahead of emerging risks.",
    features: [
      "24/7 Threat Monitoring",
      "Advanced Threat Analysis",
      "Risk Assessment Reports",
      "Threat Hunting Services",
      "IOC Management",
      "Custom Threat Feeds",
    ],
    price: "Starting at $3,000/month",
    duration: "Ongoing service",
    deliverables: "Monthly intelligence reports",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: FileCheck,
    title: "Compliance & Audit",
    description: "Ensure your organization meets industry standards and regulatory requirements.",
    features: [
      "GDPR Compliance",
      "SOC 2 Type I & II",
      "ISO 27001 Certification",
      "HIPAA Compliance",
      "PCI DSS Assessment",
      "Custom Compliance Frameworks",
    ],
    price: "Starting at $8,000",
    duration: "4-8 weeks",
    deliverables: "Compliance certification & documentation",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Incident Response",
    description: "Rapid response and recovery services to minimize damage from security incidents.",
    features: [
      "24/7 Emergency Response",
      "Digital Forensics",
      "Malware Analysis",
      "Recovery Planning",
      "Legal Support",
      "Post-Incident Review",
    ],
    price: "Starting at $2,500/month",
    duration: "Immediate response",
    deliverables: "Incident analysis & recovery plan",
    color: "from-purple-500 to-pink-500",
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-16 lg:pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 lg:space-y-8">
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="inline-block mb-6">
              <div className="cyber-border px-6 py-2 rounded-full backdrop-blur-sm">
                <span className="text-blue-400 font-medium text-sm lg:text-base">Our Services</span>
              </div>
            </motion.div>

            <h1 className="text-responsive-xl font-space-grotesk font-bold">
              Comprehensive <span className="cyber-text">Security Solutions</span>
            </h1>
            <p className="text-responsive-md text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Professional cybersecurity services designed to protect your organization from evolving threats with
              cutting-edge technology and expert knowledge.
            </p>

            {/* Service Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mt-12 lg:mt-16 max-w-4xl mx-auto">
              {[
                { icon: Shield, value: "500+", label: "Projects Completed" },
                { icon: Users, value: "50+", label: "Expert Team" },
                { icon: Star, value: "4.9/5", label: "Client Rating" },
                { icon: Check, value: "99%", label: "Success Rate" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="cyber-border p-4 lg:p-6 rounded-xl backdrop-blur-sm text-center"
                >
                  <stat.icon className="h-6 w-6 lg:h-8 lg:w-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-lg lg:text-xl font-bold cyber-text">{stat.value}</div>
                  <div className="text-xs lg:text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="cyber-border p-6 lg:p-8 xl:p-10 rounded-xl backdrop-blur-sm group hover:border-blue-400/50 transition-all card-hover"
              >
                {/* Header */}
                <div className="flex items-start space-x-4 lg:space-x-6 mb-6 lg:mb-8">
                  <div
                    className={`p-3 lg:p-4 rounded-xl bg-gradient-to-br ${service.color} group-hover:scale-110 transition-transform`}
                  >
                    <service.icon className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl xl:text-3xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm lg:text-base leading-relaxed">{service.description}</p>
                  </div>
                </div>

                {/* Service Details */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8">
                  <div className="cyber-border p-3 lg:p-4 rounded-lg backdrop-blur-sm">
                    <div className="text-xs lg:text-sm text-gray-400 mb-1">Price</div>
                    <div className="text-sm lg:text-base font-semibold cyber-text">{service.price}</div>
                  </div>
                  <div className="cyber-border p-3 lg:p-4 rounded-lg backdrop-blur-sm">
                    <div className="text-xs lg:text-sm text-gray-400 mb-1">Duration</div>
                    <div className="text-sm lg:text-base font-semibold text-white">{service.duration}</div>
                  </div>
                  <div className="cyber-border p-3 lg:p-4 rounded-lg backdrop-blur-sm sm:col-span-1">
                    <div className="text-xs lg:text-sm text-gray-400 mb-1">Deliverables</div>
                    <div className="text-sm lg:text-base font-semibold text-white">{service.deliverables}</div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
                  <h4 className="text-base lg:text-lg font-semibold text-white">What's Included:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm lg:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 lg:py-4 rounded-lg font-medium text-sm lg:text-base flex items-center justify-center space-x-2 hover:from-blue-500 hover:to-purple-500 transition-all cyber-glow"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 sm:flex-initial border border-blue-500/50 px-6 py-3 lg:py-4 rounded-lg font-medium text-sm lg:text-base hover:bg-blue-500/10 hover:border-blue-400/70 transition-all backdrop-blur-sm"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className="section-padding bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 lg:space-y-8 max-w-4xl mx-auto"
          >
            <h2 className="text-responsive-lg font-space-grotesk font-bold">
              Need a <span className="cyber-text">Custom Solution</span>?
            </h2>
            <p className="text-responsive-md text-gray-300 leading-relaxed">
              Every organization has unique security needs. Let's discuss how we can tailor our services to protect your
              specific requirements and create a comprehensive security strategy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-2xl mx-auto">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 lg:px-10 lg:py-5 rounded-xl font-semibold text-base lg:text-lg flex items-center justify-center space-x-3 cyber-glow group"
              >
                <span>Contact Our Experts</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto border border-blue-500/50 px-8 py-4 lg:px-10 lg:py-5 rounded-xl font-semibold text-base lg:text-lg hover:bg-blue-500/10 hover:border-blue-400/70 transition-all backdrop-blur-sm"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
