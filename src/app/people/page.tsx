"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import { GraduationCap, Briefcase, Mail, Linkedin, Award, BookOpen } from "lucide-react";

type StaffMember = {
  name: string;
  role: string;
  dept: string;
  image: string;
  bio: string;
  expertise?: string[];
};

export default function StaffPage() {
  const [activeTab, setActiveTab] = useState<"teaching" | "non-teaching">("teaching");
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const teachingStaff: StaffMember[] = [
    {
      name: "Dr. Elena Vance",
      role: "Dean, School of AI",
      dept: "Computer Science",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800",
      bio: "Former lead researcher at DeepMind with 15+ years in Neural Networks.",
      expertise: ["Machine Learning", "Quantum Computing"]
    },
    {
      name: "Prof. Marcus Thorne",
      role: "Head of Department",
      dept: "Mechanical Engineering",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800",
      bio: "Specialist in Fluid Dynamics and Sustainable Energy Systems.",
      expertise: ["Robotics", "Thermodynamics"]
    },
    {
      name: "Dr. Sarah Jenkins",
      role: "Senior Professor",
      dept: "Business Management",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800",
      bio: "Academic consultant for Fortune 500 startups in Silicon Valley.",
      expertise: ["Global Finance", "Market Analytics"]
    }
  ];

  const nonTeachingStaff: StaffMember[] = [
    {
      name: "Mr. David Miller",
      role: "Registrar",
      dept: "Administration",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800",
      bio: "Oversees academic records and university compliance protocols."
    },
    {
      name: "Ms. Rachel Green",
      role: "Placement Director",
      dept: "Corporate Relations",
      image: "https://images.unsplash.com/photo-1567532939604-b6c5b0ad2e01?q=80&w=800",
      bio: "Specializes in building international recruitment pipelines."
    }
  ];

  return (
    <main className="min-h-screen bg-white selection:bg-orange-500 selection:text-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="pt-40 pb-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-600/10 skew-x-12 translate-x-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-[10px]">Academic Excellence</span>
            <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter mt-4">
              Human <br /> <span className="text-orange-500">Capital.</span>
            </h1>
            <p className="mt-8 text-slate-400 font-light text-lg max-w-xl">
              Meet the global thinkers and operational experts driving the Vanguard legacy forward.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- TAB NAVIGATION --- */}
      <section className="sticky top-20 z-40 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex gap-12">
          <button 
            onClick={() => setActiveTab("teaching")}
            className={`py-8 text-[10px] font-black uppercase tracking-[0.3em] transition-all relative ${activeTab === 'teaching' ? 'text-orange-600' : 'text-slate-400'}`}
          >
            Teaching Faculty
            {activeTab === 'teaching' && <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-1 bg-orange-600" />}
          </button>
          <button 
            onClick={() => setActiveTab("non-teaching")}
            className={`py-8 text-[10px] font-black uppercase tracking-[0.3em] transition-all relative ${activeTab === 'non-teaching' ? 'text-orange-600' : 'text-slate-400'}`}
          >
            Non-Teaching Staff
            {activeTab === 'non-teaching' && <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-1 bg-orange-600" />}
          </button>
        </div>
      </section>

      {/* --- STAFF GRID --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <AnimatePresence mode="wait">
            {(activeTab === "teaching" ? teachingStaff : nonTeachingStaff).map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-slate-100 rounded-sm mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all flex gap-4">
                    <button className="p-2 bg-orange-600 text-white rounded-full"><Mail className="w-4 h-4" /></button>
                    <button className="p-2 bg-white text-slate-900 rounded-full"><Linkedin className="w-4 h-4" /></button>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-orange-600 font-bold text-[9px] uppercase tracking-widest">{member.dept}</p>
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">{member.name}</h3>
                  <p className="text-slate-400 font-bold text-xs uppercase">{member.role}</p>
                  <p className="text-slate-500 text-sm italic leading-relaxed pt-2 border-t border-slate-100">"{member.bio}"</p>
                  
                  {member.expertise && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {member.expertise.map(exp => (
                        <span key={exp} className="px-3 py-1 bg-slate-50 text-[9px] font-bold text-slate-500 uppercase tracking-tight rounded-sm">
                          {exp}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* --- JOIN THE TEAM CTA --- */}
      <section className="py-24 bg-slate-50 text-center">
        <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Aspire to Inspire?</h3>
        <p className="text-slate-400 text-sm mb-10 max-w-sm mx-auto uppercase font-bold tracking-widest">We are always looking for global academic talent.</p>
        <button className="px-12 py-5 bg-slate-900 text-white font-black uppercase tracking-[0.2em] text-xs hover:bg-orange-600 transition-all shadow-2xl">
          View Open Positions
        </button>
      </section>
    </main>
  );
}