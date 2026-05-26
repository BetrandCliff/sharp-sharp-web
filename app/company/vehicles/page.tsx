
import Sidebar from "@/app/components/sidebar";
import { Car, Plus, Fuel, MapPin } from "lucide-react";

const vehicles = [
  {
    name: "Toyota Hiace",
    plate: "LAG-221-AA",
    fuel: "75%",
    location: "Lagos",
  },
  {
    name: "Ford Transit",
    plate: "ABJ-334-KL",
    fuel: "60%",
    location: "Abuja",
  },
  {
    name: "Mercedes Sprinter",
    plate: "PH-552-DD",
    fuel: "90%",
    location: "Port Harcourt",
  },
];

export default function VehiclesPage() {
  return (
    <div className="min-h-screen bg-black text-white flex">
     

      <main className="flex-1  p-10">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-xl font-black">Vehicles</h1>
            <p className="text-zinc-500 mt-2 text-[12px]">
              Track and manage vehicles
            </p>
          </div>

          <button className="bg-orange-500 text-black px-4 py-2 rounded-md  text-[12px] flex items-center gap-3 font-semibold">
            <Plus /> Add Vehicle
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {vehicles.map((vehicle, index) => (
            <div
              key={index}
              className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6">
                <Car className="text-orange-500" />
              </div>

              <h2 className=" font-bold mb-2 text-sm">
                {vehicle.name}
              </h2>

              <p className="text-zinc-500 mb-6 text-[12px]">
                {vehicle.plate}
              </p>

              <div className="space-y-3 text-zinc-400">
                <div className="flex items-center gap-3 text-[12px]">
                  <Fuel size={14} />
                  <span>Fuel: {vehicle.fuel}</span>
                </div>

                <div className="flex items-center gap-3 text-[12px]">
                  <MapPin size={14} />
                  <span>{vehicle.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}