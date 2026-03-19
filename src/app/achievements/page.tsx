"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/landing/Navbar";
import { 
  Award, Trophy, Star, Target, 
  Medal, Rocket, Globe, ChevronRight 
} from "lucide-react";

export default function AchievementPage() {
  const institutionalAwards = [
    {
      title: "Global Tech Excellence 2025",
      org: "International Education Forum",
      desc: "Ranked #1 for AI integration in the undergraduate curriculum.",
      icon: <Trophy className="w-8 h-8" />,
      tag: "Ranked #1"
    },
    {
      title: "Sustainable Campus Award",
      org: "Green Building Council",
      desc: "Recognized for 100% solar-powered infrastructure and zero-waste systems.",
      icon: <Award className="w-8 h-8" />,
      tag: "Elite Grade"
    },
    {
      title: "Top Placement Achievement",
      org: "Corporate HR Council",
      desc: "Awarded for achieving a 98% placement rate with a high average CTC.",
      icon: <Target className="w-8 h-8" />,
      tag: "Industry Leader"
    }
  ];

  const milestones = [
    { year: "2026", event: "Inaugurated Advanced Quantum Computing Research Wing." },
    { year: "2025", event: "Secured NAAC A++ Grade with institutional record score." },
    { year: "2023", event: "Global Partnership with Silicon Valley Tech Hubs." },
    { year: "1998", event: "Establishment of Vanguard Institute of Technology." }
  ];

  return (
    <main className="min-h-screen bg-white selection:bg-orange-500 selection:text-white overflow-x-hidden">
      <Navbar />

      {/* --- ELITE HERO SECTION --- */}
      <section className="relative pt-44 pb-32 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-[10px]">Unrivaled Legacy</span>
            <h1 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter mt-4 leading-none">
              Elite <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">Milestones.</span>
            </h1>
            <p className="mt-8 text-slate-400 font-light text-lg max-w-2xl mx-auto">
              Charting the evolution of an institution dedicated to engineering the future and celebrating the innovators who lead the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- AWARDS BENTO GRID --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {institutionalAwards.map((award, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4">
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-300 group-hover:text-orange-500 transition-colors">
                  {award.tag}
                </span>
              </div>
              <div className="text-orange-600 mb-8 transform group-hover:scale-110 transition-transform duration-300">{award.icon}</div>
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-2">{award.title}</h3>
              <p className="text-orange-600 font-bold text-[10px] uppercase tracking-widest mb-6">{award.org}</p>
              <p className="text-slate-500 text-sm leading-relaxed border-t border-slate-200 pt-6 italic">"{award.desc}"</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- INTERACTIVE TIMELINE --- */}
      <section className="py-32 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <h2 className="text-5xl font-black uppercase tracking-tighter italic">The <span className="text-orange-500">Timeline.</span></h2>
            <p className="text-slate-400 max-w-xs text-xs uppercase tracking-widest font-bold leading-relaxed">
              From our humble beginnings in 1998 to our current status as a global research hub.
            </p>
          </div>
          
          <div className="space-y-20 relative">
            <div className="absolute left-0 md:left-1/2 top-0 w-px h-full bg-white/10 -translate-x-1/2" />
            
            {milestones.map((m, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'text-center md:text-right' : 'text-center md:text-left'}`}>
                  <span className="text-6xl font-black text-orange-600 italic leading-none">{m.year}</span>
                </div>
                
                <div className="relative z-10 w-4 h-4 bg-orange-600 rounded-full border-4 border-slate-900 shadow-[0_0_15px_rgba(234,88,12,0.6)]" />
                
                <div className="flex-1 bg-white/5 p-10 border border-white/10 hover:border-orange-500/50 transition-colors">
                  <p className="text-slate-200 text-sm font-bold tracking-wide uppercase leading-relaxed">{m.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- GLORY SECTION: FACULTY & STUDENTS --- */}
      <section className="py-32 max-w-7xl mx-auto px-6 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900">Individual <span className="text-orange-600 italic">Glory.</span></h2>
            <div className="w-20 h-2 bg-slate-900 mt-6 mb-12" />
            
            <div className="space-y-12">
              {[
                { name: "Rahul V.", role: "Student", achievement: "Secured Rank 1 in International Math Olympiad 2025.", icon: <Medal className="w-5 h-5" /> },
                { name: "Dr. Amy Chen", role: "Faculty", achievement: "Patent granted for Smart Grid Management System.", icon: <Star className="w-5 h-5" /> },
                { name: "Team Cyber-X", role: "Club", achievement: "National Hackathon Winners 2026.", icon: <Rocket className="w-5 h-5" /> }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-8 group">
                  <div className="p-4 bg-slate-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 h-fit">
                    {item.icon}
                  </div>
                  <div className="border-b border-slate-100 pb-8 w-full">
                    <h4 className="text-slate-900 font-black uppercase text-sm tracking-tight">{item.name} — <span className="text-slate-400 font-bold">{item.role}</span></h4>
                    <p className="text-slate-500 text-xs mt-2 leading-relaxed">{item.achievement}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-slate-100 overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                alt="Convocation Ceremony"
              />
              <div className="absolute inset-0 bg-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-10 shadow-2xl border border-slate-100">
              <p className="text-orange-600 font-black text-5xl italic leading-none">50+</p>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mt-2">Active Patents</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-32 bg-slate-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Globe className="w-96 h-96 absolute -bottom-20 -right-20 text-white" />
        </div>
        <div className="relative z-10 px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 italic">Engineered for <span className="text-orange-500">Excellence.</span></h2>
          <Link 
            href="/admissions" 
            className="inline-flex items-center gap-4 px-14 py-6 bg-orange-600 text-white font-black uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-orange-600 transition-all shadow-2xl"
          >
            Start Your Journey <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <footer className="py-12 bg-white border-t border-slate-100 text-center">
        <p className="text-[10px] font-black text-slate-300 uppercase tracking-[1em]">Vanguard Legacy • Research & Innovation</p>
      </footer>
    </main>
  );
}