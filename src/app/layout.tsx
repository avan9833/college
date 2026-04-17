"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./globals.css"; 
import Navbar from "@/components/landing/Navbar";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith("/admin"); // Detects if we are in admin/hr routes

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Performance: Bypass the landing page loader for admin users
  useEffect(() => {
    if (isAdminPage) {
      setLoading(false); 
      return;
    }
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [isAdminPage]);

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased selection:bg-orange-600`}>
        <AnimatePresence mode="wait">
          {/* Show loader only for the main landing website */}
          {loading && !isAdminPage ? (
            <motion.div
              key="loader"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-slate-950"
            >
              <div className="w-20 h-20 bg-orange-600 flex items-center justify-center font-black text-4xl text-white italic">
                V
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={isAdminPage ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative"
            >
              {/* Navbar is HIDDEN for all /admin routes to allow the Admin Sidebar to take control */}
              {!isAdminPage && <Navbar {...({ isScrolled } as any)} />}
              
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </body>
    </html>
  );
}