"use client";

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-green-500 font-mono selection:bg-green-900 selection:text-white relative overflow-hidden">
      
      {/* 1. TOP NAVIGATION */}
      <nav className="border-b border-green-900/50 p-4 flex justify-between items-center backdrop-blur-sm z-50 relative">
        <div className="text-xl font-bold tracking-tighter uppercase flex items-center gap-2">
          <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></span>
          DEGEN PRIME SHOP
        </div>
        <Link 
          href="/admin" 
          className="text-xs border border-green-800 px-3 py-1 hover:bg-green-900/30 transition-colors uppercase tracking-widest"
        >
          [ Admin Access ]
        </Link>
      </nav>

      {/* 2. SCROLLING TICKER (Fixed Syntax) */}
      <div className="w-full bg-green-900/10 border-b border-green-900/30 overflow-hidden py-2 relative z-40">
        <div className="whitespace-nowrap animate-scroll flex gap-32">
          <span className="text-[10px] text-green-400 font-mono tracking-[0.2em] uppercase font-bold drop-shadow-[0_0_2px_rgba(34,197,94,0.5)]">
            ► TX: 0x8a...4b // ITEM: JORDAN_4_RETRO_SB // STATUS: PROCESSED
          </span>
          <span className="text-[10px] text-green-400 font-mono tracking-[0.2em] uppercase font-bold drop-shadow-[0_0_2px_rgba(34,197,94,0.5)]">
             ► TX: 0x1c...99 // ITEM: NVIDIA_RTX_5090 // STATUS: SHIPPING
          </span>
          <span className="text-[10px] text-green-400 font-mono tracking-[0.2em] uppercase font-bold drop-shadow-[0_0_2px_rgba(34,197,94,0.5)]">
             ► TX: 0x7f...2a // ITEM: LEDGER_STAX // STATUS: CONFIRMED
          </span>
          <span className="text-[10px] text-green-400 font-mono tracking-[0.2em] uppercase font-bold drop-shadow-[0_0_2px_rgba(34,197,94,0.5)]">
             ► SYSTEM_STATUS: ONLINE // NODES: 420 // LATENCY: 12ms
          </span>
        </div>
      </div>

      {/* 3. HERO SECTION */}
      <main className="flex flex-col items-center justify-center min-h-[80vh] relative z-40 p-6">
        
        {/* Glowing Background Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[100px] pointer-events-none"></div>

        <h1 className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-green-400 to-green-900 tracking-tighter mb-8 text-center drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]">
          DEGEN<br/>PRIME
        </h1>

        <p className="max-w-md text-center text-green-400/80 mb-12 text-sm md:text-base leading-relaxed uppercase tracking-widest border-l-2 border-green-500 pl-4">
          Premium hardware for the digital frontier. <br/>
          Secure. Anonymous. Fast.
        </p>

        <Link 
          href="/shop"
          className="group relative px-12 py-4 bg-green-500 text-black font-bold text-xl uppercase tracking-widest hover:bg-green-400 transition-all duration-300 clip-path-polygon hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.6)]"
        >
          <span className="relative z-10 flex items-center gap-2">
            Enter Market
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </Link>
      </main>

      {/* 4. SCANLINES OVERLAY */}
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-50 bg-[length:100%_2px,3px_100%]"></div>
    </div>
  );
}