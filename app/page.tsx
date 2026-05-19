'use client';
import React from 'react';

export default function Home() {
  const navigationTabs = [
    { name: 'Home', active: true },
    { name: 'Shows', active: false },
    { name: 'Movies', active: false },
    { name: 'Games', active: false },
    { name: 'My Netflix', active: false },
  ];

  return (
    <main className="min-h-screen bg-gradient-cinematic text-white selection:bg-red-500/30 overflow-x-hidden">
      {/* Background ambient glow orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-teal-900/10 blur-[120px] animate-orbit-1" />
        <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] rounded-full bg-amber-900/5 blur-[100px] animate-orbit-2" />
      </div>

      {/* Main centered container */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 py-12 min-h-screen flex flex-col">
        {/* Main content box */}
        <div className="flex-1 bg-black rounded-[24px] shadow-glow border border-white/5 p-12 flex flex-col relative overflow-hidden transition-all duration-700 hover-glow">
          {/* Inner subtle glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
          
          {/* ===== TOP NAVIGATION BAR ===== */}
          <nav className="flex items-center justify-between mb-12 relative z-20">
            {/* Left side: Logo + dropdown */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 group cursor-pointer">
                <div className="w-8 h-8 bg-[#E50914] rounded-md flex items-center justify-center relative overflow-hidden animate-logo shadow-lg">
                  <div className="w-4 h-[2px] bg-white rounded-full absolute bottom-2" />
                  <div className="w-1 h-1 bg-white rounded-full absolute top-2 left-2" />
                  <div className="w-1 h-1 bg-white rounded-full absolute top-2 right-2" />
                </div>
                <svg className="w-3 h-3 text-white/40 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </div>

            {/* Center navigation */}
            <div className="flex items-center gap-8">
              <div className="p-2 cursor-pointer hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-white/80 hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </div>
              
              <div className="flex items-center gap-2 bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-md">
                {navigationTabs.map((tab) => (
                  <button
                    key={tab.name}
                    className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                      tab.active
                        ? 'bg-[#232323] text-white shadow-lg shadow-black/40 border border-white/5'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Right spacer */}
            <div className="w-12" />
          </nav>

          {/* ===== MAIN CONTENT ===== */}
          <div className="flex-1 flex flex-col relative z-20">
            <h2 className="text-[20px] font-bold text-white mb-6 stagger-1">Only on Netflix</h2>

            {/* ===== CONTENT CARDS ===== */}
            <div className="flex gap-4 mb-10">
              {/* ---- BLACK MIRROR CARD ---- */}
              <div className="relative flex-[2.2] aspect-[16/9] rounded-[16px] overflow-hidden cyberpunk-card group border border-white/10 card-hover stagger-1">
                {/* Code Background with glitch animation */}
                <div className="ascii-code-bg animate-glitch transition-all duration-700">
                  {`1010010100101001010010100101001010010100101001
0010100101001010010100101001010010100101001010
1010010100101001010010100101001010010100101001
0010100101001010010100101001010010100101001010
1010010100101001010010100101001010010100101001
0010100101001010010100101001010010100101001010
1010010100101001010010100101001010010100101001
0010100101001010010100101001010010100101001010
1010010100101001010010100101001010010100101001
0010100101001010010100101001010010100101001010`}
                </div>

                {/* Scanning line animation */}
                <div className="absolute w-full h-[3px] bg-emerald-400/30 blur-[4px] z-10 animate-scanning" />

                {/* Cracks */}
                <div className="mirror-crack w-[40%] rotate-[15deg] top-[30%] left-[10%] group-hover:scale-110 transition-transform duration-700" />
                <div className="mirror-crack w-[30%] rotate-[-10deg] top-[60%] right-[15%] group-hover:scale-110 transition-transform duration-700" />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />

                {/* Branding & Title */}
                <div className="absolute bottom-6 left-8 z-20 group-hover:translate-x-1 transition-transform duration-500">
                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-[12px] font-black text-[#E50914] tracking-tighter italic shadow-sm">N SERIES</span>
                  </div>
                  <h3 className="black-mirror-title transition-all duration-500 group-hover:text-emerald-50/90">
                    BLACK<br />MIRROR
                  </h3>
                </div>

                {/* Badges */}
                <div className="absolute bottom-6 right-8 flex gap-3 z-20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <div className="premium-badge shadow-xl">
                    <span className="text-[#FF0055] animate-pulse">📢</span> New Season
                  </div>
                  <div className="premium-badge shadow-xl">
                    <span className="text-[#FFD700]">🏆</span> Emmy Award Winner
                  </div>
                </div>
              </div>

              {/* ---- YOU CARD ---- */}
              <div className="relative flex-1 aspect-[16/23] rounded-[16px] overflow-hidden you-card group border border-white/10 card-hover stagger-2">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.1),transparent)] transition-opacity duration-700 group-hover:opacity-100 opacity-60" />
                
                {/* Character representation */}
                <div className="absolute bottom-[30%] left-1/2 -translate-x-1/2 flex flex-col items-center transition-transform duration-1000 group-hover:translate-y-[-5px]">
                  <div className="w-20 h-20 rounded-full bg-[#3d2a1e] relative shadow-2xl overflow-hidden border-2 border-white/5">
                    <div className="absolute top-0 w-full h-8 bg-[#1a0f08] blur-[1px]" />
                  </div>
                  <div className="w-28 h-40 bg-[#4a3a2a] -mt-2 rounded-t-3xl border-t border-white/10 shadow-2xl" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent z-10" />
                <div className="you-text absolute bottom-6 left-1/2 -translate-x-1/2 text-6xl z-20 transition-all duration-700 group-hover:tracking-[1px] group-hover:scale-105">YOU</div>
              </div>

              {/* ---- COBRA KAI CARD ---- */}
              <div className="relative flex-1 aspect-[16/23] rounded-[16px] overflow-hidden cobrakai-card group border border-white/10 card-hover stagger-3">
                <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-24 h-24 bg-white/30 blur-3xl rounded-full animate-pulse-soft" />
                
                {/* Beach scene silhouettes */}
                <div className="absolute bottom-[40%] left-[20%] w-6 h-24 bg-black/40 rounded-full blur-[1px] rotate-[-5deg] group-hover:rotate-[-8deg] transition-transform duration-1000" />
                <div className="absolute bottom-[40%] right-[20%] w-6 h-24 bg-black/40 rounded-full blur-[1px] rotate-[5deg] group-hover:rotate-[8deg] transition-transform duration-1000" />
                
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent z-10" />
                <div className="cobrakai-text absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-3xl leading-none uppercase z-20 transition-all duration-700 group-hover:scale-110">
                  COBRA<br />KAI
                </div>
              </div>
            </div>

            {/* ===== METADATA ===== */}
            <div className="mb-4 stagger-2">
              <p className="text-[16px] font-semibold text-white/90">
                TV Dramas <span className="mx-2 text-white/40">•</span> 2011 <span className="mx-2 text-white/40">•</span> 7 Seasons <span className="mx-2 text-white/40">•</span> TV-MA
              </p>
            </div>

            {/* ===== DESCRIPTION ===== */}
            <p className="text-[16px] text-white/60 leading-relaxed max-w-[80%] stagger-3">
              Twisted tales run wild in this mind-bending anthology series that reveals
              humanity's worst traits, greatest innovations and more.
            </p>

          </div>
        </div>
      </div>
    </main>
  );

}
