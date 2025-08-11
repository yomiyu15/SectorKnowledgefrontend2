"use client";

import { useEffect, useState, useMemo } from "react";
import { Smartphone, Landmark, PiggyBank, Users, Search, FileText, Sparkles, TrendingUp } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

interface SectorInsight {
  id: number;
  title: string;
  description: string;
  category: string;
}

export default function SectorInsightsOverview() {
  const [sectorInsights, setSectorInsights] = useState<SectorInsight[]>([]);
  const [selectedSectorId, setSelectedSectorId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchSectorInsights();
  }, []);

  const fetchSectorInsights = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("http://10.12.53.34:5000/api/products");
      if (res.ok) {
        const data = await res.json();
        setSectorInsights(data);
        if (data.length > 0) setSelectedSectorId(data[0].id);
      } else {
        console.error("Failed to fetch sector insights");
      }
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const getIcon = (category: string) => {
    if (!category) return FileText;
    const normalized = category.toLowerCase();
    if (normalized.includes("digital")) return Smartphone;
    if (normalized.includes("ifb") || normalized.includes("conventional"))
      return Landmark;
    if (normalized.includes("deposit")) return PiggyBank;
    if (normalized.includes("youth") || normalized.includes("women")) return Users;
    return FileText;
  };

  const getCategoryColor = (category: string) => {
    if (!category) return "bg-gray-100 text-gray-700 border-gray-200";
    const normalized = category.toLowerCase();
    if (normalized.includes("digital")) return "bg-[#00adef]/10 text-[#00adef] border-[#00adef]/20";
    if (normalized.includes("ifb") || normalized.includes("conventional"))
      return "bg-slate-100 text-slate-700 border-slate-200";
    if (normalized.includes("deposit")) return "bg-slate-100 text-slate-700 border-slate-200";
    if (normalized.includes("youth") || normalized.includes("women")) return "bg-slate-100 text-slate-700 border-slate-200";
    return "bg-slate-100 text-slate-700 border-slate-200";
  };

  const filteredInsights = useMemo(() => {
    return sectorInsights.filter((sector) =>
      sector.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [sectorInsights, searchTerm]);

  const selectedSector = sectorInsights.find((s) => s.id === selectedSectorId);

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
        <Sidebar className="border-r-0 shadow-xl bg-white/80 backdrop-blur-sm">
          <SidebarHeader className="border-b border-slate-200/60 bg-[#00adef] text-white">
            <div className="flex items-center gap-3 px-4 py-6">
             
              <div>
                <h2 className="text-lg font-bold">Product Hub</h2>
          
              </div>
            </div>
          </SidebarHeader>
          
          <SidebarContent className="px-4 py-6">
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                Search Products
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <Input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-slate-200 bg-slate-50/50 focus:bg-white transition-colors"
                  />
                </div>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                Available Products ({filteredInsights.length})
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu className="space-y-1">
                  {isLoading ? (
                    <div className="space-y-2">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="flex items-center space-x-3 p-3">
                          <Skeleton className="h-4 w-4 rounded" />
                          <Skeleton className="h-4 flex-1" />
                        </div>
                      ))}
                    </div>
                  ) : filteredInsights.length > 0 ? (
                    filteredInsights.map((sector) => {
                      const Icon = getIcon(sector.category || sector.title);
                      const isSelected = selectedSectorId === sector.id;
                      return (
                        <SidebarMenuItem key={sector.id}>
                          <SidebarMenuButton
                            onClick={() => setSelectedSectorId(sector.id)}
                            isActive={isSelected}
                            className={`group relative overflow-hidden transition-all duration-200 ${
                              isSelected 
                                ? "bg-[#00adef] text-white shadow-lg shadow-[#00adef]/25" 
                                : "hover:bg-slate-100 hover:shadow-sm"
                            }`}
                          >
                            <Icon className={`h-4 w-4 transition-colors ${
                              isSelected ? "text-white" : "text-[#00adef]"
                            }`} />
                            <span className="truncate font-medium">{sector.title}</span>
                            {isSelected && (
                              <div className="absolute inset-0 bg-[#00adef]/10" />
                            )}
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      );
                    })
                  ) : (
                    <div className="text-center py-8">
                      <FileText className="h-8 w-8 text-slate-300 mx-auto mb-2" />
                      <p className="text-slate-500 text-sm">No products found</p>
                    </div>
                  )}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <SidebarInset className="flex-1">
          <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-4 border-b border-slate-200/60 bg-white/80 backdrop-blur-sm px-6">
            <SidebarTrigger className="text-slate-600 hover:text-slate-900" />
            <div className="flex items-center gap-2">
              
              <h1 className="text-lg font-semibold text-[#00adef]">
                Product Documentation
              </h1>
            </div>
          </header>

          <main className="flex-1 p-6 lg:p-8">
            <div className="mx-auto max-w-4xl">
              <div className="mb-8">
                <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-3 text-slate-900">
                  Product Documentation Hub
                </h1>
                <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
                  Comprehensive details for each sector product — categories, descriptions, and usage guidelines.
                </p>
              </div>

              {selectedSector ? (
                <Card className="border-0 shadow-xl bg-white/70 backdrop-blur-sm overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-indigo-50/30 pointer-events-none" />
                  <CardHeader className="relative pb-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00adef] shadow-lg shadow-[#00adef]/25">
                        {(() => {
                          const Icon = getIcon(selectedSector.category || selectedSector.title);
                          return <Icon className="h-6 w-6 text-white" />;
                        })()}
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
                          {selectedSector.title}
                        </CardTitle>
                        <Badge 
                          variant="secondary" 
                          className={`${getCategoryColor(selectedSector.category)} border font-medium`}
                        >
                          {selectedSector.category}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="relative">
                    <CardDescription className="text-base leading-relaxed text-slate-700 mb-6">
                      {selectedSector.description}
                    </CardDescription>
                    
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                      <span>Documentation available</span>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-0 shadow-xl bg-white/70 backdrop-blur-sm">
                  <CardContent className="flex flex-col items-center justify-center py-16 text-center">
                    {isLoading ? (
                      <div className="space-y-4">
                        <div className="h-12 w-12 rounded-xl bg-slate-200 animate-pulse"></div>
                        <div className="space-y-2">
                          <Skeleton className="h-6 w-48 mx-auto" />
                          <Skeleton className="h-4 w-32 mx-auto" />
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center mb-4">
                          <FileText className="h-8 w-8 text-slate-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">
                          Select a Product
                        </h3>
                        <p className="text-slate-500 max-w-sm">
                          Choose a product from the sidebar to view its detailed documentation and specifications.
                        </p>
                      </>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
