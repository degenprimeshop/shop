"use client";
import { useEffect, useState } from 'react';

export default function Ticker() {
  // Initialize with placeholder text to prevent mismatch
  const [prices, setPrices] = useState({ btc: 'LOADING...', eth: 'LOADING...', gas: '...' });

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd');
        const data = await res.json();
        
        // We generate the random gas price HERE, inside the Effect (Client side only)
        const randomGas = Math.floor(Math.random() * (20 - 10 + 1) + 10);

        setPrices({
          btc: `$${data.bitcoin.usd.toLocaleString()}`,
          eth: `$${data.ethereum.usd.toLocaleString()}`,
          gas: `${randomGas} GWEI`
        });
      } catch (error) {
        console.error("Price feed offline", error);
        setPrices({ btc: '$69,420', eth: '$2,240', gas: '15 GWEI' }); 
      }
    };

    fetchPrices();
    
    // Update every 60 seconds
    const interval = setInterval(fetchPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: '100%', backgroundColor: '#8b5cf6', overflow: 'hidden', borderBottom: '2px solid black', padding: '8px 0', position: 'relative' }}>
      
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          display: flex;
          white-space: nowrap;
          animation: marquee 20s linear infinite;
        }
      `}</style>

      <div className="ticker-track">
        {[1, 2, 3, 4].map((key) => (
          <div key={key} style={{ display: 'flex', gap: '40px', paddingRight: '40px', color: 'black', fontWeight: '900', fontFamily: 'monospace', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            <span>ETH: {prices.eth}</span>
            <span>+++</span>
            <span>GAS: {prices.gas}</span>
            <span>+++</span>
            <span>BTC: {prices.btc}</span>
            <span>+++</span>
            <span>SUPPLY_SHOCK_IMMINENT</span>
            <span>+++</span>
            <span>DO_NOT_FADE_THE_PRIME</span>
            <span>+++</span>
          </div>
        ))}
      </div>
    </div>
  );
}