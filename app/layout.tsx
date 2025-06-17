import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "CyberShield - Elite Cybersecurity Solutions",
  description:
    "Professional cybersecurity services including penetration testing, threat intelligence, compliance, and incident response. Protect your digital assets with our expert team.",
  keywords:
    "cybersecurity, penetration testing, threat intelligence, compliance, incident response, security consulting",
  authors: [{ name: "CyberShield Team" }],
  openGraph: {
    title: "CyberShield - Elite Cybersecurity Solutions",
    description: "Professional cybersecurity services to protect your digital assets",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'