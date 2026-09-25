import Link from "next/link";
import { ArrowLeft, Check, Sparkles, ShieldCheck, Globe, BookOpen } from "lucide-react";

export const metadata = {
  title: "Publishing Packages & Pricing | Sara Book Publication",
  description: "Transparent pricing packages for Indian and International academic book publishing with UGC-approved ISBN allocation.",
};

export default function PackagesPage() {
  const tiers = [
    {
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
      highlight: "Ideal for student research monographs and initial dissertations.",
    },
    {
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
      support: "Email",
      highlight: "Includes premier multi-platform eCommerce distribution.",
    },
    {
      name: "Gold",
      priceInr: "₹9,000",
      priceUsd: "$130",
      pages: "90 Pages",
      badge: "Academic",
      popular: true,
      copies: "3 Complimentary Copies",
      interior: "Black & White",
      paper: "Normal 70 GSM",
      extraPageRate: "₹50 / $1.5",
      royalty: "Not Applicable",
      copyright: "No",
      listing: "Amazon, Flipkart, Sara Store",
      support: "Email & Phone Support",
      highlight: "Most popular tier for university professors and college faculty.",
    },
    {
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
      support: "Priority Phone & Dedicated Editor",
      highlight: "Full copyright protection with sustained 10% royalty distribution.",
    },
    {
      name: "Platinum",
      priceInr: "₹18,000",
      priceUsd: "$400",
      pages: "120 Pages",
      badge: "Full Colour Luxe",
      popular: false,
      copies: "7 Complimentary Copies",
      interior: "100% Full Colour",
      paper: "Glossy High-Definition Paper",
      extraPageRate: "₹100 / $3",
      royalty: "15% Royalty",
      copyright: "Official Registration",
      listing: "Amazon, Flipkart, Sara Store",
      support: "VIP Dedicated Concierge",
      highlight: "Flawless full-colour interior for medical atlases and architectural portfolios.",
    },
  ];

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
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-rose-50 text-rose-900 border border-rose-200 text-xs font-mono uppercase tracking-widest font-semibold mb-3">
              Official 2026 Tier Schedule
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 mb-4">
              Publication Packages & Transparent Pricing
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every plan guarantees a verified 13-digit UGC-valid ISBN, professional InDesign typesetting, custom cover artwork, and rapid 15-day worldwide distribution.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {tiers.map((t, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between border bg-white rounded-none transition-all p-6 relative ${
                t.popular
                  ? "border-[#e31e24] shadow-md ring-1 ring-[#e31e24]"
                  : "border-slate-200 hover:border-slate-300 shadow-sm"
              }`}
            >
              {t.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-[#e31e24] text-white text-[10px] font-mono font-bold tracking-widest uppercase rounded">
                  Most Selected
                </div>
              )}

              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-bold text-lg text-slate-900 uppercase tracking-wide">{t.name}</h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
                    {t.badge}
                  </span>
                </div>

                <div className="mb-4">
                  <div className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
                    {t.priceInr}
                  </div>
                  <div className="text-xs font-mono text-slate-500">
                    International: <strong className="text-slate-700">{t.priceUsd}</strong>
                  </div>
                </div>

                <p className="text-[11px] text-slate-500 leading-normal mb-6 min-h-[34px]">
                  {t.highlight}
                </p>

                <div className="space-y-3 border-t border-slate-100 pt-4 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Base Pages:</span>
                    <strong className="text-slate-900 font-mono">{t.pages}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Author Copies:</span>
                    <strong className="text-slate-900">{t.copies}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Interior Style:</span>
                    <strong className="text-slate-900">{t.interior}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Paper Grade:</span>
                    <span className="text-slate-700">{t.paper}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Royalty:</span>
                    <strong className={`${t.royalty !== "Not Applicable" ? "text-emerald-700" : "text-slate-600"}`}>
                      {t.royalty}
                    </strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Extra Page Rate:</span>
                    <span className="text-slate-700 font-mono">{t.extraPageRate}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  href={`/publish?plan=${t.name.toLowerCase()}`}
                  className={`w-full block text-center py-2.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                    t.popular
                      ? "bg-[#e31e24] hover:bg-[#c4151a] text-white"
                      : "bg-slate-900 hover:bg-slate-800 text-white"
                  }`}
                >
                  Select {t.name}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="bg-white border border-slate-200 p-8 shadow-sm">
          <h2 className="text-xl font-bold tracking-tight text-slate-900 mb-6 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            Standard Inclusions in Every Sara Book Publication Package
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase">UGC Valid 13-Digit ISBN</h4>
                <p className="text-xs text-slate-500 mt-1">Officially alloted with barcode for UGC Career Advancement (CAS) points.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase">Custom Cover Page Design</h4>
                <p className="text-xs text-slate-500 mt-1">Full-colour high-gloss or matte laminate cover designed by professional artists.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase">Digital Author Proof (Softcopy)</h4>
                <p className="text-xs text-slate-500 mt-1">Complete PDF draft provided for final author verification before mechanical printing.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase">Global Multi-Platform Listing</h4>
                <p className="text-xs text-slate-500 mt-1">Listed on Amazon, Flipkart, and the Sara Book Store catalog for worldwide order fulfillment.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase">Author Retains 100% Rights</h4>
                <p className="text-xs text-slate-500 mt-1">Authors retain complete non-exclusive intellectual property and reprint privileges.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase">15-Day Guaranteed Delivery</h4>
                <p className="text-xs text-slate-500 mt-1">Expedited end-to-end turnaround from initial manuscript approval to courier dispatch.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
