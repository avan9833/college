"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, GraduationCap, ShieldCheck, Clock, Zap, BarChart3, 
  Search, ArrowUpRight, Lock, Bell, LogOut, Filter, Fingerprint, 
  Activity, Database, Settings, UserCheck, FileSearch, UserCog, 
  Briefcase, Loader2, ClipboardList,
  Globe
} from "lucide-react";
import { useRouter } from "next/navigation";
import AdmissionSidebar from "@/components/admin/AdmissionSidebar";

// --- MOCK TRANSMISSION DATA ---
const enquiries = [
  { id: "VNG-101", name: "Rahul S.", course: "B.Tech CSE", status: "Doc Verification", time: "10m ago", priority: "High" },
  { id: "VNG-102", name: "Meera K.", course: "MBA Finance", status: "Interview", time: "1h ago", priority: "Medium" },
  { id: "VNG-103", name: "Sahil V.", course: "BCA Cloud", status: "Pending Fee", time: "3h ago", priority: "Low" },
  { id: "VNG-104", name: "Priya M.", course: "M.Tech Data", status: "Verified", time: "5h ago", priority: "High" },
];

export default function AdmissionDashboard() {
  const router = useRouter();
  const [role, setRole] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const savedRole = localStorage.getItem("adminRole") || "ASSISTANT";
    setRole(savedRole);
  }, []);

  const filteredEnquiries = enquiries.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLogout = () => {
    localStorage.removeItem("adminRole");
    router.push("/admin/login");
  };

  const triggerProtocol = (name: string) => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      alert(`SYSTEM: ${name} Protocol Executed Successfully.`);
    }, 1500);
  };

  // Helper for role-based coloring
  const getRoleTheme = () => {
    if (role === "ADMISSION_HEAD") return "text-orange-500 border-orange-500/20 bg-orange-500/10";
    if (role === "COUNSELOR") return "text-blue-500 border-blue-500/20 bg-blue-500/10";
    return "text-emerald-500 border-emerald-500/20 bg-emerald-500/10";
  };

  const getButtonTheme = () => {
    if (role === "ADMISSION_HEAD") return "bg-orange-600 border-orange-800 hover:bg-slate-900 shadow-orange-600/30";
    if (role === "COUNSELOR") return "bg-blue-600 border-blue-800 hover:bg-slate-900 shadow-blue-600/30";
    return "bg-emerald-600 border-emerald-800 hover:bg-slate-900 shadow-emerald-600/30";
  };

  return (
    <div className="flex min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-orange-500 overflow-x-hidden">
      
      {/* 1. DYNAMIC SIDEBAR */}
      {role && <AdmissionSidebar role={role} />}

      {/* 2. MAIN TERMINAL */}
      <main className="flex-1 ml-72 p-4 lg:p-10 relative">
        
        {/* Ambient Glows */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-600/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full" />
        </div>

        {/* --- SYSTEM HUD --- */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-white/5 pb-8">
          <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 bg-orange-600 rounded-2xl shadow-[0_0_25px_rgba(234,88,12,0.4)]">
                 <Fingerprint className="text-white" size={24} />
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter italic uppercase leading-none">
                Admission <span className="text-transparent stroke-orange-600 stroke-2" style={{ WebkitTextStroke: '1px #ea580c' }}>TERMINAL</span>
              </h1>
            </div>
            <div className="flex items-center gap-3">
               <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.2em] border ${getRoleTheme()}`}>
                  {role.replace("_", " ")} ACCESS
               </span>
               <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest flex items-center gap-2">
                 <Globe size={12} /> SECURE_NODE_026
               </span>
            </div>
          </motion.div>

          <div className="flex items-center gap-4 bg-white/5 p-2 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl">
            <button className="p-4 hover:bg-white/10 rounded-2xl text-slate-400 transition-all relative">
              <Bell size={20} />
              <span className="absolute top-4 right-4 w-2 h-2 bg-orange-500 rounded-full border-2 border-[#020617]" />
            </button>
            <button onClick={handleLogout} className="flex items-center gap-3 px-6 py-3 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
              EXIT <LogOut size={16} />
            </button>
          </div>
        </div>

        {/* --- STATS GRID --- */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Total Pipeline", val: "482", icon: Users, color: "text-blue-500" },
            { label: "Open Tickets", val: "24", icon: ClipboardList, color: "text-orange-500" },
            { label: "Verified Unit", val: "156", icon: UserCheck, color: "text-emerald-500" },
            { label: "Sync Status", val: "94.2%", icon: Activity, color: "text-purple-500" }
          ].map((stat, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 ${stat.color} w-fit mb-6`}>
                <stat.icon size={28} />
              </div>
              <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.3em] mb-1">{stat.label}</p>
              <p className="text-5xl font-black text-white italic tracking-tighter">{stat.val}</p>
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* --- DATA TRANSMISSION HUB --- */}
          <div className="lg:col-span-8">
            <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[3rem] shadow-2xl overflow-hidden">
              <div className="p-10 border-b border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <h2 className="font-black text-white uppercase tracking-tighter italic text-2xl">Transmission Feed</h2>
                <div className="relative w-full md:w-80">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                  <input 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="QUERY IDENTIFIER..." 
                    className="w-full pl-12 pr-6 py-4 bg-black/40 border border-white/10 rounded-2xl text-[10px] font-black text-white tracking-[0.2em] outline-none focus:border-orange-500 transition-all" 
                  />
                </div>
              </div>
              
              <div className="divide-y border-white/5 min-h-[300px]">
                {filteredEnquiries.map((item, idx) => (
                  <motion.div key={idx} className="flex items-center justify-between p-8 hover:bg-white/5 transition-all group">
                    <div className="flex items-center gap-8">
                      <div className="w-16 h-16 bg-slate-900 border border-white/10 rounded-2xl flex items-center justify-center text-white font-black text-2xl italic group-hover:border-orange-600 transition-all shadow-xl">
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-black text-white uppercase text-lg tracking-tight group-hover:text-orange-500 transition-colors">
                          {item.name} <span className="text-xs text-slate-600 font-bold ml-2 tracking-widest">[{item.id}]</span>
                        </h4>
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1 flex items-center gap-2">
                          <GraduationCap size={14} className="text-orange-600" /> {item.course}
                        </p>
                      </div>
                    </div>
                    <button className="p-4 bg-white/5 border border-white/10 rounded-2xl text-slate-500 hover:text-white hover:bg-orange-600 transition-all active:scale-90">
                      <ArrowUpRight size={22} />
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* --- ROLE-SPECIFIC SIDEBAR TOOLS --- */}
          <div className="lg:col-span-4 space-y-8">
            
            <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] relative overflow-hidden group">
              <h3 className="text-xl font-black italic uppercase tracking-tighter mb-8 flex items-center gap-3 text-white">
                 {role === "ADMISSION_HEAD" ? <BarChart3 className="text-orange-600" size={20} /> : 
                  role === "COUNSELOR" ? <Briefcase className="text-blue-500" size={20} /> : 
                  <UserCog className="text-emerald-500" size={20} />} 
                 {role === "ADMISSION_HEAD" ? "Neural Pipeline" : role === "COUNSELOR" ? "Counselor Hub" : "Assistant Tools"}
              </h3>

              {/* Head View */}
              {role === "ADMISSION_HEAD" && (
                <div className="space-y-8">
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.3em] opacity-60"><span>Load Balance</span><span>88%</span></div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-orange-600 w-[88%]" /></div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.3em] opacity-60"><span>Team Sync</span><span>95%</span></div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-blue-600 w-[95%]" /></div>
                  </div>
                </div>
              )}

              {/* Counselor View */}
              {role === "COUNSELOR" && (
                <div className="space-y-4">
                   <div className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/40 transition-all cursor-pointer">
                      <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Next Interview</p>
                      <p className="text-sm font-bold text-white uppercase italic tracking-tighter">Rahul S. (14:00 HRS)</p>
                   </div>
                   <div className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/40 transition-all cursor-pointer">
                      <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Lead Scoring</p>
                      <p className="text-sm font-bold text-white uppercase italic tracking-tighter">12 High Priority Leads</p>
                   </div>
                </div>
              )}

              {/* Assistant View */}
              {role === "ASSISTANT" && (
                <div className="space-y-4">
                   <div className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-emerald-500/40 transition-all cursor-pointer">
                      <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Packet Status</p>
                      <p className="text-sm font-bold text-white uppercase italic tracking-tighter">14 Unsynced Records</p>
                   </div>
                   <div className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-emerald-500/40 transition-all cursor-pointer">
                      <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Queue protocol</p>
                      <p className="text-sm font-bold text-white uppercase italic tracking-tighter">Clear Doc Backlog</p>
                   </div>
                </div>
              )}
              
              <Settings className="absolute -right-10 -bottom-10 text-white/5 group-hover:rotate-90 transition-transform duration-[3s]" size={200} />
            </div>

            {/* ACTION TRIGGER */}
            <motion.button 
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              onClick={() => triggerProtocol(role)}
              disabled={isProcessing}
              className={`w-full p-10 rounded-[3rem] text-white flex flex-col items-center justify-center gap-8 shadow-2xl transition-all border-b-8 active:border-b-0 active:translate-y-2 ${getButtonTheme()}`}
            >
               {isProcessing ? <Loader2 className="animate-spin" size={48} /> : <Zap size={48} className="fill-white" />}
               <div className="text-center">
                 <h4 className="text-2xl font-black uppercase italic tracking-tighter leading-none">
                   {role === "ASSISTANT" ? "Sync Document DB" : 
                    role === "COUNSELOR" ? "Launch Evaluation" : "Global System Audit"}
                 </h4>
               </div>
            </motion.button>
          </div>

        </div>
      </main>
    </div>
  );
}