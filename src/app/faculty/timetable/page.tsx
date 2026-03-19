"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Printer, Download, Clock, MapPin, User } from "lucide-react";

// Standard Academic Constants
const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const TIME_SLOTS = ["09:00 AM", "10:30 AM", "12:00 PM", "01:30 PM", "03:00 PM"];

// Mock schedule data mapped to specific days and times
const SCHEDULE = [
  { day: "Monday", time: "09:00 AM", subject: "Quantum Computing", code: "CS-401", room: "Block A-202" },
  { day: "Monday", time: "01:30 PM", subject: "Lab: AI Patterns", code: "AI-302L", room: "Lab 04" },
  { day: "Tuesday", time: "10:30 AM", subject: "Neural Networks", code: "AI-302", room: "Main Hall" },
  { day: "Wednesday", time: "09:00 AM", subject: "Quantum Computing", code: "CS-401", room: "Block A-202" },
  { day: "Thursday", time: "12:00 PM", subject: "Department Meeting", code: "ADMIN", room: "Conf. Room B" },
  { day: "Friday", time: "03:00 PM", subject: "Research Seminar", code: "RES-01", room: "Seminar Hall" },
];

/**
 * MANDATORY: The 'export default' keyword is required for Next.js to render this page.
 */
export default function TimetablePage() {
  
  // 1. Working Print Handler
  const handlePrint = () => {
    window.print();
  };

  // 2. Working Export Handler
  const handleExport = () => {
    alert("Generating Faculty Timetable Export (iCal format)...");
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] p-6 pt-24 print:p-0">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER (Hidden during print) --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6 print:hidden">
          <div>
            {/* Functional Back Button using Next.js Link */}
            <Link href="/faculty" className="group text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-orange-600 flex items-center gap-2 mb-2 transition">
              <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform"/> Back to Dashboard
            </Link>
            <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-slate-900">
              Lecture <span className="text-orange-600">Timetable.</span>
            </h1>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">
              Spring Semester 2026 | Faculty Node: FAC-8821
            </p>
          </div>

          <div className="flex gap-3">
            {/* Functional Print Button */}
            <button 
              onClick={handlePrint}
              className="bg-white border border-slate-200 text-slate-900 px-6 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 active:scale-95 transition flex items-center gap-2 shadow-sm"
            >
              <Printer size={16} /> Print PDF
            </button>
            {/* Functional Export Button */}
            <button 
              onClick={handleExport}
              className="bg-slate-900 text-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-orange-600 active:scale-95 transition flex items-center gap-2 shadow-xl"
            >
              <Download size={16} /> Export iCal
            </button>
          </div>
        </div>

        {/* --- TIMETABLE GRID --- */}
        <div className="bg-white border border-slate-200 shadow-2xl overflow-hidden rounded-sm print:shadow-none print:border-slate-300">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-6 border border-slate-800 text-[10px] font-black uppercase tracking-widest bg-slate-950">Time Slot</th>
                  {DAYS.map(day => (
                    <th key={day} className="p-6 border border-slate-800 text-[10px] font-black uppercase tracking-widest">{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TIME_SLOTS.map(time => (
                  <tr key={time} className="h-32">
                    <td className="p-4 border border-slate-100 bg-slate-50 text-center">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">{time}</span>
                    </td>
                    {DAYS.map(day => {
                      // Logic to find lecture matching current Day/Time cell
                      const entry = SCHEDULE.find(s => s.day === day && s.time === time);
                      return (
                        <td key={`${day}-${time}`} className="p-2 border border-slate-100 min-w-[200px]">
                          {entry ? (
                            <motion.div 
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="h-full bg-slate-50 border-l-4 border-orange-600 p-4 group hover:bg-white hover:shadow-lg transition-all"
                            >
                              <div className="flex justify-between items-start mb-2">
                                <span className="text-[9px] font-black text-orange-600 uppercase tracking-widest">{entry.code}</span>
                                <Clock size={12} className="text-slate-300" />
                              </div>
                              <p className="text-sm font-black text-slate-800 uppercase italic leading-tight mb-2">{entry.subject}</p>
                              <div className="flex items-center gap-2 text-[9px] font-bold text-slate-400 uppercase">
                                <MapPin size={10} /> {entry.room}
                              </div>
                            </motion.div>
                          ) : (
                            <div className="h-full w-full flex items-center justify-center opacity-10">
                              <span className="text-[8px] font-black uppercase tracking-widest text-slate-300">Available</span>
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* --- FOOTER (Hidden during print) --- */}
        <div className="mt-12 flex justify-between items-center border-t border-slate-100 pt-8 print:hidden">
          <div className="flex items-center gap-4 text-slate-400">
            <User size={20} />
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest">Faculty Advisor</p>
              <p className="text-xs font-bold text-slate-600">Prof. Marcus Vanguard</p>
            </div>
          </div>
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-[1em] text-right">Vanguard Schedule Node • 2026</p>
        </div>
      </div>
    </main>
  );
}