import Sidebar from "@/app/components/sidebar";
import Link from "next/link";
import { Car, Plus, Fuel, MapPin } from "lucide-react";

const vehicles = [
  {
    id: 1,
    name: "Toyota Hiace",
    plate: "LAG-221-AA",
    fuel: "75%",
    location: "Lagos",
  },
  {
    id: 2,
    name: "Ford Transit",
    plate: "ABJ-334-KL",
    fuel: "60%",
    location: "Abuja",
  },
  {
    id: 3,
    name: "Mercedes Sprinter",
    plate: "PH-552-DD",
    fuel: "90%",
    location: "Port Harcourt",
  },
];

export default function VehiclesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex">

      {/* MAIN */}
      <main className="flex-1 p-6 md:p-10">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">

          <div>
            <h1 className="text-xl font-black tracking-tight">
              Vehicles
            </h1>

            <p className="text-muted-foreground mt-2 text-[12px]">
              Track and manage vehicles
            </p>
          </div>

          {/* ADD VEHICLE */}
          <Link href="/company/vehicles/add">
            <button className="bg-orange-500 hover:bg-orange-600 text-black px-4 py-2 rounded-xl text-[12px] flex items-center gap-3 font-semibold transition-all shadow-lg shadow-orange-500/20">
              <Plus size={18} />
              Add Vehicle
            </button>
          </Link>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-background border border-border rounded-xl p-6 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300"
            >

              {/* ICON */}
              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6">
                <Car className="text-orange-500" size={28} />
              </div>

              {/* NAME */}
              <h2 className="text-sm font-bold mb-2 ">
                {vehicle.name}
              </h2>

              <p className="text-muted-foreground mb-6 text-[12px]">
                {vehicle.plate}
              </p>

              {/* INFO */}
              <div className="space-y-4 text-muted-foreground">

                <div className="flex items-center gap-3 text-[12px]">
                  <Fuel size={14} />
                  <span>Fuel: {vehicle.fuel}</span>
                </div>

                <div className="flex items-center gap-3 text-[12px]">
                  <MapPin size={14} />
                  <span>{vehicle.location}</span>
                </div>

              </div>

              {/* PROGRESS */}
              <div className="mt-6">

                <div className="flex items-center justify-between mb-2">
                  <span className="text-[12px] text-muted-foreground">
                    Fuel Level
                  </span>

                  <span className="text-[12px] font-semibold text-orange-500">
                    {vehicle.fuel}
                  </span>
                </div>

                <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-orange-500 rounded-md"
                    style={{ width: vehicle.fuel }}
                  />
                </div>

              </div>

              {/* ACTIONS */}
              <div className="flex gap-3 mt-8">

                {/* DETAIL PAGE */}
                <Link
                  href={`/company/vehicles/${vehicle.id}`}
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-black py-3 rounded-xl text-[12px] font-semibold transition text-center"
                >
                  View Details
                </Link>

                {/* TRACK PAGE */}
                <Link
                  href={`/company/vehicles/track?id=${vehicle.id}`}
                  className="flex-1 bg-muted hover:bg-muted/80 border border-border py-3 rounded-xl text-[12px] font-semibold transition text-center"
                >
                  Track
                </Link>

              </div>

            </div>
          ))}

        </div>

      </main>
    </div>
  );
}