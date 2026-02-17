"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  BookOpen, 
  Download, 
  Search, 
  ChevronLeft, 
  Layers, 
  Code, 
  Cpu, 
  Globe 
} from "lucide-react";

export default function CourseContentPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const courses = [
    { title: "Quantum Computing", code: "CS-401", credits: "4", icon: <Cpu />, type: "Technical" },
    { title: "Neural Networks", code: "AI-302", credits: "3", icon: <Layers />, type: "Artificial Intelligence" },
    { title: "Web Architecture", code: "WD-205", credits: "4", icon: <Globe />, type: "Development" },
    { title: "Ethical Hacking", code: "CS-405", credits: "3", icon: <Code />, type: "Security" },
  ];

  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDownload = (courseName: string) => {
    alert(`Downloading Syllabus for: ${courseName}`);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] selection:bg-orange-600 selection:text-white">
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/students-corner" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-orange-600 transition-all">
            <ChevronLeft size={14} /> Back to Corner
          </Link>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">VIT Academic Portal</span>
        </div>
      </nav>

      <section className="pt-40 pb-20 max-w-7xl mx-auto px-6">
        {/* --- HEADER & SEARCH --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter text-slate-900 leading-none">
              Course <br /> <span className="text-orange-600">Content.</span>
            </h1>
            <p className="mt-6 text-slate-400 text-sm font-bold uppercase tracking-widest">Spring Semester 2026 Curriculum</p>
          </motion.div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="SEARCH SUBJECTS..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-white border border-slate-100 shadow-xl outline-none focus:border-orange-600 text-xs font-bold uppercase tracking-widest transition-all"
            />
          </div>
        </div>

        {/* --- COURSE GRID --- */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredCourses.map((course, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 border border-slate-50 shadow-2xl flex items-center justify-between group hover:border-orange-600 transition-all"
            >
              <div className="flex items-center gap-8">
                <div className="w-16 h-16 bg-slate-900 text-white flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                  {React.cloneElement(course.icon as React.ReactElement, { size: 28 } as any)}
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tight text-slate-900">{course.title}</h3>
                  <div className="flex gap-4 mt-1">
                    <span className="text-[9px] font-black uppercase tracking-widest text-orange-600">{course.code}</span>
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-300">{course.credits} Credits</span>
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase mt-2">{course.type}</p>
                </div>
              </div>

              <button 
                onClick={() => handleDownload(course.title)}
                className="p-4 bg-slate-50 text-slate-400 hover:bg-orange-600 hover:text-white transition-all rounded-sm"
                title="Download Syllabus"
              >
                <Download size={20} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* --- EMPTY STATE --- */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-300 font-black uppercase tracking-[0.5em]">No subjects matched your search.</p>
          </div>
        )}
      </section>

      <footer className="py-12 text-center border-t border-slate-100">
        <p className="text-[10px] font-black text-slate-300 uppercase tracking-[1em]">VIT Academic Registry • 2026</p>
      </footer>
    </main>
  );
}