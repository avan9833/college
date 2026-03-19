"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, Search, Book, Bookmark, 
  CheckCircle, Clock, Filter, ChevronRight, 
  Info, Library, Hash
} from "lucide-react";

// Expanded Mock Library Data
const BOOKS = [
  // Computer Science & AI
  { id: 1, title: "Modern Quantum Mechanics", author: "J.J. Sakurai", category: "Physics", status: "Available", isbn: "978-011" },
  { id: 2, title: "Neural Networks & Deep Learning", author: "Michael Nielsen", category: "AI/ML", status: "Reserved", isbn: "978-024" },
  { id: 3, title: "Discrete Mathematics", author: "Kenneth Rosen", category: "Math", status: "Available", isbn: "978-055" },
  { id: 4, title: "Algorithms Unlocked", author: "Thomas Cormen", category: "CS", status: "Borrowed", isbn: "978-099" },
  { id: 5, title: "Clean Code", author: "Robert C. Martin", category: "CS", status: "Available", isbn: "978-105" },
  { id: 6, title: "The Pragmatic Programmer", author: "Andrew Hunt", category: "CS", status: "Available", isbn: "978-108" },
  
  // Electronics & Hardware
  { id: 7, title: "Digital Design", author: "M. Morris Mano", category: "Electronics", status: "Available", isbn: "978-201" },
  { id: 8, title: "Microelectronic Circuits", author: "Adel Sedra", category: "Electronics", status: "Borrowed", isbn: "978-205" },
  
  // Management & Soft Skills
  { id: 9, title: "Zero to One", author: "Peter Thiel", category: "Management", status: "Available", isbn: "978-301" },
  { id: 10, title: "Atomic Habits", author: "James Clear", category: "Self-Help", status: "Available", isbn: "978-305" },
  { id: 11, title: "Start with Why", author: "Simon Sinek", category: "Management", status: "Reserved", isbn: "978-310" },
  
  // Advanced Science
  { id: 12, title: "A Brief History of Time", author: "Stephen Hawking", category: "Physics", status: "Available", isbn: "978-401" },
  { id: 13, title: "Genetics: A Conceptual Approach", author: "Benjamin Pierce", category: "Biology", status: "Available", isbn: "978-405" },
  { id: 14, title: "Organic Chemistry", author: "Jonathan Clayden", category: "Chemistry", status: "Borrowed", isbn: "978-410" },
];

const CATEGORIES = ["All", "CS", "AI/ML", "Physics", "Math", "Electronics", "Management", "Self-Help", "Biology", "Chemistry"];

export default function LibraryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [borrowingId, setBorrowingId] = useState<number | null>(null);

  // Logic: Search by Title, Author, or ISBN + Category Filter
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
    // Simulate Request
    setTimeout(() => {
      setBorrowingId(null);
      alert("Borrow Request Transmitted. Please collect your physical copy from the Registry Desk.");
    }, 1500);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available': return 'bg-emerald-500';
      case 'Reserved': return 'bg-orange-500';
      case 'Borrowed': return 'bg-red-500';
      default: return 'bg-slate-500';
    }
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] p-6 pt-24">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div>
            <Link href="/students-corner" className="group text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-orange-600 flex items-center gap-2 mb-2 transition">
              <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform"/> Back to Corner
            </Link>
            <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-slate-900 leading-none">
              Digital <span className="text-orange-600">Archives.</span>
            </h1>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-2">
              B.Tech Library Node | Active Collection: {BOOKS.length} Resources
            </p>
          </div>

          <div className="bg-slate-900 p-4 border-l-4 border-orange-600 shadow-xl flex items-center gap-6">
             <div className="text-center px-4">
                <p className="text-[9px] font-black text-slate-400 uppercase">Loans</p>
                <p className="text-xl font-black text-white italic">03</p>
             </div>
             <div className="text-center px-4 border-l border-white/10">
                <p className="text-[9px] font-black text-slate-400 uppercase">Penalty</p>
                <p className="text-xl font-black text-orange-500 italic">₹0.00</p>
             </div>
          </div>
        </div>

        {/* --- SEARCH & FILTERS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-10">
          <div className="lg:col-span-3 relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text"
              placeholder="Search by Title, Author, or ISBN..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border-2 border-slate-100 p-5 pl-14 outline-none focus:border-orange-500 transition-all font-bold text-sm shadow-sm"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <select 
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="w-full bg-white border-2 border-slate-100 p-5 pl-14 outline-none focus:border-orange-500 transition-all font-black uppercase text-[10px] tracking-widest cursor-pointer appearance-none shadow-sm"
            >
              {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat} Resources</option>)}
            </select>
          </div>
        </div>

        {/* --- BOOK GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredBooks.map((book) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={book.id}
                className="bg-white border border-slate-200 p-8 shadow-md hover:shadow-2xl hover:border-orange-600 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[9px] font-black text-orange-600 uppercase tracking-widest bg-orange-50 px-2 py-1">
                      {book.category}
                    </span>
                    <Bookmark size={16} className="text-slate-200 hover:text-orange-600 cursor-pointer transition-colors" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 uppercase italic leading-tight mb-2 group-hover:text-orange-600 transition-colors h-14">
                    {book.title}
                  </h3>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 italic">By {book.author}</p>
                  
                  <div className="flex items-center gap-2 mb-8">
                    <div className={`w-2 h-2 rounded-full ${getStatusColor(book.status)}`} />
                    <span className="text-[10px] font-black uppercase text-slate-400">{book.status}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-[9px] font-bold text-slate-300 uppercase mb-2">
                    <span className="flex items-center gap-1"><Hash size={10} /> {book.isbn}</span>
                    <span>Ref: LIB-{book.id}00X</span>
                  </div>
                  <button 
                    onClick={() => handleBorrow(book.id)}
                    disabled={book.status !== 'Available' || borrowingId !== null}
                    className={`w-full py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 ${
                      book.status === 'Available' 
                      ? 'bg-slate-900 text-white hover:bg-orange-600 shadow-lg' 
                      : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    {borrowingId === book.id ? (
                      "Syncing..."
                    ) : book.status === 'Available' ? (
                      <><CheckCircle size={14} /> Request Loan</>
                    ) : (
                      <><Clock size={14} /> Unavailable</>
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* --- EMPTY STATE --- */}
        {filteredBooks.length === 0 && (
          <div className="text-center py-20 border-2 border-dashed border-slate-200 mt-10">
            <Library size={48} className="mx-auto text-slate-200 mb-4" />
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Resource not found in Vanguard Database.</p>
          </div>
        )}

        {/* --- ALERT BOX --- */}
        <div className="mt-16 bg-blue-50 border border-blue-100 p-6 flex items-start gap-4">
          <Info className="text-blue-600 shrink-0" size={20} />
          <p className="text-[10px] font-bold text-blue-700 leading-relaxed uppercase">
            Reserved resources must be claimed within 24 hours. Failure to return borrowed books by the due date results in a ₹10/day penalty.
          </p>
        </div>

        <footer className="mt-20 text-center pb-10">
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-[1em]">Vanguard Library Node • 2026</p>
        </footer>
      </div>
    </main>
  );
}