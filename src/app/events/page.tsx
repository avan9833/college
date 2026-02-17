"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Ticket, Sparkles, X, CheckCircle } from "lucide-react";

export default function EventsPage() {
  const [filter, setFilter] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  const events = [
    { 
      id: "1", 
      title: "Tech-Nexus 2026", 
      category: "Technical", 
      date: "Mar 15, 2026", 
      location: "Main Auditorium", 
      bgImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070", // Coding/Tech BG
      desc: "Annual technical symposium featuring robot wars and hackathons." 
    },
    { 
      id: "2", 
      title: "Rhythms Cultural", 
      category: "Cultural", 
      date: "Mar 22, 2026", 
      location: "Open Air Theatre", 
      bgImage: "/Rhythms/rythm.png", // Concert BG
      desc: "A night of music, dance, and celebrity performances." 
    },
    { 
      id: "3", 
      title: "AI & ML Workshop", 
      category: "Workshop", 
      date: "Apr 05, 2026", 
      location: "Block B Lab-4", 
      bgImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070", // AI BG
      desc: "Hands-on session on building neural networks." 
    }
  ];

  const filteredEvents = filter === "All" ? events : events.filter(e => e.category === filter);

  return (
    <main className="min-h-screen bg-white pb-24">
      
      {/* --- HERO SECTION WITH MAIN BG --- */}
      <section className="relative h-[60vh] flex items-center justify-center bg-slate-950 overflow-hidden">
        {/* Main Background Image */}
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070" 
             className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
             alt="Campus Event BG"
           />
           {/* Dark Overlay to make text readable */}
           <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-white" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1 mb-6 bg-orange-600 text-white text-[10px] font-black uppercase tracking-[0.4em] italic">
              <Sparkles size={12} /> Live Your Best Life
            </span>
            <h1 className="text-7xl md:text-9xl font-black text-white uppercase italic tracking-tighter leading-none drop-shadow-2xl">
              Events <br /> <span className="text-orange-600">Hub.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* --- FILTER BUTTONS --- */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white p-4 shadow-2xl flex flex-wrap justify-center gap-4 border border-slate-100">
          {["All", "Technical", "Cultural", "Workshop"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 text-[10px] font-black uppercase tracking-widest transition-all ${
                filter === cat ? "bg-orange-600 text-white" : "bg-white text-slate-400 hover:text-orange-600 border border-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* --- EVENTS CARDS WITH INDIVIDUAL BG --- */}
      <section className="max-w-7xl mx-auto px-6 mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <AnimatePresence mode="popLayout">
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="group relative h-[450px] bg-slate-900 overflow-hidden shadow-2xl flex flex-col justify-end p-8"
            >
              {/* Card Background Image */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src={event.bgImage} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0"
                />
                {/* Gradient for Card Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              </div>

              {/* Card Content (Always Visible) */}
              <div className="relative z-10">
                <span className="text-orange-500 font-black text-[9px] uppercase tracking-widest bg-orange-500/10 px-3 py-1 mb-4 inline-block border border-orange-500/20">
                  {event.category}
                </span>
                <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-4 group-hover:text-orange-500 transition-colors">
                  {event.title}
                </h3>
                
                <div className="flex gap-4 mb-8 text-[10px] font-bold text-slate-300 uppercase tracking-tight">
                   <div className="flex items-center gap-1"><Calendar size={14} className="text-orange-600"/> {event.date}</div>
                   <div className="flex items-center gap-1"><MapPin size={14} className="text-orange-600"/> {event.location}</div>
                </div>

                <button 
                  onClick={() => setSelectedEvent(event.title)}
                  className="w-full py-4 bg-orange-600 text-white text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-orange-600 transition-all flex items-center justify-center gap-2"
                >
                  <Ticket size={14} /> Register Now
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>

      {/* SUCCESS POPUP (MODAL) */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-[1100] flex items-center justify-center p-6 bg-slate-950/90 backdrop-blur-md">
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="bg-white p-12 max-w-sm w-full text-center relative border-t-8 border-orange-600 shadow-2xl">
              <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle size={40} /></div>
              <h4 className="text-3xl font-black italic tracking-tighter text-slate-900">Registered!</h4>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2 mb-8">{selectedEvent}</p>
              <button onClick={() => setSelectedEvent(null)} className="w-full py-4 bg-slate-900 text-white font-black uppercase tracking-widest text-[10px]">Close</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}