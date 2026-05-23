// app/(dashboard)/layout.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Truck, Home, Users, Truck as VehicleIcon, Building2, LogOut, Menu, X } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isAdmin = pathname.startsWith("/admin");

  const adminNav = [
    { href: "/admin/dashboard", label: "Dashboard", icon: Home },
    { href: "/admin/companies", label: "Companies", icon: Building2 },
  ];

  const companyNav = [
    { href: "/company/dashboard", label: "Dashboard", icon: Home },
    { href: "/company/drivers", label: "Drivers", icon: Users },
    { href: "/company/vehicles", label: "Vehicles", icon: VehicleIcon },
  ];

  const navItems = isAdmin ? adminNav : companyNav;

  return (
    <div className="flex h-screen bg-zinc-950">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'block' : 'hidden'} md:block fixed md:relative w-72 bg-zinc-900 border-r border-zinc-800 h-full z-50`}>
        <div className="p-6 flex items-center gap-3 border-b border-zinc-800">
          <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
            <Truck className="w-6 h-6 text-black" />
          </div>
          <h1 className="text-2xl font-bold">SharpLogistics</h1>
        </div>

        <div className="p-6">
          <p className="text-xs uppercase text-zinc-500 mb-4 px-3">
            {isAdmin ? "ADMIN" : "COMPANY"}
          </p>
          
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                    isActive 
                      ? "bg-orange-500 text-black" 
                      : "hover:bg-zinc-800 text-zinc-400 hover:text-white"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="absolute bottom-6 w-full px-6">
          <button className="flex items-center gap-3 px-4 py-3 w-full text-red-400 hover:bg-zinc-800 rounded-2xl text-sm font-medium">
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Navbar */}
        <header className="bg-zinc-900 border-b border-zinc-800 px-6 py-4 flex items-center justify-between md:justify-end">
          <button 
            className="md:hidden text-white"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          
          <div className="flex items-center gap-4">
            <div className="text-sm text-zinc-400">
              {isAdmin ? "Admin Portal" : "Company Portal"}
            </div>
            <div className="w-9 h-9 bg-zinc-700 rounded-full flex items-center justify-center">
              👤
            </div>
          </div>
        </header>

        <main className="p-6 md:p-10">
          {children}
        </main>
      </div>
    </div>
  );
}