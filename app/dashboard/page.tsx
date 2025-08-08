"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import MainContent from "@/components/dashboard/MainContent";
import type { Folder, FileItem } from "@/types";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const [folders, setFolders] = useState<Folder[]>([]);
  const [selectedFile, setSelectedFile] = useState<FileItem | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    fetchFolders();
  }, []);

  const fetchFolders = async () => {
    try {
      const response = await fetch("http://10.12.53.34:5000/api/folders");
      if (response.ok) {
        const data = await response.json();
        setFolders(data);
      }
    } catch (error) {
      console.error("Error fetching folders:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff7ed] to-[#f8fafc] overflow-hidden">
      <Header />
      <div className="flex h-[calc(100vh-80px)] relative">
        {/* Mobile Sidebar Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden fixed top-24 left-4 z-30 bg-white shadow-lg hover:bg-orange-50 border border-orange-200 rounded-full"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle sidebar"
        >
          {sidebarOpen ? (
            <X className="w-6 h-6 text-orange-600" />
          ) : (
            <Menu className="w-6 h-6 text-orange-600" />
          )}
        </Button>

        {/* Sidebar */}
        <div
          className={`${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 fixed md:relative top-0 left-0 h-full w-85 bg-white rounded-r-3xl shadow-xl md:shadow-none z-20 transform transition-transform duration-300 ease-in-out border-r border-orange-100 flex-shrink-0`}
        >
          <Sidebar
            folders={folders}
            onFileSelect={(file) => {
              setSelectedFile(file);
              setSidebarOpen(false);
            }}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            loading={loading}
          />
        </div>

        {/* Overlay */}
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-25 z-10 md:hidden backdrop-blur-sm"
          />
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-auto px-6 py-8 relative">
          <div className="max-w-6xl mx-auto">
            <h4 className="text-2xl md:text-3xl font-extrabold text-orange-500 mb-4 tracking-tight">
              Sector Dashboard
            </h4>
            <MainContent
              selectedFile={selectedFile}
              searchTerm={searchTerm}
              folders={folders}
            />
          </div>
        </main>
      </div>
    </div>
  );
}