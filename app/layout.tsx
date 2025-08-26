import type React from "react"
import type { Metadata } from "next"
import { Inter, Sora } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter'
})

const sora = Sora({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-sora'
})

export const metadata: Metadata = {
  title: "Bank Product Catalog | Modern Banking Solutions",
  description: "Discover innovative banking products and services designed for cooperatives, agents, and enterprises. Explore our comprehensive catalog of financial solutions.",
  keywords: ["banking", "financial services", "cooperatives", "products", "catalog"],
  authors: [{ name: "Bank Product Team" }],
  generator: 'v0.dev',
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Bank Product Catalog | Modern Banking Solutions",
    description: "Discover innovative banking products and services designed for cooperatives, agents, and enterprises.",
    type: "website",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`} suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
