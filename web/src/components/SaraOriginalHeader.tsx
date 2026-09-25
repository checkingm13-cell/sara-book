"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Calendar, 
  Clock, 
  Mail, 
  Phone, 
  Search, 
  ShoppingCart, 
  ChevronDown 
} from "lucide-react";

export default function SaraOriginalHeader() {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      // Format: Friday, Sep 25th, 2026
      const options: Intl.DateTimeFormatOptions = { 
        weekday: 'long', 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
      };
      setCurrentDate(now.toLocaleDateString('en-US', options));

      // 12-hour format with AM/PM
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      setCurrentTime(`${String(hours).padStart(2, '0')} : ${minutes} : ${seconds} ${ampm}`);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/#catalog?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="w-full font-sans bg-white select-none">
      {/* ─────────────────────────────────────────────────────────────
          1. TOP IDENTITY BAR (.bottom-bar > .container-fluid)
          Method 1: Dotted World Map Background (SVG Background)
         ───────────────────────────────────────────────────────────── */}
      <div 
        className="w-full px-4 sm:px-8 py-6 border-b border-slate-200 relative overflow-hidden bg-white"
        style={{
          backgroundImage: "url('/world-map-dots.svg')",
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Transparent overlay */}
        <div className="absolute inset-0 bg-white/10 pointer-events-none" aria-hidden="true" />

        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 relative z-10">
          
          {/* Section A: Brand & International Emblem */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-14 h-14 bg-gradient-to-tr from-[#1658b3] to-[#1D2696] rounded-xl flex items-center justify-center text-white font-black text-xl shadow-sm">
                SBP
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-[#1D2696] tracking-tight block uppercase leading-none font-sans">
                  SARA PUBLICATION
                </span>
                <span className="text-[11px] font-semibold text-white bg-[#1658b3] px-2 py-0.5 rounded uppercase tracking-wider block mt-1 w-max">
                  International Publication
                </span>
              </div>
            </Link>
          </div>

          {/* Section B: SBP Emblem & UGC ISBN Hook */}
          <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
            <div className="text-[#ffae00] font-black tracking-tight text-lg sm:text-xl uppercase drop-shadow-2xs">
              PUBLISH WITH UGC VALID ISBN
            </div>
            <span className="text-[11px] font-semibold text-[#1658b3] tracking-widest uppercase">
              13-Digit Indian & Global Recognition
            </span>
          </div>

          {/* Section C: Live Dynamic Date, Time & Direct Contact Desk */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-2.5 text-xs text-slate-700 shadow-2xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#1658b3]" />
                <span className="font-bold text-slate-900">{currentDate || "Loading Date..."}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#1658b3]" />
                <span className="font-mono font-bold text-slate-900">{currentTime || "00:00:00 AM"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#1658b3]" />
                <a href="mailto:editor@sarapublication.com" className="hover:text-[#1658b3] transition">
                  editor@sarapublication.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#1658b3]" />
                <a href="tel:+918866003636" className="font-semibold hover:text-[#1658b3] transition">
                  +91-8866003636
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. THE AUTHENTIC ROYAL BLUE NAVIGATION STRIP (.na .menu)
          Background: #1658b3 | Top Highlight Border: 4px solid #ffae00
          Hover Accent: #ffae00 with dark active contrast
         ───────────────────────────────────────────────────────────── */}
      <nav className="w-full bg-[#1658b3] border-t-4 border-[#ffae00] shadow-md sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between min-h-[46px]">
          
          {/* Main Authentic Navigation Items */}
          <div className="flex flex-wrap items-center gap-0.5 text-xs font-bold uppercase tracking-wider text-white">
            <Link 
              href="/" 
              className="px-3.5 py-3 hover:bg-[#ffae00] hover:text-black transition duration-150 rounded-xs"
            >
              Home
            </Link>
            <Link 
              href="/#catalog" 
              className="px-3.5 py-3 hover:bg-[#ffae00] hover:text-black transition duration-150 rounded-xs"
            >
              About Us
            </Link>
            <Link 
              href="/publish" 
              className="px-3.5 py-3 hover:bg-[#ffae00] hover:text-black transition duration-150 rounded-xs"
            >
              Author Guidelines
            </Link>
            <Link 
              href="/calculator" 
              className="px-3.5 py-3 hover:bg-[#ffae00] hover:text-black transition duration-150 rounded-xs"
            >
              Packages & Royalties
            </Link>
            <Link 
              href="/#catalog" 
              className="px-3.5 py-3 hover:bg-[#ffae00] hover:text-black transition duration-150 rounded-xs"
            >
              Bookshelf
            </Link>
            <Link 
              href="/publish" 
              className="px-3.5 py-3 hover:bg-[#ffae00] hover:text-black transition duration-150 rounded-xs"
            >
              Download
            </Link>
            <Link 
              href="/#disciplines" 
              className="px-3.5 py-3 hover:bg-[#ffae00] hover:text-black transition duration-150 rounded-xs"
            >
              FAQ
            </Link>
            <Link 
              href="/publish" 
              className="px-3.5 py-3 hover:bg-[#ffae00] hover:text-black transition duration-150 rounded-xs"
            >
              Contact Us
            </Link>
          </div>

          {/* Right Controls: Currency Selector, Cart & Search Box */}
          <div className="flex items-center gap-3 py-1.5 ml-auto">
            
            {/* Currency Dropdown (INR / USD) */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setCurrencyOpen(!currencyOpen)}
                className="flex items-center gap-1 bg-[#12458d] hover:bg-[#ffae00] hover:text-black text-white text-xs font-bold px-2.5 py-1.5 rounded transition"
              >
                <span>{currency}</span>
                <ChevronDown className="w-3 h-3" />
              </button>

              {currencyOpen && (
                <div className="absolute right-0 mt-1 w-24 bg-black text-white text-xs font-bold rounded shadow-lg overflow-hidden z-50">
                  <button
                    onClick={() => { setCurrency("INR"); setCurrencyOpen(false); }}
                    className="w-full text-left px-3 py-2 hover:bg-[#ffae00] hover:text-black transition"
                  >
                    INR (₹)
                  </button>
                  <button
                    onClick={() => { setCurrency("USD"); setCurrencyOpen(false); }}
                    className="w-full text-left px-3 py-2 hover:bg-[#ffae00] hover:text-black transition"
                  >
                    USD ($)
                  </button>
                </div>
              )}
            </div>

            {/* Cart Link */}
            <Link 
              href="/publish" 
              className="flex items-center gap-1.5 bg-[#12458d] hover:bg-[#ffae00] hover:text-black text-white text-xs font-bold px-3 py-1.5 rounded transition"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>Cart</span>
            </Link>

            {/* Search Input Box with Golden Button (.example) */}
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                placeholder="Search catalog..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-8 w-32 sm:w-44 px-2.5 text-xs text-black bg-white rounded-l focus:outline-none placeholder:text-slate-400"
              />
              <button
                type="submit"
                className="h-8 px-3 bg-[#ffae00] hover:bg-[#e59d00] text-black font-bold flex items-center justify-center rounded-r transition"
                aria-label="Search"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
            </form>

          </div>

        </div>
      </nav>
    </header>
  );
}
