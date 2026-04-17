"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ShieldAlert, Lock, UserCheck, ArrowRight } from "lucide-react";

export default function AdminLoginPage() {
  const [role, setRole] = useState("hr");
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save state for RBAC (Role Based Access Control)
    localStorage.setItem("isAdminLoggedIn", "true");
    localStorage.setItem("adminRole", role);
    
    // REDIRECTION LOGIC
    if (role === "hr") {
      router.push("/admin/hr/dashboard");
    } 
    // New Admission Logic: All admission roles go to the same terminal
    // The terminal will hide/show features based on the savedRole
    else if (role.includes("ADMISSION")) {
      router.push("/admin/admission/dashboard");
    } 
    else {
      router.push("/admin/dashboard");
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Cinematic Background Glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-blue-600/10 blur-[120px] rounded-full" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full relative z-10"
      >
        <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
          {/* Header Branding */}
          <div className="bg-slate-900 p-10 text-center border-b-4 border-orange-600">
            <ShieldAlert className="text-orange-500 mx-auto mb-4" size={48} />
            <h1 className="text-white text-3xl font-black tracking-tighter italic uppercase">Admin Central</h1>
            <p className="text-slate-400 text-[9px] font-black uppercase tracking-[0.4em] mt-2">
              Verified Personnel Only
            </p>
          </div>

          <form className="p-8 space-y-5" onSubmit={handleAdminLogin}>
            {/* Role Selection with Admission Sub-roles */}
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase text-slate-400 ml-1">Administrative Role</label>
              <select 
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl text-xs font-black uppercase tracking-widest outline-none focus:border-orange-500 focus:bg-white transition-all cursor-pointer"
              >
                <optgroup label="Core Departments">
                  <option value="hr">Human Resources (HR)</option>
                  <option value="it_admin">System Admin</option>
                </optgroup>
                
                {/* NEW ADMISSION ROLES */}
                <optgroup label="Admission Node">
                  <option value="ADMISSION_HEAD">Admission Head</option>
                  <option value="COUNSELOR">Admission Counselor</option>
                  <option value="ASSISTANT">Admission Assistant</option>
                </optgroup>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase text-slate-400 ml-1">Personnel ID</label>
              <div className="relative">
                <UserCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                <input 
                  type="text"
                  required
                  placeholder="VNG-XXXX"
                  value={adminId}
                  onChange={(e) => setAdminId(e.target.value)}
                  className="w-full p-4 pl-12 bg-slate-50 border-2 border-slate-100 rounded-2xl text-sm font-bold outline-none focus:border-orange-500 focus:bg-white"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase text-slate-400 ml-1">Security Key</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                <input 
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-4 pl-12 bg-slate-50 border-2 border-slate-100 rounded-2xl text-sm font-bold outline-none focus:border-orange-500 focus:bg-white"
                />
              </div>
            </div>

            <button type="submit" className="w-full bg-slate-950 text-white font-black py-5 rounded-2xl uppercase tracking-[0.3em] text-[10px] hover:bg-orange-600 transition-all flex items-center justify-center gap-3 shadow-xl active:scale-95">
              Authorize Session <ArrowRight size={16} />
            </button>
            
            <p className="text-center text-[8px] font-bold text-slate-300 uppercase tracking-widest mt-4">
              Encrypted Tunnel Activity Logged
            </p>
          </form>
        </div>
      </motion.div>
    </main>
  );
}