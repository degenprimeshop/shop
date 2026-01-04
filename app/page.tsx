"use client";

import React from 'react';
import { Twitter, Send, Wallet } from 'lucide-react';

export default function DegenShop() {
  return (
    <div className="min-h-screen bg-black text-white font-mono selection:bg-purple-500/30 overflow-x-hidden relative flex flex-col">
      
      {/* 0. CRT SCANLINE OVERLAY */}
      <div className="fixed inset-0 pointer-events-none z-[60] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%] opacity-20" />

      {/* 1. ANIMATIONS */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-1px, 1px); }
          40% { transform: translate(-1px, -1px); }
          60% { transform: translate(1px, 1px); }
          80% { transform: translate(1px, -1px); }
          100% { transform: translate(0); }
        }
        .animate-glitch {
          animation: glitch 0.4s cubic-bezier(.25,.46,.45,.94) both infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}} />

      {/* 2. LIVE TRANSACTION TICKER (Fixed Arrows) */}
      <div className="w-full bg-black border-b border-green-500/20 py-2 relative z-50">
        <div className="whitespace-nowrap animate-scroll flex gap-32">
          <span className="text-[10px] text-green-400 font-mono tracking-[0.2em] uppercase font-bold drop-shadow-[0_0_2px_rgba(74,222,128,0.5)]">
            &gt;&gt;&gt; TX: 0x8a...4b // ITEM: JORDAN_4_RETRO_SB // STATUS: PROCESSED
          </span>
          <span className="text-[10px] text-green-400 font-mono tracking-[0.2em] uppercase font-bold drop-shadow-[0_0_2px_rgba(74,222,128,0.5)]">
            &gt;&gt;&gt; TX: 0x1c...99 // ITEM: NVIDIA_RTX_5090 // STATUS: SHIPPING
          </span>
          <span className="text-[10px] text-green-400 font-mono tracking-[0.2em] uppercase font-bold drop-shadow-[0_0_2px_rgba(74,222,128,0.5)]">
            &gt;&gt;&gt; TX: 0x4f...2d // ITEM: SONY_PS5_PRO // STATUS: CONFIRMED
          </span>
          <span className="text-[10px] text-green-400 font-mono tracking-[0.2em] uppercase font-bold drop-shadow-[0_0_2px_rgba(74,222,128,0.5)]">
            &gt;&gt;&gt; TX: 0x9e...1a // ITEM: TRAVIS_SCOTT_OLIVE // STATUS: DELIVERED
          </span>
          <span className="text-[10px] text-green-400 font-mono tracking-[0.2em] uppercase font-bold drop-shadow-[0_0_2px_rgba(74,222,128,0.5)]">
            &gt;&gt;&gt; TX: 0xb2...7c // ITEM: MACBOOK_M3_MAX // STATUS: PROCESSED
          </span>
           {/* Duplicate for Loop */}
          <span className="text-[10px] text-green-400 font-mono tracking-[0.2em] uppercase font-bold drop-shadow-[0_0_2px_rgba(74,222,128,0.5)]">
            &gt;&gt;&gt; TX: 0x8a...4b // ITEM: JORDAN_4_RETRO_SB // STATUS: PROCESSED
          </span>
          <span className="text-[10px] text-green-400 font-mono tracking-[0.2em] uppercase font-bold drop-shadow-[0_0_2px_rgba(74,222,128,0.5)]">
            &gt;&gt;&gt; TX: 0x1c...99 // ITEM: NVIDIA_RTX_5090 // STATUS: SHIPPING
          </span>
        </div>
      </div>

      {/* 3. UTILITY BAR */}
      <div className="w-full bg-black border-b border-white/10 py-3 px-10 flex justify-end gap-10 text-[11px] tracking-[0.3em] font-bold z-40">
        <span className="cursor-pointer hover:text-purple-400 text-zinc-400 transition-colors uppercase">[ How It Works ]</span>
        <span className="cursor-pointer hover:text-purple-400 text-zinc-400 transition-colors uppercase">[ Restricted Items ]</span>
        <span className="cursor-pointer hover:text-purple-400 text-zinc-400 transition-colors uppercase">[ Terms ]</span>
      </div>

      {/* 4. WIDE HEADER */}
      <header className="w-full py-10 px-10 flex justify-between items-center z-40 relative">
        <div className="flex items-center gap-8">
          <div className="relative p-[1px] bg-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.4)]">
            <img 
              src="/ape1.png" 
              alt="Degen Ape" 
              className="w-32 h-32 object-cover border border-black grayscale brightness-110"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-6xl font-black italic tracking-tighter leading-none animate-glitch uppercase">
              DEGEN <span className="text-purple-500">PRIME</span> SHOP
            </h1>
            <span className="text-[12px] text-purple-400/80 tracking-[0.5em] font-black mt-3 uppercase">
              // RWA_LOGISTICS_LAYER
            </span>
          </div>
        </div>

        <button className="relative flex items-center gap-4 bg-black border-2 border-[#d946ef] px-12 py-5 shadow-[0_0_20px_rgba(217,70,239,0.5),inset_0_0_10px_rgba(217,70,239,0.2)] hover:shadow-[0_0_35px_rgba(217,70,239,0.8),inset_0_0_20px_rgba(217,70,239,0.4)] hover:border-[#f0abfc] transition-all duration-300 group">
          <Wallet size={18} className="text-[#f0abfc] group-hover:text-white drop-shadow-[0_0_5px_rgba(217,70,239,0.8)]" />
          <span className="tracking-[0.3em] text-[13px] font-black text-white uppercase group-hover:text-[#f0abfc] text-shadow-[0_0_10px_rgba(217,70,239,0.5)]">
            [ Connect Wallet ]
          </span>
        </button>
      </header>

      {/* 5. SEPARATOR & GRID */}
      <div className="w-full border-b border-purple-500/40 shadow-[0_5px_25px_rgba(168,85,247,0.15)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:45px_45px] pointer-events-none" />

      {/* 6. MAIN CONTENT */}
      <main className="relative z-10 flex flex-col items-center flex-grow py-14 px-4">
        
        {/* HERO TITLE */}
        <div className="text-center mb-16 max-w-5xl">
          <h2 className="text-6xl font-black tracking-[0.2em] mb-8 uppercase leading-tight">
            BUY <span className="underline decoration-purple-600 decoration-4 underline-offset-[12px]">ANYTHING</span>* WITH CRYPTO.
          </h2>
          <p className="text-[14px] text-zinc-300 tracking-[0.6em] font-bold uppercase">
            PASTE AMAZON LINK /// SPECIALIZED: <span className="text-purple-400">ELECTRONICS</span> // <span className="text-purple-400">FOOTWEAR</span>
          </p>
          <p className="text-[11px] text-zinc-500 tracking-[0.4em] mt-10 font-black uppercase italic">
            *SEE RESTRICTIONS
          </p>
        </div>

        {/* PROCESSOR TERMINAL */}
        <div className="w-full max-w-3xl border border-purple-500/40 bg-black shadow-[0_0_60px_rgba(0,0,0,0.8)]">
          
          {/* HEADER */}
          <div className="bg-purple-600 px-6 py-2.5 flex justify-between items-center">
             <span className="text-[12px] font-black text-black tracking-widest uppercase">GATEWAY: NOWPAYMENTS_API</span>
             <span className="text-[12px] font-black text-black/70 tracking-widest uppercase italic font-bold">STATUS: IDLE</span>
          </div>
          
          <div className="p-14 flex flex-col">
            
            {/* TARGET DIRECTORY */}
            <div className="flex gap-6 mb-6 text-[10px] font-bold text-zinc-500 tracking-widest uppercase">
               <span>ACTIVE_TARGETS:</span>
               <span className="text-purple-400 cursor-pointer hover:text-white hover:underline decoration-purple-500 decoration-2 underline-offset-4 transition-all">&gt;&gt; SNEAKERS</span>
               <span className="text-purple-400 cursor-pointer hover:text-white hover:underline decoration-purple-500 decoration-2 underline-offset-4 transition-all">&gt;&gt; GPUS</span>
               <span className="text-purple-400 cursor-pointer hover:text-white hover:underline decoration-purple-500 decoration-2 underline-offset-4 transition-all">&gt;&gt; CONSOLES</span>
               <span className="text-purple-400 cursor-pointer hover:text-white hover:underline decoration-purple-500 decoration-2 underline-offset-4 transition-all">&gt;&gt; CAMERAS</span>
            </div>

            <span className="text-[12px] text-purple-400 mb-4 tracking-[0.5em] uppercase font-black text-center">[ PASTE_AMAZON_LINK_BELOW ]</span>
            
            <div className="flex gap-2 mb-8">
              <input 
                type="text" 
                placeholder="https://amazon.com/dp/..."
                className="flex-1 bg-zinc-950 border border-purple-500/30 p-6 text-purple-100 placeholder:text-zinc-500 focus:outline-none focus:border-purple-500/50 text-sm font-mono transition-all"
              />
              <button className="bg-purple-600 hover:bg-purple-500 text-black font-black px-14 py-6 uppercase tracking-tighter transition-all text-sm shadow-[inset_0_0_20px_rgba(0,0,0,0.3)]">
                ANALYZE
              </button>
            </div>

            {/* SUPPORTED NETWORKS */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex justify-center gap-8 opacity-60">
                <span className="text-[10px] font-black text-purple-300 tracking-[0.3em] uppercase hover:text-white cursor-help transition-colors">[ ETH ]</span>
                <span className="text-[10px] font-black text-purple-300 tracking-[0.3em] uppercase hover:text-white cursor-help transition-colors">[ SOL ]</span>
                <span className="text-[10px] font-black text-purple-300 tracking-[0.3em] uppercase hover:text-white cursor-help transition-colors">[ BASE ]</span>
                <span className="text-[10px] font-black text-purple-300 tracking-[0.3em] uppercase hover:text-white cursor-help transition-colors">[ BTC ]</span>
                <span className="text-[10px] font-black text-purple-300 tracking-[0.3em] uppercase hover:text-white cursor-help transition-colors">[ +300_ALTS ]</span>
              </div>
              
              {/* TRUST BADGE */}
              <span className="text-[9px] text-zinc-600 tracking-[0.4em] uppercase font-bold">
                // ENCRYPTED_PROCESSING_VIA_NOWPAYMENTS
              </span>
            </div>
          </div>
        </div>

        {/* SOCIAL LINKS */}
        <div className="flex gap-24 mt-20 pb-10">
          <div className="flex flex-col items-center gap-4 group cursor-pointer">
            <div className="p-4 border border-white/20 group-hover:border-purple-500 transition-all">
              <Twitter size={28} className="text-zinc-400 group-hover:text-white" />
            </div>
            <span className="text-[11px] tracking-[0.5em] font-black text-zinc-400 uppercase group-hover:text-purple-400 transition-colors">[ X.COM ]</span>
          </div>
          <div className="flex flex-col items-center gap-4 group cursor-pointer">
            <div className="p-4 border border-white/20 group-hover:border-purple-500 transition-all">
              <Send size={28} className="text-zinc-400 group-hover:text-white" />
            </div>
            <span className="text-[11px] tracking-[0.5em] font-black text-zinc-400 uppercase group-hover:text-purple-400 transition-colors">[ TELEGRAM ]</span>
          </div>
        </div>
      </main>

      {/* 7. NEON GREEN FOOTER */}
      <footer className="w-full bg-[#050505] border-t border-green-500/30 py-4 px-10 relative z-50 flex items-center justify-between">
        <div className="text-[11px] text-zinc-500 font-bold tracking-[0.2em] uppercase">
          BUILD: <span className="text-zinc-400">PRE-LUNCH_STABLE</span>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="flex items-center gap-4">
            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_12px_#22c55e]" />
            <span className="text-[11px] font-black text-green-500 tracking-[0.6em] uppercase">
              SYSTEM LIVE // PROTOCOL_ACTIVE
            </span>
          </div>
        </div>

        <div className="text-[11px] text-zinc-500 font-bold tracking-[0.2em] uppercase">
          LATENCY: <span className="text-green-500">14MS</span>
        </div>
      </footer>

      {/* 8. APE CHAT BOX */}
      <div className="fixed bottom-24 right-8 z-[100] group">
        <div className="relative cursor-pointer transition-transform duration-300 hover:scale-110">
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black z-10 animate-pulse shadow-[0_0_10px_#22c55e]" />
          <div className="w-20 h-20 rounded-full border-2 border-purple-500/50 overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.3)] bg-black">
            <img 
              src="/ape1.png" 
              alt="Operator" 
              className="w-full h-full object-cover grayscale brightness-125 group-hover:grayscale-0 transition-all"
            />
          </div>
          <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
             <div className="bg-purple-600 text-black text-[10px] font-black px-4 py-1 uppercase tracking-widest whitespace-nowrap">
               Operator_Online
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}