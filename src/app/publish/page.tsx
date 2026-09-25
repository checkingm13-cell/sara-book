"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, UploadCloud, CheckCircle2, ShieldCheck, FileCheck } from "lucide-react";

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
    <div className="min-h-screen bg-slate-50 text-slate-900 py-10 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-indigo-600 transition mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to Homepage
        </Link>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 to-indigo-950 text-white">
            <div className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full mb-3 border border-indigo-500/30">
              <UploadCloud className="w-3.5 h-3.5" />
              Manuscript Submission Portal
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Publish Your Book with UGC Valid ISBN
            </h1>
            <p className="mt-2 text-sm text-slate-300">
              Fill in your book proposal details. Our editorial board reviews manuscripts within 48 to 72 hours.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 sm:p-12 text-center">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Proposal Successfully Submitted!</h2>
              <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <strong>{formData.authorName}</strong>. Your proposal for <em>"{formData.bookTitle}"</em> has been logged with reference ID <span className="font-mono font-bold text-indigo-600">SBP-{Math.floor(100000 + Math.random() * 900000)}</span>.
              </p>
              <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200 max-w-md mx-auto text-xs text-slate-500">
                Our editorial coordinator will reach out to <strong>{formData.email}</strong> and <strong>{formData.phone}</strong> for the synopsis verification.
              </div>
              <Link
                href="/"
                className="mt-8 inline-block bg-slate-900 hover:bg-indigo-600 text-white font-semibold text-sm px-6 py-3 rounded-xl transition"
              >
                Return to Homepage
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                    className="w-full text-sm border border-slate-300 rounded-xl p-3 focus:outline-indigo-600"
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
                    className="w-full text-sm border border-slate-300 rounded-xl p-3 focus:outline-indigo-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                    className="w-full text-sm border border-slate-300 rounded-xl p-3 focus:outline-indigo-600"
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
                    className="w-full text-sm border border-slate-300 rounded-xl p-3 focus:outline-indigo-600"
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
                  className="w-full text-sm border border-slate-300 rounded-xl p-3 focus:outline-indigo-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                    Subject Area
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full text-sm border border-slate-300 rounded-xl p-3 focus:outline-indigo-600"
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
                    className="w-full text-sm border border-slate-300 rounded-xl p-3 focus:outline-indigo-600"
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
                    className="w-full text-sm border border-slate-300 rounded-xl p-3 focus:outline-indigo-600"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm py-3.5 rounded-xl shadow-md shadow-indigo-200 transition"
                >
                  Submit Book Proposal for ISBN Evaluation
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
