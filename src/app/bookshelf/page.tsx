"use client";

import { useState } from "react";
import Link from "next/link";
import booksData from "@/data/books.json";
import { ArrowLeft, Search, BookOpen, ExternalLink, Filter } from "lucide-react";

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
      selectedCategory === "All" || book.category === selectedCategory;
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (book.subtitle && book.subtitle.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 hover:text-slate-900 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-100 text-slate-800 border border-slate-200 text-xs font-mono uppercase tracking-widest font-semibold mb-3">
                Archival & Academic Catalog
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 mb-2">
                Scholarly Bookshelf ({booksData.length} Publications)
              </h1>
              <p className="text-slate-600 text-sm max-w-2xl leading-relaxed">
                Explore peer-reviewed publications across Life Sciences, Medicine, Engineering, and Social Humanities with registered UGC/CAS ISBNs.
              </p>
            </div>

            {/* Live Search Input */}
            <div className="w-full md:w-80 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by title or topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-900 font-mono"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 mt-8 pt-4 border-t border-slate-100">
            <span className="text-xs font-mono text-slate-400 uppercase mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors ${
                  selectedCategory === cat
                    ? "bg-slate-900 text-white font-bold"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat} {cat === "All" ? `(${booksData.length})` : ""}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Book Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-xs font-mono text-slate-500 mb-6">
          Showing <strong>{filteredBooks.length}</strong> matching books
        </div>

        {filteredBooks.length === 0 ? (
          <div className="bg-white border border-slate-200 p-12 text-center">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-900 mb-1">No publications found</h3>
            <p className="text-xs text-slate-500">
              Try adjusting your search criteria or switch categories.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {filteredBooks.map((b, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between bg-white border border-slate-200 p-3 hover:border-slate-400 transition-all shadow-sm"
              >
                <div>
                  <div className="aspect-[3/4] bg-slate-100 overflow-hidden relative mb-3 border border-slate-100">
                    <img
                      src={b.imageUrl}
                      alt={b.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback display if image URL is inaccessible
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                    <div className="absolute top-2 left-2 px-1.5 py-0.5 bg-slate-900/80 backdrop-blur-sm text-[9px] font-mono text-white uppercase">
                      {b.category.split(" ")[0]}
                    </div>
                  </div>

                  <h3 className="font-bold text-xs text-slate-900 line-clamp-2 leading-tight group-hover:text-[#e31e24] transition-colors mb-1">
                    {b.title}
                  </h3>
                  {b.subtitle && (
                    <p className="text-[10px] text-slate-500 line-clamp-1 mb-2 font-mono">
                      {b.subtitle}
                    </p>
                  )}
                </div>

                <div className="pt-2 border-t border-slate-100 mt-2 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-[#e31e24]">
                    UGC Valid
                  </span>
                  <Link
                    href={`/book/${b.slug}`}
                    className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-slate-900 hover:text-[#e31e24]"
                  >
                    Details &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
