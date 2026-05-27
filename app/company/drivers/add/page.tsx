"use client";

import { useState } from "react";
import { ArrowLeft, Upload } from "lucide-react";
import Link from "next/link";

export default function AddDriverPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [photo, setPhoto] = useState<File | null>(null);
  const [nid, setNid] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // FULL DRIVER DATA
    const driverData = {
      ...form,
      photo,
      nid,
    };

    console.log("CREATE DRIVER:", driverData);

    // TODO: send to API / Supabase
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex">

      <main className="flex-1 p-6 md:p-10">

        {/* HEADER */}
        <div className="flex items-center gap-4 mb-10">
          <Link
            href="/company/drivers"
            className="p-2 rounded-xl border border-border hover:bg-muted transition"
          >
            <ArrowLeft size={18} />
          </Link>

          <div>
            <h1 className="text-xl font-black tracking-tight">
              Add Driver
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              Create driver with documents & profile
            </p>
          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl bg-background border border-border rounded-3xl p-8 space-y-6"
        >

          {/* NAME */}
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-xl bg-background border border-border outline-none focus:border-orange-500"
            required
          />

          {/* PHONE */}
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full px-4 py-3 rounded-xl bg-background border border-border outline-none focus:border-orange-500"
            required
          />

          {/* EMAIL */}
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-xl bg-background border border-border outline-none focus:border-orange-500"
            required
          />

          {/* DRIVER PHOTO */}
          <div className="border border-border rounded-2xl p-5">
            <p className="text-sm text-muted-foreground mb-3">
              Driver Photo
            </p>

            <label className="flex flex-col items-center justify-center gap-2 cursor-pointer border border-dashed border-border rounded-xl py-8 hover:border-orange-500 transition">
              <Upload size={18} />
              <span className="text-sm text-muted-foreground">
                Upload driver profile photo
              </span>

              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) =>
                  setPhoto(e.target.files?.[0] || null)
                }
              />
            </label>

            {photo && (
              <p className="text-xs text-emerald-500 mt-2">
                Selected: {photo.name}
              </p>
            )}
          </div>

          {/* NID UPLOAD */}
          <div className="border border-border rounded-2xl p-5">
            <p className="text-sm text-muted-foreground mb-3">
              National ID (NID)
            </p>

            <label className="flex flex-col items-center justify-center gap-2 cursor-pointer border border-dashed border-border rounded-xl py-8 hover:border-orange-500 transition">
              <Upload size={18} />
              <span className="text-sm text-muted-foreground">
                Upload driver NID (image or PDF)
              </span>

              <input
                type="file"
                accept="image/*,.pdf"
                hidden
                onChange={(e) =>
                  setNid(e.target.files?.[0] || null)
                }
              />
            </label>

            {nid && (
              <p className="text-xs text-emerald-500 mt-2">
                Selected: {nid.name}
              </p>
            )}
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-black py-3 rounded-xl font-semibold transition"
          >
            Create Driver
          </button>

        </form>

      </main>
    </div>
  );
}