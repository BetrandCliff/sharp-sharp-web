"use client";

import Sidebar from "@/app/components/sidebar";
import { Truck, Clock, MapPin, Plus } from "lucide-react";

const trips = [
  {
    route: "Lagos → Abuja",
    driver: "John Doe",
    status: "In Transit",
  },
  {
    route: "Abuja → Kano",
    driver: "Michael Smith",
    status: "Completed",
  },
  {
    route: "Port Harcourt → Lagos",
    driver: "David Johnson",
    status: "Pending",
  },
];

export default function TripsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex">

  

      {/* MAIN */}
      <main className="flex-1 p-6 md:p-10">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">

          <div>
            <h1 className="text-xl font-black tracking-tight">
              Trips
            </h1>

            <p className="text-muted-foreground mt-2 text-[12px]">
              Monitor all delivery trips
            </p>
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 text-black px-4 py-2 rounded-xl text-[12px] flex items-center gap-3 font-semibold text-sm transition shadow-lg shadow-orange-500/20">
            <Plus size={14} />
            Create Trip
          </button>

        </div>

        {/* TRIPS */}
        <div className="space-y-6">

          {trips.map((trip, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-xl p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300"
            >

              {/* LEFT */}
              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center">
                  <Truck className="text-orange-500" />
                </div>

                <div>
                  <h2 className="text-sm font-bold ">
                    {trip.route}
                  </h2>

                  <p className="text-muted-foreground mt-2 text-[12px]">
                    Driver: {trip.driver}
                  </p>
                </div>

              </div>

              {/* RIGHT */}
              <div className="flex flex-wrap items-center gap-5">

                {/* STATUS */}
                <div
                  className={`px-4 py-2 rounded-xl text-xs font-semibold border ${
                    trip.status === "Completed"
                      ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                      : trip.status === "In Transit"
                      ? "bg-blue-500/10 text-blue-500 border-blue-500/20"
                      : "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Clock size={14} />
                    {trip.status}
                  </div>
                </div>

                {/* TRACKING */}
                <button className="flex items-center gap-2 bg-muted hover:bg-muted/80 border border-border px-4 py-2  rounded-2xl text-[12px] font-medium transition">
                  <MapPin size={14} />
                  Live Tracking
                </button>

              </div>

            </div>
          ))}

        </div>

      </main>
    </div>
  );
}