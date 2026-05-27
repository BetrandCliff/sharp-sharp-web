"use client";

import Link from "next/link";
import { useTheme } from "next-themes";

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
  const { theme } = useTheme();
  const dark = theme === "dark";

  return (
    <div className="text-foreground">
      <h1 className="text-xl font-black mb-10">
        Company Applications
      </h1>

      <div className="space-y-5">
        {apps.map((app) => (
          <Link
            key={app.id}
            href={`/admin/applications/${app.id}`}
            className="
              block rounded-3xl p-6 border transition
              bg-background border-border
              hover:border-orange-500/40
            "
          >
            <div className="flex justify-between items-center">
              
              {/* LEFT */}
              <div>
                <h2 className="text-sm font-bold text-foreground">
                  {app.name}
                </h2>

                <p className="text-muted-foreground text-sm">
                  {app.email}
                </p>

                <p className="text-muted-foreground text-sm">
                  {app.country} • {app.fleetSize}
                </p>
              </div>

              {/* RIGHT */}
              <div className="text-muted-foreground text-sm">
                Click to review →
              </div>

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}