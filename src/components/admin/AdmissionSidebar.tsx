"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, UserCheck, FileText, 
  BarChart3, Settings, LogOut, ShieldCheck,
  ClipboardList, Users, Database
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function AdmissionSidebar({ role }: { role: string }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("adminRole");
    router.push("/admin/login");
  };

  // Define nav items based on role
  const menuItems = [
    { name: "Terminal Home", icon: LayoutDashboard, path: "/admin/admission/dashboard", roles: ["ADMISSION_HEAD", "COUNSELOR", "ASSISTANT"] },
    { name: "Global Analytics", icon: BarChart3, path: "/admin/admission/analytics", roles: ["ADMISSION_HEAD"] },
    { name: "Lead Evaluation", icon: UserCheck, path: "/admin/admission/evaluation", roles: ["ADMISSION_HEAD", "COUNSELOR"] },
    { name: "Document Sync", icon: FileText, path: "/admin/admission/documents", roles: ["ADMISSION_HEAD", "ASSISTANT"] },
    { name: "Node Database", icon: Database, path: "/admin/admission/database", roles: ["ADMISSION_HEAD"] },
    { name: "Verify Queue", icon: ClipboardList, path: "/admin/admission/queue", roles: ["COUNSELOR", "ASSISTANT"] },
    
  ];

  return (
    <motion.aside 
      initial={{ x: -100 }} animate={{ x: 0 }}
      className="fixed left-0 top-0 h-screen w-72 bg-[#020617] border-r border-white/5 z-50 flex flex-col p-6"
    >
      {/* Sidebar Header */}
      <div className="mb-10 px-2">
        <div className="flex items-center gap-3 mb-2">
          <ShieldCheck className="text-orange-600" size={28} />
          <h2 className="text-xl font-black text-white italic tracking-tighter uppercase">Vanguard</h2>
        </div>
        <div className="h-1 w-12 bg-orange-600 rounded-full" />
      </div>

      {/* Navigation Nodes */}
      <nav className="flex-1 space-y-2">
        <p className="text-[9px] font-black text-slate-600 uppercase tracking-[0.3em] mb-4 px-2">Operational Nodes</p>
        {menuItems.filter(item => item.roles.includes(role)).map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link key={item.path} href={item.path}>
              <motion.div
                whileHover={{ x: 5 }}
                className={`flex items-center gap-4 px-4 py-4 rounded-2xl transition-all group ${
                  isActive 
                  ? "bg-orange-600 text-white shadow-[0_0_20px_rgba(234,88,12,0.3)]" 
                  : "text-slate-500 hover:text-white hover:bg-white/5"
                }`}
              >
                <item.icon size={20} className={isActive ? "text-white" : "group-hover:text-orange-500 transition-colors"} />
                <span className="text-xs font-black uppercase tracking-widest">{item.name}</span>
                {isActive && (
                  <motion.div layoutId="activeNode" className="ml-auto w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_#fff]" />
                )}
              </motion.div>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Profile Section */}
      <div className="mt-auto pt-6 border-t border-white/5">
        <div className="bg-white/5 p-4 rounded-3xl border border-white/10 mb-4">
          <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">Authenticated As</p>
          <p className="text-xs font-black text-orange-500 uppercase italic truncate">{role.replace("_", " ")}</p>
        </div>
        <button 
          onClick={handleLogout}
          className="w-full flex items-center justify-between px-4 py-4 text-red-500 hover:bg-red-500/10 rounded-2xl transition-all group"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">Terminate Session</span>
          <LogOut size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.aside>
  );
}