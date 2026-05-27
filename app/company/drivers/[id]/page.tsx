"use client";

import { useParams } from "next/navigation";
import Sidebar from "@/app/components/sidebar";
import { Phone, Mail, MapPin, User, FileText } from "lucide-react";
import Link from "next/link";

// MOCK DATA (replace later with API)
const drivers = [
  {
    id: "1",
    name: "John Doe",
    phone: "+234 801 234 5678",
    email: "john@driver.com",
    status: "Active",
    address: "Lagos, Nigeria",
    nid: "NID-123456789",
    vehicle: "Toyota Hiace - ABC 123",
  },
  {
    id: "2",
    name: "Michael Smith",
    phone: "+234 803 555 7788",
    email: "michael@driver.com",
    status: "On Trip",
    address: "Abuja, Nigeria",
    nid: "NID-987654321",
    vehicle: "Ford Transit - XYZ 456",
  },
];

export default function DriverDetailPage() {
  const { id } = useParams();

  const driver = drivers.find((d) => d.id === id);

  if (!driver) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        Driver not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      {/* SIDEBAR */}
      {/* <Sidebar role="company" /> */}

      {/* MAIN */}
      <main className="flex-1 p-6 md:p-10">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-2xl font-black tracking-tight">
              Driver Profile
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              View full driver details
            </p>
          </div>

          <Link
            href="/company/drivers"
            className="text-sm text-orange-500 hover:underline"
          >
            ← Back to Drivers
          </Link>
        </div>

        {/* PROFILE CARD */}
        <div className="grid lg:grid-cols-3 gap-6">

          {/* LEFT */}
          <div className="bg-background border border-border rounded-3xl p-6">
            <div className="w-20 h-20 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-5">
              <User className="text-orange-500" />
            </div>

            <h2 className="text-xl font-bold mb-2">{driver.name}</h2>

            <span
              className={`text-xs px-3 py-1 rounded-md font-semibold ${
                driver.status === "Active"
                  ? "bg-emerald-500/10 text-emerald-500"
                  : driver.status === "On Trip"
                  ? "bg-blue-500/10 text-blue-500"
                  : "bg-zinc-500/10 text-zinc-500"
              }`}
            >
              {driver.status}
            </span>
          </div>

          {/* RIGHT DETAILS */}
          <div className="lg:col-span-2 space-y-6">

            {/* CONTACT */}
            <div className="bg-background border border-border rounded-3xl p-6">
              <h3 className="font-semibold mb-4">Contact Information</h3>

              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Phone size={16} />
                  <span>{driver.phone}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} />
                  <span>{driver.email}</span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={16} />
                  <span>{driver.address}</span>
                </div>
              </div>
            </div>

            {/* DOCUMENTS */}
            <div className="bg-background border border-border rounded-3xl p-6">
              <h3 className="font-semibold mb-4">Documents</h3>

              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center gap-3">
                  <FileText size={16} />
                  <span>NID: {driver.nid}</span>
                </div>
              </div>
            </div>

            {/* VEHICLE */}
            <div className="bg-background border border-border rounded-3xl p-6">
              <h3 className="font-semibold mb-4">Assigned Vehicle</h3>

              <p className="text-muted-foreground">
                {driver.vehicle}
              </p>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}