"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import { 
  Building2, Briefcase, GraduationCap, 
  TrendingUp, Globe2, Users2, CheckCircle2,
  Award, Rocket, Laptop, BarChart3
} from "lucide-react";

export default function PlacementPage() {
  const stats = [
    { label: "Highest Package", val: "₹52 LPA", icon: <TrendingUp className="w-6 h-6" /> },
    { label: "Average Package", val: "₹12.5 LPA", icon: <BarChart3 className="w-6 h-6" /> },
    { label: "Recruiting Partners", val: "500+", icon: <Building2 className="w-6 h-6" /> },
    { label: "Global Internships", val: "120+", icon: <Globe2 className="w-6 h-6" /> },
  ];

  const trainingPhases = [
    { 
      phase: "Phase 01: Foundations", 
      desc: "Focused on quantitative aptitude, logical reasoning, and verbal ability to clear initial screening rounds." 
    },
    { 
      phase: "Phase 02: Technical Rigor", 
      desc: "Deep-dive bootcamps on Data Structures, Algorithms, Full-stack development, and industry-specific tech stacks." 
    },
    { 
      phase: "Phase 03: Professionalism", 
      desc: "Mock HR interviews, group discussion drills, and personality development workshops led by industry veterans." 
    }
  ];

  return (
    <main className="min-h-screen bg-white selection:bg-orange-500 selection:text-white">
      <Navbar isScrolled={true} />

      {/* --- HERO SECTION: HIGH-IMPACT GRADIENT --- */}
      <section className="relative pt-40 pb-32 bg-slate-950 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-600 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center md:text-left grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-black uppercase tracking-[0.4em] mb-6">
              Empowering Career Trajectories
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-none">
              Elite <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">Placements.</span>
            </h1>
            <p className="mt-8 text-slate-400 font-light text-lg leading-relaxed max-w-lg">
              At VIT, we don't just provide jobs; we architect careers. Our placement cell works in tandem with global conglomerates to ensure our graduates are "Day 1 Ready" for the digital economy.
            </p>
            <div className="mt-10 flex gap-4 justify-center md:justify-start">
              <Link href="/admissions" className="px-8 py-4 bg-orange-600 text-white font-black uppercase text-xs tracking-widest hover:bg-white hover:text-orange-600 transition-all">
                Join 2026 Batch
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-sm hover:border-orange-500/50 transition-all group"
              >
                <div className="text-orange-500 mb-4 group-hover:scale-110 transition-transform">{stat.icon}</div>
                <div className="text-3xl font-black text-white leading-none">{stat.val}</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PLACEMENT CELL METHODOLOGY --- */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070" 
                className="rounded-sm shadow-2xl" 
                alt="Placement Training"
              />
            </motion.div>
            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-orange-500 z-0 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
          </div>

          <div>
            <h2 className="text-5xl font-black text-slate-900 uppercase tracking-tighter italic">The VIT <span className="text-orange-600">Blueprint.</span></h2>
            <p className="mt-6 text-slate-500 leading-relaxed">
              Our Training & Placement Cell (TPC) is a high-octane environment where students undergo a transformative journey. We have pioneered a 360-degree development model that covers everything from technical proficiency to emotional intelligence.
            </p>
            
            <div className="mt-10 space-y-8">
              {trainingPhases.map((phase, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="text-orange-600 font-black text-xl">0{i+1}</div>
                  <div>
                    <h4 className="text-slate-900 font-black uppercase text-sm tracking-tight">{phase.phase}</h4>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- INTERNSHIP & PLACEMENT DIRECTORY --- */}
      <section className="py-32 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black uppercase text-slate-900 italic tracking-tighter">Global <span className="text-orange-600">Internship</span> Program</h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
              Our internship program is designed to provide real-world exposure across all academic disciplines. Every student at VIT must complete at least 6 months of corporate or research internship.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                school: "School of Engineering", 
                intern: "Industry 4.0 internships with hands-on AI & ML project roles.", 
                recruiters: ["Tesla", "Google", "SpaceX", "Microsoft"] 
              },
              { 
                school: "School of Management", 
                intern: "Managerial internships focusing on financial modeling & market analytics.", 
                recruiters: ["JP Morgan", "Deloitte", "KPMG", "PwC"] 
              },
              { 
                school: "School of Design", 
                intern: "Design studio internships focusing on UI/UX and Industrial design.", 
                recruiters: ["Landor", "Ogilvy", "Pinterest", "Apple"] 
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 border border-slate-100 shadow-xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                   <Award className="w-20 h-20" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-6">{item.school}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-8 italic border-l-2 border-orange-500 pl-4">
                  "{item.intern}"
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.recruiters.map((r, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-100 text-[9px] font-bold uppercase tracking-widest text-slate-600 rounded-sm">
                      {r}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- AUTO-SCROLLING LOGO MARQUEE --- */}
      <section className="py-20 bg-white border-t border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] font-black uppercase tracking-[0.6em] text-slate-400 mb-12">Recruiting Excellence</p>
          
          <div className="flex gap-16 animate-marquee whitespace-nowrap opacity-40 grayscale hover:grayscale-0 transition-all cursor-default">
            {['MICROSOFT', 'GOOGLE', 'AMAZON', 'DELOITTE', 'TESLA', 'INFOSYS', 'NVIDIA', 'APPLE', 'META', 'KPMG'].map((logo, i) => (
              <span key={i} className="text-3xl font-black tracking-tighter">{logo}</span>
            ))}
            {/* Repeat for seamless loop */}
            {['MICROSOFT', 'GOOGLE', 'AMAZON', 'DELOITTE', 'TESLA', 'INFOSYS', 'NVIDIA', 'APPLE', 'META', 'KPMG'].map((logo, i) => (
              <span key={i} className="text-3xl font-black tracking-tighter">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-32 bg-slate-950 text-center relative">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-6">Launch Your <span className="text-orange-500">Global Career</span></h2>
          <p className="text-slate-400 mb-12 text-sm leading-relaxed">
            Our placement process for the class of 2026 is now open. Secure your future at one of Asia's most advanced technical institutions.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/admissions" className="px-12 py-5 bg-orange-600 text-white font-black uppercase text-xs tracking-[0.2em] shadow-2xl hover:bg-white hover:text-orange-600 transition-all">
              Apply Now
            </Link>
            <Link href="/contact" className="px-12 py-5 border border-white/20 text-white font-black uppercase text-xs tracking-[0.2em] hover:bg-white/10 transition-all">
              Contact TPC Cell
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}