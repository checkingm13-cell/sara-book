import React from "react";
import Link from "next/link";
import { ArrowLeft, LucideIcon } from "lucide-react";

export interface SubpageHeroProps {
  title: string;
  subtitle: string;
  badgeText: string;
  badgeIcon: LucideIcon;
  backHref?: string;
  backLabel?: string;
  actionSlot?: React.ReactNode;
}

export default function SubpageHero({
  title,
  subtitle,
  badgeText,
  badgeIcon: BadgeIcon,
  backHref = "/",
  backLabel = "Back to Store",
  actionSlot,
}: SubpageHeroProps) {
  return (
    <section className="relative w-full bg-[#0A1628] text-white py-12 sm:py-16 lg:py-20 border-b border-white/10 overflow-hidden select-none">
      
      {/* 1. Ambient Lighting (Radial Glows) */}
      <div 
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#1658b3]/25 rounded-full blur-3xl pointer-events-none -translate-y-1/2" 
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#FFAE00]/10 rounded-full blur-3xl pointer-events-none translate-y-1/2" 
        aria-hidden="true"
      />

      {/* 2. Micro-Grid Blueprint Watermark */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* 3. Main Content Container */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Breadcrumb link */}
        <Link
          href={backHref}
          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-white transition-colors mb-5 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>{backLabel}</span>
        </Link>

        {/* Two-Column Responsive Row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          
          {/* Left Column: Pill, Title, Subtitle */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1658b3]/25 border border-sky-400/30 text-sky-200 text-[11px] font-mono uppercase tracking-widest font-bold mb-4 shadow-xs backdrop-blur-xs">
              <BadgeIcon className="w-3.5 h-3.5 text-[#FFAE00]" />
              <span>{badgeText}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight sm:leading-none mb-3 font-sans">
              {title}
            </h1>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl font-sans">
              {subtitle}
            </p>
          </div>

          {/* Right Column: Custom Action Slot (Currency switcher, buttons, chips) */}
          {actionSlot && (
            <div className="shrink-0 self-start lg:self-end">
              {actionSlot}
            </div>
          )}

        </div>

      </div>

      {/* 4. Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FFAE00]/40 to-transparent" />
    </section>
  );
}
