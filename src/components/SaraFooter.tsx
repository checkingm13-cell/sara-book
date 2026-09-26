import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, ShieldCheck, ArrowRight, BookOpen, MessageCircle } from "lucide-react";

export default function SaraFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#FAFAFA] border-t border-slate-200 text-slate-600 font-sans">
      
      {/* ─────────────────────────────────────────────────────────────
          1. PRE-FOOTER QUICK VALUE STRIP (Matches Notion Press Aesthetics)
         ───────────────────────────────────────────────────────────── */}
      <div className="border-b border-slate-200/80 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1658b3] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 tracking-tight">Authentic 13-Digit ISBN</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Govt. allotted Raja Rammohun Roy ISBN allocation valid for UGC-CARE, CAS & NAAC.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 tracking-tight">Worldwide Distribution</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Printed book distribution across Amazon, Flipkart, Google Books & leading national catalogs.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 tracking-tight">Dedicated Author Support</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Direct WhatsApp and editorial assistance at Ahmedabad desk: +91-8866003636.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. MAIN FOOTER CONTENT GRID (Clean White/Soft-Slate Notion Style)
         ───────────────────────────────────────────────────────────── */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Col 1: Brand & Editorial Identity (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-white border border-slate-200/80 p-0.5">
                <Image 
                  src="/branding/sara-logo.png" 
                  alt="Sara Book Publication" 
                  width={40} 
                  height={40} 
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <span className="text-lg font-black text-[#0D3B66] tracking-tight uppercase leading-none block font-sans">
                  SARA PUBLICATION
                </span>
                <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-semibold block mt-0.5">
                  EST. 2011 • ACADEMIC PRESS AHMEDABAD
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-500 leading-relaxed pr-4">
              Sara Book Publication is an internationally recognized academic publisher serving faculty, doctoral researchers, scientists, and independent authors across India. We offer transparent publishing, rigorous peer reviews, and verified 13-digit ISBN compliance.
            </p>

            <div className="pt-1 flex items-center gap-3">
              <Link
                href="/packages"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-500 hover:text-rose-600 transition"
              >
                <span>View Author Packages</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <span className="text-slate-300">•</span>
              <a
                href="https://wa.me/918866003636?text=Hello%20Sara%20Book%20Publication"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 transition"
              >
                WhatsApp Desk
              </a>
            </div>
          </div>

          {/* Col 2: Discover & Read (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Discover
            </h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li>
                <Link href="/bookshelf" className="hover:text-rose-500 transition">All Bookshelf</Link>
              </li>
              <li>
                <Link href="/bookshelf?q=Medical" className="hover:text-rose-500 transition">Medical Science</Link>
              </li>
              <li>
                <Link href="/bookshelf?q=Engineering" className="hover:text-rose-500 transition">Engineering & Tech</Link>
              </li>
              <li>
                <Link href="/bookshelf?q=Agriculture" className="hover:text-rose-500 transition">Agriculture & Crop</Link>
              </li>
              <li>
                <Link href="/bookshelf?q=Literature" className="hover:text-rose-500 transition">Literature & Fiction</Link>
              </li>
              <li>
                <Link href="/bookshelf?q=Management" className="hover:text-rose-500 transition">Management</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: For Authors & Writers (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              For Writers
            </h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li>
                <Link href="/packages" className="hover:text-rose-500 transition">Publishing Plans</Link>
              </li>
              <li>
                <Link href="/author-guidelines" className="hover:text-rose-500 transition">Author Guidelines</Link>
              </li>
              <li>
                <Link href="/calculator" className="hover:text-rose-500 transition">Royalty Calculator</Link>
              </li>
              <li>
                <Link href="/download" className="hover:text-rose-500 transition">Author Downloads</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-rose-500 transition">FAQs</Link>
              </li>
              <li>
                <Link href="/publish" className="hover:text-rose-500 font-semibold text-rose-500 transition">Submit Manuscript &rarr;</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Registered Office & Contacts (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Editorial Office
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-500">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  303, Maharana Pratap Complex, Opp. Kapadia Guest House, B/H V.S. Hospital, Paldi, Ahmedabad - 380006, Gujarat.
                </address>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <div>
                  <a href="tel:+918866003636" className="hover:text-slate-900 font-medium block">+91 88 66 00 3636</a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a href="mailto:editor@sarapublication.com" className="hover:text-slate-900">
                  editor@sarapublication.com
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span className="text-slate-400 text-[11px]">Mon – Sat: 09:30 AM – 06:30 PM IST</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. BOTTOM COPYRIGHT STRIP (Minimal & Light)
         ───────────────────────────────────────────────────────────── */}
      <div className="border-t border-slate-200/80 bg-white py-5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <div>
            &copy; 2011 – {currentYear} <strong className="text-slate-700 font-medium">Sara Book Publication</strong>. All rights reserved.
          </div>
          <div className="flex items-center gap-5 text-[11px]">
            <Link href="/author-guidelines" className="hover:text-slate-600 transition">Terms & Conditions</Link>
            <Link href="/download" className="hover:text-slate-600 transition">Privacy & MOU</Link>
            <Link href="/contact" className="hover:text-slate-600 transition">Ahmedabad Office</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
