"use client";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [role, setRole] = useState("student");

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white shadow-2xl rounded-sm overflow-hidden border border-slate-100">
        <div className="bg-slate-900 p-8 text-center">
          <Link href="/" className="text-white font-black text-2xl tracking-tighter">VIT UNIVERSITY</Link>
          <p className="text-slate-400 text-xs uppercase tracking-widest mt-2 font-bold">University Portal</p>
        </div>
        
        <div className="p-8">
          <div className="flex mb-8 bg-slate-100 p-1 rounded-sm">
            <button 
              onClick={() => setRole("student")}
              className={`flex-1 py-2 text-xs font-bold uppercase transition-all ${role === 'student' ? 'bg-white shadow-sm text-orange-600' : 'text-slate-400'}`}
            >Student</button>
            <button 
              onClick={() => setRole("faculty")}
              className={`flex-1 py-2 text-xs font-bold uppercase transition-all ${role === 'faculty' ? 'bg-white shadow-sm text-orange-600' : 'text-slate-400'}`}
            >Faculty</button>
          </div>

          <form className="space-y-4">
            <div>
              <label className="text-[10px] font-black uppercase text-slate-400">Registration ID</label>
              <input type="text" className="w-full p-4 mt-1 bg-slate-50 border border-slate-200 focus:border-orange-500 outline-none transition-all rounded-sm text-sm" placeholder="e.g. VIT2026001" />
            </div>
            <div>
              <label className="text-[10px] font-black uppercase text-slate-400">Password</label>
              <input type="password" className="w-full p-4 mt-1 bg-slate-50 border border-slate-200 focus:border-orange-500 outline-none transition-all rounded-sm text-sm" placeholder="••••••••" />
            </div>
            <button className="w-full bg-slate-900 text-white font-black py-4 uppercase tracking-widest text-xs hover:bg-orange-600 transition-all mt-4">
              Sign In to {role} Portal
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <Link href="/students-corner" className="text-slate-400 text-[10px] font-bold uppercase hover:text-orange-600 transition">← Back to Website</Link>
          </div>
        </div>
      </div>
    </main>
  );
}