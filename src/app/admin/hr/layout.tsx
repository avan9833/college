"use client";
import React from "react";
import HRSidebar from "@/components/admin/HRSidebar";

/**
 * HR Layout
 * This wrapper provides the responsive sidebar navigation for all HR-related routes.
 * It uses conditional padding to account for the mobile floating menu button.
 */
export default function HRLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-50 relative overflow-hidden">
      {/* 1. Responsive Sidebar Component */}
      <HRSidebar />
      
      {/* 2. Main Content Area */}
      <main className="flex-1 h-screen overflow-y-auto custom-scrollbar">
        <div className="max-w-[1600px] mx-auto">
          {/* pt-24: Padding-top for mobile to clear the floating 'Menu' button.
            lg:pt-0: Removes that padding on desktop where the sidebar is static.
          */}
          <div className="pt-24 lg:pt-0">
            {children}
          </div>
        </div>
      </main>

      {/* Decorative background element for the admin area */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-orange-600/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
    </div>
  );
}