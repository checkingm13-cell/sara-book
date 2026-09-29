"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [searchQuery, setSearchQuery] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [discoverOpen, setDiscoverOpen] = useState(false);
  const [writersOpen, setWritersOpen] = useState(false);
  const [mobileDiscoverOpen, setMobileDiscoverOpen] = useState(false);
  const [mobileWritersOpen, setMobileWritersOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  // Click outside ref handling for desktop dropdowns
  const navRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setDiscoverOpen(false);
        setWritersOpen(false);
        setCurrencyOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDiscoverOpen(false);
        setWritersOpen(false);
        setCurrencyOpen(false);
        setDrawerOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      // Hide only on fast scroll down
      if (currentScrollY > 80 && currentScrollY > lastScrollY) {
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

  const isTransparent = isHomePage;

  return (
    <header 
      className={`w-full font-sans select-none transition-all duration-300 ease-in-out ${
        isHomePage ? "fixed top-0 left-0 right-0 z-50" : "sticky top-0 z-50"
      } ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      } ${
        isTransparent
          ? "bg-transparent text-white border-b border-transparent"
          : "bg-white text-slate-800 shadow-sm border-b border-slate-200"
      }`}
    >
      {/* ─────────────────────────────────────────────────────────────
          1. TOP UTILITY STRIP (Hidden on homepage transparent mode so hero shows from pixel 0)
         ───────────────────────────────────────────────────────────── */}
      {!isTransparent && (
        <div className="w-full py-1.5 px-4 sm:px-8 hidden md:block text-[11px] transition-colors border-b bg-[#f8fafc] border-slate-100 text-slate-500">
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
      )}

      {/* ─────────────────────────────────────────────────────────────
          2. MAIN COMPACT HEADER ROW (Brand | Nav Menus | Search | CTA)
         ───────────────────────────────────────────────────────────── */}
      <div ref={navRef} className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4 lg:gap-6">
        
        {/* Left: Brand Logo + Identity */}
        <div className="flex items-center gap-6 shrink-0">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-lg overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105 bg-white p-1 shadow-xs">
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
              <span className="text-lg sm:text-xl font-black tracking-tight uppercase leading-none block font-sans text-slate-900">
                SARA PUBLICATION
              </span>
              <span className="text-[9px] font-mono tracking-wider uppercase font-bold block mt-0.5 text-slate-600">
                EST. 2011 • ACADEMIC PRESS
              </span>
            </div>
          </Link>

          {/* Desktop Clean Dropdown Navigation (Notion Press Style) */}
          <nav className="hidden lg:flex items-center gap-1 text-[13px] font-bold ml-2 text-slate-900">
            
            {/* Discover Books Dropdown */}
            <div className="relative" onMouseLeave={() => setDiscoverOpen(false)}>
              <button 
                type="button"
                onMouseEnter={() => { setDiscoverOpen(true); setWritersOpen(false); }}
                onClick={() => setDiscoverOpen(!discoverOpen)}
                aria-expanded={discoverOpen}
                className="flex items-center gap-1 px-3 py-2 rounded-md transition font-bold text-slate-900 hover:text-[#1658b3] hover:bg-black/5 cursor-pointer"
              >
                <span>Discover books</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${discoverOpen ? "rotate-180" : ""}`} />
              </button>

              {discoverOpen && (
                <div className="absolute top-full left-0 mt-1.5 w-56 bg-white rounded-xl shadow-2xl border border-slate-200/80 p-2 z-50 text-slate-800 animate-in fade-in duration-150">
                  <div className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold border-b border-slate-100 mb-1">
                    Book Catalog
                  </div>
                  <Link 
                    href="/bookshelf"
                    onClick={() => setDiscoverOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-bold text-slate-800 hover:bg-blue-50 hover:text-[#1658b3] transition"
                  >
                    <BookOpen className="w-4 h-4 text-[#1658b3]" />
                    <span>Browse All Titles (100+)</span>
                  </Link>
                  <Link 
                    href="/bookshelf?q=Medical"
                    onClick={() => setDiscoverOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#1658b3] transition"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 ml-1.5" />
                    <span>Medical & Healthcare</span>
                  </Link>
                  <Link 
                    href="/bookshelf?q=Engineering"
                    onClick={() => setDiscoverOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#1658b3] transition"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 ml-1.5" />
                    <span>Engineering & Tech</span>
                  </Link>
                  <Link 
                    href="/bookshelf?q=Literature"
                    onClick={() => setDiscoverOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#1658b3] transition"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 ml-1.5" />
                    <span>Literature & Humanities</span>
                  </Link>
                </div>
              )}
            </div>

            {/* For Writers / Authors Dropdown */}
            <div className="relative" onMouseLeave={() => setWritersOpen(false)}>
              <button 
                type="button"
                onMouseEnter={() => { setWritersOpen(true); setDiscoverOpen(false); }}
                onClick={() => setWritersOpen(!writersOpen)}
                aria-expanded={writersOpen}
                className="flex items-center gap-1 px-3 py-2 rounded-md transition font-bold text-slate-900 hover:text-[#1658b3] hover:bg-black/5 cursor-pointer"
              >
                <span>For Writers</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${writersOpen ? "rotate-180" : ""}`} />
              </button>

              {writersOpen && (
                <div className="absolute top-full left-0 mt-1.5 w-60 bg-white rounded-xl shadow-2xl border border-slate-200/80 p-2 z-50 text-slate-800 animate-in fade-in duration-150">
                  <div className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold border-b border-slate-100 mb-1">
                    Author Services
                  </div>
                  <Link 
                    href="/packages"
                    onClick={() => setWritersOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-bold text-slate-800 hover:bg-blue-50 hover:text-[#1658b3] transition"
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
              className="w-full h-10 pl-4 pr-12 text-xs sm:text-[13px] rounded-md shadow-xs focus:outline-none transition bg-white/95 text-slate-900 placeholder:text-slate-500 border border-slate-300 focus:border-[#1658b3] focus:bg-white"
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
              className="flex items-center gap-1 text-xs font-bold px-2 py-1.5 rounded transition text-slate-800 hover:text-black hover:bg-black/5"
            >
              <span>{currency === "INR" ? "English (INR)" : "English (USD)"}</span>
              <ChevronDown className="w-3 h-3 text-slate-700" />
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
            className="p-2 transition relative text-slate-800 hover:text-rose-500 hover:bg-black/5 rounded-md"
            aria-label="View Cart"
          >
            <ShoppingCart className="w-5 h-5 stroke-[2]" />
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
            className="p-2 rounded-md lg:hidden transition text-slate-900 hover:bg-black/5"
            aria-label="Toggle navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. MOBILE SLIDE-OVER DRAWER (Luxury Responsive Design)
         ───────────────────────────────────────────────────────────── */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop with dark blur */}
          <div 
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity duration-300 animate-in fade-in"
            onClick={() => setDrawerOpen(false)}
          />

          {/* Drawer Slide Panel */}
          <div className="fixed inset-y-0 right-0 w-[85vw] max-w-[340px] bg-white shadow-2xl z-50 flex flex-col justify-between animate-in slide-in-from-right duration-300">
            
            {/* Top: Drawer Brand Header */}
            <div>
              <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg overflow-hidden bg-white p-1 border border-slate-200 shadow-2xs">
                    <Image 
                      src="/branding/sara-logo.png" 
                      alt="Sara Book Publication" 
                      width={36} 
                      height={36} 
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div>
                    <span className="font-black text-slate-900 text-sm tracking-tight uppercase block leading-none">
                      Sara Publication
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mt-1">
                      Academic Press • Est. 2011
                    </span>
                  </div>
                </div>
                
                <button 
                  onClick={() => setDrawerOpen(false)}
                  className="p-2 rounded-xl text-slate-500 hover:bg-slate-200/60 hover:text-slate-900 transition cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Search Input */}
              <div className="p-4 border-b border-slate-100 bg-white">
                <form onSubmit={handleSearch} className="relative flex items-center">
                  <input
                    type="text"
                    placeholder="Search by title, author, or ISBN..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-10 pl-3.5 pr-10 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#1658b3] focus:bg-white transition"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-[#1658b3] text-white rounded-lg flex items-center justify-center transition hover:bg-blue-700 cursor-pointer"
                    aria-label="Search"
                  >
                    <Search className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>

              {/* Currency Selector Pill on Mobile */}
              <div className="px-4 py-2.5 bg-slate-50/80 border-b border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase font-bold text-slate-500">
                  Currency Mode:
                </span>
                <div className="flex items-center gap-1 bg-white p-0.5 rounded-lg border border-slate-200">
                  <button
                    type="button"
                    onClick={() => setCurrency("INR")}
                    className={`px-2.5 py-1 text-[11px] font-bold rounded-md transition ${
                      currency === "INR" ? "bg-[#0A1628] text-white shadow-xs" : "text-slate-600"
                    }`}
                  >
                    ₹ INR
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrency("USD")}
                    className={`px-2.5 py-1 text-[11px] font-bold rounded-md transition ${
                      currency === "USD" ? "bg-[#0A1628] text-white shadow-xs" : "text-slate-600"
                    }`}
                  >
                    $ USD
                  </button>
                </div>
              </div>
            </div>

            {/* Middle: Scrollable Navigation List */}
            <div className="flex-1 overflow-y-auto px-3 py-3 space-y-1.5">
              
              {/* Accordion 1: Discover Books */}
              <div className="rounded-xl border border-slate-100 bg-white overflow-hidden shadow-2xs">
                <button
                  type="button"
                  onClick={() => setMobileDiscoverOpen(!mobileDiscoverOpen)}
                  className="flex items-center justify-between w-full px-3.5 py-3 text-slate-800 hover:bg-slate-50 transition text-xs font-bold uppercase tracking-wide cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <BookOpen className="w-4 h-4 text-[#1658b3]" />
                    <span>Discover Books</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${mobileDiscoverOpen ? "rotate-180" : ""}`} />
                </button>

                {mobileDiscoverOpen && (
                  <div className="px-3.5 pb-3 pt-1 space-y-2 bg-slate-50/60 border-t border-slate-100">
                    <Link
                      href="/bookshelf"
                      onClick={() => setDrawerOpen(false)}
                      className="flex items-center justify-between py-1.5 text-xs font-bold text-[#1658b3] hover:underline"
                    >
                      <span>Browse All Titles (100+)</span>
                      <span>→</span>
                    </Link>
                    <Link
                      href="/bookshelf?q=Medical"
                      onClick={() => setDrawerOpen(false)}
                      className="block py-1 text-xs text-slate-600 hover:text-slate-900"
                    >
                      • Medical & Healthcare
                    </Link>
                    <Link
                      href="/bookshelf?q=Engineering"
                      onClick={() => setDrawerOpen(false)}
                      className="block py-1 text-xs text-slate-600 hover:text-slate-900"
                    >
                      • Engineering & Tech
                    </Link>
                    <Link
                      href="/bookshelf?q=Literature"
                      onClick={() => setDrawerOpen(false)}
                      className="block py-1 text-xs text-slate-600 hover:text-slate-900"
                    >
                      • Literature & Humanities
                    </Link>
                  </div>
                )}
              </div>

              {/* Accordion 2: For Writers */}
              <div className="rounded-xl border border-slate-100 bg-white overflow-hidden shadow-2xs">
                <button
                  type="button"
                  onClick={() => setMobileWritersOpen(!mobileWritersOpen)}
                  className="flex items-center justify-between w-full px-3.5 py-3 text-slate-800 hover:bg-slate-50 transition text-xs font-bold uppercase tracking-wide cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <Package className="w-4 h-4 text-[#1658b3]" />
                    <span>For Writers</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${mobileWritersOpen ? "rotate-180" : ""}`} />
                </button>

                {mobileWritersOpen && (
                  <div className="px-3.5 pb-3 pt-1 space-y-2 bg-slate-50/60 border-t border-slate-100">
                    <Link
                      href="/packages"
                      onClick={() => setDrawerOpen(false)}
                      className="flex items-center justify-between py-1.5 text-xs font-bold text-[#1658b3] hover:underline"
                    >
                      <span>Publishing Packages & Pricing</span>
                      <span>→</span>
                    </Link>
                    <Link
                      href="/author-guidelines"
                      onClick={() => setDrawerOpen(false)}
                      className="block py-1 text-xs text-slate-600 hover:text-slate-900"
                    >
                      • Author Guidelines (UGC CAS)
                    </Link>
                    <Link
                      href="/calculator"
                      onClick={() => setDrawerOpen(false)}
                      className="block py-1 text-xs text-slate-600 hover:text-slate-900"
                    >
                      • Royalty & Print Calculator
                    </Link>
                    <Link
                      href="/download"
                      onClick={() => setDrawerOpen(false)}
                      className="block py-1 text-xs text-slate-600 hover:text-slate-900"
                    >
                      • Manuscript Word Downloads
                    </Link>
                  </div>
                )}
              </div>

              {/* Direct Standard Links */}
              <div className="pt-2 space-y-1">
                <Link
                  href="/calculator"
                  onClick={() => setDrawerOpen(false)}
                  className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition text-xs font-bold"
                >
                  <Calculator className="w-4 h-4 text-slate-400" />
                  <span>Royalty Calculator</span>
                </Link>

                <Link
                  href="/faq"
                  onClick={() => setDrawerOpen(false)}
                  className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition text-xs font-bold"
                >
                  <HelpCircle className="w-4 h-4 text-slate-400" />
                  <span>Frequently Asked Questions</span>
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setDrawerOpen(false)}
                  className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition text-xs font-bold"
                >
                  <PhoneCall className="w-4 h-4 text-slate-400" />
                  <span>Contact Editorial Office</span>
                </Link>
              </div>

            </div>

            {/* Bottom: Action CTA & Fast Support */}
            <div className="p-4 border-t border-slate-100 bg-slate-50/90 space-y-2.5">
              <Link
                href="/publish"
                onClick={() => setDrawerOpen(false)}
                className="flex items-center justify-center w-full py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-xs font-black uppercase tracking-wider transition shadow-sm"
              >
                Submit Manuscript Proposal
              </Link>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a 
                  href="https://wa.me/918866003636?text=Hello%20Sara%20Book%20Publication"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-[11px] font-bold transition shadow-2xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
                
                <a 
                  href="tel:+918866003636"
                  className="flex items-center justify-center gap-1.5 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-[11px] font-bold hover:bg-slate-100 transition shadow-2xs"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <span>Call Us</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
