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
      className="relative py-24 border-t border-border overflow-hidden bg-background text-foreground"
    >
      {/* Background Image */}
      <Image
        src="/images/testimonial/bg.png"
        alt="Testimonials background"
        fill
        className="object-cover opacity-10"
      />

      {/* Theme Overlay */}
      <div className="absolute inset-0 bg-background/90" />

      {/* Orange Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.08),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-[11px] text-muted-foreground mb-5">
            Testimonials
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-3">
            Trusted by logistics teams
          </h2>

          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-6">
            Businesses use Sharp-Sharp to manage deliveries, optimize fleets,
            and streamline operations across their logistics workflow.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              className="bg-card border border-border hover:border-orange-500/40 rounded-2xl p-7 transition-all duration-300 hover:shadow-lg"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-orange-500 text-orange-500"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-sm leading-7 text-muted-foreground mb-8">
                "{testimonial.content}"
              </p>

              {/* User */}
              <div className="flex items-center gap-4">

                <div className="w-11 h-11 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-sm font-semibold text-orange-500">
                  {testimonial.initials}
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    {testimonial.name}
                  </p>

                  <p className="text-xs text-muted-foreground mt-1">
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