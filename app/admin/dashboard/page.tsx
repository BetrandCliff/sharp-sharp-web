// // app/admin/dashboard/page.tsx
// import Sidebar from "@/app/components/sidebar";

// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// import {
//   Users,
//   Building2,
//   Truck,
//   Package,
//   ArrowUpRight,
// } from "lucide-react";

// export default function AdminDashboard() {
//   return (
//     <div className="min-h-screen bg-black text-white flex">
//       {/* Sidebar */}
//       <Sidebar role="admin" />

//       {/* Main Content */}
//       <main className="flex-1  p-10">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-12">
//           <div>
//             <h1 className="text-5xl font-black tracking-tight">
//               Platform Overview
//             </h1>

//             <p className="text-zinc-500 mt-2 text-lg">
//               Welcome back, Admin
//             </p>
//           </div>

//           <div className="bg-zinc-900 border border-zinc-800 px-5 py-3 rounded-2xl">
//             <p className="text-sm text-zinc-400">
//               Today
//             </p>
//             <h3 className="font-semibold">
//               Monday, May 25
//             </h3>
//           </div>
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
//           {/* Companies */}
//           <Card className="bg-zinc-950 border border-zinc-800 rounded-3xl hover:border-orange-500/40 transition-all duration-300">
//             <CardHeader className="pb-2">
//               <CardTitle className="flex items-center justify-between">
//                 <div className="flex items-center gap-3 text-zinc-300">
//                   <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center">
//                     <Building2 className="text-orange-500" />
//                   </div>

//                   <span>Total Companies</span>
//                 </div>

//                 <ArrowUpRight className="text-zinc-600" />
//               </CardTitle>
//             </CardHeader>

//             <CardContent>
//               <h2 className="text-5xl font-black">
//                 27
//               </h2>

//               <p className="text-emerald-500 mt-3 text-sm">
//                 ↑ 3 added this week
//               </p>
//             </CardContent>
//           </Card>

//           {/* Drivers */}
//           <Card className="bg-zinc-950 border border-zinc-800 rounded-3xl hover:border-orange-500/40 transition-all duration-300">
//             <CardHeader className="pb-2">
//               <CardTitle className="flex items-center justify-between">
//                 <div className="flex items-center gap-3 text-zinc-300">
//                   <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center">
//                     <Users className="text-orange-500" />
//                   </div>

//                   <span>Active Drivers</span>
//                 </div>

//                 <ArrowUpRight className="text-zinc-600" />
//               </CardTitle>
//             </CardHeader>

//             <CardContent>
//               <h2 className="text-5xl font-black">
//                 214
//               </h2>

//               <p className="text-zinc-500 mt-3 text-sm">
//                 Currently active
//               </p>
//             </CardContent>
//           </Card>

//           {/* Vehicles */}
//           <Card className="bg-zinc-950 border border-zinc-800 rounded-3xl hover:border-orange-500/40 transition-all duration-300">
//             <CardHeader className="pb-2">
//               <CardTitle className="flex items-center justify-between">
//                 <div className="flex items-center gap-3 text-zinc-300">
//                   <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center">
//                     <Truck className="text-orange-500" />
//                   </div>

//                   <span>Total Vehicles</span>
//                 </div>

//                 <ArrowUpRight className="text-zinc-600" />
//               </CardTitle>
//             </CardHeader>

//             <CardContent>
//               <h2 className="text-5xl font-black">
//                 378
//               </h2>

//               <p className="text-zinc-500 mt-3 text-sm">
//                 Across all companies
//               </p>
//             </CardContent>
//           </Card>

//           {/* Deliveries */}
//           <Card className="bg-zinc-950 border border-zinc-800 rounded-3xl hover:border-orange-500/40 transition-all duration-300">
//             <CardHeader className="pb-2">
//               <CardTitle className="flex items-center justify-between">
//                 <div className="flex items-center gap-3 text-zinc-300">
//                   <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center">
//                     <Package className="text-orange-500" />
//                   </div>

//                   <span>Deliveries Today</span>
//                 </div>

//                 <ArrowUpRight className="text-zinc-600" />
//               </CardTitle>
//             </CardHeader>

//             <CardContent>
//               <h2 className="text-5xl font-black">
//                 142
//               </h2>

//               <p className="text-emerald-500 mt-3 text-sm">
//                 ↑ 18% from yesterday
//               </p>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Bottom Section */}
//         <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-10">
//           {/* Activity */}
//           <div className="xl:col-span-2 bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
//             <h2 className="text-2xl font-bold mb-6">
//               Recent Activity
//             </h2>

//             <div className="space-y-5">
//               {[
//                 "New logistics company registered",
//                 "Driver John Doe completed delivery",
//                 "Vehicle maintenance scheduled",
//                 "New trip created for Lagos route",
//               ].map((activity, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900"
//                 >
//                   <div className="w-3 h-3 rounded-full bg-orange-500" />

//                   <p className="text-zinc-300">
//                     {activity}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Quick Stats */}
//           <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-3xl p-8 text-black">
//             <h2 className="text-2xl font-black mb-6">
//               Performance
//             </h2>

//             <div className="space-y-6">
//               <div>
//                 <p className="text-black/70 mb-2">
//                   Delivery Success
//                 </p>

//                 <h3 className="text-5xl font-black">
//                   98%
//                 </h3>
//               </div>

//               <div>
//                 <p className="text-black/70 mb-2">
//                   Monthly Revenue
//                 </p>

//                 <h3 className="text-4xl font-black">
//                   $24.5K
//                 </h3>
//               </div>

//               <div>
//                 <p className="text-black/70 mb-2">
//                   Active Routes
//                 </p>

//                 <h3 className="text-4xl font-black">
//                   43
//                 </h3>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

import {
  Users,
  Building2,
  Truck,
  Activity,
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-xl font-black mb-10">
        Admin Overview
      </h1>

      {/* KPI GRID */}
      <div className="grid grid-cols-4 gap-6">
        <Card
          title="Pending Applications"
          value="8"
          icon={<Activity />}
          color="yellow"
        />

        <Card
          title="Active Companies"
          value="27"
          icon={<Building2 />}
          color="orange"
        />

        <Card
          title="Drivers Online"
          value="214"
          icon={<Users />}
          color="green"
        />

        <Card
          title="Active Trips"
          value="43"
          icon={<Truck />}
          color="blue"
        />
      </div>

      {/* ACTIVITY FEED */}
      <div className="mt-10 bg-zinc-950 border border-zinc-800 rounded-md p-6">
        <h2 className="text-md font-bold mb-4">
          Recent Platform Activity
        </h2>

        <ul className="space-y-3 text-zinc-400 text-[12px]">
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
    <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-3xl">
      <div className="flex justify-between items-center">
        <span className="text-zinc-400 text-sm">{title}</span>
        <div className="text-orange-500 ">{icon}</div>
      </div>

      <h2 className="text-2xl font-black mt-4">
        {value}
      </h2>
    </div>
  );
}