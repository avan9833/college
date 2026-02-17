"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Cpu, Briefcase, Microscope, Palette, 
  Gavel, Stethoscope, Landmark, Globe,
  ArrowRight
} from "lucide-react";

export default function ProgramsPage() {
  const allPrograms = [
    {
      school: "Engineering & Tech",
      icon: <Cpu className="w-8 h-8" />,
      color: "border-blue-500 text-blue-600",
      courses: ["Computer Science", "Artificial Intelligence", "Robotics", "Cyber Security", "Data Science"]
    },
    {
      school: "Business & Management",
      icon: <Briefcase className="w-8 h-8" />,
      color: "border-emerald-500 text-emerald-600",
      courses: ["MBA - Finance", "International Business", "Digital Marketing", "HR Management", "Supply Chain"]
    },
    {
      school: "Life Sciences",
      icon: <Microscope className="w-8 h-8" />,
      color: "border-purple-500 text-purple-600",
      courses: ["Biotechnology", "Microbiology", "Forensic Science", "Genetics", "Food Tech"]
    },
    {
      school: "Design & Media",
      icon: <Palette className="w-8 h-8" />,
      color: "border-rose-500 text-rose-600",
      courses: ["UX/UI Design", "Fashion Tech", "Animation & VFX", "Journalism", "Interior Design"]
    },
    // Naye added Programs niche hain:
    {
      school: "Law & Governance",
      icon: <Gavel className="w-8 h-8" />,
      color: "border-amber-500 text-amber-600",
      courses: ["BA LLB (Integrated)", "Corporate Law", "Cyber Law", "Public Policy", "IP Rights"]
    },
    {
      school: "Health Sciences",
      icon: <Stethoscope className="w-8 h-8" />,
      color: "border-red-500 text-red-600",
      courses: ["Physiotherapy", "Clinical Research", "Public Health", "Nutrition", "Sports Medicine"]
    },
    {
      school: "Humanities & Social",
      icon: <Landmark className="w-8 h-8" />,
      color: "border-indigo-500 text-indigo-600",
      courses: ["Psychology", "Applied Economics", "Sociology", "English Lit", "Political Science"]
    },
    {
      school: "Global Languages",
      icon: <Globe className="w-8 h-8" />,
      color: "border-cyan-500 text-cyan-600",
      courses: ["French", "German", "Spanish", "Japanese", "Mandarin"]
    }
  ];

  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-600 font-black text-[10px] uppercase tracking-[0.5em] mb-4 block"
          >
            Academic Excellence Hub
          </motion.span>
          <h1 className="text-6xl font-black text-slate-900 uppercase italic tracking-tighter leading-none">
            Global <span className="text-orange-600">Academics.</span>
          </h1>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto font-medium text-sm leading-relaxed">
            Choose from over 40+ specialized courses across 8 world-class schools designed to bridge the gap between education and industry.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allPrograms.map((p, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`bg-slate-50 p-8 border-t-4 ${p.color} hover:bg-white hover:shadow-2xl transition-all duration-500 group flex flex-col h-[480px]`}
            >
              <div className="mb-6 text-slate-300 group-hover:text-orange-600 transition-colors transform group-hover:scale-110 duration-300 origin-left">
                {p.icon}
              </div>
              
              <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-6 leading-tight">
                {p.school}
              </h3>
              
              <ul className="space-y-3 flex-grow">
                {p.courses.map((course, i) => (
                  <li key={i} className="text-[10px] font-black text-slate-400 group-hover:text-slate-600 flex items-center gap-2 uppercase tracking-widest transition-colors">
                    <div className="w-1.5 h-1.5 bg-slate-200 group-hover:bg-orange-500 rounded-full shrink-0" />
                    {course}
                  </li>
                ))}
              </ul>

              <button className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-orange-600 transition-all">
                Download Curriculum <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}