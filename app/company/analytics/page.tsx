
// app/admin/analytics/page.tsx
import Sidebar from "@/app/components/sidebar";
import {
  TrendingUp,
  DollarSign,
  Truck,
  Users,
} from "lucide-react";

const stats = [
  {
    title: "Revenue",
    value: "$45,200",
    icon: DollarSign,
  },
  {
    title: "Completed Trips",
    value: "1,248",
    icon: Truck,
  },
  {
    title: "Growth",
    value: "+24%",
    icon: TrendingUp,
  },
  {
    title: "Active Users",
    value: "3,422",
    icon: Users,
  },
];

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-black text-white flex">
      
      <main className="flex-1  p-10">
        <h1 className="text-5xl font-black mb-2">
          Analytics
        </h1>

        <p className="text-zinc-500 mb-10">
          Platform insights and performance
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6">
                <stat.icon className="text-orange-500" />
              </div>

              <h2 className="text-zinc-500 mb-3">
                {stat.title}
              </h2>

              <p className="text-4xl font-black">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-gradient-to-br from-orange-500 to-orange-700 rounded-3xl p-10 text-black">
          <h2 className="text-3xl font-black mb-4">
            Monthly Performance
          </h2>

          <p className="text-black/70 text-lg mb-8">
            Logistics activity has increased significantly this month.
          </p>

          <div className="grid grid-cols-3 gap-6">
            <div>
              <p className="text-black/70">Trips</p>
              <h3 className="text-4xl font-black">+18%</h3>
            </div>

            <div>
              <p className="text-black/70">Revenue</p>
              <h3 className="text-4xl font-black">+32%</h3>
            </div>

            <div>
              <p className="text-black/70">Users</p>
              <h3 className="text-4xl font-black">+11%</h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}