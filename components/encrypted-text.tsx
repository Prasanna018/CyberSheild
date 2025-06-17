"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface EncryptedTextProps {
  text: string
  className?: string
}

export function EncryptedText({ text, className = "" }: EncryptedTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [isDecrypting, setIsDecrypting] = useState(true)

  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*"

  useEffect(() => {
    let iteration = 0
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index]
            }
            return characters[Math.floor(Math.random() * characters.length)]
          })
          .join(""),
      )

      if (iteration >= text.length) {
        clearInterval(interval)
        setIsDecrypting(false)
      }

      iteration += 1 / 3
    }, 30)

    return () => clearInterval(interval)
  }, [text])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`encrypted-text ${className}`}>
      {displayText}
      {isDecrypting && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
          className="ml-1"
        >
          |
        </motion.span>
      )}
    </motion.div>
  )
}
