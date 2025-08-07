"use client";

import type React from "react";

import { FileText, Search, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Folder, FileItem } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Document, Page, pdfjs } from "react-pdf";
import { useState, useEffect, useCallback, useRef } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.js`;

interface MainContentProps {
  selectedFile: FileItem | null;
  searchTerm: string;
  folders: Folder[];
}

const MainContent: React.FC<MainContentProps> = ({
  selectedFile,
  searchTerm,
  folders,
}) => {
  const getAllFiles = (folders: Folder[]): FileItem[] =>
    folders.flatMap((f) => [
      ...(f.files ?? []),
      ...(f.subfolders ? getAllFiles(f.subfolders) : []),
    ]);

  const searchResults =
    searchTerm.trim() === ""
      ? []
      : getAllFiles(folders).filter((file) =>
          file.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [containerWidth, setContainerWidth] = useState<number | null>(null);
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
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const formatFileName = (filename: string): string => {
    const maxLength = 25;
    if (filename.length > maxLength) {
      return filename.substring(0, maxLength) + "...";
    }
    return filename;
  };

  if (!selectedFile) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-6 sm:p-10 lg:p-12 bg-gray-50">
        <div className="text-center max-w-3xl w-full">
          <div className="mb-6">
            <FileText className="w-20 h-20 text-blue-500 mx-auto" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-3">
            Select a document to view
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Use the sidebar to browse or search your files. Click on a file to preview it here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      <div className="px-4 py-2 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start gap-3">
            <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
              <FileText className="w-5 h-5 text-cyan-600" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold text-gray-800 truncate">
                  {displayName}
                </h4>
              </div>
              <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-gray-500">
                <Badge variant="secondary" className="text-xs">
                  PDF
                </Badge>
                <span className="text-xs">
                  {numPages} pages • {Math.round(Math.random() * 5) + 1} MB
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow overflow-auto">
        <div className="flex justify-center p-2" ref={containerRef}>
          <div className="w-full max-w-4xl">
            <Document
              file={`http://10.12.53.34:5000/uploads/${selectedFile.filename}`}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={<Skeleton className="h-10 w-10 rounded-full mx-auto my-10" />}
              error={<p className="text-red-500 text-center">Failed to load PDF.</p>}
            >
              <Page
                pageNumber={pageNumber}
                width={
                  containerWidth
                    ? Math.min(containerWidth - 32, 600)
                    : Math.min(window.innerWidth - 32, 800)
                }
                className="mx-auto border border-gray-200 rounded-md shadow-sm"
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>
          </div>
        </div>
      </div>

      {numPages && numPages > 1 && (
        <div className="px-4 py-2 bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto flex items-center justify-center gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={pageNumber <= 1}
              onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
            >
              Previous
            </Button>
            <div className="flex items-center text-sm">
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
              <span className="mx-2">of</span>
              <span>{numPages}</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              disabled={pageNumber >= numPages}
              onClick={() => setPageNumber((p) => Math.min(numPages, p + 1))}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainContent;
