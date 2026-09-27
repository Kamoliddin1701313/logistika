import Sidebar from "@/components/layout/Sidebar";
import React from "react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-slate-900 text-white">
        <Sidebar />
      </aside>
      <main className="flex-1 bg-slate-50 p-6">{children}</main>
    </div>
  );
}

export default DashboardLayout;
