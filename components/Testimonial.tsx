"use client";

import Image from "next/image";
import img from "@/assets/images//img2.png"

export default function Testimonial() {
  return (
    <section className=" ml-20 py-16 " 
      style={{
                  backgroundImage: `url(${img.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.6
                }}>
      <div className="max-w-7xl mx-auto px-5">
        <div className="w-full rounded-2xl bg-white/90 shadow-lg border border-gray-100 flex flex-col md:flex-row items-center gap-8 p-8">
        <div className="flex-1 min-w-0">
          <h3 className="text-2xl md:text-3xl font-bold text-[#1a3a3a] mb-3">How the Coop Product Catalog Empowers You</h3>
          <blockquote className="text-lg md:text-xl text-gray-700 mb-5 italic border-l-4 border-[#0084bd] pl-4">“We purchased a new tractor with an equipment loan. The process was fast and easy.”</blockquote>
          <div>
            <span className="font-semibold text-[#0084bd]">Abebe Tesfaye</span>
            <span className="block text-gray-500 text-sm">Farmer</span>
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="relative w-48 h-36 md:w-56 md:h-40 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
              alt="Testimonial Video Preview"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/80 rounded-full p-3 shadow">
                <svg className="w-10 h-10 text-[#0084bd]" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="12" fill="#fff" />
                  <polygon points="10,8 16,12 10,16" fill="#0084bd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
