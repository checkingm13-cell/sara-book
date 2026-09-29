import Link from "next/link";
import { ArrowLeft, CheckCircle2, FileText, Sparkles, BookOpen, AlertCircle, ChevronRight, Mail, Phone } from "lucide-react";

export const metadata = {
  title: "Author Guidelines | Sara Book Publication",
  description: "Official manuscript formatting, style guide, ISBN allocation, and publishing process for academic authors.",
};

export default function GuidelinesPage() {
  const requirements = [
    {
      title: "Manuscript Format & Dimensions",
      desc: "All manuscripts must be prepared in Microsoft Word (.doc / .docx) format in A4 paper size. Maintain 1.5 line spacing with at least 1-inch (2.54 cm) margins on all sides. Font size must be 12pt (Times New Roman or Calibri recommended).",
    },
    {
      title: "File Submission Policy",
      desc: "Submit a single, consolidated Word file that includes the title page, author biography & affiliations, abstract, full chapters, figures, tables, and APA reference list. Password-protected files cannot be processed.",
    },
    {
      title: "Supported Languages",
      desc: "Sara Book Publication accepts and publishes works in English, Gujarati, and Hindi. Multilingual scholarly dictionaries or glossaries are welcomed with editorial review.",
    },
    {
      title: "Tables & Embedded Figures",
      desc: "All images, charts, and diagrams must be embedded directly within the Word document with high clarity (minimum 300 DPI for print viability). Number all figures and tables sequentially (e.g., Table 1, Figure 2).",
    },
    {
      title: "References & Citations (APA Style)",
      desc: "All scholarly references must follow standard American Psychological Association (APA 7th Edition) format. In-text citations should match the bibliography at the end of the monograph.",
    },
    {
      title: "UGC-Approved ISBN Allocation",
      desc: "Every published edition and reprint receives an authentic 13-digit International Standard Book Number (ISBN) valid for UGC Career Advancement Scheme (CAS) and academic performance indicators (API).",
    },
  ];

  const workflowSteps = [
    { step: "01", title: "Manuscript Submission", time: "Day 1", desc: "Upload your completed Word manuscript via our web portal or email editor@sarapublication.com." },
    { step: "02", title: "Editorial Assessment", time: "2-3 Days", desc: "Our editorial board reviews academic rigor, structural viability, and formatting compliance." },
    { step: "03", title: "ISBN & Legal Registration", time: "3 Working Days", desc: "13-digit ISBN is registered with UGC compliance and author contract executed." },
    { step: "04", title: "Typesetting & Proofing", time: "5-7 Days", desc: "InDesign layout formatting, bespoke cover design, and author digital proof review." },
    { step: "05", title: "Global Release & Distribution", time: "15 Days Total", desc: "Paperback printing, eCommerce cataloging (Amazon, Flipkart, Sara Store), and complimentary copies dispatch." },
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

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1658b3]/30 text-sky-300 border border-sky-400/20 text-[11px] font-mono uppercase tracking-widest font-semibold mb-3">
                <CheckCircle2 className="w-3 h-3 text-[#FFAE00]" /> Editorial Standards & Guidelines
              </div>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-2">
                Author Guidelines & Publication Process
              </h1>
              <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
                Step-by-step instructions on manuscript formatting, APA reference structures, ISBN allocation, and peer review schedules.
              </p>
            </div>

            <Link
              href="/publish"
              className="inline-flex items-center justify-center gap-2 bg-[#1658b3] hover:bg-[#124690] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-lg transition shadow-sm hover:shadow"
            >
              Submit Manuscript Online <ChevronRight className="w-4 h-4 text-[#FFAE00]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. MAIN CONTENT LAYOUT
         ───────────────────────────────────────────────────────────── */}
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Column (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Editorial Vision */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight text-[#0D3B66] mb-3 pb-3 border-b border-slate-100 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#1658b3]" />
                Editorial Vision & Academic Rigor
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3">
                Since our founding in <strong>2011</strong> in Ahmedabad, Sara Book Publication (SBP) has provided an egalitarian, rigorous platform for university faculty, doctoral researchers, and scholars across India and abroad.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                We accept original monographs, textbooks, conference proceedings, and reference manuals. All manuscripts receive professional proof-layout, 13-digit UGC-valid ISBN allocation, and worldwide distribution.
              </p>
            </div>

            {/* Manuscript Formatting Style Guide */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight text-[#0D3B66] mb-5 pb-3 border-b border-slate-100 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#1658b3]" />
                Manuscript Formatting & Style Guide
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {requirements.map((item, idx) => (
                  <div key={idx} className="border border-slate-100 bg-slate-50/70 p-4 rounded-lg">
                    <h3 className="text-xs sm:text-sm font-bold text-[#0D3B66] mb-1.5 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 15-Day Timeline */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight text-[#0D3B66] mb-6 pb-3 border-b border-slate-100 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#FFAE00]" />
                Expedited 15-Day Publication Workflow
              </h2>
              <div className="relative border-l-2 border-slate-200 ml-4 pl-6 space-y-6">
                {workflowSteps.map((w, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-[35px] top-0 w-7 h-7 rounded-full bg-[#0D3B66] text-white font-mono text-[11px] flex items-center justify-center font-bold">
                      {w.step}
                    </span>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-bold text-slate-900 text-sm">{w.title}</h3>
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-blue-50 text-[#1658b3] rounded-full border border-blue-200/60 font-semibold">
                        {w.time}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{w.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Submission Card */}
            <div className="bg-[#0A1628] text-white p-6 rounded-xl border border-white/10 shadow-sm">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#FFAE00] font-bold mb-2">
                EDITORIAL DESK
              </div>
              <h3 className="text-base font-bold mb-2 text-white">Direct Editorial Submission</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-5">
                Transmit your complete draft manuscript (.doc / .docx) to our editorial board in Ahmedabad for preliminary evaluation.
              </p>
              
              <div className="space-y-2.5 mb-5 text-xs">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="text-[10px] uppercase font-mono text-slate-400">Chief Editor Email</div>
                  <a href="mailto:editor@sarapublication.com" className="font-mono font-bold text-sky-300 hover:text-white flex items-center gap-1.5 mt-0.5">
                    <Mail className="w-3.5 h-3.5 text-[#FFAE00]" /> editor@sarapublication.com
                  </a>
                </div>
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="text-[10px] uppercase font-mono text-slate-400">Direct Helpline</div>
                  <a href="tel:+918866003636" className="font-mono font-bold text-sky-300 hover:text-white flex items-center gap-1.5 mt-0.5">
                    <Phone className="w-3.5 h-3.5 text-[#FFAE00]" /> +91 88 66 00 3636
                  </a>
                </div>
              </div>

              <Link
                href="/publish"
                className="w-full block text-center py-3 bg-[#1658b3] hover:bg-[#124690] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition"
              >
                Go to Upload Form
              </Link>
            </div>

            {/* Intellectual Rights Card */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
              <h3 className="text-xs font-bold text-[#0D3B66] uppercase tracking-wider mb-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-[#FFAE00]" />
                Author Rights & Royalties
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Authors retain 100% intellectual copyright. Eligible publishing plans receive up to <strong>15% bi-annual royalties</strong> on physical book sales.
              </p>
              <Link
                href="/packages"
                className="text-xs font-bold text-[#1658b3] hover:text-[#0D3B66] flex items-center gap-1"
              >
                Explore Publishing Packages &rarr;
              </Link>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
