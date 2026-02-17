"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, 
  Download, 
  BookOpen, 
  Search, 
  ChevronRight, 
  Library, 
  GraduationCap 
} from "lucide-react";

export default function SyllabusPage() {
  const [activeTab, setActiveTab] = useState("Semester 4");

  const subjects = [
    { title: "Machine Learning", code: "CS401", credits: 4, type: "Core" },
    { title: "Software Engineering", code: "CS402", credits: 3, type: "Core" },
    { title: "Computer Networks", code: "CS403", credits: 4, type: "Core" },
    { title: "Digital Marketing", code: "OE102", credits: 2, type: "Elective" },
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] pb-20">
      {/* --- HERO HEADER --- */}
      <section className="bg-slate-950 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-orange-500 font-black uppercase tracking-[0.5em] text-[10px]">Curriculum Master</span>
            <h1 className="text-6xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-none mt-4">
              Academic <br /> <span className="text-orange-600">Syllabus.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* --- LEFT: SEMESTER SELECTOR --- */}
          <div className="lg:col-span-3 space-y-2">
            <div className="bg-white p-6 shadow-xl border border-slate-100 mb-6">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                <Library size={14} /> Course Path
              </h3>
              <div className="space-y-1">
                {["Semester 1", "Semester 2", "Semester 3", "Semester 4"].map((sem) => (
                  <button
                    key={sem}
                    onClick={() => setActiveTab(sem)}
                    className={`w-full text-left px-4 py-3 text-[10px] font-black uppercase tracking-widest transition-all ${
                      activeTab === sem ? "bg-orange-600 text-white" : "text-slate-500 hover:bg-slate-50"
                    }`}
                  >
                    {sem}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-900 p-8 text-white shadow-xl">
              <GraduationCap className="text-orange-600 mb-4" />
              <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Degree Progress</p>
              <h4 className="text-xl font-black italic tracking-tighter mt-2">B.Tech CSE</h4>
            </div>
          </div>

          {/* --- RIGHT: SYLLABUS LIST --- */}
          <div className="lg:col-span-9 space-y-8">
            <div className="bg-white p-10 shadow-2xl border border-slate-100">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                <div>
                  <h2 className="text-3xl font-black uppercase italic tracking-tighter text-slate-900">{activeTab} Modules</h2>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Total Credits: 13</p>
                </div>
                <button className="bg-slate-900 text-white px-8 py-4 text-[10px] font-black uppercase tracking-widest flex items-center gap-3 hover:bg-orange-600 transition-all">
                  Full PDF Roadmap <Download size={14} />
                </button>
              </div>

              <div className="grid gap-4">
                <AnimatePresence mode="wait">
                  {subjects.map((sub, i) => (
                    <motion.div
                      key={sub.code}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="group flex items-center justify-between p-6 bg-slate-50 border border-transparent hover:border-orange-600 hover:bg-white transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-6">
                        <div className="w-12 h-12 bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-orange-600 transition-colors">
                          <FileText size={20} />
                        </div>
                        <div>
                          <div className="flex items-center gap-3">
                            <span className="text-[9px] font-black text-orange-600 bg-orange-100 px-2 py-0.5">{sub.code}</span>
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{sub.type}</span>
                          </div>
                          <h4 className="text-lg font-black uppercase italic tracking-tighter text-slate-900 mt-1">{sub.title}</h4>
                        </div>
                      </div>
                      <div className="flex items-center gap-10">
                        <div className="hidden md:block text-right">
                          <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Credits</p>
                          <p className="text-sm font-black text-slate-900">{sub.credits}.0</p>
                        </div>
                        <ChevronRight className="text-slate-200 group-hover:text-orange-600 transition-all group-hover:translate-x-1" />
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* --- ADVISORY BAR --- */}
            <div className="p-8 bg-orange-50 border-l-4 border-orange-600 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <BookOpen className="text-orange-600" />
                <p className="text-[11px] font-bold text-slate-700 uppercase leading-relaxed">
                  The syllabus is updated as per **Industry 4.0 standards**. <br /> 
                  Last revised: Jan 2026.
                </p>
              </div>
              <button className="text-[10px] font-black uppercase tracking-widest text-orange-600 border-b-2 border-orange-600 hover:text-slate-950 hover:border-slate-950 transition-all">
                View Archives
              </button>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}