"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Aapki image ke saare menu items
  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "CAMPUS", href: "/campus" },
    { name: "PROGRAMS", href: "/programs" },
    { name: "PROCEDURE", href: "/procedure" },
    { name: "PLACEMENTS", href: "/placements" },
    { name: "OUR PEOPLE", href: "/people" },
    { name: "ACHIEVEMENTS", href: "/achievements" },
    { name: "EVENTS", href: "/events" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-[1000] bg-[#101827]/95 backdrop-blur-md border-b border-white/10 py-3">
      <div className="max-w-[1400px] mx-auto px-4 flex justify-between items-center">
        
        {/* --- LOGO (VIT.) --- */}
        <Link href="/" className="flex items-center gap-1 group shrink-0">
          <span className="font-black text-white text-2xl tracking-tighter italic">VIT</span>
          <span className="w-2 h-2 bg-orange-600 rounded-full mt-2"></span>
        </Link>

        {/* --- DESKTOP NAVIGATION (Hidden on Mobile) --- */}
        {/* screen agar badi hai toh hi ye dikhega */}
        <div className="hidden xl:flex items-center gap-5">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-[11px] font-bold text-white hover:text-orange-500 transition-colors tracking-tight"
            >
              {link.name}
            </Link>
          ))}
          
          {/* Student's Corner Button */}
          <Link href="/login" className="ml-4 bg-orange-600 text-white px-5 py-2.5 text-[11px] font-bold rounded-sm hover:bg-white hover:text-orange-600 transition-all uppercase">
            Student's Corner
          </Link>
        </div>

        {/* --- MOBILE/TABLET BUTTON --- */}
        <button 
          className="xl:hidden text-white p-2" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* --- MOBILE OVERLAY MENU --- */}
            <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-y-0 right-0 w-[280px] bg-[#101827] shadow-2xl xl:hidden z-[1001] flex flex-col p-8"
          >
            <div className="flex justify-end mb-8">
               <button onClick={() => setIsOpen(false)} className="text-white"><X size={30} /></button>
            </div>
            
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white font-bold text-sm hover:text-orange-500 flex justify-between items-center border-b border-white/5 pb-2"
                >
                  {link.name} <ChevronRight size={14} className="opacity-30" />
                </Link>
              ))}
              
              <Link 
                href="/login"
                onClick={() => setIsOpen(false)}
                className="mt-6 bg-orange-600 text-white text-center py-4 font-bold text-sm rounded-sm"
              >
                STUDENT'S CORNER
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}