
"use client";

import { motion } from "framer-motion";
import { Search, FileText, Info } from "lucide-react";

export default function StaffProductInfo() {
  const steps = [
    {
      icon: <Search className="w-8 h-8 text-white" />,
      title: "Search Bank Products",
      desc: "Quickly locate detailed documentation on all banking products available to customers.",
      action: null,
    },
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: "Review Product Details",
      desc: "Access key product features, eligibility criteria, interest rates, and compliance guidelines.",
      action: (
        <button className="bg-[#0077c2] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#005ea2] transition">
          Download PDF
        </button>
      ),
    },
    {
      icon: <Info className="w-8 h-8 text-white" />,
      title: "Assist Customers",
      desc: "Use accurate information to guide customers and ensure a smooth service experience.",
      action: null,
    },
  ];

  return (
    <section className="py-16 bg-[#f4faff]">
      <div className="max-w-3xl mx-auto px-4">
        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          <button className="bg-[#0077c2] text-white font-semibold px-5 py-2 rounded-t-lg shadow focus:outline-none">
            Product Brochures
          </button>
          <button className="bg-white text-[#0077c2] font-semibold px-5 py-2 rounded-t-lg border border-[#e0e7ef] shadow-sm focus:outline-none">
            Comparison Sheets
          </button>
          <button className="bg-white text-[#0077c2] font-semibold px-5 py-2 rounded-t-lg border border-[#e0e7ef] shadow-sm focus:outline-none">
            Terms & Conditions
          </button>
          <div className="flex-1" />
          <button className="bg-white text-[#0077c2] font-bold px-4 py-2 rounded-lg border border-[#e0e7ef] shadow-sm focus:outline-none">
            —
          </button>
        </div>
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-[#0077c2]">Product Docs</h2>
        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-start md:items-center bg-white rounded-2xl border border-[#dbeafe] shadow p-6 md:p-8 gap-4"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#0077c2] flex items-center justify-center mr-0 md:mr-6 mb-2 md:mb-0 shadow">
                {step.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#1a3a3a] mb-1">{step.title}</h3>
                <p className="text-gray-700">{step.desc}</p>
                {step.action && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    <a
                      href="#"
                      className="text-[#0077c2] font-semibold hover:underline"
                    >
                      Download PDF
                    </a>
                    {step.action}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    
  );}