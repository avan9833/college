"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, Search, Book, Bookmark, 
  CheckCircle, Clock, Filter, ChevronRight, 
  Info, Library, Hash, Globe, Eye,
  Download, Zap, ShieldCheck, AlertTriangle
} from "lucide-react";

// --- ENHANCED BOOK DATA ---
const BOOKS = [
  { id: 1, title: "Modern Quantum Mechanics", author: "J.J. Sakurai", category: "Physics", status: "Available", isbn: "978-011", pages: 520, type: "Digital + Physical" },
  { id: 2, title: "Neural Networks & Deep Learning", author: "Michael Nielsen", category: "AI/ML", status: "Reserved", isbn: "978-024", pages: 380, type: "Digital Only" },
  { id: 3, title: "Discrete Mathematics", author: "Kenneth Rosen", category: "Math", status: "Available", isbn: "978-055", pages: 800, type: "Physical Only" },
  { id: 4, title: "Algorithms Unlocked", author: "Thomas Cormen", category: "CS", status: "Borrowed", isbn: "978-099", pages: 240, type: "Digital + Physical" },
  { id: 5, title: "Clean Code", author: "Robert C. Martin", category: "CS", status: "Available", isbn: "978-105", pages: 464, type: "Digital + Physical" },
  { id: 6, title: "The Pragmatic Programmer", author: "Andrew Hunt", category: "CS", status: "Available", isbn: "978-108", pages: 352, type: "Digital + Physical" },
  { id: 9, title: "Zero to One", author: "Peter Thiel", category: "Management", status: "Available", isbn: "978-301", pages: 224, type: "Digital Only" },
  { id: 12, title: "A Brief History of Time", author: "Stephen Hawking", category: "Physics", status: "Available", isbn: "978-401", pages: 256, type: "Digital + Physical" },
];

const CATEGORIES = ["All", "CS", "AI/ML", "Physics", "Math", "Electronics", "Management", "Biology"];

export default function LibraryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [borrowingId, setBorrowingId] = useState<number | null>(null);
  const [wishlist, setWishlist] = useState<number[]>([]);

  const filteredBooks = BOOKS.filter(book => {
    const matchesSearch = 
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.isbn.includes(searchTerm);
    const matchesCategory = activeCategory === "All" || book.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleBorrow = (id: number) => {
    setBorrowingId(id);
    setTimeout(() => {
      setBorrowingId(null);
      alert("SUCCESS: Secure Link generated. Physical copy reserved at Central Node.");
    }, 1500);
  };

  const toggleWishlist = (id: number) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <main className="min-h-screen bg-[#FDFDFD] selection:bg-orange-600 selection:text-white font-sans">
      
      {/* --- TOP HUD NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/students-corner" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-orange-600 transition-all group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Registry Core
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Node Status:</span>
            <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-100">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-[9px] font-black uppercase">Online</span>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 max-w-7xl mx-auto px-6">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="flex items-center gap-3 mb-4">
               <Zap className="text-orange-600" size={20} />
               <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">Knowledge Repository</span>
            </div>
            <h1 className="text-7xl md:text-8xl font-black uppercase italic tracking-tighter text-slate-950 leading-[0.85]">
              Digital <br /> <span className="text-transparent stroke-slate-950" style={{ WebkitTextStroke: '2px #020617' }}>Archives.</span>
            </h1>
          </motion.div>

          <div className="flex items-center gap-6 bg-slate-950 p-6 rounded-[2rem] shadow-2xl border border-white/10">
             <div className="text-center px-6">
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Active Loans</p>
                <p className="text-3xl font-black text-white italic">03</p>
             </div>
             <div className="w-px h-12 bg-white/10" />
             <div className="text-center px-6">
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Node Credits</p>
                <p className="text-3xl font-black text-orange-500 italic">840</p>
             </div>
          </div>
        </div>

        {/* --- DYNAMIC FILTER BAR --- */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="relative flex-1 group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-orange-600 transition-colors" size={20} />
            <input 
              type="text"
              placeholder="SEARCH BY IDENTIFIER, AUTHOR, OR SUBJECT..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border-2 border-slate-100 p-6 pl-16 rounded-3xl outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/5 transition-all font-bold text-xs tracking-widest uppercase shadow-sm"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border-2 whitespace-nowrap ${
                  activeCategory === cat 
                  ? "bg-slate-950 text-white border-slate-950 shadow-xl shadow-slate-900/20" 
                  : "bg-white text-slate-400 border-slate-100 hover:border-orange-500 hover:text-orange-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* --- RESOURCE GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredBooks.map((book) => (
              <motion.div 
                layout key={book.id}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -10 }}
                className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:border-orange-600/30 transition-all group relative overflow-hidden"
              >
                {/* Book Type Icon Background */}
                <div className="absolute -right-4 -top-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                  <Library size={120} />
                </div>

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <span className="px-3 py-1 bg-orange-50 text-orange-600 text-[8px] font-black uppercase tracking-widest rounded-full">
                      {book.category}
                    </span>
                    <button onClick={() => toggleWishlist(book.id)}>
                      <Bookmark size={18} className={wishlist.includes(book.id) ? "fill-orange-600 text-orange-600" : "text-slate-200 hover:text-orange-600 transition-colors"} />
                    </button>
                  </div>

                  <h3 className="text-xl font-black text-slate-950 uppercase italic tracking-tighter leading-tight mb-2 group-hover:text-orange-600 transition-colors h-14 overflow-hidden">
                    {book.title}
                  </h3>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6 italic">Personnel: {book.author}</p>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center justify-between text-[9px] font-black uppercase">
                       <span className="text-slate-300">Format</span>
                       <span className="text-slate-600">{book.type}</span>
                    </div>
                    <div className="flex items-center justify-between text-[9px] font-black uppercase">
                       <span className="text-slate-300">Volume</span>
                       <span className="text-slate-600">{book.pages} Pages</span>
                    </div>
                    <div className="flex items-center gap-2 pt-2">
                      <div className={`w-2 h-2 rounded-full animate-pulse ${
                        book.status === 'Available' ? 'bg-emerald-500' : book.status === 'Reserved' ? 'bg-orange-500' : 'bg-red-500'
                      }`} />
                      <span className="text-[9px] font-black uppercase text-slate-400 tracking-widest">{book.status}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      onClick={() => handleBorrow(book.id)}
                      disabled={book.status !== 'Available' || borrowingId !== null}
                      className={`py-4 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
                        book.status === 'Available' 
                        ? 'bg-slate-950 text-white hover:bg-orange-600 shadow-lg' 
                        : 'bg-slate-50 text-slate-300 cursor-not-allowed'
                      }`}
                    >
                      {borrowingId === book.id ? "Syncing..." : "Borrow"}
                    </button>
                    <button className="py-4 bg-slate-50 text-slate-400 hover:bg-slate-100 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2">
                       <Eye size={12} /> Preview
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* --- SECURITY NOTICE --- */}
        <div className="mt-20 p-8 bg-slate-950 rounded-[3rem] border border-white/10 relative overflow-hidden group">
           <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              <div className="flex items-center gap-6">
                 <div className="p-4 bg-orange-600 rounded-2xl shadow-lg">
                    <ShieldCheck className="text-white" size={24} />
                 </div>
                 <div>
                    <h4 className="text-white font-black uppercase italic tracking-widest text-lg">Vanguard Academic Integrity</h4>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-1">All borrowed resources are encrypted with your Student ID Node.</p>
                 </div>
              </div>
              <p className="text-[10px] font-bold text-orange-500 bg-orange-500/10 px-4 py-2 rounded-full border border-orange-500/20 uppercase tracking-[0.2em]">
                 Penalty Protocol: ₹10.00 / Cycle
              </p>
           </div>
           <Zap className="absolute -right-10 -bottom-10 size-48 text-white/5 group-hover:scale-110 transition-transform duration-700" />
        </div>

      </section>

      <footer className="py-12 text-center border-t border-slate-100 opacity-20 italic">
        <p className="text-[10px] font-black text-slate-500 uppercase tracking-[1em]">Vanguard_Archive_Subnode_2026</p>
      </footer>
    </main>
  );
}