"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  Send, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Calendar, 
  FileText,
  AlertCircle,
  Plus
} from "lucide-react";

// Mock Leave History
const LEAVE_HISTORY = [
  { id: 1, type: "Sick Leave", duration: "2 Days", date: "Jan 10 - Jan 12", status: "Approved" },
  { id: 2, type: "Casual Leave", duration: "1 Day", date: "Dec 05 - Dec 05", status: "Approved" },
  { id: 3, type: "Research Leave", duration: "5 Days", date: "Feb 20 - Feb 25", status: "Pending" },
];

export default function LeavePortalPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] p-6 pt-24">
      <div className="max-w-6xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div>
            <Link href="/faculty" className="group text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-orange-600 flex items-center gap-2 mb-2 transition">
              <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform"/> Back to Dashboard
            </Link>
            <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-slate-900 leading-none">
              Leave <span className="text-orange-600">Portal.</span>
            </h1>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-2">
              Faculty Node: FAC-8821 | Academic Year 2026
            </p>
          </div>
        </div>

        {/* --- LEAVE BALANCE CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Annual Leave", count: 12, total: 15, color: "text-blue-600" },
            { label: "Sick Leave", count: 8, total: 10, color: "text-emerald-600" },
            { label: "Research Leave", count: 2, total: 5, color: "text-orange-600" },
            { label: "Casual Leave", count: 4, total: 8, color: "text-slate-600" },
          ].map((leave, i) => (
            <div key={i} className="bg-white p-6 border border-slate-100 shadow-lg">
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">{leave.label}</p>
              <div className="flex items-baseline gap-1">
                <span className={`text-3xl font-black italic ${leave.color}`}>{leave.count}</span>
                <span className="text-xs font-bold text-slate-300">/ {leave.total}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* --- APPLICATION FORM --- */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-slate-200 shadow-2xl p-8">
              <h2 className="text-xl font-black uppercase tracking-tighter mb-8 flex items-center gap-3">
                <Plus className="text-orange-600" size={24} /> New Application
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-slate-400">Leave Type</label>
                    <select className="w-full p-4 bg-slate-50 border border-slate-200 outline-none focus:border-orange-500 font-bold text-sm transition-all appearance-none cursor-pointer">
                      <option>Sick Leave</option>
                      <option>Casual Leave</option>
                      <option>Research Leave</option>
                      <option>Annual Leave</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-slate-400">Duration (Days)</label>
                    <input type="number" placeholder="e.g. 2" className="w-full p-4 bg-slate-50 border border-slate-200 outline-none focus:border-orange-500 font-bold text-sm transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-slate-400">Start Date</label>
                    <input type="date" className="w-full p-4 bg-slate-50 border border-slate-200 outline-none focus:border-orange-500 font-bold text-sm transition-all" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-slate-400">End Date</label>
                    <input type="date" className="w-full p-4 bg-slate-50 border border-slate-200 outline-none focus:border-orange-500 font-bold text-sm transition-all" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-slate-400">Reason for Leave</label>
                  <textarea rows={4} placeholder="Briefly explain the purpose..." className="w-full p-4 bg-slate-50 border border-slate-200 outline-none focus:border-orange-500 font-bold text-sm transition-all resize-none"></textarea>
                </div>

                <button 
                  disabled={isSubmitting}
                  className="w-full bg-slate-900 text-white font-black py-5 uppercase tracking-[0.2em] text-xs hover:bg-orange-600 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {isSubmitting ? "Syncing Request..." : <><Send size={16} /> Submit Application</>}
                </button>
              </form>

              <AnimatePresence>
                {showSuccess && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-6 p-4 bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center gap-3 rounded-sm">
                    <CheckCircle size={18} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Application transmitted to Registrar Node.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* --- HISTORY SIDEBAR --- */}
          <div className="space-y-8">
            <div className="bg-slate-900 p-8 text-white rounded-sm shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-black uppercase italic tracking-tighter mb-6 border-b border-white/10 pb-4 flex items-center gap-2">
                  <Clock size={20} className="text-orange-500"/> Recent Logs
                </h3>
                <div className="space-y-6">
                  {LEAVE_HISTORY.map((leave) => (
                    <div key={leave.id} className="border-l-2 border-white/10 pl-4 py-1">
                      <div className="flex justify-between items-start mb-1">
                        <p className="text-xs font-black uppercase italic">{leave.type}</p>
                        <span className={`text-[8px] font-black uppercase px-2 py-0.5 rounded-sm ${
                          leave.status === 'Approved' ? 'bg-emerald-500 text-white' : 'bg-orange-500 text-white'
                        }`}>
                          {leave.status}
                        </span>
                      </div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{leave.date}</p>
                    </div>
                  ))}
                </div>
              </div>
              <Calendar size={120} className="absolute -bottom-10 -right-10 text-white/5" />
            </div>

            <div className="bg-amber-50 border border-amber-100 p-6 flex items-start gap-4">
              <AlertCircle className="text-amber-600" size={24} />
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-amber-900 mb-1">Submission Policy</h4>
                <p className="text-[10px] font-bold text-amber-700 leading-relaxed uppercase">
                  Leave requests must be submitted at least 48 hours in advance, except for medical emergencies.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-[1em]">Vanguard Personnel Node • 2026</p>
        </div>
      </div>
    </main>
  );
}