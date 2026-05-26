"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Truck,
  Users,
  Car,
  BarChart3,
  ChevronRight,
  Settings,
  UserCircle2,
  LogOut,
  ClipboardList,
  Building2,
} from "lucide-react";

type Role = "admin" | "company";

export default function Sidebar({ role }: { role: Role }) {
  const pathname = usePathname();

  const mainLinks =
    role === "admin"
      ?[
  {
    label: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Applications",
    href: "/admin/applications",
    icon: ClipboardList,
  },
  {
    label: "Companies",
    href: "/admin/companies",
    icon: Building2,
  },
  // {
  //   label: "Drivers",
  //   href: "/admin/drivers",
  //   icon: Users,
  // },
  // {
  //   label: "Vehicles",
  //   href: "/admin/vehicles",
  //   icon: Car,
  // },
  {
    label: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3,
  },
 
]
      : [
          {
            label: "Dashboard",
            href: "/company/dashboard",
            icon: LayoutDashboard,
          },
          {
            label: "Drivers",
            href: "/company/drivers",
            icon: Users,
          },
          {
            label: "Vehicles",
            href: "/company/vehicles",
            icon: Car,
          },
          {
            label: "Trips",
            href: "/company/trips",
            icon: Truck,
          },
        ];

  const bottomLinks = [
    {
      label: "Settings",
      href: role === "admin" ? "/admin/settings" : "/company/settings",
      icon: Settings,
    },
    {
      label: "Account",
      href: role === "admin" ? "/admin/account" : "/company/account",
      icon: UserCircle2,
    },
  ];

  const handleLogout = () => {
    // clear auth later
    window.location.href = "/auth/login";
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-zinc-950 border-r border-zinc-800 flex flex-col overflow-hidden">

      {/* Logo */}
      <div className="h-24 flex items-center px-8 border-b border-zinc-800">
        <div className="w-12 h-12 rounded-2xl bg-orange-500 flex items-center justify-center mr-4 shadow-lg shadow-orange-500/30">
          <Truck className="text-black w-6 h-6" />
        </div>

        <div>
          <h1 className="text-md font-black tracking-tight text-white">
            Sharp-Sharp
          </h1>
          <p className="text-xs text-zinc-500 text-[12px]">
            {role === "admin"
              ? "Admin Platform"
              : "Company Platform"}
          </p>
        </div>
      </div>

      {/* MAIN NAV */}
      <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto no-scrollbar">
        {mainLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.label}
              href={link.href}
              className={`group flex text-[12px] items-center justify-between px-5 py-2 rounded-sm transition-all duration-300
              
              ${
                isActive
                  ? "bg-orange-500 text-black shadow-lg shadow-orange-500/20"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-4">
                <link.icon
                  size={14}
                  className={`${
                    isActive
                      ? "text-black"
                      : "text-zinc-500 group-hover:text-orange-500"
                  }`}
                />

                <span className="font-medium text-[12px]">
                  {link.label}
                </span>
              </div>

              <ChevronRight
                size={14}
                className={`transition-transform duration-300 ${
                  isActive
                    ? "translate-x-1"
                    : "text-zinc-600 group-hover:text-white"
                }`}
              />
            </Link>
          );
        })}

        {/* Divider */}
        <div className="mt-24 border-t border-zinc-800" />

        {/* SETTINGS + ACCOUNT */}
        {bottomLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.label}
              href={link.href}
              className={`group flex items-center text-[12px] justify-between px-5 py-2 rounded-sm transition-all duration-300
              
              ${
                isActive
                  ? "bg-orange-500 text-black shadow-lg shadow-orange-500/20"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-4">
                <link.icon
                  size={14}
                  className={`${
                    isActive
                      ? "text-black"
                      : "text-zinc-500 group-hover:text-orange-500"
                  }`}
                />

                <span className="font-medium text-[12px]">
                  {link.label}
                </span>
              </div>

              <ChevronRight
                size={14}
                className={`transition-transform duration-300 ${
                  isActive
                    ? "translate-x-1"
                    : "text-zinc-600 group-hover:text-white"
                }`}
              />
            </Link>
          );
        })}

        {/* LOGOUT */}
        <button
          onClick={handleLogout}
          className="w-full group flex items-center justify-between px-5 py-4 rounded-2xl text-red-400 hover:bg-red-500/10 transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <LogOut size={14} />
            <span className="font-medium text-[12px]">Logout</span>
          </div>

          <ChevronRight size={14} />
        </button>
      </nav>

      {/* PROFILE */}
      <div className="p-5 border-t border-zinc-800">
        <div className="bg-zinc-900 rounded-2xl p-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-md bg-orange-500 flex items-center justify-center text-black font-bold text-lg">
            A
          </div>

          <div>
            <h3 className="font-semibold text-white text-[12px]">
              {role === "admin"
                ? "Admin User"
                : "Company User"}
            </h3>

            <p className="text-[12px] text-zinc-500">
              {role === "admin"
                ? "Super Administrator"
                : "Company Manager"}
            </p>
          </div>
        </div>
      </div>

    </aside>
  );
}