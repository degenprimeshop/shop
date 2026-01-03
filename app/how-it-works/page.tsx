import Link from 'next/link';

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#EAEAEA] font-mono p-8 flex flex-col items-center">
      
      {/* HEADER / NAVIGATION BREADCRUMB */}
      <div className="w-full max-w-4xl mb-12 flex justify-between items-center border-b border-[#333] pb-4">
        <h1 className="text-2xl font-bold tracking-tighter text-[#00FF00]">
          /// HOW_IT_WORKS
        </h1>
        <Link href="/" className="hover:text-[#00FF00] hover:underline transition-all">
          [ BACK_TO_SHOP ]
        </Link>
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="max-w-4xl grid gap-8 md:grid-cols-2">
        
        {/* Step 1 */}
        <div className="border border-[#333] p-6 hover:border-[#00FF00] transition-colors group">
          <div className="text-4xl font-black text-[#333] mb-4 group-hover:text-[#00FF00]">
            01
          </div>
          <h2 className="text-xl font-bold mb-2 uppercase">Connect Wallet</h2>
          <p className="text-sm text-gray-400">
            No emails. No passwords. Just connect your Metamask, Phantom, or Rainbow wallet. 
            We read the chain, not your cookies.
          </p>
        </div>

        {/* Step 2 */}
        <div className="border border-[#333] p-6 hover:border-[#00FF00] transition-colors group">
          <div className="text-4xl font-black text-[#333] mb-4 group-hover:text-[#00FF00]">
            02
          </div>
          <h2 className="text-xl font-bold mb-2 uppercase">Secure the Bag</h2>
          <p className="text-sm text-gray-400">
            Browse the drops. Supplies are artificially scarce. If the timer hits zero, 
            the buy button turns into a "Sold Out" tombstone.
          </p>
        </div>

        {/* Step 3 */}
        <div className="border border-[#333] p-6 hover:border-[#00FF00] transition-colors group">
          <div className="text-4xl font-black text-[#333] mb-4 group-hover:text-[#00FF00]">
            03
          </div>
          <h2 className="text-xl font-bold mb-2 uppercase">Sign & Pay</h2>
          <p className="text-sm text-gray-400">
            Pay in ETH, SOL, or USDC. Smart contracts handle the settlement instantly.
            Tx Hash is your receipt.
          </p>
        </div>

        {/* Step 4 */}
        <div className="border border-[#333] p-6 hover:border-[#00FF00] transition-colors group">
          <div className="text-4xl font-black text-[#333] mb-4 group-hover:text-[#00FF00]">
            04
          </div>
          <h2 className="text-xl font-bold mb-2 uppercase">IRL Delivery</h2>
          <p className="text-sm text-gray-400">
            Enter shipping details encrypted. We ship global.
            Then you go touch grass while you wait.
          </p>
        </div>

      </div>

      {/* FOOTER CTA */}
      <div className="mt-16 text-center">
        <Link 
          href="/"
          className="bg-[#00FF00] text-black font-bold py-4 px-12 hover:bg-white hover:scale-105 transition-transform"
        >
          START SHOPPING
        </Link>
      </div>

    </div>
  );
}