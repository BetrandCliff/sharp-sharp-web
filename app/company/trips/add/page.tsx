"use client";

import { useState } from "react";
import { ArrowLeft, Route, MapPin, Car, User } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AddTripPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    vehicle: "",
    driver: "",
    pickup: "",
    dropoff: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

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
          <Route className="text-orange-500" />
          <h1 className="text-xl font-black">Add Trip</h1>
        </div>

      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl border border-border rounded-3xl p-6 md:p-10 space-y-6"
      >

        {/* TRIP TITLE */}
        <div>
          <label className="text-sm flex items-center gap-2 mb-2">
            <Route size={14} /> Trip Title
          </label>

          <input
            name="title"
            onChange={handleChange}
            placeholder="Lagos → Abuja Delivery"
            className="w-full px-4 py-3 rounded-xl border border-border bg-transparent"
          />
        </div>

        {/* VEHICLE */}
        <div>
          <label className="text-sm flex items-center gap-2 mb-2">
            <Car size={14} /> Vehicle
          </label>

          <input
            name="vehicle"
            onChange={handleChange}
            placeholder="Toyota Hiace"
            className="w-full px-4 py-3 rounded-xl border border-border bg-transparent"
          />
        </div>

        {/* DRIVER */}
        <div>
          <label className="text-sm flex items-center gap-2 mb-2">
            <User size={14} /> Driver
          </label>

          <input
            name="driver"
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl border border-border bg-transparent"
          />
        </div>

        {/* PICKUP */}
        <div>
          <label className="text-sm flex items-center gap-2 mb-2">
            <MapPin size={14} /> Pickup Location
          </label>

          <input
            name="pickup"
            onChange={handleChange}
            placeholder="Lagos Warehouse"
            className="w-full px-4 py-3 rounded-xl border border-border bg-transparent"
          />
        </div>

        {/* DROPOFF */}
        <div>
          <label className="text-sm flex items-center gap-2 mb-2">
            <MapPin size={14} /> Dropoff Location
          </label>

          <input
            name="dropoff"
            onChange={handleChange}
            placeholder="Abuja Center"
            className="w-full px-4 py-3 rounded-xl border border-border bg-transparent"
          />
        </div>

        {/* BUTTON */}
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-black py-3 rounded-xl font-semibold transition">
          Create Trip
        </button>

      </form>
    </div>
  );
}