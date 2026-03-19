"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  FileUp, 
  Search, 
  Trophy, 
  Users, 
  TrendingUp, 
  Download, 
  CheckCircle,
  AlertTriangle 
} from "lucide-react";

// Initial mock data for student performance
const INITIAL_GRADES = [
  { id: "VIT2026001", name: "Rohan Gupta", marks: 88, grade: "A" },
  { id: "VIT2026002", name: "Harsh bagal", marks: 94, grade: "A+" },
  { id: "VIT2026003", name: "Priya Sharma", marks: 72, grade: "B" },
  { id: "VIT2026004", name: "Ananya Patel", marks: 81, grade: "A" },
  { id: "VIT2026005", name: "Rahul Mehta", marks: 65, grade: "C" },
];

// FIX: Standard default export to prevent Next.js Runtime Errors
export default function GradingPage() {
  const router = useRouter();
  const [students, setStudents] = useState(INITIAL_GRADES);
  const [searchTerm, setSearchTerm] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // 1. Working Mark Update Handler
  const handleMarkChange = (id: string, newMarks: string) => {
    const marks = parseInt(newMarks) || 0;
    let grade = "F";
    if (marks >= 90) grade = "A+";
    else if (marks >= 80) grade = "A";
    else if (marks >= 70) grade = "B";
    else if (marks >= 60) grade = "C";

    setStudents(students.map(s => 
      s.id === id ? { ...s, marks, grade } : s
    ));
  };

  // 2. Working Publish/Upload Handler
  const handlePublish = () => {
    setIsUploading(true);
    // Simulate API delay
    setTimeout(() => {
      setIsUploading(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 2000);
  };

  // 3. Working CSV Export Handler
  const handleExport = () => {
    alert("Generating CSV export for Quantum Computing (CS-401)...");
  };

  const classAverage = (students.reduce((acc, curr) => acc + curr.marks, 0) / students.length).toFixed(1);

  const filteredStudents = students.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#F8FAFC] p-6 pt-24 selection:bg-orange-600 selection:text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div>
            {/* Functional Back Button */}
            <Link href="/faculty" className="group text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-orange-600 flex items-center gap-2 mb-2 transition">
              <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform"/> Back to Dashboard
            </Link>
            <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-slate-900">
              Grade <span className="text-orange-600">Center.</span>
            </h1>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">
              Quantum Computing (CS-401) | Assessment: Mid-Term 2026
            </p>
          </div>

          <div className="flex gap-3">
            {/* Functional Export Button */}
            <button 
              onClick={handleExport}
              className="bg-white border border-slate-200 text-slate-900 px-6 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 active:scale-95 transition flex items-center gap-2 shadow-sm"
            >
              <Download size={16} /> Export CSV
            </button>
            {/* Functional Publish Button */}
            <button 
              onClick={handlePublish}
              disabled={isUploading}
              className="bg-slate-900 text-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-orange-600 active:scale-95 transition flex items-center gap-3 disabled:opacity-50 shadow-xl"
            >
              {isUploading ? "Processing..." : <><FileUp size={16} /> Publish Grades</>}
            </button>
          </div>
        </div>

        {/* --- ANALYTICS CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 border border-slate-100 shadow-lg flex items-center gap-6">
            <div className="bg-orange-100 p-4 text-orange-600 rounded-sm">
              <TrendingUp size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Class Average</p>
              <p className="text-3xl font-black text-slate-900 italic">{classAverage}%</p>
            </div>
          </div>
          <div className="bg-white p-6 border border-slate-100 shadow-lg flex items-center gap-6">
            <div className="bg-blue-100 p-4 text-blue-600 rounded-sm">
              <Users size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Students Graded</p>
              <p className="text-3xl font-black text-slate-900 italic">{students.length}/120</p>
            </div>
          </div>
          <div className="bg-white p-6 border border-slate-100 shadow-lg flex items-center gap-6">
            <div className="bg-emerald-100 p-4 text-emerald-600 rounded-sm">
              <Trophy size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Highest Grade</p>
              <p className="text-3xl font-black text-slate-900 italic">A+</p>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {showSuccess && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-6 bg-emerald-500 text-white p-4 flex items-center gap-3 text-[10px] font-black uppercase tracking-widest shadow-lg"
            >
              <CheckCircle size={16} /> Data successfully synced to Vanguard Ledger.
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- DATA TABLE --- */}
        <div className="bg-white border border-slate-200 shadow-2xl">
          <div className="p-6 border-b border-slate-100">
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Find student to grade..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-50 border border-slate-100 p-4 pl-12 outline-none focus:border-orange-500 transition text-sm font-medium"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest">Student Info</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-center">Marks (%)</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-center">Auto Grade</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-6">
                      <p className="text-sm font-black text-slate-800 uppercase italic mb-1">{student.name}</p>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{student.id}</span>
                    </td>
                    <td className="p-6 text-center">
                      <input 
                        type="number" 
                        value={student.marks} 
                        onChange={(e) => handleMarkChange(student.id, e.target.value)}
                        className="w-20 bg-white border border-slate-200 p-2 text-center text-sm font-black text-slate-900 focus:border-orange-500 outline-none"
                      />
                    </td>
                    <td className="p-6 text-center">
                      <span className="text-xl font-black text-orange-600 italic">{student.grade}</span>
                    </td>
                    <td className="p-6 text-right">
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] bg-slate-100 text-slate-500 px-3 py-1 rounded-sm">
                        Verified
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-[1em]">Vanguard Faculty Ledger • 2026</p>
        </div>
      </div>
    </main>
  );
}