"use client";
import { useState } from "react";
import Link from "next/link";
// FIX 1: Relative Path
import Navbar from "@/components/landing/Navbar";

type Leader = { role: string; name: string; message: string; image: string };

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const leadership: Leader[] = [
    {
      role: "Founder's Message",
      name: "Avan S. Pal",
      message: "Our journey began with a single vision: to create a hub where innovation meets ethics. At VIT, we prepare students for challenges that don't even exist yet.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800",
    },
    {
      role: "Chairperson's Message",
      name: "Mrs. Meera Deshmukh",
      message: "Academic excellence is our baseline; character building is our goal. We ensure every student leaves our gates as a responsible global citizen.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800",
    },
    {
      role: "Executive Director",
      name: "Prof. Rajesh V. Iyer",
      message: "Efficiency and digital transformation are the pillars of our administration. We bridge the gap between classroom learning and industry requirements.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800",
    }
  ];

  const faqs = [
    { q: "Is VIT affiliated with any university?", a: "Yes, VIT is a state-private university approved by UGC and AICTE." },
    { q: "What are the scholarship criteria?", a: "We offer up to 100% merit-based scholarships for students with 95% and above in 12th boards." },
    { q: "Does the college provide hostel facilities?", a: "Yes, we have high-tech hostels with Wi-Fi, laundry, and 24/7 security on campus." }
  ];

  return (
    <main className="min-h-screen bg-white selection:bg-orange-100 selection:text-orange-700">
      <section className="relative h-[70vh] flex items-center overflow-hidden bg-slate-900">
        {/* FIX 2: Added isScrolled prop */}
        {/* <Navbar isScrolled={true} /> */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070" 
            alt="Campus Library" 
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
          <nav className="flex items-center gap-2 text-orange-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-6">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <span className="text-white/60">About Us</span>
          </nav>

          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase italic">
            Building <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">
              Tomorrow.
            </span>
          </h1>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mt-12 text-slate-300">
            <div className="w-20 h-1 bg-orange-500" />
            <p className="text-lg font-light max-w-xl">
              Vanguard Institute of Technology is more than a college; it's a 
              <strong> 40-acre innovation hub</strong> for global pioneers.
            </p>
          </div>
        </div>
      </section>

      {/* --- REST OF THE CODE REMAINS THE SAME --- */}
      <div className="relative z-20 max-w-5xl mx-auto -mt-12">
        <div className="bg-white shadow-2xl border border-slate-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 rounded-sm">
           <div className="text-center">
              <p className="text-2xl font-black text-slate-900">1998</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Established</p>
           </div>
           <div className="text-center">
              <p className="text-2xl font-black text-slate-900">150+</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Partners</p>
           </div>
           <div className="text-center">
              <p className="text-2xl font-black text-slate-900">45</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Research Labs</p>
           </div>
           <div className="text-center border-none">
              <p className="text-2xl font-black text-orange-600">A++</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">NAAC Grade</p>
           </div>
        </div>
      </div>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Institute <span className="text-orange-600 italic">Leadership.</span></h2>
          <div className="w-20 h-2 bg-slate-900 mt-4" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {leadership.map((leader, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 aspect-[4/5] rounded-sm bg-slate-100">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-orange-500 mb-1">{leader.role}</p>
                  <h3 className="text-2xl font-bold leading-none">{leader.name}</h3>
                </div>
              </div>
              <p className="text-slate-500 italic text-sm leading-relaxed border-l-2 border-orange-500 pl-4 py-2">
                "{leader.message}"
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-16 uppercase italic underline decoration-orange-500 decoration-4 underline-offset-8">Common Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 bg-white rounded-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-6 text-left font-bold text-slate-800 transition-all"
                >
                  <span className="text-sm uppercase tracking-wide">{faq.q}</span>
                  <span className={`text-orange-500 text-xl transition-transform ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                <div className={`transition-all duration-500 overflow-hidden ${openFaq === i ? "max-h-40 opacity-100 border-t border-slate-100" : "max-h-0 opacity-0"}`}>
                  <p className="p-6 text-slate-500 text-sm leading-relaxed bg-slate-50/50">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 bg-white border-t border-slate-100 text-center">
        <div className="max-w-7xl mx-auto px-6">
           <h4 className="text-sm font-black text-slate-300 uppercase tracking-[0.8em]">Vanguard Institute • Est 1998</h4>
        </div>
      </footer>
    </main>
  );
}