import Link from "next/link";
import { ArrowLeft, HelpCircle, Mail, Phone, BookCheck, ShieldAlert, Sparkles } from "lucide-react";

export const metadata = {
  title: "Frequently Asked Questions (FAQ) | Sara Book Publication",
  description: "Common questions answered on manuscript submission, ISBN allocation timeline, royalty payouts, and book printing.",
};

export default function FaqPage() {
  const faqs = [
    {
      q: "Who is Sara Book Publication?",
      a: "Sara Book Publication is one of India's leading and fastest-growing scholarly publishing houses, established in 2011 in Ahmedabad, Gujarat. We provide an egalitarian platform for researchers, professors, poets, and emerging authors to publish peer-reviewed academic textbooks and monographs with valid UGC/CAS ISBN allocations at transparent rates.",
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
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 hover:text-slate-900 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-blue-50 text-blue-900 border border-blue-200 text-xs font-mono uppercase tracking-widest font-semibold mb-3">
            Author Knowledge Base
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Essential information regarding submission guidelines, ISBN legal compliance, royalty terms, and delivery schedules.
          </p>
        </div>
      </div>

      {/* FAQ Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 p-6 shadow-sm hover:border-slate-300 transition-all"
            >
              <h3 className="text-base font-bold text-slate-900 flex items-start gap-3 mb-2">
                <span className="font-mono text-xs text-[#e31e24] bg-red-50 border border-red-100 px-2 py-0.5 rounded shrink-0 mt-0.5">
                  Q{idx + 1}
                </span>
                <span>{item.q}</span>
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed pl-8">
                {item.a}
              </p>
            </div>
          ))}
        </div>

        {/* Support Help Card */}
        <div className="mt-12 bg-slate-900 text-white p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800">
          <div>
            <h3 className="text-lg font-bold mb-2">Have a question not listed here?</h3>
            <p className="text-xs text-slate-400">
              Our editorial support desk in Ahmedabad is available Monday to Saturday (9:30 AM – 6:30 PM IST).
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <a
              href="mailto:editor@sarapublication.com"
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono font-bold flex items-center gap-2 border border-slate-700 transition-colors"
            >
              <Mail className="w-4 h-4 text-[#e31e24]" /> editor@sarapublication.com
            </a>
            <a
              href="tel:+918866003636"
              className="px-5 py-2.5 bg-[#e31e24] hover:bg-[#c4151a] text-white text-xs font-mono font-bold flex items-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4" /> +91 88 66 00 3636
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
