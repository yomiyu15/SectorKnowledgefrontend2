"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950 text-white overflow-hidden" id="contact">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(120,119,198,0.3),_transparent_50%),radial-gradient(circle_at_80%_20%,_rgba(255,119,198,0.15),_transparent_50%),radial-gradient(circle_at_40%_40%,_rgba(120,200,255,0.2),_transparent_50%)]" />
        
        {/* Animated Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-4">
                COOP Bank
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Leading cooperative banking solutions provider, offering innovative financial 
                services designed for sustainable growth and community development.
              </p>
            </div>
            
            <div className="flex gap-4">
              {[
                { icon: "💼", label: "Enterprise" },
                { icon: "🏦", label: "Banking" },
                { icon: "🤝", label: "Cooperative" },
              ].map((tag) => (
                <div
                  key={tag.label}
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20"
                >
                  <span className="mr-1">{tag.icon}</span>
                  {tag.label}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-xl font-semibold text-white mb-6">
              Get In Touch
            </h4>
            
            <div className="space-y-4">
              <motion.a
                href="tel:+251115150229"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-2 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+251 11 515 0229</span>
              </motion.a>
              
              <motion.div
                className="flex items-center gap-3 text-slate-300"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <Phone className="w-4 h-4" />
                </div>
                <span>Customer Center: 609</span>
              </motion.div>
              
              <motion.a
                href="mailto:info@coopbankoromia.com.et"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-2 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>info@coopbankoromia.com.et</span>
              </motion.a>
              
              <motion.div
                className="flex items-start gap-3 text-slate-300"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-2 bg-orange-500/20 rounded-lg mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div>Addis Ababa, Ethiopia</div>
                  <div className="text-sm text-slate-400">Fax: +251 11 515 0489</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-xl font-semibold text-white mb-6">
              Quick Links
            </h4>
            
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Products", href: "/#products" },
                { label: "Dashboard", href: "/dashboard" },
                { label: "FAQ", href: "/#faq" },
                { label: "Support", href: "/#contact" },
                { label: "About", href: "/#about" },
                { label: "Terms", href: "/terms" },
              ].map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                  <span className="text-sm">{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
        
        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm">
              © 2024 COOP Bank of Oromia. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              <motion.div
                className="flex items-center gap-2 text-slate-400 text-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Service Status: Online</span>
              </motion.div>
              
              <div className="text-slate-400 text-sm">
                Built with ❤️ for modern banking
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
