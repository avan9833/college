// src/components/landing/LandingSections.tsx

export function Hero() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-6xl font-black text-blue-600">Smart College</h1>
      <p className="mt-4 text-gray-600 text-xl">The future of campus management.</p>
    </div>
  );
}

export function Features() {
  return (
    <div className="grid grid-cols-3 gap-10 p-10 bg-gray-50">
      <div className="p-6 bg-white rounded-xl shadow">Attendance</div>
      <div className="p-6 bg-white rounded-xl shadow">Exam Portal</div>
      <div className="p-6 bg-white rounded-xl shadow">Fee Payment</div>
    </div>
  );
}