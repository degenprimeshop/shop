export default function Ape() {
  return (
    <div 
      style={{ 
        border: '4px solid #8b5cf6', 
        boxShadow: '16px 16px 0px 0px #8b5cf6', 
        backgroundColor: 'black',
        width: '450px', // Locked width for a perfect card feel
        margin: '0 auto'
      }}
      className="group"
    >
      {/* 1. Tactical Image Feed */}
      <div className="relative w-full h-[250px] overflow-hidden bg-[#020617] border-b-4 border-[#8b5cf6]">
        <img 
          src="/ape1.png" 
          alt="Degen Prime Ape"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
        
        {/* Scanline Overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.03), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.03))', backgroundSize: '100% 4px, 3px 100%', pointerEvents: 'none', zIndex: 10 }}></div>

        {/* REC Light */}
        <div className="absolute top-3 left-3 flex items-center gap-2 z-20">
          <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse shadow-[0_0_8px_red]"></div>
          <span className="font-mono text-[9px] text-white/80 uppercase tracking-widest">Live_Feed_01</span>
        </div>
      </div>

      {/* 2. Label & Data Area */}
      <div className="p-5 space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h2 style={{ color: '#8b5cf6' }} className="text-2xl font-black uppercase italic tracking-tighter">
              Prime_Verified
            </h2>
            <p className="text-[#22c55e] font-mono text-[10px] tracking-[0.3em]">
              STATUS: HIGH_CONVICTION
            </p>
          </div>
          <p className="text-white/40 font-mono text-[10px]">#DP-001</p>
        </div>

        {/* 3. The Shop Action: "Buy Now" Button */}
        <button 
          style={{ 
            backgroundColor: '#8b5cf6', 
            color: 'black',
            boxShadow: '4px 4px 0px 0px white' 
          }}
          className="w-full py-3 font-black uppercase italic text-lg hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all active:scale-95"
        >
          Mint Asset // 0.5 ETH
        </button>

        <p className="text-center text-white/20 font-mono text-[8px] uppercase tracking-widest">
          // encrypted_transaction_protocol_v1.0
        </p>
      </div>
    </div>
  );
}