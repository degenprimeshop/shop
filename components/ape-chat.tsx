"use client";
import { useState } from 'react';

export default function ApeChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 100, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      
      {/* CHAT WINDOW (Only visible when open) */}
      {isOpen && (
        <div style={{ 
          width: '320px', 
          height: '400px', 
          backgroundColor: 'rgba(5, 5, 5, 0.95)', 
          border: '1px solid #8b5cf6', 
          marginBottom: '20px',
          boxShadow: '0 0 40px rgba(139, 92, 246, 0.2)',
          display: 'flex', 
          flexDirection: 'column',
          backdropFilter: 'blur(10px)',
          animation: 'slideUp 0.3s ease-out'
        }}>
          
          {/* WINDOW HEADER */}
          <div style={{ backgroundColor: '#8b5cf6', padding: '10px 15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '10px', height: '10px', backgroundColor: '#22c55e', borderRadius: '50%', border: '1px solid black' }}></div>
              <span style={{ fontFamily: 'monospace', fontWeight: '900', color: 'black', fontSize: '12px', letterSpacing: '0.1em' }}>SUPPORT_AGENT_V1</span>
            </div>
            <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', fontWeight: '900', cursor: 'pointer', color: 'black' }}>[X]</button>
          </div>

          {/* CHAT HISTORY */}
          <div style={{ flexGrow: 1, padding: '20px', fontFamily: 'monospace', fontSize: '12px', color: '#ccc', overflowY: 'auto' }}>
            <div style={{ marginBottom: '15px', opacity: 0.5, fontSize: '10px', textAlign: 'center' }}>
              --- ENCRYPTED CONNECTION ESTABLISHED ---
            </div>
            
            <div style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}>
              <div style={{ minWidth: '30px', height: '30px', border: '1px solid #8b5cf6', overflow: 'hidden' }}>
                <img src="/ape1.png" alt="Ape" className="grayscale" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ backgroundColor: '#111', padding: '10px', border: '1px solid #333', maxWidth: '80%' }}>
                <span style={{ color: '#8b5cf6', fontWeight: 'bold', display: 'block', marginBottom: '4px', fontSize: '10px' }}>PRIME_AGENT</span>
                Yo. Need help calculating shipping? Paste the link in the terminal.
              </div>
            </div>

            <div style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}>
              <div style={{ minWidth: '30px', height: '30px', border: '1px solid #8b5cf6', overflow: 'hidden' }}>
                <img src="/ape1.png" alt="Ape" className="grayscale" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ backgroundColor: '#111', padding: '10px', border: '1px solid #333', maxWidth: '80%' }}>
                <span style={{ color: '#8b5cf6', fontWeight: 'bold', display: 'block', marginBottom: '4px', fontSize: '10px' }}>PRIME_AGENT</span>
                We accept ETH, SOL, and USDC. Don't ask about fiat.
              </div>
            </div>
          </div>

          {/* INPUT AREA */}
          <div style={{ borderTop: '1px solid #333', padding: '15px' }}>
            <div style={{ display: 'flex', border: '1px solid #333', backgroundColor: 'black' }}>
              <input 
                type="text" 
                placeholder="Send message..." 
                style={{ width: '100%', backgroundColor: 'transparent', border: 'none', color: 'white', padding: '10px', fontFamily: 'monospace', fontSize: '12px', outline: 'none' }}
              />
              <button style={{ color: '#8b5cf6', padding: '0 15px', fontWeight: 'bold', cursor: 'pointer', fontFamily: 'monospace' }}>&gt;</button>
            </div>
          </div>
        </div>
      )}

      {/* THE FLOATING BUTTON (HEAD) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{ 
          width: '70px', 
          height: '70px', 
          borderRadius: '50%', 
          overflow: 'hidden', 
          border: '3px solid #8b5cf6',
          boxShadow: '0 0 30px rgba(139, 92, 246, 0.4)',
          cursor: 'pointer',
          transition: 'all 0.2s',
          backgroundColor: 'black',
          position: 'relative'
        }}
        className="hover:scale-110 active:scale-95 group"
      >
        <img src="/ape1.png" alt="Chat" style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="grayscale group-hover:grayscale-0 transition-all duration-300" />
        
        {/* ONLINE DOT */}
        <div style={{ position: 'absolute', bottom: '5px', right: '5px', width: '15px', height: '15px', backgroundColor: '#22c55e', borderRadius: '50%', border: '2px solid black' }}></div>
      </button>

      {/* Animation Style */}
      <style jsx>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

    </div>
  );
}