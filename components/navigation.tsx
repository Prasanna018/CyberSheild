"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Shield } from "lucide-react"
import { SearchButton } from "./search-button"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-gray-950/95 backdrop-blur-xl border-b border-blue-500/20 shadow-lg shadow-blue-500/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-18">
          {/* Logo */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <Link href="/" className="flex items-center space-x-2 lg:space-x-3 group">
              <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.6 }} className="relative">
                <Shield className="h-7 w-7 lg:h-9 lg:w-9 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute inset-0 bg-blue-400/20 rounded-full blur-sm group-hover:bg-blue-300/30 transition-all duration-300"
                />
              </motion.div>
              <span className="font-space-grotesk font-bold text-lg lg:text-xl xl:text-2xl cyber-text">
                CyberShield
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`relative px-3 py-2 xl:px-4 xl:py-2 text-sm xl:text-base font-medium rounded-lg transition-all duration-300 ${
                    pathname === item.href
                      ? "text-blue-400 bg-blue-500/10"
                      : "text-gray-300 hover:text-blue-400 hover:bg-gray-800/50"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {pathname === item.href && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-blue-500/10 border border-blue-500/30 rounded-lg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="ml-4"
            >
              <SearchButton />
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 xl:px-6 xl:py-2.5 rounded-lg text-sm xl:text-base font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300 cyber-glow relative overflow-hidden group"
            >
              <motion.div
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
              <span className="relative z-10">Get Started</span>
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 rounded-lg hover:bg-gray-800/50 transition-colors duration-300 relative z-50"
          >
            <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
              {isOpen ? <X className="h-6 w-6 text-gray-300" /> : <Menu className="h-6 w-6 text-gray-300" />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-gray-950/98 backdrop-blur-xl border-t border-blue-500/20"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                      pathname === item.href
                        ? "text-blue-400 bg-blue-500/10 border border-blue-500/30"
                        : "text-gray-300 hover:text-blue-400 hover:bg-gray-800/50"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-2"
              >
                <SearchButton />
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-lg text-base font-medium mt-4 cyber-glow"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
