"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import { ClipboardCheck, UserCheck, FileText, CreditCard, GraduationCap, ArrowRight } from "lucide-react";

export default function AdmissionProcedure() {
  const steps = [
    {
      title: "Online Application",
      desc: "Register on our portal and fill out the digital application form with your academic details.",
      icon: <ClipboardCheck className="w-8 h-8" />,
      color: "border-orange-500"
    },
    {
      title: "Entrance Examination",
      desc: "Clear the VIT-SET (Selection Entrance Test) or submit valid JEE/GATE/CAT scores.",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "border-slate-900"
    },
    {
      title: "Document Verification",
      desc: "Upload scanned copies of your 10th/12th marksheets, ID proof, and transfer certificates.",
      icon: <FileText className="w-8 h-8" />,
      color: "border-orange-500"
    },
    {
      title: "Personal Interview",
      desc: "Shortlisted candidates will be invited for a virtual or in-person interaction with the faculty dean.",
      icon: <UserCheck className="w-8 h-8" />,
      color: "border-slate-900"
    },
    {
      title: "Fee Payment",
      desc: "Upon selection, secure your seat by paying the admission and first-semester tuition fees.",
      icon: <CreditCard className="w-8 h-8" />,
      color: "border-orange-500"
    }
  ];

  return (
    <main className="min-h-screen bg-white selection:bg-orange-500 selection:text-white">
      <Navbar />

      {/* --- HEADER --- */}
      <section className="pt-32 pb-20 bg-slate-900 text-white text-center px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-[10px]">Pathway to Excellence</span>
          <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mt-4">
            Admission <span className="text-orange-500 underline decoration-white/20 underline-offset-8">Procedure</span>
          </h1>
          <p className="mt-8 text-slate-400 font-light text-lg">
            Follow our streamlined process to become a part of the Vanguard legacy.
          </p>
        </motion.div>
      </section>

      {/* --- TIMELINE STEPS --- */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <div className="space-y-12">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-8 items-start group"
            >
              <div className="flex-shrink-0 w-20 h-20 bg-slate-50 border-2 border-slate-100 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500 rounded-sm">
                {step.icon}
              </div>
              <div className={`flex-grow p-8 border-l-4 ${step.color} bg-slate-50/50 hover:bg-white hover:shadow-2xl transition-all duration-500`}>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900">{step.title}</h3>
                  <span className="text-4xl font-black text-slate-100 group-hover:text-orange-100 transition-colors">0{i + 1}</span>
                </div>
                <p className="text-slate-500 leading-relaxed max-w-2xl">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- IMPORTANT DATES & DOCUMENTS --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="bg-white p-10 shadow-xl border border-slate-100">
            <h4 className="text-xl font-black uppercase mb-6 flex items-center gap-3">
              <div className="w-2 h-8 bg-orange-600" /> Required Documents
            </h4>
            <ul className="space-y-4 text-sm font-bold text-slate-500 uppercase tracking-wide">
              <li>• 10th & 12th Certificate</li>
              <li>• Entrance Exam Scorecard</li>
              <li>• Transfer/Migration Certificate</li>
              <li>• 5 Passport Size Photos</li>
              <li>• Aadhaar Card / Passport Copy</li>
            </ul>
          </div>

          <div className="bg-slate-900 p-10 shadow-xl text-white">
            <h4 className="text-xl font-black uppercase mb-6 flex items-center gap-3">
              <div className="w-2 h-8 bg-orange-600" /> Important Dates
            </h4>
            <div className="space-y-6">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-slate-400">Application Starts</span>
                <span className="font-bold">Jan 15, 2026</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-slate-400">Entrance Test (VIT-SET)</span>
                <span className="font-bold">April 10, 2026</span>
              </div>
              <div className={`flex justify-between border-b border-white/10 pb-2`}>
                <span className="text-slate-400">Result Declaration</span>
                <span className="font-bold">May 05, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 text-center">
        <h2 className="text-3xl font-black uppercase mb-8">Ready to start your journey?</h2>
        <Link 
          href="/admissions" 
          className="inline-flex items-center gap-4 px-12 py-5 bg-orange-600 text-white font-black uppercase tracking-[0.2em] text-xs hover:bg-slate-900 transition-all shadow-xl shadow-orange-600/20"
        >
          Begin Application <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <footer className="py-12 border-t border-slate-100 text-center">
        <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[1em]">Admission Office • 2026 Enrollment</p>
      </footer>
    </main>
  );
}