"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  FileText, 
  CheckCircle2, 
  ShieldCheck, 
  Download, 
  BookOpen, 
  Award, 
  ExternalLink,
  ChevronRight,
  BookmarkCheck,
  AlertCircle
} from "lucide-react";

import SubpageHero from "@/components/SubpageHero";

export default function AuthorGuidelinesPage() {
  const [activeSection, setActiveSection] = useState("preparation");

  const sections = [
    { id: "preparation", title: "1. Manuscript Preparation" },
    { id: "isbn", title: "2. UGC & CAS ISBN Compliance" },
    { id: "indesign", title: "3. Typesetting & Layout Specs" },
    { id: "peer-review", title: "4. Peer Review Lifecycle" },
    { id: "copyright", title: "5. Intellectual Property & Royalty" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActiveSection(s.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 100,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      
      {/* ─────────────────────────────────────────────────────────────
          1. HEADER BANNER (Swiss Style with Editorial Hook)
         ───────────────────────────────────────────────────────────── */}
      <SubpageHero
        title="Author Guidelines & Standards"
        subtitle="Comprehensive guidelines for submitting monographs, textbooks, edited volumes, and conference proceedings conforming to UGC API Career Advancement norms."
        badgeText="Official Editorial Criteria"
        badgeIcon={ShieldCheck}
        quoteHook="“Preserving scholarly rigour through double-blind peer review and international bibliographic cataloging.”"
        indexCode="SPEC // 03"
        actionSlot={
          <Link
            href="/download"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A1628] hover:bg-[#1658b3] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition shadow-xs"
          >
            <Download className="w-3.5 h-3.5 text-[#FFAE00]" />
            <span>Word Template (.docx)</span>
          </Link>
        }
      />

      {/* ─────────────────────────────────────────────────────────────
          2. MAIN CONTENT WITH STICKY TABLE OF CONTENTS
         ───────────────────────────────────────────────────────────── */}
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* MOBILE QUICK NAV BAR (Visible only on < lg) */}
          <div className="lg:hidden col-span-1 bg-slate-50 border border-slate-200 rounded-2xl p-4 shadow-xs">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold block mb-2.5">
              JUMP TO SECTION
            </span>
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
              {sections.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-bold transition shrink-0 cursor-pointer ${
                    activeSection === s.id
                      ? "bg-[#1658b3] text-white shadow-xs"
                      : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {s.title}
                </button>
              ))}
            </div>
          </div>

          {/* LEFT: DESKTOP STICKY TABLE OF CONTENTS (Hidden on mobile, sticky only on lg+) */}
          <aside className="hidden lg:block lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-xs">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold block mb-3">
                TABLE OF CONTENTS
              </span>
              <nav className="space-y-1">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold transition flex items-center justify-between cursor-pointer ${
                      activeSection === s.id
                        ? "bg-[#1658b3] text-white shadow-xs"
                        : "text-slate-700 hover:bg-slate-200/60"
                    }`}
                  >
                    <span>{s.title}</span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${activeSection === s.id ? "rotate-90 text-white" : "text-slate-400"}`} />
                  </button>
                ))}
              </nav>

              <div className="pt-4 mt-5 border-t border-slate-200">
                <Link
                  href="/download"
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-white border border-slate-200 hover:border-slate-300 rounded-xl text-xs font-bold text-slate-800 transition shadow-2xs"
                >
                  <Download className="w-3.5 h-3.5 text-[#1658b3]" />
                  <span>Download MS Word Template</span>
                </Link>
              </div>
            </div>

            {/* Quick Support Badge */}
            <div className="bg-[#0A1628] text-white p-5 rounded-2xl">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFAE00] font-bold block mb-1">
                EDITORIAL HELPDESK
              </span>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                Have questions regarding manuscript eligibility or citation conventions?
              </p>
              <a
                href="mailto:contact@sarapublication.com"
                className="text-xs font-bold text-[#FFAE00] hover:underline"
              >
                contact@sarapublication.com →
              </a>
            </div>
          </aside>

          {/* RIGHT: RICH DOCUMENT BODY (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Section 1: Preparation */}
            <section id="preparation" className="scroll-mt-28 space-y-4">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#1658b3] font-bold">
                  Chapter I
                </span>
                <h2 className="text-2xl font-black text-[#0D3B66] tracking-tight">
                  Manuscript Preparation & Formatting
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Authors must submit their complete manuscripts in Microsoft Word format (.docx or .doc). All text, tables, illustrations, equations, and references must be incorporated in a single master document.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <h4 className="font-bold text-xs text-slate-900 uppercase mb-2">Typography & Sizing</h4>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                    <li>Main body text: Times New Roman, 12pt, 1.5 line spacing.</li>
                    <li>Primary headings: 14pt, Bold, Title Case.</li>
                    <li>Secondary subheadings: 12pt, Bold.</li>
                    <li>Page margins: 1 inch (2.54 cm) on all 4 borders.</li>
                  </ul>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <h4 className="font-bold text-xs text-slate-900 uppercase mb-2">Reference Styles Accepted</h4>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                    <li><strong>APA 7th Edition:</strong> For Social Sciences & Management.</li>
                    <li><strong>IEEE / Vancouver:</strong> For Engineering, IT & Medicine.</li>
                    <li><strong>MLA 9th Edition:</strong> For Literature and Arts.</li>
                    <li>Authors must ensure uniform citation style throughout.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 2: ISBN & CAS */}
            <section id="isbn" className="scroll-mt-28 space-y-4">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#1658b3] font-bold">
                  Chapter II
                </span>
                <h2 className="text-2xl font-black text-[#0D3B66] tracking-tight">
                  UGC & CAS ISBN Compliance
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Sara Book Publication is an officially registered publisher with the Raja Rammohun Roy National Agency for ISBN (Ministry of Education, Govt. of India).
              </p>

              <div className="bg-blue-50/60 border border-blue-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1658b3] uppercase tracking-wide">
                  <Award className="w-4 h-4 text-[#FFAE00]" /> Career Advancement Scheme (CAS) Points
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Publications with authentic 13-digit ISBNs qualify for Academic Performance Indicators (API) under Category 3(e) of UGC Regulations. A single-authored textbook or reference monograph yields up to <strong>10 to 12 API points</strong> upon evaluation by university screening committees.
                </p>
              </div>
            </section>

            {/* Section 3: InDesign */}
            <section id="indesign" className="scroll-mt-28 space-y-4">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#1658b3] font-bold">
                  Chapter III
                </span>
                <h2 className="text-2xl font-black text-[#0D3B66] tracking-tight">
                  Typesetting & Layout Specifications
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Once approved, all manuscripts enter our Adobe InDesign workflow where font kerning, pagination, running headers, and table styling are mechanically calibrated to world-standard press book formats.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
                <div className="flex items-center justify-between text-xs border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Standard Academic Trim Size:</span>
                  <strong className="text-slate-900 font-mono">Crown Quarto (7.25" × 9.5") or Royal 8vo</strong>
                </div>
                <div className="flex items-center justify-between text-xs border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Standard Paper Quality:</span>
                  <strong className="text-slate-900">70 GSM Natural Shade Bookprint</strong>
                </div>
                <div className="flex items-center justify-between text-xs border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Lamination Finish:</span>
                  <strong className="text-slate-900">Thermal Velvet Matte or Gloss Lamination</strong>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Soft Proof Draft:</span>
                  <strong className="text-emerald-700 font-bold">High-Resolution PDF provided for sign-off</strong>
                </div>
              </div>
            </section>

            {/* Section 4: Peer Review */}
            <section id="peer-review" className="scroll-mt-28 space-y-4">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#1658b3] font-bold">
                  Chapter IV
                </span>
                <h2 className="text-2xl font-black text-[#0D3B66] tracking-tight">
                  Double-Blind Peer Review Lifecycle
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To maintain the highest scholarly integrity, every manuscript is examined by our subject-matter editorial board following a rigorous 4-step sequence:
              </p>

              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 bg-white">
                  <span className="w-6 h-6 rounded-full bg-[#1658b3] text-white flex items-center justify-center text-xs font-bold shrink-0">1</span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase">Initial Plagiarism Screening</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Similarity index verified using Turnitin/iThenticate. Must remain strictly under 15% overall.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 bg-white">
                  <span className="w-6 h-6 rounded-full bg-[#1658b3] text-white flex items-center justify-center text-xs font-bold shrink-0">2</span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase">Subject Expert Appraisal</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Two peer reviewers independently inspect chapter coherence, research methodology, and factual citations.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 bg-white">
                  <span className="w-6 h-6 rounded-full bg-[#1658b3] text-white flex items-center justify-center text-xs font-bold shrink-0">3</span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase">Author Revision & Formatting Proof</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Reviewer feedback dispatched to authors for minor revisions, followed by draft PDF typesetting sign-off.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 bg-white">
                  <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0">4</span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase">Printing & Nationwide Distribution</h4>
                    <p className="text-xs text-slate-500 mt-0.5">ISBN allocated, legal deposit sent, and book activated on Amazon, Flipkart, and Sara Book Store.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Copyright & Royalty */}
            <section id="copyright" className="scroll-mt-28 space-y-4">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#1658b3] font-bold">
                  Chapter V
                </span>
                <h2 className="text-2xl font-black text-[#0D3B66] tracking-tight">
                  Intellectual Property, Copyright & Royalties
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Sara Book Publication operates on an author-empowered non-exclusive model. Authors retain full copyright over their intellectual work, and may produce translated versions or revised future editions freely.
              </p>

              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wide mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Transparent Monthly Royalty Payouts
                </div>
                <p className="text-xs text-emerald-950 leading-relaxed">
                  Earn up to <strong>15% royalty</strong> on every book copy sold across Amazon, Flipkart, and institutional library distributors with zero maintenance fees. Detailed sales statements are sent every quarter directly to your registered author portal.
                </p>
              </div>
            </section>

          </div>

        </div>
      </main>
    </div>
  );
}
