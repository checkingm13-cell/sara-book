import Link from "next/link";
import { ArrowLeft, Check, Sparkles, ShieldCheck, Globe, BookOpen, ChevronRight } from "lucide-react";

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
              <ShieldCheck className="w-3 h-3 text-[#FFAE00]" /> Transparent Academic Publishing Plans
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-2">
              Publication Packages & Pricing
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Every plan guarantees a verified 13-digit UGC-valid ISBN, professional InDesign typesetting, custom cover artwork, and rapid 15-day worldwide distribution.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. PRICING CARDS
         ───────────────────────────────────────────────────────────── */}
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-[#0D3B66] tracking-tight uppercase">
            Choose Your Publishing Plan
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Zero hidden royalties. Full copyright retention. 100% compliant with UGC CAS point guidelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mb-14 items-stretch">
          {tiers.map((t, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between rounded-2xl transition-all duration-200 p-6 relative ${
                t.popular
                  ? "bg-[#0A1628] text-white shadow-xl ring-2 ring-[#FFAE00] -translate-y-1"
                  : "bg-white text-slate-800 border border-slate-200 hover:border-slate-300 hover:shadow-md"
              }`}
            >
              {t.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#FFAE00] text-[#0A1628] text-[10px] font-mono font-black tracking-widest uppercase rounded-full shadow-md flex items-center gap-1">
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
                    {t.priceInr}
                  </div>
                  <div className={`text-[11px] font-mono mt-0.5 ${
                    t.popular ? "text-slate-300" : "text-slate-500"
                  }`}>
                    Global Price: <strong className={t.popular ? "text-white font-bold" : "text-slate-700"}>{t.priceUsd}</strong>
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
                    <span className={t.popular ? "text-slate-400" : "text-slate-500"}>Royalty:</span>
                    <strong className={t.royalty !== "Not Applicable" ? "text-emerald-400 font-bold" : (t.popular ? "text-slate-400" : "text-slate-500")}>
                      {t.royalty}
                    </strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={t.popular ? "text-slate-400" : "text-slate-500"}>Extra Page:</span>
                    <span className={`font-mono ${t.popular ? "text-slate-200" : "text-slate-700"}`}>{t.extraPageRate}</span>
                  </div>
                </div>
              </div>

              <div className={`pt-5 mt-6 border-t ${
                t.popular ? "border-white/10" : "border-slate-100"
              }`}>
                <Link
                  href={`/publish?plan=${t.name.toLowerCase()}`}
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

        {/* Feature Comparison Table */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <h2 className="text-lg sm:text-xl font-bold tracking-tight text-[#0D3B66] mb-6 flex items-center gap-2">
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
                <h4 className="text-xs font-bold text-slate-900 uppercase">Custom Cover Artwork Design</h4>
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
      </main>
    </div>
  );
}
