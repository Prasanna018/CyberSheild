"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Command } from "lucide-react"
import { SearchModal } from "./search-modal"

export function SearchButton() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsSearchOpen(true)}
        className="flex items-center space-x-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600 rounded-lg transition-all backdrop-blur-sm group"
      >
        <Search className="h-4 w-4 text-gray-400 group-hover:text-gray-300" />
        <span className="text-sm text-gray-400 group-hover:text-gray-300 hidden sm:inline">Search...</span>
        <div className="hidden sm:flex items-center space-x-1 ml-2">
          <kbd className="px-1.5 py-0.5 text-xs bg-gray-700 text-gray-300 rounded border border-gray-600">
            <Command className="h-3 w-3" />
          </kbd>
          <kbd className="px-1.5 py-0.5 text-xs bg-gray-700 text-gray-300 rounded border border-gray-600">K</kbd>
        </div>
      </motion.button>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}
