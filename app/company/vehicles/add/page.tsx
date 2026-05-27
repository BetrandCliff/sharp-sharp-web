"use client";

import { useState } from "react";
import { Car, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AddVehiclePage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    plate: "",
    fuel: "",
    location: "",
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
          <Car className="text-orange-500" />
          <h1 className="text-xl font-black">Add Vehicle</h1>
        </div>

      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl border border-border rounded-3xl p-6 md:p-10 space-y-6"
      >
        <input
          name="name"
          placeholder="Vehicle Name"
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-border bg-transparent"
        />

        <input
          name="plate"
          placeholder="Plate Number"
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-border bg-transparent"
        />

        <input
          name="fuel"
          placeholder="Fuel Level"
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-border bg-transparent"
        />

        <input
          name="location"
          placeholder="Location"
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-border bg-transparent"
        />

        <button className="w-full bg-orange-500 hover:bg-orange-600 text-black py-3 rounded-xl font-semibold">
          Add Vehicle
        </button>
      </form>
    </div>
  );
}