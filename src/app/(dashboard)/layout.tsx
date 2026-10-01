"use client";
import Cookies from "js-cookie";

import Sidebar from "@/components/layout/Sidebar";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");

    if (!token) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="flex min-h-screen">
      <div className="fixed top-0 left-0 w-[250px]">
        <Sidebar />
      </div>

      <main className="flex-1 bg-slate-50 ml-[250px]">{children}</main>
    </div>
  );
}

export default DashboardLayout;
