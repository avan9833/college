"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import { 
  Users, CheckSquare, FileUp, Calendar, 
  Settings, LogOut, ArrowUpRight, Bell, 
  ClipboardList, Briefcase, Mail 
} from "lucide-react";

export default function FacultyDashboard() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.clear();
    router.push("/login");
  };

  const facultyActions = [
    { 
      title: "Attendance", 
      detail: "Mark daily presence", 
      Icon: CheckSquare, 
      color: "bg-emerald-600", 
      link: "/faculty/attendance" 
    },
    { 
      title: "Grading Center", 
      detail: "Upload marks & results", 
      Icon: FileUp, 
      color: "bg-orange-600", 
      link: "/faculty/grading" 
    },
    { 
      title: "My Schedule", 
      detail: "8 Lectures this week", 
      Icon: Calendar, 
      color: "bg-blue-600", 
      link: "/faculty/timetable" 
    },
  ];

  const adminTools = [
    { name: "Salary Slips", Icon: Briefcase, path: "/faculty/salary" },
    { name: "Research Portal", Icon: Users, path: "/faculty/research" },
    { name: "Leave Portal", Icon: Mail, path: "/faculty/leave" },
    { name: "Settings", Icon: Settings, path: "/faculty/settings" },
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      {/* --- HERO HEADER --- */}
      <section className="pt-40 pb-12 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex justify-between items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
                Vanguard Faculty Node
              </span>
              <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white">
                Welcome, <span className="text-orange-600">Professor.</span>
              </h1>
            </motion.div>
            
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 bg-white/5 hover:bg-red-600 transition-all px-4 py-2 text-[10px] font-black uppercase tracking-widest border border-white/10"
            >
              <LogOut size={14} /> Logout
            </button>
          </div>
        </div>
      </section>

      {/* --- DASHBOARD GRID --- */}
      <section className="py-12 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: PRIMARY ACTIONS */}
        <div className="lg:col-span-8 space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            {facultyActions.map((item, i) => (
              <Link href={item.link} key={i}>
                <motion.div 
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`${item.color} p-8 text-white shadow-xl flex flex-col justify-between h-64 relative overflow-hidden group cursor-pointer`}
                >
                  <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-150 transition-transform duration-500">
                      <item.Icon size={100} />
                  </div>
                  <div className="bg-white/20 w-12 h-12 flex items-center justify-center rounded-sm backdrop-blur-md">
                     <item.Icon size={20} />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-black uppercase tracking-tight leading-none">{item.title}</h3>
                    <p className="text-[10px] font-bold uppercase tracking-widest mt-2 opacity-80">{item.detail}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* ACTIVE BATCHES TABLE */}
          <div className="bg-white border border-slate-100 p-10 shadow-2xl">
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-8 flex items-center gap-3">
              <ClipboardList className="text-orange-600" /> Active Batches
            </h2>
            <div className="space-y-4">
              {[
                { code: "CS-401", name: "Quantum Computing", students: 120, time: "10:30 AM" },
                { code: "AI-302", name: "Neural Networks", students: 85, time: "02:00 PM" },
                { code: "DS-105", name: "Data Structures", students: 150, time: "Tomorrow" }
              ].map((course, i) => (
                <div key={i} className="flex justify-between items-center p-4 bg-slate-50 border border-slate-100 group hover:border-orange-500 transition-all">
                  <div>
                    <span className="text-[9px] font-black text-orange-600 uppercase tracking-widest">{course.code}</span>
                    <p className="text-sm font-bold text-slate-800 uppercase italic">{course.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-slate-500">{course.students} Students</p>
                    <span className="text-[9px] font-black uppercase text-slate-400">{course.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: ADMINISTRATIVE TOOLS */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-slate-900 p-8 text-white">
            <h3 className="text-xl font-black uppercase tracking-tighter mb-8 border-b border-white/10 pb-4">Administrative</h3>
            <div className="space-y-4">
              {adminTools.map((tool, i) => (
                <Link href={tool.path} key={i} className="block w-full">
                  <button className="w-full flex items-center justify-between group p-4 bg-white/5 hover:bg-orange-600 transition-all rounded-sm text-left">
                    <span className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest">
                      <tool.Icon size={16} /> {tool.name}
                    </span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                  </button>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-orange-600 p-8 text-white rounded-sm shadow-xl">
            <Bell className="w-10 h-10 mb-4" />
            <h4 className="font-black uppercase tracking-tight text-xl">Staff Notice Board</h4>
            <p className="text-[10px] mt-2 font-bold opacity-80 leading-relaxed">
              Final exam question papers must be submitted by Monday, 5:00 PM to the controller office.
            </p>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-slate-100 text-center">
         <p className="text-[10px] font-black text-slate-300 uppercase tracking-[1em]">
            Vanguard System • Professor Portal
         </p>
      </footer>
    </main>
  );
}