// components/Hero.tsx
"use client";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import BetaBadge from "./badge";

export default function Hero() {
  return (
    <section className="pt-32 pb-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
           <BetaBadge />

          <h1 className="text-6xl md:text-3xl font-bold tracking-tighter leading-tight mb-6">
            Logistics, <span className="text-orange-500">Simplified.</span>
          </h1>

          <p className="text-md text-zinc-400 max-w-2xl mx-auto mb-10">
            Connect companies, drivers, and administrators in one powerful platform. 
            Manage deliveries, vehicles, and operations with ease.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/auth/register"
              className="group px-4 py-3 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-2xl flex items-center gap-3 text-sm transition-all hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="group-hover:translate-x-1 transition w-3 h-3" />
            </Link>

            <button className="px-4 py-3 border border-zinc-700 hover:border-zinc-500 rounded-2xl flex items-center gap-3 text-sm transition">
              <Play className="w-4 h-3" /> Watch Demo
            </button>
          </div>

          <p className="text-sm text-zinc-500 mt-6">No credit card required • 14-day free trial</p>
        </div>
      </div>
    </section>
  );
}