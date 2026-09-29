"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Download, 
  FileText, 
  CheckCircle2, 
  ShieldCheck, 
  FileCode, 
  FileArchive, 
  Search,
  ExternalLink,
  MessageCircle,
  Phone
} from "lucide-react";

export default function DownloadPage() {
  const [activeTab, setActiveTab] = useState<"all" | "template" | "legal" | "guideline">("all");
  const [search, setSearch] = useState("");

  const resources = [
    {
      id: "doc-1",
      title: "Standard Academic Book Manuscript Template",
      category: "template",
      categoryLabel: "Manuscript Template",
      format: "DOCX",
      size: "245 KB",
      updated: "2026 Revision",
      description: "Pre-formatted Microsoft Word template with automated chapter styling, running heads, and standard 1-inch margins.",
      downloadUrl: "#download-template-docx",
    },
    {
      id: "doc-2",
      title: "Edited Book Chapter Contribution Template",
      category: "template",
      categoryLabel: "Manuscript Template",
      format: "DOCX",
      size: "180 KB",
      updated: "2026 Revision",
      description: "Standard layout for contributing authors submitting individual research chapters for edited anthologies.",
      downloadUrl: "#download-chapter-docx",
    },
    {
      id: "doc-3",
      title: "Author Publishing Agreement & Copyright Transfer",
      category: "legal",
      categoryLabel: "Legal & Copyright",
      format: "PDF",
      size: "420 KB",
      updated: "UGC Valid Form",
      description: "Official non-exclusive publication agreement outlining author intellectual property retention, ISBN allocation, and royalty terms.",
      downloadUrl: "#download-agreement-pdf",
    },
    {
      id: "doc-4",
      title: "Plagiarism & Originality Declaration Form",
      category: "legal",
      categoryLabel: "Legal & Copyright",
      format: "PDF",
      size: "155 KB",
      updated: "Mandatory",
      description: "Author self-declaration certificate verifying that the submitted work contains no unauthorized or unattributed intellectual materials.",
      downloadUrl: "#download-plagiarism-pdf",
    },
    {
      id: "doc-5",
      title: "Complete Scholarly Author Publishing Handbook",
      category: "guideline",
      categoryLabel: "Style Guides",
      format: "PDF",
      size: "1.2 MB",
      updated: "Full Edition",
      description: "Comprehensive 28-page PDF guide covering reference styles (APA, MLA, IEEE), InDesign book anatomy, and peer-review policies.",
      downloadUrl: "#download-handbook-pdf",
    },
    {
      id: "doc-6",
      title: "UGC CAS Points & API Calculation Reference Guide",
      category: "guideline",
      categoryLabel: "Style Guides",
      format: "PDF",
      size: "340 KB",
      updated: "UGC Reg. 2018",
      description: "Summary sheet explaining Category 3 API scoring points for textbooks, edited works, and monographs under University Grants Commission rules.",
      downloadUrl: "#download-api-guide-pdf",
    },
  ];

  const filteredResources = resources.filter((item) => {
    const matchesTab = activeTab === "all" || item.category === activeTab;
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) || 
                          item.description.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      
      {/* ─────────────────────────────────────────────────────────────
          1. HEADER BANNER
         ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#0A1628] text-white py-12 sm:py-16 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Store
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1658b3]/30 text-sky-300 border border-sky-400/20 text-[11px] font-mono uppercase tracking-widest font-semibold mb-3">
              <Download className="w-3 h-3 text-[#FFAE00]" /> Author Resource & Manuscript Downloads
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-3">
              Author Resource Downloads
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Official MS Word templates, copyright declarations, publication agreements, and UGC API reference documents ready for immediate download.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. FILTERS AND RESOURCE CARDS
         ───────────────────────────────────────────────────────────── */}
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
        
        {/* Search & Category Filter Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-200 pb-6 mb-8">
          
          {/* Tab Filter */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "all"
                  ? "bg-[#1658b3] text-white shadow-xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              All Files ({resources.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("template")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "template"
                  ? "bg-[#1658b3] text-white shadow-xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              Word Templates
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("legal")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "legal"
                  ? "bg-[#1658b3] text-white shadow-xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              Legal & Copyright
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("guideline")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "guideline"
                  ? "bg-[#1658b3] text-white shadow-xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              Style Guides
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search forms & templates..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-10 pl-9 pr-3 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#1658b3] focus:bg-white transition"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          </div>
        </div>

        {/* Resources Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredResources.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-black uppercase tracking-wider ${
                    item.format === "DOCX" 
                      ? "bg-blue-100 text-blue-800" 
                      : "bg-rose-100 text-rose-800"
                  }`}>
                    {item.format}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {item.size} • {item.updated}
                  </span>
                </div>

                <h3 className="font-bold text-base text-[#0D3B66] group-hover:text-[#1658b3] transition-colors leading-snug mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400 font-semibold uppercase">
                  {item.categoryLabel}
                </span>

                <button
                  type="button"
                  onClick={() => alert(`Starting download for: ${item.title}`)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0A1628] hover:bg-[#1658b3] text-white rounded-lg text-xs font-bold transition shadow-xs cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Help Strip */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-base font-bold text-[#0D3B66] uppercase">
              Need Assistance with Manuscript Preparation?
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Our academic editorial coordinators can assist with InDesign formatting, citation structuring, or ISBN eligibility queries.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/918866003636?text=Hello%20Sara%20Book%20Publication"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Desk</span>
            </a>
            <a
              href="tel:+918866003636"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white border border-slate-200 hover:bg-slate-100 text-slate-800 rounded-xl text-xs font-bold transition shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              <span>+91-8866003636</span>
            </a>
          </div>
        </div>

      </main>
    </div>
  );
}
