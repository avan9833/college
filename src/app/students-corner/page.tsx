"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import { 
  BookOpen, Calendar, Bell, FileText, 
  Download, GraduationCap, Laptop, 
  Clock, ArrowUpRight, Zap, MessageCircle, LogOut 
} from "lucide-react";

export default function StudentsCorner() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userRole");
    router.push("/login");
  };

  const primaryActions = [
    { title: "Exam Schedule", detail: "Finals: April 10", Icon: Calendar, color: "bg-blue-600", link: "/students-corner/exams" },
    { title: "Course Content", detail: "24 New Modules", Icon: BookOpen, color: "bg-orange-600", link: "/students-corner/courses" },
    { title: "Fee Portal", detail: "Sem 4 Pending", Icon: Zap, color: "bg-purple-600", link: "/students-corner/fees" },
  ];

  const sidebarLinks = [
    { name: "Digital Library", Icon: Laptop, link: "/students-corner/library" },
    { name: "Hall Tickets", Icon: FileText, link: "/students-corner/hall-tickets" },
    { name: "Syllabus 2026", Icon: Download, link: "/students-corner/syllabus" },
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      {/* --- HEADER --- */}
      <section className="pt-40 pb-12 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex justify-between items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Student Command Center</span>
              <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter">
                Welcome, <span className="text-orange-500">Vanguard.</span>
              </h1>
            </motion.div>
            
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 bg-white/5 hover:bg-red-600 transition-colors px-4 py-2 text-[10px] font-black uppercase tracking-widest border border-white/10"
            >
              <LogOut size={14} /> Logout
            </button>
          </div>

          <div className="mt-8 flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-sm overflow-hidden">
            <div className="bg-orange-600 text-white text-[8px] font-black px-2 py-1 uppercase rounded-sm animate-pulse whitespace-nowrap">Live Notice</div>
            <motion.div 
              animate={{ x: ["100%", "-100%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="text-xs font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap"
            >
              Technovate 2026 Registration is LIVE • Mid-term results uploaded for CS & AI departments • Library hours extended to 10 PM.
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- DASHBOARD GRID --- */}
      <section className="py-12 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            {primaryActions.map((item, i) => (
              <Link href={item.link} key={i}>
                <motion.div 
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
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

          <div className="bg-white border border-slate-100 p-10 shadow-2xl">
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-8 flex items-center gap-3">
              <Clock className="text-orange-600" /> Recent Updates
            </h2>
            <div className="space-y-6">
              {[
                { time: "2h ago", text: "New Assignment uploaded in Quantum Computing", type: "Academic" },
                { time: "5h ago", text: "Placement Drive: Microsoft visiting on Feb 20", type: "Career" },
                { time: "Yesterday", text: "Attendance record for Jan 2026 finalized", type: "Record" }
              ].map((log, i) => (
                <div key={i} className="flex justify-between items-center border-b border-slate-50 pb-4 last:border-0">
                  <div>
                    <p className="text-sm font-bold text-slate-800">{log.text}</p>
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">{log.time}</span>
                  </div>
                  <span className="px-3 py-1 bg-slate-50 text-[9px] font-black uppercase text-slate-500 rounded-full">{log.type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <div className="bg-slate-900 p-8 text-white">
            <h3 className="text-xl font-black uppercase tracking-tighter mb-8 border-b border-white/10 pb-4">Resources</h3>
            <div className="space-y-4">
              {sidebarLinks.map((link, i) => (
                <Link href={link.link} key={i} className="block w-full">
                  <button className="w-full flex items-center justify-between group p-4 bg-white/5 hover:bg-orange-600 transition-all rounded-sm">
                    <span className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest">
                      <link.Icon className="w-4 h-4" /> {link.name}
                    </span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                  </button>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-orange-600 p-8 text-white text-center rounded-sm">
            <MessageCircle className="w-12 h-12 mx-auto mb-4" />
            <h4 className="font-black uppercase tracking-tight text-xl">Help Desk</h4>
            <p className="text-xs mt-2 font-medium opacity-80 leading-relaxed mb-6">Need assistance with VIT documents?</p>
            <Link href="/contact" className="block w-full py-4 bg-white text-orange-600 font-black uppercase text-[10px] tracking-widest hover:bg-slate-900 hover:text-white transition-colors">
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-slate-100 text-center">
         <p className="text-[10px] font-black text-slate-300 uppercase tracking-[1em]">Vanguard Student Node • 2026</p>
      </footer>
    </main>
  );
}