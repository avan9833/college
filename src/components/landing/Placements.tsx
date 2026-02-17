"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Quote, Star, TrendingUp } from "lucide-react";

export default function PlacementHallOfFame() {
  const topPlacements = [
    { name: "Aryan Sharma", role: "Software Engineer", company: "Google", package: "₹52 LPA", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000" },
    { name: "Ishita Verma", role: "Data Scientist", company: "Microsoft", package: "₹48 LPA", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000" },
    { name: "Kabir Das", role: "Cloud Architect", company: "Amazon", package: "₹45 LPA", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000" },
    { name: "Meera Nair", role: "AI Researcher", company: "Meta", package: "₹50 LPA", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000" },
  ];

  const companies = ["Google", "Microsoft", "Amazon", "Meta", "Apple", "Netflix", "Adobe", "Tesla"];

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-orange-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block italic">Global Success Node</span>
            <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">
              Hall of <br /> <span className="text-orange-600">Fame.</span>
            </h2>
          </motion.div>
          <div className="bg-slate-900 p-8 text-white max-w-sm">
             <TrendingUp className="text-orange-500 mb-4" />
             <p className="text-xs font-bold uppercase tracking-widest leading-relaxed">
                98% Placement Rate across all technical departments for the Batch of 2025.
             </p>
          </div>
        </div>

        {/* --- THE WALL OF CARDS --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topPlacements.map((student, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -15 }}
              className="relative group aspect-[3/4] overflow-hidden bg-slate-900"
            >
              <img 
                src={student.img} 
                className="w-full h-full object-cover opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700"
                alt={student.name}
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-2">
                    <Star size={12} className="fill-orange-500 text-orange-500" />
                    <span className="text-white text-[10px] font-black uppercase tracking-widest">{student.company}</span>
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase italic leading-none mb-2">{student.name}</h3>
                  <p className="text-orange-500 font-black text-xl italic tracking-tighter">{student.package}</p>
                  
                  <div className="mt-6 pt-6 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">{student.role}</p>
                    <button className="flex items-center gap-2 text-white text-[9px] font-black uppercase tracking-[0.2em] hover:text-orange-500">
                      Success Story <ExternalLink size={10} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- BRAND TICKER --- */}
        <div className="mt-32 pt-20 border-t border-slate-100">
          <p className="text-center text-[10px] font-black text-slate-300 uppercase tracking-[1em] mb-12">Elite Recruiting Partners</p>
          <div className="flex overflow-hidden group">
            <div className="flex gap-20 animate-marquee whitespace-nowrap py-4">
              {[...companies, ...companies].map((company, i) => (
                <span key={i} className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-slate-100 group-hover:text-orange-600 transition-colors cursor-default">
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}