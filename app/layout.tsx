import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Loading the "Hacker/Terminal" font globally
const mono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DEGEN PRIME",
  description: "Logistics Layer v3.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* GLOBAL STYLES:
         - Background: #050505 (Deep Black)
         - Text: Zinc-300 (Gray/Silver)
         - Font: JetBrains Mono
      */}
      <body className={`${mono.className} bg-[#050505] text-zinc-300 min-h-screen antialiased selection:bg-purple-500/30`}>
        
        {/* CRITICAL CHANGE:
            The global <Header> is removed from here. 
            This prevents the "Double Logo" glitch on your Admin Dashboard.
        */}
        
        {children}
        
      </body>
    </html>
  );
}