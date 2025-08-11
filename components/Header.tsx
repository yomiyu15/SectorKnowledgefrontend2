"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import logo from "../assets/images/bb.png"

interface HeaderProps {
  onToggleSidebar?: () => void
}

export default function Header({ onToggleSidebar }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/90 backdrop-blur-lg shadow-lg border-b border-orange-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left: Logo + Title */}
          <div className="flex items-center gap-3">
            <Link href="/">
              <Image
                src={logo}
                alt="Logo"
                width={60}
                height={60}
                className="rounded-full border-4 border-orange-200 shadow-md object-contain"
              />
            </Link>
            <span className="ml-2 text-2xl font-bold text-orange-600 tracking-tight">PRODUCTS</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors text-base font-semibold px-3 py-2 rounded-lg hover:bg-orange-50">
              Home
            </Link>
            <Link href="/dashboard" className="text-gray-700 hover:text-orange-600 transition-colors text-base font-semibold px-3 py-2 rounded-lg hover:bg-orange-50">
              Sectors
            </Link>
              <Link href="/products" className="text-gray-700 hover:text-orange-600 transition-colors text-base font-semibold px-3 py-2 rounded-lg hover:bg-orange-50">
              Product Overview
            </Link>
          </nav>

          {/* Mobile Menu (Pages) */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-7 w-7 text-orange-600" /> : <Menu className="h-7 w-7 text-orange-600" />}
            </Button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 rounded-xl border border-orange-100 bg-white shadow-lg">
            <div className="px-4 py-2 space-y-1">
              <Link href="/" className="block py-2 text-base text-gray-700 hover:text-orange-600 font-semibold rounded-lg hover:bg-orange-50">
                Home
              </Link>
              <Link href="/dashboard" className="block py-2 text-base text-gray-700 hover:text-orange-600 font-semibold rounded-lg hover:bg-orange-50">
                Sectors
              </Link>
              <Link href="/admin" className="block py-2 text-base text-gray-700 hover:text-orange-600 font-semibold rounded-lg hover:bg-orange-50">
                Admin
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
