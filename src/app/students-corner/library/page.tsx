"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Search, Book, Clock, Download, 
  ExternalLink, Bookmark, Hash, Layers 
} from "lucide-react";

export default function LibraryPage() {
  const borrowedBooks = [
    { title: "Advanced Engineering Mathematics", author: "Erwin Kreyszig", dueDate: "22 Feb 2026", id: "BK-9921" },
    { title: "Clean Code", author: "Robert C. Martin", dueDate: "05 Mar 2026", id: "BK-4410" },
  ];

  const digitalResources = [
    { name: "IEEE Xplore Digital Library", type: "Journals" },
    { name: "SpringerLink Node", type: "Research Papers" },
    { name: "ACM Digital Portal", type: "Computer Science" },
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] pb-20">
      {/* --- HERO HEADER --- */}
      <section className="bg-slate-950 pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-orange-500 font-black uppercase tracking-[0.5em] text-[10px]">Knowledge Hub</span>
            <h1 className="text-6xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-none mt-4">
              Digital <br /> <span className="text-orange-600">Library.</span>
            </h1>
            
            {/* Search Bar */}
            <div className="mt-12 max-w-2xl relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
              <input 
                type="text" 
                placeholder="Search 1.2M+ Books, Papers & Thesis..."
                className="w-full bg-white/10 border border-white/10 p-6 pl-16 text-white font-bold uppercase text-[10px] tracking-widest outline-none focus:border-orange-600 focus:bg-white/20 transition-all"
              />
            </div>
          </motion.div>
        </div>
        <Hash className="absolute -bottom-10 -right-10 text-white/[0.03]" size={300} />
      </section>

      {/* --- CONTENT GRID --- */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* LEFT: BORROWED STATUS */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white p-10 shadow-2xl border border-slate-100">
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 flex items-center gap-3">
                  <Bookmark className="text-orange-600" size={18} /> Currently Borrowed
                </h3>
                <span className="text-[10px] font-black uppercase text-slate-400">Total: 02</span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {borrowedBooks.map((book, i) => (
                  <div key={i} className="p-6 bg-slate-50 border-l-4 border-orange-600 group hover:bg-white hover:shadow-xl transition-all">
                    <p className="text-[9px] font-black text-slate-400 uppercase mb-2">{book.id}</p>
                    <h4 className="text-lg font-black uppercase italic tracking-tighter text-slate-900 leading-tight mb-2">
                      {book.title}
                    </h4>
                    <p className="text-xs font-bold text-slate-500 mb-6">{book.author}</p>
                    <div className="flex items-center gap-2 text-red-600">
                      <Clock size={14} />
                      <span className="text-[10px] font-black uppercase">Due: {book.dueDate}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* QUICK ACTIONS BENTO */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Book Renewal", icon: <Layers />, desc: "Extend due date" },
                { title: "Fine Status", icon: <Clock />, desc: "Clear dues online" },
                { title: "Reservation", icon: <Book />, desc: "Queue for books" },
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 border border-slate-100 hover:border-orange-600 transition-all group cursor-pointer shadow-lg">
                  <div className="text-slate-300 group-hover:text-orange-600 mb-4 transition-colors">
                    {item.icon}
                  </div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-[9px] font-bold text-slate-400 uppercase">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: DIGITAL REPOSITORY */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-slate-900 p-8 text-white shadow-2xl">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500 mb-8">E-Resources Portal</h3>
              <div className="space-y-4">
                {digitalResources.map((res, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-white/5 border border-white/5 hover:bg-white/10 cursor-pointer transition-all group">
                    <div>
                      <p className="text-[11px] font-bold text-white uppercase tracking-tight">{res.name}</p>
                      <span className="text-[9px] font-bold text-slate-500 uppercase">{res.type}</span>
                    </div>
                    <ExternalLink size={14} className="text-slate-600 group-hover:text-orange-500" />
                  </div>
                ))}
              </div>
              <button className="w-full mt-8 py-4 bg-orange-600 hover:bg-white hover:text-orange-600 transition-all font-black uppercase tracking-widest text-[9px] flex items-center justify-center gap-2">
                Download Catalog <Download size={14} />
              </button>
            </div>

            <div className="p-8 bg-blue-50 border-l-4 border-blue-600">
              <h4 className="text-[10px] font-black uppercase text-blue-900 mb-2 italic">Library Notice</h4>
              <p className="text-[11px] font-medium text-blue-700 leading-relaxed">
                Exam timings extended: Central Library will now be open **24/7** till March 30th.
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}