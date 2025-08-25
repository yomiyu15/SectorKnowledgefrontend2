"use client";

import Image from "next/image";
import michu from "@/assets/images/michukiya .png";
import ebirr from "@/assets/images/ebir.png";
import CRM from "@/assets/images/crm.png";
import { useRef } from "react";

const cardData = [
  {
    title: "Michu",
    img: michu,
  },
  {
    title: "Ebirr",
    img: ebirr,
  },
  {
    title: "CRM",
    img: CRM,
  },
];

export default function HorizontalScrollCards() {
  return (
    <section className="py-12 bg-gradient-to-b from-[#f8fafc] to-[#e6faff]">
      <style>{`
        @keyframes scrollCards {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scrollCards {
          animation: scrollCards 10s linear infinite;
        }
        .scroll-freeze:hover {
          animation-play-state: paused !important;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-5">
        <div className="lg:pl-16">
          <h2 className="text-4xl font-extrabold text-[#ee7b28] mb-6 tracking-tight text-left">
            Featured Products
          </h2>
          <div className="w-full overflow-x-hidden relative" style={{ height: "20rem" }}>
            <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-r from-[#f8fafc] via-transparent to-[#f8fafc] opacity-20" />
            <div
              className="flex gap-10 animate-scrollCards scroll-freeze min-w-full"
              style={{}}
            >
              {[...cardData, ...cardData].map((card, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-72 h-80 bg-white rounded-3xl shadow-xl border border-[#e0e7ef] relative group transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  style={{
                    boxShadow:
                      "0 4px 24px 0 rgba(0, 173, 239, 0.08), 0 1.5px 6px 0 rgba(238, 123, 40, 0.08)",
                  }}
                >
                  <div className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden">
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-3xl" />
                  </div>
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white/90 px-6 py-2 rounded-full shadow text-lg font-bold text-[#0084bd] border border-[#ee7b28] group-hover:bg-[#ee7b28]/90 group-hover:text-white transition-all">
                    {card.title}
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-block w-4 h-4 rounded-full bg-gradient-to-br from-[#00bcd4] to-[#ee7b28] shadow-lg animate-pulse"></span>
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