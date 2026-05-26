"use client";

import Link from "next/link";
import {
  Building2,
  Users,
  Truck,
  Globe,
  MoreVertical,
} from "lucide-react";

const companies = [
  {
    id: 1,
    name: "SwiftHaul Logistics",
    email: "contact@swifthaul.com",
    country: "Nigeria",
    status: "active",
    drivers: 32,
    vehicles: 18,
    trips: 1240,
  },
  {
    id: 2,
    name: "GreenWay Transport",
    email: "info@greenway.com",
    country: "Ghana",
    status: "active",
    drivers: 18,
    vehicles: 10,
    trips: 540,
  },
];

export default function CompaniesPage() {
  return (
    <div>
      {/* HEADER */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-xl font-black">
            Companies
          </h1>
          <p className="text-zinc-500 mt-2 text-[12px]">
            Manage all approved logistics companies
          </p>
        </div>

        <button className="bg-orange-500 text-black px-4 py-2 text-[12px] rounded-sm font-bold">
          + Add Company
        </button>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {companies.map((c) => (
          <Link
            key={c.id}
            href={`/admin/companies/${c.id}`}
            className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 hover:border-orange-500/40 transition"
          >

            {/* TOP */}
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-md bg-orange-500/10 flex items-center justify-center">
                  <Building2 className="text-orange-500" />
                </div>

                <div>
                  <h2 className="text-sm font-bold">
                    {c.name}
                  </h2>

                  <p className="text-zinc-500 text-[12px]">
                    {c.email}
                  </p>
                </div>
              </div>

              <MoreVertical className="text-zinc-600" />
            </div>

            {/* COUNTRY */}
            <div className="flex items-center gap-2 mt-4 text-zinc-400 text-[12px]">
              <Globe size={16} />
              {c.country}
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-3 mt-6">

              <Stat icon={<Users size={16} />} label="Drivers" value={c.drivers} />
              <Stat icon={<Truck size={16} />} label="Vehicles" value={c.vehicles} />
              <Stat icon={<Building2 size={16} />} label="Trips" value={c.trips} />

            </div>

            {/* STATUS */}
            <div className="mt-6">
              <span className="px-4 py-1 rounded-md text-[12px] bg-green-500/10 text-green-400">
                ACTIVE
              </span>
            </div>

          </Link>
        ))}

      </div>
    </div>
  );
}

/* SMALL REUSABLE STAT COMPONENT */
function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
}) {
  return (
    <div className="bg-zinc-900 rounded-md p-3 text-center">
      <div className="flex justify-center text-orange-500">
        {icon}
      </div>

      <p className="text-xs text-zinc-500 mt-1">{label}</p>
      <p className="font-bold">{value}</p>
    </div>
  );
}