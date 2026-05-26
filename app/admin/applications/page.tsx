"use client";

import Link from "next/link";

const apps = [
  {
    id: 1,
    name: "SwiftHaul Logistics",
    email: "contact@swifthaul.com",
    country: "Nigeria",
    fleetSize: "12–25 vehicles",
  },
  {
    id: 2,
    name: "GreenWay Transport",
    email: "info@greenway.com",
    country: "Ghana",
    fleetSize: "5–10 vehicles",
  },
];

export default function ApplicationsPage() {
  return (
    <div>
      <h1 className="text-xl font-black mb-10">
        Company Applications
      </h1>

      <div className="space-y-5">
        {apps.map((app) => (
          <Link
            key={app.id}
            href={`/admin/applications/${app.id}`}
            className="block bg-zinc-950 border border-zinc-800 rounded-3xl p-6 hover:border-orange-500/40 transition"
          >
            <div className="flex justify-between items-center">
              
              {/* LEFT SIDE */}
              <div>
                <h2 className="text-sm font-bold">
                  {app.name}
                </h2>

                <p className="text-zinc-400 text-[12px]">
                  {app.email}
                </p>

                <p className="text-zinc-500 text-[12px]">
                  {app.country} • {app.fleetSize}
                </p>
              </div>

              {/* RIGHT INDICATOR */}
              <div className="text-zinc-500 text-sm">
                Click to review →
              </div>

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}