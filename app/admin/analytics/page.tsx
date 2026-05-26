"use client";

import {
  BarChart3,
  TrendingUp,
  Truck,
  Users,
  Building2,
  Activity,
  ArrowUpRight,
} from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="space-y-10">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-black">
            Analytics
          </h1>

          <p className="text-zinc-500 mt-2 text-sm">
            Platform performance and logistics insights
          </p>
        </div>

        <button className="bg-orange-500 hover:bg-orange-400 transition px-4 py-2 rounded-md text-black font-bold text-sm">
          Export Report
        </button>
      </div>

      {/* TOP STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <AnalyticsCard
          title="Monthly Revenue"
          value="$248,420"
          growth="+18.2%"
          icon={<TrendingUp className="text-orange-500" />}
        />

        <AnalyticsCard
          title="Completed Trips"
          value="12,483"
          growth="+9.4%"
          icon={<Truck className="text-orange-500" />}
        />

        <AnalyticsCard
          title="Active Drivers"
          value="214"
          growth="+4.1%"
          icon={<Users className="text-orange-500" />}
        />

        <AnalyticsCard
          title="Companies"
          value="27"
          growth="+3 New"
          icon={<Building2 className="text-orange-500" />}
        />

      </div>

      {/* CHART SECTION */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* REVENUE CHART */}
        <div className="xl:col-span-2 bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-md font-bold">
                Revenue Overview
              </h2>

              <p className="text-zinc-500 text-[12px] mt-1">
                Last 6 months performance
              </p>
            </div>

            <BarChart3 className="text-orange-500" size={16} />
          </div>

          {/* FAKE CHART */}
          <div className="h-80 flex items-end gap-4">

            {[40, 65, 52, 80, 74, 95].map((height, i) => (
              <div
                key={i}
                className="flex-1 flex flex-col items-center"
              >
                <div
                  className="w-full bg-orange-500 rounded-t-2xl hover:bg-orange-400 transition-all"
                  style={{
                    height: `${height}%`,
                  }}
                />

                <span className="text-zinc-500 text-sm mt-3">
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun"][i]}
                </span>
              </div>
            ))}

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* DELIVERY SUCCESS */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
            <div className="flex items-center justify-between">
              <h2 className="text-md font-bold">
                Delivery Success
              </h2>

              <Activity className="text-orange-500" />
            </div>

            <div className="mt-8">
              <h3 className="text-md font-black">
                98%
              </h3>

              <p className="text-emerald-500 mt-2 text-[12px]">
                +2.1% this month
              </p>
            </div>
          </div>

          {/* ACTIVE REGIONS */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-md font-bold mb-6">
              Active Regions
            </h2>

            <div className="space-y-4">

              <Region
                name="Nigeria"
                trips="4,240 trips"
              />

              <Region
                name="Ghana"
                trips="2,130 trips"
              />

              <Region
                name="Cameroon"
                trips="1,402 trips"
              />

              <Region
                name="Kenya"
                trips="932 trips"
              />

            </div>
          </div>

        </div>
      </div>

      {/* RECENT PERFORMANCE */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl font-bold">
              Top Performing Companies
            </h2>

            <p className="text-zinc-500 text-sm mt-1">
              Based on completed deliveries
            </p>
          </div>
        </div>

        <div className="space-y-4">

          <CompanyRow
            name="SwiftHaul Logistics"
            deliveries="4,280"
            revenue="$82K"
          />

          <CompanyRow
            name="GreenWay Transport"
            deliveries="3,940"
            revenue="$71K"
          />

          <CompanyRow
            name="Rapid Cargo"
            deliveries="2,710"
            revenue="$58K"
          />

        </div>
      </div>

    </div>
  );
}

/* CARD */
function AnalyticsCard({
  title,
  value,
  growth,
  icon,
}: {
  title: string;
  value: string;
  growth: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-md p-6 hover:border-orange-500/40 transition">

      <div className="flex items-center justify-between">
        <div>
          <p className="text-zinc-500 text-sm">
            {title}
          </p>

          <h2 className="text-md font-black mt-3">
            {value}
          </h2>
        </div>

        <div className="w-14 h-14 rounded-md bg-orange-500/10 flex items-center justify-center">
          {icon}
        </div>
      </div>

      <div className="flex items-center gap-2 mt-6 text-emerald-500">
        <ArrowUpRight size={18} />
        <span className="text-sm">{growth}</span>
      </div>
    </div>
  );
}

/* REGION */
function Region({
  name,
  trips,
}: {
  name: string;
  trips: string;
}) {
  return (
    <div className="flex items-center justify-between bg-zinc-900 rounded-2xl p-4">
      <div>
        <h3 className="font-semibold text-sm">
          {name}
        </h3>

        <p className="text-zinc-500 text-[12px]">
          {trips}
        </p>
      </div>

      <div className="w-3 h-3 rounded-full bg-emerald-500" />
    </div>
  );
}

/* COMPANY ROW */
function CompanyRow({
  name,
  deliveries,
  revenue,
}: {
  name: string;
  deliveries: string;
  revenue: string;
}) {
  return (
    <div className="flex items-center justify-between bg-zinc-900 rounded-2xl p-5 hover:bg-zinc-800 transition">

      <div>
        <h3 className="font-semibold text-sm">
          {name}
        </h3>

        <p className="text-zinc-500 text-[12px]">
          {deliveries} deliveries
        </p>
      </div>

      <div className="text-right">
        <h3 className="font-bold text-orange-500 text-[12px]">
          {revenue}
        </h3>

        <p className="text-zinc-500 text-[12px]">
          Monthly Revenue
        </p>
      </div>

    </div>
  );
}