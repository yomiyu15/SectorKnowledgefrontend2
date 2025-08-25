
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
      caption: "Step 1: Navigate to Explore products Button",
      description: "Start from the Hero button where the breif descriptions are displayed."
    },
    {
      image: hero2,
      caption: "Step 2: OR Select product dashboard",
      description: "Click on the product dashboard from the header that will redirect you to the product dashboard."
    },
    {
      image: hero3,
      caption: "Step 3: View product details",
      description: "Browse through the detailed product information and specifications."
    },
    {
      image: hero4,
      caption: "Step 4: Search for the specific product",
      description: "Go to the search bar in the dashboard to find the specific product you are looking for."
    },
    {
      image: hero5,
      caption: "Step 4: Access documentation",
      description: "View the complete product documentation."
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
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className={`${expandedIdx === idx ? "lg:col-span-3" : ""} cursor-pointer flex flex-col bg-white rounded-xl overflow-hidden border border-[#dbeafe] shadow-sm`}
                  >
                    <div className={`relative ${expandedIdx === idx ? "h-96" : "h-48"} w-full bg-gray-100`}>
                      <Image
                        src={item.image}
                        alt={item.caption}
                        width={1000}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-[#0077c2] text-white text-sm font-medium px-3 py-1 rounded-full">
                        Step {idx + 1}
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="text-lg font-bold text-[#1a3a3a] mb-1">{item.caption}</h4>
                      <p className="text-gray-700 text-sm">{item.description}</p>
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
        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto">
          <button 
            onClick={() => setActiveTab("howToNavigate")} 
            className={`${activeTab === "howToNavigate" ? "bg-[#0077c2] text-white" : "bg-white text-[#0077c2]"} font-semibold px-5 py-2 rounded-t-lg shadow focus:outline-none whitespace-nowrap transition-colors`}
          >
            How to Navigate
          </button>
          <button 
            onClick={() => setActiveTab("whatItIncludes")} 
            className={`${activeTab === "whatItIncludes" ? "bg-[#0077c2] text-white" : "bg-white text-[#0077c2]"} font-semibold px-5 py-2 rounded-t-lg border border-[#e0e7ef] shadow-sm focus:outline-none whitespace-nowrap transition-colors`}
          >
            What It Includes
          </button>
          <button 
            onClick={() => setActiveTab("versions")} 
            className={`${activeTab === "versions" ? "bg-[#0077c2] text-white" : "bg-white text-[#0077c2]"} font-semibold px-5 py-2 rounded-t-lg border border-[#e0e7ef] shadow-sm focus:outline-none whitespace-nowrap transition-colors`}
          >
            Version 
          </button>
        </div>
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-[#0077c2]">
          {activeTab === "howToNavigate" && "How to Navigate"}
          {activeTab === "whatItIncludes" && "What It Includes"}
          {activeTab === "versions" && "Version of Final Uploads"}
        </h2>
        {/* Content */}
        {renderContent()}
      </div>
    </section>
  );
}