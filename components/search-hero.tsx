"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, TrendingUp, Clock, Shield } from "lucide-react"
import { SearchModal } from "./search-modal"

const popularSearches = [
  "Penetration Testing",
  "Threat Intelligence",
  "Compliance Audit",
  "Incident Response",
  "Network Security",
  "Data Protection",
]

export function SearchHero() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <>
      <section className="section-padding bg-gradient-to-b from-gray-900/50 to-gray-950/50">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 max-w-4xl mx-auto"
          >
            <div className="space-y-4">
              <h2 className="text-responsive-lg font-space-grotesk font-bold">
                Find the <span className="cyber-text">Perfect Solution</span>
              </h2>
              <p className="text-responsive-md text-gray-300 leading-relaxed">
                Search through our comprehensive cybersecurity services and resources to find exactly what you need.
              </p>
            </div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl mx-auto"
            >
              <button
                onClick={() => setIsSearchOpen(true)}
                className="w-full cyber-border p-4 lg:p-6 rounded-xl backdrop-blur-sm hover:border-blue-400/50 transition-all group"
              >
                <div className="flex items-center space-x-4">
                  <Search className="h-6 w-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  <span className="text-left text-gray-400 group-hover:text-gray-300 transition-colors text-lg">
                    Search services, content, and resources...
                  </span>
                  <div className="ml-auto flex items-center space-x-2">
                    <kbd className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded border border-gray-600">
                      Ctrl
                    </kbd>
                    <kbd className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded border border-gray-600">K</kbd>
                  </div>
                </div>
              </button>
            </motion.div>

            {/* Popular Searches */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                <TrendingUp className="h-4 w-4" />
                <span>Popular searches:</span>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {popularSearches.map((search, index) => (
                  <motion.button
                    key={search}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsSearchOpen(true)}
                    className="px-4 py-2 bg-gray-800/50 hover:bg-blue-500/10 border border-gray-700 hover:border-blue-500/30 rounded-full text-sm text-gray-300 hover:text-blue-400 transition-all"
                  >
                    {search}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12"
            >
              {[
                { icon: Shield, value: "15+", label: "Security Services" },
                { icon: Clock, value: "<1s", label: "Search Speed" },
                { icon: TrendingUp, value: "1000+", label: "Resources" },
              ].map((stat, index) => (
                <div key={index} className="cyber-border p-4 rounded-lg backdrop-blur-sm text-center">
                  <stat.icon className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-xl font-bold cyber-text">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}
