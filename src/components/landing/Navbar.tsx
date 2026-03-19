"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // PREVENT SCROLL: Menu khulne par background scroll nahi hoga
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

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
    <>
      <nav className="fixed w-full z-[1000] bg-[#101827] border-b border-white/10 py-4 px-6">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-1 shrink-0">
            <span className="font-black text-white text-2xl tracking-tighter italic">VIT</span>
            <span className="w-2 h-2 bg-orange-600 rounded-full mt-2"></span>
          </Link>

          {/* DESKTOP NAVIGATION (Badi screens ke liye) */}
          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-[11px] font-extrabold text-white/80 hover:text-orange-500 transition-colors tracking-widest"
              >
                {link.name}
              </Link>
            ))}
            
            <Link href="/login" className="bg-orange-600 text-white px-6 py-3 text-[11px] font-black rounded-sm hover:bg-white hover:text-orange-600 transition-all uppercase tracking-widest">
              Login
            </Link>
          </div>

          {/* HAMBURGER BUTTON (Mobile aur Tablet ke liye) */}
          <button 
            className="xl:hidden text-white p-2 hover:bg-white/10 transition-all" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY MENU (Pure Black Background) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#101827] z-[2000] xl:hidden flex flex-col"
          >
            {/* Mobile Header Inside Menu */}
            <div className="flex justify-between items-center p-6 border-b border-white/10">
               <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-1">
                 <span className="font-black text-white text-2xl italic">VIT</span>
                 <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
               </Link>
               <button onClick={() => setIsOpen(false)} className="text-white p-2">
                 <X size={35} />
               </button>
            </div>
            
            {/* Scrollable Links Container */}
            <div className="flex-1 overflow-y-auto py-8 px-8 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white font-black text-2xl hover:text-orange-500 flex justify-between items-center py-4 border-b border-white/5 group"
                >
                  <motion.span whileTap={{ scale: 0.95 }}>{link.name}</motion.span>
                  <ChevronRight size={24} className="text-orange-600 opacity-0 group-hover:opacity-100 transition-all" />
                </Link>
              ))}
              
              <Link 
                href="/login"
                onClick={() => setIsOpen(false)}
                className="mt-8 bg-orange-600 text-white text-center py-5 font-black text-lg rounded-sm shadow-xl active:scale-95 transition-transform"
              >
                Login
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}