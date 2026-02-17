"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, Mail, Phone, GraduationCap, 
  MapPin, CheckCircle, ArrowRight, Upload, 
  ShieldCheck 
} from "lucide-react";

export default function AdmissionsPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", course: "B.Tech CSE", city: ""
  });

  const nextStep = () => setStep(step + 1);

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* --- BACKGROUND ACCENT --- */}
      <div className="absolute top-0 left-0 w-full h-96 bg-slate-900 z-0" />

      <section className="relative z-10 pt-32 pb-20 max-w-5xl mx-auto px-6">
        
        {/* --- HEADER --- */}
        <div className="mb-12 text-center md:text-left">
          <motion.span 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block"
          >
            Enrollment 2026-27
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter">
            Admission <span className="text-orange-500">Node.</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* --- LEFT: PROGRESS TRACKER --- */}
          <div className="lg:col-span-4 space-y-4">
            {[
              { s: 1, t: "Personal Details" },
              { s: 2, t: "Academic Choice" },
              { s: 3, t: "Verification" }
            ].map((item) => (
              <div key={item.s} className="flex items-center gap-4 group">
                <div className={`w-10 h-10 flex items-center justify-center font-black border-2 transition-all ${
                  step >= item.s ? "bg-orange-600 border-orange-600 text-white" : "border-slate-800 text-slate-400"
                }`}>
                  {step > item.s ? <CheckCircle size={16} /> : item.s}
                </div>
                <span className={`text-[10px] font-black uppercase tracking-widest ${
                  step === item.s ? "text-white" : "text-slate-500"
                }`}>
                  {item.t}
                </span>
              </div>
            ))}
            
            <div className="mt-12 p-8 bg-white shadow-2xl border border-slate-100 hidden lg:block">
               <ShieldCheck className="text-orange-600 mb-4" />
               <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-900 mb-2">Secure Application</h4>
               <p className="text-[10px] text-slate-400 leading-relaxed font-bold uppercase">
                 Your data is encrypted and handled by VIT Academic Registry.
               </p>
            </div>
          </div>

          {/* --- RIGHT: THE FORM CARD --- */}
          <div className="lg:col-span-8 bg-white p-8 md:p-12 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border border-slate-50">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                      <User size={12} /> Full Name
                    </label>
                    <input type="text" placeholder="John Doe" className="w-full p-4 bg-slate-50 border border-slate-100 focus:border-orange-600 outline-none font-bold uppercase text-xs" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                        <Mail size={12} /> Email
                      </label>
                      <input type="email" placeholder="john@example.com" className="w-full p-4 bg-slate-50 border border-slate-100 focus:border-orange-600 outline-none font-bold uppercase text-xs" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                        <Phone size={12} /> Phone
                      </label>
                      <input type="text" placeholder="+91 00000 00000" className="w-full p-4 bg-slate-50 border border-slate-100 focus:border-orange-600 outline-none font-bold uppercase text-xs" />
                    </div>
                  </div>
                  <button onClick={nextStep} className="w-full py-5 bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] hover:bg-orange-600 transition-all flex items-center justify-center gap-3">
                    Continue to Academics <ArrowRight size={14} />
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                   <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                      <GraduationCap size={12} /> Select Course
                    </label>
                    <select className="w-full p-4 bg-slate-50 border border-slate-100 focus:border-orange-600 outline-none font-bold uppercase text-xs appearance-none">
                      <option>B.Tech Computer Science</option>
                      <option>B.Tech AI & Data Science</option>
                      <option>BBA International Business</option>
                      <option>B.Tech Cyber Security</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                      <MapPin size={12} /> Home City
                    </label>
                    <input type="text" placeholder="Mumbai" className="w-full p-4 bg-slate-50 border border-slate-100 focus:border-orange-600 outline-none font-bold uppercase text-xs" />
                  </div>
                  <div className="flex gap-4">
                    <button onClick={() => setStep(1)} className="w-1/3 py-5 bg-slate-100 text-slate-900 font-black uppercase tracking-widest text-[10px]">Back</button>
                    <button onClick={nextStep} className="w-2/3 py-5 bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] hover:bg-orange-600 transition-all">Submit Selection</button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  key="step3" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-900 mb-2">Application Received</h3>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-10">Reference ID: #VIT-2026-X99</p>
                  <button onClick={() => window.location.href = '/'} className="px-12 py-5 bg-orange-600 text-white font-black uppercase tracking-widest text-[10px]">Return to Home</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </main>
  );
}