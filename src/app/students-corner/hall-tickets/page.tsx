"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Download, 
  ShieldCheck, 
  Calendar, 
  MapPin, 
  User, 
  Printer, 
  AlertTriangle,
  QrCode
} from "lucide-react";

export default function HallTicketPage() {
  const examSchedule = [
    { subject: "Data Structures & Algorithms", code: "CS401", date: "May 12, 2026", time: "10:00 AM - 01:00 PM" },
    { subject: "Operating Systems", code: "CS402", date: "May 15, 2026", time: "10:00 AM - 01:00 PM" },
    { subject: "Database Management", code: "CS403", date: "May 18, 2026", time: "10:00 AM - 01:00 PM" },
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] pb-20">
      {/* --- TOP HEADER --- */}
      <section className="bg-slate-950 pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-orange-500 font-black uppercase tracking-[0.5em] text-[10px]">Examination Portal</span>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter mt-4 leading-none">
              Hall <span className="text-orange-600">Ticket.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* LEFT: THE TICKET PREVIEW */}
          <div className="lg:col-span-8">
            <div className="bg-white border border-slate-200 shadow-2xl overflow-hidden print:shadow-none print:border-none">
              
              {/* Ticket Header */}
              <div className="bg-slate-50 p-8 border-b border-slate-100 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center font-black italic">V</div>
                  <div className="leading-tight">
                    <h2 className="text-sm font-black uppercase tracking-widest text-slate-900">Vanguard Institute</h2>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">End Term Exams - May 2026</p>
                  </div>
                </div>
                <QrCode size={40} className="text-slate-300" />
              </div>

              {/* Student Info */}
              <div className="p-8 grid md:grid-cols-2 gap-8 border-b border-slate-50">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <User size={16} className="text-orange-600" />
                    <div>
                      <p className="text-[9px] font-black text-slate-400 uppercase">Student Name</p>
                      <p className="text-sm font-black text-slate-900 uppercase">Avan pal</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheck size={16} className="text-orange-600" />
                    <div>
                      <p className="text-[9px] font-black text-slate-400 uppercase">Enrollment No.</p>
                      <p className="text-sm font-black text-slate-900">VIT/2026/0441</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin size={16} className="text-orange-600" />
                    <div>
                      <p className="text-[9px] font-black text-slate-400 uppercase">Exam Center</p>
                      <p className="text-sm font-black text-slate-900 uppercase">Academic Block B, Floor 2</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Exam Table */}
              <div className="p-8">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">Confirmed Schedule</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-slate-100 text-[9px] font-black uppercase text-slate-500">
                        <th className="pb-4">Code</th>
                        <th className="pb-4">Subject</th>
                        <th className="pb-4">Date</th>
                        <th className="pb-4 text-right">Time</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {examSchedule.map((exam, i) => (
                        <tr key={i} className="text-[11px] font-bold text-slate-800">
                          <td className="py-4">{exam.code}</td>
                          <td className="py-4 uppercase">{exam.subject}</td>
                          <td className="py-4">{exam.date}</td>
                          <td className="py-4 text-right">{exam.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Footer Instruction */}
              <div className="p-8 bg-slate-50 text-center">
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                  This is a computer-generated document. No signature required.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: ACTIONS & RULES */}
          <div className="lg:col-span-4 space-y-6">
            <button 
              onClick={() => window.print()}
              className="w-full bg-orange-600 hover:bg-slate-900 text-white p-6 font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all shadow-2xl"
            >
              <Download size={18} /> Download PDF
            </button>
            
            <div className="bg-white border border-slate-100 p-8 shadow-xl">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-900 mb-6 flex items-center gap-2">
                <AlertTriangle className="text-orange-600" size={14} /> Exam Rules
              </h4>
              <ul className="space-y-4">
                {[
                  "Reporting time is 30 mins before exam.",
                  "Carry original Student ID card.",
                  "Mobile phones & smartwatches are strictly prohibited.",
                  "Carry your own stationery (pens, rulers)."
                ].map((rule, i) => (
                  <li key={i} className="flex gap-3 text-[10px] font-bold text-slate-500 leading-relaxed border-b border-slate-50 pb-2">
                    <span className="text-orange-600">0{i+1}.</span> {rule}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-900 p-8 text-white">
              <Printer className="text-orange-600 mb-4" />
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Print Support</p>
              <p className="text-xs font-medium leading-relaxed mt-2">
                If the barcode is not visible, try printing in **Portrait Mode** with 100% scale.
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}