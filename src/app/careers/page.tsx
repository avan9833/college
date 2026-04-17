"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import { 
  Briefcase, MapPin, Clock, ArrowRight, 
  Search, Filter, Sparkles, Zap, ShieldCheck, 
  Globe, GraduationCap, Laptop 
} from "lucide-react";

// --- JOB DATA ---
const jobs = [
  { 
    id: 1, title: "Lead AI Researcher", dept: "Teaching", type: "Full-Time", location: "Mumbai Node", 
    salary: "₹18L - ₹24L", icon: Sparkles, color: "text-orange-500", bg: "bg-orange-500/10" 
  },
  { 
    id: 2, title: "Corporate Relations Head", dept: "Placement", type: "Full-Time", location: "Bangalore Node", 
    salary: "₹12L - ₹15L", icon: Briefcase, color: "text-blue-500", bg: "bg-blue-500/10" 
  },
  { 
    id: 3, title: "Senior System Admin", dept: "IT & Infrastructure", type: "Contract", location: "Remote / Hybrid", 
    salary: "₹10L - ₹12L", icon: Laptop, color: "text-purple-500", bg: "bg-purple-500/10" 
  },
  { 
    id: 4, title: "Assistant Registrar", dept: "Administration", type: "Full-Time", location: "Pune Node", 
    salary: "₹8L - ₹10L", icon: ShieldCheck, color: "text-emerald-500", bg: "bg-emerald-500/10" 
  },
  { 
    id: 5, title: "Psychology Counselor", dept: "Admission", type: "Part-Time", location: "Mumbai Node", 
    salary: "₹6L - ₹8L", icon: GraduationCap, color: "text-amber-500", bg: "bg-amber-500/10" 
  }
];

export default function CareerPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  // --- BUTTON HANDLER ---
  const handleApply = (jobTitle: string) => {
    alert(`REDIRECTING: Entering Application Portal for [${jobTitle.toUpperCase()}]. Please prepare your digital dossier.`);
    // In a real app: router.push(`/careers/apply/${id}`)
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "All" || job.dept === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <main className="min-h-screen bg-white selection:bg-orange-500 selection:text-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="pt-40 pb-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-600/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
              <Zap size={14} className="text-orange-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">Join the Vanguard Network</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">
              Build the <br /> <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '1px #fff' }}>Future.</span>
            </h1>
            <p className="mt-8 text-slate-400 font-medium text-lg max-w-2xl mx-auto italic">
              We are seeking global visionaries to join our 2026 academic nodes. Your mission starts here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- SEARCH & FILTER HUD --- */}
      <section className="sticky top-20 z-40 bg-white border-b border-slate-100 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-6 items-center">
          <div className="relative flex-1 group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-600 transition-colors" size={20} />
            <input 
              type="text"
              placeholder="SEARCH ROLES (e.g. PROFESSOR, ADMIN)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-16 pr-8 py-5 bg-slate-50 border-2 border-slate-50 rounded-2xl text-xs font-black uppercase tracking-widest focus:bg-white focus:border-orange-500 outline-none transition-all"
            />
          </div>
          
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 md:pb-0">
            {["All", "Teaching", "Placement", "Finance", "Administration"].map((dept) => (
              <button
                key={dept}
                onClick={() => setFilter(dept)}
                className={`px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border-2 whitespace-nowrap ${
                  filter === dept 
                  ? "bg-slate-950 text-white border-slate-950 shadow-xl" 
                  : "bg-white text-slate-400 border-slate-100 hover:border-orange-200 hover:text-orange-600"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- JOB LISTING GRID --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredJobs.map((job) => (
              <motion.div
                layout
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group bg-white border-2 border-slate-50 p-8 rounded-[2.5rem] hover:border-orange-500/20 hover:shadow-2xl transition-all flex flex-col md:flex-row md:items-center justify-between gap-8"
              >
                <div className="flex items-center gap-8">
                  <div className={`w-16 h-16 ${job.bg} ${job.color} rounded-3xl flex items-center justify-center transition-transform group-hover:scale-110 duration-500`}>
                    <job.icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter group-hover:text-orange-600 transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 mt-2">
                      <p className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <MapPin size={14} className="text-orange-600" /> {job.location}
                      </p>
                      <p className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <Clock size={14} className="text-orange-600" /> {job.type}
                      </p>
                      <p className="flex items-center gap-2 text-[10px] font-black text-emerald-600 uppercase tracking-widest">
                        {job.salary}
                      </p>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => handleApply(job.title)}
                  className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-orange-600 transition-all shadow-xl active:scale-95 group/btn"
                >
                  Apply Now <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {filteredJobs.length === 0 && (
            <div className="text-center py-20 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
               <Globe size={48} className="mx-auto text-slate-300 mb-6 animate-spin-slow" />
               <p className="text-slate-400 font-black uppercase tracking-widest text-xs">No active nodes found for this query.</p>
            </div>
          )}
        </div>
      </section>

      {/* --- BENEFITS SECTION --- */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 relative z-10">
          {[
            { t: "Global Mobility", d: "Transfer between any Vanguard academic node worldwide.", icon: Globe },
            { t: "R&D Grants", d: "Unlimited access to institutional research and AI funds.", icon: Zap },
            { t: "Family Wellness", d: "Comprehensive healthcare and education for your kin.", icon: ShieldCheck }
          ].map((item, i) => (
            <div key={i} className="space-y-4 p-8 bg-white/5 border border-white/10 rounded-[2rem]">
              <item.icon size={32} className="text-orange-500" />
              <h4 className="text-xl font-black uppercase italic tracking-tighter">{item.t}</h4>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}