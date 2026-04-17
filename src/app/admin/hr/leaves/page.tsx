"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CalendarClock, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Search, 
  Filter, 
  AlertTriangle 
} from "lucide-react";

// Expanded mock data matching your full staff directory
const initialLeaves = [
  // HR & ADMIN
  { id: 101, name: "Anjali Verma", role: "Chief HR Officer", type: "Sick Leave", duration: "1 Day", date: "18 Mar", reason: "Viral Fever", status: "Declined" },
  { id: 103, name: "Ishita Gupta", role: "HR Assistant", type: "Casual Leave", duration: "2 Days", date: "22 Mar - 23 Mar", reason: "Family Function", status: "Pending" },
  
  // TEACHING
  { id: 501, name: "Dr. Rajesh Sharma", role: "Dean of Academics", type: "Sick Leave", duration: "2 Days", date: "20 Mar - 21 Mar", reason: "Medical Checkup", status: "Pending" },
  { id: 502, name: "Dr. Sunita Rao", role: "Head of Dept (CSE)", type: "Casual Leave", duration: "1 Day", date: "25 Mar", reason: "Personal Work", status: "Pending" },
  { id: 503, name: "Prof. Vinay Kulkarni", role: "Assistant Professor", type: "Maternity/Paternity", duration: "5 Days", date: "20 Mar - 25 Mar", reason: "Family Emergency", status: "Approved" },

  // PLACEMENT
  { id: 201, name: "Vikram Mehta", role: "Director of Placements", type: "Casual Leave", duration: "3 Days", date: "15 Mar - 17 Mar", reason: "Outstation Trip", status: "Approved" },
  { id: 203, name: "Meera Nair", role: "Placement Coordinator", type: "Sick Leave", duration: "2 Days", date: "21 Mar - 22 Mar", reason: "Severe Migraine", status: "Pending" },

  // FINANCE & ADMISSION
  { id: 402, name: "Amitabh Shah", role: "Accounts Manager", type: "Paid Leave", duration: "4 Days", date: "24 Mar - 27 Mar", reason: "Vacation", status: "Pending" },
  { id: 302, name: "Arjun Reddy", role: "Senior Counselor", type: "Casual Leave", duration: "1 Day", date: "19 Mar", reason: "Bank Work", status: "Declined" },

  // NON-TEACHING
  { id: 601, name: "Ramesh Kumar", role: "Chief Administrator", type: "Paid Leave", duration: "3 Days", date: "22 Mar - 24 Mar", reason: "Personal Work", status: "Approved" },
  { id: 602, name: "Sunil Joshi", role: "Senior Lab Technician", type: "Sick Leave", duration: "1 Day", date: "21 Mar", reason: "Dental Appointment", status: "Pending" },
];

export default function HRLeavePage() {
  const [leaves, setLeaves] = useState(initialLeaves);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const handleAction = (id: number, newStatus: "Approved" | "Declined") => {
    setLeaves(leaves.map(leave => 
      leave.id === id ? { ...leave, status: newStatus } : leave
    ));
  };

  const filteredLeaves = leaves.filter(l => {
    const matchesFilter = filter === "All" || l.status === filter;
    const matchesSearch = l.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          l.role.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="p-4 lg:p-8 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight italic uppercase">Leave Authorization</h1>
          <p className="text-slate-500 text-sm font-medium">Review and process staff leave applications for VIT University.</p>
        </div>
        
        {/* Search Bar */}
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input 
            type="text" 
            placeholder="Search applicants..." 
            className="w-full pl-10 pr-4 py-2 bg-white border-2 border-slate-100 rounded-xl text-xs font-bold focus:border-orange-500 outline-none transition-all"
            value={searchTerm || ""}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Status Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {["All", "Pending", "Approved", "Declined"].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
              filter === tab 
              ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20" 
              : "bg-white text-slate-400 border border-slate-200 hover:border-orange-500 hover:text-orange-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid View */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredLeaves.map((leave) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              key={leave.id}
              className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col md:flex-row group hover:shadow-xl hover:border-slate-200 transition-all duration-300"
            >
              {/* Profile/Sidebar */}
              <div className="p-6 md:w-2/5 border-b md:border-b-0 md:border-r border-slate-50 bg-slate-50/30">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white font-black italic text-sm">
                    {leave.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight">{leave.name}</h3>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{leave.role}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-wider">
                    <CalendarClock size={14} className="text-orange-500" /> {leave.date}
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-wider">
                    <Clock size={14} className="text-blue-500" /> {leave.duration}
                  </div>
                </div>
              </div>

              {/* Content/Actions */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-slate-100 text-slate-900 rounded-full border border-slate-200">
                      {leave.type}
                    </span>
                    <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-md ${
                      leave.status === 'Approved' ? 'bg-green-100 text-green-700' : 
                      leave.status === 'Declined' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                      {leave.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-bold leading-relaxed italic opacity-80">
                    "{leave.reason}"
                  </p>
                </div>

                {/* HR Control Panel */}
                <div className="mt-8">
                  {leave.status === "Pending" ? (
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleAction(leave.id, "Declined")}
                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-white border-2 border-slate-100 text-red-500 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-red-50 hover:border-red-100 transition-all"
                      >
                        <XCircle size={14} /> Decline
                      </button>
                      <button 
                        onClick={() => handleAction(leave.id, "Approved")}
                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-orange-600 transition-all shadow-lg shadow-slate-900/10"
                      >
                        <CheckCircle2 size={14} /> Approve
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-[9px] font-black text-slate-300 uppercase tracking-widest border-t border-slate-50 pt-4">
                      <CheckCircle2 size={14} className={leave.status === 'Approved' ? 'text-green-500' : 'text-red-500'} /> 
                      Authorization Finalized
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      {/* Empty State */}
      {filteredLeaves.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-slate-300">
          <AlertTriangle size={48} className="mb-4 opacity-20" />
          <p className="font-black uppercase tracking-widest text-xs">No matching applications found</p>
        </div>
      )}
    </div>
  );
}