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
    title: "Michu",
    desc: "MICHU: Digital loan solution without collateral",
  },
  {
    img: ebirr,
    title: "eBirr",
    desc: "EBIRR: Digital wallet and payment platform",
  },
  {
    img: CRM,
    title: "CRM",
    desc: "CRM: Customer relationship management system",
  },
  {
    img: michukiya,
    title: "Michukiya 2",
    desc: "MICHU-KIYA: Digital loan solution without collateral for woman",
  },
];

export default function HorizontalScrollCards() {
  const scrollRef = useRef<HTMLDivElement>(null);
  // Auto-scroll effect
  // No JS scroll needed, use CSS animation

  
    
   return (
    <section className="py-10" id="products">
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
                      alt={card.title}
                      fill
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {card.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollCards {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scrollCards {
          animation: scrollCards 25s linear infinite;
        }
      `}</style>
    </section>
  );
}