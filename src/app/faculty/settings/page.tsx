"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, User, Lock, Bell, Shield, 
  Globe, Save, CheckCircle, Eye, EyeOff, Database, Key
} from "lucide-react";

export default function SettingsPage() {
  // --- STATE MANAGEMENT ---
  const [activeTab, setActiveTab] = useState("profile"); // State for switching tabs
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Form states
  const [email, setEmail] = useState("m.vanguard@vit.edu");
  const [password, setPassword] = useState("");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate API call to update DB
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1500);
  };

  const tabs = [
    { id: "profile", label: "Profile Identity", icon: User },
    { id: "security", label: "Security & Keys", icon: Lock },
    { id: "notifications", label: "Sync Notifications", icon: Bell },
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] p-6 pt-24">
      <div className="max-w-5xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div>
            <Link href="/faculty" className="group text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-orange-600 flex items-center gap-2 mb-2 transition">
              <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform"/> Back to Dashboard
            </Link>
            <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-slate-900 leading-none">
              Portal <span className="text-orange-600">Config.</span>
            </h1>
          </div>

          <button 
            onClick={handleSave}
            disabled={isSaving}
            className="bg-slate-900 text-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-orange-600 transition flex items-center gap-3 shadow-xl active:scale-95 disabled:opacity-50"
          >
            {isSaving ? "Encrypting..." : <><Save size={16} /> Update Preferences</>}
          </button>
        </div>

        <AnimatePresence>
          {showSuccess && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mb-8 p-4 bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center gap-3 shadow-sm rounded-sm"
            >
              <CheckCircle size={18} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Configurations synced to master node successfully.</span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* --- WORKING SIDEBAR TABS --- */}
          <div className="lg:col-span-4 space-y-2">
            {tabs.map((tab) => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-4 p-5 text-[10px] font-black uppercase tracking-widest border transition-all ${
                  activeTab === tab.id 
                  ? "bg-white border-slate-200 text-orange-600 shadow-md translate-x-2" 
                  : "bg-transparent border-transparent text-slate-400 hover:text-slate-600"
                }`}
              >
                <tab.icon size={16} /> {tab.label}
              </button>
            ))}
          </div>

          {/* --- DYNAMIC CONTENT AREA --- */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {activeTab === "profile" && (
                <motion.div 
                  key="profile"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="bg-white border border-slate-200 shadow-2xl p-8 lg:p-12 space-y-8"
                >
                  <h2 className="text-xl font-black uppercase tracking-tighter flex items-center gap-3">
                    <User className="text-orange-600" size={24} /> Profile Identity
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Portal ID</label>
                      <input type="text" readOnly value="FACULTY001" className="w-full p-4 bg-slate-100 border border-slate-200 font-bold text-sm text-slate-400 cursor-not-allowed outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Recovery Email</label>
                      <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-4 bg-slate-50 border border-slate-200 outline-none focus:border-orange-500 font-bold text-sm transition-all"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "security" && (
                <motion.div 
                  key="security"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="bg-white border border-slate-200 shadow-2xl p-8 lg:p-12 space-y-8"
                >
                  <h2 className="text-xl font-black uppercase tracking-tighter flex items-center gap-3">
                    <Key className="text-orange-600" size={24} /> Security & Access
                  </h2>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Update Master Password</label>
                    <div className="relative">
                      <input 
                        type={showPassword ? "text" : "password"} 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full p-4 bg-slate-50 border border-slate-200 outline-none focus:border-orange-500 font-bold text-sm transition-all pr-12"
                      />
                      <button 
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-orange-600 transition"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-black text-slate-800 uppercase italic">Two-Factor Auth</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Secure your node via mobile OTP</p>
                    </div>
                    <div className="w-12 h-6 bg-emerald-500 rounded-full relative p-1 cursor-pointer">
                      <div className="w-4 h-4 bg-white rounded-full ml-auto shadow-sm" />
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "notifications" && (
                <motion.div 
                  key="notifications"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="bg-white border border-slate-200 shadow-2xl p-8 lg:p-12"
                >
                  <h2 className="text-xl font-black uppercase tracking-tighter mb-8 flex items-center gap-3">
                    <Bell className="text-orange-600" size={24} /> Sync Notifications
                  </h2>
                  <div className="space-y-4">
                    {["Email Alerts", "Mobile Push", "SMS Gateways"].map((item) => (
                      <div key={item} className="flex justify-between items-center p-4 bg-slate-50 border border-slate-100">
                        <span className="text-[10px] font-black uppercase text-slate-600 tracking-widest">{item}</span>
                        <input type="checkbox" defaultChecked className="accent-orange-600 w-4 h-4" />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* --- DANGER ZONE --- */}
        <div className="mt-8 bg-red-50 border border-red-100 p-8 flex flex-col md:flex-row justify-between items-center gap-6">
           <div>
              <h4 className="text-[10px] font-black uppercase tracking-widest text-red-900 mb-1">Session Termination</h4>
              <p className="text-[10px] font-bold text-red-700 uppercase opacity-70 italic">Force logout from all active nodes.</p>
           </div>
           <button 
             onClick={() => alert("All active sessions terminated.")}
             className="bg-red-600 text-white px-6 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-red-700 transition active:scale-95"
           >
              Force Reset Session
           </button>
        </div>
      </div>
    </main>
  );
}