"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Shield, Eye, Database, Lock, Globe, FileText } from "lucide-react";
import Navbar from "@/components/landing/Navbar";

export default function PrivacyPage() {
  const sections = [
    {
      icon: <Database size={20} />,
      title: "Data Collection",
      content: "We collect personal identification information including Registration IDs, academic records, and portal usage logs to provide seamless university services. This data is encrypted at rest using AES-256 protocols."
    },
    {
      icon: <Lock size={20} />,
      title: "Security Nodes",
      content: "Access to faculty and student portals is gated via role-based authentication. We do not store plain-text passwords; all credentials are salted and hashed before entering our master ledger."
    },
    {
      icon: <Eye size={20} />,
      title: "Transparency",
      content: "VIT University does not trade, sell, or rent user data to third-party marketing entities. Information is only shared with authorized academic bodies and government regulatory agencies."
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
              <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform"/> Return to Terminal
            </Link>
            <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
              Privacy <span className="text-orange-600">Protocol.</span>
            </h1>
            <p className="text-slate-400 text-sm mt-6 font-bold uppercase tracking-[0.2em] max-w-2xl">
              Last Updated: <span className="text-white">February 2026</span> • Version 4.2.0
            </p>
          </motion.div>
        </div>
        <div className="absolute -bottom-20 -right-20 opacity-5 select-none pointer-events-none text-[20rem] font-black italic uppercase text-white">
          SECURE
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {sections.map((sec, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="text-orange-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {sec.icon}
              </div>
              <h3 className="text-xl font-black uppercase italic tracking-tight mb-4 text-slate-900">
                {sec.title}
              </h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                {sec.content}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="bg-white border-2 border-slate-900 p-10 md:p-16 shadow-[20px_20px_0px_#0f172a]">
          <div className="flex items-center gap-4 mb-10 border-b border-slate-100 pb-6">
            <Shield className="text-orange-600" size={32} />
            <h2 className="text-3xl font-black uppercase italic tracking-tighter">Legal Provisions</h2>
          </div>

          <div className="space-y-10 prose prose-slate max-w-none">
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-4 flex items-center gap-2">
                <Globe size={16} className="text-orange-600" /> 1. Cookies & Tracking
              </h4>
              <p className="text-sm font-medium text-slate-600 leading-relaxed uppercase">
                Our node uses essential cookies to maintain session states for logged-in faculty and students. We do not use tracking pixels or cross-site behavioral analytics.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-4 flex items-center gap-2">
                <FileText size={16} className="text-orange-600" /> 2. User Rights
              </h4>
              <p className="text-sm font-medium text-slate-600 leading-relaxed uppercase">
                Users have the right to request a complete export of their academic and personal data stored on our servers. Requests must be sent via the official portal settings.
              </p>
            </div>

            <div className="bg-slate-50 p-6 border-l-4 border-orange-600 italic">
              <p className="text-xs font-bold text-slate-700 leading-relaxed uppercase">
                By accessing the VIT University portal, you acknowledge and agree to the encryption protocols and data management policies outlined in this document.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-20 border-t border-slate-100 text-center">
        <p className="text-[10px] font-black text-slate-300 uppercase tracking-[1em] mb-4">
          Vanguard Privacy Node • 2026
        </p>
      </footer>
    </main>
  );
}