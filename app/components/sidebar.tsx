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
      ? [
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
    window.location.href = "/auth/login";
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-56 bg-background border-r border-border flex flex-col transition-colors">

      {/* LOGO */}
      <div className="h-20 flex items-center px-5 border-b border-border">
        <div className="w-8 h-8 rounded-md bg-orange-500 flex items-center justify-center mr-3">
          <Truck className="w-5 h-5 text-black" />
        </div>

        <div>
          <h1 className="text-xs font-bold text-foreground">
            {role === "admin" ? "Sharp-Sharp" : "Royal Supplier"}
          </h1>
          <p className="text-[10px] text-foreground opacity-70">
            {role === "admin" ? "Admin Platform" : "Company Platform"}
          </p>
        </div>
      </div>

      {/* NAV */}
      <nav className="flex-1 px-3 py-4 space-y-2 overflow-y-auto">

        {mainLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.label}
              href={link.href}
              className={`flex items-center justify-between px-3 py-2 rounded-md text-xs transition-colors
              ${
                isActive
                  ? "bg-orange-500 text-black"
                  : "text-foreground hover:bg-card"
              }`}
            >
              <div className="flex items-center gap-3">
                <link.icon
                  size={14}
                  className={
                    isActive ? "text-black" : "text-muted-foreground"
                  }
                />

                <span>{link.label}</span>
              </div>

              <ChevronRight
                size={14}
                className={
                  isActive
                    ? "text-black"
                    : "text-muted-foreground"
                }
              />
            </Link>
          );
        })}

        {/* Divider */}
        <div className="my-4 border-t border-border" />

        {bottomLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.label}
              href={link.href}
              className={`flex items-center justify-between px-3 py-2 rounded-md text-xs transition-colors
              ${
                isActive
                  ? "bg-orange-500 text-black"
                  : "text-foreground hover:bg-card"
              }`}
            >
              <div className="flex items-center gap-3">
                <link.icon
                  size={14}
                  className={
                    isActive ? "text-black" : "text-muted-foreground"
                  }
                />

                <span>{link.label}</span>
              </div>

              <ChevronRight size={14} />
            </Link>
          );
        })}

        {/* LOGOUT */}
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-between px-3 py-3 rounded-md text-xs text-red-500 hover:bg-red-500/10 transition-colors"
        >
          <div className="flex items-center gap-3">
            <LogOut size={14} />
            <span>Logout</span>
          </div>

          <ChevronRight size={14} />
        </button>
      </nav>

      {/* PROFILE */}
      <div className="p-4 border-t border-border">
        <div className="bg-card border border-border rounded-md p-3 flex items-center gap-3">

          <div className="w-9 h-9 rounded-md bg-orange-500 flex items-center justify-center text-black font-bold">
            A
          </div>

          <div>
            <h3 className="text-xs font-semibold text-foreground">
              {role === "admin" ? "Admin User" : "Company User"}
            </h3>

            <p className="text-[10px] text-foreground opacity-70">
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