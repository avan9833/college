"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Globe, Award, Users, Zap, Shield, Target } from "lucide-react";
import Programs from "@/components/landing/Programs";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen bg-white overflow-hidden">
      
      {/* --- ULTRA-MODERN HERO SECTION --- */}
      <section className="relative h-[95vh] flex items-center justify-center bg-slate-950">
        {/* Animated Background Overlay */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986')] bg-cover bg-center"
          />
          {/* Glowing Orbs for Depth */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse delay-700" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-white" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 border border-orange-500/30 bg-orange-500/10 rounded-full text-orange-500 text-[10px] font-black uppercase tracking-[0.4em]">
              The Future of Learning
            </span>
            <h1 className="text-[clamp(3.5rem,12vw,11rem)] font-black text-white uppercase italic tracking-tighter leading-[0.85]">
              VIT <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-600">UNLIMITED.</span>
            </h1>
            
            <p className="mt-10 text-slate-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed uppercase tracking-tight">
              A global powerhouse for <span className="text-white font-bold">research</span>, <span className="text-white font-bold">innovation</span>, and <span className="text-white font-bold">elite placement</span> opportunities.
            </p>

            <div className="mt-14 flex flex-wrap justify-center gap-8">
              <Link href="/admissions" className="group px-14 py-6 bg-orange-600 text-white font-black uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-orange-600 transition-all shadow-[0_0_40px_rgba(234,88,12,0.3)]">
                Enroll for 2026 <ArrowRight className="inline-block ml-3 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link href="/campus" className="group flex items-center gap-4 text-white font-black uppercase tracking-widest text-xs">
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-slate-900 transition-all">
                  <Play size={13} fill="currentColor" />
                </div>
                Virtual Experience
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- FLOATING METRICS (Bento Grid) --- */}
      <section className="relative z-20 -mt-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Placements", val: "₹52 LPA Max", icon: <Award />, desc: "Top Tier Global Hiring" },
            { label: "Community", val: "15k+ Students", icon: <Users />, desc: "Diverse Global Culture" },
            { label: "Research", val: "A++ Grade", icon: <Shield />, desc: "NAAC Highest Rating" },
            { label: "Network", val: "400+ Partners", icon: <Globe />, desc: "Industry Integrated" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-50 flex flex-col justify-between h-64 group cursor-pointer hover:bg-slate-950 transition-colors duration-500"
            >
              <div className="text-orange-600 group-hover:text-white transition-colors">{item.icon}</div>
              <div>
                <h3 className="text-3xl font-black italic tracking-tighter text-slate-900 group-hover:text-white">{item.val}</h3>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">{item.label}</p>
                <p className="text-[9px] font-bold text-slate-300 uppercase mt-4 opacity-0 group-hover:opacity-100 transition-opacity">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- THE VISION SECTION --- */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="relative">
                 <div className="absolute -top-10 -left-10 text-[15rem] font-black text-slate-50 select-none z-0">VIT</div>
                 <motion.div 
                   whileInView={{ scale: [0.95, 1] }}
                   className="relative z-10 aspect-[4/5] bg-slate-100 overflow-hidden"
                 >
                   <img 
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                   />
                 </motion.div>
              </div>
              
              <div className="space-y-10">
                 <span className="text-orange-600 font-black uppercase tracking-[0.4em] text-[10px]">Academic Prowess</span>
                 <h2 className="text-6xl font-black uppercase tracking-tighter italic leading-none">
                    Engineering <br /> <span className="text-orange-600 underline decoration-slate-100 underline-offset-8">Humanity.</span>
                 </h2>
                 <p className="text-slate-500 text-lg font-medium leading-relaxed">
                    At Vanguard Institute of Technology, we don't just teach code or business; we architect the problem-solvers of tomorrow. 
                 </p>
                 
                 <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-4">
                       <Zap className="text-orange-600" />
                       <h4 className="font-black uppercase tracking-widest text-xs">Fast-Track Learning</h4>
                    </div>
                    <div className="space-y-4">
                       <Target className="text-orange-600" />
                       <h4 className="font-black uppercase tracking-widest text-xs">Precision Mentorship</h4>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <Programs />

      <footer className="py-20 bg-slate-950 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-white text-2xl font-black uppercase tracking-widest mb-10">Vanguard Institute of Technology</h2>
          <div className="flex justify-center gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
            <Link href="/privacy" className="hover:text-orange-500 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-orange-500 transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-orange-500 transition-colors">Support</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}