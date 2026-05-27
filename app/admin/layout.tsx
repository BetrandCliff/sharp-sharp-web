"use client";

import Sidebar from "@/app/components/sidebar";
import Providers from "../context/themeprovider";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/auth/login");
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-background text-white flex">
      <Sidebar role="admin" />

      <main className="flex-1 ml-72 p-10">
        <Providers>{children}</Providers>
      </main>
    </div>
  );
}