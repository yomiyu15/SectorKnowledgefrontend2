"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { motion, AnimatePresence } from "framer-motion"
import logo from "../assets/images/bb.png"

interface HeaderProps {
  onToggleSidebar?: () => void
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <motion.header 
      className="glass sticky top-0 z-50 border-b border-white/10 dark:border-white/5"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left: Logo + Title */}
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center gap-3">
              <div className="relative">
                <Image
                  src={logo}
                  alt="Logo"
                  width={52}
                  height={52}
                  className="rounded-2xl border-2 border-white/20 shadow-lg object-contain transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent" />
              </div>
              <span className="text-2xl font-bold gradient-text tracking-tight">
                PRODUCTS
              </span>
            </Link>
          </motion.div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden lg:flex items-center gap-1">
            {[
              { href: "/", label: "Home" },
              { href: "/#products", label: "Products" },
              { href: "/#faq", label: "FAQ" },
              { href: "/dashboard", label: "Dashboard", isActive: true },
              { href: "/#contact", label: "Contact" },
            ].map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-white/10 dark:hover:bg-white/5 ${
                    link.isActive
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Right side: Theme Toggle + Mobile Menu */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative h-10 w-10 rounded-xl bg-white/10 dark:bg-white/5 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? (
                    <X className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  ) : (
                    <Menu className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  )}
                </motion.div>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-6 border-t border-white/10 dark:border-white/5">
                <div className="flex flex-col space-y-1">
                  {[
                    { href: "/", label: "Home" },
                    { href: "/#products", label: "Products" },
                    { href: "/#faq", label: "FAQ" },
                    { href: "/dashboard", label: "Dashboard", isActive: true },
                    { href: "/#contact", label: "Contact" },
                  ].map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                          link.isActive
                            ? "text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20 border-l-4 border-blue-600 dark:border-blue-400"
                            : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/10 dark:hover:bg-white/5"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
