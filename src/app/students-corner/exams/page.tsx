"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
// Added Toast for feedback (optional, requires a toast library or simple alert)
import { 
  Calendar, 
  Clock, 
  FileText, 
  ChevronLeft, 
  Download, 
  AlertCircle,
  MapPin,
  ExternalLink,
  ArrowRight
} from "lucide-react";

export default function ExamSchedulePage() {
  // 1. Working Download Handler
  const handleDownload = (fileName: string) => {
    // In a real app, this would point to /public/files/filename.pdf
    alert(`Starting download for: ${fileName}`);
  };

  const examData = [
    { date: "April 10, 2026", time: "10:00 AM", subject: "Quantum Computing", code: "CS-401", room: "Block A - 202" },
    { date: "April 12, 2026", time: "02:00 PM", subject: "Neural Networks", code: "AI-302", room: "Main Hall" },
    { date: "April 15, 2026", time: "10:00 AM", subject: "Advanced React Patterns", code: "WD-205", room: "Lab 04" },
    { date: "April 18, 2026", time: "10:00 AM", subject: "Cyber Security", code: "CS-405", room: "Block B - 101" },
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] selection:bg-orange-600 selection:text-white">
      {/* --- WORKING TOP NAV --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link 
            href="/students-corner" 
            className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-orange-600 transition-all"
          >
            <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
            Back to Student's Corner
          </Link>
          <div className="hidden md:flex gap-6">
             <Link href="/contact" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-orange-600">Help Desk</Link>
             <Link href="/" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-orange-600">Main Site</Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-slate-900">
              Exam <span className="text-orange-600">Schedule.</span>
            </h1>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* --- LEFT: EXAM TABLE --- */}
          <div className="lg:col-span-8">
            <div className="bg-white border border-slate-100 shadow-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest">
                    <tr>
                      <th className="p-6">Subject</th>
                      <th className="p-6">Schedule</th>
                      <th className="p-6">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {examData.map((exam, i) => (
                      <tr key={i} className="group hover:bg-slate-50/50 transition-colors">
                        <td className="p-6">
                          <p className="font-black text-slate-900 uppercase tracking-tight">{exam.subject}</p>
                          <span className="text-[9px] font-bold text-orange-600 uppercase tracking-widest">{exam.code}</span>
                        </td>
                        <td className="p-6">
                          <div className="text-xs font-bold text-slate-700 flex items-center gap-2 mb-1">
                            <Calendar size={12} /> {exam.date}
                          </div>
                          <div className="text-[10px] text-slate-400 font-bold flex items-center gap-2">
                            <MapPin size={10} /> {exam.room}
                          </div>
                        </td>
                        <td className="p-6">
                          {/* 2. Functional Syllabus Link */}
                          <Link 
                            href={`/students-corner/courses`}
                            className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-slate-900 hover:text-orange-600"
                          >
                            Syllabus <ExternalLink size={10} />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* --- RIGHT: INTERACTIVE SIDEBAR --- */}
          <div className="lg:col-span-4 space-y-8">
            {/* DOWNLOAD TILES */}
            <div className="bg-white border border-slate-100 p-8 shadow-xl">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">Available Documents</h3>
              <div className="space-y-3">
                <button 
                  onClick={() => handleDownload("Hall_Ticket_Spring_2026.pdf")}
                  className="w-full flex items-center justify-between p-4 bg-slate-50 border border-transparent hover:border-orange-600 hover:bg-white transition-all group"
                >
                  <span className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest">
                    <FileText size={16} className="text-orange-600" /> My Hall Ticket
                  </span>
                  <Download size={14} className="text-slate-300 group-hover:text-orange-600" />
                </button>

                <button 
                  onClick={() => handleDownload("Full_Timetable_VIT_2026.pdf")}
                  className="w-full flex items-center justify-between p-4 bg-slate-50 border border-transparent hover:border-orange-600 hover:bg-white transition-all group"
                >
                  <span className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest">
                    <Download size={16} className="text-orange-600" /> Official Timetable
                  </span>
                  <ArrowRight size={14} className="text-slate-300 group-hover:text-orange-600" />
                </button>
              </div>
            </div>

            {/* QUICK CONTACT */}
            <div className="bg-orange-600 p-8 text-white">
               <AlertCircle className="mb-4" size={24} />
               <h4 className="text-xl font-black uppercase tracking-tight mb-2">Discrepancy?</h4>
               <p className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-6">Report clashes in your exam dates immediately.</p>
               <Link 
                href="/contact" 
                className="block text-center w-full py-4 bg-slate-900 text-white font-black uppercase tracking-widest text-[9px] hover:bg-white hover:text-slate-900 transition-all"
               >
                 Contact Controller
               </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}