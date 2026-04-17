"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  UserPlus, Search, FileText, CheckCircle2, 
  XCircle, MoreVertical, Briefcase, 
  ArrowUpRight, Mail, Sparkles, Target, Zap, Download,
  Eye, ShieldCheck, MapPin, Award, BookOpen, X,
  Activity, Fingerprint, Trash2
} from "lucide-react";

// --- 2026 ENHANCED CANDIDATE DATA ---
const initialApplications = [
  { 
    id: 1, name: "Amit Kumar", position: "Assistant Professor", dept: "Teaching", date: "15 Mar 2026", status: "Interviewing", score: 88, avatar: "AK", email: "amit.k@gmail.com",
    cvData: {
      bio: "Specializing in Quantum Computing and AI Ethics. Former lead researcher at TechNova Labs.",
      skills: ["Quantum Logic", "Python AI", "Neural Nets"],
      experience: "8 Years Academic Focus",
      edu: "Ph.D. in Computer Science (IIT Bombay)",
      location: "Mumbai, India"
    }
  },
  { 
    id: 2, name: "Sneha Patel", position: "Lab Technician", dept: "Non-Teaching", date: "18 Mar 2026", status: "Pending", score: 72, avatar: "SP", email: "sneha.p@yahoo.com",
    cvData: {
      bio: "Expert in hardware diagnostics and nanotechnology lab maintenance. Certified Bio-Safety Officer.",
      skills: ["Nanofabrication", "Circuit Repair", "Lab Safety"],
      experience: "5 Years Operations",
      edu: "M.Sc. in Applied Physics",
      location: "Pune, India"
    }
  },
  { 
    id: 3, name: "Rahul Singh", position: "Placement Head", dept: "Placement", date: "10 Mar 2026", status: "Offered", score: 94, avatar: "RS", email: "rahul.s@outlook.com",
    cvData: {
      bio: "Driving corporate relations with 500+ global partners. Specialized in Industry-Academia synergy.",
      skills: ["Corporate Strategy", "Public Speaking", "Negotiation"],
      experience: "12 Years Industry Linkage",
      edu: "MBA from IIM Bangalore",
      location: "Bangalore, India"
    }
  },
  { 
    id: 4, name: "Pooja Sharma", position: "Accountant", dept: "Finance", date: "12 Mar 2026", status: "Rejected", score: 45, avatar: "PS", email: "pooja.sh@gmail.com",
    cvData: {
      bio: "Detailed auditor with focus on institutional GST compliance and payroll automation.",
      skills: ["GST Compliance", "SAP", "Forensic Accounting"],
      experience: "4 Years Finance",
      edu: "Chartered Accountant (CA)",
      location: "Delhi, India"
    }
  },
  { 
    id: 5, name: "Dr. Arvinder Gill", position: "Dean of Research", dept: "Teaching", date: "20 Mar 2026", status: "Interviewing", score: 91, avatar: "AG", email: "gill.research@vit.edu",
    cvData: {
      bio: "Pioneer in Blockchain for Education. Published 40+ papers in international journals.",
      skills: ["Grant Writing", "Blockchain", "R&D Management"],
      experience: "15 Years Research Leadership",
      edu: "D.Sc. in Cryptography (Stanford)",
      location: "California, USA"
    }
  }
];

export default function RecruitmentPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [apps, setApps] = useState(initialApplications);
  const [selectedCV, setSelectedCV] = useState<any>(null);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  // Sync state if selectedCV status changes
  useEffect(() => {
    if (selectedCV) {
      const updated = apps.find(a => a.id === selectedCV.id);
      if (updated && updated.status !== selectedCV.status) {
        setSelectedCV(updated);
      }
    }
  }, [apps]);

  // --- HANDLERS ---
  const updateStatus = (id: number, newStatus: string) => {
    setApps(prev => prev.map(a => a.id === id ? { ...a, status: newStatus } : a));
    setActiveMenu(null);
  };

  const filteredApps = apps.filter(app => 
    app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 lg:p-10 bg-slate-50 min-h-screen font-sans selection:bg-orange-500 selection:text-white">
      
      {/* --- ELITE CV VIEW MODAL --- */}
      <AnimatePresence>
        {selectedCV && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4 lg:p-10"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 30 }}
              className="bg-white w-full max-w-6xl h-full rounded-[3rem] shadow-2xl overflow-hidden flex flex-col relative border border-white/20"
            >
              {/* MODAL HUD */}
              <div className="p-8 border-b bg-slate-900 text-white flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center text-3xl font-black italic shadow-[0_0_20px_rgba(234,88,12,0.4)]">
                    {selectedCV.avatar}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-tighter italic leading-none">{selectedCV.name}</h3>
                    <p className="text-[10px] font-bold text-orange-500 uppercase tracking-[0.4em] mt-2 flex items-center gap-2">
                       <ShieldCheck size={12} /> Dossier Verification: Node_26
                    </p>
                  </div>
                </div>
                <button onClick={() => setSelectedCV(null)} className="p-4 bg-red-600/20 text-red-500 hover:bg-red-600 hover:text-white rounded-2xl transition-all">
                  <X size={24} />
                </button>
              </div>

              {/* CV BODY */}
              <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-3 gap-0 pb-32">
                <div className="bg-slate-50 p-10 border-r border-slate-100 space-y-10">
                   <div>
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Identity Meta</h4>
                      <div className="space-y-4">
                        <p className="flex items-center gap-3 text-xs font-bold text-slate-700"><Mail size={14} className="text-orange-600"/> {selectedCV.email}</p>
                        <p className="flex items-center gap-3 text-xs font-bold text-slate-700"><MapPin size={14} className="text-orange-600"/> {selectedCV.cvData?.location}</p>
                      </div>
                   </div>
                   <div className="p-6 bg-slate-950 rounded-3xl text-white relative overflow-hidden">
                      <Target size={40} className="mb-4 text-orange-500 opacity-20 absolute -right-2 -top-2" />
                      <p className="text-[10px] font-black uppercase opacity-60 tracking-widest">Neural Match Score</p>
                      <p className="text-5xl font-black italic text-orange-500 mt-2">{selectedCV.score}%</p>
                   </div>
                </div>

                <div className="md:col-span-2 p-12 space-y-12 bg-white">
                   <section>
                      <h2 className="text-[10px] font-black text-orange-600 uppercase tracking-[0.5em] mb-4 border-l-4 border-orange-600 pl-4 italic">Executive Summary</h2>
                      <p className="text-xl text-slate-700 leading-relaxed font-medium italic">"{selectedCV.cvData?.bio}"</p>
                   </section>
                   <section>
                      <h2 className="text-[10px] font-black text-orange-600 uppercase tracking-[0.5em] mb-6 border-l-4 border-orange-600 pl-4 italic">Academic Credentials</h2>
                      <div className="p-6 bg-slate-50 rounded-2xl border-2 border-slate-100 flex items-center gap-6 group hover:border-orange-200 transition-all">
                         <Award size={40} className="text-orange-500" />
                         <p className="text-sm font-black text-slate-800 uppercase tracking-tighter leading-relaxed">{selectedCV.cvData?.edu}</p>
                      </div>
                   </section>
                </div>
              </div>

              {/* ACTION OVERLAY (Proper Floating UI) */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] bg-slate-900/90 backdrop-blur-xl p-4 rounded-[2rem] border border-white/20 flex items-center justify-between px-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                 <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Protocol Status: <span className="text-white ml-2">{selectedCV.status}</span></p>
                 </div>
                 <div className="flex gap-3">
                    <button onClick={() => updateStatus(selectedCV.id, "Interviewing")} className="px-6 py-3 bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-500 transition-all flex items-center gap-2">
                       <Target size={14} /> Interview
                    </button>
                    <button onClick={() => updateStatus(selectedCV.id, "Offered")} className="px-6 py-3 bg-emerald-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 transition-all flex items-center gap-2">
                       <CheckCircle2 size={14} /> Release Offer
                    </button>
                    <button onClick={() => updateStatus(selectedCV.id, "Rejected")} className="px-6 py-3 bg-red-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-red-500 transition-all flex items-center gap-2">
                       <XCircle size={14} /> Reject
                    </button>
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HEADER --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-2 bg-orange-600 rounded-full shadow-[0_0_15px_rgba(234,88,12,0.4)]" />
            <h1 className="text-4xl font-black text-slate-900 tracking-tighter italic uppercase underline decoration-slate-200 underline-offset-8">Recruitment Hub</h1>
          </div>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-2">
            <Fingerprint size={12} className="text-orange-500" /> SECURE TALENT PIPELINE — NODE_26
          </p>
        </motion.div>
        
        <button className="px-8 py-5 bg-slate-950 text-white rounded-[1.5rem] font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-orange-600 transition-all shadow-xl active:scale-95">
          <UserPlus size={18} /> Initiate Onboarding
        </button>
      </div>

      {/* --- MAIN DATA CONTAINER --- */}
      <div className="bg-white rounded-[3rem] border border-slate-200 shadow-2xl overflow-hidden">
        <div className="p-10 border-b border-slate-50 flex flex-col lg:flex-row justify-between items-center bg-white/50 gap-6">
          <div className="flex items-center gap-4">
             <Activity className="text-orange-600 animate-pulse" size={24} />
             <h2 className="font-black text-slate-900 uppercase tracking-tighter italic text-2xl">Operational Feed</h2>
          </div>
          <div className="relative w-full lg:w-[450px]">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
            <input 
              type="text" placeholder="QUERY IDENTITY OR NODE..." 
              className="w-full pl-16 pr-6 py-5 bg-slate-50 border-none rounded-[2rem] text-[10px] font-black uppercase tracking-widest focus:ring-2 focus:ring-orange-500 transition-all shadow-sm outline-none"
              value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-x-auto min-h-[500px]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-100">
                <th className="p-8 text-[10px] font-black uppercase text-slate-400 tracking-[0.4em]">Candidate Dossier</th>
                <th className="p-8 text-[10px] font-black uppercase text-slate-400 tracking-[0.4em]">Designation Node</th>
                <th className="p-8 text-[10px] font-black uppercase text-slate-400 tracking-[0.4em]">Current Status</th>
                <th className="p-8 text-right text-[10px] font-black uppercase text-slate-400 tracking-[0.4em]">Command</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              <AnimatePresence mode="popLayout">
                {filteredApps.map((app) => (
                  <motion.tr 
                    layout key={app.id} 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="hover:bg-slate-50/50 transition-all group"
                  >
                    <td className="p-8">
                      <div className="flex items-center gap-6">
                        <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center text-white font-black text-lg italic shadow-lg group-hover:bg-orange-600 transition-colors">
                          {app.avatar}
                        </div>
                        <div>
                          <p className="text-base font-black text-slate-900 uppercase tracking-tight leading-none group-hover:text-orange-600 transition-colors">{app.name}</p>
                          <button onClick={() => setSelectedCV(app)} className="text-[10px] text-orange-600 font-black uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all mt-3">
                            Decrypt Records <Eye size={12} />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="p-8">
                      <p className="text-sm font-black text-slate-800 uppercase italic tracking-tighter">{app.position}</p>
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1.5">{app.dept} Network</p>
                    </td>
                    <td className="p-8">
                      <span className={`text-[10px] px-5 py-2 rounded-full font-black uppercase tracking-[0.2em] border shadow-sm ${
                        app.status === 'Offered' ? 'bg-green-50 text-green-700 border-green-200' :
                        app.status === 'Interviewing' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                        app.status === 'Rejected' ? 'bg-red-50 text-red-700 border-red-200' : 'bg-slate-100 text-slate-500 border-slate-200'
                      }`}>
                        {app.status}
                      </span>
                    </td>
                    <td className="p-8 text-right">
                      <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all scale-95 group-hover:scale-100">
                          <button onClick={() => window.location.href=`mailto:${app.email}`} className="p-4 bg-white hover:bg-orange-600 hover:text-white rounded-2xl border border-slate-200 shadow-xl transition-all active:scale-90"><Mail size={18} /></button>
                          <button onClick={() => setActiveMenu(activeMenu === app.id ? null : app.id)} className="p-4 bg-slate-950 text-white hover:bg-orange-600 rounded-2xl shadow-xl transition-all active:scale-90 relative">
                            <MoreVertical size={18} />
                            {activeMenu === app.id && (
                              <div className="absolute right-0 top-16 z-50 w-56 bg-slate-950 text-white rounded-3xl p-3 shadow-2xl border border-white/10 text-left">
                                <button onClick={() => updateStatus(app.id, "Interviewing")} className="w-full flex items-center gap-4 p-4 hover:bg-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all"><Target size={14} className="text-blue-500" /> Interview Node</button>
                                <button onClick={() => updateStatus(app.id, "Offered")} className="w-full flex items-center gap-4 p-4 hover:bg-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all"><CheckCircle2 size={14} className="text-green-500" /> Commit Offer</button>
                                <button onClick={() => updateStatus(app.id, "Rejected")} className="w-full flex items-center gap-4 p-4 hover:bg-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all"><XCircle size={14} className="text-red-500" /> Terminate Entry</button>
                                <div className="h-[1px] bg-white/10 my-2 mx-4" />
                                <button className="w-full flex items-center gap-4 p-4 hover:bg-red-600 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all"><Trash2 size={14} /> Wipe From DB</button>
                              </div>
                            )}
                          </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="mt-12 flex items-center justify-between px-10 opacity-30 italic">
        <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.8em]">Transmission Secured // Node_026_HR_HUB</p>
      </div>
    </div>
  );
}