"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Clock, Shield } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-space-grotesk font-bold">
              Get In <span className="cyber-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to secure your digital future? Contact our cybersecurity experts for a free consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="cyber-border p-8 rounded-lg backdrop-blur-sm"
            >
              <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="penetration-testing">Penetration Testing</option>
                    <option value="threat-intelligence">Threat Intelligence</option>
                    <option value="compliance">Compliance & Audit</option>
                    <option value="incident-response">Incident Response</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-400 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your security needs..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:from-blue-500 hover:to-purple-500 transition-all cyber-glow"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      <Mail className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-gray-400">contact@cybershield.com</p>
                      <p className="text-gray-400">emergency@cybershield.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      <Phone className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-gray-400">+1 (555) 123-4567</p>
                      <p className="text-gray-400">24/7 Emergency: +1 (555) 911-CYBER</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      <MapPin className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Office</h3>
                      <p className="text-gray-400">123 Security Boulevard</p>
                      <p className="text-gray-400">San Francisco, CA 94105</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      <Clock className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                      <p className="text-gray-400">Emergency Support: 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cyber-border p-6 rounded-lg backdrop-blur-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="h-8 w-8 text-blue-400" />
                  <h3 className="text-xl font-semibold">Emergency Response</h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Experiencing a security incident? Our emergency response team is available 24/7 to help contain and
                  resolve critical security threats.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-600 hover:bg-red-500 px-6 py-2 rounded-lg font-semibold transition-colors"
                >
                  Emergency Contact
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
