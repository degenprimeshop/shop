"use client";

import Link from 'next/link';

export default function Restrictions() {
  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-6 selection:bg-green-900 selection:text-white">
      
      {/* HEADER */}
      <nav className="mb-12 border-b border-green-900 pb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tighter uppercase">
          /// RESTRICTED_ITEMS_LIST
        </h1>
        <Link 
          href="/" 
          className="text-sm hover:text-green-300 hover:underline uppercase tracking-widest"
        >
          [ Return to Base ]
        </Link>
      </nav>

      <main className="max-w-3xl mx-auto space-y-12">
        
        {/* WARNING BOX */}
        <div className="border border-red-900/50 bg-red-900/10 p-6 rounded-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-red-600"></div>
          <h2 className="text-red-500 font-bold mb-2 uppercase tracking-widest flex items-center gap-2">
            <span className="animate-pulse">⚠️</span> Compliance Notice
          </h2>
          <p className="text-red-400/80 text-sm leading-relaxed">
            The following items are strictly prohibited from our logistics network. 
            Attempting to ship these items will result in immediate order cancellation and account termination.
          </p>
        </div>

        {/* LIST 1: DANGEROUS GOODS */}
        <section>
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-green-500">01.</span> HAZARDOUS MATERIALS
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-green-400/80 marker:text-green-600">
            <li>Explosives, Ammunition, or Firearms of any kind.</li>
            {/* FIXED LINE BELOW: Changed '>' to 'over' */}
            <li>Chemicals, Fuels, or Lithium Batteries over 100Wh.</li>
            <li>Radioactive materials or biohazards.</li>
            <li>Fireworks or pyrotechnic devices.</li>
          </ul>
        </section>

        {/* LIST 2: LEGAL RESTRICTIONS */}
        <section>
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-green-500">02.</span> REGIONAL RESTRICTIONS
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-green-400/80 marker:text-green-600">
            <li>Alcohol, Tobacco, or Prescription Drugs.</li>
            <li>Perishable foods (Fresh Fruit, Meat, Dairy).</li>
            <li>Live animals or taxidermy.</li>
            <li>Currency, Bullion, or Precious Stones.</li>
          </ul>
        </section>

        {/* FOOTER NOTE */}
        <div className="pt-12 text-center">
          <p className="text-xs text-green-800 uppercase tracking-widest">
            Compliance Protocol v2.0 // Degen Prime Logistics
          </p>
        </div>

      </main>
    </div>
  );
}