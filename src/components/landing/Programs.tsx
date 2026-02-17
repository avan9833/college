"use client";
import { 
  Cpu, Briefcase, Microscope, Palette, 
  Gavel, Stethoscope, Landmark, Globe 
} from "lucide-react";

export default function Programs() {
  const allPrograms = [
    {
      school: "Engineering & Tech",
      icon: <Cpu className="w-8 h-8" />,
      color: "border-blue-500 text-blue-600",
      courses: ["Computer Science", "Artificial Intelligence", "Robotics", "Cyber Security", "Data Science", ]
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
    {
      school: "Law & Governance",
      icon: <Gavel className="w-8 h-8" />,
      color: "border-amber-500 text-amber-600",
      courses: ["BA LLB (Integrated)", "Corporate Law", "Cyber Law", "Public Policy", "Intellectual Property"]
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
      courses: ["Psychology", "Applied Economics", "Sociology", "English Literature", "Political Science"]
    },
    {
      school: "Global Languages",
      icon: <Globe className="w-8 h-8" />,
      color: "border-cyan-500 text-cyan-600",
      courses: ["French", "German", "Spanish", "Japanese", "Mandarin"]
    }
  ];

  return (
    <section id="programs" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-bold text-xs uppercase tracking-[0.4em]">8 Schools • 40+ Courses</span>
          <h2 className="text-5xl font-black text-slate-900 mt-2 uppercase tracking-tighter italic">
            Global <span className="text-orange-600">Academics.</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            Explore diverse undergraduate and postgraduate programs designed to meet international industrial standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {allPrograms.map((p, idx) => (
            <div 
              key={idx} 
              className={`bg-white p-8 border-t-4 ${p.color} shadow-sm hover:shadow-2xl transition-all duration-500 group rounded-sm flex flex-col h-full`}
            >
              <div className="mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform">
                {p.icon}
              </div>
              <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4">
                {p.school}
              </h3>
              
              <ul className="space-y-3 flex-grow">
                {p.courses.map((course, i) => (
                  <li key={i} className="text-xs font-bold text-slate-400 hover:text-orange-600 cursor-pointer flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-slate-200 group-hover:bg-orange-500 rounded-full transition-colors" />
                    {course}
                  </li>
                ))}
              </ul>

              <button className="mt-8 pt-4 border-t border-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-orange-600 transition-colors text-left">
                Download Curriculum →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}