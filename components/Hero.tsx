"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Img1 from "../assets/images/zig.png";

export default function Hero() {
  return (
    <section className="relative py-20 overflow-hidden "
  
    >
      {/* Faded agriculture background image */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <Image
          src={Img1}
          alt="Agriculture Background"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>
      {/* Decorative cyan shapes */}
      {/* <div className="absolute top-0 left-0 w-72 h-72 bg-[#00bcd4] opacity-20 rounded-full blur-2xl -z-10" /> */}
      {/* <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00adef] opacity-20 rounded-full blur-2xl -z-10" /> */}

      <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
        {/* Left: Main Content */}
        <motion.div
          className="flex-1 space-y-8 flex flex-col items-start"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full border border-[#00bcd4]/30 shadow">
            <svg className="w-5 h-5 text-[#00bcd4]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6" />
            </svg>
            <span className="text-sm font-semibold text-[#00bcd4]">COOP Catalog</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-[#0084bd] leading-tight">
            Discover & Compare <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
              Banking Solutions
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[#1a3a3a] max-w-xl">
            Explore a complete catalog of innovative banking solutions designed for cooperatives, agents, and enterprises. Compare features, access detailed documentation, 
            and discover tools that simplify transactions, enable financing, and drive sustainable growth.
            </p>

          {/* Dashboard Button */}
          <div className="mt-6">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#00bcd4] to-[#00adef] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition-transform"
              >
                Explore Products
              </Button>
            </Link>
          </div>

          {/* Feature Highlights Row */}
          <div className="flex flex-wrap justify-start gap-7 mt-3">
            <div className="flex items-center gap-2 px-4 py-2 ">
              <svg className="w-5 h-5 text-[#0084bd]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" /></svg>
             Core Banking Focus
            </div>
            <div className="flex items-center gap-2 px-4 py-2 ">
              <svg className="w-5 h-5 text-[#0084bd]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 9h6v6H9z" /></svg>
             Financial Services Emphasis
            </div>
            <div className="flex items-center gap-2 px-4 py-2 ">
              <svg className="w-5 h-5 text-[#0084bd]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /><circle cx="12" cy="12" r="10" /></svg>
            Smart Financing
            </div>
          </div>

     

          {/* Quick Crop Cards */}
          {/* <div className="flex gap-4 mt-8">
            {[
              { name: "Soybean", icon: "🌱", color: "#e0f7fa" },
              { name: "Coffee", icon: "☕", color: "#b2ebf2" },
              { name: "Corn", icon: "🌽", color: "#80deea" },
            ].map((crop) => (
              <div
                key={crop.name}
                className="flex flex-col items-center justify-center px-4 py-3 rounded-xl shadow bg-white hover:bg-[color:var(--tw-bg-opacity)] transition cursor-pointer"
                style={{ backgroundColor: crop.color }}
              >
                <span className="text-3xl">{crop.icon}</span>
                <span className="mt-2 text-[#0084bd] font-semibold">{crop.name}</span>
              </div>
            ))}
          </div> */}
        </motion.div>

        {/* Right: Illustration/Image */}
       
       
      </div>
       <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          
        </motion.div>
    </section>
  );
}
  