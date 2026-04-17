"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, Users, Wallet, CalendarClock, 
  FileText, LogOut, UserPlus, Menu, X 
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/admin/hr/dashboard" },
  { name: "Staff Directory", icon: Users, href: "/admin/hr/staff" },
  { name: "Recruitment", icon: UserPlus, href: "/admin/hr/recruitment" },
  { name: "Payroll", icon: Wallet, href: "/admin/hr/payroll" },
  { name: "Leaves", icon: CalendarClock, href: "/admin/hr/leaves" },
];

export default function HRSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-[60] p-3 bg-slate-900 text-white rounded-xl shadow-lg"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Container */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 bg-slate-900 text-slate-300 flex flex-col border-r border-slate-800
        transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}>
        <div className="p-6 flex items-center gap-3 border-b border-slate-800">
          <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center font-black text-white italic">V</div>
          <div>
            <h2 className="text-white font-black text-sm tracking-tighter">VIT ADMIN</h2>
            <p className="text-[10px] text-orange-500 font-bold uppercase tracking-widest">HR Portal</p>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2 mt-4">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)}>
                <div className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${
                  isActive ? "bg-orange-600 text-white shadow-lg shadow-orange-600/20" : "hover:bg-slate-800 hover:text-white"
                }`}>
                  <item.icon size={20} />
                  <span className="text-xs font-black uppercase tracking-widest">{item.name}</span>
                </div>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all font-black text-xs uppercase tracking-widest">
            <LogOut size={20} /> Sign Out
          </button>
        </div>
      </aside>
    </>
  );
}