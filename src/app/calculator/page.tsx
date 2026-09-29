"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calculator, ShieldCheck, CheckCircle2, Info, ChevronRight } from "lucide-react";

export default function CalculatorPage() {
  const [pageCount, setPageCount] = useState(200);
  const [copies, setCopies] = useState(50);
  const [bookType, setBookType] = useState<"paperback" | "hardcover">("paperback");
  const [language, setLanguage] = useState<"English" | "Hindi" | "Gujarati">("English");

  // Dynamic formula based on standard academic publishing economics
  const baseCostPerCopy = bookType === "paperback" ? 120 + pageCount * 0.45 : 240 + pageCount * 0.55;
  const totalProductionCost = Math.round(baseCostPerCopy * copies);
  const recommendedMrp = Math.round(baseCostPerCopy * 2.2);
  const estimatedAuthorRoyalty = Math.round(recommendedMrp * 0.20 * copies);

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

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1658b3]/30 text-sky-300 border border-sky-400/20 text-[11px] font-mono uppercase tracking-widest font-semibold mb-3">
              <Calculator className="w-3 h-3 text-[#FFAE00]" /> Academic Publishing Estimator
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-2">
              Book Cost & Royalty Calculator
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Transparent simulator for university faculty and researchers. Calculates print runs, UGC-compliant ISBN allocation, and estimated sales royalties.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. CALCULATOR FORM & RESULT
         ───────────────────────────────────────────────────────────── */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Input Controls */}
            <div className="space-y-6">
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2 font-mono">
                  Total Page Count ({pageCount} Pages)
                </label>
                <input
                  type="range"
                  min="80"
                  max="600"
                  step="10"
                  value={pageCount}
                  onChange={(e) => setPageCount(Number(e.target.value))}
                  className="w-full accent-[#1658b3] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                  <span>80 pgs</span>
                  <span>300 pgs</span>
                  <span>600 pgs</span>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2 font-mono">
                  Print Run ({copies} Physical Copies)
                </label>
                <input
                  type="range"
                  min="20"
                  max="500"
                  step="10"
                  value={copies}
                  onChange={(e) => setCopies(Number(e.target.value))}
                  className="w-full accent-[#1658b3] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                  <span>20 copies</span>
                  <span>250 copies</span>
                  <span>500 copies</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                    Binding Style
                  </label>
                  <select
                    value={bookType}
                    onChange={(e) => setBookType(e.target.value as "paperback" | "hardcover")}
                    className="w-full text-xs border border-slate-300 rounded-lg p-2.5 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1658b3]"
                  >
                    <option value="paperback">Paperback (Softcover)</option>
                    <option value="hardcover">Hardcover (Library Edition)</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                    Language
                  </label>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value as "English" | "Hindi" | "Gujarati")}
                    className="w-full text-xs border border-slate-300 rounded-lg p-2.5 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1658b3]"
                  >
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Gujarati">Gujarati</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Results Display */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#0D3B66] uppercase tracking-wider block mb-4 font-mono">
                  Estimated Summary Breakdown
                </span>

                <div className="space-y-3.5 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Production ({copies} copies):</span>
                    <span className="font-extrabold text-[#0D3B66] text-sm">₹{totalProductionCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">13-Digit ISBN Allotment:</span>
                    <span className="font-bold text-emerald-600">Included (Free)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Suggested Retail MRP:</span>
                    <span className="font-bold text-slate-900">₹{recommendedMrp}</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-slate-200 text-sm">
                    <span className="text-slate-900 font-bold">Author Royalties (20%):</span>
                    <span className="font-black text-[#1658b3] text-lg">₹{estimatedAuthorRoyalty.toLocaleString()}</span>
                  </div>
                </div>

                <div className="mt-5 p-3.5 bg-white rounded-lg border border-slate-200 text-[11px] text-slate-600 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-[#0D3B66]">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    UGC CAS / API Score Validity
                  </div>
                  <p>National Publisher ISBN grants up to <strong>10 API Score Points</strong> for college and university faculty promotions.</p>
                </div>
              </div>

              <Link
                href="/publish"
                className="mt-6 w-full text-center bg-[#1658b3] hover:bg-[#124690] text-white font-bold text-xs uppercase tracking-wider py-3 rounded-lg shadow-sm hover:shadow transition"
              >
                Proceed to Submit Manuscript
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
