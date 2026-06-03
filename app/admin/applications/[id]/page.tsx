"use client";

import { useParams } from "next/navigation";
import { Check, X, Globe, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function ApplicationDetailPage() {
  const { id } = useParams();

  const [status, setStatus] = useState<
    "pending" | "approved" | "rejected"
  >("pending");

  const app = {
    id,
    name: "SwiftHaul Logistics",
    email: "contact@swifthaul.com",
    country: "Nigeria",
    address: "Lagos, Nigeria",
    fleetSize: "12–25 vehicles",
    description:
      "Fast-growing logistics company specializing in cross-country freight and last-mile delivery.",
    vehicles: 18,
    drivers: 32,
    joinedAt: "2026-05-20",
  };

  return (
    <div className="space-y-8 text-foreground">

       {/* BREADCRUMB */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">

        <Link href="/admin/dashboard" className="hover:text-orange-500 transition">
          Dashboard
        </Link>

        <span>/</span>

        <Link href="/admin/applications" className="hover:text-orange-500 transition">
          Applications
        </Link>

        <span>/</span>

        <span className="text-foreground font-semibold">
          Company Details
        </span>

      </div>

      {/* HEADER */}
      <div>
        <h1 className="text-xl font-black">
          Application Details
        </h1>

        <p className="text-muted-foreground mt-2 text-sm">
          Review company before approval
        </p>
      </div>

      {/* MAIN CARD */}
      <div className="bg-background border border-border rounded-2xl p-8 space-y-8">

        {/* COMPANY HEADER */}
        <div className="flex justify-between items-start">

          <div>
            <h2 className="text-lg font-bold">
              {app.name}
            </h2>

            <p className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
              <Mail size={14} /> {app.email}
            </p>

            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <Globe size={14} /> {app.country}
            </p>

            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={14} /> {app.address}
            </p>
          </div>

          {/* STATUS */}
          <span
            className={`px-3 py-1 rounded-md text-xs font-semibold
              ${
                status === "pending"
                  ? "bg-yellow-500/10 text-yellow-500"
                  : status === "approved"
                  ? "bg-green-500/10 text-green-500"
                  : "bg-red-500/10 text-red-500"
              }`}
          >
            {status.toUpperCase()}
          </span>
        </div>

        {/* INFO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <InfoCard label="Fleet Size" value={app.fleetSize} />
          <InfoCard label="Drivers" value={app.drivers} />
          <InfoCard label="Vehicles" value={app.vehicles} />
        </div>

        {/* DESCRIPTION */}
        <div className="bg-muted/50 border border-border rounded-2xl p-6">
          <h3 className="font-semibold mb-2 text-sm">
            Company Description
          </h3>
          <p className="text-muted-foreground text-sm">
            {app.description}
          </p>
        </div>

        {/* JOIN DATE */}
        <p className="text-xs text-muted-foreground">
          Applied on: {app.joinedAt}
        </p>

        {/* ACTION BUTTONS */}
        {status === "pending" && (
          <div className="flex gap-4 pt-4">

            <button
              onClick={() => setStatus("approved")}
              className="flex items-center gap-2 bg-green-500 text-black px-4 py-2 text-sm rounded-md font-bold hover:bg-green-400 transition"
            >
              <Check size={16} />
              Approve Company
            </button>

            <button
              onClick={() => setStatus("rejected")}
              className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 text-sm rounded-md font-bold hover:bg-red-400 transition"
            >
              <X size={16} />
              Reject Application
            </button>

          </div>
        )}

        {/* AFTER STATE */}
        {status !== "pending" && (
          <div className="bg-muted border border-border p-5 rounded-2xl text-muted-foreground">
            This application has been{" "}
            <span
              className={
                status === "approved"
                  ? "text-green-500"
                  : "text-red-500"
              }
            >
              {status}
            </span>
            .
          </div>
        )}
      </div>
    </div>
  );
}

/* INFO CARD */
function InfoCard({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="bg-background border border-border p-5 rounded-2xl">
      <p className="text-xs text-muted-foreground">{label}</p>
      <h3 className="text-lg font-bold mt-1">{value}</h3>
    </div>
  );
}