// components/HowItWorks.tsx
"use client";
import { motion } from "framer-motion";
import { UserPlus, Truck, PackageCheck, BarChart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <UserPlus className="w-10 h-10" />,
    title: "Register Your Company",
    desc: "Sign up and get approved by our admin team within 24 hours.",
  },
  {
    number: "02",
    icon: <Truck className="w-10 h-10" />,
    title: "Add Vehicles & Drivers",
    desc: "Build your fleet and onboard your drivers easily.",
  },
  {
    number: "03",
    icon: <PackageCheck className="w-10 h-10" />,
    title: "Create & Track Deliveries",
    desc: "Dispatch orders and monitor everything in real-time.",
  },
  {
    number: "04",
    icon: <BarChart className="w-10 h-10" />,
    title: "Grow Your Business",
    desc: "Use insights and analytics to scale efficiently.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            Simple. Fast. Powerful.
          </h2>
          <p className="text-zinc-400 text-lg">Get started in 4 easy steps</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="relative text-center"
            >
              <div className="mx-auto w-24 h-24 bg-zinc-900 border border-zinc-700 rounded-2xl flex items-center justify-center text-orange-500 mb-6">
                {step.icon}
              </div>
              <div className="text-orange-500 font-mono text-sm mb-2">{step.number}</div>
              <h3 className="text-md font-semibold mb-3">{step.title}</h3>
              <p className="text-zinc-400 text-sm">{step.desc}</p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 right-[-40px] w-20 h-px bg-gradient-to-r from-orange-500/30 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}