import Link from "next/link";
import { ArrowLeft, MapPin, Mail, Phone, Clock, Send, ShieldCheck, Building2 } from "lucide-react";

export const metadata = {
  title: "Contact Editorial Office | Sara Book Publication",
  description: "Get in touch with the Sara Book Publication editorial office in Ahmedabad, Gujarat. Inquire about manuscript evaluation, print runs, and book distribution.",
};

export default function ContactPage() {
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
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-100 text-slate-900 border border-slate-200 text-xs font-mono uppercase tracking-widest font-semibold mb-3">
            Publishing House Headquarters
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 mb-3">
            Contact Editorial Division
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
            Reach out directly to our publishing board in Ahmedabad for author consultations, institutional purchasing, or manuscript progress inquiries.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Details Card */}
          <div className="space-y-6">
            <div className="bg-slate-900 text-white p-8 border border-slate-800 shadow-sm">
              <h2 className="text-lg font-bold uppercase tracking-wider mb-6 pb-2 border-b border-slate-800 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#e31e24]" />
                Headquarters
              </h2>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#e31e24] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-200 mb-1">Office Address</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      303, Maharana Pratap Complex,<br />
                      Opp. Kapadia Guest House, B/H V.S. Hospital,<br />
                      Paldi, Ahmedabad - 380006,<br />
                      Gujarat, India.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#e31e24] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-200 mb-1">Direct Lines</h3>
                    <a href="tel:+918866003636" className="text-xs text-slate-300 font-mono block hover:text-white">
                      +91 88 66 00 3636
                    </a>
                    <a href="tel:+918866113636" className="text-xs text-slate-300 font-mono block hover:text-white mt-1">
                      +91 88 66 11 3636
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#e31e24] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-200 mb-1">Editorial Correspondence</h3>
                    <a href="mailto:editor@sarapublication.com" className="text-xs text-slate-300 font-mono block hover:text-white">
                      editor@sarapublication.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#e31e24] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-200 mb-1">Office Hours</h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-mono">
                      Mon – Sat: 09:30 AM – 06:30 PM IST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* UGC Validation Guarantee */}
            <div className="bg-white border border-slate-200 p-6 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                UGC/CAS Verification Note
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                All ISBN certificates and book dispatches are recorded under official government publishing registries. Verified for API points in Faculty Promotions across Indian Universities.
              </p>
            </div>
          </div>

          {/* Contact Inquiry Form */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-slate-200 p-8 shadow-sm">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">
                Send an Editorial Inquiry
              </h2>
              <p className="text-xs text-slate-500 mb-8">
                Fill in your details below and an editorial manager will contact you within 24 business hours.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Rajesh Sharma"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 text-sm focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-900 transition-all"
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
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 text-sm focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-900 transition-all font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Mobile Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 text-sm focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-900 transition-all font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Subject / Inquiry Type *
                    </label>
                    <select
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 text-sm focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-900 transition-all"
                    >
                      <option value="inquiry">General Publishing Inquiry</option>
                      <option value="status">Manuscript Tracking</option>
                      <option value="pricing">Bulk Printing & Institutional Purchasing</option>
                      <option value="isbn">ISBN & Legal Verification</option>
                      <option value="dispute">Author Support / Dispute</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Your Message / Manuscript Synopsis *
                  </label>
                  <textarea
                    rows={6}
                    required
                    placeholder="Provide a brief synopsis of your book, anticipated page count, academic discipline, and any specific requirements..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 text-sm focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-900 transition-all leading-relaxed"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-8 py-3.5 bg-[#e31e24] hover:bg-[#c4151a] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm rounded-none"
                >
                  <Send className="w-4 h-4" /> Send Inquiry to Editorial Board
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
