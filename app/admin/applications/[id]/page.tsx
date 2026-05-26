"use client";

import { useParams } from "next/navigation";
import { Check, X, Globe, Mail, MapPin, Truck } from "lucide-react";
import { useState } from "react";

export default function ApplicationDetailPage() {
  const { id } = useParams();

  const [status, setStatus] = useState<
    "pending" | "approved" | "rejected"
  >("pending");

  // mock data (later replace with DB)
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
    <div className="space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-xl font-black">
          Application Details
        </h1>
        <p className="text-zinc-500 mt-2 text-[12px]">
          Review company before approval
        </p>
      </div>

      {/* MAIN CARD */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-md p-8 space-y-8">

        {/* COMPANY HEADER */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-md font-bold">
              {app.name}
            </h2>

            <p className="text-zinc-400 mt-2 flex items-center gap-2 text-[12px]">
              <Mail size={16} /> {app.email}
            </p>

            <p className="text-zinc-400 flex items-center gap-2 text-[12px]">
              <Globe size={16} /> {app.country}
            </p>

            <p className="text-zinc-400 flex items-center gap-2 text-[12px]">
              <MapPin size={16} /> {app.address}
            </p>
          </div>

          {/* STATUS */}
          <span
            className={`px-4 py-2 rounded-md font-semibold text-[12px] ${
              status === "pending"
                ? "bg-yellow-500/10 text-yellow-400"
                : status === "approved"
                ? "bg-green-500/10 text-green-400"
                : "bg-red-500/10 text-red-400"
            }`}
          >
            {status.toUpperCase()}
          </span>
        </div>

        {/* INFO GRID */}
        <div className="grid grid-cols-3 gap-6">
          <InfoCard label="Fleet Size" value={app.fleetSize} />
          <InfoCard label="Drivers" value={app.drivers} />
          <InfoCard label="Vehicles" value={app.vehicles} />
        </div>

        {/* DESCRIPTION */}
        <div className="bg-zinc-900 rounded-2xl p-6">
          <h3 className="font-semibold mb-2 text-sm">
            Company Description
          </h3>
          <p className="text-zinc-400 text-[12px]">
            {app.description}
          </p>
        </div>

        {/* JOIN DATE */}
        <p className="text-[12px] text-zinc-500">
          Applied on: {app.joinedAt}
        </p>

        {/* ACTION BUTTONS */}
        {status === "pending" && (
          <div className="flex gap-4 pt-4">
            <button
              onClick={() => setStatus("approved")}
              className="flex items-center gap-2 bg-green-500 text-black px-4 py-2 text-[12px] rounded-md font-bold hover:bg-green-400 transition"
            >
              <Check size={18} />
              Approve Company
            </button>

            <button
              onClick={() => setStatus("rejected")}
              className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 text-[12px] rounded-md font-bold hover:bg-red-400 transition"
            >
              <X size={18} />
              Reject Application
            </button>
          </div>
        )}

        {/* AFTER ACTION STATE */}
        {status !== "pending" && (
          <div className="bg-zinc-900 p-5 rounded-2xl text-zinc-400">
            This application has been{" "}
            <span
              className={
                status === "approved"
                  ? "text-green-400"
                  : "text-red-400"
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



/* SMALL REUSABLE CARD */
function InfoCard({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="bg-zinc-900 p-5 rounded-md">
      <p className="text-zinc-500 text-[12px]">{label}</p>
      <h3 className="text-xl font-bold mt-1 text-md">{value}</h3>
    </div>
  );
}