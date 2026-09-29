"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import booksData from "@/data/books.json";
import { ArrowLeft, Search, BookOpen, Filter, CheckCircle2, ChevronRight } from "lucide-react";

export default function BookshelfPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Life Sciences",
    "Medical Science",
    "Sciences & Engineering",
    "Social Science & Humanities",
  ];

  const filteredBooks = booksData.filter((book) => {
    const matchesCat =
      selectedCategory === "All" || book.categoryLabel === selectedCategory;
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (book.author && book.author.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (book.isbn && book.isbn.includes(searchQuery));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* ─────────────────────────────────────────────────────────────
          1. HEADER BANNER (Consistent Navy #0A1628 Theme)
         ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#0A1628] text-white py-10 sm:py-14 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Store
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1658b3]/30 text-sky-300 border border-sky-400/20 text-[11px] font-mono uppercase tracking-widest font-semibold mb-3">
                <CheckCircle2 className="w-3 h-3 text-[#FFAE00]" /> UGC Valid ISBN Catalog
              </div>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-2">
                Scholarly Bookshelf ({booksData.length} Publications)
              </h1>
              <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
                Explore peer-reviewed publications across Life Sciences, Medicine, Engineering, and Social Humanities with registered 13-digit ISBNs.
              </p>
            </div>

            {/* Search Input Box matching Navy Aesthetic */}
            <div className="w-full md:w-80 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by title, author, or ISBN..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-900/90 text-white placeholder-slate-400 border border-white/20 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-[#FFAE00] focus:border-transparent font-sans"
              />
            </div>
          </div>
        </div>

        {/* Global Distribution Strip */}
        <div className="mt-8 border-t border-white/10 bg-[#081220]/80 py-2.5 px-4 sm:px-6 lg:px-10">
          <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono uppercase text-slate-400">
            <div className="flex items-center gap-2">
              <span className="text-[#FFAE00] font-bold">DISTRIBUTION:</span>
              <span className="text-slate-300">Amazon • Flipkart • Sara Book Store</span>
            </div>
            <span>Fast Academic Dispatch Across India</span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. CATEGORY PILLS & FILTER BAR
         ───────────────────────────────────────────────────────────── */}
      <section className="border-b border-slate-100 bg-slate-50/60 sticky top-0 z-20 backdrop-blur-xs">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-3.5 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-semibold text-slate-500 uppercase mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-[#1658b3]" /> Genre:
            </span>
            {categories.map((cat) => {
              const count = cat === "All" ? booksData.length : booksData.filter(b => b.categoryLabel === cat).length;
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#0D3B66] text-white shadow-xs"
                      : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>

          <div className="text-xs font-mono text-slate-500 hidden sm:block shrink-0">
            Showing <strong>{filteredBooks.length}</strong> titles
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. BOOKSHELF GRID (Matches Landing Page Shelf Card Style)
         ───────────────────────────────────────────────────────────── */}
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-10">
        {filteredBooks.length === 0 ? (
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-12 text-center max-w-md mx-auto my-12">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-900 mb-1">No publications found</h3>
            <p className="text-xs text-slate-500">
              Try adjusting your search criteria or switch category filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
            {filteredBooks.map((b, idx) => (
              <Link
                key={idx}
                href={`/book/${b.slug}`}
                className="group flex flex-col justify-between bg-white rounded-lg border border-slate-200 p-2.5 sm:p-3 hover:border-slate-400 hover:shadow-md transition-all duration-200"
              >
                <div>
                  {/* Book Cover Image with spine gradient shadow */}
                  <div className="relative aspect-[1/1.5] w-full rounded-sm overflow-hidden bg-slate-100 mb-3 border border-slate-100 flex items-center justify-center">
                    <img
                      src={b.coverImage || "/books/default-cover.svg"}
                      alt={b.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (!target.src.endsWith("/books/default-cover.svg")) {
                          target.src = "/books/default-cover.svg";
                        }
                      }}
                    />
                    <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-black/25 via-black/10 to-transparent pointer-events-none" />
                    <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded-xs bg-[#0D3B66]/90 backdrop-blur-xs text-[9px] font-mono text-white uppercase font-bold">
                      {b.categoryLabel.split(" ")[0]}
                    </div>
                  </div>

                  <h3 className="font-bold text-xs sm:text-sm text-[#0D3B66] line-clamp-2 leading-tight group-hover:text-rose-500 transition-colors mb-1">
                    {b.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 line-clamp-1 mb-2">
                    By {b.author}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 mt-2 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900 text-sm">
                    ₹{b.priceINR}
                  </span>
                  <span className="inline-flex items-center gap-0.5 text-xs font-semibold text-rose-500 group-hover:translate-x-0.5 transition-transform">
                    View <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>

      {/* ─────────────────────────────────────────────────────────────
          4. BOTTOM CTA STRIP (Matching Landing Page)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-12 bg-gradient-to-b from-slate-50 to-white text-slate-800 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#1658b3] bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
            AUTHORS & RESEARCHERS
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-[#0D3B66]">
            Looking to Publish Your Academic Monograph?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto mt-2 leading-relaxed">
            Get an official 13-digit UGC-valid ISBN, fast-track peer review, and global sales channels.
          </p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <Link
              href="/packages"
              className="bg-[#1658b3] hover:bg-[#124690] text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-lg transition shadow-xs"
            >
              Publishing Plans
            </Link>
            <Link
              href="/publish"
              className="bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-lg transition"
            >
              Submit Proposal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
