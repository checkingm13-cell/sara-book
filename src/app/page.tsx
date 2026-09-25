import Link from "next/link";
import { 
  ShieldCheck, 
  ArrowRight, 
  BookMarked, 
  PhoneCall, 
  Check, 
  ChevronRight,
  BookOpen
} from "lucide-react";
import { FEATURED_BOOKS, CATEGORIES } from "@/data/books";
import AntigravityHeroCard from "@/components/AntigravityHeroCard";
import SaraOriginalHeader from "@/components/SaraOriginalHeader";

export default function SwissHomepage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Publisher",
    "name": "Sara Book Publication",
    "alternateName": "SBP Ahmedabad",
    "url": "https://sarapublication.com",
    "foundingDate": "2011",
    "telephone": "+91-8866003636",
    "email": "editor@sarapublication.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "303, Maharana Pratap Complex, Opp. Kapadia Guest House, B/H V.S. Hospital, Paldi",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "postalCode": "380006",
      "addressCountry": "IN"
    },
    "description": "Premier academic book publisher in Ahmedabad providing authentic 13-digit UGC-valid ISBN allocation, double-blind peer review, and academic distribution."
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-800 selection:bg-amber-100 selection:text-amber-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Light Hero Section */}
      <section className="relative border-b border-slate-200 bg-gradient-to-b from-[#FAF9F6] to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left 7 Columns: Light Modern Typography */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200/80 text-amber-800 text-[11px] font-mono font-bold tracking-widest uppercase px-3 py-1.5 rounded-full shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                UGC CAS / API SCORE COMPLIANT ISBN
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Academic Authority. <br />
                <span className="text-amber-600">Permanent ISBN.</span> <br />
                Research Validation.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed pt-1">
                Sara Book Publication provides university professors, doctoral scholars, and medical clinicians with authentic 13-digit ISBN assignment, peer review, and archival distribution across English, Hindi, and Gujarati.
              </p>

              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/publish"
                  className="bg-slate-900 hover:bg-amber-600 text-white text-xs font-bold tracking-wider uppercase px-8 py-4 rounded-xl text-center transition flex items-center justify-center gap-2.5 shadow-sm shadow-slate-300"
                >
                  <span>Submit Proposal (48hr Review)</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/calculator"
                  className="bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold tracking-wider uppercase px-8 py-4 rounded-xl border border-slate-300 text-center transition shadow-2xs"
                >
                  Calculate Cost & Royalties
                </Link>
              </div>

              {/* Light Institutional Metrics */}
              <div className="pt-6 grid grid-cols-3 gap-6 border-t border-slate-200 text-xs font-mono uppercase">
                <div>
                  <span className="text-slate-900 font-extrabold block text-lg font-sans">1,200+</span>
                  <span className="text-slate-500">Registered Titles</span>
                </div>
                <div>
                  <span className="text-amber-600 font-extrabold block text-lg font-sans">10 PTS</span>
                  <span className="text-slate-500">Max UGC API Score</span>
                </div>
                <div>
                  <span className="text-slate-900 font-extrabold block text-lg font-sans">7-10 DAYS</span>
                  <span className="text-slate-500">Publication Cycle</span>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Light Antigravity 3D Floating Slate */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <AntigravityHeroCard />
            </div>

          </div>
        </div>
      </section>

      {/* Featured Catalog Grid (Light Editorial Cards) */}
      <section id="catalog" className="py-20 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-slate-200 pb-6">
          <div>
            <span className="text-xs font-mono text-amber-700 font-bold uppercase tracking-widest block mb-2">
              PEER-REVIEWED ARCHIVE
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Recently Published Titles
            </h2>
          </div>
          <span className="mt-3 md:mt-0 font-mono text-xs text-slate-500 uppercase">
            Showing Indexed Works with Active DOI & ISBN
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURED_BOOKS.map((book, idx) => (
            <div
              key={book.id}
              className="bg-white border border-slate-200 rounded-2xl flex flex-col justify-between group hover:border-amber-400 hover:shadow-md transition duration-200 overflow-hidden"
            >
              {/* Card Canvas Header */}
              <div className="p-6">
                <div className="flex justify-between items-center text-[10px] font-mono uppercase mb-4 border-b border-slate-100 pb-2">
                  <span className="text-slate-400">NO. 0{idx + 1}</span>
                  <span className="bg-amber-50 text-amber-800 px-2 py-0.5 rounded font-bold border border-amber-200/50">
                    {book.categoryLabel.slice(0, 16)}
                  </span>
                </div>

                {/* Minimalist Visual Abstract */}
                <div className="h-44 bg-[#FAF9F6] rounded-xl border border-slate-200/70 p-4 flex flex-col justify-between mb-4 relative overflow-hidden group-hover:bg-amber-50/40 transition">
                  <span className="font-mono text-[9px] text-amber-700 tracking-widest uppercase font-bold">
                    ISBN: {book.isbn}
                  </span>
                  <h4 className="font-bold text-xs uppercase leading-snug text-slate-900 line-clamp-3">
                    {book.title}
                  </h4>
                  <span className="font-mono text-[9px] text-slate-500 uppercase">
                    {book.pages} PAGES • {book.language}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 line-clamp-2 leading-snug">
                  {book.title}
                </h3>
                <p className="text-xs text-slate-500 mt-2 font-medium">
                  {book.author}
                </p>
                <p className="text-xs text-slate-600 mt-3 line-clamp-3 leading-relaxed border-t border-slate-100 pt-3">
                  {book.synopsis}
                </p>
              </div>

              {/* Card Canvas Footer */}
              <div className="px-6 py-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-mono text-slate-400 block uppercase">PRICE</span>
                  <span className="text-sm font-bold text-slate-900">₹{book.priceINR}</span>
                </div>
                <Link
                  href={`/book/${book.slug}`}
                  className="bg-white hover:bg-slate-900 hover:text-white text-slate-800 text-[10px] font-mono font-bold uppercase px-3 py-1.5 rounded-lg border border-slate-200 transition flex items-center gap-1.5 shadow-2xs"
                >
                  <span>SPEC SHEET</span>
                  <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Publishing Disciplines (Clean Light Grid) */}
      <section id="disciplines" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="border-b border-slate-200 pb-6 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end">
            <div>
              <span className="text-xs font-mono text-amber-700 uppercase tracking-widest font-bold block mb-1">
                ACADEMIC FACULTY SCOPE
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Four Core Disciplines
              </h2>
            </div>
            <span className="font-mono text-xs text-slate-500 mt-2 md:mt-0 uppercase">
              Independent Peer Review Boards
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CATEGORIES.map((cat, idx) => (
              <div
                key={cat.id}
                className="border border-slate-200 bg-[#FAF9F6] rounded-2xl p-8 flex flex-col justify-between hover:border-amber-400 hover:bg-amber-50/20 transition duration-200 shadow-2xs"
              >
                <div>
                  <div className="flex justify-between items-center text-xs font-mono text-amber-700 mb-6">
                    <span className="font-bold">GRID 0{idx + 1}</span>
                    <span className="text-[10px] text-slate-500">{cat.count}+ TITLES</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {cat.label}
                  </h3>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed font-sans">
                    Doctoral dissertations, edited academic compilations, curriculum reference volumes, and multi-author monographs.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between text-xs font-mono text-slate-700">
                  <span className="font-semibold">ISBN ELIGIBLE</span>
                  <Check className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Light Call to Action Strip */}
      <section className="py-16 bg-amber-500 text-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-900 block mb-1">
              COMMENCE PUBLICATION
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight">
              Ready to Submit Your Book Manuscript?
            </h2>
            <p className="text-sm text-slate-900/80 max-w-xl font-medium mt-1">
              Receive your formal editorial appraisal and provisional ISBN assignment within 48 to 72 hours.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <Link
              href="/publish"
              className="bg-slate-950 hover:bg-slate-900 text-white text-xs font-bold tracking-wider uppercase px-8 py-4 rounded-xl text-center transition shadow-md"
            >
              Submit Manuscript
            </Link>
            <Link
              href="/calculator"
              className="bg-white hover:bg-amber-50 text-slate-900 text-xs font-bold tracking-wider uppercase px-8 py-4 rounded-xl text-center transition shadow-xs"
            >
              Royalty Calculator
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
