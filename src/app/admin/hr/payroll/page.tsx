"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Wallet, Download, CreditCard, Search, Filter, CheckCircle2, 
  Clock, FileText, Zap, ShieldCheck, TrendingUp, Loader2
} from "lucide-react";
// Import jsPDF
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const initialPayrollData = [
  { id: 101, name: "Anjali Verma", role: "Chief HR Officer", amount: 145000, status: "Paid", date: "01 Mar 2026" },
  { id: 102, name: "Karan Malhotra", role: "Talent Acquisition Head", amount: 95000, status: "Paid", date: "01 Mar 2026" },
  { id: 103, name: "Ishita Gupta", role: "HR Assistant", amount: 45000, status: "Paid", date: "01 Mar 2026" },
  { id: 201, name: "Vikram Mehta", role: "Director of Placements", amount: 160000, status: "Paid", date: "01 Mar 2026" },
  { id: 202, name: "Siddharth Roy", role: "Corporate Relations Head", amount: 110000, status: "Processing", date: "03 Mar 2026" },
  { id: 302, name: "Arjun Reddy", role: "Senior Counselor", amount: 75000, status: "Pending", date: "--" },
  { id: 401, name: "Suresh Gupta", role: "Chief Finance Officer", amount: 180000, status: "Paid", date: "01 Mar 2026" },
  { id: 501, name: "Dr. Rajesh Sharma", role: "Dean of Academics", amount: 220000, status: "Paid", date: "01 Mar 2026" },
];

export default function PayrollPage() {
  const [payroll, setPayroll] = useState(initialPayrollData);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDispatching, setIsDispatching] = useState(false);

  // --- PDF GENERATION LOGIC ---
  const generateSalaryPDF = (staff: any) => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();

    // 1. Header & Branding
    doc.setFontSize(22);
    doc.setTextColor(234, 88, 12); // Orange-600
    doc.setFont("helvetica", "bold");
    doc.text("VANGUARD UNIVERSITY", pageWidth / 2, 20, { align: "center" });
    
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text("Institutional Payroll Node: VANGUARD_PAYROLL_2026", pageWidth / 2, 28, { align: "center" });
    doc.line(20, 35, pageWidth - 20, 35);

    // 2. Employee Info
    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.text(`Employee Name: ${staff.name}`, 20, 45);
    doc.text(`Designation: ${staff.role}`, 20, 52);
    doc.text(`Employee ID: #V-ADM-${staff.id}`, 20, 59);
    doc.text(`Pay Period: March 2026`, pageWidth - 20, 45, { align: "right" });
    doc.text(`Status: ${staff.status.toUpperCase()}`, pageWidth - 20, 52, { align: "right" });

    // 3. Salary Calculations (Indian Standard Breakdown)
    const gross = staff.amount;
    const basic = gross * 0.40;
    const hra = gross * 0.30;
    const specialAllowance = gross * 0.30;
    
    // Deductions
    const pf = Math.min(basic * 0.12, 1800); // PF capped usually at 1800
    const tds = gross > 100000 ? gross * 0.10 : gross * 0.05; // 10% TDS for high earners
    const profTax = 200;
    const totalDeductions = pf + tds + profTax;
    const netPay = gross - totalDeductions;

    // 4. Tables using autoTable
    autoTable(doc, {
      startY: 70,
      head: [['Earnings Description', 'Amount (INR)']],
      body: [
        ['Basic Salary', `INR ${basic.toLocaleString()}`],
        ['HRA (House Rent Allowance)', `INR ${hra.toLocaleString()}`],
        ['Special Allowance', `INR ${specialAllowance.toLocaleString()}`],
        ['Gross Earnings', `INR ${gross.toLocaleString()}`],
      ],
      headStyles: { fillStyle: 'F', fillColor: [51, 65, 85] }, // Slate-700
    });

    autoTable(doc, {
      startY: (doc as any).lastAutoTable.finalY + 10,
      head: [['Deduction Description', 'Amount (INR)']],
      body: [
        ['Provident Fund (PF)', `INR ${pf.toLocaleString()}`],
        ['Income Tax (TDS)', `INR ${tds.toLocaleString()}`],
        ['Professional Tax', `INR ${profTax.toLocaleString()}`],
        ['Total Deductions', `INR ${totalDeductions.toLocaleString()}`],
      ],
      headStyles: { fillStyle: 'F', fillColor: [234, 88, 12] }, // Orange-600
    });

    // 5. Net Pay Summary
    const finalY = (doc as any).lastAutoTable.finalY + 20;
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text(`NET DISBURSED AMOUNT: INR ${netPay.toLocaleString()}`, 20, finalY);
    
    doc.setFontSize(9);
    doc.setFont("helvetica", "italic");
    doc.text("This is a computer-generated payslip and does not require a physical signature.", 20, finalY + 15);

    // Save PDF
    doc.save(`Payslip_${staff.name.replace(/\s+/g, '_')}_March2026.pdf`);
  };

  const handleRunDispatch = () => {
    setIsDispatching(true);
    setTimeout(() => {
      setPayroll(prev => prev.map(item => ({
        ...item,
        status: "Paid",
        date: item.date === "--" ? "23 Mar 2026" : item.date
      })));
      setIsDispatching(false);
      alert("SUCCESS: All pending transactions finalized.");
    }, 1500);
  };

  const filteredData = payroll.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 lg:p-10 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-black text-slate-900 italic uppercase">Payroll Node</h1>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em]">Secure Fiscal Cluster</p>
        </div>
        <button 
          onClick={handleRunDispatch}
          className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-all flex items-center gap-2"
        >
          {isDispatching ? <Loader2 className="animate-spin" size={18} /> : <Zap size={18} />}
          Run Dispatch
        </button>
      </div>

      {/* Summary Bento */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
          <p className="text-[10px] font-black uppercase text-slate-400">Total Disbursement</p>
          <p className="text-4xl font-black text-slate-900 tracking-tighter italic">₹20.4L</p>
        </div>
        {/* ... add other bento cards here ... */}
      </div>

      {/* Table */}
      <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl overflow-hidden">
        <div className="p-8 border-b border-slate-100 flex justify-between items-center">
            <h2 className="font-black text-slate-900 uppercase italic text-xl">Records</h2>
            <input 
               className="px-6 py-3 bg-slate-50 border-2 border-slate-50 rounded-2xl text-[10px] font-bold"
               placeholder="SEARCH STAFF..."
               onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
        <table className="w-full text-left">
          <thead className="bg-slate-50/50">
            <tr>
              <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-widest">Personnel</th>
              <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-widest">Gross</th>
              <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-widest">Status</th>
              <th className="p-6"></th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50 transition-all group">
                <td className="p-6">
                  <p className="text-sm font-black text-slate-900 uppercase">{item.name}</p>
                  <p className="text-[10px] font-bold text-slate-400">{item.role}</p>
                </td>
                <td className="p-6 font-black italic">₹{item.amount.toLocaleString()}</td>
                <td className="p-6">
                   <span className={`text-[9px] px-3 py-1.5 rounded-xl font-black uppercase border-2 ${
                     item.status === 'Paid' ? 'bg-green-50 text-green-700 border-green-100' : 'bg-orange-50 text-orange-700 border-orange-100'
                   }`}>
                     {item.status}
                   </span>
                </td>
                <td className="p-6 text-right">
                  {item.status === 'Paid' && (
                    <button 
                      onClick={() => generateSalaryPDF(item)}
                      className="p-3 bg-slate-900 text-white rounded-xl hover:bg-orange-600 transition-all flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest mx-auto"
                    >
                      <Download size={14} /> Slip
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}