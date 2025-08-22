"use client"

import { useState } from "react"
import { Search, FolderIcon, FileText, ChevronDown, ChevronRight, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import type { Folder, FileItem } from "@/types"

interface SidebarProps {
  folders: Folder[]
  onFileSelect: (file: FileItem) => void
  searchTerm: string
  onSearchChange: (term: string) => void
  loading: boolean
  className?: string
}

export default function Sidebar({
  folders,
  onFileSelect,
  searchTerm,
  onSearchChange,
  loading,
  className = "",
}: SidebarProps) {
  const [expandedFolders, setExpandedFolders] = useState<number[]>([])

  const toggleFolder = (folderId: number) => {
    setExpandedFolders((prev) =>
      prev.includes(folderId) ? prev.filter((id) => id !== folderId) : [...prev, folderId]
    )
  }

  const formatFileName = (name: string) =>
    name
      .replace(/_/g, " ")
      .replace(/\.pdf$/i, "")
      .replace(/\bfor\b/gi, "")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase())

  const getAllFiles = (folders: Folder[]): FileItem[] =>
    folders.flatMap((folder) => [
      ...(folder.files || []),
      ...(folder.subfolders ? getAllFiles(folder.subfolders) : []),
    ])

  // Sidebar.tsx
const handleFileClick = (file: FileItem) => {
  // Just select the file; MainContent will render it inline
  onFileSelect(file);
};


  const renderFolder = (folder: Folder, level = 0) => {
    const isExpanded = expandedFolders.includes(folder.id)
    const hasSubfolders = folder.subfolders && folder.subfolders.length > 0
    const hasFiles = folder.files && folder.files.length > 0
    const fileCount =
      (folder.files?.length || 0) +
      (folder.subfolders?.reduce((acc, sub) => acc + (sub.files?.length || 0), 0) || 0)

    return (
      <div key={folder.id} className="space-y-1">
        <div
          className={`flex items-center justify-between p-2.5 hover:bg-gradient-to-r hover:from-[#00adef]/20 hover:to-[#0077c2]/10 cursor-pointer rounded-lg transition-all duration-300 group shadow-sm hover:shadow-lg transform hover:scale-[1.02] ${
            level > 0 ? "ml-4 border-l-2 border-gray-100 pl-4" : ""
          }`}
          onClick={() => toggleFolder(folder.id)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && toggleFolder(folder.id)}
        >
          <div className="flex items-center flex-1 min-w-0">
            {hasSubfolders || hasFiles ? (
              isExpanded ? (
                <ChevronDown className="w-4 h-4 mr-2 text-[#00adef] transition-transform duration-300" />
              ) : (
                <ChevronRight className="w-4 h-4 mr-2 text-gray-400 group-hover:text-[#00adef] transition-colors duration-300" />
              )
            ) : (
              <div className="w-6 mr-2" />
            )}
            <div className="bg-gradient-to-br from-[#00adef]/20 to-[#0077c2]/10 p-1.5 rounded-md mr-2">
              <FolderIcon className="w-4 h-4 text-[#00adef]" />
            </div>
            <span className="text-sm font-medium text-gray-700 truncate group-hover:text-[#0077c2] transition-colors duration-300">
              {folder.name}
            </span>
          </div>
          {fileCount > 0 && (
            <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600 ml-2">
              {fileCount}
            </Badge>
          )}
        </div>

        {isExpanded && (
          <div className="space-y-1 animate-in slide-in-from-top-2 duration-300 overflow-hidden">
            {folder.files?.map((file) => (
              <div
                key={file.id}
                className="flex items-center p-2 ml-6 hover:bg-gradient-to-r hover:from-red-50 hover:to-orange-50 cursor-pointer rounded-lg transition-all duration-300 group border-l-2 border-transparent hover:border-red-200 transform hover:scale-[1.02]"
                onClick={() => handleFileClick(file)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && handleFileClick(file)}
              >
                <div className="bg-red-50 p-1.5 rounded-md mr-2 group-hover:bg-red-100 transition-colors">
                  <FileText className="w-3.5 h-3.5 text-red-500" />
                </div>
                <span className="text-sm text-gray-600 truncate group-hover:text-red-700 transition-colors duration-300">
                  {formatFileName(file.name)}
                </span>
              </div>
            ))}
            {folder.subfolders?.map((subfolder) => renderFolder(subfolder, level + 1))}
          </div>
        )}
      </div>
    )
  }

  const allFiles = getAllFiles(folders)
  const searchResults = searchTerm
    ? allFiles.filter((file) => file.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : []

  return (
    <aside className={`flex flex-col h-screen bg-white border-r border-gray-200 shadow-sm ${className}`}>
      {/* Search Header */}
      <div className="p-4 border-b bg-white sticky top-0 z-20">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            type="text"
            placeholder="Search documents..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 pr-4 h-10 rounded-lg border-gray-200 focus:ring-2 focus:ring-[#00adef]/20 focus:border-[#00adef]"
          />
          {loading && (
            <Loader2 className="absolute right-3 top-1/2 transform -translate-y-1/2 animate-spin text-[#00adef] w-5 h-5" />
          )}
        </div>
        {searchTerm && (
          <div className="mt-2 text-xs text-gray-500">
            {searchResults.length} result{searchResults.length !== 1 ? "s" : ""} found
          </div>
        )}
      </div>

      {/* Search Results */}
      {searchTerm ? (
        <ScrollArea className="flex-1 p-4">
          {searchResults.length > 0 ? (
            searchResults.map((file) => (
              <div
                key={file.id}
                className="flex items-center p-2 mb-1 hover:bg-gradient-to-r hover:from-red-50 hover:to-orange-50 cursor-pointer rounded-lg transition-all duration-300 group border-l-2 border-transparent hover:border-red-200 transform hover:scale-[1.02]"
                onClick={() => handleFileClick(file)}
              >
                <div className="bg-red-50 p-1.5 rounded-md mr-2 group-hover:bg-red-100 transition-colors">
                  <FileText className="w-3.5 h-3.5 text-red-500" />
                </div>
                <span className="text-sm text-gray-600 truncate group-hover:text-red-700 transition-colors duration-300">
                  {formatFileName(file.name)}
                </span>
              </div>
            ))
          ) : (
            <div className="text-center py-10 text-gray-400 text-sm">No matching files</div>
          )}
        </ScrollArea>
      ) : (
        // Normal folder view
        <ScrollArea className="flex-1 p-4">{folders.map((folder) => renderFolder(folder))}</ScrollArea>
      )}
    </aside>
  )
}
