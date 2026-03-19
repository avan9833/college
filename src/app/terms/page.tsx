"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Scale, ShieldCheck, AlertTriangle, FileText, Fingerprint, Terminal } from "lucide-react";
import Navbar from "@/components/landing/Navbar";

export default function TermsPage() {
  const provisions = [
    {
      icon: <Fingerprint size={20} />,
      title: "Identity Access",
      content: "Users are responsible for maintaining the confidentiality of their Portal IDs and Master Passwords. Any action performed under an authenticated Node is legally attributed to the account holder."
    },
    {
      icon: <Terminal size={20} />,
      title: "System Integrity",
      content: "Any attempt to bypass security gates, perform SQL injections, or scrape academic data via unauthorized scripts will result in immediate session termination and academic disciplinary action."
    },
    {
      icon: <Scale size={20} />,
      title: "Academic Honesty",
      content: "Data submitted via the Grading Center or Research Portal must be authentic. Falsification of academic records on the Vanguard Ledger is a violation of University Bylaws."
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      
      {/* --- HERO SECTION --- */}
      <section className="pt-40 pb-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link href="/" className="group text-[10px] font-black uppercase tracking-widest text-orange-500 flex items-center gap-2 mb-6 transition">
              <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform"/> Exit Legal Terminal
            </Link>
            <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
              Terms of <span className="text-orange-600">Service.</span>
            </h1>
            <p className="text-slate-400 text-sm mt-6 font-bold uppercase tracking-[0.2em] max-w-2xl">
              Compliance Framework <span className="text-white">v2026.1</span> • Governing Academic Conduct
            </p>
          </motion.div>
        </div>
        <div className="absolute -bottom-20 -right-20 opacity-5 select-none pointer-events-none text-[20rem] font-black italic uppercase text-white">
          POLICY
        </div>
      </section>

      {/* --- CORE PROVISIONS --- */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {provisions.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-t-2 border-slate-200 pt-8"
            >
              <div className="text-orange-600 mb-6">{item.icon}</div>
              <h3 className="text-lg font-black uppercase italic tracking-tight mb-4 text-slate-900">
                {item.title}
              </h3>
              <p className="text-slate-500 text-xs font-bold leading-relaxed uppercase">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* --- DETAILED TERMS BOX --- */}
        <div className="bg-white border-2 border-slate-900 shadow-[20px_20px_0px_#ea580c]">
          <div className="p-8 border-b-2 border-slate-900 bg-slate-50 flex items-center justify-between">
            <div className="flex items-center gap-4">
               <FileText className="text-slate-900" size={24} />
               <h2 className="text-2xl font-black uppercase tracking-tighter italic text-slate-900">User Agreement</h2>
            </div>
            <span className="text-[9px] font-black uppercase tracking-widest bg-slate-900 text-white px-3 py-1">Code: VIT-LEGAL-01</span>
          </div>

          <div className="p-10 md:p-16 space-y-12">
            <section>
              <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-4 flex items-center gap-2 underline decoration-orange-500 underline-offset-4">
                01. Authorized Usage
              </h4>
              <p className="text-sm font-medium text-slate-600 leading-relaxed uppercase">
                The VIT University portal (Vanguard Node) is provided exclusively for active students and faculty. Commercial use of the data, extraction of student directories, or use of the portal for non-academic solicitation is strictly prohibited.
              </p>
            </section>

            <section>
              <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-4 flex items-center gap-2 underline decoration-orange-500 underline-offset-4">
                02. Data Accuracy
              </h4>
              <p className="text-sm font-medium text-slate-600 leading-relaxed uppercase">
                While we strive for 100% uptime and data accuracy, the university is not liable for technical delays in result publishing or attendance synchronization caused by network node failures.
              </p>
            </section>

            <div className="bg-red-50 border border-red-100 p-6 flex items-start gap-4">
              <AlertTriangle className="text-red-600 shrink-0" size={24} />
              <div>
                <h5 className="text-[10px] font-black uppercase text-red-900 mb-1">Termination Clause</h5>
                <p className="text-[10px] font-bold text-red-700 leading-relaxed uppercase italic">
                  Violation of these terms results in immediate account suspension and a report generated to the Dean of Academic Affairs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-20 border-t border-slate-100 text-center">
        <p className="text-[10px] font-black text-slate-300 uppercase tracking-[1em] mb-4">
          Vanguard Legal Node • 2026
        </p>
      </footer>
    </main>
  );
}