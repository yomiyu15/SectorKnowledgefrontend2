
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, FileText,  Image as ImageIcon, FileCheck, Clock, ChevronRight, Scale } from "lucide-react";
import Image from "next/image";

// Import images directly
import hero1 from "../assets/images/AA.png";
import hero2 from "../assets/images/AAA.png";
import hero3 from "../assets/images/step2.png";
import hero4 from "../assets/images/ste3.png";
import hero5 from "../assets/images/ste4.png";
import hero6 from "../assets/images/ste5.png";

export default function StaffProductInfo() {
  const [activeTab, setActiveTab] = useState("howToNavigate");
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  
  // Navigation sequence images
  const navigationSequence = [
    {
      image: hero1,
      caption: "Navigate to Explore products",
      description: "Begin your journey from the hero section where comprehensive product overviews are beautifully displayed with intuitive navigation."
    },
    {
      image: hero2,
      caption: "Access Product Dashboard",
      description: "Seamlessly transition to the product dashboard through the elegantly designed header navigation for an immersive experience."
    },
    {
      image: hero3,
      caption: "Explore Product Details",
      description: "Discover rich, detailed product information presented in a visually stunning interface with comprehensive specifications."
    },
    {
      image: hero4,
      caption: "Smart Product Search",
      description: "Utilize the intelligent search functionality to instantly find your desired products with predictive suggestions and filters."
    },
    {
      image: hero5,
      caption: "Access Documentation",
      description: "Experience beautifully formatted documentation with interactive elements and comprehensive product insights."
    },
   
  ];
  
 

  const whatItIncludesContent = [
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: "Product Documentation",
      desc: "Includes complete documentation of all product features, specifications, and usage guidelines.",
    },
    {
      icon: <Search className="w-8 h-8 text-white" />,
      title: "Search Functionality",
      desc: "Enabled searching specific product.",
    },
    {
      icon: <Scale className="w-8 h-8 text-white" />,
      title: "Compliance & Regulatory Info",
      desc: "Ensures access to up-to-date compliance standards and regulatory requirements.",
    },
  ];

  const versionContent = [
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      title: "Version 1.0",
      desc: "Released on August 01, 2025. Added new product categories and improved search functionality.",
    },
    
  ];

  const imageDescriptions = [
    {
      icon: <ImageIcon className="w-8 h-8 text-white" />,
      title: "Dashboard Overview",
      desc: "The main dashboard displays all product categories with color-coded sections for easy navigation.",
      note: "Note: Click on any product category to view detailed information.",
    },
    {
      icon: <ImageIcon className="w-8 h-8 text-white" />,
      title: "Product Detail View",
      desc: "Product detail pages show comprehensive information including features, pricing, and availability.",
      note: "Note: Use the tabs at the top to switch between different information sections.",
    },
    {
      icon: <ImageIcon className="w-8 h-8 text-white" />,
      title: "Search Results",
      desc: "Search results are displayed in a clean, organized format with filtering options on the left side.",
      note: "Note: Results can be sorted by relevance, date, or alphabetically using the dropdown menu.",
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "howToNavigate":
        return (
          <>
            {/* Navigation Image Sequence */}
            <div className="mb-10 bg-white rounded-2xl border border-[#dbeafe] shadow p-6">
              <h3 className="text-2xl font-bold text-[#0077c2] mb-6">Navigation Image Sequence</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {navigationSequence.map((item, idx) => (
                  <motion.div
                  key={idx}
                  onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className={`${expandedIdx === idx ? "lg:col-span-3" : ""} cursor-pointer flex flex-col bg-white rounded-2xl overflow-hidden border border-[#dbeafe]/50 shadow-lg hover:shadow-2xl hover:shadow-[#0077c2]/10 transition-all duration-300 transform`}
                >
                  <div className={`relative ${expandedIdx === idx ? "h-96" : "h-48"} w-full bg-gradient-to-br from-gray-100 to-gray-200`}>
                    <Image
                      src={item.image}
                      alt={item.caption}
                      width={1000}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-[#0077c2] to-[#00adef] text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                      {idx + 1}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 bg-gradient-to-br from-white to-[#f8fafc]">
                    <h4 className="text-xl font-bold bg-gradient-to-r from-[#1a3a3a] to-[#0077c2] bg-clip-text text-transparent mb-2">
                      {item.caption}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
                ))}
              </div>
              <div className="flex justify-center items-center mt-6">
                {expandedIdx === null ? (
                  <button
                    onClick={() => window.alert("Detailed instructions coming soon!")}
                    className="flex items-center text-[#0077c2] font-medium hover:underline focus:outline-none"
                  >
                  
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                ) : (
                  <button
                    onClick={() => setExpandedIdx(null)}
                    className="text-[#0077c2] font-medium hover:underline focus:outline-none"
                  >
                    Close details
                  </button>
                )}
              </div>
            </div>
            
            
           
            
          </>
        );
      case "whatItIncludes":
        return (
          <div className="space-y-6">
            {whatItIncludesContent.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-start md:items-center bg-white rounded-2xl border border-[#dbeafe] shadow p-6 md:p-8 gap-4"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#0077c2] flex items-center justify-center mr-0 md:mr-6 mb-2 md:mb-0 shadow">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1a3a3a] mb-1">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        );
      case "versions":
        return (
          <div className="space-y-6">
            {versionContent.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-start md:items-center bg-white rounded-2xl border border-[#dbeafe] shadow p-6 md:p-8 gap-4"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#0077c2] flex items-center justify-center mr-0 md:mr-6 mb-2 md:mb-0 shadow">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1a3a3a] mb-1">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="howitworks" className="py-16 bg-[#f4faff]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Beautiful Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-full border border-[#dbeafe]/50 bg-white/80 backdrop-blur-sm shadow-lg p-1">
            {[
              { key: "howToNavigate", label: "How to Navigate", icon: "🧭" },
              { key: "whatItIncludes", label: "What It Includes", icon: "✨" },
              { key: "versions", label: "Versions", icon: "🔄" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab.key
                    ? "bg-gradient-to-r from-[#0077c2] to-[#00adef] text-white shadow-xl shadow-[#0077c2]/30"
                    : "text-[#0077c2] hover:bg-white/50 hover:text-[#0077c2]"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-lg">{tab.icon}</span>
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </div>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#1a3a3a] to-[#0077c2] bg-clip-text text-transparent mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Follow these simple steps to get started with our platform.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0077c2] to-[#00adef] mx-auto mt-4 rounded-full" />
        </motion.div>
        {/* Content */}
        {renderContent()}
      </div>
    </section>
  );
}