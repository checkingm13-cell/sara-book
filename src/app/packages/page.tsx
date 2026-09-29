"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Globe, 
  BookOpen, 
  ChevronRight,
  HelpCircle,
  Truck,
  FileCheck,
  Award
} from "lucide-react";

import SubpageHero from "@/components/SubpageHero";

export default function PackagesPage() {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");

  const tiers = [
    {
      id: "bronze",
      name: "Bronze",
      priceInr: "₹5,999",
      priceUsd: "$100",
      pages: "75 Pages",
      badge: "Starter",
      popular: false,
      copies: "0 Copies",
      interior: "Black & White",
      paper: "Normal 70 GSM",
      extraPageRate: "₹25 / $1",
      royalty: "Not Applicable",
      copyright: "No",
      listing: "Sara Book Store",
      support: "Email",
      highlight: "Ideal for student research monographs and initial dissertation publication.",
    },
    {
      id: "silver",
      name: "Silver",
      priceInr: "₹7,000",
      priceUsd: "$110",
      pages: "75 Pages",
      badge: "Standard",
      popular: false,
      copies: "1 Complimentary Copy",
      interior: "Black & White",
      paper: "Normal 70 GSM",
      extraPageRate: "₹25 / $1",
      royalty: "Not Applicable",
      copyright: "No",
      listing: "Amazon, Flipkart, Sara Store",
      support: "Email Support",
      highlight: "Includes premier multi-platform eCommerce distribution across India.",
    },
    {
      id: "gold",
      name: "Gold",
      priceInr: "₹9,000",
      priceUsd: "$130",
      pages: "90 Pages",
      badge: "Faculty Choice",
      popular: true,
      copies: "3 Complimentary Copies",
      interior: "Black & White",
      paper: "Normal 70 GSM",
      extraPageRate: "₹50 / $1.5",
      royalty: "Not Applicable",
      copyright: "No",
      listing: "Amazon, Flipkart, Sara Store",
      support: "Priority Phone & Email",
      highlight: "Most selected plan for university faculty, PhD scholars, and UGC CAS score submissions.",
    },
    {
      id: "diamond",
      name: "Diamond",
      priceInr: "₹12,000",
      priceUsd: "$300",
      pages: "100 Pages",
      badge: "Author Choice",
      popular: false,
      copies: "5 Complimentary Copies",
      interior: "Black & White",
      paper: "Glossy Quality Paper",
      extraPageRate: "₹50 / $2",
      royalty: "10% Royalty",
      copyright: "Official Registration",
      listing: "Amazon, Flipkart, Sara Store",
      support: "Dedicated Editorial Lead",
      highlight: "Full government copyright certification with guaranteed 10% author royalties.",
    },
    {
      id: "platinum",
      name: "Platinum",
      priceInr: "₹18,000",
      priceUsd: "$400",
      pages: "120 Pages",
      badge: "Full Colour Luxe",
      popular: false,
      copies: "7 Complimentary Copies",
      interior: "100% Full Colour",
      paper: "Glossy High-Definition",
      extraPageRate: "₹100 / $3",
      royalty: "15% Royalty",
      copyright: "Official Registration",
      listing: "Amazon, Flipkart, Sara Store",
      support: "VIP Dedicated Concierge",
      highlight: "Flawless full-colour interior for medical atlases, dental photography & engineering portfolios.",
    },
  ];

  const featureMatrix = [
    { feature: "13-Digit UGC-Valid ISBN", bronze: true, silver: true, gold: true, diamond: true, platinum: true },
    { feature: "Barcode Generation", bronze: true, silver: true, gold: true, diamond: true, platinum: true },
    { feature: "Custom Cover Artwork Design", bronze: true, silver: true, gold: true, diamond: true, platinum: true },
    { feature: "Interior InDesign Typesetting", bronze: true, silver: true, gold: true, diamond: true, platinum: true },
    { feature: "Digital Author PDF Proof", bronze: true, silver: true, gold: true, diamond: true, platinum: true },
    { feature: "Author Retains 100% Rights", bronze: true, silver: true, gold: true, diamond: true, platinum: true },
    { feature: "Sara Book Store Global Catalog", bronze: true, silver: true, gold: true, diamond: true, platinum: true },
    { feature: "Amazon & Flipkart Listing", bronze: false, silver: true, gold: true, diamond: true, platinum: true },
    { feature: "Complimentary Author Copies", bronze: "0", silver: "1 Copy", gold: "3 Copies", diamond: "5 Copies", platinum: "7 Copies" },
    { feature: "Government Copyright Registration", bronze: false, silver: false, gold: false, diamond: true, platinum: true },
    { feature: "Ongoing Author Sales Royalty", bronze: "None", silver: "None", gold: "None", diamond: "10%", platinum: "15%" },
    { feature: "Turnaround to Dispatch", bronze: "15 Days", silver: "15 Days", gold: "12 Days", diamond: "10 Days", platinum: "7 Days" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      
      {/* ─────────────────────────────────────────────────────────────
          1. HEADER BANNER (Swiss Style with Editorial Hook)
         ───────────────────────────────────────────────────────────── */}
      <SubpageHero
        title="Publishing Packages & Pricing"
        subtitle="All-inclusive academic book publication with authentic 13-digit ISBN allocation, professional InDesign typesetting, custom cover design, and fast guaranteed courier delivery."
        badgeText="UGC-CARE & NAAC Valid Academic Plans"
        badgeIcon={ShieldCheck}
        quoteHook="“From peer review to doorstep delivery — complete academic publication transparently priced.”"
        indexCode="SEC // 01"
        actionSlot={
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200">
            <button
              type="button"
              onClick={() => setCurrency("INR")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                currency === "INR"
                  ? "bg-[#0A1628] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              ₹ INR (India)
            </button>
            <button
              type="button"
              onClick={() => setCurrency("USD")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                currency === "USD"
                  ? "bg-[#0A1628] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              $ USD (Global)
            </button>
          </div>
        }
      />

      {/* ─────────────────────────────────────────────────────────────
          2. PRICING CARDS
         ───────────────────────────────────────────────────────────── */}
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mb-16 items-stretch">
          {tiers.map((t) => (
            <div
              key={t.id}
              className={`flex flex-col justify-between rounded-2xl transition-all duration-200 p-6 relative ${
                t.popular
                  ? "bg-[#0A1628] text-white shadow-2xl ring-2 ring-[#FFAE00] lg:-translate-y-2"
                  : "bg-white text-slate-800 border border-slate-200 hover:border-slate-300 hover:shadow-lg"
              }`}
            >
              {t.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#FFAE00] text-[#0A1628] text-[10px] font-mono font-black tracking-widest uppercase rounded-full shadow-md flex items-center gap-1 whitespace-nowrap">
                  <Sparkles className="w-3 h-3 fill-current" /> Most Popular
                </div>
              )}

              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className={`font-black text-lg tracking-wide uppercase ${
                    t.popular ? "text-white" : "text-[#0D3B66]"
                  }`}>
                    {t.name}
                  </h3>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold uppercase ${
                    t.popular ? "bg-white/10 text-sky-300" : "bg-blue-50 text-[#1658b3]"
                  }`}>
                    {t.badge}
                  </span>
                </div>

                <div className="mb-4">
                  <div className={`text-3xl font-black tracking-tight ${
                    t.popular ? "text-white" : "text-[#0D3B66]"
                  }`}>
                    {currency === "INR" ? t.priceInr : t.priceUsd}
                  </div>
                  <div className={`text-[11px] font-mono mt-0.5 ${
                    t.popular ? "text-slate-300" : "text-slate-500"
                  }`}>
                    {currency === "INR" ? `USD: ${t.priceUsd}` : `INR: ${t.priceInr}`} • No hidden fees
                  </div>
                </div>

                <p className={`text-xs leading-relaxed mb-6 min-h-[44px] ${
                  t.popular ? "text-slate-300" : "text-slate-500"
                }`}>
                  {t.highlight}
                </p>

                <div className={`space-y-3 border-t pt-4 text-xs ${
                  t.popular ? "border-white/10" : "border-slate-100"
                }`}>
                  <div className="flex items-center justify-between">
                    <span className={t.popular ? "text-slate-400" : "text-slate-500"}>Base Pages:</span>
                    <strong className={`font-mono ${t.popular ? "text-white" : "text-slate-800"}`}>{t.pages}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={t.popular ? "text-slate-400" : "text-slate-500"}>Author Copies:</span>
                    <strong className={t.popular ? "text-white" : "text-slate-800"}>{t.copies}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={t.popular ? "text-slate-400" : "text-slate-500"}>Interior Style:</span>
                    <strong className={t.popular ? "text-white" : "text-slate-800"}>{t.interior}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={t.popular ? "text-slate-400" : "text-slate-500"}>Paper Grade:</span>
                    <span className={t.popular ? "text-slate-200" : "text-slate-700"}>{t.paper}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={t.popular ? "text-slate-400" : "text-slate-500"}>Extra Page:</span>
                    <span className={`font-mono ${t.popular ? "text-slate-200" : "text-slate-700"}`}>{t.extraPageRate}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={t.popular ? "text-slate-400" : "text-slate-500"}>Royalty:</span>
                    <strong className={t.royalty !== "Not Applicable" ? "text-emerald-400 font-bold" : (t.popular ? "text-slate-400" : "text-slate-500")}>
                      {t.royalty}
                    </strong>
                  </div>
                </div>
              </div>

              <div className={`pt-5 mt-6 border-t ${
                t.popular ? "border-white/10" : "border-slate-100"
              }`}>
                <Link
                  href={`/publish?plan=${t.id}`}
                  className={`w-full block text-center py-3 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                    t.popular
                      ? "bg-[#FFAE00] hover:bg-[#e69d00] text-[#0A1628] shadow-md font-black"
                      : "bg-[#0A1628] hover:bg-slate-800 text-white"
                  }`}
                >
                  Select {t.name}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ─────────────────────────────────────────────────────────────
            3. FEATURE COMPARISON MATRIX
           ───────────────────────────────────────────────────────────── */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs mb-16">
          <div className="p-6 sm:p-8 bg-slate-50 border-b border-slate-200">
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-[#0D3B66]">
              Detailed Feature Comparison Matrix
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Every plan complies with the UGC Minimum Qualifications for Appointment of Teachers and Other Academic Staff.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-white">
                  <th className="p-4 sm:p-5 font-bold text-slate-900 w-1/3">Included Feature</th>
                  <th className="p-4 sm:p-5 font-bold text-slate-800 text-center">Bronze</th>
                  <th className="p-4 sm:p-5 font-bold text-slate-800 text-center">Silver</th>
                  <th className="p-4 sm:p-5 font-bold text-[#1658b3] text-center bg-blue-50/50">Gold</th>
                  <th className="p-4 sm:p-5 font-bold text-slate-800 text-center">Diamond</th>
                  <th className="p-4 sm:p-5 font-bold text-slate-800 text-center">Platinum</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {featureMatrix.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                    <td className="p-4 sm:p-5 font-medium text-slate-800">{row.feature}</td>
                    
                    <td className="p-4 sm:p-5 text-center">
                      {typeof row.bronze === "boolean" ? (
                        row.bronze ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : <span className="text-slate-300">—</span>
                      ) : (
                        <span className="font-mono text-slate-700">{row.bronze}</span>
                      )}
                    </td>

                    <td className="p-4 sm:p-5 text-center">
                      {typeof row.silver === "boolean" ? (
                        row.silver ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : <span className="text-slate-300">—</span>
                      ) : (
                        <span className="font-mono text-slate-700">{row.silver}</span>
                      )}
                    </td>

                    <td className="p-4 sm:p-5 text-center bg-blue-50/30">
                      {typeof row.gold === "boolean" ? (
                        row.gold ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : <span className="text-slate-300">—</span>
                      ) : (
                        <span className="font-mono font-bold text-[#1658b3]">{row.gold}</span>
                      )}
                    </td>

                    <td className="p-4 sm:p-5 text-center">
                      {typeof row.diamond === "boolean" ? (
                        row.diamond ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : <span className="text-slate-300">—</span>
                      ) : (
                        <span className="font-mono text-slate-700">{row.diamond}</span>
                      )}
                    </td>

                    <td className="p-4 sm:p-5 text-center">
                      {typeof row.platinum === "boolean" ? (
                        row.platinum ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : <span className="text-slate-300">—</span>
                      ) : (
                        <span className="font-mono font-bold text-slate-900">{row.platinum}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            4. GUARANTEE STRIP
           ───────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 sm:p-8 bg-[#0A1628] rounded-2xl text-white">
          <div className="flex items-start gap-3.5">
            <Award className="w-6 h-6 text-[#FFAE00] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider">CAS Score Guaranteed</h4>
              <p className="text-xs text-slate-300 mt-1">Official certificate of ISBN allotment issued for NAAC & UGC Career Advancement Scheme.</p>
            </div>
          </div>
          <div className="flex items-start gap-3.5">
            <Globe className="w-6 h-6 text-[#FFAE00] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider">Global Distribution</h4>
              <p className="text-xs text-slate-300 mt-1">Direct listing on Amazon, Flipkart, and Sara Book Store with worldwide courier dispatch.</p>
            </div>
          </div>
          <div className="flex items-start gap-3.5">
            <Truck className="w-6 h-6 text-[#FFAE00] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider">Express Turnaround</h4>
              <p className="text-xs text-slate-300 mt-1">Standard 7–15 days from final author draft sign-off to doorstep delivery.</p>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
