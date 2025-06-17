"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, X, ArrowRight, FileText, Shield, Users, Star } from "lucide-react"
import Link from "next/link"

interface SearchResult {
  id: string
  title: string
  description: string
  type: "service" | "page" | "content"
  url: string
  icon?: any
  category?: string
}

const searchData: SearchResult[] = [
  // Services
  {
    id: "penetration-testing",
    title: "Penetration Testing",
    description: "Comprehensive security assessments to identify vulnerabilities before attackers do.",
    type: "service",
    url: "/services#penetration-testing",
    icon: Search,
    category: "Security Testing",
  },
  {
    id: "threat-intelligence",
    title: "Threat Intelligence",
    description: "Real-time threat monitoring and intelligence to stay ahead of emerging risks.",
    type: "service",
    url: "/services#threat-intelligence",
    icon: Shield,
    category: "Monitoring",
  },
  {
    id: "compliance-audit",
    title: "Compliance & Audit",
    description: "Ensure your organization meets industry standards and regulatory requirements.",
    type: "service",
    url: "/services#compliance-audit",
    icon: FileText,
    category: "Compliance",
  },
  {
    id: "incident-response",
    title: "Incident Response",
    description: "Rapid response and recovery services to minimize damage from security incidents.",
    type: "service",
    url: "/services#incident-response",
    icon: Shield,
    category: "Emergency Response",
  },
  // Pages
  {
    id: "about-us",
    title: "About Us",
    description: "Learn about our mission, team, and commitment to cybersecurity excellence.",
    type: "page",
    url: "/about",
    icon: Users,
  },
  {
    id: "contact",
    title: "Contact",
    description: "Get in touch with our cybersecurity experts for consultation and support.",
    type: "page",
    url: "/contact",
    icon: FileText,
  },
  // Content
  {
    id: "security-assessment",
    title: "Security Assessment",
    description: "Comprehensive evaluation of your organization's security posture and vulnerabilities.",
    type: "content",
    url: "/services",
    category: "Assessment",
  },
  {
    id: "cyber-threats",
    title: "Cyber Threats",
    description: "Understanding modern cyber threats and how to protect against them.",
    type: "content",
    url: "/services",
    category: "Education",
  },
  {
    id: "data-protection",
    title: "Data Protection",
    description: "Advanced strategies for protecting sensitive data and maintaining privacy.",
    type: "content",
    url: "/services",
    category: "Data Security",
  },
  {
    id: "network-security",
    title: "Network Security",
    description: "Securing your network infrastructure against unauthorized access and attacks.",
    type: "content",
    url: "/services",
    category: "Network",
  },
]

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (query.trim() === "") {
      setResults([])
      return
    }

    const filteredResults = searchData.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category?.toLowerCase().includes(query.toLowerCase()),
    )

    setResults(filteredResults)
    setSelectedIndex(0)
  }, [query])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose()
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev))
    } else if (e.key === "Enter" && results[selectedIndex]) {
      window.location.href = results[selectedIndex].url
      onClose()
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "service":
        return Shield
      case "page":
        return FileText
      case "content":
        return Star
      default:
        return FileText
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "service":
        return "from-blue-500 to-cyan-500"
      case "page":
        return "from-green-500 to-emerald-500"
      case "content":
        return "from-purple-500 to-pink-500"
      default:
        return "from-gray-500 to-gray-600"
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 w-full max-w-2xl mx-4 z-50"
          >
            <div className="cyber-border rounded-xl backdrop-blur-xl bg-gray-950/95 shadow-2xl overflow-hidden">
              {/* Search Input */}
              <div className="flex items-center p-4 border-b border-gray-800">
                <Search className="h-5 w-5 text-gray-400 mr-3" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search services, pages, and content..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-lg"
                />
                <button onClick={onClose} className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                  <X className="h-5 w-5 text-gray-400" />
                </button>
              </div>

              {/* Results */}
              <div className="max-h-96 overflow-y-auto">
                {query.trim() === "" ? (
                  <div className="p-8 text-center">
                    <Search className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400">Start typing to search services and content</p>
                  </div>
                ) : results.length === 0 ? (
                  <div className="p-8 text-center">
                    <div className="text-gray-400 mb-2">No results found for "{query}"</div>
                    <p className="text-sm text-gray-500">Try searching for services, pages, or security topics</p>
                  </div>
                ) : (
                  <div className="p-2">
                    {results.map((result, index) => {
                      const IconComponent = result.icon || getTypeIcon(result.type)
                      const isSelected = index === selectedIndex

                      return (
                        <Link
                          key={result.id}
                          href={result.url}
                          onClick={onClose}
                          className={`block p-4 rounded-lg transition-all ${
                            isSelected ? "bg-blue-500/10 border border-blue-500/30" : "hover:bg-gray-800/50"
                          }`}
                        >
                          <div className="flex items-start space-x-4">
                            <div
                              className={`w-10 h-10 rounded-lg bg-gradient-to-br ${getTypeColor(
                                result.type,
                              )} p-2 flex-shrink-0`}
                            >
                              <IconComponent className="h-full w-full text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-2 mb-1">
                                <h3 className={`font-semibold ${isSelected ? "text-blue-400" : "text-white"} truncate`}>
                                  {result.title}
                                </h3>
                                <span className="text-xs px-2 py-1 bg-gray-700 rounded-full text-gray-300 capitalize">
                                  {result.type}
                                </span>
                                {result.category && (
                                  <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full">
                                    {result.category}
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-gray-400 line-clamp-2">{result.description}</p>
                            </div>
                            <ArrowRight
                              className={`h-4 w-4 flex-shrink-0 ${isSelected ? "text-blue-400" : "text-gray-500"}`}
                            />
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>

              {/* Footer */}
              {results.length > 0 && (
                <div className="border-t border-gray-800 p-3 bg-gray-900/50">
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center space-x-4">
                      <span>↑↓ Navigate</span>
                      <span>↵ Select</span>
                      <span>Esc Close</span>
                    </div>
                    <span>{results.length} results</span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
