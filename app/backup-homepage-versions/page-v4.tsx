"use client";

import Calculator from '../components/calculator';
import Ticker from '../components/ticker';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column', color: 'white', position: 'relative', overflowX: 'hidden' }}>
      
      {/* 1. GHOST BACKGROUND LAYER */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.04 }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(#8b5cf6 1px, transparent 1px), linear-gradient(90deg, #8b5cf6 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Ticker />
        
        {/* 2. THE TACTICAL HEADER STACK */}
        <header style={{ borderBottom: '6px solid #8b5cf6', backgroundColor: 'black', zIndex: 50, boxShadow: '0 8px 0 0 rgba(139, 92, 246, 0.3)' }}>
          
          {/* TACTICAL TOP BAR: T&C, Shipping, etc. */}
          <div style={{ borderBottom: '1px solid rgba(139, 92, 246, 0.2)', padding: '10px 60px', display: 'flex', justifyContent: 'flex-end', gap: '30px' }}>
             <a href="#" className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/40 hover:text-[#8b5cf6] transition-colors">[ T&C ]</a>
             <a href="#" className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/40 hover:text-[#8b5cf6] transition-colors">[ Shipping_Policy ]</a>
             <a href="#" className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/40 hover:text-[#8b5cf6] transition-colors">[ Return_Portal ]</a>
          </div>

          {/* MAIN BRAND ROW */}
          <div style={{ padding: '40px 60px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '50px' }}>
              {/* 180px BINGO ICON */}
              <div style={{ border: '4px solid #8b5cf6', width: '180px', height: '180px', overflow: 'hidden', boxShadow: '10px 10px 0px 0px #8b5cf6' }}>
                <img src="/ape1.png" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="grayscale" />
              </div>
              <h1 style={{ fontSize: '84px', margin: 0, lineHeight: '0.9', letterSpacing: '-0.02em' }} className="font-black italic uppercase tracking-tighter">
                DEGEN <span style={{ color: '#8b5cf6' }}>PRIME</span> SHOP
              </h1>
            </div>

            {/* NEON FLASH BUTTON */}
            <button 
              style={{ 
                backgroundColor: 'transparent',
                border: '4px solid #8b5cf6',
                color: '#8b5cf6',
                padding: '20px 45px',
                fontSize: '16px',
                boxShadow: '0 0 25px #8b5cf6, inset 0 0 10px #8b5cf6', 
                textShadow: '0 0 8px #8b5cf6',
                fontFamily: 'monospace',
                letterSpacing: '0.4em'
              }}
              className="font-black uppercase hover:bg-[#8b5cf6] hover:text-black transition-all active:scale-95"
            >
              <span className="flex items-center gap-3">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-ping"></span>
                [ Connect_Wallet ]
              </span>
            </button>
          </div>
        </header>

        {/* 3. CENTERED COMMAND MODULE */}
        <main style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '100px 20px' }}>
          <div style={{ width: '100%', maxWidth: '700px' }} className="space-y-16">
            <div className="w-full text-center">
              <p style={{ color: '#22c55e' }} className="font-mono text-xs uppercase tracking-[1em] animate-pulse">
                // TERMINAL_STABLE_V1.04 //
              </p>
            </div>
            <Calculator />
          </div>
        </main>

        <footer style={{ padding: '80px', borderTop: '1px solid rgba(139, 92, 246, 0.1)', textAlign: 'center', backgroundColor: 'black' }}>
          <p style={{ color: '#8b5cf6', letterSpacing: '2em' }} className="font-mono text-[10px] uppercase">
            [ system_status : foundation _ locked ]
          </p>
        </footer>
      </div>
    </div>
  );
}