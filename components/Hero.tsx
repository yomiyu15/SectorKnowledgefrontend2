"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Shield, Zap } from "lucide-react";
import Img1 from "../assets/images/zig.png";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const features = [
    { 
      icon: Shield, 
      text: "Core Banking Focus",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      icon: TrendingUp, 
      text: "Financial Services", 
      color: "from-purple-500 to-pink-500"
    },
    { 
      icon: Zap, 
      text: "Smart Financing", 
      color: "from-orange-500 to-red-500"
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Faded background image */}
        <Image
          src={Img1}
          alt="Banking Background"
          fill
          className="object-cover opacity-5 dark:opacity-5"
          priority
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/30 dark:from-blue-950/30 dark:via-transparent dark:to-purple-950/20" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left: Main Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200/50 dark:border-blue-700/50 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                  COOP Banking Catalog
                </span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="block text-gray-900 dark:text-white">
                  Discover &
                </span>
                <span className="block text-gray-900 dark:text-white">
                  Compare
                </span>
                <span className="block gradient-text mt-2">
                  Banking Solutions
                </span>
              </h1>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed"
            >
              Explore a comprehensive catalog of innovative banking solutions designed for 
              cooperatives, agents, and enterprises. Compare features, access detailed 
              documentation, and discover tools that drive sustainable growth.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Products
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </Link>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg"
              >
                Learn More
              </Button>
            </motion.div>

            {/* Feature Highlights */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-transform duration-300"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                >
                  <div className={`p-2 rounded-xl bg-gradient-to-r ${feature.color}`}>
                    <feature.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {[
                { value: "50+", label: "Banking Products" },
                { value: "99%", label: "Uptime" },
                { value: "24/7", label: "Support" },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <motion.div
                    className="text-2xl sm:text-3xl font-bold gradient-text"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Visual Element */}
          <motion.div
            className="relative hidden lg:block"
            variants={itemVariants}
          >
            <div className="relative">
              {/* Main Card */}
              <motion.div
                className="modern-card p-8 space-y-6"
                initial={{ opacity: 0, x: 100, rotateY: -15 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Total Products</div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">50+</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ duration: 1.5, delay: 1 }}
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>Core Banking</span>
                    <span>85%</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  {["Mobile", "Web", "API"].map((platform, index) => (
                    <motion.div
                      key={platform}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-medium"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                    >
                      {platform}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Floating Cards */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 modern-card p-4 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0, rotate: -45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="float"
              >
                <TrendingUp className="w-8 h-8 text-green-500" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-20 h-20 modern-card p-3 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0, rotate: 45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 1.7 }}
                className="float"
                style={{ animationDelay: "1s" }}
              >
                <Zap className="w-6 h-6 text-yellow-500" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
  