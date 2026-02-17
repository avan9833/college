"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./globals.css"; // Sabse safe path yahi hai
import Navbar from "@/components/landing/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  // Loading timer: 2 seconds ke baad screen hat jayegi
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased selection:bg-orange-600`}>
        <AnimatePresence>
          {loading ? (
            /* --- THE LOADER --- */
            <motion.div
              key="loader"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
              className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-slate-950"
            >
              {/* Animated Logo */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative"
              >
                <div className="w-24 h-24 bg-orange-600 flex items-center justify-center font-black text-5xl text-white italic shadow-[0_0_50px_rgba(234,88,12,0.5)]">
                  V
                </div>
                {/* Glowing ring animation */}
                <motion.div 
                  animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="absolute inset-0 border-2 border-orange-600"
                />
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 text-white text-[10px] font-black uppercase tracking-[1em] opacity-40"
              >
                Initializing Node
              </motion.p>
            </motion.div>
          ) : (
            /* --- THE ACTUAL WEBSITE --- */
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Navbar {...({ isScrolled } as any)} />
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </body>
    </html>
  );
}