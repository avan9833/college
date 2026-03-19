"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function StudentsCornerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const userRole = localStorage.getItem("userRole");

    if (isLoggedIn !== "true" || userRole !== "student") {
      // Redirect to login if not authenticated or not a student
      router.push("/login");
    } else {
      setIsAuthorized(true);
    }
  }, [router]);

  // Show a loading state while checking authorization to prevent content flicker
  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-orange-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-white text-[10px] font-black uppercase tracking-widest opacity-50">Authenticating Vanguard...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}