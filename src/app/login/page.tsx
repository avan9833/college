"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion"; // Add framer-motion for animations
import { ShieldCheck, User, GraduationCap, ArrowRight, Lock } from "lucide-react"; // Nice icons

export default function LoginPage() {
  const [role, setRole] = useState("student");
  const [regId, setRegId] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userRole", role);
    
    if (role === "student") {
      router.push("/students-corner");
    } else {
      router.push("/faculty");
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Dynamic Background Decorations */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full relative z-10"
      >
        <div className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-2xl overflow-hidden border border-slate-100">
          
          {/* Header Section */}
          <div className="bg-slate-900 p-10 text-center relative overflow-hidden">
            <motion.div 
               animate={{ scale: [1, 1.05, 1] }}
               transition={{ duration: 4, repeat: Infinity }}
               className="relative z-10"
            >
              <Link href="/" className="text-white font-black text-3xl tracking-tighter inline-flex items-center gap-2">
                <ShieldCheck className="text-orange-500" size={32} />
                VIT UNIVERSITY
              </Link>
              <p className="text-orange-500 text-[10px] font-black uppercase tracking-[0.3em] mt-3 bg-orange-500/10 py-1 px-3 rounded-full inline-block">
                Authentication Gate
              </p>
            </motion.div>
            {/* Abstract pattern background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
          </div>
          
          <div className="p-8 bg-white">
            {/* Role Selection Tabs */}
            <div className="flex mb-8 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
              <button 
                type="button"
                onClick={() => setRole("student")}
                className={`flex-1 py-3 text-xs font-black uppercase tracking-widest transition-all rounded-lg flex items-center justify-center gap-2 ${
                    role === 'student' 
                    ? 'bg-white shadow-lg text-orange-600' 
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                <GraduationCap size={16} /> Student
              </button>
              <button 
                type="button"
                onClick={() => setRole("faculty")}
                className={`flex-1 py-3 text-xs font-black uppercase tracking-widest transition-all rounded-lg flex items-center justify-center gap-2 ${
                    role === 'faculty' 
                    ? 'bg-white shadow-lg text-orange-600' 
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                <User size={16} /> Faculty
              </button>
            </div>

            <form className="space-y-6" onSubmit={handleLogin}>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-slate-500 ml-1">Portal ID</label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-500 transition-colors" size={18} />
                  <input 
                    type="text" 
                    required
                    value={regId}
                    onChange={(e) => setRegId(e.target.value)}
                    className="w-full p-4 pl-12 bg-slate-50 border-2 border-slate-100 focus:border-orange-500 focus:bg-white outline-none transition-all rounded-xl text-sm font-bold" 
                    placeholder={role === 'student' ? "Registration No." : "Faculty ID"} 
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-slate-500 ml-1">Secure Password</label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-500 transition-colors" size={18} />
                  <input 
                    type="password" 
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-4 pl-12 bg-slate-50 border-2 border-slate-100 focus:border-orange-500 focus:bg-white outline-none transition-all rounded-xl text-sm font-bold" 
                    placeholder="••••••••" 
                  />
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full bg-slate-900 text-white font-black py-5 uppercase tracking-[0.2em] text-xs hover:bg-orange-600 transition-all mt-4 rounded-xl flex items-center justify-center gap-3 shadow-xl"
              >
                Enter {role} Portal <ArrowRight size={16} />
              </motion.button>
            </form>
            
            <div className="mt-8 text-center">
              <Link href="/" className="text-slate-400 text-[10px] font-black uppercase tracking-widest hover:text-orange-600 transition inline-flex items-center gap-2 group">
                <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Website
              </Link>
            </div>
          </div>
        </div>
        
        {/* Footer info */}
        <p className="text-center mt-8 text-slate-500 text-[9px] font-black uppercase tracking-[0.5em]">
          Vanguard System &copy; 2026 Node
        </p>
      </motion.div>
    </main>
  );
}