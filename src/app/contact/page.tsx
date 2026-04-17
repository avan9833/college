"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, Phone, MapPin, Send, 
  MessageSquare, Globe, Clock, CheckCircle,
  AlertCircle, ShieldCheck, Zap, ArrowRight
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isOfficeOpen, setIsOfficeOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "General Inquiry", message: "" });

  // Real-time Office Status Logic
  useEffect(() => {
    const hour = new Date().getHours();
    setIsOfficeOpen(hour >= 9 && hour < 18);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main className="min-h-screen bg-slate-50 selection:bg-orange-500 selection:text-white overflow-x-hidden">
      
      {/* --- ADVANCED HERO SECTION --- */}
      <section className="bg-slate-950 pt-44 pb-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="flex items-center gap-2 text-orange-500 font-black uppercase tracking-[0.4em] text-[10px] mb-6">
              <Zap size={14} className="animate-pulse" /> 24/7 Global Support Hub
            </span>
            <h1 className="text-7xl md:text-9xl font-black text-white uppercase italic tracking-tighter leading-[0.85]">
              Get In <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">Touch.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* --- BENTO CONTACT GRID --- */}
      <section className="max-w-7xl mx-auto px-6 -mt-20 relative z-20 pb-32">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* LEFT: INTERACTIVE FORM */}
          <motion.div 
            initial={{ y: 40, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            className="lg:col-span-7 bg-white p-10 md:p-16 rounded-[2.5rem] shadow-2xl border border-slate-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8">
               <ShieldCheck className="text-slate-100" size={80} />
            </div>

            <h2 className="text-4xl font-black uppercase italic tracking-tighter text-slate-950 mb-4">
              Dispatch <span className="text-orange-600">Comms.</span>
            </h2>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-12">Average response time: &lt; 2 Hours</p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="group space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Protocol: Name</label>
                  <input 
                    required type="text" 
                    placeholder="Identify yourself..." 
                    className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl p-5 outline-none focus:border-orange-500 focus:bg-white transition-all font-bold text-sm" 
                  />
                </div>
                <div className="group space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Protocol: Email</label>
                  <input 
                    required type="email" 
                    placeholder="return_address@host.com" 
                    className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl p-5 outline-none focus:border-orange-500 focus:bg-white transition-all font-bold text-sm" 
                  />
                </div>
              </div>
              
              <div className="group space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Subject Matter</label>
                <div className="relative">
                  <select className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl p-5 outline-none focus:border-orange-500 focus:bg-white transition-all font-bold text-sm appearance-none cursor-pointer">
                    <option>General Command</option>
                    <option>Admission Intel</option>
                    <option>Tech Support Request</option>
                   
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-30">▼</div>
                </div>
              </div>

              <div className="group space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Message Content</label>
                <textarea rows={4} placeholder="Type your transmission here..." className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl p-5 outline-none focus:border-orange-500 focus:bg-white transition-all font-bold text-sm resize-none" />
              </div>

              <button 
                type="submit"
                disabled={submitted}
                className={`w-full py-6 rounded-2xl font-black uppercase tracking-[0.4em] text-xs transition-all flex items-center justify-center gap-3 shadow-xl hover:scale-[1.02] active:scale-[0.98] ${
                  submitted ? "bg-green-600 text-white" : "bg-slate-950 text-white hover:bg-orange-600"
                }`}
              >
                {submitted ? <><CheckCircle size={18} /> Transmission Successful</> : <><Send size={18} /> Dispatch Message</>}
              </button>
            </form>
          </motion.div>

          {/* RIGHT: LIVE STATUS & BENTO INFO */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Office Status Card */}
            <div className={`p-8 rounded-[2rem] border-2 transition-all ${isOfficeOpen ? 'bg-green-50 border-green-100' : 'bg-slate-900 border-slate-800'}`}>
              <div className="flex justify-between items-center mb-6">
                <Clock size={32} className={isOfficeOpen ? 'text-green-600' : 'text-orange-600'} />
                <span className={`px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.2em] ${isOfficeOpen ? 'bg-green-600 text-white' : 'bg-orange-600 text-white'}`}>
                  {isOfficeOpen ? 'Office: Online' : 'Office: Offline'}
                </span>
              </div>
              <h3 className={`text-xl font-black uppercase italic tracking-tighter ${isOfficeOpen ? 'text-slate-900' : 'text-white'}`}>
                Operational Hours
              </h3>
              <p className={`text-xs mt-2 font-medium ${isOfficeOpen ? 'text-slate-500' : 'text-slate-400'}`}>
                Hamari team support ke liye ready hai. Offline hours mein mail drop karein, hum priority pe resolve karenge.
              </p>
            </div>

            {/* Info Bento Pieces */}
            <div className="grid gap-4">
              {[
                { icon: <Phone size={20} />, title: "Voice Line", info: "+91 9833602082", color: "bg-blue-600" },
                { icon: <Mail size={20} />, title: "Digital Mail", info: "admissions@vitnode.edu", color: "bg-orange-600" },
                { icon: <MapPin size={20} />, title: "Physical Node", info: "Mumbai, Maharashtra, India", color: "bg-slate-950" }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ x: 10 }}
                  className="bg-white p-6 rounded-2xl border border-slate-100 flex items-center gap-6 group hover:shadow-xl transition-all"
                >
                  <div className={`p-4 rounded-xl text-white ${item.color} shadow-lg shadow-inherit/20`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[9px] font-black uppercase tracking-widest text-slate-400">{item.title}</h4>
                    <p className="text-sm font-black text-slate-950 mt-0.5">{item.info}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Virtual Campus CTA */}
            <div className="bg-orange-600 p-8 rounded-[2rem] text-white relative overflow-hidden group cursor-pointer">
              <div className="relative z-10">
                <Globe size={40} className="mb-4 group-hover:rotate-45 transition-transform duration-700" />
                <h3 className="text-2xl font-black italic uppercase tracking-tighter">Virtual Tour</h3>
                <p className="text-white/80 text-[10px] font-bold mt-2 uppercase tracking-widest flex items-center gap-2">
                  Explore 3D Campus <ArrowRight size={14} />
                </p>
              </div>
              <Globe size={180} className="absolute -right-10 -bottom-10 text-white/10" />
            </div>

          </div>

        </div>
      </section>

      {/* --- FAQ SECTION: ADDING VALUE --- */}
      <section className="max-w-4xl mx-auto px-6 pb-44">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black uppercase italic tracking-tighter text-slate-900">FAQ <span className="text-orange-600">Archive</span></h2>
          <div className="w-12 h-1 bg-orange-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="space-y-4">
          {[
            { q: "Admission process kab start hoga?", a: "Academic year 2026 ke liye registrations open ho chuke hain. Details ke liye Admissions page visit karein." },
            { q: "Campus visit ke timings kya hain?", a: "Weekdays 10 AM se 4 PM tak allowed hai. Sunday ke liye appointment mandatory hai." },
            { q: "Queries ka response time kya hai?", a: "Emails ka response 24 working hours ke andar mil jayega. Urgency ke liye voice line use karein." }
          ].map((faq, i) => (
            <details key={i} className="group bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
              <summary className="p-6 font-black uppercase tracking-tight text-xs flex justify-between items-center cursor-pointer hover:bg-slate-50 transition-colors list-none">
                {faq.q}
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed font-medium">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}