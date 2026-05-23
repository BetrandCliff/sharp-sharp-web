// app/company/dashboard/page.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Users, Package, TrendingUp } from "lucide-react";

export default function CompanyDashboard() {
  return (
    <div className="p-8 bg-zinc-950 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-bold">Welcome back, FastHaul</h1>
            <p className="text-zinc-400">Here's what's happening with your logistics today</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-zinc-500">Saturday, May 23 2026</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="pt-6">
              <div className="flex justify-between">
                <div>
                  <p className="text-zinc-400">Active Drivers</p>
                  <p className="text-4xl font-bold mt-2">18</p>
                </div>
                <Users className="w-10 h-10 text-orange-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="pt-6">
              <div className="flex justify-between">
                <div>
                  <p className="text-zinc-400">Vehicles</p>
                  <p className="text-4xl font-bold mt-2">27</p>
                </div>
                <Truck className="w-10 h-10 text-orange-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="pt-6">
              <div className="flex justify-between">
                <div>
                  <p className="text-zinc-400">Pending Orders</p>
                  <p className="text-4xl font-bold mt-2">12</p>
                </div>
                <Package className="w-10 h-10 text-orange-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="pt-6">
              <div className="flex justify-between">
                <div>
                  <p className="text-zinc-400">On-Time Delivery</p>
                  <p className="text-4xl font-bold mt-2">94%</p>
                </div>
                <TrendingUp className="w-10 h-10 text-emerald-500" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}