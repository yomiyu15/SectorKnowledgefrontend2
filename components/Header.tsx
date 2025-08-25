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

export default function Header() {
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
          </nav>

          {/* Mobile Menu (Pages) */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-7 w-7 text-orange-600" /> : <Menu className="h-7 w-7 text-orange-600" />}
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/#products" className="text-[#0084bd] font-semibold hover:text-[#ee7b28] transition">
            Products
          </Link>
          <Link href="/#howitworks" className="text-[#0084bd] font-semibold hover:text-[#ee7b28] transition">
            Product Docs
          </Link>
          <Link href="/#faq" className="text-[#0084bd] font-semibold hover:text-[#ee7b28] transition">
            Frequently Asked Questions
          </Link>
          <Link href="/dashboard">
            <button className="bg-gradient-to-r from-[#00bcd4] to-[#00adef] text-white font-semibold px-5 py-2 rounded-lg shadow hover:scale-105 transition-transform">
              Dashboard
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
