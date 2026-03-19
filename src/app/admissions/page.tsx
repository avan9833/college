"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle, ChevronRight, ArrowLeft, 
  Upload, AlertCircle, Loader2, FileText, 
  GraduationCap, Home, Info, ShieldCheck, User, Phone, Calendar
} from "lucide-react";

// --- CONFIG ---
const PROGRAMS = {
  Undergraduate: ["BBA", "BCA", "B.COM", "BA", "B.TECH"],
  "Post Graduate": ["MBA", "M.TECH", "MA", "MCA"]
};

const LOCATIONS = {
  Maharashtra: ["Mumbai", "Pune", "Nagpur"],
  Karnataka: ["Bangalore", "Mysore", "Hubli"],
  Delhi: ["New Delhi", "North Delhi"]
};

export default function AdmissionPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // ADDED MORE STATES HERE
  const [formData, setFormData] = useState({
    // Personal
    fullName: "", 
    email: "", 
    phone: "",
    dob: "",
    gender: "",
    bloodGroup: "",
    // Address
    state: "", 
    city: "",
    address: "",
    pincode: "",
    // Parental
    parentName: "",
    parentPhone: "",
    // Academic
    programType: "" as "Undergraduate" | "Post Graduate" | "",
    selectedCourse: "",
    // Docs
    doc10th: "", doc12th: "", docLC: "",
    docMHTCET: "", docJEE: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const file = e.target.files?.[0];
    if (file) setFormData({ ...formData, [field]: file.name });
  };

  const canProgress = () => {
    if (currentStep === 0) {
        return formData.fullName && formData.email && formData.phone && formData.dob && formData.state;
    }
    if (currentStep === 1) return formData.programType && formData.selectedCourse;
    if (currentStep === 2) return formData.doc10th && formData.doc12th && formData.docLC;
    return true;
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => { setIsSuccess(true); setIsSubmitting(false); }, 2000);
  };

  if (isSuccess) {
    return (
      <main className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          className="max-w-md w-full bg-white border-4 border-orange-600 p-8 text-center shadow-[12px_12px_0px_#ea580c]">
          <CheckCircle size={48} className="mx-auto text-emerald-500 mb-4" />
          <h2 className="text-2xl font-black uppercase italic text-slate-900 leading-tight">Registration <br/> Successful</h2>
          <p className="text-[10px] font-bold text-slate-400 mt-2 mb-8 tracking-[0.2em] uppercase">Node Enrollment Verified</p>
          <button onClick={() => window.location.href = "/"} className="w-full bg-slate-900 text-white py-4 font-black uppercase text-xs tracking-widest hover:bg-orange-600 transition-all">Return Home</button>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC] p-4 md:p-8 pt-10 md:pt-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-6xl font-black uppercase italic tracking-tighter mb-8 md:mb-12 text-slate-900 leading-none">
          Admission <span className="text-orange-600">Terminal.</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-12">
          {/* STEP TRACKER */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible lg:w-1/4 pb-2 lg:pb-0 no-scrollbar">
            {["Identity", "Academic", "Docs", "Review"].map((step, i) => (
              <div key={i} className={`p-3 md:p-4 border-2 flex-shrink-0 flex items-center gap-3 transition-all ${currentStep === i ? 'border-slate-900 bg-white shadow-[4px_4px_0px_#000]' : 'border-transparent text-slate-400'}`}>
                <div className={`w-5 h-5 flex items-center justify-center text-[9px] font-black ${currentStep >= i ? 'bg-orange-600 text-white' : 'bg-slate-200'}`}>
                  {i + 1}
                </div>
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest whitespace-nowrap">{step}</span>
              </div>
            ))}
          </div>

          {/* MAIN TERMINAL CONTAINER */}
          <div className="flex-1 bg-white border-2 border-slate-900 shadow-[8px_8px_0px_#ea580c] md:shadow-[14px_14px_0px_#ea580c] overflow-hidden flex flex-col">
            <div className="bg-slate-900 p-3 flex gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="ml-auto text-[7px] font-black text-white/30 uppercase tracking-widest">vanguard_v2.0_full_state</span>
            </div>

            <div className="p-5 md:p-10 min-h-[420px] md:min-h-[550px] flex-1">
              <AnimatePresence mode="wait">
                <motion.div key={currentStep} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  
                  {/* STEP 0: IDENTITY (Expanded) */}
                  {currentStep === 0 && (
                    <div className="space-y-6">
                      <h2 className="text-xl md:text-2xl font-black uppercase italic text-slate-900 underline decoration-orange-600 underline-offset-4">Identity Node</h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        {/* Column 1 */}
                        <div className="space-y-4">
                          <div>
                            <label className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 block">Full Legal Name</label>
                            <input name="fullName" placeholder="ENTER NAME" onChange={handleInputChange} value={formData.fullName} className="w-full border-b-2 border-slate-100 py-2 font-bold uppercase focus:border-orange-600 outline-none text-sm" />
                          </div>
                          <div>
                            <label className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 block">Date of Birth</label>
                            <input name="dob" type="date" onChange={handleInputChange} value={formData.dob} className="w-full border-b-2 border-slate-100 py-2 font-bold uppercase focus:border-orange-600 outline-none text-sm" />
                          </div>
                          <div>
                            <label className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 block">Gender</label>
                            <select name="gender" onChange={handleInputChange} value={formData.gender} className="w-full border-b-2 border-slate-100 py-2 font-bold outline-none text-xs uppercase">
                                <option value="">SELECT GENDER</option>
                                <option value="MALE">MALE</option>
                                <option value="FEMALE">FEMALE</option>
                                <option value="OTHER">OTHER</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 block">Parent's Name</label>
                            <input name="parentName" placeholder="FATHER/MOTHER NAME" onChange={handleInputChange} value={formData.parentName} className="w-full border-b-2 border-slate-100 py-2 font-bold uppercase focus:border-orange-600 outline-none text-sm" />
                          </div>
                        </div>

                        {/* Column 2 */}
                        <div className="space-y-4">
                          <div>
                            <label className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 block">Contact Email</label>
                            <input name="email" placeholder="EMAIL ADDRESS" onChange={handleInputChange} value={formData.email} className="w-full border-b-2 border-slate-100 py-2 font-bold uppercase focus:border-orange-600 outline-none text-sm" />
                          </div>
                          <div>
                            <label className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 block">Phone Number</label>
                            <input name="phone" placeholder="+91 XXXXX XXXXX" onChange={handleInputChange} value={formData.phone} className="w-full border-b-2 border-slate-100 py-2 font-bold uppercase focus:border-orange-600 outline-none text-sm" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 block">State</label>
                                <select name="state" onChange={handleInputChange} value={formData.state} className="w-full border-b-2 border-slate-100 py-2 font-bold outline-none text-xs">
                                    <option value="">STATE</option>
                                    {Object.keys(LOCATIONS).map(s => <option key={s} value={s}>{s}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 block">City</label>
                                <select name="city" onChange={handleInputChange} value={formData.city} disabled={!formData.state} className="w-full border-b-2 border-slate-100 py-2 font-bold outline-none text-xs disabled:opacity-30">
                                    <option value="">CITY</option>
                                    {formData.state && LOCATIONS[formData.state as keyof typeof LOCATIONS].map(c => <option key={c} value={c}>{c}</option>)}
                                </select>
                            </div>
                          </div>
                          <div>
                            <label className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 block">Postal Code</label>
                            <input name="pincode" placeholder="XXXXXX" onChange={handleInputChange} value={formData.pincode} className="w-full border-b-2 border-slate-100 py-2 font-bold uppercase focus:border-orange-600 outline-none text-sm" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 1 & 2 remain largely same as your original logic but with your config */}
                  {currentStep === 1 && (
                     <div className="space-y-6">
                     <h2 className="text-xl md:text-2xl font-black uppercase italic text-slate-900 underline decoration-orange-600 underline-offset-4">Academic Node</h2>
                     <div className="flex flex-col sm:flex-row gap-3">
                       {Object.keys(PROGRAMS).map((type) => (
                         <button key={type} onClick={() => setFormData({...formData, programType: type as any, selectedCourse: ""})}
                           className={`flex-1 p-3 border-2 font-black uppercase text-[10px] tracking-widest transition-all ${formData.programType === type ? 'border-slate-900 bg-slate-900 text-white shadow-[4px_4px_0px_#ea580c]' : 'border-slate-100 text-slate-400'}`}>
                           {type}
                         </button>
                       ))}
                     </div>
                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-3">
                       {formData.programType && PROGRAMS[formData.programType].map((course) => (
                         <button key={course} onClick={() => setFormData({...formData, selectedCourse: course})}
                           className={`p-3 border-2 text-center transition-all ${formData.selectedCourse === course ? 'border-orange-600 bg-orange-50' : 'border-slate-100 hover:border-slate-300'}`}>
                           <span className={`font-black uppercase text-[10px] ${formData.selectedCourse === course ? 'text-orange-600' : 'text-slate-900'}`}>{course}</span>
                         </button>
                       ))}
                     </div>
                   </div>
                  )}

                  {/* STEP 2: DOCS */}
                  {currentStep === 2 && (
                     <div className="space-y-8">
                     <h2 className="text-xl md:text-2xl font-black uppercase italic text-slate-900 underline decoration-orange-600 underline-offset-4">Documentation</h2>
                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                       {[
                         { id: "doc10th", label: "10th Marksheet", val: formData.doc10th },
                         { id: "doc12th", label: "12th Marksheet", val: formData.doc12th },
                         { id: "docLC", label: "Leaving Cert", val: formData.docLC }
                       ].map((doc) => (
                         <label key={doc.id} className={`p-4 border-2 border-dashed flex flex-col items-center justify-center text-center cursor-pointer transition-all ${doc.val ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200 hover:border-slate-900'}`}>
                           <input type="file" className="hidden" onChange={(e) => handleFileUpload(e, doc.id)} />
                           <FileText size={20} className={doc.val ? "text-emerald-500" : "text-slate-300"} />
                           <span className="text-[9px] font-black uppercase mt-2">{doc.label}</span>
                           <p className="text-[7px] font-bold text-slate-400 mt-1 truncate w-full px-1">{doc.val || "UPLOAD PDF"}</p>
                         </label>
                       ))}
                     </div>
                     <div className="space-y-3 pt-6 border-t border-slate-100">
                       <h3 className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2"><Info size={14} className="text-orange-600"/> Entrance Scorecards</h3>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                         {[
                           { id: "docMHTCET", label: "MHT CET Scorecard", val: formData.docMHTCET },
                           { id: "docJEE", label: "JEE MAINS Scorecard", val: formData.docJEE }
                         ].map((doc) => (
                           <label key={doc.id} className={`p-4 border-2 flex items-center justify-between cursor-pointer transition-all ${doc.val ? 'border-orange-600 bg-orange-50/50' : 'border-slate-100 hover:bg-slate-50'}`}>
                             <input type="file" className="hidden" onChange={(e) => handleFileUpload(e, doc.id)} />
                             <div className="flex items-center gap-3">
                               <Upload size={14} className={doc.val ? 'text-orange-600' : 'text-slate-300'} />
                               <span className="text-[10px] font-black uppercase text-slate-900">{doc.label}</span>
                             </div>
                             {doc.val && <CheckCircle size={14} className="text-orange-600" />}
                           </label>
                         ))}
                       </div>
                     </div>
                   </div>
                  )}

                  {/* STEP 3: REVIEW */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <h2 className="text-xl md:text-2xl font-black uppercase italic text-slate-900 underline decoration-orange-600 underline-offset-4">Final Review</h2>
                      <div className="bg-slate-50 p-5 border-2 border-slate-100 space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-[9px] font-bold uppercase">
                            <div className="text-slate-400">Name: <span className="text-slate-900 ml-2">{formData.fullName}</span></div>
                            <div className="text-slate-400">Phone: <span className="text-slate-900 ml-2">{formData.phone}</span></div>
                            <div className="text-slate-400">Parent: <span className="text-slate-900 ml-2">{formData.parentName}</span></div>
                            <div className="text-slate-400">Course: <span className="text-orange-600 ml-2">{formData.selectedCourse}</span></div>
                            <div className="text-slate-400">Location: <span className="text-slate-900 ml-2">{formData.city}, {formData.state}</span></div>
                            <div className="text-slate-400">DOB: <span className="text-slate-900 ml-2">{formData.dob}</span></div>
                        </div>
                      </div>
                    </div>
                  )}

                </motion.div>
              </AnimatePresence>
            </div>

            {/* NAV FOOTER */}
            <div className="p-5 border-t-2 border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-50/50">
              <button onClick={() => setCurrentStep(s => s - 1)} disabled={currentStep === 0} className="text-[10px] font-black uppercase text-slate-400 disabled:opacity-0 order-2 md:order-1">
                <ArrowLeft className="inline mr-2" size={14}/> Back
              </button>
              
              <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto order-1 md:order-2">
                {!canProgress() && <span className="text-[8px] font-black text-orange-600 uppercase animate-pulse">Required Fields Missing</span>}
                <button 
                  onClick={() => currentStep === 3 ? handleSubmit() : setCurrentStep(s => s + 1)}
                  disabled={!canProgress() || isSubmitting}
                  className="w-full md:w-[180px] bg-slate-900 text-white py-4 font-black uppercase text-[10px] tracking-widest hover:bg-orange-600 disabled:opacity-20 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? <Loader2 className="animate-spin" size={14}/> : currentStep === 3 ? "Finalize Entry" : "Next Step"}
                  <ChevronRight size={14}/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}