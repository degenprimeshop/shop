"use client";

import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { 
  Package, Truck, Printer, Terminal, Search, Database, Lock, Trash2, 
  RotateCcw, AlertTriangle, CheckCircle, ArrowLeft
} from 'lucide-react';
import Link from 'next/link';

// --- TYPES ---
type OrderStatus = 'PENDING_PAYMENT' | 'PROCUREMENT' | 'CLEANING' | 'SHIPPING' | 'DELIVERED';

interface Order {
  id: string; created_at: string; tx_hash: string; item_name: string; 
  customer_handle: string; value_usd: number; status: OrderStatus; flagged: boolean;
}

export default function AdminDashboard() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  // --- NO PASSWORD CHECK ---
  // The useEffect that kicked you out is GONE.
  
  useEffect(() => {
    fetchOrders();
  }, []);

  async function fetchOrders() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      if (data) setOrders(data as Order[]);
    } catch (error) { console.error(error); } finally { setLoading(false); }
  }

  // --- CONTROLS ---
  async function updateStatus(id: string, newStatus: OrderStatus) {
    setOrders(c => c.map(o => o.id === id ? { ...o, status: newStatus } : o));
    await supabase.from('orders').update({ status: newStatus }).eq('id', id);
  }

  async function toggleFlag(id: string, currentFlag: boolean) {
    setOrders(c => c.map(o => o.id === id ? { ...o, flagged: !currentFlag } : o));
    await supabase.from('orders').update({ flagged: !currentFlag }).eq('id', id);
  }

  async function deleteOrder(id: string) {
    if (!confirm('CONFIRM PURGE?')) return;
    setOrders(c => c.filter(o => o.id !== id));
    await supabase.from('orders').delete().eq('id', id);
  }

  // --- UI COMPONENTS ---
  const StatusBadge = ({ status }: { status: OrderStatus }) => {
    const s: Record<string, string> = {
      'PENDING_PAYMENT': 'text-orange-500 border-orange-500/50 bg-orange-500/10 animate-pulse',
      'PROCUREMENT': 'text-blue-400 border-blue-400/50 bg-blue-400/10',
      'CLEANING': 'text-purple-400 border-purple-400/50 bg-purple-400/10',
      'SHIPPING': 'text-green-400 border-green-400/50 bg-green-400/10',
      'DELIVERED': 'text-zinc-500 border-zinc-500/50 bg-zinc-500/10 line-through',
    };
    return <span className={`text-[10px] font-black px-2 py-1 border tracking-widest uppercase ${s[status] || 'text-zinc-500'}`}>[{status.replace('_', ' ')}]</span>;
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 font-mono selection:bg-green-500/30 overflow-hidden flex flex-col">
      {/* BACKGROUND FX */}
      <div className="fixed inset-0 pointer-events-none z-[60] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%] opacity-20" />

      {/* HEADER */}
      <header className="h-24 border-b border-zinc-800 bg-black/95 flex items-center justify-between px-6 z-50">
        <div className="flex items-center gap-5">
          <div className="relative w-14 h-14 bg-zinc-900 border border-zinc-700 overflow-hidden">
             <img src="/ape1.png" alt="Admin" className="w-full h-full object-cover grayscale brightness-110 contrast-125" />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-black italic tracking-tighter text-white uppercase leading-none drop-shadow-[2px_2px_0_rgba(147,51,234,0.5)]">DEGEN_PRIME</h1>
            <div className="flex items-center gap-3 mt-1"><span className="text-zinc-500 text-[10px] tracking-[0.3em] font-bold uppercase">NJ_NODE // COMMAND</span></div>
          </div>
        </div>

        {/* TOP RIGHT CONTROLS */}
        <div className="flex items-center gap-8 text-[10px] font-bold tracking-[0.2em] text-zinc-500">
           <div className="flex items-center gap-2 group cursor-help text-green-500">
             <Lock size={14} /><span>SYSTEM_UNLOCKED</span>
           </div>
           
           <Link href="/" className="flex items-center gap-2 hover:text-white transition-colors uppercase border border-zinc-800 bg-zinc-900 px-4 py-2 hover:bg-zinc-800">
             <ArrowLeft size={14} /><span>EXIT_TO_STORE</span>
           </Link>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative z-10">
        {/* SIDEBAR */}
        <aside className="w-64 bg-black border-r border-zinc-800 flex flex-col">
          <div className="p-6 border-b border-zinc-900">
             <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-4">Module_Select</div>
             <nav className="space-y-2">
               <button onClick={fetchOrders} className="w-full flex items-center gap-3 bg-zinc-900/50 border border-green-500/30 text-green-400 p-3 text-[12px] font-bold tracking-widest uppercase shadow-[inset_0_0_10px_rgba(34,197,94,0.1)] hover:bg-zinc-800 transition-all"><Terminal size={16} />Dispatcher</button>
               <button className="w-full flex items-center gap-3 text-zinc-600 p-3 text-[12px] font-bold tracking-widest uppercase cursor-not-allowed"><Package size={16} />Inventory [LOCKED]</button>
             </nav>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 bg-zinc-950 p-8 overflow-y-auto relative">
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none opacity-50" />
           <div className="relative z-10 max-w-6xl mx-auto">
             <div className="bg-black border border-zinc-800 shadow-2xl">
               {/* TOOLBAR */}
               <div className="p-4 border-b border-zinc-800 flex justify-between items-center">
                 <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-700 px-3 py-2 w-96"><Search size={14} className="text-zinc-500"/><input type="text" placeholder="SEARCH..." className="bg-transparent border-none outline-none text-[12px] text-white w-full font-mono uppercase" /></div>
                 <button onClick={fetchOrders} className="bg-purple-600 hover:bg-purple-500 text-black text-[10px] font-black px-4 py-2 uppercase tracking-widest transition-colors">FORCE_REFRESH</button>
               </div>

               {/* TABLE */}
               <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                   <thead><tr className="border-b border-zinc-800 text-[10px] text-zinc-500 uppercase tracking-widest bg-zinc-900/50"><th className="p-4">TX_HASH</th><th className="p-4">ITEM</th><th className="p-4">USER</th><th className="p-4">VALUE</th><th className="p-4">STATUS</th><th className="p-4 text-right">CONTROLS</th></tr></thead>
                   <tbody className="text-[12px] font-bold">
                     {loading ? (<tr><td colSpan={6} className="p-8 text-center text-green-500 animate-pulse tracking-widest">/// SYNCING...</td></tr>) : orders.map((order) => (
                       <tr key={order.id} className="border-b border-zinc-900 hover:bg-zinc-900/40 transition-colors group">
                         <td className="p-4 font-mono text-zinc-400">{order.tx_hash}</td>
                         <td className="p-4 text-white uppercase">{order.item_name} {order.flagged && <span className="ml-2 text-[9px] text-red-500 bg-red-900/20 px-1 border border-red-900">FLAG</span>}</td>
                         <td className="p-4 text-zinc-400">{order.customer_handle}</td>
                         <td className="p-4 text-green-500">${order.value_usd.toLocaleString()}</td>
                         <td className="p-4"><StatusBadge status={order.status} /></td>
                         <td className="p-4 text-right"><div className="flex justify-end gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                             {/* RESET */}
                             <button onClick={() => updateStatus(order.id, 'PENDING_PAYMENT')} className="p-1.5 hover:bg-zinc-800 text-zinc-500 hover:text-white rounded"><RotateCcw size={14} /></button>
                             {/* FLAG */}
                             <button onClick={() => toggleFlag(order.id, order.flagged)} className={`p-1.5 hover:bg-zinc-800 rounded ${order.flagged ? 'text-red-500' : 'text-zinc-500 hover:text-red-500'}`}><AlertTriangle size={14} /></button>
                             <div className="w-px h-4 bg-zinc-800 mx-1 self-center" />
                             {/* PRINT */}
                             <button onClick={() => updateStatus(order.id, 'PROCUREMENT')} className="p-1.5 hover:bg-blue-900/20 text-zinc-400 hover:text-blue-400 rounded"><Printer size={14} /></button>
                             {/* SHIP */}
                             <button onClick={() => updateStatus(order.id, 'SHIPPING')} className="p-1.5 hover:bg-green-900/20 text-zinc-400 hover:text-green-400 rounded"><Truck size={14} /></button>
                             {/* COMPLETE */}
                             <button onClick={() => updateStatus(order.id, 'DELIVERED')} className="p-1.5 hover:bg-purple-900/20 text-zinc-400 hover:text-purple-400 rounded"><CheckCircle size={14} /></button>
                             {/* DELETE */}
                             <button onClick={() => deleteOrder(order.id)} className="p-1.5 hover:bg-red-900/20 text-zinc-400 hover:text-red-500 rounded ml-2"><Trash2 size={14} /></button>
                           </div></td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
             </div>
           </div>
        </main>
      </div>
    </div>
  );
}