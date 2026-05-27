// components/Features.tsx
"use client";
import { motion } from "framer-motion";
import { Users, Truck, Package, BarChart3, Shield, Clock } from "lucide-react";

const features = [
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Fleet Management",
    desc: "Manage vehicles, track maintenance, and monitor real-time locations.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Driver Management",
    desc: "Onboard drivers, assign deliveries, and track performance.",
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: "Order Tracking",
    desc: "End-to-end delivery tracking with live updates for customers.",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Analytics Dashboard",
    desc: "Powerful insights and reports to optimize your logistics operations.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Role-Based Access",
    desc: "Secure multi-tenant system with admin & company permissions.",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Real-time Updates",
    desc: "Instant notifications and live tracking for all stakeholders.",
  },
];

export default function Features() {
  return (
    <section
      id="services"
      className="py-24 bg-white dark:bg-zinc-950 border-t border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-[11px] text-slate-500 dark:text-zinc-400 mb-5">
            Our Services
          </div>

          <h2 className="text-xl md:text-xl font-bold tracking-tight mb-4">
            Everything you need to run<br />a modern logistics business
          </h2>

          <p className="text-slate-500 dark:text-zinc-400 text-md max-w-2xl mx-auto">
            Built specifically for logistics companies who want efficiency and control.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-xl p-8 hover:border-orange-500/30 group transition-all"
            >
              <div className="text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-slate-500 dark:text-zinc-400 text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}