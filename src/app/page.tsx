"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Flame, 
  Truck,
  Bookmark,
  Layers,
  GraduationCap,
  Stethoscope,
  Cpu,
  Dna,
  HeartHandshake,
  DollarSign,
  UserCheck,
  Brain,
  Feather,
  Landmark,
  Scale
} from "lucide-react";
import booksData from "@/data/books.json";

interface RawBook {
  title: string;
  slug: string;
  category: string;
  imageUrl: string;
  detailUrl: string;
  subtitle?: string;
}

export default function SwissHomepage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Books from actual 1,200+ Sara Book database
  const allBooks: RawBook[] = booksData as RawBook[];
  
  // Clean categorized shelves
  const newReleases = allBooks.slice(0, 14);
  const trendingBooks = allBooks.slice(14, 28);
  const freeShippingBooks = allBooks.slice(28, 42);

  // Horizontal scroll refs
  const newReleasesRef = useRef<HTMLDivElement>(null);
  const trendingRef = useRef<HTMLDivElement>(null);
  const freeShippingRef = useRef<HTMLDivElement>(null);

  const scrollShelf = (ref: React.RefObject<HTMLDivElement | null>, direction: "left" | "right") => {
    if (ref.current) {
      const scrollAmount = direction === "left" ? -460 : 460;
      ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const heroSlides = [
    {
      id: 1,
      image: "/branding/hero-slide-1.png",
      title: "Indian Authors • Global Readers",
    },
    {
      id: 2,
      image: "/branding/hero-slide-2.png",
      title: "From Ahmedabad to Every World Library",
    },
    {
      id: 3,
      image: "/branding/hero-slide-3.png",
      title: "Media Coverage Across Leading Dailies",
    },
    {
      id: 4,
      image: "/branding/hero-slide-4.png",
      title: "From Manuscript to Meaningful Impact",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  // Exact 10 Genre Icons matching Notion Press Screenshot (216)
  const genreCircles = [
    { label: "Literature & Fiction", icon: UserCheck, href: "/bookshelf?q=Literature" },
    { label: "Business & Management", icon: DollarSign, href: "/bookshelf?q=Business" },
    { label: "Biographies & Memoirs", icon: Landmark, href: "/bookshelf?q=Biography" },
    { label: "Self-Help", icon: Brain, href: "/bookshelf?q=Self" },
    { label: "Poetry", icon: Feather, href: "/bookshelf?q=Poetry" },
    { label: "History & Politics", icon: ShieldCheck, href: "/bookshelf?q=History" },
    { label: "Reference & Study Guides", icon: BookOpen, href: "/bookshelf?q=Guide" },
    { label: "Philosophy", icon: Scale, href: "/bookshelf?q=Philosophy" },
    { label: "Health & Fitness", icon: HeartHandshake, href: "/bookshelf?q=Health" },
    { label: "Computing & Tech", icon: Cpu, href: "/bookshelf?q=Computer" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      
      {/* ─────────────────────────────────────────────────────────────
          1. HERO CAROUSEL (Responsive, Never Cropped on Mobile)
          Uses true 16/9 aspect ratio with zero fixed-height locks
         ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full bg-[#0A1628] overflow-hidden select-none">
        <div className="relative w-full aspect-[16/9] max-h-[620px]">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-contain sm:object-cover object-center w-full h-full"
              />
            </div>
          ))}

          {/* Left / Right Hero Arrows (compact on mobile) */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-11 sm:h-11 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-xs transition shadow-md border border-white/20"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-11 sm:h-11 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-xs transition shadow-md border border-white/20"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>

          {/* Indicator Dots */}
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 sm:gap-2">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlide 
                    ? "w-5 sm:w-7 bg-[#FFAE00] shadow-xs" 
                    : "w-1.5 sm:w-2 bg-white/60 hover:bg-white"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Global Distribution Strip (compact on mobile) */}
        <div className="bg-[#081220] border-t border-white/10 text-white py-2.5 px-3 sm:px-4">
          <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-2 sm:gap-4 text-[11px] sm:text-xs font-mono uppercase">
            <div className="flex items-center gap-2">
              <span className="text-[#FFAE00] font-bold tracking-wider">AVAILABLE ON:</span>
              <span className="font-semibold text-slate-300">Amazon • Flipkart • Google Books • SBP</span>
            </div>
            <div className="flex items-center gap-3 text-slate-400 text-[10px] sm:text-xs">
              <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" /> UGC-Valid ISBN
              </span>
              <span>•</span>
              <span>Peer Review</span>
              <span className="hidden sm:inline-block">•</span>
              <span className="hidden sm:inline-block">7–10 Days Academic Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. NOTION PRESS SHELF 1: "New Releases" (Clean, Balanced Negative Space)
         ───────────────────────────────────────────────────────────── */}
      <section className="pt-6 sm:pt-8 pb-3 w-full px-3 sm:px-6 lg:px-10 relative group/shelf">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-3 sm:mb-4 px-1">
          <h2 className="text-lg sm:text-2xl font-bold text-[#0D3B66] tracking-tight">
            New Releases
          </h2>
          <Link 
            href="/bookshelf"
            className="text-xs font-semibold text-rose-500 hover:text-rose-600 transition"
          >
            Show More
          </Link>
        </div>

        {/* Shelf Container with Floating Red Chevrons */}
        <div className="relative">
          <button 
            onClick={() => scrollShelf(newReleasesRef, "left")}
            className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/95 hover:bg-white text-rose-500 shadow-md border border-slate-100 flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Previous Books"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
          </button>

          <button 
            onClick={() => scrollShelf(newReleasesRef, "right")}
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/95 hover:bg-white text-rose-500 shadow-md border border-slate-100 flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Next Books"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
          </button>

          <div 
            ref={newReleasesRef}
            className="flex items-center gap-2 sm:gap-3.5 overflow-x-auto no-scrollbar scroll-smooth py-1 px-1"
          >
            {newReleases.map((book, idx) => (
              <Link
                key={idx}
                href={`/book/${book.slug}`}
                className="group shrink-0 w-[120px] sm:w-[155px] md:w-[170px] lg:w-[185px] xl:w-[195px] block focus:outline-none"
              >
                <div className="relative aspect-[1/1.5] w-full rounded-xs overflow-hidden shadow-xs group-hover:shadow-lg transition-all duration-200 border border-slate-200/80 bg-slate-100 flex items-center justify-center">
                  <Image
                    src={book.imageUrl}
                    alt={book.title}
                    fill
                    sizes="(max-width: 640px) 120px, (max-width: 1024px) 170px, 195px"
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                  <div className="absolute left-0 top-0 bottom-0 w-2 sm:w-2.5 bg-gradient-to-r from-black/20 via-black/5 to-transparent pointer-events-none" />
                </div>
              </Link>
            ))}
          </div>
        </div>

      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. NOTION PRESS SHELF 2: "Trending this week" (Clean, Balanced Negative Space)
         ───────────────────────────────────────────────────────────── */}
      <section className="pt-6 sm:pt-8 pb-3 w-full px-3 sm:px-6 lg:px-10 relative group/shelf">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-3 sm:mb-4 px-1">
          <h2 className="text-lg sm:text-2xl font-bold text-[#0D3B66] tracking-tight">
            Trending this week
          </h2>
          <Link 
            href="/bookshelf"
            className="text-xs font-semibold text-rose-500 hover:text-rose-600 transition"
          >
            Show More
          </Link>
        </div>

        {/* Shelf Container */}
        <div className="relative">
          <button 
            onClick={() => scrollShelf(trendingRef, "left")}
            className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/95 hover:bg-white text-rose-500 shadow-md border border-slate-100 flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Previous Books"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
          </button>

          <button 
            onClick={() => scrollShelf(trendingRef, "right")}
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/95 hover:bg-white text-rose-500 shadow-md border border-slate-100 flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Next Books"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
          </button>

          <div 
            ref={trendingRef}
            className="flex items-center gap-2 sm:gap-3.5 overflow-x-auto no-scrollbar scroll-smooth py-1 px-1"
          >
            {trendingBooks.map((book, idx) => (
              <Link
                key={idx}
                href={`/book/${book.slug}`}
                className="group shrink-0 w-[120px] sm:w-[155px] md:w-[170px] lg:w-[185px] xl:w-[195px] block focus:outline-none"
              >
                <div className="relative aspect-[1/1.5] w-full rounded-xs overflow-hidden shadow-xs group-hover:shadow-lg transition-all duration-200 border border-slate-200/80 bg-slate-100 flex items-center justify-center">
                  <Image
                    src={book.imageUrl}
                    alt={book.title}
                    fill
                    sizes="(max-width: 640px) 120px, (max-width: 1024px) 170px, 195px"
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                  <div className="absolute left-0 top-0 bottom-0 w-2 sm:w-2.5 bg-gradient-to-r from-black/20 via-black/5 to-transparent pointer-events-none" />
                </div>
              </Link>
            ))}
          </div>
        </div>

      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. NOTION PRESS EXACT "Browse By Genre" (Airy Negative Space)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-8 sm:py-10 w-full px-3 sm:px-6 lg:px-10 border-t border-slate-100">
        <h2 className="text-lg sm:text-2xl font-bold text-[#0D3B66] tracking-tight mb-5 sm:mb-7 px-1">
          Browse By Genre
        </h2>

        <div className="flex items-start justify-between gap-3 sm:gap-6 overflow-x-auto no-scrollbar pb-2 px-1">
          {genreCircles.map((genre, idx) => {
            const Icon = genre.icon;
            return (
              <Link
                key={idx}
                href={genre.href}
                className="flex flex-col items-center gap-2.5 sm:gap-3 group shrink-0 w-[78px] sm:w-[105px] text-center"
              >
                <div className="w-13 h-13 sm:w-18 sm:h-18 rounded-full bg-[#0047AB] group-hover:bg-[#00388A] text-white flex items-center justify-center shadow-xs transition-transform duration-200 group-hover:scale-105">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 stroke-[1.75]" />
                </div>
                <span className="text-[11px] sm:text-xs font-semibold text-slate-700 leading-snug">
                  {genre.label}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. NOTION PRESS SHELF 3: "Free Shipping" (Full Screen Width with Balanced Negative Space)
         ───────────────────────────────────────────────────────────── */}
      <section className="pt-4 sm:pt-6 pb-12 w-full px-3 sm:px-6 lg:px-10 relative group/shelf border-t border-slate-100">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-3 sm:mb-4 px-1">
          <h2 className="text-lg sm:text-2xl font-bold text-[#0D3B66] tracking-tight">
            Free Shipping
          </h2>
          <Link 
            href="/bookshelf"
            className="text-xs font-semibold text-rose-500 hover:text-rose-600 transition"
          >
            Show More
          </Link>
        </div>

        {/* Shelf Container */}
        <div className="relative">
          <button 
            onClick={() => scrollShelf(freeShippingRef, "left")}
            className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/95 hover:bg-white text-rose-500 shadow-md border border-slate-100 flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Previous Books"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
          </button>

          <button 
            onClick={() => scrollShelf(freeShippingRef, "right")}
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/95 hover:bg-white text-rose-500 shadow-md border border-slate-100 flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Next Books"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
          </button>

          <div 
            ref={freeShippingRef}
            className="flex items-center gap-2 sm:gap-3.5 overflow-x-auto no-scrollbar scroll-smooth py-1 px-1"
          >
            {freeShippingBooks.map((book, idx) => (
              <Link
                key={idx}
                href={`/book/${book.slug}`}
                className="group shrink-0 w-[120px] sm:w-[155px] md:w-[170px] lg:w-[185px] xl:w-[195px] block focus:outline-none"
              >
                <div className="relative aspect-[1/1.5] w-full rounded-xs overflow-hidden shadow-xs group-hover:shadow-lg transition-all duration-200 border border-slate-200/80 bg-slate-100 flex items-center justify-center">
                  <Image
                    src={book.imageUrl}
                    alt={book.title}
                    fill
                    sizes="(max-width: 640px) 120px, (max-width: 1024px) 170px, 195px"
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                  <div className="absolute left-0 top-0 bottom-0 w-2 sm:w-2.5 bg-gradient-to-r from-black/20 via-black/5 to-transparent pointer-events-none" />
                </div>
              </Link>
            ))}
          </div>
        </div>

      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. SARA BOOK ACADEMIC CALL TO ACTION (Crisp, Airy & Light Design)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-16 bg-gradient-to-b from-slate-50 to-white text-slate-800 relative overflow-hidden border-t border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center relative z-10">
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#1658b3] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60 inline-block mb-3">
            PUBLISH WITH SARA BOOK PUBLICATION
          </span>
          <h2 className="text-xl sm:text-3xl font-black tracking-tight text-[#0D3B66] max-w-2xl mx-auto">
            Ready to Publish Your Academic Book or Research Monograph?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-2.5 leading-relaxed font-normal">
            Authentic 13-digit UGC valid ISBN allocation, peer review, and worldwide distribution on Amazon & Flipkart.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/packages"
              className="bg-[#1658b3] hover:bg-[#124690] text-white text-xs font-black uppercase tracking-wider px-8 py-3.5 rounded-lg transition shadow-md hover:shadow-lg w-full sm:w-auto"
            >
              View Publishing Plans
            </Link>
            <Link
              href="/contact"
              className="bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-lg transition shadow-xs w-full sm:w-auto"
            >
              Contact Editorial Desk
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
