import Link from "next/link";
import { ArrowLeft, MapPin, Mail, Phone, Clock, Send, ShieldCheck, Building2, MessageSquare } from "lucide-react";

import SubpageHero from "@/components/SubpageHero";

export const metadata = {
  title: "Contact Editorial Office | Sara Book Publication",
  description: "Get in touch with the Sara Book Publication editorial office in Ahmedabad, Gujarat. Inquire about manuscript evaluation, print runs, and book distribution.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* ─────────────────────────────────────────────────────────────
          1. HEADER BANNER (Swiss Style with Editorial Hook)
         ───────────────────────────────────────────────────────────── */}
      <SubpageHero
        title="Contact Editorial Division"
        subtitle="Reach out directly to our publishing board in Ahmedabad for author consultations, institutional bulk purchasing, or manuscript progress inquiries."
        badgeText="Editorial Division Headquarters"
        badgeIcon={Building2}
        quoteHook="“Direct editorial counsel and author concierge located in Paldi, Ahmedabad.”"
        indexCode="DIR // 06"
        actionSlot={
          <div className="flex items-center gap-3 px-3.5 py-1.5 text-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-slate-600 font-medium">Office Hours:</span>
            <strong className="text-slate-900 font-mono font-bold">Mon - Sat (10am - 6pm)</strong>
          </div>
        }
      />

      {/* ─────────────────────────────────────────────────────────────
          2. CONTACT GRID & FORM
         ───────────────────────────────────────────────────────────── */}
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Office Details (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#0A1628] text-white p-6 sm:p-7 rounded-xl border border-white/10 shadow-sm">
              <h2 className="text-sm font-bold uppercase tracking-wider mb-5 pb-3 border-b border-white/10 flex items-center gap-2 font-mono text-[#FFAE00]">
                <Building2 className="w-4 h-4 text-[#FFAE00]" />
                Headquarters
              </h2>

              <div className="space-y-5 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#1658b3] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-white mb-1">Ahmedabad Office</h3>
                    <p className="text-slate-300 leading-relaxed">
                      303, Maharana Pratap Complex,<br />
                      Opp. Kapadia Guest House, B/H V.S. Hospital,<br />
                      Paldi, Ahmedabad - 380006,<br />
                      Gujarat, India.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#1658b3] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-white mb-1">Direct Helplines</h3>
                    <a href="tel:+918866003636" className="text-sky-300 font-mono block hover:text-white mt-0.5">
                      +91 88 66 00 3636
                    </a>
                    <a href="tel:+918866113636" className="text-sky-300 font-mono block hover:text-white mt-1">
                      +91 88 66 11 3636
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#1658b3] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-white mb-1">Editorial Email</h3>
                    <a href="mailto:editor@sarapublication.com" className="text-sky-300 font-mono block hover:text-white mt-0.5">
                      editor@sarapublication.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#1658b3] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-white mb-1">Operating Hours</h3>
                    <p className="text-slate-300 leading-relaxed font-mono text-[11px]">
                      Mon – Sat: 09:30 AM – 06:30 PM IST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* UGC Validation Guarantee */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#0D3B66] mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                UGC & NAAC Compliance Note
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                All ISBN allocations and book publications are recorded under Raja Rammohun Roy National Agency standards. Verified for Academic Performance Indicator (API) scores in Faculty Promotions.
              </p>
            </div>
          </div>

          {/* Right Column: Inquiry Form (8 cols) */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0D3B66] mb-2">
                Send an Editorial Inquiry
              </h2>
              <p className="text-xs text-slate-500 mb-6">
                Fill in your details below and an editorial manager will contact you within 24 business hours.
              </p>

              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Rajesh Sharma"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1658b3] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@university.edu"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1658b3] transition-all font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Mobile Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1658b3] transition-all font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Subject / Inquiry Type *
                    </label>
                    <select
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1658b3] transition-all"
                    >
                      <option value="inquiry">General Publishing Inquiry</option>
                      <option value="status">Manuscript Tracking</option>
                      <option value="pricing">Bulk Printing & Institutional Purchasing</option>
                      <option value="isbn">ISBN & Legal Verification</option>
                      <option value="dispute">Author Support</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Your Message / Manuscript Synopsis *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Provide a brief synopsis of your book, anticipated page count, academic discipline, and any specific requirements..."
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1658b3] transition-all leading-relaxed"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-7 py-3 bg-[#1658b3] hover:bg-[#124690] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 rounded-lg shadow-sm hover:shadow"
                >
                  <Send className="w-4 h-4 text-[#FFAE00]" /> Send Inquiry to Editorial Board
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
