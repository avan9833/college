"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, Download, BookOpen, Layers, 
  ChevronDown, FileText, Search, GraduationCap,
  CheckCircle2, Info
} from "lucide-react";

// Mock Syllabus Data
const SYLLABUS_DATA = [
  { 
    id: 1, sem: 4, code: "CS401", title: "Quantum Computing", credits: 4, 
    modules: ["Qubits & Gates", "Shor's Algorithm", "Quantum Hardware", "Error Correction"],
    status: "Active" 
  },
  { 
    id: 2, sem: 4, code: "AI302", title: "Neural Networks", credits: 3, 
    modules: ["Backpropagation", "CNNs & RNNs", "Transformers", "Optimization"],
    status: "Active" 
  },
  { 
    id: 3, sem: 3, code: "DS205", title: "Advanced Data Structures", credits: 4, 
    modules: ["B-Trees", "Graph Theory", "Hashing", "Heaps"],
    status: "Completed" 
  },
  { 
    id: 4, sem: 5, code: "CS501", title: "Operating Systems", credits: 3, 
    modules: ["Kernel Arch", "Memory Mgmt", "File Systems", "Concurrency"],
    status: "Upcoming" 
  },
];

export default function SyllabusPage() {
  const [activeSem, setActiveSem] = useState<number | "All">("All");
  const [expandedCourse, setExpandedCourse] = useState<number | null>(null);
  const [downloadingId, setDownloadingId] = useState<number | null>(null);

  const semesters = ["All", 3, 4, 5];

  const filteredSyllabus = SYLLABUS_DATA.filter(item => 
    activeSem === "All" || item.sem === activeSem
  );

  const handleDownload = (id: number) => {
    setDownloadingId(id);
    setTimeout(() => {
      setDownloadingId(null);
      alert("Syllabus PDF successfully synchronized to your local storage.");
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] p-6 pt-24">
      <div className="max-w-6xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div>
            <Link href="/students-corner" className="group text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-orange-600 flex items-center gap-2 mb-2 transition">
              <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform"/> Back to Corner
            </Link>
            <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-slate-900 leading-none">
              Academic <span className="text-orange-600">Curriculum.</span>
            </h1>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-2">
              B.Tech Computer Science | Regulation 2026-R1
            </p>
          </div>

          <div className="bg-slate-900 text-white p-5 rounded-sm shadow-xl flex items-center gap-4">
             <GraduationCap className="text-orange-500" size={24} />
             <div>
                <p className="text-[9px] font-black uppercase text-slate-400">Total Credits</p>
                <p className="text-xl font-black italic">164.0 <span className="text-[10px] opacity-40">Required</span></p>
             </div>
          </div>
        </div>

        {/* --- SEMESTER FILTER TABS --- */}
        <div className="flex flex-wrap gap-4 mb-10">
          {semesters.map((sem) => (
              <button
                key={sem}
                onClick={() => setActiveSem(sem as number | "All")}
                className={`px-8 py-3 text-[10px] font-black uppercase tracking-widest transition-all border-2 ${
                  activeSem === sem 
                  ? "bg-slate-900 text-white border-slate-900 shadow-lg" 
                  : "bg-white text-slate-400 border-slate-100 hover:border-orange-500 hover:text-orange-600"
                }`}
              >
                {sem === "All" ? "Full Program" : `Semester ${sem}`}
              </button>
            ))}
        </div>

        {/* --- SYLLABUS LIST --- */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredSyllabus.map((course) => (
              <motion.div 
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                key={course.id}
                className="bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all"
              >
                {/* Accordion Trigger */}
                <div 
                  onClick={() => setExpandedCourse(expandedCourse === course.id ? null : course.id)}
                  className="p-6 flex flex-col md:flex-row justify-between items-center gap-4 cursor-pointer group"
                >
                  <div className="flex items-center gap-6 w-full md:w-auto">
                    <div className={`w-12 h-12 flex items-center justify-center font-black italic text-lg shadow-inner ${
                      course.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-50 text-slate-900'
                    }`}>
                      {course.code.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[9px] font-black text-orange-600 uppercase tracking-widest">{course.code}</span>
                        {course.status === 'Completed' && <CheckCircle2 size={12} className="text-emerald-500" />}
                      </div>
                      <h3 className="text-xl font-black text-slate-800 uppercase italic group-hover:text-orange-600 transition-colors leading-none">
                        {course.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
                    <div className="text-right">
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Credits</p>
                      <p className="text-sm font-black italic">{course.credits}.0</p>
                    </div>
                    <ChevronDown 
                      size={20} 
                      className={`text-slate-300 transition-transform duration-300 ${expandedCourse === course.id ? "rotate-180 text-orange-600" : ""}`}
                    />
                  </div>
                </div>

                {/* Expanded Details */}
                <AnimatePresence>
                  {expandedCourse === course.id && (
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="border-t border-slate-100 bg-slate-50/50"
                    >
                      <div className="p-8 grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-2">
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                            <Layers size={14} /> Course Modules
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {course.modules.map((mod, i) => (
                              <div key={i} className="bg-white p-3 border border-slate-100 text-[11px] font-bold text-slate-600 uppercase italic flex items-center gap-3">
                                <span className="text-orange-600 font-black">0{i+1}</span> {mod}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col justify-end">
                          <button 
                            onClick={(e) => { e.stopPropagation(); handleDownload(course.id); }}
                            className={`w-full py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 ${
                              downloadingId === course.id 
                              ? 'bg-emerald-600 text-white' 
                              : 'bg-slate-900 text-white hover:bg-orange-600 shadow-xl'
                            }`}
                          >
                            {downloadingId === course.id ? "SYNCING..." : <><Download size={16} /> Get PDF</>}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* --- INFO BOX --- */}
        <div className="mt-12 bg-white border-2 border-slate-900 p-8 flex items-start gap-6 shadow-[10px_10px_0px_#ea580c]">
          <Info className="text-orange-600 shrink-0" size={28} />
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-900 mb-2">Curriculum Policy</h4>
            <p className="text-xs font-medium text-slate-500 leading-relaxed uppercase">
              The syllabus presented here is for the <span className="text-slate-900 font-black">2026 Academic Batch</span>. Any elective modifications must be approved by the Department Head by the end of Semester 5.
            </p>
          </div>
        </div>

        <footer className="mt-20 text-center pb-10">
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-[1em]">Vanguard Curriculum Node • 2026</p>
        </footer>
      </div>
    </main>
  );
}