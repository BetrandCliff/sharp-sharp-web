
import Sidebar from "@/app/components/sidebar";
import { Truck, Clock, MapPin } from "lucide-react";

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
    <div className="min-h-screen bg-black text-white flex">
     

      <main className="flex-1  p-10">
        <h1 className="text-xl font-black mb-2">Trips</h1>
        <p className="text-zinc-500 mb-10 text-[12px]">
          Monitor all delivery trips
        </p>

        <div className="space-y-6">
          {trips.map((trip, index) => (
            <div
              key={index}
              className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 flex items-center justify-between"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center">
                  <Truck className="text-orange-500" />
                </div>

                <div>
                  <h2 className="text-sm font-bold">
                    {trip.route}
                  </h2>

                  <p className="text-zinc-500 mt-2 text-[12px]">
                    Driver: {trip.driver}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-8 text-zinc-400">
                <div className="flex items-center gap-2 text-[12px]">
                  <Clock size={18} />
                  <span>{trip.status}</span>
                </div>

                <div className="flex items-center gap-2 text-[12px]">
                  <MapPin size={18} />
                  <span>Live Tracking</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
