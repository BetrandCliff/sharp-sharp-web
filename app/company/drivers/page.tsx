

import Sidebar from "@/app/components/sidebar";
import { Plus, Search, Users, Phone, Mail } from "lucide-react";

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
  return (
    <div className="min-h-screen bg-black text-white flex">

      <main className="flex-1  p-10">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-xl font-black">Drivers</h1>
            <p className="text-zinc-500 mt-2 text-[12px]">
              Manage all platform drivers
            </p>
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 text-black px-4 py-2 text-[12px] rounded-md flex items-center gap-3 font-semibold transition-all">
            <Plus /> Add Driver
          </button>
        </div>

        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 mb-8 flex items-center gap-4">
          <Search className="text-zinc-500" />
          <input
            type="text"
            placeholder="Search drivers..."
            className="bg-transparent outline-none w-full text-white"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {drivers.map((driver, index) => (
            <div
              key={index}
              className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 hover:border-orange-500/40 transition-all"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 rounded-md bg-orange-500/10 flex items-center justify-center">
                  <Users className="text-orange-500" />
                </div>

                <span className="px-4 py-2 rounded-md bg-emerald-500/10 text-emerald-500 text-sm">
                  {driver.status}
                </span>
              </div>

              <h2 className="text-2xl font-bold mb-4 text-sm">
                {driver.name}
              </h2>

              <div className="space-y-3 text-zinc-400">
                <div className="flex items-center gap-3 text-[12px]">
                  <Phone size={14} />
                  <span>{driver.phone}</span>
                </div>

                <div className="flex items-center gap-3 text-[12px]">
                  <Mail size={14} />
                  <span>{driver.email}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}



