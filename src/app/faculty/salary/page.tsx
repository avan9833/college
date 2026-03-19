"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, Download, Eye, DollarSign, Calendar, 
  CreditCard, TrendingUp, FileText, CheckCircle,
  PieChart, ArrowUpRight, ShieldCheck, X
} from "lucide-react";

// Advanced Mock Data
const SALARY_HISTORY = [
  { id: 1, month: "January 2026", netPay: 75200, gross: 85000, deductions: 9800, status: "Paid", date: "Jan 31, 2026" },
  { id: 2, month: "December 2025", netPay: 75200, gross: 85000, deductions: 9800, status: "Paid", date: "Dec 31, 2025" },
  { id: 3, month: "November 2025", netPay: 72400, gross: 82000, deductions: 9600, status: "Paid", date: "Nov 30, 2025" },
  { id: 4, month: "October 2025", netPay: 72400, gross: 82000, deductions: 9600, status: "Paid", date: "Oct 31, 2025" },
];

export default function AdvancedSalaryPage() {
  const [selectedSlip, setSelectedSlip] = useState<typeof SALARY_HISTORY[0] | null>(null);
  const [isDownloading, setIsDownloading] = useState<number | null>(null);

  const handleDownload = (id: number) => {
    setIsDownloading(id);
    setTimeout(() => {
      setIsDownloading(null);
      alert("Encryption Verified. Slip Downloaded.");
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-[#0F172A] p-6 pt-24 text-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
            <Link href="/faculty" className="group text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-orange-500 flex items-center gap-2 mb-4 transition">
              <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform"/> Back to Terminal
            </Link>
            <h1 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter leading-none">
              Payroll <span className="text-orange-500 underline decoration-slate-800 underline-offset-8">Vault.</span>
            </h1>
            <div className="flex items-center gap-3 mt-4">
               <span className="bg-emerald-500/10 text-emerald-500 text-[9px] font-black px-3 py-1 rounded-full uppercase border border-emerald-500/20 flex items-center gap-2">
                 <ShieldCheck size={12}/> Verified Faculty Account
               </span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }}
            className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-2 opacity-5 group-hover:opacity-10 transition-opacity">
                <DollarSign size={120} />
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Annual Package (CTC)</p>
            <p className="text-4xl font-black text-white italic tracking-tighter">₹12,40,000</p>
            <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-emerald-500 bg-emerald-500/5 px-3 py-2 rounded-lg">
                <TrendingUp size={14}/> +8% Increment Applied (FY 2025-26)
            </div>
          </motion.div>
        </div>

        {/* --- DYNAMIC STATS --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Net Payable", value: "₹75,200", icon: CreditCard, color: "text-blue-500" },
            { label: "Base Salary", value: "₹85,000", icon: DollarSign, color: "text-orange-500" },
            { label: "Tax Deducted", value: "₹9,800", icon: PieChart, color: "text-red-500" },
            { label: "Next Payout", value: "Feb 28", icon: Calendar, color: "text-emerald-500" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl backdrop-blur-sm"
            >
              <stat.icon className={`${stat.color} mb-4`} size={24} />
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</p>
              <p className="text-2xl font-black text-white italic">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* --- MAIN LEDGER --- */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
          <div className="p-8 border-b border-slate-800 flex justify-between items-center bg-slate-900/80 backdrop-blur-md">
             <div className="flex items-center gap-3">
                <FileText className="text-orange-500" size={24} />
                <h2 className="text-xl font-black uppercase tracking-tighter">Financial Ledger</h2>
             </div>
             <button className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-white transition">Refresh Data</button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-950 text-slate-500 border-b border-slate-800">
                <tr>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest">Billing Period</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-center">Gross Pay</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-center">Net Amount</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-right">Verification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {SALARY_HISTORY.map((item) => (
                  <tr key={item.id} className="hover:bg-white/5 transition-all group cursor-pointer">
                    <td className="p-6" onClick={() => setSelectedSlip(item)}>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-orange-500 font-black italic">
                            {item.month.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-black text-white uppercase italic group-hover:text-orange-500 transition-colors">{item.month}</p>
                          <span className="text-[9px] font-bold text-slate-500 uppercase">TXN-ID: {item.id}092-VG</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-6 text-center text-slate-400 font-bold text-sm">₹{item.gross.toLocaleString()}</td>
                    <td className="p-6 text-center">
                      <p className="text-lg font-black text-white italic">₹{item.netPay.toLocaleString()}</p>
                    </td>
                    <td className="p-6 text-right">
                      <div className="flex justify-end gap-3">
                        <motion.button 
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setSelectedSlip(item)}
                          className="bg-slate-800 hover:bg-orange-600 p-3 rounded-lg text-white transition-colors"
                        >
                          <Eye size={16} />
                        </motion.button>
                        <motion.button 
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleDownload(item.id)}
                          className={`p-3 rounded-lg flex items-center gap-2 font-black text-[10px] uppercase transition-all ${
                            isDownloading === item.id 
                            ? "bg-emerald-600 text-white" 
                            : "bg-slate-800 text-white hover:bg-white hover:text-slate-900"
                          }`}
                        >
                          {isDownloading === item.id ? "SYNCING..." : <Download size={16} />}
                        </motion.button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* --- BREAKDOWN MODAL --- */}
        <AnimatePresence>
          {selectedSlip && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setSelectedSlip(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
              />
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="bg-slate-900 border border-slate-700 w-full max-w-lg rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(249,115,22,0.2)] relative z-10"
              >
                <div className="bg-orange-600 p-6 text-white flex justify-between items-center">
                   <h3 className="font-black uppercase italic tracking-tighter text-xl">Salary Breakdown</h3>
                   <button onClick={() => setSelectedSlip(null)} className="hover:rotate-90 transition-transform">
                      <X size={24}/>
                   </button>
                </div>
                <div className="p-8 space-y-6">
                   <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                      <span className="text-[10px] font-black uppercase text-slate-500">Billing Month</span>
                      <span className="font-black text-white italic">{selectedSlip.month}</span>
                   </div>
                   <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                         <span className="text-slate-400 font-bold">Base Earnings</span>
                         <span className="text-white font-black">₹{selectedSlip.gross.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm text-red-500">
                         <span className="font-bold">Total Deductions</span>
                         <span className="font-black">-₹{selectedSlip.deductions.toLocaleString()}</span>
                      </div>
                   </div>
                   <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex justify-between items-center">
                      <p className="text-[10px] font-black uppercase text-orange-500">Net Payable</p>
                      <p className="text-3xl font-black text-white italic">₹{selectedSlip.netPay.toLocaleString()}</p>
                   </div>
                   <button 
                      onClick={() => handleDownload(selectedSlip.id)}
                      className="w-full bg-white text-slate-900 py-4 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-orange-600 hover:text-white transition-colors"
                   >
                      Download Full Encrypted Slip
                   </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <footer className="mt-20 py-8 border-t border-slate-800 text-center">
           <p className="text-[10px] font-black text-slate-600 uppercase tracking-[1.5em]">Vanguard Secure Payroll Architecture • 2026</p>
        </footer>
      </div>
    </main>
  );
}