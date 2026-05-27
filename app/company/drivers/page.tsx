"use client";

import { useState } from "react";
import Sidebar from "@/app/components/sidebar";
import { Plus, Search, Users, Phone, Mail } from "lucide-react";
import Link from "next/link";

const drivers = [
  {
    name: "John Doe",
    phone: "+234 801 234 5678",
    email: "john@driver.com",
    status: "Active",
  },
  {
    name: "Michael Smith",
    phone: "+234 803 555 7788",
    email: "michael@driver.com",
    status: "On Trip",
  },
  {
    name: "David Johnson",
    phone: "+234 806 777 2211",
    email: "david@driver.com",
    status: "Offline",
  },
];

export default function DriversPage() {
  const [search, setSearch] = useState("");

  const filteredDrivers = drivers.filter((driver) =>
    driver.name.toLowerCase().includes(search.toLowerCase()) ||
    driver.email.toLowerCase().includes(search.toLowerCase()) ||
    driver.phone.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      {/* SIDEBAR */}
      {/* <Sidebar role="company" /> */}

      {/* MAIN */}
      <main className="flex-1 p-6 md:p-10">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">
          <div>
            <h1 className="text-xl font-black tracking-tight">
              Drivers
            </h1>

            <p className="text-muted-foreground mt-2 text-sm">
              Manage all platform drivers
            </p>
          </div>

          <Link href="/company/drivers/add">
            <button className="bg-orange-500 hover:bg-orange-600 text-black px-4 py-2 rounded-xl text-[12px] flex items-center gap-3 font-semibold transition shadow-lg shadow-orange-500/20">
              <Plus size={14} />
              Add Driver
            </button>
          </Link>
        </div>

        {/* SEARCH */}
        <div className="bg-background border border-border rounded-3xl p-5 mb-8 flex items-center gap-4">
          <Search className="text-muted-foreground" />

          <input
            type="text"
            placeholder="Search drivers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none w-full text-foreground placeholder:text-muted-foreground"
          />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredDrivers.length > 0 ? (
            filteredDrivers.map((driver, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-3xl p-6 hover:border-orange-500/40 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300"
              >
                {/* TOP */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-xl bg-orange-500/10 flex items-center justify-center">
                    <Users className="text-orange-500" />
                  </div>

                  <span
                    className={`px-4 py-2 rounded-md text-xs font-semibold ${
                      driver.status === "Active"
                        ? "bg-emerald-500/10 text-emerald-500"
                        : driver.status === "On Trip"
                        ? "bg-blue-500/10 text-blue-500"
                        : "bg-zinc-500/10 text-zinc-500"
                    }`}
                  >
                    {driver.status}
                  </span>
                </div>

                {/* NAME */}
                <h2 className="text-md font-bold mb-5">
                  {driver.name}
                </h2>

                {/* INFO */}
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-center gap-3 text-sm">
                    <Phone size={14} />
                    <span className="text-[12px]">{driver.phone}</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <Mail size={14} />
                    <span className="text-[12px]">{driver.email}</span>
                  </div>
                </div>

                {/* ACTIONS */}
               <div className="flex gap-3 mt-8">

                <Link href={`/company/drivers/${index + 1}`}>
                  <button className="flex-2 bg-orange-500 hover:bg-orange-600 text-black px-3 py-3 rounded-xl text-[12px] font-semibold transition w-full">
                    View Profile
                  </button>
                </Link>

                <Link
                  href="/company/drivers/message"
                  className="flex-1 bg-muted hover:bg-accent border border-border py-3 rounded-xl text-[12px] font-semibold transition flex items-center justify-center"
                >
                  Message
                </Link>

              </div>
              </div>
            ))
          ) : (
            <p className="text-muted-foreground text-sm">
              No drivers found.
            </p>
          )}
        </div>

      </main>
    </div>
  );
}