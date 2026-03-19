"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, FlaskConical, BookOpen, Globe, Plus, 
  FileText, Award, ChevronRight, ExternalLink, X, 
  Send, ShieldCheck, Microscope
} from "lucide-react";

// Mock Data
const ONGOING_PROJECTS = [
  { id: 1, title: "Neural Network Optimization for Edge Devices", funding: "₹4.5L", status: "In Progress", type: "Core AI" },
  { id: 2, title: "Quantum Cryptography in Banking Systems", funding: "₹12.0L", status: "Under Review", type: "Cybersecurity" },
];

const PUBLICATIONS = [
  { id: 101, title: "Advancements in Transformer Models", journal: "IEEE Transactions", year: "2025", citations: 42 },
  { id: 102, title: "Sustainable Computing Architectures", journal: "Nature Electronics", year: "2024", citations: 128 },
];

export default function ResearchPortalPage() {
  const [activeTab, setActiveTab] = useState("projects");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleGrantSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsModalOpen(false);
      alert("Research Proposal Encrypted and Sent to Review Board.");
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] p-6 pt-24">
      <div className="max-w-6xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <Link href="/faculty" className="group text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-orange-600 flex items-center gap-2 mb-2 transition">
              <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform"/> Back to Terminal
            </Link>
            <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-slate-900 leading-none">
              Research <span className="text-orange-600">Portal.</span>
            </h1>
          </motion.div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="bg-slate-900 text-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-orange-600 transition flex items-center gap-3 shadow-xl"
          >
            <Plus size={16} /> New Proposal
          </motion.button>
        </div>

        {/* --- STATS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            { label: "Publications", val: "28", Icon: BookOpen, color: "text-blue-600", bg: "bg-blue-100" },
            { label: "Citations", val: "1.4K", Icon: Award, color: "text-orange-600", bg: "bg-orange-100" },
            { label: "H-Index", val: "14", Icon: Globe, color: "text-emerald-600", bg: "bg-emerald-100" },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-8 border border-slate-100 shadow-lg flex items-center gap-6">
              <div className={`${stat.bg} ${stat.color} p-4 rounded-sm`}><stat.Icon size={24}/></div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
                <p className="text-3xl font-black text-slate-900 italic">{stat.val}</p>
              </div>
            </div>
          ))}
        </div>

        {/* --- TABS --- */}
        <div className="flex gap-8 border-b border-slate-200 mb-8">
          {["projects", "publications"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-[10px] font-black uppercase tracking-widest transition-all relative ${
                activeTab === tab ? "text-orange-600" : "text-slate-400 hover:text-slate-600"
              }`}
            >
              Active {tab}
              {activeTab === tab && (
                <motion.div layoutId="tabLine" className="absolute bottom-0 left-0 right-0 h-1 bg-orange-600" />
              )}
            </button>
          ))}
        </div>

        {/* --- CONTENT AREA --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {activeTab === "projects" ? (
                <motion.div key="p" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-4">
                  {ONGOING_PROJECTS.map((p) => (
                    <div key={p.id} className="bg-white border border-slate-100 p-8 shadow-md group hover:border-orange-600 transition-all flex justify-between items-center">
                      <div>
                        <span className="text-[9px] font-black text-orange-600 uppercase tracking-widest mb-2 block">{p.type}</span>
                        <h3 className="text-xl font-black text-slate-900 uppercase italic mb-2 leading-tight">{p.title}</h3>
                        <div className="flex gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          <span className="flex items-center gap-1"><FlaskConical size={12}/> Grant: {p.funding}</span>
                          <span className="flex items-center gap-1"><ChevronRight size={12}/> {p.status}</span>
                        </div>
                      </div>
                      <ExternalLink size={20} className="text-slate-200 group-hover:text-orange-600 transition-colors cursor-pointer" />
                    </div>
                  ))}
                </motion.div>
              ) : (
                <motion.div key="pub" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-4">
                  {PUBLICATIONS.map((pub) => (
                    <div key={pub.id} className="bg-white border border-slate-100 p-8 shadow-md flex justify-between items-center group">
                      <div>
                        <h3 className="text-lg font-black text-slate-800 uppercase italic mb-1 leading-tight group-hover:text-orange-600 transition-colors">{pub.title}</h3>
                        <p className="text-xs font-medium text-slate-500 mb-3">{pub.journal} • {pub.year}</p>
                        <span className="bg-slate-100 text-[9px] font-black px-3 py-1 uppercase tracking-widest text-slate-600">{pub.citations} Citations</span>
                      </div>
                      <button className="text-slate-300 hover:text-slate-900 transition-colors"><FileText size={20}/></button>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-900 p-8 text-white rounded-sm shadow-xl border-l-4 border-orange-600">
              <h3 className="text-xl font-black uppercase italic tracking-tighter mb-6 border-b border-white/10 pb-4">Resources</h3>
              <div className="space-y-4">
                {["Ethics Code", "IPR Filing", "Lab Safety"].map((item, i) => (
                  <button key={i} className="w-full flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition group">
                    {item} <ArrowLeft className="rotate-180 opacity-0 group-hover:opacity-100 transition-all" size={14} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- PROPOSAL MODAL --- */}
        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setIsModalOpen(false)}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
              />
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="bg-white w-full max-w-xl rounded-sm shadow-2xl relative z-10 overflow-hidden"
              >
                <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
                  <h3 className="font-black uppercase italic tracking-widest text-sm flex items-center gap-3">
                    <Microscope size={18} className="text-orange-500" /> New Research Proposal
                  </h3>
                  <button onClick={() => setIsModalOpen(false)}><X size={20}/></button>
                </div>
                <form onSubmit={handleGrantSubmit} className="p-8 space-y-6">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-slate-400">Project Title</label>
                    <input required className="w-full p-4 bg-slate-50 border border-slate-200 outline-none focus:border-orange-500 font-bold text-sm" placeholder="e.g. AI in Healthcare" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-slate-400">Estimated Budget</label>
                    <input required className="w-full p-4 bg-slate-50 border border-slate-200 outline-none focus:border-orange-500 font-bold text-sm" placeholder="₹ Lakhs" />
                  </div>
                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-orange-600 text-white py-4 font-black uppercase text-xs tracking-widest hover:bg-slate-900 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {isSubmitting ? "TRANSMITTING..." : <><Send size={16}/> Submit to Board</>}
                  </button>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <footer className="mt-20 text-center pb-10">
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-[1.5em]">Vanguard Research Node • 2026</p>
        </footer>
      </div>
    </main>
  );
}