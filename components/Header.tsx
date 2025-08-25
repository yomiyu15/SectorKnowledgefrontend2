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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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

          {/* Navigation Links - Now on the same line as logo */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-800 font-semibold hover:text-orange-600 transition">
              Home
            </Link>
            <Link href="/#products" className="text-gray-800 font-semibold hover:text-orange-600 transition">
              Products
            </Link>
           
            <Link href="/#faq" className="text-gray-800 font-semibold hover:text-orange-600 transition">
              FAQ
            </Link>
            <Link href="/dashboard" className="text-orange-600 font-semibold hover:text-orange-800 transition border-b-2 border-orange-600">
              Product Dashboard
            </Link>
              <Link href="/#versions" className="text-gray-800 font-semibold hover:text-orange-600 transition">
           Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-7 w-7 text-orange-600" /> : <Menu className="h-7 w-7 text-orange-600" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="text-gray-800 hover:text-orange-600 transition-colors text-base font-semibold px-3 py-2">
                Home
              </Link>
              <Link href="/#products" className="text-gray-800 hover:text-orange-600 transition-colors text-base font-semibold px-3 py-2">
                Products
              </Link>
             
              <Link href="/#faq" className="text-gray-800 hover:text-orange-600 transition-colors text-base font-semibold px-3 py-2">
              FAQ
              </Link>
              <Link href="/dashboard" className="text-orange-600 hover:text-orange-800 transition-colors text-base font-semibold px-3 py-2 border-l-4 border-orange-600">
                Product Dashboard
              </Link>
              <Link href="/#versions" className="text-gray-800 hover:text-orange-600 transition-colors text-base font-semibold px-3 py-2">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
