"use client";

import type React from "react";
import {
  FileText,
  Star,
  ZoomIn,
  ZoomOut,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Folder, FileItem } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Document, Page, pdfjs } from "react-pdf";
import { useState, useEffect, useCallback, useRef } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.js`;

interface MainContentProps {
  selectedFile: FileItem | null;
  searchTerm: string;
  folders: Folder[];
}

const MainContent: React.FC<MainContentProps> = ({ selectedFile }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [containerWidth, setContainerWidth] = useState<number | null>(null);
  const [scale, setScale] = useState(1.0);
  const containerRef = useRef<HTMLDivElement>(null);

  const displayName = selectedFile?.name || "Untitled Document";

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const handleResize = useCallback(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  if (!selectedFile) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-6 sm:p-10 bg-gray-50">
        <FileText className="w-20 h-20 text-cyan-600 mb-6" />
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Select a document to view
        </h2>
        <p className="text-gray-600 text-center max-w-md">
          Use the sidebar to browse or search your files. Click on a file to
          preview it here.
        </p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      {/* Sticky Header */}
      <div className="px-4 py-3 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm sticky top-0 z-20">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Title */}
          <div className="flex items-start gap-3">
            <div className="bg-cyan-100 p-2 rounded-lg flex-shrink-0 shadow-inner">
              <FileText className="w-6 h-6 text-cyan-600" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 truncate">
                {displayName
                  .replace(/\.pdf$/i, "")
                  .toLowerCase()
                  .split(" ")
                  .map(
                    (word) =>
                      word.charAt(0).toUpperCase() + word.slice(1)
                  )
                  .join(" ")}
              </h4>
              <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                <Badge
                  variant="secondary"
                  className="text-xs border border-cyan-200"
                >
                  PDF
                </Badge>
              </div>
            </div>
          </div>

        
        </div>
      </div>

      {/* PDF Viewer */}
      <div
        className="flex-grow overflow-auto p-4 select-none"
        ref={containerRef}
        onContextMenu={(e) => e.preventDefault()}
      >
        <div className="w-full max-w-5xl mx-auto bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-gray-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={pageNumber}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <Document
                file={`http://10.12.53.34:5000/uploads/${selectedFile.filename}`}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={<Skeleton className="h-[500px] w-full rounded-md" />}
                error={
                  <p className="text-red-500 text-center py-4">
                    Failed to load PDF.
                  </p>
                }
              >
                <Page
                  pageNumber={pageNumber}
                  scale={scale}
                  width={
                    containerWidth
                      ? Math.min(containerWidth - 48, 800)
                      : 800
                  }
                  className="mx-auto border border-gray-200 rounded-lg shadow-sm"
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </Document>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Footer Navigation */}
      {numPages && numPages > 1 && (
        <div className="px-4 py-3 bg-white/90 backdrop-blur-md border-t border-gray-200 sticky bottom-0 z-20">
          <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-3">
            {/* Pagination Controls */}
            <div className="flex items-center gap-1">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setPageNumber(1)}
                disabled={pageNumber <= 1}
              >
                <ChevronsLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  setPageNumber((p) => Math.max(1, p - 1))
                }
                disabled={pageNumber <= 1}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Input
                type="number"
                min={1}
                max={numPages}
                value={pageNumber}
                onChange={(e) => {
                  const val = Math.min(
                    numPages,
                    Math.max(1, Number(e.target.value))
                  );
                  setPageNumber(val);
                }}
                className="w-14 text-center"
              />
              <span className="text-sm text-gray-500">
                of {numPages}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  setPageNumber((p) => Math.min(numPages, p + 1))
                }
                disabled={pageNumber >= numPages}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setPageNumber(numPages)}
                disabled={pageNumber >= numPages}
              >
                <ChevronsRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Zoom Controls */}
            <div className="flex items-center gap-1">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setScale((s) => Math.max(0.5, s - 0.1))}
              >
                <ZoomOut className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setScale((s) => Math.min(2.0, s + 0.1))}
              >
                <ZoomIn className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainContent;
