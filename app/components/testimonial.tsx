// components/Testimonials.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael Okafor",
    role: "CEO, FastHaul Logistics",
    content:
      "Sharp-Sharp transformed how we manage our fleet. The approval workflow and real-time tracking saved us countless hours.",
    initials: "MO",
  },
  {
    name: "Aisha Bello",
    role: "Operations Manager, PrimeDeliver",
    content:
      "The platform is incredibly intuitive. Our drivers love the mobile experience and we’ve reduced delivery delays by 45%.",
    initials: "AB",
  },
  {
    name: "Emmanuel Adeyemi",
    role: "Founder, SwiftFleet",
    content:
      "Best logistics SaaS I’ve used. The admin panel gives us full control while keeping everything secure.",
    initials: "EA",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-24 border-t border-zinc-800 overflow-hidden"
    >
      {/* BACKGROUND IMAGE */}
      <Image
        src="/images/testimonials/bg.png"
        alt="Testimonials background"
        fill
        className="object-cover opacity-20"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/80" />

      {/* orange glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.10),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-black text-[11px] text-zinc-400 mb-5">
            Testimonials
          </div>

          <h2 className="text-xl font-bold tracking-tight mb-3">
            Trusted by logistics teams
          </h2>

          <p className="text-sm text-zinc-400 max-w-2xl mx-auto leading-6">
            Businesses use Sharp-Sharp to manage deliveries, optimize fleets,
            and streamline operations across their logistics workflow.
          </p>
        </div>

        {/* cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-zinc-950/80 backdrop-blur border border-zinc-800 hover:border-zinc-700 rounded-2xl p-7 transition-all duration-300"
            >
              {/* stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-orange-500 text-orange-500"
                  />
                ))}
              </div>

              {/* content */}
              <p className="text-sm leading-7 text-zinc-300 mb-8">
                "{testimonial.content}"
              </p>

              {/* user */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-sm font-semibold text-orange-400">
                  {testimonial.initials}
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}