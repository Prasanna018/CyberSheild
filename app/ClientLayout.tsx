"use client"

import type React from "react"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SearchModal } from "@/components/search-modal"
import { PageTransition } from "@/components/page-transition"
import { useState, Suspense } from "react"
import { LoadingSpinner } from "@/components/loading-spinner"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-inter bg-gray-950 text-white antialiased`}>
        <Suspense fallback={<LoadingSpinner />}>
          <Navigation />
          <PageTransition>
            <main className="min-h-screen">{children}</main>
          </PageTransition>
          <Footer />
          <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </Suspense>
      </body>
    </html>
  )
}
