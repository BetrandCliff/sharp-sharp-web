"use client";

import { motion } from "framer-motion";
import {
  UserPlus,
  Truck,
  PackageCheck,
  BarChart3,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Register Your Company",
    desc: "Create your company account and get verified quickly by our team.",
  },
  {
    number: "02",
    icon: Truck,
    title: "Add Fleet & Drivers",
    desc: "Manage vehicles, onboard drivers, and organize your operations.",
  },
  {
    number: "03",
    icon: PackageCheck,
    title: "Track Deliveries",
    desc: "Dispatch orders and monitor delivery progress in real time.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Scale Efficiently",
    desc: "Use analytics and insights to improve performance and growth.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="py-24 border-t border-border bg-background text-foreground transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">

          <div className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-card text-[11px] text-muted-foreground mb-5">
            How It Works
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-3">
            Simple. Fast. Powerful.
          </h2>

          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-6">
            Get started with Sharp-Sharp in just a few simple steps and
            streamline your logistics operations effortlessly.
          </p>

        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                className="relative group bg-card border border-border hover:border-orange-500/40 rounded-2xl p-7 transition-all duration-300 hover:shadow-lg"
              >
                {/* Number & Icon */}
                <div className="flex items-center justify-between mb-8">

                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
                    <Icon size={20} />
                  </div>

                  <span className="text-[11px] font-medium text-muted-foreground">
                    {step.number}
                  </span>

                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-6">
                  {step.desc}
                </p>

                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-3 w-6 h-px bg-gradient-to-r from-orange-500/40 to-transparent" />
                )}
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}