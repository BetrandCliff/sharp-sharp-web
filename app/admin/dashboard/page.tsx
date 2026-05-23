// app/admin/dashboard/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Building2, Truck, Package } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-2">Platform Overview</h1>
      <p className="text-zinc-400 mb-10">Welcome back, Admin</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Building2 className="text-orange-500" /> Total Companies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-bold">27</p>
            <p className="text-emerald-500 text-sm mt-2">↑ 3 this week</p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Users className="text-orange-500" /> Active Drivers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-bold">214</p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Truck className="text-orange-500" /> Total Vehicles
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-bold">378</p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Package className="text-orange-500" /> Deliveries Today
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-bold">142</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}