"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#0a2540] to-[#0d2d4d] text-white py-10 overflow-hidden">
      
      {/* Floating Decorative Circles */}
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#00adef] opacity-20 rounded-full animate-pulse"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#ff6ec7] opacity-10 rounded-full animate-pulse"></div>
      
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Contact Section */}
        <div className="text-center md:text-left mb-6">
          <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00adef] to-[#ff6ec7] mb-3">
            Contact Us
          </h3>

          <p className="text-gray-300 text-sm mb-1">
            Phone: <a href="tel:+251115150229" className="hover:text-white transition-colors">+251 11 515 0229</a>
          </p>
          <p className="text-gray-300 text-sm mb-1">
            Fax: +251 11 515 0489
          </p>
          <p className="text-gray-300 text-sm mb-1">
            Customer Contact Center: 609
          </p>
          <p className="text-gray-300 text-sm mb-1">
            Email: <a href="mailto:info@coopbankoromia.com.et" className="hover:text-white transition-colors">info@coopbankoromia.com.et</a>
          </p>
          <p className="text-gray-300 text-sm">
            Address: Around the Japan Embassy (S.C) Building, Bole Area, Addis Ababa
          </p>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#00adef]/20 pt-6 text-center text-gray-400 text-xs">
          <p>&copy; {new Date().getFullYear()} Cooperative Bank of Oromia. All rights reserved.</p>
          <div className="flex justify-center mt-2 space-x-3">
            {["Privacy Policy", "Terms", "Security"].map((item, index) => (
              <motion.span
                key={index}
                whileHover={{ y: -2, scale: 1.05 }}
                className="cursor-pointer hover:text-[#00adef] transition-colors text-xs"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
