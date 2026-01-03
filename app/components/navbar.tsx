'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="w-full border-b border-[#333] bg-[#050505] text-[#EAEAEA] font-mono sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-black tracking-tighter hover:text-[#00FF00] transition-colors">
              DEGEN_PRIME
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                href="/" 
                className={`px-3 py-2 text-sm font-bold uppercase transition-colors ${
                  isActive('/') ? 'text-[#00FF00]' : 'text-gray-400 hover:text-white'
                }`}
              >
                Shop
              </Link>
              <Link 
                href="/how-it-works" 
                className={`px-3 py-2 text-sm font-bold uppercase transition-colors ${
                  isActive('/how-it-works') ? 'text-[#00FF00]' : 'text-gray-400 hover:text-white'
                }`}
              >
                How_It_Works
              </Link>
            </div>
          </div>

          <div>
            <button className="bg-[#111] border border-[#333] hover:border-[#00FF00] hover:text-[#00FF00] text-white px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all">
              [ CONNECT_WALLET ]
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}