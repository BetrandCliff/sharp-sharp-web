"use client";

import { motion } from "framer-motion";
import {
  Users,
  Truck,
  Package,
  BarChart3,
  Shield,
  Clock,
} from "lucide-react";

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
      className="py-24 bg-background text-foreground border-t border-border transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-[11px] text-muted-foreground mb-5">
            Our Services
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Everything you need to run
            <br />
            a modern logistics business
          </h2>

          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Built specifically for logistics companies who want efficiency,
            visibility, and complete operational control.
          </p>

        </div>

        {/* FEATURES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-8 hover:border-orange-500/40 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}