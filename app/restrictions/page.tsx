"use client";

import Link from 'next/link';

export default function Restrictions() {
  return (
    <div className="min-h-screen bg-black text-white font-mono p-10 flex flex-col items-center">
      
      <div className="max-w-2xl w-full border border-red-900/50 p-8 shadow-[0_0_50px_rgba(220,38,38,0.1)] relative overflow-hidden">
        {/* BACKGROUND WARNING STRIPES */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-transparent to-red-600" />
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black italic text-red-600 tracking-tighter mb-2">PROTOCOL_RESTRICTIONS</h1>
          <p className="text-xs tracking-[0.3em] text-red-400/60 uppercase">
            // DO_NOT_REQUEST_THE_FOLLOWING_ITEMS //
          </p>
        </div>

        <div className="space-y-8 text-sm">
          {/* CATEGORY 1 */}
          <div>
            <h3 className="text-red-500 font-bold uppercase tracking-widest border-b border-red-900/30 pb-2 mb-4">
              [01] HEAVY_LOGISTICS_LIMIT
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Items exceeding <strong>50lbs (22kg)</strong> (e.g., Gym Weights, Car Tires).</li>
              <li>Furniture requiring freight shipping (Couches, Mattresses).</li>
              <li>Large Appliances (Refrigerators, Washing Machines).</li>
            </ul>
          </div>

          {/* CATEGORY 2 */}
          <div>
            <h3 className="text-red-500 font-bold uppercase tracking-widest border-b border-red-900/30 pb-2 mb-4">
              [02] HAZMAT_&_PERISHABLES
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Explosives, Ammunition, or Firearms.</li>
              <li>Chemicals, Fuels, or Lithium Batteries > 100Wh.</li>
              <li>Fresh Food, Live Animals, or Temperature-Controlled Goods.</li>
            </ul>
          </div>

          {/* CATEGORY 3 */}
          <div>
            <h3 className="text-red-500 font-bold uppercase tracking-widest border-b border-red-900/30 pb-2 mb-4">
              [03] DIGITAL_&_RESTRICTED
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Gift Cards, Sim Cards, or Digital Vouchers.</li>
              <li>Subscription Services.</li>
              <li>Age-Restricted items requiring ID on delivery (Alcohol, Tobacco).</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center border-t border-red-900/30 pt-8">
          <Link href="/" className="inline-block border border-red-600 text-red-600 px-8 py-3 text-xs uppercase tracking-[0.2em] hover:bg-red-600 hover:text-black transition-all">
            [ ACKNOWLEDGE_&_RETURN ]
          </Link>
        </div>

      </div>
    </div>
  );
}