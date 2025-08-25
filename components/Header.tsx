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
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-2xl font-extrabold text-[#0084bd] tracking-tight">
            CoopBank
          </Link>
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
