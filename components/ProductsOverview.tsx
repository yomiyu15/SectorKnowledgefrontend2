"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Landmark, PiggyBank, Users } from "lucide-react";

interface SectorInsight {
  id: number;
  title: string;
  description: string;
  category: string;
}

export default function SectorInsightsOverview() {
  const [sectorInsights, setSectorInsights] = useState<SectorInsight[]>([]);

  useEffect(() => {
    fetchSectorInsights();
  }, []);

  const fetchSectorInsights = async () => {
    try {
      const res = await fetch("https://backend-service-1wqi.onrender.com/api/products");
      if (res.ok) {
        const data = await res.json();
        setSectorInsights(data);
      } else {
        console.error("Failed to fetch sector insights");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  // Get icon based on sector category
  const getIcon = (category: string) => {
    const normalized = category.toLowerCase();

    if (normalized.includes("digital")) {
      return Smartphone;
    } else if (normalized.includes("ifb") || normalized.includes("conventional")) {
      return Landmark;
    } else if (normalized.includes("deposit")) {
      return PiggyBank;
    } else if (normalized.includes("youth") || normalized.includes("women")) {
      return Users;
    }
    return Smartphone; // Default icon
  };

  return (
    <section className="py-16 bg-gradient-to-br from-[#f8fafc] to-[#fff7ed]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <h2 className="text-4xl font-extrabold text-[#ee7b28] mb-2 tracking-tight">Explore Sector Products</h2>
          <p className="text-lg text-gray-500 max-w-2xl">Handpicked solutions and insights for every sector. Find your next opportunity below.</p>
        </div>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-8 [column-fill:_balance]">
          {sectorInsights.map((sector, idx) => {
            const Icon = getIcon(sector.category || sector.title);
            return (
              <div
                key={sector.id}
                className={`mb-8 break-inside-avoid rounded-2xl shadow-lg border border-orange-100 bg-white hover:shadow-2xl transition-all duration-300 ${idx % 3 === 0 ? 'pt-8 pb-6' : idx % 3 === 1 ? 'pt-12 pb-8' : 'pt-6 pb-10'}`}
              >
                <div className="flex items-center gap-3 px-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-orange-200 to-orange-400 shadow">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="font-bold text-lg text-[#ee7b28]">{sector.title}</div>
                </div>
                <div className="px-6 pt-4 pb-2 text-gray-700 text-base">
                  {sector.description}
                </div>
                <div className="px-6 pt-2 flex justify-end">
                  <span className="inline-block bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">{sector.category}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
