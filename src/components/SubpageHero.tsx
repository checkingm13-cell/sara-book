import React from "react";
import Link from "next/link";
import { ArrowLeft, LucideIcon } from "lucide-react";

export interface SubpageHeroProps {
  title: string;
  subtitle: string;
  badgeText: string;
  badgeIcon: LucideIcon;
  quoteHook?: string;
  indexCode?: string;
  backHref?: string;
  backLabel?: string;
  actionSlot?: React.ReactNode;
}

export default function SubpageHero({
  title,
  subtitle,
  badgeText,
  badgeIcon: BadgeIcon,
  quoteHook = "“Advancing scholarly research with authentic 13-digit UGC-CARE compliance.”",
  indexCode = "INDEX // 01",
  backHref = "/",
  backLabel = "Back to Catalog",
  actionSlot,
}: SubpageHeroProps) {
  return (
    <section className="relative w-full bg-[#F8FAFC] text-slate-900 py-12 sm:py-16 lg:py-20 border-b border-slate-200/90 overflow-hidden select-none">
      
      {/* 1. Ambient Lighting (Subtle warm gold & cold slate radial glows) */}
      <div 
        className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-[#FFAE00]/6 rounded-full blur-3xl pointer-events-none -translate-y-1/2" 
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-[#1658b3]/4 rounded-full blur-3xl pointer-events-none translate-y-1/2" 
        aria-hidden="true"
      />

      {/* 2. Precision Swiss Grid Watermark */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0A1628 1px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* 3. Main Content Container */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Navigation Breadcrumb with Swiss Arrow */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 hover:text-slate-900 transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span className="font-semibold">{backLabel}</span>
          </Link>

          <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-slate-400 hidden sm:inline-block">
            {indexCode} • ACADEMIC PRESS
          </span>
        </div>

        {/* Two-Column Asymmetric Layout */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 sm:gap-10">
          
          {/* Left Column: Editorial Hook, Badge, Title, Subtitle */}
          <div className="max-w-3xl">
            
            {/* Visual Hook: Editorial Italic Pull-Quote */}
            <div className="mb-4">
              <span className="italic font-serif text-sm sm:text-base text-slate-600 block leading-snug">
                {quoteHook}
              </span>
            </div>

            {/* Pill Tag with Icon */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-800 text-[11px] font-mono uppercase tracking-wider font-bold mb-4 shadow-2xs">
              <BadgeIcon className="w-3.5 h-3.5 text-[#FFAE00]" />
              <span>{badgeText}</span>
            </div>

            {/* Swiss International Oversized Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1] sm:leading-[1.08] mb-4 font-sans">
              {title}
            </h1>

            {/* Generous Negative Space & Breathable Subtitle */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
              {subtitle}
            </p>
          </div>

          {/* Right Column: Clean Action Slot Card */}
          {actionSlot && (
            <div className="shrink-0 self-start lg:self-end">
              <div className="bg-white p-2.5 sm:p-3 rounded-2xl border border-slate-200 shadow-sm">
                {actionSlot}
              </div>
            </div>
          )}

        </div>

      </div>

      {/* 4. Bottom Structural Gold Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFAE00]/60 to-transparent" />
    </section>
  );
}
