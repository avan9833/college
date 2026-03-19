"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./globals.css"; 
import Navbar from "@/components/landing/Navbar";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation"; // Added for route detection

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const pathname = usePathname(); // Get current path
  const isAdminPage = pathname.startsWith("/admin"); // Check if we are in admin area

  // Scroll effect for landing page navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Timer logic for loader (Only runs on non-admin pages)
  useEffect(() => {
    if (isAdminPage) {
      setLoading(false); // No loader for admin
      return;
    }
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [isAdminPage]);

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased selection:bg-orange-600`}>
        <AnimatePresence mode="wait">
          {/* 1. Show Loader ONLY for Landing Pages */}
          {loading && !isAdminPage ? (
            <motion.div
              key="loader"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.8 } }}
              className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-slate-950"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative"
              >
                <div className="w-24 h-24 bg-orange-600 flex items-center justify-center font-black text-5xl text-white italic shadow-[0_0_50px_rgba(234,88,12,0.5)]">
                  V
                </div>
                <motion.div 
                  animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="absolute inset-0 border-2 border-orange-600"
                />
              </motion.div>
              <p className="mt-8 text-white text-[10px] font-black uppercase tracking-[1em] opacity-40">
                Initializing Node
              </p>
            </motion.div>
          ) : (
            /* 2. Main Content Wrapper */
            <motion.div
              key="content"
              initial={isAdminPage ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* 3. Render Navbar ONLY if NOT an Admin Page */}
              {!isAdminPage && <Navbar {...({ isScrolled } as any)} />}
              
              {/* Render Admin/User pages */}
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </body>
    </html>
  );
}