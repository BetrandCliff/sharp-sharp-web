"use client";

import {
  Building2,
  Mail,
  Globe,
  Truck,
  Users,
  Car,
  MapPin,
  Plus,
  Trash2,
  Edit,
  ShieldAlert,
} from "lucide-react";

const drivers = [
  {
    id: 1,
    name: "John Doe",
    phone: "+234 801 111 2233",
    status: "Active",
  },
  {
    id: 2,
    name: "Michael Smith",
    phone: "+234 803 555 8899",
    status: "On Trip",
  },
];

const vehicles = [
  {
    id: 1,
    model: "Mercedes Actros",
    plate: "LAG-203-AA",
    status: "Active",
  },
  {
    id: 2,
    model: "Volvo FH16",
    plate: "ABJ-992-KL",
    status: "Maintenance",
  },
];

const trips = [
  {
    id: 1,
    route: "Lagos → Abuja",
    status: "In Transit",
    revenue: "$4,200",
  },
  {
    id: 2,
    route: "Douala → Yaounde",
    status: "Completed",
    revenue: "$1,900",
  },
];

export default function CompanyDetailsPage() {
  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl md:text-xl font-bold tracking-tight">
            Company Details
          </h1>

          <p className="text-zinc-500 mt-2 text-[12px]">
            Manage company operations, drivers, vehicles, and trips
          </p>
        </div>

        <div className="flex gap-3">

          <button className="bg-zinc-900 hover:bg-zinc-800 transition px-4 py-2 rounded-md flex items-center gap-2 text-[12px]">
            <Edit size={18} />
            Edit Company
          </button>

          <button className="bg-red-500 hover:bg-red-400 transition text-white px-4 py-2 rounded-md flex items-center gap-2 text-[12px]">
            <ShieldAlert size={18} />
            Suspend
          </button>

        </div>
      </div>

      {/* COMPANY PROFILE */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">

        <div className="flex items-start justify-between">

          <div className="flex items-start gap-5">

            <div className="w-20 h-20 rounded-md bg-orange-500/10 flex items-center justify-center">
              <Building2 className="text-orange-500 w-10 h-10" />
            </div>

            <div>
              <h2 className="text-md font-semibold">
                SwiftHaul Logistics
              </h2>

              <div className="space-y-2 mt-4 text-zinc-400">

                <div className="flex items-center gap-2 text-[12px]">
                  <Mail size={12} />
                  contact@swifthaul.com
                </div>

                <div className="flex items-center gap-2 text-[12px]">
                  <Globe size={12} />
                  Nigeria
                </div>

                <div className="flex items-center gap-2 text-[12px]">
                  <MapPin size={12} />
                  Lagos, Nigeria
                </div>

              </div>
            </div>

          </div>

          <div className="px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-[12px] font-medium">
            ACTIVE
          </div>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">

          <StatCard
            icon={<Users className="text-orange-500" />}
            title="Drivers"
            value="32"
          />

          <StatCard
            icon={<Car className="text-orange-500" />}
            title="Vehicles"
            value="18"
          />

          <StatCard
            icon={<Truck className="text-orange-500" />}
            title="Trips Completed"
            value="1,240"
          />

        </div>

      </div>

      {/* DRIVERS */}
      <SectionHeader
        title="Drivers"
        button="Add Driver"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

        {drivers.map((driver) => (
          <div
            key={driver.id}
            className="bg-zinc-950 border border-zinc-800 rounded-md p-5"
          >

            <div className="flex items-center justify-between">

              <div>
                <h3 className="text-sm font-semibold">
                  {driver.name}
                </h3>

                <p className="text-zinc-500 text-sm mt-1">
                  {driver.phone}
                </p>
              </div>

              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm">
                {driver.status}
              </span>

            </div>

            <div className="flex gap-3 mt-5">

              <button className="flex-1 text-[12px] bg-zinc-900 hover:bg-zinc-800 transition rounded-md py-3 flex items-center justify-center gap-2">
                <Edit size={16} />
                Edit
              </button>

              <button className="flex-1 text-[12px] bg-red-500/10 hover:bg-red-500/20 text-red-400 transition rounded-md py-3 flex items-center justify-center gap-2">
                <Trash2 size={16} />
                Remove
              </button>

            </div>

          </div>
        ))}

      </div>

      {/* VEHICLES */}
      <SectionHeader
        title="Vehicles"
        button="Add Vehicle"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

        {vehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className="bg-zinc-950 border border-zinc-800 rounded-md p-5"
          >

            <div className="flex items-center justify-between">

              <div>
                <h3 className="text-sm font-semibold">
                  {vehicle.model}
                </h3>

                <p className="text-zinc-500 text-[12px] mt-1">
                  Plate No: {vehicle.plate}
                </p>
              </div>

              <span className="px-3 py-1 rounded-md bg-orange-500/10 text-orange-400 text-[12px]">
                {vehicle.status}
              </span>

            </div>

            <div className="flex gap-3 mt-5">

              <button className="flex-1 bg-zinc-900 hover:bg-zinc-800 transition rounded-md py-3 flex items-center justify-center gap-2 text-[12px]">
                <Edit size={16} />
                Edit
              </button>

              <button className="flex-1 bg-red-500/10 hover:bg-red-500/20 text-red-400 transition rounded-md py-3 flex items-center justify-center gap-2 text-[12px]">
                <Trash2 size={16} />
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>

      {/* TRIPS */}
      <SectionHeader
        title="Trips"
        button="Create Trip"
      />

      <div className="space-y-4">

        {trips.map((trip) => (
          <div
            key={trip.id}
            className="bg-zinc-950 border border-zinc-800 rounded-md p-5 flex items-center justify-between"
          >

            <div>
              <h3 className="text-sm font-semibold">
                {trip.route}
              </h3>

              <p className="text-zinc-500 text-sm mt-1">
                Revenue: {trip.revenue}
              </p>
            </div>

            <div className="flex items-center gap-5">

              <span className="px-4 py-2 rounded-md bg-blue-500/10 text-blue-400 text-sm">
                {trip.status}
              </span>

              <button className="text-zinc-400 hover:text-white transition">
                <Edit size={18} />
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

/* SECTION HEADER */
function SectionHeader({
  title,
  button,
}: {
  title: string;
  button: string;
}) {
  return (
    <div className="flex items-center justify-between">

      <h2 className="text-md font-semibold">
        {title}
      </h2>

      <button className="bg-orange-500 hover:bg-orange-400 transition px-4 py-2 rounded-md text-black font-medium flex items-center gap-2 text-[12px]">
        <Plus size={18} />
        {button}
      </button>

    </div>
  );
}

/* STATS */
function StatCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="bg-zinc-900 rounded-md p-5">

      <div className="flex items-center justify-between">
        <p className="text-zinc-500 text-sm">
          {title}
        </p>

        {icon}
      </div>

      <h3 className="text-sm font-bold mt-4">
        {value}
      </h3>

    </div>
  );
}