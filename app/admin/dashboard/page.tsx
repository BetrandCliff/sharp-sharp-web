"use client";

import { useTheme } from "next-themes";
import {
  Users,
  Building2,
  Truck,
  Activity,
} from "lucide-react";

export default function AdminDashboard() {
  const { theme } = useTheme();

  const dark = theme === "dark";

  return (
    <div className="text-foreground">
      
      <h1 className="text-xl font-black mb-10">
        Admin Overview
      </h1>

      {/* KPI GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <Card
          title="Pending Applications"
          value="8"
          icon={<Activity />}
        />

        <Card
          title="Active Companies"
          value="27"
          icon={<Building2 />}
        />

        <Card
          title="Drivers Online"
          value="214"
          icon={<Users />}
        />

        <Card
          title="Active Trips"
          value="43"
          icon={<Truck />}
        />
      </div>

      {/* ACTIVITY FEED */}
      <div
        className="
          mt-10 p-6 rounded-2xl border
          bg-background border-border
          text-foreground
        "
      >
        <h2 className="text-md font-bold mb-4">
          Recent Platform Activity
        </h2>

        <ul className="space-y-3 text-muted-foreground text-sm">
          <li>✔ SwiftHaul Logistics approved</li>
          <li>✔ New driver registered (John Doe)</li>
          <li>✔ Trip created: Lagos → Abuja</li>
          <li>✔ Vehicle maintenance alert triggered</li>
        </ul>
      </div>
    </div>
  );
}

/* reusable card */
function Card({
  title,
  value,
  icon,
}: any) {
  return (
    <div
      className="
        p-6 rounded-3xl border
        bg-background border-border
        text-foreground
        hover:shadow-md transition
      "
    >
      <div className="flex justify-between items-center">
        <span className="text-muted-foreground text-sm">
          {title}
        </span>

        <div className="text-orange-500">
          {icon}
        </div>
      </div>

      <h2 className="text-2xl font-black mt-4">
        {value}
      </h2>
    </div>
  );
}