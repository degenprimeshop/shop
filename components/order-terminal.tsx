"use client";
import { useState } from 'react';

export default function OrderTerminal() {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState('IDLE'); // IDLE, ANALYZING, READY, ERROR
  const [quote, setQuote] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState('');

  // The "Banned Words" simulation list
  const BANNED_KEYWORDS = ['tire', 'wheel', 'fridge', 'ammo', 'weapon', 'couch', 'sofa', 'generator'];

  const handleAnalyze = () => {
    if (!url) return;
    setStatus('ANALYZING');
    setErrorMsg('');
    setQuote(null);

    setTimeout(() => {
      // 1. CHECK FOR BANNED ITEMS (Simulation)
      // In production, your backend scraper would detect the Category ID
      const detectedBan = BANNED_KEYWORDS.find(keyword => url.toLowerCase().includes(keyword));

      if (detectedBan) {
        setStatus('ERROR');
        setErrorMsg(`RESTRICTED_ITEM_DETECTED: [${detectedBan.toUpperCase()}]`);
        return;
      }

      // 2. SUCCESS PATH
      const mockPrice = Math.floor(Math.random() * (200 - 50 + 1) + 50); 
      setQuote({
        product: mockPrice,
        shipping: 25,
        service_fee: mockPrice * 0.15, 
        duties: mockPrice * 0.05,
        totalUSD: (mockPrice + 25 + (mockPrice * 0.15) + (mockPrice * 0.05)).toFixed(2)
      });
      setStatus('READY');
    }, 1500);
  };

  return (
    <div style={{ 
      width: '100%', 
      maxWidth: '600px', 
      border: status === 'ERROR' ? '1px solid #ef4444' : '1px solid #8b5cf6', 
      backgroundColor: 'rgba(0,0,0,0.9)', 
      padding: '2px', 
      boxShadow: status === 'ERROR' ? '0 0 50px rgba(239, 68, 68, 0.2)' : '0 0 50px rgba(139, 92, 246, 0.15)',
      transition: 'all 0.3s'
    }}>
      {/* HEADER */}
      <div style={{ 
        backgroundColor: status === 'ERROR' ? '#ef4444' : '#8b5cf6', 
        color: 'black', 
        padding: '8px 16px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        fontFamily: 'monospace', 
        fontWeight: 'bold', 
        fontSize: '12px' 
      }}>
        <span>PRIME_PROXY_V1.0</span>
        <span>STATUS: {status}</span>
      </div>

      <div style={{ padding: '30px' }}>
        
        {/* INPUT SECTION */}
        <div style={{ marginBottom: '30px' }}>
          <label style={{ display: 'block', color: status === 'ERROR' ? '#ef4444' : '#8b5cf6', fontFamily: 'monospace', fontSize: '12px', marginBottom: '10px', letterSpacing: '0.1em' }}>
            [1] PASTE_AMAZON_LINK
          </label>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input 
              type="text" 
              placeholder="https://amazon.com/dp/..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              style={{ 
                flexGrow: 1, 
                backgroundColor: '#111', 
                border: '1px solid #333', 
                color: 'white', 
                padding: '12px', 
                fontFamily: 'monospace',
                outline: 'none'
              }} 
            />
            <button 
              onClick={handleAnalyze}
              disabled={status === 'ANALYZING'}
              style={{ 
                backgroundColor: status === 'ERROR' ? '#ef4444' : '#8b5cf6', 
                color: 'black', 
                border: 'none', 
                padding: '0 24px', 
                fontWeight: 'bold', 
                fontFamily: 'monospace', 
                cursor: 'pointer',
                opacity: status === 'ANALYZING' ? 0.5 : 1
              }}
            >
              {status === 'ANALYZING' ? 'SCANNING...' : 'ANALYZE'}
            </button>
          </div>
        </div>

        {/* ERROR STATE */}
        {status === 'ERROR' && (
           <div style={{ border: '1px dashed #ef4444', padding: '20px', backgroundColor: 'rgba(239,68,68,0.05)' }}>
             <p style={{ color: '#ef4444', fontFamily: 'monospace', fontWeight: 'bold', marginBottom: '10px' }}>
               // ERROR: {errorMsg}
             </p>
             <p style={{ color: '#888', fontFamily: 'monospace', fontSize: '12px' }}>
               This item violates our shipping protocol (Weight/Hazard/Type).
             </p>
             <a href="/restrictions" style={{ display: 'inline-block', marginTop: '15px', color: 'white', textDecoration: 'underline', fontSize: '10px', fontFamily: 'monospace', letterSpacing: '0.1em' }}>
               [ VIEW_RESTRICTED_MANIFEST ]
             </a>
           </div>
        )}

        {/* SUCCESS STATE */}
        {status === 'READY' && quote && (
          <div style={{ border: '1px dashed rgba(255,255,255,0.2)', padding: '20px', animation: 'fadeIn 0.5s ease' }}>
            <h3 style={{ margin: '0 0 20px 0', color: 'white', fontFamily: 'monospace', borderBottom: '1px solid #333', paddingBottom: '10px' }}>
              // COST_BREAKDOWN
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontFamily: 'monospace', color: '#ccc', fontSize: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>ITEM_COST:</span>
                <span>${quote.product.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>SHIPPING:</span>
                <span>${quote.shipping.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>DUTIES:</span>
                <span>${quote.duties.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#8b5cf6' }}>
                <span>SERVICE_FEE:</span>
                <span>${quote.service_fee.toFixed(2)}</span>
              </div>
              
              <div style={{ borderTop: '2px solid white', marginTop: '10px', paddingTop: '10px', display: 'flex', justifyContent: 'space-between', fontSize: '20px', color: 'white', fontWeight: 'bold' }}>
                <span>TOTAL:</span>
                <span>${quote.totalUSD}</span>
              </div>
            </div>

            <button style={{ 
              width: '100%', 
              marginTop: '25px', 
              backgroundColor: 'transparent', 
              border: '2px solid #22c55e', 
              color: '#22c55e', 
              padding: '15px', 
              fontWeight: 'bold', 
              fontFamily: 'monospace', 
              fontSize: '16px',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}
            >
              [ PAY_WITH_CRYPTO ]
            </button>
          </div>
        )}
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}