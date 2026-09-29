"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Calculator, 
  HelpCircle, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  TrendingUp,
  Receipt,
  DollarSign,
  PackageCheck
} from "lucide-react";

import SubpageHero from "@/components/SubpageHero";

export default function CalculatorPage() {
  const [pageCount, setPageCount] = useState<number>(140);
  const [format, setFormat] = useState<"paperback" | "hardcover">("paperback");
  const [interior, setInterior] = useState<"bw" | "color">("bw");
  const [mrp, setMrp] = useState<number>(399);
  const [estimatedMonthlySales, setEstimatedMonthlySales] = useState<number>(35);

  // Dynamic calculations based on real Sara Book publishing print matrix
  const baseCost = format === "paperback" ? 85 : 190;
  const pageCost = interior === "bw" ? pageCount * 0.45 : pageCount * 1.85;
  const productionCostPerCopy = Math.round(baseCost + pageCost);

  // Channel Royalties
  // Sara Book Store (Direct): 70% of MRP minus production cost
  const saraStoreRoyaltyPerCopy = Math.max(0, Math.round(mrp * 0.70 - productionCostPerCopy));
  
  // Amazon / Flipkart (eCommerce): 50% discount to marketplace, author gets 30% of MRP
  const amazonRoyaltyPerCopy = Math.max(0, Math.round(mrp * 0.35 - (productionCostPerCopy * 0.5)));

  // Blended average royalty (assuming 40% Sara Store, 60% Amazon/Flipkart)
  const averageRoyaltyPerCopy = Math.round((saraStoreRoyaltyPerCopy * 0.4) + (amazonRoyaltyPerCopy * 0.6));
  const estimatedMonthlyEarnings = averageRoyaltyPerCopy * estimatedMonthlySales;
  const estimatedAnnualEarnings = estimatedMonthlyEarnings * 12;

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      
      {/* ─────────────────────────────────────────────────────────────
          1. HEADER BANNER (Architectural Swiss Blueprint)
         ───────────────────────────────────────────────────────────── */}
      <SubpageHero
        title="Author Royalty & Print Cost Calculator"
        subtitle="Simulate your book manufacturing cost, distribution discount margins, and real author royalty earnings across India and international academic channels."
        badgeText="Transparent Academic Printing & Royalty Engine"
        badgeIcon={Calculator}
        actionSlot={
          <div className="bg-white/10 px-4 py-2.5 rounded-2xl border border-white/20 backdrop-blur-md flex items-center gap-3 text-xs shadow-lg">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-200">Live Formula Engine:</span>
            <strong className="text-[#FFAE00] font-mono">100% Payout Accuracy</strong>
          </div>
        }
      />

      {/* ─────────────────────────────────────────────────────────────
          2. INTERACTIVE SPLIT LAYOUT
         ───────────────────────────────────────────────────────────── */}
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT PANEL: INPUT CONTROLS (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-8">
            <div>
              <h2 className="text-xl font-black text-[#0D3B66] uppercase tracking-wide mb-1">
                Book Specifications
              </h2>
              <p className="text-xs text-slate-500">
                Adjust variables to calculate printing costs and projected channel royalty payouts.
              </p>
            </div>

            {/* 1. Binding Format */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                1. Book Binding Format
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFormat("paperback")}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    format === "paperback"
                      ? "border-[#1658b3] bg-blue-50/50 ring-2 ring-[#1658b3]/20"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="font-bold text-sm text-[#0D3B66]">Paperback (Softcover)</div>
                  <div className="text-xs text-slate-500 mt-1">Gloss or matte laminated, perfect binding</div>
                </button>

                <button
                  type="button"
                  onClick={() => setFormat("hardcover")}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    format === "hardcover"
                      ? "border-[#1658b3] bg-blue-50/50 ring-2 ring-[#1658b3]/20"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="font-bold text-sm text-[#0D3B66]">Hardcover (Casebound)</div>
                  <div className="text-xs text-slate-500 mt-1">Deluxe 2.5mm kappa board spine</div>
                </button>
              </div>
            </div>

            {/* 2. Interior Color */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                2. Interior Color Style
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setInterior("bw")}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    interior === "bw"
                      ? "border-[#1658b3] bg-blue-50/50 ring-2 ring-[#1658b3]/20"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="font-bold text-sm text-[#0D3B66]">Black & White Interior</div>
                  <div className="text-xs text-slate-500 mt-1">Standard 70 GSM academic book paper</div>
                </button>

                <button
                  type="button"
                  onClick={() => setInterior("color")}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    interior === "color"
                      ? "border-[#1658b3] bg-blue-50/50 ring-2 ring-[#1658b3]/20"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="font-bold text-sm text-[#0D3B66]">100% Full Colour</div>
                  <div className="text-xs text-slate-500 mt-1">100 GSM glossy art photography paper</div>
                </button>
              </div>
            </div>

            {/* 3. Page Count Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  3. Total Book Pages: <span className="font-mono text-[#1658b3] text-sm">{pageCount} Pages</span>
                </label>
                <span className="text-[11px] font-mono text-slate-400">Min 40 • Max 500</span>
              </div>
              <input
                type="range"
                min={40}
                max={500}
                step={4}
                value={pageCount}
                onChange={(e) => setPageCount(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1658b3]"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1.5">
                <span>40 Pages</span>
                <span>150 Pages</span>
                <span>300 Pages</span>
                <span>500 Pages</span>
              </div>
            </div>

            {/* 4. Retail Selling MRP */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  4. Retail Selling MRP: <span className="font-mono text-[#1658b3] text-sm">₹{mrp}</span>
                </label>
                <span className="text-[11px] font-mono text-slate-400">Min ₹{productionCostPerCopy + 50} recommended</span>
              </div>
              <input
                type="range"
                min={productionCostPerCopy + 30}
                max={1500}
                step={25}
                value={mrp}
                onChange={(e) => setMrp(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1658b3]"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1.5">
                <span>₹{productionCostPerCopy + 30}</span>
                <span>₹500</span>
                <span>₹1,000</span>
                <span>₹1,500</span>
              </div>
            </div>

            {/* 5. Monthly Projected Sales */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  5. Estimated Monthly Sales: <span className="font-mono text-[#1658b3] text-sm">{estimatedMonthlySales} Copies</span>
                </label>
                <span className="text-[11px] font-mono text-slate-400">10 to 200 copies/mo</span>
              </div>
              <input
                type="range"
                min={10}
                max={200}
                step={5}
                value={estimatedMonthlySales}
                onChange={(e) => setEstimatedMonthlySales(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1658b3]"
              />
            </div>

          </div>

          {/* RIGHT PANEL: LIVE STICKY RECEIPT (5 cols) */}
          <div className="lg:col-span-5 sticky top-24 space-y-6">
            <div className="bg-[#0A1628] rounded-2xl text-white p-6 sm:p-8 shadow-xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Receipt className="w-28 h-28 text-white" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFAE00] font-bold">
                      ACADEMIC ROYALTY ESTIMATE
                    </span>
                    <h3 className="text-xl font-bold text-white mt-0.5">Author Profit Summary</h3>
                  </div>
                  <div className="p-2 rounded-lg bg-white/10">
                    <TrendingUp className="w-5 h-5 text-[#FFAE00]" />
                  </div>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Manufacturing Cost / Copy:</span>
                    <strong className="text-white font-mono text-sm">₹{productionCostPerCopy}</strong>
                  </div>

                  <div className="flex items-center justify-between text-slate-300">
                    <span>Selected Retail MRP:</span>
                    <strong className="text-white font-mono text-sm">₹{mrp}</strong>
                  </div>

                  <div className="flex items-center justify-between text-slate-300">
                    <span>Sara Store Royalty / Copy (Direct):</span>
                    <strong className="text-emerald-400 font-mono text-sm">₹{saraStoreRoyaltyPerCopy}</strong>
                  </div>

                  <div className="flex items-center justify-between text-slate-300">
                    <span>Amazon/Flipkart Royalty / Copy:</span>
                    <strong className="text-sky-300 font-mono text-sm">₹{amazonRoyaltyPerCopy}</strong>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-slate-300 font-medium">Average Royalty / Sold Copy:</span>
                    <span className="text-[#FFAE00] font-black font-mono text-base">₹{averageRoyaltyPerCopy}</span>
                  </div>
                </div>

                {/* Big Projected Earnings Banner */}
                <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-emerald-950/60 to-emerald-900/30 border border-emerald-500/30">
                  <div className="text-[11px] font-mono uppercase text-emerald-300 font-bold">
                    Projected Author Earnings ({estimatedMonthlySales} copies/mo)
                  </div>
                  <div className="text-3xl font-black text-emerald-400 font-mono tracking-tight mt-1">
                    ₹{estimatedMonthlyEarnings.toLocaleString("en-IN")}<span className="text-xs text-emerald-200 font-normal"> / month</span>
                  </div>
                  <div className="text-[11px] text-slate-300 mt-1">
                    Annualized: <strong className="text-white font-mono">₹{estimatedAnnualEarnings.toLocaleString("en-IN")}/year</strong>
                  </div>
                </div>

                {/* Direct Action Button */}
                <div className="mt-6">
                  <Link
                    href={`/publish?format=${format}&interior=${interior}&pages=${pageCount}&mrp=${mrp}`}
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#FFAE00] hover:bg-[#e69d00] text-[#0A1628] text-xs font-black uppercase tracking-wider rounded-xl transition shadow-md"
                  >
                    <span>Publish With These Specs</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Note Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-600 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold mb-0.5">100% Retained Intellectual Property</strong>
                Authors receive direct monthly bank transfers for royalties with zero platform deductions.
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
