"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, UploadCloud, CheckCircle2, ShieldCheck, FileCheck, ChevronRight } from "lucide-react";

import SubpageHero from "@/components/SubpageHero";

export default function PublishProposalPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    authorName: "",
    email: "",
    phone: "",
    affiliation: "",
    bookTitle: "",
    subject: "LIFE_SCIENCES",
    language: "English",
    estimatedPages: "250"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* ─────────────────────────────────────────────────────────────
          1. HEADER BANNER (Swiss Style with Editorial Hook)
         ───────────────────────────────────────────────────────────── */}
      <SubpageHero
        title="Publish with UGC Valid ISBN"
        subtitle="Fill in your book proposal details below. Our editorial board in Ahmedabad reviews and responds to academic manuscripts within 48 to 72 hours."
        badgeText="Manuscript Proposal Portal"
        badgeIcon={UploadCloud}
        quoteHook="“Submit your monograph, dissertation, or conference proceedings for rapid double-blind peer evaluation.”"
        indexCode="PROP // 08"
        actionSlot={
          <div className="flex items-center gap-3 px-3.5 py-1.5 text-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-slate-600 font-medium">Proposal Review:</span>
            <strong className="text-slate-900 font-mono font-bold">48-72h Turnaround</strong>
          </div>
        }
      />

      {/* ─────────────────────────────────────────────────────────────
          2. PROPOSAL FORM CONTAINER
         ───────────────────────────────────────────────────────────── */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          {submitted ? (
            <div className="p-8 sm:p-12 text-center">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-[#0D3B66]">Proposal Successfully Submitted!</h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <strong>{formData.authorName}</strong>. Your proposal for <em>"{formData.bookTitle}"</em> has been logged with reference ID <span className="font-mono font-bold text-[#1658b3]">SBP-{Math.floor(100000 + Math.random() * 900000)}</span>.
              </p>
              <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200 max-w-md mx-auto text-xs text-slate-500">
                Our editorial coordinator will reach out to <strong>{formData.email}</strong> and <strong>{formData.phone}</strong> for manuscript file verification.
              </div>
              <Link
                href="/"
                className="mt-8 inline-block bg-[#0A1628] hover:bg-[#1658b3] text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg transition"
              >
                Return to Store
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                    Primary Author Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Dr. / Prof. / Scholar Name"
                    value={formData.authorName}
                    onChange={(e) => setFormData({ ...formData, authorName: e.target.value })}
                    className="w-full text-xs border border-slate-300 rounded-lg p-3 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1658b3]"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                    University / College Affiliation *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Gujarat University"
                    value={formData.affiliation}
                    onChange={(e) => setFormData({ ...formData, affiliation: e.target.value })}
                    className="w-full text-xs border border-slate-300 rounded-lg p-3 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1658b3]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="author@university.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-xs border border-slate-300 rounded-lg p-3 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1658b3] font-mono"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                    Mobile / WhatsApp Contact *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-xs border border-slate-300 rounded-lg p-3 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1658b3] font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  Proposed Book Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Modern Innovations in Agricultural Metagenomics"
                  value={formData.bookTitle}
                  onChange={(e) => setFormData({ ...formData, bookTitle: e.target.value })}
                  className="w-full text-xs border border-slate-300 rounded-lg p-3 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1658b3]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                    Academic Discipline
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full text-xs border border-slate-300 rounded-lg p-3 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1658b3]"
                  >
                    <option value="LIFE_SCIENCES">Life Sciences</option>
                    <option value="MEDICAL_SCIENCE">Medical Science</option>
                    <option value="SCIENCES_AND_ENGINEERING">Sciences & Engineering</option>
                    <option value="SOCIAL_SCIENCE_AND_HUMANITIES">Social Sciences & Humanities</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                    Language
                  </label>
                  <select
                    value={formData.language}
                    onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                    className="w-full text-xs border border-slate-300 rounded-lg p-3 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1658b3]"
                  >
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Gujarati">Gujarati</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                    Estimated Pages
                  </label>
                  <input
                    type="number"
                    value={formData.estimatedPages}
                    onChange={(e) => setFormData({ ...formData, estimatedPages: e.target.value })}
                    className="w-full text-xs border border-slate-300 rounded-lg p-3 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1658b3]"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <button
                  type="submit"
                  className="w-full bg-[#1658b3] hover:bg-[#124690] text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-lg shadow-sm hover:shadow transition"
                >
                  Submit Book Proposal for ISBN Evaluation
                </button>
              </div>
            </form>
          )}
        </div>
      </main>
    </div>
  );
}
