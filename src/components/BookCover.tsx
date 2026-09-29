"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BookOpen } from "lucide-react";

interface BookCoverProps {
  src?: string;
  title: string;
  author?: string;
  category?: string;
  className?: string;
}

export default function BookCover({
  src,
  title,
  author,
  category,
  className = "",
}: BookCoverProps) {
  // If remote URL is given (https://sarapublication.com/admin/img/books_img/xxx.jpg), 
  // also check local /img/books_img/xxx.jpg
  const getCleanSrc = (url?: string) => {
    if (!url) return "";
    if (url.includes("/books_img/")) {
      const filename = url.split("/books_img/").pop();
      return `/img/books_img/${filename}`;
    }
    return url;
  };

  const imageSrc = getCleanSrc(src);
  const [hasError, setHasError] = useState(!imageSrc);

  if (hasError || !src) {
    return (
      <div
        className={`relative aspect-[1/1.5] w-full rounded-sm overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#0D3B66] to-[#1658b3] p-3 flex flex-col justify-between text-white select-none shadow-sm ${className}`}
      >
        {/* Spine gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-gradient-to-r from-black/40 via-black/15 to-transparent pointer-events-none" />

        {/* Top category label */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="text-[8px] sm:text-[9px] font-mono uppercase tracking-widest text-[#FFAE00] font-bold truncate max-w-[85%]">
            {category || "Academic"}
          </span>
          <BookOpen className="w-3 h-3 text-[#FFAE00]/80 shrink-0" />
        </div>

        {/* Title & Author */}
        <div className="relative z-10 my-auto text-left py-2">
          <h4 className="text-[11px] sm:text-xs font-black leading-tight line-clamp-3 uppercase tracking-tight text-white mb-1.5 font-sans">
            {title}
          </h4>
          {author && (
            <p className="text-[9px] sm:text-[10px] text-slate-300 font-medium truncate font-sans">
              {author}
            </p>
          )}
        </div>

        {/* Bottom Publisher imprint */}
        <div className="relative z-10 border-t border-white/15 pt-1.5 flex items-center justify-between text-[8px] font-mono text-slate-400">
          <span className="truncate">SARA PUBLICATION</span>
          <span className="text-[#FFAE00] font-bold">ISBN</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative aspect-[1/1.5] w-full rounded-sm overflow-hidden shadow-xs group-hover:shadow-lg transition-all duration-200 border border-slate-200/80 bg-slate-100 flex items-center justify-center ${className}`}
    >
      <img
        src={imageSrc}
        alt={title}
        loading="lazy"
        className="object-cover w-full h-full"
        onError={() => setHasError(true)}
      />
      <div className="absolute left-0 top-0 bottom-0 w-2 sm:w-2.5 bg-gradient-to-r from-black/20 via-black/5 to-transparent pointer-events-none" />
    </div>
  );
}
