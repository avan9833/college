"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ChevronLeft, 
  CreditCard, 
  Download, 
  History, 
  AlertCircle, 
  CheckCircle2,
  Wallet,
  ArrowRight
} from "lucide-react";

export default function FeesPortal() {
  const [isProcessing, setIsProcessing] = useState(false);

  const feeBreakdown = [
    { item: "Tuition Fee (Sem 4)", amount: "₹95,000", status: "Pending" },
    { item: "Laboratory Charges", amount: "₹12,000", status: "Paid" },
    { item: "Library & Digital Access", amount: "₹5,000", status: "Paid" },
    { item: "Examination Fee", amount: "₹2,500", status: "Pending" },
  ];

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      alert("Redirecting to Secure Payment Gateway...");
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* --- TOP NAV --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/students-corner" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-orange-600 transition-all">
            <ChevronLeft size={14} /> Back to Corner
          </Link>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Finance & Accounts</span>
        </div>
      </nav>

      <section className="pt-40 pb-20 max-w-7xl mx-auto px-6">
        {/* --- HEADER --- */}
        <div className="mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter text-slate-900 leading-none">
              Fees <br /> <span className="text-orange-600">Portal.</span>
            </h1>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* --- LEFT: SUMMARY & BREAKDOWN --- */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* TOTAL DUE CARD */}
            <div className="bg-slate-900 p-10 text-white flex flex-col md:flex-row justify-between items-center group relative overflow-hidden">
               <div className="relative z-10">
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500 mb-4">Total Outstanding</p>
                  <h2 className="text-6xl font-black italic tracking-tighter">₹97,500</h2>
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-4">Due Date: March 15, 2026</p>
               </div>
               <button 
                 onClick={handlePayment}
                 disabled={isProcessing}
                 className="mt-8 md:mt-0 relative z-10 bg-orange-600 hover:bg-white hover:text-orange-600 px-12 py-5 font-black uppercase tracking-widest text-xs transition-all flex items-center gap-3 shadow-2xl"
               >
                 {isProcessing ? "Processing..." : "Pay Balance Now"} <ArrowRight size={16} />
               </button>
               <Wallet className="absolute -bottom-10 -right-10 text-white/5" size={240} />
            </div>

            {/* BREAKDOWN TABLE */}
            <div className="bg-white border border-slate-100 shadow-2xl overflow-hidden">
              <div className="p-8 border-b border-slate-50">
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 flex items-center gap-3">
                  <CreditCard className="text-orange-600" size={18} /> Current Semester Ledger
                </h3>
              </div>
              <table className="w-full text-left">
                <tbody className="divide-y divide-slate-50">
                  {feeBreakdown.map((fee, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-8">
                        <p className="text-sm font-black text-slate-800 uppercase tracking-tight">{fee.item}</p>
                      </td>
                      <td className="p-8 font-black text-slate-900">{fee.amount}</td>
                      <td className="p-8">
                        <span className={`px-4 py-1.5 text-[9px] font-black uppercase tracking-widest rounded-full ${
                          fee.status === "Paid" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                        }`}>
                          {fee.status === "Paid" ? <CheckCircle2 className="inline mr-1" size={10} /> : <AlertCircle className="inline mr-1" size={10} />}
                          {fee.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* --- RIGHT: SIDEBAR --- */}
          <div className="lg:col-span-4 space-y-8">
            {/* PAYMENT HISTORY */}
            <div className="bg-white border border-slate-100 p-8 shadow-xl">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                <History size={14} /> Previous Receipts
              </h3>
              <div className="space-y-4">
                {[
                  { date: "Jan 10, 2026", id: "#VIT-8821", amt: "₹17,000" },
                  { date: "Sept 15, 2025", id: "#VIT-2210", amt: "₹1,05,000" },
                ].map((receipt, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 transition-all cursor-pointer group">
                    <div>
                      <p className="text-[10px] font-black uppercase text-slate-900">{receipt.id}</p>
                      <span className="text-[9px] font-bold text-slate-400 uppercase">{receipt.date}</span>
                    </div>
                    <Download size={14} className="text-slate-300 group-hover:text-orange-600" />
                  </div>
                ))}
              </div>
            </div>

            {/* ADVISORY */}
            <div className="bg-blue-50 p-8 border-l-4 border-blue-600">
               <h4 className="text-[10px] font-black uppercase tracking-widest text-blue-900 mb-2">Scholarship Alert</h4>
               <p className="text-[11px] text-blue-700 font-medium leading-relaxed">
                 You are eligible for the **Merit-Based Scholarship**. The discount will be applied to your Sem 5 invoice automatically.
               </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center">
        <p className="text-[10px] font-black text-slate-300 uppercase tracking-[1em]">VIT Finance Node • 2026</p>
      </footer>
    </main>
  );
}