"use client";

import { useRouter, useParams } from "next/navigation";
import { Car, ArrowLeft, Fuel, MapPin } from "lucide-react";

export default function VehicleDetailPage() {
  const router = useRouter();
  const { id } = useParams();

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

        <div className="flex items-center gap-2">
          <Car className="text-orange-500" />
          <h1 className="text-xl font-black">
            Vehicle Details #{id}
          </h1>
        </div>

      </div>

      {/* CONTENT */}
      <div className="max-w-2xl border border-border rounded-3xl p-6 space-y-6">

        <div className="flex items-center gap-2">
          <Fuel size={16} />
          Fuel Status: 75%
        </div>

        <div className="flex items-center gap-2">
          <MapPin size={16} />
          Location: Lagos
        </div>

      </div>
    </div>
  );
}