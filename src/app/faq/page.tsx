import Link from "next/link";
import { ArrowLeft, HelpCircle, Mail, Phone, BookCheck, ShieldAlert, Sparkles, ChevronRight } from "lucide-react";

import SubpageHero from "@/components/SubpageHero";

export const metadata = {
  title: "Frequently Asked Questions (FAQ) | Sara Book Publication",
  description: "Common questions answered on manuscript submission, ISBN allocation timeline, royalty payouts, and book printing.",
};

export default function FaqPage() {
  const faqs = [
    {
      q: "Who is Sara Book Publication?",
      a: "Sara Book Publication is one of India's leading scholarly publishing houses, established in 2011 in Ahmedabad, Gujarat. We provide an egalitarian platform for researchers, professors, poets, and emerging authors to publish peer-reviewed academic textbooks and monographs with valid UGC/CAS ISBN allocations at transparent rates.",
    },
    {
      q: "How much time does it take to obtain an ISBN number?",
      a: "Sara Book Publication issues and assigns your official 13-digit ISBN within 3 working days once the publication fee is confirmed and the manuscript submission agreement is executed.",
    },
    {
      q: "What is the complete timeline for publishing my book?",
      a: "Our standardized turnaround time is strictly 15 working days from final proof sign-off to full production, cataloging, and dispatch of author copies.",
    },
    {
      q: "What are the publication costs for Indian vs. International authors?",
      a: "For Indian authors, publishing plans start at ₹5,999 for up to 75 pages, extending to ₹12,000 (Diamond) or ₹18,000 (Platinum Full Colour) with author royalties. For International authors, packages start from 100 USD. Each plan includes cover design, typesetting, and ISBN allocation.",
    },
    {
      q: "How should I submit my manuscript?",
      a: "Please prepare your work in Microsoft Word (.doc / .docx) format containing the complete manuscript (preface, TOC, chapters, references). Submit via our online upload portal or email editor@sarapublication.com to the attention of Dr. S. Menon (Chief Editor).",
    },
    {
      q: "Should I protect my manuscript file with a password?",
      a: "No. Please ensure the file is NOT password-protected so our automated typesetting and editorial layout systems can access the text directly.",
    },
    {
      q: "How should images and diagrams be formatted?",
      a: "All diagrams, charts, and equations must be embedded directly inside the Word document. Do not link external files. For optimal printing, images should be at least 300 DPI.",
    },
    {
      q: "What if I do not possess a pre-designed book cover?",
      a: "Our in-house graphic design studio designs a bespoke full-colour cover for your book based on your academic subject and aesthetic preferences, included at no additional fee.",
    },
    {
      q: "Is there a maximum page limit?",
      a: "There is no ceiling on page count. Books exceeding the base page threshold of your chosen package are billed at an economical per-page rate (₹25 to ₹50 per additional page).",
    },
    {
      q: "What citation style is required for academic bibliographies?",
      a: "We adhere to the American Psychological Association (APA 7th Edition) standard for scholarly citations and bibliographies across sciences, management, and humanities.",
    },
    {
      q: "Where will my published book be available for purchase?",
      a: "Depending on your selected plan, your book will be made globally available on the official Sara Book Store, Amazon India, Amazon Global, and Flipkart.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* ─────────────────────────────────────────────────────────────
          1. HEADER BANNER (Architectural Swiss Blueprint)
         ───────────────────────────────────────────────────────────── */}
      <SubpageHero
        title="Frequently Asked Questions"
        subtitle="Essential answers regarding manuscript submission, ISBN legal compliance, royalty terms, and delivery schedules."
        badgeText="Author Knowledge Base"
        badgeIcon={HelpCircle}
        actionSlot={
          <div className="bg-white/10 px-4 py-2.5 rounded-2xl border border-white/20 backdrop-blur-md flex items-center gap-3 text-xs shadow-lg">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="text-slate-200">Editorial Support:</span>
            <strong className="text-white font-mono">24h Response Rate</strong>
          </div>
        }
      />

      {/* ─────────────────────────────────────────────────────────────
          2. FAQ ACCORDION LIST
         ───────────────────────────────────────────────────────────── */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="space-y-3.5">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs hover:border-slate-300 transition-all"
            >
              <h3 className="text-sm sm:text-base font-bold text-[#0D3B66] flex items-start gap-3 mb-2">
                <span className="font-mono text-[11px] font-bold text-[#1658b3] bg-blue-50 border border-blue-200/60 px-2 py-0.5 rounded-md shrink-0 mt-0.5">
                  Q{idx + 1}
                </span>
                <span>{item.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                {item.a}
              </p>
            </div>
          ))}
        </div>

        {/* Support Help Card */}
        <div className="mt-12 bg-[#0A1628] rounded-xl text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/10 shadow-sm">
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-1 text-white">Have a question not answered here?</h3>
            <p className="text-xs text-slate-300">
              Our editorial support desk in Ahmedabad is available Monday to Saturday (9:30 AM – 6:30 PM IST).
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="mailto:editor@sarapublication.com"
              className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-bold flex items-center gap-2 rounded-lg border border-white/10 transition-colors"
            >
              <Mail className="w-4 h-4 text-[#FFAE00]" /> editor@sarapublication.com
            </a>
            <a
              href="tel:+918866003636"
              className="px-4 py-2.5 bg-[#1658b3] hover:bg-[#124690] text-white text-xs font-mono font-bold flex items-center gap-2 rounded-lg transition-colors shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#FFAE00]" /> +91 88 66 00 3636
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
