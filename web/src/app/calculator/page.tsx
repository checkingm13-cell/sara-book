"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calculator, ShieldCheck, CheckCircle2, Info } from "lucide-react";

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
    <div className="min-h-screen bg-slate-50 text-slate-900 py-10 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-indigo-600 transition mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to Homepage
        </Link>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 to-indigo-950 text-white">
            <div className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full mb-3 border border-indigo-500/30">
              <Calculator className="w-3.5 h-3.5" />
              Academic Estimation Engine
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Academic Book Publishing & Royalty Calculator
            </h1>
            <p className="mt-2 text-sm text-slate-300 max-w-2xl">
              Transparent cost simulator for university faculty and researchers. Includes official 13-digit ISBN allocation, UGC API compliance, and author royalties.
            </p>
          </div>

          <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Input Controls */}
            <div className="space-y-6">
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  Total Page Count ({pageCount} Pages)
                </label>
                <input
                  type="range"
                  min="80"
                  max="600"
                  step="10"
                  value={pageCount}
                  onChange={(e) => setPageCount(Number(e.target.value))}
                  className="w-full accent-indigo-600 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>80 pgs (Monograph)</span>
                  <span>300 pgs (Standard)</span>
                  <span>600 pgs (Textbook)</span>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  Print Run ({copies} Physical Copies)
                </label>
                <input
                  type="range"
                  min="20"
                  max="500"
                  step="10"
                  value={copies}
                  onChange={(e) => setCopies(Number(e.target.value))}
                  className="w-full accent-indigo-600 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
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
                    className="w-full text-xs font-medium border border-slate-300 rounded-xl p-3 focus:outline-indigo-600"
                  >
                    <option value="paperback">Paperback (Softcover)</option>
                    <option value="hardcover">Hardcover (Library Edition)</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                    Manuscript Language
                  </label>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value as "English" | "Hindi" | "Gujarati")}
                    className="w-full text-xs font-medium border border-slate-300 rounded-xl p-3 focus:outline-indigo-600"
                  >
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Gujarati">Gujarati</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Results Display */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider block mb-4">
                  Estimated Summary Breakdown
                </span>

                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600">Printing & Binding ({copies} copies):</span>
                    <span className="font-bold text-slate-900">₹{totalProductionCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600">ISBN Allotment & Legal Registration:</span>
                    <span className="font-bold text-emerald-600">FREE with Publishing</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600">Suggested Retail MRP:</span>
                    <span className="font-bold text-slate-900">₹{recommendedMrp}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm pt-4 border-t border-slate-200">
                    <span className="text-slate-900 font-bold">Author Royalties (20%):</span>
                    <span className="font-extrabold text-indigo-600 text-lg">₹{estimatedAuthorRoyalty.toLocaleString()}</span>
                  </div>
                </div>

                <div className="mt-6 p-3 bg-white rounded-xl border border-slate-200 text-[11px] text-slate-600 space-y-1.5">
                  <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    UGC CAS / API Score Validity
                  </div>
                  <p>National Publisher with ISBN grants up to <strong>10 API Score Points</strong> for college faculty promotion.</p>
                </div>
              </div>

              <Link
                href="/publish"
                className="mt-6 w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm py-3 rounded-xl shadow-xs transition"
              >
                Proceed to Submit Manuscript
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
