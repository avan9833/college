export default function HRDashboard() {
  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <header className="mb-8">
        <h1 className="text-3xl font-black text-slate-900 italic">HR MANAGEMENT</h1>
        <p className="text-slate-500 font-medium">Welcome back, Administrator. Monitoring staff and payroll.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* HR Specific Stats */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total Employees</p>
          <p className="text-4xl font-black mt-2">142</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Pending Leaves</p>
          <p className="text-4xl font-black mt-2 text-orange-600">12</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Payroll Status</p>
          <p className="text-xl font-black mt-2 text-green-600">DISBURSED</p>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
        <h2 className="font-black text-slate-800 mb-4">RECENT STAFF ACTIVITY</h2>
        <div className="space-y-4">
          {/* Placeholder for employee list or leave requests */}
          <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
            <div>
              <p className="font-bold text-sm">Dr. Sarah Jenkins</p>
              <p className="text-xs text-slate-500">Sick Leave Request - 2 Days</p>
            </div>
            <button className="bg-slate-900 text-white px-4 py-2 rounded text-[10px] font-bold">REVIEW</button>
          </div>
        </div>
      </div>
    </div>
  );
}