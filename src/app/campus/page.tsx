"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/components/landing/Navbar";
import { MapPin, Coffee, BookOpen, Dumbbell, Tv, Zap, Wind, Shield } from "lucide-react";

export default function CampusPage() {
  const facilities = [
    { name: "Tech Library", desc: "24/7 Access to 500,000+ digital and physical volumes.", icon: <BookOpen className="w-8 h-8" /> },
    { name: "Smart Hostels", desc: "Fully air-conditioned rooms with high-speed fiber Wi-Fi.", icon: <Tv className="w-8 h-8" /> },
    { name: "Olympic Sports", desc: "Indoor stadium, swimming pool, and professional turf.", icon: <Dumbbell className="w-8 h-8" /> },
    { name: "Global Cafeteria", desc: "Multi-cuisine food court with organic options.", icon: <Coffee className="w-8 h-8" /> },
  ];

  const perks = [
    { title: "24/7 Power", icon: <Zap className="w-5 h-5" /> },
    { title: "Eco-Friendly", icon: <Wind className="w-5 h-5" /> },
    { title: "Secure Campus", icon: <Shield className="w-5 h-5" /> },
  ];

  return (
    <main className="min-h-screen bg-white selection:bg-orange-500 selection:text-white">
      {/* Navbar always active on sub-pages */}
      <Navbar isScrolled={true} />

      {/* --- HERO SECTION: FIXED VISUALS --- */}
      <section className="relative h-[70vh] flex items-end pb-24 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1498243639359-2cee3e3544a0?q=80&w=2070" 
            className="w-full h-full object-cover scale-105"
            alt="Campus Architecture"
          />
          {/* Transition Gradient: Fades image into the white page content */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <nav className="flex items-center gap-2 text-orange-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-4">
            <Link href="/" className="hover:text-slate-900 transition">Home</Link>
            <span>/</span>
            <span className="text-slate-400">Campus</span>
          </nav>
          <h1 className="text-7xl md:text-9xl font-black text-slate-900 tracking-tighter uppercase italic leading-[0.8]">
            The <br /> <span className="text-orange-600 drop-shadow-sm">Ecosystem.</span>
          </h1>
        </div>
      </section>

      {/* --- INFRASTRUCTURE HIGHLIGHTS --- */}
      <section className="py-20 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-black uppercase tracking-tighter">Built for <br/> <span className="text-orange-600 italic">Ambition.</span></h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Spread across 40 acres of lush greenery, VIT offers a world-class environment 
                designed to foster innovation, creativity, and physical well-being.
              </p>
            </div>
            
            <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Acres", val: "40+" },
                { label: "Blocks", val: "12" },
                { label: "Hostels", val: "05" },
                { label: "Labs", val: "45+" }
              ].map((stat, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-sm border border-slate-100 flex flex-col justify-center items-center">
                  <span className="text-3xl font-black text-slate-900">{stat.val}</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- MASONRY GALLERY --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="columns-1 md:columns-3 gap-6 space-y-6">
          <div className="relative group overflow-hidden rounded-sm bg-slate-100">
            <img src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070" alt="Block A" className="group-hover:scale-110 transition-transform duration-700" />
          </div>
          <div className="relative group overflow-hidden rounded-sm bg-slate-100">
            <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070" alt="Library" className="group-hover:scale-110 transition-transform duration-700" />
          </div>
          <div className="relative group overflow-hidden rounded-sm bg-slate-100">
            <img src="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=1974" alt="Accommodation" className="group-hover:scale-110 transition-transform duration-700" />
          </div>
          <div className="relative group overflow-hidden rounded-sm bg-slate-100">
            <img src="https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2070" alt="Innovation Lab" className="group-hover:scale-110 transition-transform duration-700" />
          </div>
        </div>
      </section>

      {/* --- CORE FACILITIES GRID --- */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-black uppercase mb-20 italic tracking-tighter">Infrastructure <span className="text-orange-500">Standards</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {facilities.map((f, i) => (
              <div key={i} className="group">
                <div className="text-orange-500 mb-8 transform group-hover:-translate-y-2 transition-transform duration-300">
                  {f.icon}
                </div>
                <h4 className="text-xl font-bold uppercase mb-4 tracking-tight">{f.name}</h4>
                <p className="text-slate-400 text-sm leading-relaxed border-l border-white/10 pl-4">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-24 pt-12 border-t border-white/10 flex flex-wrap gap-12">
            {perks.map((p, i) => (
              <div key={i} className="flex items-center gap-3 text-slate-400">
                <div className="text-orange-500">{p.icon}</div>
                <span className="text-[10px] font-black uppercase tracking-widest">{p.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-32 text-center bg-white">
        <h3 className="text-4xl font-black uppercase mb-4 tracking-tighter">Experience it first hand.</h3>
        <p className="text-slate-400 mb-10 max-w-sm mx-auto text-sm">Guided campus tours available Monday to Friday, 10 AM to 4 PM.</p>
        <Link 
          href="/contact" 
          className="inline-block px-12 py-5 bg-orange-600 text-white font-black uppercase tracking-[0.2em] text-xs hover:bg-slate-900 transition-all shadow-xl shadow-orange-600/20"
        >
          Book a Campus Tour
        </Link>
      </section>

      <footer className="py-12 bg-slate-50 border-t border-slate-100 text-center">
        <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[1em]">Vanguard Institute • Corporate Relations</p>
      </footer>
    </main>
  );
}