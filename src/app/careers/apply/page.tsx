"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, ChevronLeft, Upload, 
  ShieldCheck, User, Briefcase, GraduationCap, 
  CheckCircle2, Loader2, Link as LinkIcon, FileText
} from "lucide-react";
import Navbar from "@/components/landing/Navbar";

export default function ApplicationForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // --- MASTER FORM STATE ---
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    noticePeriod: "",
    portfolio: "",
    resume: null as File | null
  });

  // --- HANDLERS ---
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      console.log("FINAL DOSSIER SUBMITTED:", formData);
    }, 2500);
  };

  return (
    <main className="min-h-screen bg-slate-50 selection:bg-orange-500 selection:text-white">
      <Navbar />

      <div className="pt-32 pb-20 max-w-4xl mx-auto px-6">
        
        {/* --- STEP INDICATOR --- */}
        {!isSuccess && (
          <div className="flex items-center justify-between mb-12 bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm">
            {[
              { s: 1, i: User, t: "Identity" },
              { s: 2, i: Briefcase, t: "Dossier" },
              { s: 3, i: FileText, t: "Uplink" }
            ].map((item) => (
              <div key={item.s} className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  step >= item.s ? "bg-orange-600 text-white shadow-lg shadow-orange-600/30" : "bg-slate-100 text-slate-400"
                }`}>
                  <item.i size={18} />
                </div>
                <span className={`text-[10px] font-black uppercase tracking-widest hidden md:block ${
                  step >= item.s ? "text-slate-900" : "text-slate-300"
                }`}>{item.t}</span>
                {item.s < 3 && <div className="w-8 h-[2px] bg-slate-100 ml-2" />}
              </div>
            ))}
          </div>
        )}

        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.form 
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white border-2 border-slate-100 rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-slate-200/50"
            >
              
              {/* --- STEP 1: PERSONAL IDENTITY --- */}
              {step === 1 && (
                <motion.div initial={{ x: 20 }} animate={{ x: 0 }} className="space-y-8">
                  <div className="border-l-4 border-orange-600 pl-6 mb-10">
                    <h2 className="text-3xl font-black uppercase italic tracking-tighter text-slate-900">Personal Identity</h2>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Node_01: Basic Personnel Data</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Full Name</label>
                      <input required name="fullName" value={formData.fullName} onChange={handleInputChange} type="text" placeholder="EX: RAJESH SHARMA" className="w-full p-5 bg-slate-50 border-2 border-slate-50 rounded-2xl outline-none focus:border-orange-500 focus:bg-white transition-all font-bold uppercase text-xs" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Secure Email</label>
                      <input required name="email" value={formData.email} onChange={handleInputChange} type="email" placeholder="ADMIN@VANGUARD.EDU" className="w-full p-5 bg-slate-50 border-2 border-slate-50 rounded-2xl outline-none focus:border-orange-600 focus:bg-white transition-all font-bold uppercase text-xs" />
                    </div>
                  </div>
                  
                  <button type="button" onClick={nextStep} className="w-full md:w-fit px-12 py-5 bg-slate-950 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-orange-600 transition-all ml-auto mt-10">
                    Continue Protocol <ChevronRight size={16} />
                  </button>
                </motion.div>
              )}

              {/* --- STEP 2: PROFESSIONAL DOSSIER --- */}
              {step === 2 && (
                <motion.div initial={{ x: 20 }} animate={{ x: 0 }} className="space-y-8">
                   <div className="border-l-4 border-orange-600 pl-6 mb-10">
                    <h2 className="text-3xl font-black uppercase italic tracking-tighter text-slate-900">Professional Dossier</h2>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Node_02: Experience & Alignment</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Total Experience (Years)</label>
                      <input required name="experience" value={formData.experience} onChange={handleInputChange} type="number" placeholder="05" className="w-full p-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-orange-600 outline-none transition-all font-bold" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Notice Period (Days)</label>
                      <input required name="noticePeriod" value={formData.noticePeriod} onChange={handleInputChange} type="text" placeholder="30 DAYS" className="w-full p-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-orange-600 outline-none transition-all font-bold uppercase" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-10">
                    <button type="button" onClick={prevStep} className="px-8 py-5 border-2 border-slate-100 text-slate-400 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-3 hover:border-slate-900 hover:text-slate-900 transition-all">
                      <ChevronLeft size={16} /> Back
                    </button>
                    <button type="button" onClick={nextStep} className="px-12 py-5 bg-slate-950 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-orange-600 transition-all">
                      Continue <ChevronRight size={16} />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* --- STEP 3: FILE UPLINK --- */}
              {step === 3 && (
                <motion.div initial={{ x: 20 }} animate={{ x: 0 }} className="space-y-8">
                   <div className="border-l-4 border-orange-600 pl-6 mb-10">
                    <h2 className="text-3xl font-black uppercase italic tracking-tighter text-slate-900">Document Uplink</h2>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Node_03: Verified Credentials</p>
                  </div>

                  <div className="relative border-2 border-dashed border-slate-200 rounded-[2.5rem] p-16 text-center hover:border-orange-500 transition-all bg-slate-50 group">
                    <input type="file" onChange={handleFileChange} className="absolute inset-0 opacity-0 cursor-pointer" />
                    <Upload size={48} className="mx-auto text-slate-300 group-hover:text-orange-500 group-hover:scale-110 transition-all mb-6" />
                    <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-2">
                      {formData.resume ? formData.resume.name : "Drag & Drop Resume (PDF)"}
                    </h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Max File Size: 10MB — Verified Uplink Only</p>
                  </div>

                  <div className="flex items-center justify-between mt-10">
                    <button type="button" onClick={prevStep} className="px-8 py-5 border-2 border-slate-100 text-slate-400 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-3 hover:border-slate-900 hover:text-slate-900 transition-all">
                      <ChevronLeft size={16} /> Back
                    </button>
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="px-12 py-5 bg-orange-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-slate-950 transition-all shadow-xl shadow-orange-600/20 active:scale-95 disabled:opacity-50"
                    >
                      {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : <ShieldCheck size={18} />}
                      Authorize Submission
                    </button>
                  </div>
                </motion.div>
              )}

            </motion.form>
          ) : (
            
            /* --- SUCCESS NODE --- */
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white border-2 border-slate-100 rounded-[3rem] p-20 text-center shadow-2xl"
            >
              <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                <CheckCircle2 size={48} />
              </div>
              <h2 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 mb-4">Transmission Successful</h2>
              <p className="text-slate-400 text-sm font-bold uppercase tracking-widest max-w-sm mx-auto leading-relaxed">
                Your dossier has been encrypted and sent to the HR central node. Check your email for authentication details.
              </p>
              <button 
                onClick={() => window.location.href = "/"}
                className="mt-12 px-10 py-5 bg-slate-950 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-all"
              >
                Return to Core
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </main>
  );
}