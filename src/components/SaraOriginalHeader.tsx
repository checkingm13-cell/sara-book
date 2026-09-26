"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Search, 
  ShoppingCart, 
  ChevronDown,
  Menu,
  X,
  Phone,
  FileText,
  Package,
  BookOpen,
  Calculator,
  Download,
  HelpCircle,
  PhoneCall,
  ExternalLink,
  MessageCircle
} from "lucide-react";

export default function SaraOriginalHeader() {
  const [searchQuery, setSearchQuery] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [discoverOpen, setDiscoverOpen] = useState(false);
  const [writersOpen, setWritersOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 15);

      // Hide only on fast scroll down
      if (currentScrollY > 70 && currentScrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [drawerOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/#catalog?q=${encodeURIComponent(searchQuery)}`;
      setDrawerOpen(false);
    }
  };

  return (
    <header 
      className={`w-full font-sans select-none sticky top-0 z-50 transition-all duration-300 ease-in-out bg-white ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? "shadow-sm border-b border-slate-200" : "border-b border-slate-100"}`}
    >
      {/* ─────────────────────────────────────────────────────────────
          1. ULTRA-CLEAN NOTION-PRESS INSPIRED TOP UTILITY STRIP (Light & Thin)
         ───────────────────────────────────────────────────────────── */}
      <div className="w-full bg-[#f8fafc] border-b border-slate-100 py-1 px-4 sm:px-8 hidden md:block text-[11px] text-slate-500">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Phone className="w-3 h-3 text-slate-400" />
            <span>Call us at:</span>
            <a href="tel:+918866003636" className="font-semibold text-slate-700 hover:text-[#1658b3]">
              +91-8866003636
            </a>
            <span className="text-slate-300 mx-1">|</span>
            <span className="text-slate-500">Academic Publishing & UGC Valid ISBN</span>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/author-guidelines" className="hover:text-[#1658b3] transition">
              Author Guidelines
            </Link>
            <Link href="/faq" className="hover:text-[#1658b3] transition">
              FAQ
            </Link>
            <Link href="/contact" className="hover:text-[#1658b3] transition">
              Contact Editorial
            </Link>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. MAIN COMPACT HEADER ROW (Brand | Nav Menus | Search | CTA)
         ───────────────────────────────────────────────────────────── */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4 lg:gap-6">
        
        {/* Left: Brand Logo + Identity */}
        <div className="flex items-center gap-6 shrink-0">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-lg overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105">
              <Image 
                src="/branding/sara-logo.png" 
                alt="Sara Book Publication" 
                width={40} 
                height={40} 
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-black text-[#0D3B66] tracking-tight uppercase leading-none block font-sans">
                SARA PUBLICATION
              </span>
              <span className="text-[9px] font-mono tracking-wider text-slate-400 uppercase font-semibold block mt-0.5">
                EST. 2011 • ACADEMIC PRESS
              </span>
            </div>
          </Link>

          {/* Desktop Clean Dropdown Navigation (Notion Press Style) */}
          <nav className="hidden lg:flex items-center gap-1 text-[13px] font-medium text-slate-700 ml-2">
            
            {/* Discover Books Dropdown */}
            <div className="relative" onMouseLeave={() => setDiscoverOpen(false)}>
              <button 
                onMouseEnter={() => setDiscoverOpen(true)}
                onClick={() => setDiscoverOpen(!discoverOpen)}
                className="flex items-center gap-1 px-3 py-2 rounded-md hover:text-[#1658b3] hover:bg-slate-50 transition font-semibold"
              >
                <span>Discover books</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${discoverOpen ? "rotate-180" : ""}`} />
              </button>

              {discoverOpen && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-slate-100 p-2 z-50">
                  <Link 
                    href="/bookshelf"
                    onClick={() => setDiscoverOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#1658b3] transition"
                  >
                    <BookOpen className="w-4 h-4 text-[#1658b3]" />
                    <span>Browse All Titles</span>
                  </Link>
                  <Link 
                    href="/bookshelf?q=Medical"
                    onClick={() => setDiscoverOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#1658b3] transition"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 ml-1.5" />
                    <span>Medical & Healthcare</span>
                  </Link>
                  <Link 
                    href="/bookshelf?q=Engineering"
                    onClick={() => setDiscoverOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#1658b3] transition"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 ml-1.5" />
                    <span>Engineering & Tech</span>
                  </Link>
                  <Link 
                    href="/bookshelf?q=Literature"
                    onClick={() => setDiscoverOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#1658b3] transition"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 ml-1.5" />
                    <span>Literature & Stories</span>
                  </Link>
                </div>
              )}
            </div>

            {/* For Writers / Authors Dropdown */}
            <div className="relative" onMouseLeave={() => setWritersOpen(false)}>
              <button 
                onMouseEnter={() => setWritersOpen(true)}
                onClick={() => setWritersOpen(!writersOpen)}
                className="flex items-center gap-1 px-3 py-2 rounded-md hover:text-[#1658b3] hover:bg-slate-50 transition font-semibold"
              >
                <span>For Writers</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${writersOpen ? "rotate-180" : ""}`} />
              </button>

              {writersOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-slate-100 p-2 z-50">
                  <Link 
                    href="/packages"
                    onClick={() => setWritersOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#1658b3] transition"
                  >
                    <Package className="w-4 h-4 text-[#1658b3]" />
                    <span>Packages & Pricing</span>
                  </Link>
                  <Link 
                    href="/author-guidelines"
                    onClick={() => setWritersOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#1658b3] transition"
                  >
                    <FileText className="w-4 h-4 text-[#1658b3]" />
                    <span>Author Guidelines</span>
                  </Link>
                  <Link 
                    href="/calculator"
                    onClick={() => setWritersOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#1658b3] transition"
                  >
                    <Calculator className="w-4 h-4 text-[#1658b3]" />
                    <span>Royalty Calculator</span>
                  </Link>
                  <Link 
                    href="/download"
                    onClick={() => setWritersOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#1658b3] transition"
                  >
                    <Download className="w-4 h-4 text-[#1658b3]" />
                    <span>Author Downloads</span>
                  </Link>
                </div>
              )}
            </div>

          </nav>
        </div>

        {/* Center: Clean Notion Press Style Wide Search Bar */}
        <div className="flex-1 max-w-xl mx-2 sm:mx-6 hidden sm:block">
          <form onSubmit={handleSearch} className="relative flex items-center w-full">
            <input
              type="text"
              placeholder="Search by Book Title, Author Name, or ISBN..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-4 pr-12 text-xs sm:text-[13px] text-slate-900 bg-white border border-slate-200 focus:border-rose-400 rounded-md shadow-2xs focus:outline-none placeholder:text-slate-400 transition"
            />
            <button
              type="submit"
              className="absolute right-1 top-1 bottom-1 px-3 bg-rose-500 hover:bg-rose-600 text-white rounded-xs flex items-center justify-center transition cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Right: Currency / Cart / Get Started Button */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          
          {/* Currency Toggle */}
          <div className="relative hidden md:block">
            <button
              type="button"
              onClick={() => setCurrencyOpen(!currencyOpen)}
              className="flex items-center gap-1 text-slate-600 hover:text-slate-900 text-xs font-medium px-2 py-1.5 rounded transition"
            >
              <span>{currency === "INR" ? "English (INR)" : "English (USD)"}</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {currencyOpen && (
              <div className="absolute right-0 mt-1 w-32 bg-white text-slate-800 text-xs font-medium rounded-lg shadow-lg overflow-hidden z-50 border border-slate-100">
                <button
                  onClick={() => { setCurrency("INR"); setCurrencyOpen(false); }}
                  className="w-full text-left px-3 py-2 hover:bg-slate-50 transition"
                >
                  INR (₹) India
                </button>
                <button
                  onClick={() => { setCurrency("USD"); setCurrencyOpen(false); }}
                  className="w-full text-left px-3 py-2 hover:bg-slate-50 transition"
                >
                  USD ($) Global
                </button>
              </div>
            )}
          </div>

          {/* Cart Icon */}
          <Link 
            href="/publish" 
            className="p-2 text-slate-600 hover:text-rose-500 transition relative"
            aria-label="View Cart"
          >
            <ShoppingCart className="w-5 h-5 stroke-[1.75]" />
          </Link>

          {/* Clean Red GET STARTED Button (Notion Press Exact Look) */}
          <Link
            href="/packages"
            className="hidden sm:inline-flex items-center justify-center bg-rose-500 hover:bg-rose-600 text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-md transition shadow-xs"
          >
            Get Started
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="p-2 rounded-md text-slate-700 hover:bg-slate-100 lg:hidden transition"
            aria-label="Toggle navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. MOBILE SLIDE-OVER DRAWER
         ───────────────────────────────────────────────────────────── */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setDrawerOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl z-50 flex flex-col">
            
            {/* Drawer Header */}
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Image 
                  src="/branding/sara-logo.png" 
                  alt="Sara Book Publication" 
                  width={32} 
                  height={32} 
                  className="object-contain"
                />
                <span className="font-bold text-slate-900 text-sm tracking-tight uppercase">
                  Sara Publication
                </span>
              </div>
              <button 
                onClick={() => setDrawerOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Search */}
            <div className="p-4 border-b border-slate-100">
              <form onSubmit={handleSearch} className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search books, authors, ISBN..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-9 px-3 text-xs bg-slate-50 border border-slate-200 rounded-l-md focus:outline-none focus:border-rose-500"
                />
                <button
                  type="submit"
                  className="h-9 px-3 bg-rose-500 text-white flex items-center justify-center rounded-r-md hover:bg-rose-600"
                >
                  <Search className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Mobile Links */}
            <div className="flex-1 overflow-y-auto py-2 px-3 space-y-1">
              <Link
                href="/bookshelf"
                onClick={() => setDrawerOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-rose-500 transition text-sm font-semibold"
              >
                <BookOpen className="w-4 h-4 text-slate-400" />
                <span>Discover Books</span>
              </Link>
              <Link
                href="/packages"
                onClick={() => setDrawerOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-rose-500 transition text-sm font-semibold"
              >
                <Package className="w-4 h-4 text-slate-400" />
                <span>Publishing Packages</span>
              </Link>
              <Link
                href="/author-guidelines"
                onClick={() => setDrawerOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-rose-500 transition text-sm font-semibold"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                <span>Author Guidelines</span>
              </Link>
              <Link
                href="/calculator"
                onClick={() => setDrawerOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-rose-500 transition text-sm font-semibold"
              >
                <Calculator className="w-4 h-4 text-slate-400" />
                <span>Royalty Calculator</span>
              </Link>
              <Link
                href="/download"
                onClick={() => setDrawerOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-rose-500 transition text-sm font-semibold"
              >
                <Download className="w-4 h-4 text-slate-400" />
                <span>Downloads</span>
              </Link>
              <Link
                href="/contact"
                onClick={() => setDrawerOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-rose-500 transition text-sm font-semibold"
              >
                <PhoneCall className="w-4 h-4 text-slate-400" />
                <span>Contact Us</span>
              </Link>

              <div className="pt-3 pb-1 border-t border-slate-100">
                <Link
                  href="/packages"
                  onClick={() => setDrawerOpen(false)}
                  className="flex items-center justify-center w-full py-2.5 bg-rose-500 hover:bg-rose-600 text-white rounded-lg text-xs font-bold uppercase tracking-wider transition shadow-xs"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Mobile Footer */}
            <div className="p-4 border-t border-slate-100 bg-slate-50 space-y-2">
              <a 
                href="https://wa.me/918866003636?text=Hello%20Sara%20Book%20Publication"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Desk</span>
              </a>
              <a 
                href="tel:+918866003636"
                className="flex items-center justify-center gap-2 w-full py-2 border border-slate-200 text-slate-700 rounded-lg text-xs font-medium hover:bg-white transition"
              >
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>+91-8866003636</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
