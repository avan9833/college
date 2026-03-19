"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, Phone, MapPin, Send, 
  MessageSquare, Globe, Clock, CheckCircle 
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section className="bg-slate-950 pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-500 font-black uppercase tracking-[0.5em] text-[10px] mb-4 block"
          >
            Get In Touch
          </motion.span>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-none"
          >
            Contact <span className="text-orange-600">Node.</span>
          </motion.h1>
        </div>
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <Globe className="absolute -right-20 -top-20 text-white" size={600} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-20 pb-20">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* --- LEFT: CONTACT FORM --- */}
          <div className="lg:col-span-7">
            <div className="bg-white p-10 md:p-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-100">
              <h2 className="text-3xl font-black uppercase italic tracking-tighter text-slate-900 mb-10">
                Send a <span className="text-orange-600">Message</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Full Name</label>
                    <input required type="text" placeholder="John Doe" className="w-full bg-slate-50 border-b-2 border-slate-100 p-4 outline-none focus:border-orange-600 transition-all font-bold text-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</label>
                    <input required type="email" placeholder="john@example.com" className="w-full bg-slate-50 border-b-2 border-slate-100 p-4 outline-none focus:border-orange-600 transition-all font-bold text-sm" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Subject</label>
                  <select className="w-full bg-slate-50 border-b-2 border-slate-100 p-4 outline-none focus:border-orange-600 transition-all font-bold text-sm appearance-none cursor-pointer">
                    <option>General Inquiry</option>
                    <option>Admission Support</option>
                    <option>Technical Help</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Message</label>
                  <textarea rows={5} placeholder="How can we help you?" className="w-full bg-slate-50 border-b-2 border-slate-100 p-4 outline-none focus:border-orange-600 transition-all font-bold text-sm resize-none" />
                </div>

                <button 
                  type="submit"
                  disabled={submitted}
                  className={`w-full py-5 font-black uppercase tracking-[0.3em] text-[10px] transition-all flex items-center justify-center gap-3 ${
                    submitted ? "bg-green-600 text-white" : "bg-slate-950 text-white hover:bg-orange-600"
                  }`}
                >
                  {submitted ? (
                    <><CheckCircle size={16} /> Message Sent Successfully</>
                  ) : (
                    <><Send size={16} /> Dispatch Message</>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* --- RIGHT: CONTACT INFO --- */}
          <div className="lg:col-span-5 space-y-8">
            {/* Info Cards */}
            <div className="grid gap-4">
              {[
                { icon: <Phone />, title: "Call Center", info: "+91 9833602082", sub: "Mon-Sat, 9AM-6PM" },
                { icon: <Mail />, title: "Email Support", info: "support@vitnode.edu", sub: "24/7 Response time" },
                { icon: <MapPin />, title: "Campus Address", info: "maharahstra,buddh nagar india", sub: "Maharashtra, India" }
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 p-8 border-l-4 border-orange-600 group hover:bg-white hover:shadow-xl transition-all">
                  <div className="text-slate-300 group-hover:text-orange-600 transition-colors mb-4">{item.icon}</div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">{item.title}</h4>
                  <p className="text-lg font-black text-slate-900 mt-1">{item.info}</p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase mt-2">{item.sub}</p>
                </div>
              ))}
            </div>

            {/* Quick Map Placeholder */}
            
            <div className="bg-slate-900 p-10 text-white relative overflow-hidden group">
              <Clock className="text-orange-600 mb-6" size={32} />
              <h3 className="text-xl font-black italic uppercase tracking-tighter">Office Hours</h3>
              <p className="text-sm text-slate-400 mt-4 leading-relaxed">
                Hamari team Admissions aur Documents ke liye weekdays pe available hai. Sunday ko campus visit ke liye pehle appointment book karein.
              </p>
              <button className="mt-8 flex items-center gap-2 text-orange-500 font-black uppercase text-[10px] tracking-widest group-hover:translate-x-2 transition-transform">
                Visit Virtual Campus <MessageSquare size={14} />
              </button>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}