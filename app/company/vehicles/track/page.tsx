"use client";

import { MapPin, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function TrackVehiclePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-10">

      {/* HEADER */}
      <div className="flex items-center gap-4 mb-10">

        <button
          onClick={() => router.back()}
          className="p-2 rounded-xl border border-border hover:bg-muted transition"
        >
          <ArrowLeft size={18} />
        </button>

        <h1 className="text-xl font-black flex items-center gap-2">
          <MapPin className="text-orange-500" />
          Track Vehicle
        </h1>

      </div>

      {/* CONTENT */}
      <div className="border border-border rounded-3xl p-6 text-center">

        <div className="h-[400px] bg-muted rounded-2xl flex items-center justify-center text-muted-foreground">
          Live Map Coming Soon 🚗📍
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Real-time GPS tracking will be displayed here.
        </p>

      </div>
    </div>
  );
}