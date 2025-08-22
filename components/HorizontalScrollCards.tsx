"use client";

import Image from "next/image";
import michu from "../assets/images/michukiya .png";
import ebirr from "../assets/images/ebir.png";
import CRM from "../assets/images/crm.png";
import michukiya from "../assets/images/michukiya2.png";

const cardData = [
  { img: michu, alt: "Michu product" },
  { img: ebirr, alt: "Ebirr product" },
  { img: CRM, alt: "CRM product" },
  { img: michukiya, alt: "Michukiya 2 product" },
];

export default function HorizontalScrollCards() {
  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl font-extrabold text-[#ee7b28] mb-4 tracking-tight">Products</h2>
        <div className="w-full overflow-x-hidden relative" style={{ height: "14rem" }}>
          <div className="flex gap-6 animate-scrollCards min-w-full">
            {[...cardData, ...cardData].map((card, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-40 sm:w-48 h-48 sm:h-56 bg-white rounded-xl shadow-md border border-gray-100 relative group overflow-hidden"
              >
                <Image
                  src={card.img}
                  alt={card.alt}
                  fill
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-sm font-semibold text-center px-2">
                  {card.alt}
                </div>
              </div>
            ))}
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
