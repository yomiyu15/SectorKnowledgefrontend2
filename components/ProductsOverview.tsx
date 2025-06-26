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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sector Insights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover in-depth information on various banking sectors such as agriculture financing, export loans, and other key industry supports that empower economic growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sectorInsights.map((sector) => {
            const Icon = getIcon(sector.category || sector.title);
            return (
              <Card key={sector.id} className="transition-shadow duration-300 hover:shadow-lg">
                <CardHeader className="text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: "rgba(238, 123, 40, 0.1)" }}
                  >
                    <Icon className="w-8 h-8" style={{ color: "#ee7b28" }} />
                  </div>
                  <CardTitle className="text-xl">{sector.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">{sector.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
