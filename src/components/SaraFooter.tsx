import Link from "next/link";
import { Mail, Phone, MapPin, Clock, BookOpen, ShieldCheck } from "lucide-react";

export default function SaraFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0d172a] text-slate-400 border-t-4 border-[#e31e24]">
      {/* Upper Main Footer Grid */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Identity & Editorial Philosophy (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#e31e24] text-white font-black text-sm flex items-center justify-center rounded-xs shadow-sm">
                SBP
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight uppercase block leading-none">
                  SARA BOOK PUBLICATION
                </span>
                <span className="text-[10px] font-mono font-bold text-[#ffae00] uppercase tracking-wider block mt-1">
                  UGC-Approved 13-Digit ISBN Academic Publisher
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed pr-6">
              Established in 2011 in Ahmedabad, Gujarat, Sara Book Publication serves as a global peer-reviewed platform for university faculty, doctoral researchers, clinicians, and poets. We guarantee fast-track editorial reviews, transparent low-cost publishing packages, and worldwide eCommerce distribution.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Verified for UGC API / CAS Faculty Promotion Points</span>
            </div>
          </div>

          {/* Col 2: Quick Links & Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#ffae00] border-b border-slate-800 pb-2">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs font-mono uppercase text-slate-300">
              <li>
                <Link href="/" className="hover:text-white hover:underline transition">Home</Link>
              </li>
              <li>
                <Link href="/author-guidelines" className="hover:text-white hover:underline transition">Author Guidelines</Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-white hover:underline transition">Packages & Pricing</Link>
              </li>
              <li>
                <Link href="/bookshelf" className="hover:text-white hover:underline transition">Bookshelf (458+ Titles)</Link>
              </li>
              <li>
                <Link href="/calculator" className="hover:text-white hover:underline transition">Royalty Calculator</Link>
              </li>
              <li>
                <Link href="/download" className="hover:text-white hover:underline transition">Author Downloads</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white hover:underline transition">FAQ</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white hover:underline transition">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic Disciplines (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#ffae00] border-b border-slate-800 pb-2">
              Disciplines
            </h3>
            <ul className="space-y-2 text-xs text-slate-300 font-mono">
              <li>
                <Link href="/bookshelf" className="hover:text-white transition">Life Sciences</Link>
              </li>
              <li>
                <Link href="/bookshelf" className="hover:text-white transition">Medical Science</Link>
              </li>
              <li>
                <Link href="/bookshelf" className="hover:text-white transition">Engineering & Tech</Link>
              </li>
              <li>
                <Link href="/bookshelf" className="hover:text-white transition">Social Humanities</Link>
              </li>
              <li>
                <Link href="/bookshelf" className="hover:text-white transition">Management & Commerce</Link>
              </li>
              <li>
                <Link href="/publish" className="hover:text-white transition text-[#e31e24] font-bold">Upload Manuscript &rarr;</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Registered Office & Contacts (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#ffae00] border-b border-slate-800 pb-2">
              Headquarters Desk
            </h3>
            
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#e31e24] shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  303, Maharana Pratap Complex, Opp. Kapadia Guest House, B/H V.S. Hospital, Paldi, Ahmedabad - 380006, Gujarat, India.
                </address>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#e31e24] shrink-0" />
                <div className="font-mono">
                  <a href="tel:+918866003636" className="hover:text-white block">+91 88 66 00 3636</a>
                  <a href="tel:+918866113636" className="hover:text-white block">+91 88 66 11 3636</a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#e31e24] shrink-0" />
                <a href="mailto:editor@sarapublication.com" className="font-mono hover:text-white text-slate-200">
                  editor@sarapublication.com
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#e31e24] shrink-0" />
                <span className="font-mono text-slate-400">Mon – Sat: 09:30 AM – 06:30 PM IST</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal Copyright Strip */}
      <div className="bg-[#080d19] border-t border-slate-800 py-6">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-4">
          <div>
            &copy; 2011 – {currentYear} <strong className="text-slate-300">SARA BOOK PUBLICATION</strong>. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/author-guidelines" className="hover:text-slate-300 transition">TERMS & GUIDELINES</Link>
            <Link href="/download" className="hover:text-slate-300 transition">LEGAL MOU</Link>
            <Link href="/contact" className="hover:text-slate-300 transition">AHMEDABAD OFFICE</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
