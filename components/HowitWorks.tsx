"use client";

import { motion } from "framer-motion";
import { Search, FileText, Info } from "lucide-react";

export default function StaffProductInfo() {
  const steps = [
    {
      icon: <Search className="w-6 h-6 text-white" />,
      title: "Search Bank Products",
      desc: "Quickly locate detailed documentation on all banking products available to customers.",
    },
    {
      icon: <FileText className="w-6 h-6 text-white" />,
      title: "Review Product Details",
      desc: "Access key product features, eligibility criteria, interest rates, and compliance guidelines.",
    },
    {
      icon: <Info className="w-6 h-6 text-white" />,
      title: "Assist Customers",
      desc: "Use accurate information to guide customers and ensure a smooth service experience.",
    },
  ];

  return (
    <section className="relative py-20 ">
      <div className="max-w-4xl mx-auto px-4">
       <motion.h6
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
  className="text-2xl md:text-4xl font-extrabold text-center mb-12 text-[#0077c2]"
>
  Product Docs
</motion.h6>


        <div className="relative border-l-4 border-[#00adef]/40">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="mb-12 ml-8 relative"
            >
              <div className="absolute -left-[42px] w-10 h-10 rounded-full bg-[#00adef] flex items-center justify-center shadow-md">
                {step.icon}
              </div>

              <h3 className="text-xl font-semibold text-[#005ea2]">
                {step.title}
              </h3>
              <p className="text-gray-700 mt-2 max-w-lg">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
