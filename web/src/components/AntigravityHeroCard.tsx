"use client";

import React, { useRef, useState } from "react";
import { ShieldCheck, Sparkles, BookOpen } from "lucide-react";

export default function AntigravityHeroCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = ((x - centerX) / centerX) * 12;
    const rotateX = -((y - centerY) / centerY) * 12;
    
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div 
      className="relative w-full max-w-md mx-auto [perspective:1200px]"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Lightened Ambient Diffused Glow */}
      <div 
        className="absolute -inset-4 bg-gradient-to-tr from-amber-200/40 via-sky-100/30 to-amber-100/30 rounded-3xl blur-2xl transition-opacity duration-500 pointer-events-none"
        style={{ opacity: isHovered ? 0.9 : 0.4 }}
      />

      {/* Main 3D Levitating Slate (Light Editorial Edition) */}
      <div
        ref={cardRef}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateZ(${isHovered ? '25px' : '0px'})`,
          transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          transformStyle: 'preserve-3d',
        }}
        className="relative bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 text-slate-900 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.08)] will-change-transform overflow-hidden select-none"
      >
        {/* Spatial Micro-Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#F1F5F9_1px,transparent_1px),linear-gradient(to_bottom,#F1F5F9_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        {/* Floating Layer 1 (Z: 20px) */}
        <div 
          style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}
          className="relative z-10 flex justify-between items-start"
        >
          <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200/80 text-amber-800 text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-md shadow-xs">
            <Sparkles className="w-3 h-3 text-amber-600" />
            SPEC SHEET 01
          </div>
          <span className="font-mono text-[10px] text-slate-400 tracking-wider">
            ESTD. 2011
          </span>
        </div>

        {/* Floating Layer 2: Core Academic Iconography (Z: 45px) */}
        <div 
          style={{ transform: 'translateZ(45px)', transformStyle: 'preserve-3d' }}
          className="relative z-20 my-8 py-4 flex flex-col items-center justify-center"
        >
          {/* Levitating Archival Book Plinth (Crisp & Light) */}
          <div className="w-24 h-32 bg-[#FAF9F6] relative rounded shadow-md flex flex-col justify-between p-3 border border-slate-200 border-l-4 border-l-amber-500 transition-transform duration-300">
            <div className="flex justify-between items-center text-[7px] font-mono text-slate-500 font-bold">
              <span>ISBN</span>
              <span>UGC</span>
            </div>
            
            {/* Gestalt Negative Space Cutout */}
            <div className="w-8 h-14 bg-slate-900 mx-auto rounded-sm flex items-center justify-center shadow-inner">
              <div className="w-1 h-8 bg-amber-400" />
            </div>
            
            <div className="text-[7px] font-mono text-center text-slate-600 font-bold">
              978-93-SBP
            </div>
          </div>

          <span className="font-mono text-[10px] tracking-widest text-slate-600 uppercase mt-4 font-bold">
            NATIONAL AGENCY FOR ISBN
          </span>
        </div>

        {/* Floating Layer 3: Interactive Verification Footer (Z: 30px) */}
        <div 
          style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }}
          className="relative z-30 pt-4 border-t border-slate-100 flex justify-between items-end"
        >
          <div>
            <span className="text-[9px] font-mono text-slate-400 uppercase block tracking-wider">
              AUTHORITY STANDARD
            </span>
            <span className="text-xs font-black text-slate-800 uppercase tracking-tight block">
              DOUBLE-BLIND PEER REVIEW
            </span>
          </div>
          <div className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded text-[10px] font-mono font-bold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>100% VALID</span>
          </div>
        </div>

      </div>
    </div>
  );
}
