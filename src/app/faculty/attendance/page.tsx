"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Added for programmatic navigation
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Save, UserCheck, UserX, Search, CheckCircle } from "lucide-react";

// Mock data for demonstration
const INITIAL_STUDENTS = [
  { id: "VIT2026001", name: "Alex Rivera", status: "present" },
  { id: "VIT2026002", name: "Sarah Chen", status: "present" },
  { id: "VIT2026003", name: "Jordan Smith", status: "absent" },
  { id: "VIT2026004", name: "Maria Garcia", status: "present" },
  { id: "VIT2026005", name: "Kevin Zhang", status: "present" },
];

export default function AttendancePage() {
  const router = useRouter();
  const [students, setStudents] = useState(INITIAL_STUDENTS);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // 1. Toggle Status Logic: Switches between present/absent
  const toggleStatus = (id: string) => {
    setStudents(students.map(s => 
      s.id === id ? { ...s, status: s.status === "present" ? "absent" : "present" } : s
    ));
  };

  // 2. Save Logic: Simulates an API call and shows success state
  const handleSave = () => {
    setIsSaving(true);
    // Simulate server delay
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccess(true);
      // Hide success message after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1500);
  };

  const filteredStudents = students.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#F8FAFC] p-6 pt-24">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            {/* Back Button linked to Faculty Dashboard */}
            <Link href="/faculty" className="group text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-orange-600 flex items-center gap-2 mb-2 transition">
              <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform"/> Back to Dashboard
            </Link>
            <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900">
              Mark <span className="text-orange-600">Attendance</span>
            </h1>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">
              B.Tech CS - Semester 4 | Section A
            </p>
          </div>

          <div className="flex flex-col items-end gap-2">
            <button 
              onClick={handleSave}
              disabled={isSaving}
              className="bg-slate-900 text-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-orange-600 active:scale-95 transition-all flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl"
            >
              {isSaving ? (
                <span className="flex items-center gap-2">
                  <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Syncing Node...
                </span>
              ) : (
                <><Save size={16} /> Save Attendance</>
              )}
            </button>
            <AnimatePresence>
              {showSuccess && (
                <motion.span 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-[9px] font-black uppercase text-emerald-600 flex items-center gap-1"
                >
                  <CheckCircle size={12} /> Attendance Synced Successfully
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Search and Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by Student Name or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-slate-200 p-4 pl-12 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition text-sm font-medium shadow-sm"
            />
          </div>
          <div className="bg-white border border-slate-200 p-4 flex justify-around items-center shadow-sm">
            <div className="text-center">
              <p className="text-[10px] font-black text-slate-400 uppercase">Present</p>
              <p className="text-xl font-black text-emerald-600">{students.filter(s => s.status === "present").length}</p>
            </div>
            <div className="w-[1px] h-8 bg-slate-100"></div>
            <div className="text-center">
              <p className="text-[10px] font-black text-slate-400 uppercase">Absent</p>
              <p className="text-xl font-black text-red-600">{students.filter(s => s.status === "absent").length}</p>
            </div>
          </div>
        </div>

        {/* Student List */}
        <div className="bg-white border border-slate-200 shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-5 text-[10px] font-black uppercase tracking-widest">Registration ID</th>
                  <th className="p-5 text-[10px] font-black uppercase tracking-widest">Student Name</th>
                  <th className="p-5 text-[10px] font-black uppercase tracking-widest text-center">Status</th>
                  <th className="p-5 text-[10px] font-black uppercase tracking-widest text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <AnimatePresence mode="popLayout">
                  {filteredStudents.map((student) => (
                    <motion.tr 
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      key={student.id} 
                      className={`group transition-colors ${student.status === 'absent' ? 'bg-red-50/40' : 'hover:bg-slate-50'}`}
                    >
                      <td className="p-5 text-xs font-black text-slate-500 tracking-tighter">{student.id}</td>
                      <td className="p-5 text-sm font-bold text-slate-800 uppercase italic">{student.name}</td>
                      <td className="p-5 text-center">
                        <span className={`text-[9px] font-black uppercase px-3 py-1 rounded-full transition-all ${
                          student.status === 'present' 
                          ? 'bg-emerald-100 text-emerald-700 shadow-[0_0_10px_rgba(16,185,129,0.1)]' 
                          : 'bg-red-100 text-red-700 shadow-[0_0_10px_rgba(239,68,68,0.1)]'
                        }`}>
                          {student.status}
                        </span>
                      </td>
                      <td className="p-5 text-right">
                        <button 
                          onClick={() => toggleStatus(student.id)}
                          title={student.status === 'present' ? 'Mark Absent' : 'Mark Present'}
                          className={`p-2 transition-all rounded-sm shadow-sm active:scale-90 ${
                            student.status === 'present' 
                            ? 'bg-red-50 text-red-600 hover:bg-red-600 hover:text-white' 
                            : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white'
                          }`}
                        >
                          {student.status === 'present' ? <UserX size={18} /> : <UserCheck size={18} />}
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-8 text-center">
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-[1em]">Attendance Node • Vanguard Faculty</p>
        </div>
      </div>
    </main>
  );
}