
"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

import michu from "../assets/images/michukiya .png";
import ebirr from "../assets/images/ebir.png";
import CRM from "../assets/images/crm.png";
import michukiya from "../assets/images/michukiya2.png";
const cardData = [
  {
   
    img: michu,
  },
  {
    
    img: ebirr,
  },
  {
   
    img: CRM,
  },
 
  // {
  //   title: "Animation",
  //   img: "/images/animation.jpg",
  // },
  // {
  //   title: "Branding",
  //   img: "/images/branding.jpg",
  // },
  // {
  //   title: "Illustration",
  //   img: "/images/illustration.jpg",
  // },
];


export default function HorizontalScrollCards() {
  const scrollRef = useRef<HTMLDivElement>(null);
  // Auto-scroll effect
  // No JS scroll needed, use CSS animation

  
    
   return (
    <section className="py-10">
      <style>{`
        @keyframes scrollCards {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-5">
        <div className="lg:pl-16">
          <h2 className="text-4xl font-extrabold text-[#ee7b28] mb-2 tracking-tight text-left">Products</h2><br />
          <div className="w-full overflow-x-hidden relative" style={{ height: '18rem' }}>
            <div
              className="flex gap-8 animate-scrollCards min-w-full"
              style={{
                animation: 'scrollCards 30s linear infinite',
              }}
            >
              {[...cardData, ...cardData, ...cardData].map((card, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-64 h-72 bg-white rounded-2xl shadow-lg border border-gray-100 relative group"
                >
                  <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src={card.img}
                      alt="img"
                      fill
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
);
                      }