"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, User, Lock, Bell, Shield, 
  Save, CheckCircle, Eye, EyeOff, Key,
  Fingerprint, Smartphone, Globe, Zap,
  Monitor, Database, ShieldAlert, RefreshCcw
} from "lucide-react";

export default function AdvancedSettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [twoFactor, setTwoFactor] = useState(false);

  // Form states
  const [email, setEmail] = useState("m.vanguard@vit.edu");
  const [password, setPassword] = useState("");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1500);
  };

  const tabs = [
    { id: "profile", label: "Identity Node", icon: User, desc: "Personal metadata & avatars" },
    { id: "security", label: "Access & Keys", icon: Lock, desc: "Encryption & 2FA protocols" },
    { id: "system", label: "Node Config", icon: Database, desc: "Database sync & storage" },
    { id: "notifications", label: "Signal Sync", icon: Bell, desc: "Alerts & transmission" },
  ];

  return (
    <main className="min-h-screen bg-[#FDFDFD] selection:bg-orange-600 selection:text-white font-sans relative overflow-hidden">
      
      {/* Background HUD Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 blur-[120px] rounded-full -mr-20 -mt-20" />

      <div className="max-w-6xl mx-auto p-6 pt-32 relative z-10">
        
        {/* --- DYNAMIC HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <Link href="/faculty" className="group text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-orange-600 flex items-center gap-2 mb-4 transition">
              <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform"/> Return to Core
            </Link>
            <h1 className="text-6xl md:text-7xl font-black uppercase italic tracking-tighter text-slate-950 leading-none">
              Portal <span className="text-transparent stroke-slate-950" style={{ WebkitTextStroke: '1.5px #020617' }}>Config.</span>
            </h1>
          </motion.div>

          <button 
            onClick={handleSave}
            disabled={isSaving}
            className="bg-slate-950 text-white px-10 py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-orange-600 transition-all flex items-center gap-3 shadow-2xl active:scale-95 disabled:opacity-50"
          >
            {isSaving ? <RefreshCcw size={16} className="animate-spin" /> : <Shield size={16} />}
            {isSaving ? "Encrypting Node..." : "Commit Changes"}
          </button>
        </div>

        <AnimatePresence>
          {showSuccess && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="mb-8 p-6 bg-emerald-50 border-2 border-emerald-100 text-emerald-700 flex items-center gap-4 rounded-3xl shadow-lg"
            >
              <CheckCircle size={20} />
              <span className="text-[11px] font-black uppercase tracking-[0.2em]">Global configurations synced to master registry successfully.</span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* --- ADVANCED NAVIGATION --- */}
          <div className="lg:col-span-4 space-y-3">
            {tabs.map((tab) => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex flex-col items-start p-6 rounded-[2rem] border-2 transition-all group ${
                  activeTab === tab.id 
                  ? "bg-slate-950 border-slate-950 text-white shadow-2xl translate-x-4" 
                  : "bg-white border-slate-50 text-slate-400 hover:border-orange-200"
                }`}
              >
                <div className="flex items-center gap-4 mb-2">
                   <tab.icon size={20} className={activeTab === tab.id ? "text-orange-500" : "group-hover:text-orange-600"} />
                   <span className="text-[11px] font-black uppercase tracking-widest">{tab.label}</span>
                </div>
                <p className={`text-[9px] font-bold uppercase tracking-tight opacity-50 ${activeTab === tab.id ? "text-slate-300" : "text-slate-400"}`}>
                   {tab.desc}
                </p>
              </button>
            ))}
          </div>

          {/* --- CONTENT ENGINE --- */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              
              {/* PROFILE IDENTITY */}
              {activeTab === "profile" && (
                <motion.div key="profile" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white border-2 border-slate-100 rounded-[3rem] p-10 lg:p-14 space-y-10 shadow-xl"
                >
                  <div className="flex items-center gap-6 mb-10">
                     <div className="w-24 h-24 bg-slate-950 rounded-[2.5rem] flex items-center justify-center text-white italic font-black text-3xl shadow-2xl border-4 border-white group relative cursor-pointer overflow-hidden">
                        MV
                        <div className="absolute inset-0 bg-orange-600/80 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                           <RefreshCcw size={20} />
                        </div>
                     </div>
                     <div>
                        <h2 className="text-2xl font-black uppercase tracking-tighter text-slate-900">Faculty Identity</h2>
                        <p className="text-[10px] font-bold text-orange-600 uppercase tracking-widest">Core Access Level: ADMINISTRATOR</p>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">System Node ID</label>
                      <div className="flex items-center gap-3 p-5 bg-slate-50 border-2 border-slate-50 rounded-2xl text-slate-400 font-bold text-xs"><Fingerprint size={16}/> FACULTY_NODE_001</div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Recovery Uplink</label>
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-5 bg-slate-50 border-2 border-slate-50 rounded-2xl outline-none focus:border-orange-500 focus:bg-white font-bold text-xs transition-all uppercase" />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* SECURITY & PROTOCOLS */}
              {activeTab === "security" && (
                <motion.div key="security" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="bg-white border-2 border-slate-100 rounded-[3rem] p-10 lg:p-14 space-y-10 shadow-xl"
                >
                  <div className="space-y-4">
                    <h2 className="text-xl font-black uppercase tracking-tighter flex items-center gap-3 text-slate-900">
                      <Key className="text-orange-600" size={24} /> Access Credentials
                    </h2>
                    <div className="relative">
                      <input 
                        type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)}
                        placeholder="UPDATE MASTER PASSKEY..."
                        className="w-full p-6 bg-slate-50 border-2 border-slate-50 rounded-3xl outline-none focus:border-orange-500 font-black text-xs transition-all pr-16 tracking-[0.3em]"
                      />
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 hover:text-orange-600 transition">
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                    {/* Password strength meter */}
                    <div className="flex gap-2 px-2">
                       {[1,2,3,4].map(i => <div key={i} className={`h-1.5 flex-1 rounded-full ${password.length > i*3 ? 'bg-orange-500' : 'bg-slate-100'}`} />)}
                    </div>
                  </div>

                  <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-5">
                       <div className={`p-4 rounded-2xl transition-colors ${twoFactor ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-50 text-slate-400'}`}>
                          <Smartphone size={24} />
                       </div>
                       <div>
                          <p className="text-sm font-black text-slate-800 uppercase italic">Biometric 2FA Protocol</p>
                          <p className="text-[10px] font-bold text-slate-400 uppercase">Require mobile authentication for every login</p>
                       </div>
                    </div>
                    <button 
                      onClick={() => setTwoFactor(!twoFactor)}
                      className={`w-16 h-8 rounded-full relative transition-all duration-500 ${twoFactor ? 'bg-emerald-500' : 'bg-slate-200'}`}
                    >
                       <motion.div animate={{ x: twoFactor ? 34 : 4 }} className="w-6 h-6 bg-white rounded-full absolute top-1 shadow-md" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* SYSTEM NODE CONFIG */}
              {activeTab === "system" && (
                <motion.div key="system" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="bg-white border-2 border-slate-100 rounded-[3rem] p-10 lg:p-14 shadow-xl"
                >
                   <h2 className="text-xl font-black uppercase tracking-tighter flex items-center gap-3 mb-10">
                      <Database className="text-orange-600" size={24} /> Node Synchronization
                   </h2>
                   <div className="space-y-6">
                      <div className="p-6 bg-slate-900 rounded-3xl text-white flex items-center justify-between">
                         <div className="flex items-center gap-4">
                            <Globe className="text-orange-500 animate-pulse" size={20} />
                            <div>
                               <p className="text-[10px] font-black uppercase tracking-widest">Global Master DB</p>
                               <p className="text-[9px] font-bold text-slate-400 uppercase">Last Synced: 2 mins ago</p>
                            </div>
                         </div>
                         <span className="text-[9px] font-black bg-white/10 px-3 py-1 rounded-full uppercase text-orange-500">Stable</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                         <div className="p-6 border-2 border-slate-50 rounded-3xl">
                            <p className="text-[10px] font-black text-slate-400 uppercase mb-2">Storage Status</p>
                            <p className="text-2xl font-black text-slate-950 italic">84% FULL</p>
                         </div>
                         <div className="p-6 border-2 border-slate-50 rounded-3xl">
                            <p className="text-[10px] font-black text-slate-400 uppercase mb-2">Active Sessions</p>
                            <p className="text-2xl font-black text-slate-950 italic">12 NODES</p>
                         </div>
                      </div>
                   </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>

        {/* --- DESTRUCTIVE ACTIONS --- */}
        <div className="mt-16 bg-red-50/50 border-2 border-red-100 p-10 rounded-[3rem] flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden group">
           <div className="relative z-10">
              <div className="flex items-center gap-4 mb-2">
                 <ShieldAlert className="text-red-600" size={24} />
                 <h4 className="text-lg font-black uppercase tracking-tighter text-red-900 italic">Security Termination Protocol</h4>
              </div>
              <p className="text-[10px] font-bold text-red-700 uppercase opacity-70 tracking-widest max-w-md">
                 Executing this command will force logout every active device node and reset session cookies across the entire Vanguard registry.
              </p>
           </div>
           <button 
             onClick={() => alert("EMERGENCY SESSION RESET INITIATED.")}
             className="relative z-10 bg-red-600 text-white px-10 py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-red-700 transition shadow-xl active:scale-95"
           >
              Force Node Reset
           </button>
           <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:scale-110 transition-transform duration-700">
              <ShieldAlert size={200} />
           </div>
        </div>

      </div>

      <footer className="mt-20 text-center pb-20 opacity-20">
        <p className="text-[10px] font-black text-slate-500 uppercase tracking-[1em] italic">Vanguard_Security_Core_2026</p>
      </footer>
    </main>
  );
}