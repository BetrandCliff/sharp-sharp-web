// components/Testimonials.tsx
"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Michael Okafor",
    role: "CEO, FastHaul Logistics",
    content: "Sharp-Sharp transformed how we manage our fleet. The approval workflow and real-time tracking saved us countless hours.",
    image: "🧔",
  },
  {
    name: "Aisha Bello",
    role: "Operations Manager, PrimeDeliver",
    content: "The platform is incredibly intuitive. Our drivers love the mobile experience and we’ve reduced delivery delays by 45%.",
    image: "👩🏾",
  },
  {
    name: "Emmanuel Adeyemi",
    role: "Founder, SwiftFleet",
    content: "Best logistics SaaS I’ve used in Nigeria. The admin panel gives us full control while keeping everything secure.",
    image: "👨🏽",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-2xl font-bold tracking-tight mb-4">
            Loved by logistics companies
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-950 border border-zinc-800 p-8 rounded-3xl"
            >
              <div className="text-4xl mb-6">{testimonial.image}</div>
              <p className="text-sm leading-relaxed mb-8 text-zinc-300">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-zinc-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}